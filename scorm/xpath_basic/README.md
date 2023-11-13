<!-- 
script: https://cdn.jsdelivr.net/gh/Inflectra/rapise-documentation/scorm/common/xpathQuiz/xpathQuiz.js

import: https://cdn.jsdelivr.net/gh/Inflectra/rapise-documentation/scorm/common/xpathQuiz/README.md

mode: Textbook

-->

# XPath Essentials

In Rapise automation XPath comes into play to find specific elements on the webpage.

This tutorial explores XPath and various XPath expressions, particularly for identifying complex or dynamic elements whose attributes change dynamically upon refresh or other operations.

In this section, we aim to provide a concise overview of XPath.

> Numerous tutorials on XPath are readily available, often in the context of Selenium Webdriver testing. The information you come across in these tutorials is applicable to Rapise as well, given its WebDriver-based backend, where you can leverage this knowledge. For a more in-depth exploration or to broaden your understanding, consider checking out any of the tutorials listed below:

* [XPath Tutorial on Guru99](https://www.guru99.com/xpath-selenium.html)
* [Complete Guide for Using XPath in Selenium with Examples](https://www.lambdatest.com/blog/complete-guide-for-using-xpath-in-selenium-with-examples/)
* [XPath in Selenium - A Guide by BrowserStack](https://www.browserstack.com/guide/xpath-in-selenium)

* [How to use XPath in Selenium? (using Text, Attributes, Logical Operators)](https://www.browserstack.com/guide/xpath-in-selenium)

## Where is XML?

> XPath stands for **XML** **Path** **Language**. XPath uses "path like" syntax to identify and navigate nodes in an XML document. XPath contains over 200 built-in functions.

While a web page isn't precisely an XML document—it's a Document Object Model (DOM)—a comparison between a typical XML structure and the DOM of a webpage reveals striking similarities.

**XML Document:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book category="fiction">
    <title>The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <price>15.99</price>
  </book>
  <book category="non-fiction">
    <title>Sapiens: A Brief History of Humankind</title>
    <author>Yuval Noah Harari</author>
    <price>24.99</price>
  </book>
</bookstore>
```

**Webpage DOM:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Sample HTML Document</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <section>
        <h2>About Us</h2>
        <p>This is a sample HTML document for demonstration purposes.</p>
    </section>
</body>
</html>
```

Their structures are remarkably similar. Leveraging XPath, a technology proven effective for navigating XML documents, becomes an intuitive choice for traversing DOM documents with comparable structures.

## Trivial Example

Below our first example, it contains part of web page:

<lia-keep>
<iframe width="100%" height="50px" srcdoc="<p>some <b>bold</b> and some <i>italic</i></p>"/>
</lia-keep>

And then the source of the page:

```xml
<p>
    some
    <b>bold</b>
    and some
    <i>italic</i>
</p>
```

So, here is the first exercise. We need to select a specific element by tag name.

``` xml @xpathExample(Press **Run** to launch an example,//b)
<p _root>
    some
    <b _correct>bold</b>
    and some
    <i>italic</i>
</p>
```

You got the point? We used `//tagname` to find an element. Now select an *italic* element in a similar way:

``` xml @xpathExample( ,//i)
<p _root>
    some
    <b>bold</b>
    and some
    <i _correct>italic</i>
</p>
```

In these examples, we used tag names (`b` and `i` respectively) to find a corresponding element. But what happened if we have more than one element with the same tag? Let's see:

``` xml @xpathExample(Select all bold elements:,//b)
<p _root>
    We have:
    <b _correct>bold1</b>
    and
    <b _correct>bold2</b>
</p>
```

See what happened? Two items were selected. So just tag name is not enough and we need to provide more information if we have to select just one element.

## XPath using Index

As we can see `//tag` may return many elements. So what should we do if we need, for example, 2nd? We can do it with the of XPath index:

``` ascii
        //tagname[index]
        |   |      |
        |   |      '-> 1-based index
        |   '--> Tag Name, i.e. <b>, <div> etc.
        '--> // - Look everywhere, starting from root
```

So now we may select 2nd bold element as follows:

``` xml @xpathExample( ,//b[2])
<p _root>
    We have:
    <b>bold1</b>
    and
    <b _correct>bold2</b>
</p>
```

### Exercise

``` xml @xpathQuiz(`Select 3rd <li> item by index:`)
<ul _root _expectedXPath="//li[3]">
    <li>Carrot</li>
    <li>Plum</li>
    <li>Apple</li>
</ul>
```

## XPath Using Attribute

Once we see the need in more specific XPath values, we need to take attributes into account.

``` ascii
        //tagname[@attribute='value']
        |   |      |          |
        |   |      |          '-> Expected value
        |   |      '-> Attribute name
        |   '--> Tag Name, i.e. <b>, <div> etc.
        '--> // - Look everywhere, starting from root
```

**Example** 

Select `//li[@id="2"]` get point to a Plum:

``` xml @xpathExample(` `,`//li[<at>id="2"]`)
<ul _root>
    <li id="1">Carrot</li>
    <li _correct id="2">Plum</li>
    <li id="3">Apple</li>
</ul>
```

In this case we used the fact, that each list item has a unique `id` attribute. Moreover, when it is unique, we may skip tag name by using wildcard `*` instead of `li`

Try `//*[@id='2']` and see the same Plum is selected:

``` xml @xpathQuiz(` `)
<ul _root>
    <li id="1">Carrot</li>
    <li _correct id="2">Plum</li>
    <li id="3">Apple</li>
</ul>
```

## Absolute XPath

``` ascii
/tag1/tag2[n]/...
    |    |    |
    |    |    '-> choose n'th tag2
    |    '--> Find tag2 in tag1. Usually it is <body> within <html>
    '--> Start from root, usually it is <html>
```

In previous examples we used a fragment from the document. That was fine, because we were using `//` XPath locator, that looks everywhere. In this exampe we are showing the full document. It is a bit longer and usually starts with `<html>` that contains `<body>` in it. That is why the full XPath normally starts with `/html/body`:

``` xml @xpathExample(`Full XPath to Milk`,`/html/body/dl/dt[2]`)
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>

```

> Note, while Milk is 3rd child or `<dl>`, it is 2nd `<dt>` inside `<dl>`. That is why we used `.../dt[2]`.

### Exercise

We have 3 buttons:

``` xml @xpathQuiz(`Get **full** XPath to a button **2**:`)
<span _expectedXPath="/html/body/span/button[2]">
    <button>1</button>
    <button _correct>2</button>
    <button>3</button>
</span>



```

## Relative XPath

### Relative XPath in XML

In XML world the relative XPath is a query that starts looking from specific node other that the root node. Usually it looks like that:

``` ascii
./tag2...
|   |
|   '--> Similar to usual XPath (index, attributes, etc)
'--> . dot means relative XPath
```

Relative XPath starts with `.`, that means *current node*. So the rest of the expression is a path starting from the current node.

``` xml @xpathExample(`**<li>Orange...** is a current node. So we need to select a button starting from it`,`./button`)
<ul _root>
    <li>Apple<button>Edit</button></li>
    <li _current>Orange<button>Edit</button></li>
    <li>Mango<button>Edit</button></li>
</ul>
```

In a similar way we may climb up using `..` query. I.e. here we will choose a parent of **<li>Mango** that is an `<ul>`:

``` xml @xpathExample(`**<li>Mango...** is a current node. So we need to select a button starting from it`,`..`)
<ul _root>
    <li>Apple</li>
    <li>Orange</li>
    <li _current>Mango</li>
</ul>
```

Once we may reach parent node, we may also reach one of it other children.

``` xml @xpathExample(`I.e. we may climb to **<ul>** and then select an **Apple**:`,`../li[1]`)
<ul _root>
    <li>Apple</li>
    <li>Orange</li>
    <li _current>Mango</li>
</ul>
```

### Relative XPath in DOM

Special characters like double slash `//` and `@` that help us to locate and select the desired node/element. Apart from the `//` and `@`, there are other syntax elements and attributes to locate the web elements using XPath. Few of these are:

| Syntax Element | Details | Example | Example Details |
|----------------|---------|---------|-----------------|
| Single slash `/` | It selects the node from the root. In other words, if you want to select the first available node, this expression is used. | `/html` | It will look for the HTML element at the start of the document. |
|Double slash `//` | It selects any element in the DOM that matches the selection. Additionally, it doesn't have to be the exact next node and can be present anywhere in the DOM. | `//input` | It will select the input node present anywhere in the DOM. |
| Address sign `@` | It selects a particular attribute of the node | `//@text` | It will select all the elements which have text attribute. |
| Dot `.` | It selects the current node. | `//h3/.` | It will give the currently selected node, i.e., `h3`. |
| Double dot `..` | It selects the parent of the current node. | `//div/input/..` | It will select the parent of the current node. The current node is input so that it will select the parent, i.e., `div`. |
| Asterisk ""* | It selects any element present in the node | `//div/*` | This matches with any of the child nodes of the `div`. |
| Address and Asterisk `@*` | It selects any attribute of the given node. | `//div[@*]` | It matches any of the div nodes that contain at least one attribute of any type. |
| Pipe `\|` | This expression is used to select a different path. | `//div/h5 \| //div/form` |



