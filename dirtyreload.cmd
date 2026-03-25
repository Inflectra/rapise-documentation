rem call toc.cmd

rem echo Calling mkdocs serve

pushd %~dp0\tools

call python mkdocsyml.py --filter "hide_site_name:" "prebuild_index: True"

popd



mkdocs serve --dirtyreload