import collections
import math
import os
import re
import shutil

src_folder = "../docs/Manuals"
dst_folder = "../docs/Manuals/img"


def main():
    if not os.path.isdir(dst_folder):
        os.mkdir(dst_folder)
    #f_name = "analog_recording"
    #process(f_name)
    process_all()

def process_all():
    files = os.listdir(src_folder)
    for f in files:
        if not f.endswith(".md") and not f == "img":
            process(f)

def process(f_name):
    print(f_name)
    files = os.listdir(src_folder + "/" + f_name + "/media")
    for f in files:
        src_file = src_folder + "/" + f_name + "/media/" + f
        print(src_file)
        dst_file = dst_folder + "/" + f_name + f.replace("image", "")
        print(dst_file)
        shutil.copyfile(src_file, dst_file)

main()