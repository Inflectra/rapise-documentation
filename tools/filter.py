import collections
import math
import os
import re
import shutil

src_folder = "../docx"
dst_folder = "../docx1"


def main():
    process_all()

def process_all():
    files = os.listdir(src_folder)
    for f in files:
        if f.endswith(".docx"):
            process(f)

def process(f_name):
    print(f_name)
    md_name = f_name.replace(".docx", ".md")
    with open("../docs/Guide/" + md_name, encoding='utf-8') as input:
        for l in input:
            if l.find("+---") >= 0:
                src_file = src_folder + "/" + f_name
                dst_file = dst_folder + "/" + f_name
                shutil.copyfile(src_file, dst_file)
                break
main()