from lxml import etree
import collections
import math
import os
import re

def main():
    tree = etree.parse("rapise_content.htm")
    root = tree.xpath('//ul[@id="toc"]')
    node = root[0]
    for child in node:
        process_node(child, "")

def process_node(node, indent):
    # Id
    #print(node.attrib["id"])
    # Title
    span = node.xpath("./a/span")[0]
    title = span.text
    # Link
    a = node.xpath("./a")[0]
    link = ""
    if "href" in a.attrib:
        href = a.attrib["href"]
        if href[0] == '-':
            href = href[1:]
        link = " 'Guide/" + href.replace(".htm", ".md") + "'"
    # SubTopics
    topics = node.xpath("./ul")
    if len(topics) > 0 and len(link) > 0:
        print(indent + "- '" + title + "':")
        print("    " + indent + "- '" + title + "':" + link)
    else:
        print(indent + "- '" + title.replace("'", "''") + "':" + link)
    for t in topics:
        for child in t:
            process_node(child, indent + "    ")

main()