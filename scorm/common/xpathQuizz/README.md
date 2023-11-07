<!--

author: Alexey Grinevich
date: 2023-11-07
mode: Textbook

script: xpathQuizz.js

@xpathQuiz: @xpathQuiz_(@uid,`@0`,```@1```)

@xpathQuiz_
<div id="domq_@0">

<lia-keep>
    <iframe id="frame_domq_@0" width="100%" scrolling="no"/>
</lia-keep>

<!-- data-showGutter="true" -->
``` xml
@2
```

<script>

const id = '@0';
setTimeout(()=>prefill('domq_'+id),150)
"LIA: stop"
</script>

@1

<!-- data-solution-button="off"
    data-disable-navigation="true"
 -->
[[*]]
<script>
    validateXPath('@0', '@input', send)
</script>

</div>

@end

-->

# Intro

This \@xpathQuiz allows generation of XPath quizzes.

<code>
``` xml \@xpathQuiz(`Enter XPath to select a bold element:`)
<p _root>
    some
    <b _correct>DOM</b>
</p>
```
</code>


* `@xpathQuiz` accepts one parameter - text to show as a question.
* `_root` attribute tells what to assume as DOM root (usually it is the first element). If it is avoided, the whole DOM tree will be shown (starting from `<html>``).
* `_correct` should mark all nodes that should be found by XPath. There must be at least one `_correct` node for the Quizz to make sense.


# XPath 1

Single basic selection.

``` xml @xpathQuiz(`Enter XPath to select a bold element:`)
<p _root>
    some
    <b _correct>DOM</b>
</p>
```

# XPath 2

Single item selection.

``` xml @xpathQuiz(`Select a Plum:`)
<ul _root>
    <li>Carrot</li>
    <li _correct>Plum</li>
    <li>Apple</li>
</ul>
```

# XPath 3

``` xml @xpathQuiz(`Select all fruits:`)
<ul _root>
    <li _correct>Carrot</li>
    <li _correct>Plum</li>
    <li _correct>Apple</li>
</ul>
```

