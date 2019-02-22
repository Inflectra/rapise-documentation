import os
import re

'''
Process SVG: fix titles and links
'''

# dsfsfsfsfsd

title_regex = re.compile(r"[\t ]+\<title\>([a-z 0-9\.\-]+)\</title\>", re.IGNORECASE)

def main():
    file_name = "ObjectNotFoundDT"
    process(file_name)

def process(file_name):
    with open(file_name + "_.svg", "w+", encoding='utf-8') as output:
        with open(file_name + ".svg", encoding='utf-8') as input:
            for l in input:
                match = title_regex.match(l)
                if match is not None:
                    l = l.replace(match.group(1), "")
                l = l.replace("<a xlink:href", "<a target=\"_top\" xlink:href")
                output.write(l)

main()