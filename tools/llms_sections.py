"""
MkDocs hook: writes llms-sections.json, the documentation split into sections for AI search.

Every page is cut at its headings. Each section keeps its Markdown text, cleaned for a language
model: images become their alt text, icons their names, admonitions and content tabs plain
paragraphs, links point to other sections by location. Rapise searches this file
(search_rapise_docs) and reads sections from it (read_rapise_docs_section).

Registered in mkdocs_template.yml under "hooks:", so every build writes <site_dir>/llms-sections.json
and the site publishes it at https://rapisedoc.inflectra.com/llms-sections.json.

Section ids are the ones MkDocs gives the headings (page.toc), so a section's url opens it on the site.
A location is the page's source path without ".md" (AI/ai_dashboard), plus "#<id>" for every section
but a page's first one.
"""
import html
import json
import logging
import os
import posixpath
import re
import unicodedata
from datetime import datetime, timezone
from urllib.parse import unquote

log = logging.getLogger("mkdocs.hooks.llms_sections")

OUTPUT_FILE = "llms-sections.json"
GUIDES = ["llms-ui.txt"]  # files in docs/ whose links are section locations (checked on every build)
GUIDE_LINK_RE = re.compile(r"\]\(([^)\s]+)\)")
FORMAT = "rapise-llms-sections"
FORMAT_VERSION = 1

# Icons that only decorate (release notes, summaries) are dropped; the rest name a button or a mark.
DROPPED_ICONS = {"material-robot-happy-outline", "material-creation-outline", "rocket", "bulb", "screwdriver"}
ICON_WORDS = {"penguin": "(Linux)"}
BRAND_ICON_PREFIXES = ("simple-", "fontawesome-brands-")  # logos next to a product name
ICON_PREFIXES = ("heroicons-outline-", "heroicons-solid-", "fontawesome-solid-", "fontawesome-regular-",
                 "fontawesome-brands-", "fontawesome-inflectra-", "material-", "octicons-", "simple-")

# A backtick fence has no backtick after it (```DoAction``` on its own line is inline code).
FENCE_OPEN_RE = re.compile(r"^\s*(?:(`{3,})[^`]*|(~{3,}).*)$")
FENCE_CLOSE_RE = re.compile(r"^\s*(`{3,}|~{3,})\s*$")
HEADING_RE = re.compile(r"^ {0,3}(#{1,6})(?:[ \t]+(.*?))?[ \t]*#*[ \t]*$")
BLOCK_RE = re.compile(r'^(\s*)(!!!|\?\?\?\+?|===\+?)\s*([\w-]*)\s*(?:"([^"]*)")?\s*$')
ANCHOR_RE = re.compile(r"""<a\s+(?:name|id)\s*=\s*["']([^"']+)["'][^>]*>\s*</a>""", re.I)
ANCHOR_LINE_RE = re.compile(r"""^\s*(?:<a\s+(?:name|id)\s*=\s*["'][^"']+["'][^>]*>\s*</a>\s*)+$""", re.I)
INLINE_CODE_RE = re.compile(r"(`+)(.+?)\1")
MD_IMAGE_RE = re.compile(r"!\[([^\]]*)\]\(\s*<?([^)\s>]*)>?(?:\s+[\"'][^)]*[\"'])?\s*\)")
HTML_IMAGE_RE = re.compile(r"<img\b[^>]*>", re.I)
MD_LINK_RE = re.compile(r"(?<!!)\[((?:[^\[\]]|\[[^\[\]]*\])*)\]\(\s*<?([^)\s>]*)>?(?:\s+[\"'][^)]*[\"'])?\s*\)")
HTML_LINK_RE = re.compile(r"""<a\b[^>]*?\bhref\s*=\s*["']([^"']*)["'][^>]*>(.*?)</a>""", re.I | re.S)
ATTR_LIST_RE = re.compile(r"\{\s*(?:[:#.]|[\w-]+\s*=)[^{}\n]*\}")
ICON_RE = re.compile(r"(?<![\w:]):([a-z][a-z0-9_+-]*):(?![\w:])")
KEYS_RE = re.compile(r"\+\+([^+\s][^\s]*?)\+\+")
COMMENT_RE = re.compile(r"<!--.*?-->", re.S)
LOC_MARK_RE = re.compile("\x01([^\x01\x02]*)\x02([^\x01]*)\x01")
MD_ESCAPE_RE = re.compile(r"\\([\\`*_{}\[\]()#+\-.!|<>])")



class _Fences:
    """Tracks fenced code blocks line by line."""

    def __init__(self):
        self.fence = None

    def code(self, line):
        """True when the line is a fence or inside a fenced block (to be kept as written)."""
        if self.fence:
            m = FENCE_CLOSE_RE.match(line)
            if m and m.group(1)[0] == self.fence[0] and len(m.group(1)) >= len(self.fence):
                self.fence = None
            return True
        m = FENCE_OPEN_RE.match(line)
        if m:
            self.fence = m.group(1) or m.group(2)
            return True
        return False


# Per build: filled by the page events, written by on_post_build.
_state = {}


def _reset():
    _state.clear()
    _state.update(pages={}, nav_paths={}, nav_order={}, known=None)


def on_pre_build(config, **kwargs):
    _reset()


def on_nav(nav, config, files, **kwargs):
    """Remembers each page's place in the navigation: the titles above it and its order."""
    if not _state:
        _reset()

    def walk(items, titles):
        for item in items:
            if getattr(item, "is_section", False):
                walk(item.children, titles + [item.title])
            elif getattr(item, "is_page", False):
                src = item.file.src_uri
                path = [t for t in titles if t and t != "#"] + [item.title or ""]
                _state["nav_order"].setdefault(src, len(_state["nav_order"]))
                # The "#" tab only repeats pages found elsewhere: their own place wins.
                if src not in _state["nav_paths"] or _state["nav_paths"][src][0]:
                    _state["nav_paths"][src] = (bool(titles) and titles[0] == "#", path)

    walk(nav.items, [])
    return nav


def on_page_content(html_text, page, config, files, **kwargs):
    try:
        _state["pages"][page.file.src_uri] = _split_page(page, config, files)
    except Exception as e:  # never break the site build for the AI index
        log.warning("llms-sections: %s skipped: %s", page.file.src_uri, e)
    return html_text


def on_post_build(config, **kwargs):
    pages = _state.get("pages", {})
    if not pages:
        return
    site_url = config.get("site_url") or ""
    order = _state["nav_order"]
    sources = sorted(pages, key=lambda s: (order.get(s, len(order)), s))

    aliases = {}
    for src in sources:
        for anchor, location in pages[src]["aliases"].items():
            aliases[(_location_of(src), anchor)] = location
    page_locations = {_location_of(src) for src in sources}

    unresolved = []
    sections = []
    for src in sources:
        for s in pages[src]["sections"]:
            text = LOC_MARK_RE.sub(lambda m: _resolve(m.group(1), m.group(2), aliases, page_locations,
                                                      unresolved, s["location"]), s["text"])
            text = _tidy(text)
            if not text and not s["title"]:
                continue
            sections.append({
                "location": s["location"],
                "url": site_url + s["url"],
                "path": s["path"],
                "level": s["level"],
                "title": s["title"],
                "text": text,
            })

    data = {
        "format": FORMAT,
        "version": FORMAT_VERSION,
        "generated": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "site": site_url,
        "sections": sections,
    }
    out = os.path.join(config["site_dir"], OUTPUT_FILE)
    with open(out, "w", encoding="utf-8", newline="\n") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

    _check_guide_links(config, {s["location"] for s in sections})

    mismatched = sum(1 for p in pages.values() if p["unmatched"])
    log.info("llms-sections: %d sections from %d pages written to %s", len(sections), len(pages), OUTPUT_FILE)
    if mismatched:
        log.info("llms-sections: %d pages have headings MkDocs did not list; their ids were guessed "
                 "(details with -v)", mismatched)
        for src, p in pages.items():
            for title in p["unmatched"]:
                log.debug("llms-sections: %s: heading not in toc: %s", src, title)
    if unresolved:
        log.info("llms-sections: %d links point to a missing page or anchor; they point to the page instead "
                 "or keep their text only (details with -v)", len(unresolved))
        for where, target in unresolved:
            log.debug("llms-sections: %s: link to %s", where, target)


def _check_guide_links(config, locations):
    """The guides written for the help chat link to sections by location: each must be one of this build."""
    for name in GUIDES:
        path = os.path.join(config["docs_dir"], name)
        if not os.path.exists(path):
            continue
        with open(path, encoding="utf-8") as f:
            text = f.read()
        targets = [t for t in GUIDE_LINK_RE.findall(text) if not re.match(r"^([a-z][a-z0-9+.-]*:|#)", t, re.I)]
        broken = sorted({t for t in targets if t not in locations})
        for t in broken:
            log.warning("llms-sections: %s links to %s, which is not a documentation section", name, t)
        log.info("llms-sections: %s: %d links to sections checked", name, len(targets))


# ---------------------------------------------------------------- page splitting

def _location_of(src):
    return src[:-3] if src.endswith(".md") else src


def _split_page(page, config, files):
    src = page.file.src_uri
    location = _location_of(src)
    page_dir = posixpath.dirname(src)
    if _state.get("known") is None:
        _state["known"] = {f.src_uri for f in files.documentation_pages()}
    known = _state["known"]
    page_path = _state["nav_paths"].get(src, (False, [page.title or location]))[1]
    if not page_path or not page_path[-1]:
        page_path = (page_path or [])[:-1] + [page.title or location]

    lines = _normalize_lines(COMMENT_RE.sub("", page.markdown or ""))

    # Cut at headings (outside code). blocks[0] is the text before the first heading.
    blocks = [{"heading": None, "lines": []}]
    fences = _Fences()
    for line in lines:
        if fences.code(line):
            blocks[-1]["lines"].append(line)
            continue
        h = HEADING_RE.match(line)
        if h:
            blocks.append({"heading": (len(h.group(1)), h.group(2) or ""), "lines": []})
        else:
            blocks[-1]["lines"].append(line)

    toc = _flatten_toc(page.toc)
    unmatched = []
    used_ids = set()
    pos = 0
    headings = blocks[1:]
    for k, b in enumerate(headings):
        level, raw_title = b["heading"]
        key = _title_key(raw_title)
        found = None
        for i in range(pos, len(toc)):
            if _title_key(toc[i][1]) == key:
                found = i
                break
        # A title MkDocs renders differently (code inside a link's attribute, as in kb.md): when the
        # headings left and the toc entries left are as many, they pair up in order.
        if found is None and len(headings) - k == len(toc) - pos:
            found = pos
        if found is not None:
            b["id"], b["title"] = toc[found][0], toc[found][1]
            pos = found + 1
        else:
            b["id"], b["title"] = _slugify(_plain_title(raw_title)), _plain_title(raw_title)
            unmatched.append(raw_title)
        if b["id"] in used_ids:  # guessed ids must stay unique within the page
            n = 1
            while f"{b['id']}_{n}" in used_ids:
                n += 1
            b["id"] = f"{b['id']}_{n}"
        used_ids.add(b["id"])
        b["level"] = level

    # The text before the first heading (e.g. "Summary:" of library pages) belongs to the first section.
    if len(blocks) > 1:
        blocks[1]["lines"] = blocks[0]["lines"] + blocks[1]["lines"]
        blocks = blocks[1:]
    else:
        blocks[0].update(id=None, title=page.title or page_path[-1], level=1)

    sections = []
    aliases = {}
    heading_stack = []  # (level, title) of the headings above the current one
    for index, b in enumerate(blocks):
        first = index == 0
        sec_location = location if first else f"{location}#{b['id']}"
        sec_url = page.url if first else f"{page.url}#{b['id']}"
        if b["id"]:
            aliases[b["id"]] = sec_location

        # An anchor on the line just above a heading names that heading's section, others their own.
        body = b["lines"]
        tail = len(body)
        while tail > 0 and not body[tail - 1].strip():
            tail -= 1
        for i, line in enumerate(body):
            for anchor in ANCHOR_RE.findall(line):
                if i == tail - 1 and ANCHOR_LINE_RE.match(line) and index + 1 < len(blocks):
                    nxt = blocks[index + 1]
                    aliases.setdefault(anchor, f"{location}#{nxt['id']}")
                else:
                    aliases.setdefault(anchor, sec_location)

        while heading_stack and heading_stack[-1][0] >= b["level"]:
            heading_stack.pop()
        path = list(page_path)
        if not first:
            for t in [t for lvl, t in heading_stack if lvl > blocks[0]["level"]] + [b["title"]]:
                if t and t != path[-1]:  # "AI Dashboard" page > "AI Dashboard" heading: once
                    path.append(t)
        heading_stack.append((b["level"], b["title"]))

        sections.append({
            "location": sec_location,
            "url": sec_url,
            "path": path,
            "level": b["level"],
            "title": b["title"] or page_path[-1],
            "text": _clean_text(body, page_dir, location, known, config),
        })
    return {"sections": sections, "aliases": aliases, "unmatched": unmatched}


def _flatten_toc(toc):
    out = []

    def walk(items):
        for item in items:
            out.append((item.id, html.unescape(re.sub(r"<[^>]+>", "", item.title)).replace("\u00b6", "").strip()))
            walk(item.children)

    walk(toc or [])
    return out


def _plain_title(raw):
    t = ATTR_LIST_RE.sub("", raw)
    t = MD_IMAGE_RE.sub("", t)
    t = MD_LINK_RE.sub(lambda m: m.group(1), t)
    t = ICON_RE.sub("", t)
    t = re.sub(r"<[^>]+>", "", t)
    t = re.sub(r"[*`]|(?<!\w)_|_(?!\w)", "", t)
    t = MD_ESCAPE_RE.sub(r"\1", t)
    return re.sub(r"\s+", " ", html.unescape(t)).strip()


def _title_key(title):
    return re.sub(r"[\W_]+", "", _plain_title(title)).lower()


def _slugify(value):
    """Python-Markdown's default toc slugify."""
    value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode("ascii")
    value = re.sub(r"[^\w\s-]", "", value).strip().lower()
    return re.sub(r"[-\s]+", "-", value)


def _normalize_lines(markdown):
    """Expands tabs and turns admonitions and content tabs into plain paragraphs (their bodies dedented)."""
    out = []
    stack = []  # indents of the open admonitions/tabs
    fences = _Fences()
    for line in markdown.replace("\r\n", "\n").split("\n"):
        line = line.expandtabs(4)
        if line.strip():
            indent = len(line) - len(line.lstrip(" "))
            while stack and indent < stack[-1] + 4:
                stack.pop()
                fences.fence = None
            line = line[4 * len(stack):] if stack else line
        else:
            out.append("")
            continue
        if fences.code(line):
            out.append(line)
            continue
        b = BLOCK_RE.match(line)
        if b:
            kind, name, title = b.group(2), b.group(3), b.group(4)
            if kind.startswith("==="):
                label = title or name
                if label.lower() in ("screenshot", "screenshots"):
                    header = None
                elif label.lower() in ("transcript", "transcribe"):
                    header = "Screenshot description:"
                else:
                    header = f"**{label}**"
            else:
                header = f"**{title}**" if title else (f"**{name.capitalize()}:**" if name else None)
            if header:
                out.append(b.group(1) + header)
            stack.append(len(b.group(1)))
            continue
        out.append(line)
    return out


# ---------------------------------------------------------------- text cleaning

def _clean_text(lines, page_dir, location, known, config):
    out = []
    fences = _Fences()
    for line in lines:
        out.append(line if fences.code(line) else _clean_prose(line, page_dir, location, known, config))
    return "\n".join(out)


def _clean_prose(line, page_dir, location, known, config):
    # Inline code stays as written (also inside a link's text); everything else is cleaned.
    codes = []

    def keep(m):
        codes.append(m.group(0))
        return f"\x03{len(codes) - 1}\x03"

    s = _clean_segment(INLINE_CODE_RE.sub(keep, line), page_dir, location, known, config)
    return re.sub("\x03(\\d+)\x03", lambda m: codes[int(m.group(1))], s)


def _clean_segment(s, page_dir, location, known, config):
    if not s.strip():
        return s
    s = ANCHOR_RE.sub("", s)
    s = ATTR_LIST_RE.sub("", s)
    s = ICON_RE.sub(_icon_words, s)
    s = MD_IMAGE_RE.sub(lambda m: _image_words(m.group(1)), s)
    s = HTML_IMAGE_RE.sub(lambda m: _image_words(_attr(m.group(0), "alt")), s)
    s = re.sub(r"<iframe\b.*?(</iframe>|$)", "", s, flags=re.I)
    s = HTML_LINK_RE.sub(lambda m: _link(re.sub(r"<[^>]+>", "", m.group(2)), m.group(1),
                                         page_dir, location, known, config), s)
    s = MD_LINK_RE.sub(lambda m: _link(m.group(1), m.group(2), page_dir, location, known, config), s)
    s = KEYS_RE.sub(lambda m: "+".join(k.capitalize() for k in m.group(1).split("+")), s)
    # Leftover HTML: line breaks and table cells keep their shape, other tags go.
    # A line break inside a Markdown table row would cut the row.
    s = re.sub(r"<br\s*/?>", " " if s.lstrip().startswith("|") else "\n", s, flags=re.I)
    s = re.sub(r"<li\b[^>]*>", "\n- ", s, flags=re.I)
    s = re.sub(r"</t[dh]>", " | ", s, flags=re.I)
    s = re.sub(r"</?(?:p|div|tr)\b[^>]*>", "\n", s, flags=re.I)
    s = re.sub(r"</?(?:span|b|i|u|em|strong|sup|sub|font|center|table|thead|tbody|td|th|ul|ol|li|a|object|code|pre)\b[^>]*>",
               "", s, flags=re.I)
    s = MD_ESCAPE_RE.sub(r"\1", s)
    return html.unescape(s)


def _attr(tag, name):
    m = re.search(name + r"""\s*=\s*["']([^"']*)["']""", tag, re.I)
    return m.group(1) if m else ""


def _image_words(alt):
    """An image is its alt text, unless the alt is only a file name (clip0128, tutorial_pic32)."""
    alt = MD_ESCAPE_RE.sub(r"\1", (alt or "")).strip()
    single = " " not in alt
    if not alt or "_" in alt or (single and (re.search(r"[\d.]", alt) or (alt.islower() and len(alt) > 12))):
        return ""
    return f"(image: {alt})"


def _icon_words(m):
    name = m.group(1)
    if name in DROPPED_ICONS or name.startswith(BRAND_ICON_PREFIXES):
        return ""
    if name in ICON_WORDS:
        return ICON_WORDS[name]
    for prefix in ICON_PREFIXES:
        if name.startswith(prefix):
            words = name[len(prefix):]
            words = re.sub(r"-(outline|alt|\d+)$", "", words).replace("-", " ")
            return f"({words} icon)"
    return m.group(0)  # not an icon shortcode we know: leave the text alone


def _doc_link(text, target):
    """A link to a page of the docs, resolved to a section location in on_post_build."""
    return f"\x01{text}\x02{target}\x01"


def _link(text, target, page_dir, location, known, config):
    """A link to a page of the docs becomes a location, other links keep their URL."""
    text = text.strip()
    target = html.unescape(target.strip())
    if not text:
        return ""
    if not target or re.match(r"^[a-z][a-z0-9+.-]*:", target, re.I):
        return f"[{text}]({target})" if target else text
    path, _, anchor = target.partition("#")
    if not path:
        return _doc_link(text, f"{location}#{anchor}")
    path = unquote(path)
    resolved = posixpath.normpath(posixpath.join(page_dir, path)) if page_dir else posixpath.normpath(path)
    resolved = resolved.lstrip("/")
    candidates = [resolved] if resolved.endswith(".md") else [resolved.rstrip("/") + ".md",
                                                              resolved.rstrip("/") + "/index.md"]
    for c in candidates:
        if c in known:
            loc = _location_of(c)
            return _doc_link(text, f"{loc}#{anchor}" if anchor else loc)
    if resolved.endswith(".md"):
        return _doc_link(text, _location_of(resolved))  # a missing page: reported in on_post_build
    return f"[{text}]({(config.get('site_url') or '') + resolved})"


def _resolve(text, target, aliases, page_locations, unresolved, where):
    page, _, anchor = target.partition("#")
    if page not in page_locations:
        unresolved.append((where, target))
        return text
    if anchor:
        hit = aliases.get((page, anchor))
        if not hit:
            unresolved.append((where, target))
            hit = page
    else:
        hit = page
    return f"[{text}]({hit})"


def _tidy(text):
    text = "\n".join(l.rstrip() for l in text.split("\n"))
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()
