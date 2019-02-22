import os
import re

template_file = "../mkdocs_template.yml"
result_file = "../mkdocs.yml"
toc_folder = "../toc"

include_regex = re.compile(r"([ \t]+)#([a-z0-9]+)", re.IGNORECASE)

def main():
    with open(result_file, "w+", encoding='utf-8') as output:
        with open(template_file, encoding='utf-8') as input:
            for l in input:
                match = include_regex.match(l)
                if match is None:
                    output.write(l)
                else:
                    indent = match.group(1)
                    library = match.group(2)
                    include_library(library, indent, output)

def include_library(library, indent, output):
    with open(toc_folder + "/ses_lib_" + library + ".yml", encoding='utf-8') as input:
        for l in input:
            if l.strip() != "":
                output.write(indent + l)

main()