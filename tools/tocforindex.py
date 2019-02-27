import os
import re

template_file = "../mkdocs.yml"
result_file = "../toc.md"

# - 'Rapise User''s Guide':
#       - 'Company & Copyright': 'Guide/company__copyright.md'
entry_regex = re.compile(r"([ \t]*)\- \'([a-z0-9'\-& :]+)\':( \'([a-z0-9_/\.]+)\')?", re.IGNORECASE)

def main():
    with open(result_file, "w+", encoding='utf-8') as output:
        with open(template_file, encoding='utf-8') as input:
            for l in input:
                match = entry_regex.match(l)
                if match is not None:
                    indent = match.group(1).replace("\t", "    ")
                    title = match.group(2)
                    link = ""
                    if title == "UITAP":
                        output.write("- [UITAP](http://www.uitestingplayground.com/)\n")
                        continue
                    if match.group(4) is not None:
                        link = match.group(4).replace(".md", "/")
                    if len(link) > 0:
                        output.write(indent + "- [" +  title + "](/" + link + ")\n")
                    else:
                        output.write(indent + "- " + title + "\n")

main()