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
    <iframe id="frame_domq_@0"/>
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
    <iframe id="frame_domq_@0"/>
</lia-keep>

<!-- data-showGutter="true" -->
``` xml
@2
```

<script>

const id = '@0';
setTimeout(()=>{prefill('domq_'+id);fixat('domq_'+id,1)},150)

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

@xpathPart
<div id="domq_@0">

<lia-keep>
    <iframe id="frame_domq_@0"/>
</lia-keep>

<!-- data-showGutter="true" -->
``` xml
@1
```

<script>
const id = '@0';
setTimeout(()=>{prefill('domq_'+id);},150)
"LIA: stop"
</script>

</div>
@end

@xpath1PExample

<div id="domq_@1@2">

<!-- data-showGutter="false" -->
``` xpath
@0
```
<script>
  const input = `@input`;
  checkXPath(`@1`, input, send, /*css*/'@4'=='true', /*nodeset*/'@3'=='true');
  ""
</script>

<script>
setTimeout(()=>{fixat("domq_@1@2",0);},150)
"LIA: stop"
</script>

</div>

@end


@xpath2PExample


<div id="domq_@1@2">

<!-- data-showGutter="false" -->
``` xpath
@0
```
<script>
  const input = `@input`;
  checkXPath(`@1`, input, send, false);
  checkXPath(`@2`, input, send, false);
  ""
</script>

<script>
setTimeout(()=>{fixat("domq_@1@2",0);},150)
"LIA: stop"
</script>

</div>

@end

@xpath2PQuiz


<!-- data-solution-button="off"
    data-disable-navigation="true"
 -->
[[*]]
<script>
  const inp = `@input`;
  let c1 = false;
  let c2 = false;
  let e1 = null;
  let e2 = null;
  try {
    c1 = validateXPath('@0', inp, send, false);
  } catch(e) {e1 = e;}
  try {
    c2 = validateXPath('@1', inp, send, false);
  } catch(e) {e2 = e;}
  if(c1&&c2) {
    true
  } else {
    if(e1) {
        throw e1;
    }
    if(e2) {
        throw e2;
    }
  }

</script>

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
<p _root _oneline>some<b _correct>DOM</b>
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

``` xml @xpathQuiz(`Select all fruits via //li[position()>1]`)
<ul _root>
    <li>Potato</li>
    <li _correct>Blueberry</li>
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

Expected with correct hint:

``` xml @xpathQuiz(Select a plum via /html/body/ul/li[2] and then via //li[2])
<ul _root _expectedXPath="//li[2]">
    <li>Carrot</li>
    <li _correct>Plum</li>
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

`_current` marks a node as a root for relative XPath. So query starting with `./` uses a selected node:

``` xml @xpathExample(`Select ..`,`..`)
<ul _root _correct>
    <li>Carrot</li>
    <li>Plum</li>
    <li _current>Apple</li>
</ul>
```

# XPath Quiz 7 (2 parts)

**Part 1:**

``` xml @xpathPart(QP7A)
<p _root>Some text with <b _correct>bold</b></p>

```

``` xml @xpathPart(QP7B)
<p _root>Some other text with <b _correct>more bold</b></p>

```

Now select both bolds in one query:

@xpath2PQuiz(QP7A,QP7B)

# XPath Quiz 8 (iframe)

``` xml @xpathQuiz(`Select the **button** with id **dst**:`)
<div _root>
<iframe id='rootFrame1' src='frame1.html'> 
    <button _root>Click me!</button>
</iframe>
<hr/>
<iframe id='rootFrame2' src='frame2.html'> 
    <button id='dst' _root _correct>Click me!</button>
</iframe>
</div>


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

# XPath Example 2

``` xml @xpathExample(`Get number of items:`,`count(//li)`)
<ul _root _expectedText="3">
    <li>Carrot</li>
    <li>Plum</li>
    <li>Apple</li>
</ul>
```

# XPath Example 3

This example contains an `@`-sign

``` xml @xpathExample(`Get number of items:`,`//li[<at>id="2"]`)
<ul _root>
    <li>Carrot</li>
    <li _correct id='2'>Plum</li>
    <li>Apple</li>
</ul>
```

# XPath Example 4 (2 parts)

This is 2-part query

``` xml @xpathPart(EP4A)
<p _root>Some text with <b name=b1 _correct>bold</b></p>

```

``` xml @xpathPart(EP4B)
<p _root>Some other text with <b name=b2 _correct>more bold</b></p>

```

Now select both bolds in one query:

@xpath2PExample(`//b[<at>name="b1" or <at>name="b2"]`,EP4A,EP4B)

# XPath Example 5 (text())

``` xml @xpathExample(`Select plum's text:`,`//li[2]/text()`)
<ul _root _expectedText="Plum">
    <li>Carrot</li>
    <li>Plum</li>
    <li>Apple</li>
</ul>
```

``` xml @xpathExample(`Well, :`,`//p/text()`)
<p _root _expectedText='Hello,   there!'>
Hello,   there!
</p>
```

# XPath Example 6 `normalize-space()`

``` xml @xpathExample(` `,`normalize-space(//p)`)
<p _root _expectedText='Hello, my dear friend!'>
Hello,
<i>my</i>
<b>dear</b>
friend!
</p>
```

# XPath Example 7 - multi queries table

``` xml @xpathPart(EP7)
<table _root _expectedText="*">
    <tr _oneline>
      <th>A</th>
      <th>B</th>
    </tr>
    <tr>
      <td>C</td>
      <td>D</td>
    </tr>
</table>
```

@xpath1PExample(`//th[text()="B"]`,EP7,1,true)

@xpath1PExample(`//th[text()="B"]/preceding-sibling::th`,EP7,1,true)

@xpath1PExample(`count(//th[text()="B"]/preceding-sibling::th)`,EP7,1)

@xpath1PExample(`count(//th[text()="B"]/following-sibling::th)`,EP7,1)

# XPath Example 8 - iframe

``` xml @xpathExample(` `,`//iframe@@@//iframe@@@//span`)
<iframe _root id='frame12345'> 
<div _root>
    <p id='f1'>Frame01</p>
    <iframe id='nestedframe12345'> 
        <span _root>Level 2 nesting</span>
    </iframe>
</div>
</iframe>
```

``` xml @xpathExample(` `,`//iframe[@id="rootFrame1"]@@@//iframe@@@//button`)
<div _root>
<iframe id='rootFrame1'> 
    <iframe _root id='subframe1'>
        <button _root>Some Button</button>
    </iframe>
</iframe>
<hr/>
<iframe id='rootFrame2'> 
    <label _root>Hello from frame2</label>
</iframe>
</div>
```

``` xml @xpathExample(`The **button** is within rootFrame2:`,`//iframe[@id="rootFrame2"]@@@//iframe@@@//button`)
<div _root>
<iframe id='rootFrame1'> 
    <label _root>Hello from frame1</label>
</iframe>
<hr/>
<iframe id='rootFrame2'> 
    <iframe _root id='subframe1'>
        <button _root>Some Button</button>
    </iframe>
</iframe>
</div>

```

# XPath Example 9 - shadow dom

``` xml @xpathExample(` `,`//my-paragraph@#@css=button`)
<template id="my-paragraph"><span><button>Button in Shadow</button></span></template>
<script>customElements.define("my-paragraph", class extends HTMLElement {
    constructor() { super();
      this.attachShadow({ mode: "open" }).appendChild(document.getElementById("my-paragraph").content.cloneNode(true));
    }});</script>
<div _root>
    <my-paragraph/>
</div>
```

# XPath Example 10 - _current

``` xml @xpathExample(` **<li>Orange...** is the current node. Let's select a button starting from it:`,`./button`)
<ul _root>
    <li>Apple<button>Edit</button></li>
    <li _current>Orange<button>Edit</button></li>
    <li>Mango<button>Edit</button></li>
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

# CSS Example 2 parts

``` xml @xpathPart(CP2)
<ul _root>
    <li id="carrot">Carrot</li>
    <li _correct id="plum">Plum</li>
    <li id="apple">Apple</li>
</ul>
```

Select rows before requred one:

@xpath1PExample(`li#plum`,CP2,1,true,true)

@xpath1PExample(`#plum`,CP2,1,true,true)

@xpath1PExample(`li:nth-child(2)`,CP2,1,true,true)

# Full XPath

We have 3 buttons:

``` xml @xpathQuiz(`Get **full** XPath to a button **2**:`)
<span _expectedXPath="/html/body/span/button[2]">
    <button>1</button>
    <button _correct>2</button>
    <button>3</button>
</span>



```