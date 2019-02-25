pushd %~dp0

call version.cmd


python ./tools/mkdocs2pandoc.py --width 120 -o temp.pd

pandoc -f markdown-markdown_in_html_blocks+raw_html+implicit_figures+grid_tables+table_captions --reference-doc=tools/custom-reference.docx --toc --toc-depth=3 -s temp.pd -o rapise_%VER%.docx

del /f/q temp.pd


popd