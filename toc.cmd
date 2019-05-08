pushd %~dp0
cd tools
python mkdocsyml.py --filter "hide_site_name:" "prebuild_index: True"
popd