# Tools in this folder

## tocforindex.py

Builds table of contents for `../docs/index.md`. Generates result into `../toc.md`.

## kb.py

Builds KB topics list for `../docs/Manuals/kb.md`. Generates result into `../kb.md`. Takes input from `list.xml`. To get this file:

1. In Chrome/FF navigate to https://www.inflectra.com/Support/KnowledgeBase/rapise/List.aspx
2. Attach with Rapise Web Spy and save the DOM tree into `list.xml`.

## unusedimgs.py

Generates the list of unused images to console. Copy-paste generated del commands to remove the files.

## checklinks.py

Generates the list of broken links to console.

## liblist.py

Generates list of library links for `../docs/Guide/recording_library.md`

## llms_sections.py

MkDocs hook, registered under `hooks:` in `../mkdocs_template.yml`. Every build (`build.cmd`, `buildlocal.cmd`, `publish.cmd`, `serve.cmd`) writes `llms-sections.json` to the site root, so it is published at https://rapisedoc.inflectra.com/llms-sections.json. Rapise searches it to answer questions about Rapise from the documentation.

The file holds every page cut at its headings, in navigation order. Each section has:

| Field | Meaning |
|---|---|
| `location` | Source path without `.md`, plus `#<heading id>` for all but a page's first section: `AI/ai_dashboard#how-to-open` |
| `url` | The section on the site |
| `path` | Navigation titles, then the headings above it: `["AI", "AI Dashboard", "How to Open"]` |
| `level` | Heading level (1-6). The sections after it with a higher level are its subsections |
| `title` | Heading text |
| `text` | Markdown of the section without its heading. Images become `(image: <alt text>)` (alt texts that are file names are dropped), admonitions and content tabs become plain paragraphs (a `Screenshot`/`Transcript` tab pair becomes the image and `Screenshot description:`), links to other pages point to their `location` |

The build log says how many sections were written and how many links point to a missing page or anchor; `mkdocs build -v` lists those links.

`docs/llms-ui.txt` is a guide to the Rapise UI and workflows written for the help chat. Its links are section locations (`[Object Tree](Guide/object_tree#filtering)`); the hook checks them on every build and logs a warning for each link that is not a section. When a heading in a linked section changes, update the guide.
