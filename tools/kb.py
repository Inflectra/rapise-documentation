import urllib.request
import lxml.etree
import re

## Get XML file using Rapise Spy. Just saving HTML does not work because it is not a valid XML.

url = "https://www.inflectra.com/Support/KnowledgeBase/rapise/List.aspx"
list_file_name = "List.xml"
kb_file_name = "kb.md"

wspace_regex = re.compile(r"[ \t\n]+", re.IGNORECASE)
kbno_regex = re.compile(r"KB[0-9]+", re.IGNORECASE)

def extract_kbs():
    with open(kb_file_name, "w", encoding='utf-8') as output:
        output.write("# Knowledge Base\n\n## Topics\n\n")
        tree = lxml.etree.parse(list_file_name)    
        headers = tree.xpath("//h5[@class='mb0']/a")
        for h in headers:
            title = h.text.strip()
            href =  "https://www.inflectra.com" + h.attrib["href"]
            m = kbno_regex.search(href)
            kbno = m.group(0)
            p = h.xpath("../..//div[1]")
            if len(p) > 0:
                text =  (''.join(p[0].itertext())).strip()
                text = wspace_regex.sub(" ", text)
            else:
                text = ""
            output.write("### [" + kbno + "](" + href + ") " + title + "\n\n")
            output.write(text + "\n\n")

extract_kbs()
