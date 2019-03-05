pushd %~dp0
cd tools
python mkdocsyml.py --filter "hide_site_name:" "plugins:" "- search:" "prebuild_index: True"
popd