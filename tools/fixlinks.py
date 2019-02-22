import collections
import math
import os
import re

src_folder = "../docs/Guide"
dst_folder = "../UpdatedFiles"

link_regex = re.compile(r"\[[^\]]*\]\([^\)]+\)", re.IGNORECASE)
ref_regex = re.compile(r"\[([^\]]*)\]\(([^\)]+)\)", re.IGNORECASE)

def main():
    file_name = "menu_and_toolbars.md"
    process(file_name)
    #process_all()

def process_all():
    files = os.listdir(src_folder)
    for f in files:
        if f.endswith(".md"):
            process(f)

def process(file_name):
    with open(dst_folder +"/" + file_name, "w+", encoding='utf-8') as output:
        with open(src_folder + "/" + file_name, encoding='utf-8') as input:
            for line in input:
                links = link_regex.findall(line)
                if len(links) > 0:
                    for link in links:                
                        print(link)
                        match = ref_regex.match(link)
                        title = match.group(1)
                        href = match.group(2)
                        if (href.startswith("../") and href.endswith("/")):
                            newref = href[3:-1] + ".md"
                            print(newref)
                            line = line.replace(link, "[" + title + "](" + newref +")")
                output.write(line)
main()