import os
import re
import argparse


parser = argparse.ArgumentParser(description='Parse filter strings')
parser.add_argument('--filters', metavar='f', type=str, nargs='*',
                   help='lines to filter')
parser.add_argument('--output', metavar='o', type=str, default="../mkdocs.yml", help='Save output to')


args = parser.parse_args()

print('filters: ')
print(args.filters)

template_file = "../mkdocs_template.yml"
result_file = args.output
toc_folder = "../toc"

print('Saving output to: '+result_file)

include_regex = re.compile(r"([ \t]+)#([a-z0-9]+)", re.IGNORECASE)

def main():
    skip_prefix = None
    with open(result_file, "w+", encoding='utf-8') as output:
        with open(template_file, encoding='utf-8') as input:
            for l in input:
                
                if skip_prefix!=None:
                    if l.startswith(skip_prefix):
                        continue
                    else:
                        skip_prefix = None
                
                match = include_regex.match(l)
                if match is None:
                      if args.filters is None or not any(substring in l for substring in args.filters):
                        output.write(l)
                      else:
                        skip_prefix = l[:len(l) - len(l.lstrip())]
                        if len(skip_prefix)==0:
                            skip_prefix = None
                        print("Skip filtered: ",l,"Prefix: ",skip_prefix)
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

print('Done saving output to: '+result_file)
