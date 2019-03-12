import os
import re

root_folder = "../docs"
src_folder = root_folder + "/Guide"
link_regex = re.compile(r"\[[^\]]*\]\([^\)]+\)", re.IGNORECASE)
ref_regex = re.compile(r"\[([^\]]*)\]\(([^\)]+)\)", re.IGNORECASE)

def main():
    #process("dynamics-crm.md")
    process_all()

def process_all():
    files = os.listdir(src_folder)
    for f in files:
        if f.endswith(".md") and f != "rapise_kwindex.md" and f != "rapise_content.md":
            process(f)    

def process(file_name):
    with open(src_folder + "/" + file_name, encoding='utf-8') as input:
        for line in input:
            links = link_regex.findall(line)
            if len(links) > 0:
                for link in links:
                    match = ref_regex.match(link)
                    title = match.group(1)
                    href = match.group(2)

                    anchor_pos = href.find("#")
                    if anchor_pos != -1:
                        href = href[:anchor_pos]

                    if href.startswith("/") and href.endswith(".md"):
                        path = root_folder + href
                    elif href.startswith("/") and href.endswith("/"):
                        path = root_folder + href[:-1] + ".md"
                    elif href.startswith("../") and href.endswith(".md"):
                        path = src_folder + "/" + href
                    elif href.startswith("../") and href.endswith("/"):
                        path = src_folder + "/" + href[3:-1] + ".md"
                    elif href.startswith("./img/"):
                        path = src_folder + "/" + href[2:]
                    elif href.endswith(".md"):
                        path = src_folder + "/" + href
                    else:
                        path = "?" + href

                    if path.startswith("?http") or path.startswith("?chrome") or path == "?":
                        continue

                    if not os.path.exists(path):
                        print(file_name + ":    " + path + "    " + line)

main()

