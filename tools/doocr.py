import subprocess
import os

'''
OCR all images in the folder
'''

src_folder = "../docs/Guide/img"
dst_folder = "../ocr"

def main():
    #file_name = "tutorial_java_testing3.png"
    #process(file_name)
    process_all()

def process_all():
    files = os.listdir(src_folder)
    for f in files:
        if f.endswith(".png"):
            process(f)    

def process(file_name):
    subprocess.call(['tesseract.exe', src_folder + "/" + file_name, dst_folder + "/" + file_name.replace(".png", "")])

main()