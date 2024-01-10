pushd %~dp0

rem note! don't forget to rebuild site before running this one (documents refer to images from site/ subfolder)

call version.cmd
call toc.cmd

cd tools
python mkdocsyml.py --output ../mkdocspdf.yml --filters "'UITAP'" "repo_name:" "repo_url:" "google_analytics:" "pymdownx.emoji:"
popd

python ./tools/mkdocs2pandoc.py --config-file mkdocspdf.yml --width 120 -o temp.pd

pandoc --verbose -f markdown+grid_tables+table_captions --reference-doc=tools/custom-reference.docx --toc --toc-depth=3 -s temp.pd -o rapise_%VER%.docx

rem del /f/q temp.pd

popd