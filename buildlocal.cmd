pushd %~dp0
cd tools
call python mkdocsyml.py --output ../mkdocslocal.yml --filters "'UITAP'" "repo_name:" "repo_url:" "google_analytics:" || echo "Python script failed"
popd

call mkdocs build --config-file mkdocslocal.yml --clean

del /s/f/q HelpSite.zip

pushd %~dp0\tools

"c:\Program Files\7-Zip\7z.exe" a -r "%~dp0HelpSite.zip" "%~dp0site\*"

popd
