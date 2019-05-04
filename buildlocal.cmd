pushd %~dp0
cd tools
python mkdocsyml.py --output ../mkdocslocal.yml --filters "'UITAP'" "repo_name:" "repo_url:" "google_analytics:"
popd

mkdocs build --config-file mkdocslocal.yml --clean

copy /y inflectra_mkdocs\search\* site\search\

del /s/f/q HelpSite.zip

pushd %~dp0\tools

cscript.exe zip.vbs "%~dp0site\" "%~dp0HelpSite.zip"

popd
