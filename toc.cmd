pushd %~dp0\tools
call python mkdocsyml.py --filter "hide_site_name:" "prebuild_index: True"

echo "#######done mkdocs.py"
popd