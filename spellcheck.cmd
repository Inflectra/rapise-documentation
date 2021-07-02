rem <!-- /* cSpell:disable */ -->
rem Bad Text
rem <!-- /* cSpell:enable */ -->

call cspell lint docs/**/*.md >spellcheck.log 2>&1
powershell -command "Get-Content spellcheck.log -Tail 1"