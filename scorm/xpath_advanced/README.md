<!-- 
script: https://cdn.jsdelivr.net/gh/Inflectra/rapise-documentation/scorm/common/xpathQuiz/xpathQuizz.js

import: https://cdn.jsdelivr.net/gh/Inflectra/rapise-documentation/scorm/common/xpathQuiz/README.md

import: https://cdn.jsdelivr.net/gh/Inflectra/rapise-documentation/scorm/common/codingQuiz/README.md

mode: Textbook

-->

# XPath 1

Single basic selection.

``` xml @xpathQuiz(`Enter XPath to select a bold element:`)
<p _root>
    some
    <b _correct>DOM</b>
</p>
```

## Coding


``` javascript @codingQuiz(`str!="Some string"?"wrong":`)
var str = "Some string'
```

