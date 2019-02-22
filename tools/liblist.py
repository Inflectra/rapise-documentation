import os
import re

template_file = "../mkdocs_template.yml"
result_file = "../liblist.md"
toc_folder = "../toc"

include_regex = re.compile(r"([ \t]+)#([a-z0-9]+)", re.IGNORECASE)

write_mode = False

def main():
    with open(result_file, "w+", encoding='utf-8') as output:
        with open(template_file, encoding='utf-8') as input:
            for l in input:
                match = include_regex.match(l)
                if match is None:
                    write(output, l)
                else:
                    indent = match.group(1).replace("\t", "    ")
                    library = match.group(2)
                    include_library(library, indent, output)

def include_library(library, indent, output):
    with open(toc_folder + "/ses_lib_" + library + ".yml", encoding='utf-8') as input:
        for l in input:
            if l.strip() != "":
                if l.find(".md") != -1:
                    l = l.replace("- '", "- [")
                    l = l.replace("': ", "]")
                    l = l.replace("'Libraries/", "(/Libraries/")
                    l = l.replace(".md'", "/)")
                else:
                    l = l.replace("':", "](/Libraries/ses_lib_" + library + "/)")
                    l = l.replace("'", "[")
                    output.write(l)
                #output.write(indent + l)

def write(output, l):
    global write_mode
    if (l.startswith("-Libraries")):
        write_mode = True
    if (l.startswith("-Manuals")):
        write_mode = False

    if write_mode is True:
        output.write(l.replace("'", ""))

main()