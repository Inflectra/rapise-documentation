rem call toc.cmd

rem echo Calling mkdocs serve

pushd %~dp0\tools

python mkdocsyml.py --filter "hide_site_name:" "prebuild_index: True"

echo "AAAAAAAA"

popd



mkdocs serve --dirtyreload