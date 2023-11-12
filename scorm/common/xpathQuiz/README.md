<!--

author: Alexey Grinevich
date: 2023-11-07
mode: Textbook

script: xpathQuiz.js

link: ./xpathQuiz.css

@xpathQuiz: @xpathQuiz_(@uid,`@0`,```@1```,false)

@cssQuiz: @xpathQuiz_(@uid,`@0`,```@1```,true)

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
    const inp = `@input`;
    validateXPath('@0', inp, send, @3)
</script>

</div>

@end

@xpathExample: @xpathExample_(@uid,`@0`,```@2```,`@1`,false)

@cssExample: @xpathExample_(@uid,`@0`,```@2```,`@1`,true)

@xpathExample_
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

<!-- data-showGutter="false" -->
``` xpath
@3
```
<script>
  const input = `@input`;
  checkXPath(`@0`, input, send, @4);
  ""
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
* `_correct` should mark all nodes that should be found by XPath. There must be at least one `_correct` node for the Quiz to make sense.

# XPath Quiz 1

Single basic selection.

``` xml @xpathQuiz(`Enter XPath to select a bold element:`)
<p _root>
    some
    <b _correct>DOM</b>
</p>
```

# XPath Quiz 2

Single item selection.

``` xml @xpathQuiz(`Select a Plum:`)
<ul _root>
    <li>Carrot</li>
    <li _correct>Plum</li>
    <li>Apple</li>
</ul>
```

# XPath Quiz 3

``` xml @xpathQuiz(`Select all fruits:`)
<ul _root>
    <li _correct>Carrot</li>
    <li _correct>Plum</li>
    <li _correct>Apple</li>
</ul>
```

# XPath Quiz 4

``` xml @xpathQuiz(`Select a plum:`)
<ul _root>
    <li id="carrot">Carrot</li>
    <li _correct id="plum">Plum</li>
    <li id="apple">Apple</li>
</ul>
```
# XPath Quiz 5 _expectedXpath

``` xml @xpathQuiz(Select a plum via //li[2])
<ul _root _expectedXPath="//li[2]">
    <li>Carrot</li>
    <li>Plum</li>
    <li>Apple</li>
</ul>
```

# XPath Quiz 6 _expectedText

``` xml @xpathQuiz(`Select //li[2]/text()`)
<ul _root _expectedText="Plum">
    <li>Carrot</li>
    <li>Plum</li>
    <li>Apple</li>
</ul>
```

``` xml @xpathQuiz(`Select count(//li)`)
<ul _root _expectedText="3">
    <li>Carrot</li>
    <li>Plum</li>
    <li>Apple</li>
</ul>
```

# XPath Quiz 6 _current

`_current` marks a node as a root for relative XPath. So query starting with `./` uses a selected node:

``` xml @xpathQuiz(`Select ./text()`)
<ul _root _expectedText="Apple">
    <li>Carrot</li>
    <li>Plum</li>
    <li _current>Apple</li>
</ul>
```

# XPath Example 1

`@xpathExample` accepts two parameters - 1) text to show as a question and 2) default query.

``` xml @xpathExample(`Select a plum:`,`//li[2]`)
<ul _root>
    <li id="carrot">Carrot</li>
    <li _correct id="plum">Plum</li>
    <li id="apple">Apple</li>
</ul>
```

``` xml @xpathExample(`Get number of items:`,`count(//li)`)
<ul _root _expectedText="3">
    <li>Carrot</li>
    <li>Plum</li>
    <li>Apple</li>
</ul>
```

# CSS

* `@cssQuiz` accepts one parameter - text to show as a question.
* `_root` attribute tells what to assume as DOM root (usually it is the first element). If it is avoided, the whole DOM tree will be shown (starting from `<html>``).
* `_correct` should mark all nodes that should be found by CSS. There must be at least one `_correct` node for the Quiz to make sense.

# CSS Quiz 1

``` xml @cssQuiz(`Select a plum:`)
<ul _root>
    <li id="carrot">Carrot</li>
    <li _correct id="plum">Plum</li>
    <li id="apple">Apple</li>
</ul>
```

# CSS Example 1

`@cssExample` accepts two parameters - 1) text to show as a question and 2) default query.

``` xml @cssExample(`Select a plum:`,`#plum`)
<ul _root>
    <li id="carrot">Carrot</li>
    <li _correct id="plum">Plum</li>
    <li id="apple">Apple</li>
</ul>
```