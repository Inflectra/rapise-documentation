<!-- 

import: https://cdn.jsdelivr.net/gh/Inflectra/rapise-documentation@0901fe7/scorm/common/xpathQuiz/README.md

mode: Textbook

-->

# XPath Essentials

This is an interactive tutorial for XPath. It contains explanations and working examples that you may run while reading. In the end, you may find an [exam](#exam) session. Your final goal is to answer all exam quiz questions correctly.

In [Rapise](https://www.inflectra.com/Rapise/) and WebDriver automation XPath comes into play to find specific elements on the webpage.

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

Following our initial example, there is a segment of the webpage:

<lia-keep>
<iframe width="100%" height="50px" srcdoc="<p>some <b>bold</b> and some <i>italic</i></p>"/>
</lia-keep>

Subsequently, here is the source of the page:

```xml
<p>
    some
    <b>bold</b>
    and some
    <i>italic</i>
</p>
```

Now, let's delve into the first exercise. The task is to single out a specific **bold** element by its tag name `<b>`.

``` xml @xpathExample(Press **Run** to launch an example,//b)
<p _root>
    some
    <b _correct>bold</b>
    and some
    <i>italic</i>
</p>
```

Do you follow? We utilized `//tagname` to locate an element. Now, let's choose an *italic* element in a similar manner:

``` xml @xpathExample( ,//i)
<p _root>
    some
    <b>bold</b>
    and some
    <i _correct>italic</i>
</p>
```

In these instances, we employed tag names (`b` and `i` respectively) to identify the corresponding elements. However, what if there are multiple elements with the same tag? Let's explore:

``` xml @xpathExample(Select all bold elements:,//b)
<p _root>
    We have:
    <b _correct>bold1</b>
    and
    <b _correct>bold2</b>
</p>
```

Notice what occurred? Two elements were selected. Therefore, relying solely on the tag name is insufficient, and additional information is required when aiming to select a specific element.

## XPath using Index

When we use `//tag`, it might give us many elements. But what if we want, let's say, the second one? That's where XPath indexing comes in:

``` ascii
        //tagname[index]
        |   |      |
        |   |      '-> 1-based index
        |   |
        |   '--> Tag Name, like <b>, <div>, and so on
        |
        '--> // - Search everywhere, starting from the root
```

Now, let's say we want to pick the second bold element:

``` xml @xpathExample( ,//b[2])
<p _root>
    We have:
    <b>bold1</b>
    and
    <b _correct>bold2</b>
</p>
```

This way, by using **[2]** after the tag name, we can specifically choose the second occurrence of that element.

## XPath Using Attribute

When we realize the need for more precise XPath values, we start considering attributes.

``` ascii
        //tagname[@attribute='value']
        |   |      |          |
        |   |      |          '-> Desired value
        |   |      |
        |   |      '-> Attribute name
        |   |
        |   '--> Tag Name, like <b>, <div>, etc.
        |
        '--> // - Search everywhere, starting from the root
```

**Example** 

Select `//li[@id="2"]` to target a Plum:

``` xml @xpathExample(` `,`//li[<at>id="2"]`)
<ul _root>
    <li id="1">Carrot</li>
    <li _correct id="2">Plum</li>
    <li id="3">Apple</li>
</ul>
```

Here, we utilized the fact that each list item has a unique `id` attribute. Additionally, when it's unique, we can omit the tag name by using the wildcard `*` instead of `li`.

Try `//*[@id='2']` and observe the same result with Plum being selected:

``` xml @xpathExample(`Observe the same result with Plum being selected:`,`//*[<at>id='2']`)
<ul _root>
    <li id="1">Carrot</li>
    <li _correct id="2">Plum</li>
    <li id="3">Apple</li>
</ul>
```

### Using `position()`

`position()` returns the position of the node within its parent's list of child nodes. It is typically used within square brackets `[ ]` in an XPath expression to filter nodes based on their position.

``` xml @xpathExample(` `,`//li[position()=2]`)
<ul _root>
    <li id="1">Carrot</li>
    <li id="2" _correct>Plum</li>
    <li id="3">Apple</li>
</ul>
```

## Absolute XPath

``` ascii
/tag1/tag2[n]/...
  |    |
  |    '--> Locate the n'th tag2 within tag1. Usually, it's"body"inside"html."
  |
  '--> Begin from the root, typically"tag1=html"
```

In the previous examples, we focused on a part of the document. That worked well because we used the `//` XPath locator, which searches everywhere. In this example, we're displaying the entire document. It's a bit longer and usually starts with `<html>`, containing `<body>` within it. That's why the complete XPath often begins with `/html/body`:

``` xml @xpathExample(`Full (*absolute*) XPath to Milk`,`/html/body/dl/dt[2]`)
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>

```

> Note: While Milk is the 3rd child of `<dl>`, it is the 2nd `<dt>` inside `<dl>`. That's why we used `.../dt[2]`.

## Relative XPath

In Selenium docs, if an XPath begins with `//`, it's named relative. But this can be a bit confusing because `//` always starts searching from the root, hiding another feature - querying from a specific spot in the DOM. So, when we talk about **relative XPath** queries, we mean starting from any place in the XML, except the root. Anything starting from the DOM root, like `//`, is, in our view, should be referred as an **absolute** XPath query.

### Relative XPath in XML

In the XML world, a relative XPath is a way to find information starting from a particular spot in the document. Here's a basic breakdown:

``` ascii
./tag2...
|   |
|   '--> Similar to regular XPath (index, attributes, etc)
|
'--> '.' represents the current node in a relative XPath
```

A relative XPath starts with `.` denoting the *current node*. The rest of the expression is the path starting from this point.

``` xml @xpathExample(` **<li>Orange...** is the current node. Let's select a button starting from it:`,`./button`)
<ul _root>
    <li>Apple<button>Edit</button></li>
    <li _current>Orange<button>Edit</button></li>
    <li>Mango<button>Edit</button></li>
</ul>
```

Similarly, we can move up using `..`. For example, if we're at `<li>Mango`, selecting its parent would be `<ul>`:

``` xml @xpathExample(`**\<li\>Mango...** is a current node. Selecting it's parent:`,`..`)
<ul _root>
    <li>Apple</li>
    <li>Orange</li>
    <li _current>Mango</li>
</ul>
```

Once we may reach parent node, we may also reach one of it other children:

``` xml @xpathExample(`I.e. we may climb to **<ul>** and then select an **Apple**:`,`../li[1]`)
<ul _root>
    <li>Apple</li>
    <li>Orange</li>
    <li _current>Mango</li>
</ul>
```

## Logical Operators

Logical operators helps making more focused and more resilient locators.

### And

``` ascii
        //tagname[@attr1='value1' and @attr1='value2']
        |   |      |                    |
        |   |      '-> Check attr1      '-> Expected value
        |   |      
        |   '--> Tag Name, i.e. <b>, <div> etc.
        |
        '--> // - Look everywhere, starting from root
```

``` xml @xpathExample(`Find cell with row=3 and col=2:`,`//span[<at>row=3 and <at>col=2]`)
<div _root>
    <div>
        <span row="1" col="1">A</span>
        <span row="1" col="2">B</span>
        <span row="1" col="3">C</span>
    </div>
    <div>
        <span row="2" col="1">D</span>
        <span row="2" col="2">E</span>
        <span row="2" col="3">F</span>
    </div>
    <div>
        <span row="3" col="1">G</span>
        <span row="3" col="2">H</span>
        <span row="3" col="3">I</span>
    </div>
</div>
```

### Or

``` ascii
                                                .-> Check for value2
                                                |
        //tagname[@attr1='value1' or @attr1='value2']
        |   |                |
        |   |                '-> Check for value1
        |   |
        |   '--> Tag Name, i.e. <b>, <div> etc.
        |
        '--> // - Look everywhere, starting from root
```

The `or` operator checks if either one condition is true, or maybe both. It's handy for creating locators that can adapt to different scenarios. Here's an example:

**Old Version:**

``` xml @xpathPart(orep1)
<div _root>
    <span id="1">One</span>
    <span id="2">Two</span>
    <span id="3">Three</span>
</div>
```

**New Version:**

``` xml @xpathPart(orep2)
<div _root>
    <span name="one">One</span>
    <span name="two">Two</span>
    <span name="three">Three</span>
</div>
```

Now, if we want a locator that works for both versions, we can use or like this:

@xpath2PExample(`//span[<at>id="2" or <at>name="two"]`,orep1,orep2)

## Text

In many situations, we use the text on a webpage to locate specific elements.

### Selecting `text()`

``` ascii
        .../tagname[...]/text()
                         |
                         '-> Select tagname's text.
```

So, when we want to grab the text of an element, we can use the `text()` function. For example:

``` xml @xpathExample(`Get text content of the 2nd item:`,`//li[2]/text()`)
<ul _root _expectedText="Plum">
    <li>Carrot</li>
    <li>Plum</li>
    <li>Apple</li>
</ul>
```

### Searching with `text()`

The results from the `text()` function can also be used for comparisons, just like regular element attributes:

``` xml @xpathExample(`Find element by its text content:`,`//li[text()="Apple"]`)
<ul _root>
    <li>Carrot</li>
    <li>Plum</li>
    <li _correct>Apple</li>
</ul>
```

### What `text()` means?

What does `text()` mean?

Sometimes, the text we find in the source code may not match what's shown on the screen. Let's take an example where the visible message is `Hello, there!` — a simple one-line sentence. However, in the source code, it's written as two lines:

``` xml @xpathExample(` `,`//p/text()`)
<p _root _expectedText='
Hello,
there!
'>
Hello,
there!
</p>
```

So, the `text()` function returns the node's text as defined in the source. It might differ from what we visually see. Also, a node can have more than one text, like this:

``` xml @xpathExample(` `,`//p/text()`)
<p _root _expectedText='Hello,'>
Hello,
<b>dear</b>
friend!
</p>
```

> Here, `Hello,`, `<b>`, and `friend!` are three children of `<p>`. But only `Hello,` and `friend!` are text nodes. In this case, `//p/text()` returns the first child, which is `Hello,`.

### Selecting full text

How do we capture the entire text content of a paragraph as it appears on the screen?

This is where we can use `normalize-space()`.

``` ascii
        normalize-space(node)
```

The `normalize-space` function removes leading and trailing white-space from a string, replaces sequences of whitespace characters with a single space, and gives back the resulting string.

The `normalize-space` function takes a **node** as a parameter.

So, what we see on the screen is closest to the output of this function. Here's an example:

``` xml @xpathExample(` `,`normalize-space(//p)`)
<p _root _expectedText='Hello, my dear friend!'>
Hello,
<i>my</i>
<b>dear</b>
friend!
</p>
```

> Note the difference between `normalize-space(...)` and `...text()`. The former accepts a node as a parameter, while the latter refers to a child text node.

If we pass multiple nodes, `normalize-space` only uses the first one, like this:

``` xml @xpathExample(`**//li** returns 3 nodes, but only 1st is used:`,`normalize-space(//li)`)
<ul _root _expectedText="Carrot is orange">
    <li>Carrot is <i>orange</i></li>
    <li>Plum is <i>blue</i></li>
    <li>Apple is <i>red</i></li>
</ul>
```

So if we want to capture the whole list, we need to `normalize-space` its common root:

``` xml @xpathExample(`Get full list as text:`,`normalize-space(//ul)`)
<ul _root _expectedText="Carrot is orange Plum is blue Apple is red">
    <li>Carrot is <i>orange</i></li>
    <li>Plum is <i>blue</i></li>
    <li>Apple is <i>red</i></li>
</ul>
```

So we have each word separated by a single whitespace. Everything else (newlines, special characters, additional spaces) is ignored:

``` xml @xpathExample(`No matter how many spaces between a and b, the result will have only one space:`,`normalize-space(//p)`)
<p _root _expectedText="a b">
    a              
                     b
</p>
```

## Check text part using `contains()`

The `contains(...)` function takes two input parameters:

``` ascii
        contains(string, substring)
```

For example:

```xpath
contains("abc","b")
```

returns `true` because `b` is part of `abc`. However,

```xpath
contains("abc","B")
```

returns `false` because there is no `B` in `abc`.

> Note: `contains(...)` compares characters in a case-sensitive manner.

### Searching for partial text

Now, let's use `contains(...)` to discover something.

Firstly, we can employ it to pinpoint a node based on its text content:

``` xml @xpathExample(` `,`//li[contains(text(),"Plum")]`)
<ul _root>
    <li _correct>Carrot is <i>orange</i></li>
    <li>Plum is <i>blue</i></li>
    <li>Apple is <i>red</i></li>
</ul>
```

Here, we just identified a `<li>` element by a part of its message. This method works well as long as the text can be found inside a single text node.

### Searching for partial text with `normalize-space()`

``` xml @xpathExample(`We need to find a button 'Weather is not good':`,`//button[normalize-space(.)="Weather is not good"]`)
<body _root>
    <button _correct _oneline><b>Weather</b> is <i>good</i></button>
    <button _oneline><b>Weather</b> is not <i>good</i></button>
</body>
```

> Note, that `normalize-space(.)` gets combined normalized text of the current node and all its children.

This is often used together with `contains(...)` to find a node by a part of its text:

``` xml @xpathExample(`We need to find a button containing 'not good':`,`//button[contains(normalize-space(.),"not good")]`)
<body _root>
    <button _correct _oneline><b>Weather</b> is <i>good</i></button>
    <button _oneline><b>Weather</b> is not <i>good</i></button>
</body>
```

## Finding by Class in XPath

Selecting a class in XPath can be tricky. Sometimes, the most straightforward way may work:

``` xml @xpathExample(` `,`//li[@class="active"]`)
<ul _root>
    <li>25501</li>
    <li class="active" _correct>25502</li>
    <li>25503</li>
</ul>
```

### Selecting class

But what if there are other classes? It's common for applications to add/remove classes dynamically to represent the current state of an element. For example, a button might have a class like:

`<button class="default">...`

But when you hover over it, the class becomes:

`<button class="active default focused">...`

If we simply search by class name, we might not get the desired results:

``` xml @xpathExample(` `,`//li[@class="active"]`)
<ul _root>
    <li class="active focused" _correct>Version 1</li>
    <li class="inactive">Version 2</li>
    <li>Version 3</li>
    <li class="default active" _correct>Version 4</li>
    <li class="">Version 5</li>
</ul>
```

If we try to search using `contains`, we might get both `active` and `inactive`:

``` xml @xpathExample(` `,`//li[contains(@class,"active")]`)
<ul _root>
    <li class="active focused" _correct>Version 1</li>
    <li class="inactive">Version 2</li>
    <li>Version 3</li>
    <li class="default active" _correct>Version 4</li>
    <li class="">Version 5</li>
</ul>
```

So we need to make sure that it is `active`. We may do it with the help of additional function `concat(str,str...)`. It simply appends all it parameters one by one to make a single string:

So, to ensure that it is active, we can use the `concat(str1,str2...)` function. This function appends all its parameters one by one to create a single string:

`concat("This"," ","is"," ","a"," ","String")`

gives

`This is a String`

Now, the trick. We append a whitespace to the beginning and to the end of the `@class`. Instead of searching for active, we search for active. This covers all cases: when the class name is first, last, or part of another class name. The condition we use to find is as follows:

`...[contains(concat(" ",@class," ")," active ")]`

In other words, we first append whitespaces using `concat(" ",@class," ")` and then we search for our class name with leading and trailing spaces:

``` xml @xpathExample(` `,`//li[contains(concat(" ",@class," ")," active ")]`)
<ul _root>
    <li class="active focused" _correct>Version 1</li>
    <li class="inactive">Version 2</li>
    <li>Version 3</li>
    <li class="default active" _correct>Version 4</li>
    <li class="">Version 5</li>
</ul>
```

> Note: This method is a versatile way to locate elements by class name:

`...[contains(concat(" ",@class," ")," someClassName ")]`

## Understanding `count`

The `count(...)` function takes a node set as a parameter. A node set is something returned by an XPath query, and `count` tells you how many items are returned by the query.

``` xml @xpathExample(` `,`count(//span)`)
<div _root _expectedText="3">
    <span name="one">One</span>
    <span name="two">Two</span>
    <span name="three">Three</span>
</div>
```

## Understanding Axes in XPath

To navigate the hierarchical tree of nodes in an XML document, XPath uses the concept of axes. An XPath axis is a collection of nodes that meet the current navigation criteria.

> The XPath specification defines a total of [13 different axes](https://www.scientecheasy.com/2019/08/xpath-axes.html/).

Examples of axes include the **child** axis, **following** axis, **following-sibling** axis, **preceding-sibling** axis, etc. Each axis contains various nodes that depend on the current node.

Let's see how we may use in with actual XPath queries. Both relative and absolute XPath queries contains of one or more steps, each separated by a slash. Typically, it looks like one of these:

```
/step/step/step

//step/step

./step/step
```

Where each step is one of:

```
/tagname

/tagname[condition]

/axisname::nodetest[predicate]

```

Last example is an axis step, where:

 * **axisname** is one of `child`, `parent`, `preceding-sibling` i.e. any of 13 axis names.
 * **nodetest** is usualy some tag name, i.e. `div` or `spane` or `*`. 
 * **predicate** can be either an index or a condition, such as  `@class='selected'`.

### `preceding-sibling` axis

The `preceding-sibling` axis selects all siblings before the current node.

``` xml @xpathExample(`Note, that **July** is a current node. Find its previous months`,`./preceding-sibling::span`)
<div _root _expectedXPath='./preceding-sibling::span'>
    <span season='spring' _correct>March</span>
    <span season='spring' >April</span>
    <span season='spring' >May</span>
    <span season='summer'>June</span>
    <span season='summer' _current>July</span>
    <span season='summer'>August</span>
</div>
```

``` xml @xpathExample(`Note, that **July** is a current node. Now get previous **summer** months`,`./preceding-sibling::span[<at>season="summer"]`)
<div _root _expectedXPath='./preceding-sibling::span'>
    <span season='spring' _correct>March</span>
    <span season='spring' >April</span>
    <span season='spring' >May</span>
    <span season='summer'>June</span>
    <span season='summer' _current>July</span>
    <span season='summer'>August</span>
</div>
```

### `preceding-sibling` and `count`

Let's work on finding a value in a table, for example, the value for **Jun 02**, **8:00**.

``` xml @xpathPart(preceding-sibling-count-table)
<table _root _expectedText='*' border='1'>
    <tr><th>/</th><th>Jun 01</th><th>Jun 02</th><th>Jun 03</th></tr>
    <tr _oneline><td>7:00</td><td>2.0</td><td>2.5</td><td>5.0</td></tr>
    <tr _oneline><td>8:00</td><td>4.1</td><td>4.5</td><td>6.0</td></tr>
    <tr _oneline><td>9:00</td><td>3.3</td><td>3.5</td><td>1.5</td></tr>
</table>

```

First, we find the column header containing **Jun 02**:

@xpath1PExample(`//th[text()="Jun 02"]`,preceding-sibling-count-table,1,true)

Now, let's get all `<th>` elements right before the given header:

@xpath1PExample(`//th[text()="Jun 02"]/preceding-sibling::th`,preceding-sibling-count-table,1,true)

So we have 2 elements. Therefore, the column **Jun 02** is the 3rd column (the **count** of **th** elements + 1):

@xpath1PExample(`count(//th[text()="Jun 02"]/preceding-sibling::th)+1`,preceding-sibling-count-table,1)

Now do the same with the row. First, find a `tr` which has the 1st `td`:

@xpath1PExample(`//tr[./td[text()="8:00"]]`,preceding-sibling-count-table,1,true)

Get its index by counting all preceding `tr` elements + 1:

@xpath1PExample(`count(//tr[./td[text()="8:00"]]/preceding-sibling::tr)+1`,preceding-sibling-count-table,1)

Finally, we get the desired cell value:

@xpath1PExample(`//table/tbody/tr[count(//tr[./td[text()="8:00"]]/preceding-sibling::tr) + 1]/td[count(//th[text()="Jun 02"]/preceding-sibling::th)+1]/text()`,preceding-sibling-count-table,1)

The power of this query is that it can find a value even if the number of rows or columns has changed. It doesn't rely on fixed positions but rather on column and row header text.

The drawback is that it is a bit too long and hard to read. In such cases, we recommend breaking it into parts and executing them separately. For example, in [Rapise](https://inflectra.com/Rapise/), it would be a script like this:

```javascript
	var columnName = "Jun 02";
	var rowName = "8:00";
	var tableObj = /**HTMLObject*/Navigator.Find('//table');

    // Find a table cell:
	var columnInd = tableObj.DoDOMQueryValue('count(.//th[text()="'+columnName+'"]/preceding-sibling::th)')+1;
	var rowInd = tableObj.DoDOMQueryValue('count(.//tr[./td[text()="'+rowName+'"]]/preceding-sibling::tr)')+1;
	var cell = /**HTMLObject*/tableObj.DoDOMQueryXPath('.//tr['+rowInd+']/td['+columnInd+']')[0];

    // We got the cell, get its text:
	var cellText = cell.GetText();
```

This snippet is generic and something similar may be used to find a table cell in many cases. Note that we use absolute XPath to find a table and then use relative queries (`.//` and `./`) to work with table rows and cells.

## Indirect Search

All the queries before were focused on finding a node by its attributes or by its text. Now let's consider ones that use one node's properties to find other node.

### `aria-labelledby`

The [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute points to the element or elements that label the element it's applied to.

Here, our goal is to select an **input** with the label "I agree to the Terms and Conditions." It has a name, but it seems to be autogenerated or dynamic. So it might change in the future.

``` xml @xpathExample(` `,`//input[@aria-labelledby=//label[text()="I agree to the Terms and Conditions."]/@id]`)
<div _root>
<input aria-labelledby="tac" type="checkbox" name="VGSyy0lX3" _correct/>
<label id="tac">I agree to the Terms and Conditions.</label>
</div>
```

In this example, we use the `aria-labelledby` attribute to indirectly locate the <input> element. The value of `aria-labelledby` is dynamically linked to the `id` of the label we are interested in. This way, even if the name of the input changes, our XPath query remains resilient.

### `label for`

A `<label>` can be connected to an `<input>` element using the `for` attribute. To set up this connection, you first assign an `id` attribute to the `<input>` element. Then, in the `<label>` element, you use the `for` attribute and set its value to be the same as the `id` in the corresponding `<input>` element.

``` xml @xpathExample(` `,`//input[@id=//label[text()="Do you like peas?"]/@for]`)
<div _root>
    <label for="rTFZ0s5eGrS">Do you like cheese?</label>
    <input type="checkbox" name="rTFZ0s5eGrS" id="rTFZ0s5eGrS" />
    <label for="SxLQaoohM">Do you like peas?</label>
    <input type="checkbox" name="SxLQaoohM" id="SxLQaoohM" _correct/>
</div>
```

In this example, we use the `for` attribute to indirectly locate the `<input>` element associated with the label "Do you like peas?". The XPath query ensures that the `id` of the `<input>` matches the value of the `for` attribute in the corresponding `<label>`.

## CSS Locators

CSS (Cascading Style Sheets) Selectors help identify and locate web elements using attributes like id, class, name, and others. Sometimes, CSS is a preferred method for locating elements because it's simpler to write than XPath in certain cases.

### CSS id (#)

In CSS, we can use **#** notation to select the **id** attribute of an element.

``` xml @cssExample(`Select a **Item Two**:`,`#id2`)
<ul _root>
    <li id="id1">Item One</li>
    <li id="id2">Item Two</li>
    <li id="id3">Item Three</li>
</ul>
```

### CSS class

In CSS, we use the **.** notation to select elements based on their **class** attribute.

``` xml @cssExample(`Select a **Item Two**:`,`.active`)
<ul _root>
    <li class="inactive item focused">Item One</li>
    <li class="active item">Item Two</li>
    <li class="inactive item">Item Three</li>
</ul>
```

> Unlike XPath, CSS is more convenient for selecting by class. It handles multiple classes or class names that are substrings of others without confusion.

### CSS tag name

If we want to select an element by its tag name, we simply use the tag name without any prefix.

``` xml @cssExample(`Select a **button** by tag name:`,`button`)
<p _root>
    Click
    <b>this</b>
    <button>button</button>
</p>
```

### CSS attributes

Apart from **id** and **class**, other attributes can be used to locate web elements using CSS selectors. The attribute selector format is:

```css
.classname[attr=value]

#id[attr=value]

tag[attr=value]
```

``` xml @cssExample(`Select an **Item Two**:`,`a[href='./link2']`)
<div _root>
    <a href="./link1">Item One</a>
    <a href="./link2">Item Two</a>
    <a href="./link3">Item Three</a>
</div>
```

### CSS combinator selectors

CSS combinator selectors help choose elements based on their relationships with other elements in the HTML structure.

* Descendant selector (space): Selects elements that are descendants of another element. It includes child, grandchild, and so on.

* Child selector (>): Picks elements that are direct children of another element. It excludes grandchildren and selects only immediate children.

* Adjacent sibling selector (+): Selects the element immediately following another element. It picks the element right below the specified one, selecting only one element.

* General sibling selector (~): Selects elements that are siblings of another element. It includes multiple siblings, not just the immediate one.

``` xml @xpathPart(cssCombinatorExample)
<ul _root>
    <li class="inactive item focused" _oneline>One<button>Edit</button></li>
    <li class="active item">Two<span><button>Edit</button></span></li>
    <li class="inactive item" _oneline>Three<button>Edit</button></li>
</ul>



```

Find all buttons somewhere inside the `<ul>`:

@xpath1PExample(`ul button`,cssCombinatorExample,1,true,true)

Find all buttons directly under `<li>`:

@xpath1PExample(`li > button`,cssCombinatorExample,1,true,true)

Find a `<li>` node which is directly after element with class `focused`:

@xpath1PExample(`.focused + li`,cssCombinatorExample,1,true,true)

Find all nodes following a `focused` node:

@xpath1PExample(`.focused ~ *`,cssCombinatorExample,1,true,true)

### CSS pseudo-classes

CSS [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) are special keywords added to selectors, specifying a unique state of the selected element(s). Here are a few examples:

**:nth-child(n)**: Selects child elements based on their position among all sibling elements within a parent element.

``` xml @cssExample(`Select the 2nd link:`,`a:nth-child(2)`)
<div _root>
    <a href="./link1">Item One</a>
    <a href="./link2">Item Two</a>
    <a href="./link3">Item Three</a>
</div>
```

**:nth-last-child(n)**: Matches elements based on their position among a group of siblings, counting from the end.

``` xml @cssExample(`Select the last link:`,`a:nth-last-child(1)`)
<div _root>
    <a href="./link1">Item One</a>
    <a href="./link2">Item Two</a>
    <a href="./link3">Item Three</a>
</div>
```

**:nth-of-type(n)**: Matches elements based on their position among siblings of the same type (tag name).

``` xml @cssExample(`Select the 2nd definition term:`,`dt:nth-of-type(2)`)
<dl _root>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
  <dt>Orange Juce</dt>
  <dd>- orange cold drink</dd>
  <dt>Watermelon Juce</dt>
  <dd>- rose cold drink</dd>
</dl>
```

**::nth-last-of-type(n)**: Matches elements based on their position among siblings of the same type, counting from the end.

``` xml @cssExample(`Select the 2nd definition term from the end:`,`dt:nth-last-of-type(2)`)
<dl _root>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
  <dt>Orange Juce</dt>
  <dd>- orange cold drink</dd>
  <dt>Watermelon Juce</dt>
  <dd>- rose cold drink</dd>
</dl>
```

### CSS limitations

CSS, while simpler and more straightforward for many locators, does have some limitations:

**Node Selection Only**: CSS is designed to select nodes in the HTML structure. Unlike XPath, you can't directly retrieve scalar values like the text content of an element or count of items. Functions like `text()`, `normalize-space()`, or `count()` in XPath don't have direct equivalents in CSS.

**Limited Text Search**: CSS primarily operates based on element tag names, classes, IDs, attributes, and positions in the DOM tree. It doesn't provide a direct way to search for elements based on their text content.

In summary, while CSS is excellent for navigating the structure and styling of a web page, it might not be as versatile as XPath when you need to perform more complex queries or retrieve specific values.

## Rapise Extended Locator (`@@@`)

Think of the Rapise Extended Locator as a way to connect different parts of a locator using `@@@` or `@#@`. It's like building a locator from chunks or regular locators.

For instance, you might have `//iframe1` @@@ `//custom-element` @#@ `...` @@@ `//element`. In the upcoming sections, we'll explore various scenarios where the Rapise Extended Locator proves useful.

### Frames

Dealing with Document Object Model (DOM) frames presents a challenge for regular XPath. XPath assumes that all queries happen within a single document. However, an `<iframe>` introduces another document nested within the given element.

Consider the following XPath query applied to a document with a nested **iframe**:

``` xml @xpathExample(`For example, let's try the query:`,`//p`)
<iframe _root id='frame12345'> 
    <div _root>
        <p id='f1'>Paragraph in frame</p>
    </div>
</iframe>
```

Here, the `<p>` element is not accessible using `//p` because it's inside an `<iframe>`. Is this a problem? Yes, indeed. Is there a solution? Absolutely, but the solution depends on the testing tool you use.

In some tools like Selenium WebDriver, you have an explicit switch statement like:

`driver.switchTo().frame(iframe);`

In Rapise, you can achieve a similar effect:

`WebDriver.SwitchToFrame(iframeElement);`

Alternatively, you can leverage Rapise Extended Locator, as explained in the next section.

### Path to `iframe`

Think of the path to an **iframe** as a sequence of connected locators, much like building a chain from chunks or regular locators using `@@@`.

For instance, you might have:

`//iframe1` \@\@\@ `//iframe2` \@\@\@ `...` \@\@\@ `//element`. 

The essential rule here is that each piece of this chunk should be an XPath pointing to an iframe.

In most cases, when dealing with a single frame, the first chunk is simply **//iframe**:

``` xml @xpathExample(`We may reach the **//p** as follows:`,`//iframe@@@//p`)
<iframe _root id='someFrame'> 
    <div _root>
        <p id='f1'>Paragraph in frame</p>
    </div>
</iframe>
```

When there is more than one nested **iframe**, the solution is very similar:

``` xml @xpathExample(`The **button** is within rootFrame2:`,`//iframe[@id="rootFrame2"]@@@//iframe@@@//button`)
<div _root>
<iframe id='rootFrame1' src='frame1.html'> 
    <label _root>Hello from frame1</label>
</iframe>
<hr/>
<iframe id='rootFrame2' src='frame2.html'> 
    <iframe _root id='subframe1' src='subframe2.html'>
        <button _root>Some Button</button>
    </iframe>
</iframe>
</div>
```

So, the path to an iframe is essentially a series of these `@@@`-connected locators, helping you navigate through nested frames to reach the desired element.

### Combining XPath and CSS with `css=`

Think of Rapise Extended Locator chunks as building blocks. Any of these chunks can be treated as CSS when you add the `css=` prefix.

Consider this example:

``` xml @xpathPart(xpathAndCss)
<ul _root>
    <li id="id1">Item One</li>
    <li id="id2">Item Two</li>
    <li id="id3">Item Three</li>
</ul>
```

You can use XPath:

@xpath1PExample(`//*[@id="id2"]`,xpathAndCss,1,true)

Or CSS for the same node:

@xpath1PExample(`css=#id2`,xpathAndCss,1,true)

The same principle applies to parts of a multi-frame locator:

``` xml @xpathPart(xpathAndCssFrame)
<iframe _root id='someFrame'> 
    <div _root>
        <p id='f1'>Paragraph in frame</p>
    </div>
</iframe>
```

You can use XPath:

@xpath1PExample(`//iframe@@@//p`,xpathAndCssFrame,1,true)

Or CSS in the first part:

@xpath1PExample(`css=iframe@@@//p`,xpathAndCssFrame,1,true)

Or CSS in the last part:

@xpath1PExample(`//iframe@@@css=p`,xpathAndCssFrame,1,true)

Or CSS in both parts:

@xpath1PExample(`css=iframe@@@css=p`,xpathAndCssFrame,1,true)

So, the `css=` prefix allows you to use CSS selectors within the Rapise Extended Locator, giving you flexibility in combining XPath and CSS based on your needs.

### Shadow DOM Locators

Another challenge in finding elements is the presence of [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM).

Custom elements can be recognized by the presence of a `-` in the tag name, like `<my-button>`.

Consider a custom element as a template placeholder for a chunk of HTML, as it is rendered using "conventional" HTML tags. However, similar to **iframes**, the contents are separated into the DOM of the containing document.

``` xml @xpathExample(`Try to find a button:`,`//button`)
<template id="my-button"><span><button>Button in Shadow DOM</button></span></template>
<script>customElements.define("my-button", class extends HTMLElement {
    constructor() { super();
      this.attachShadow({ mode: "open" }).appendChild(document.getElementById("my-button").content.cloneNode(true));
    }});</script>
<div _root>
    <my-button/>
</div>
```

The query finds nothing because the button hides in shadows. Rapise Extended locator may drill into **#shadow-root** by means of '@#@' separator.

But now the next obstacle. XPath does not work inside **#shadow-root**. Only CSS may do.

The query finds nothing because the button is hidden in shadows. Rapise Extended locator can drill into **#shadow-root** using the `@#@` separator.

However, there's another challenge. XPath doesn't work inside **#shadow-root**. Only CSS can be used.

``` xml @xpathPart(shadowDomNoXPathCss)
<template id="my-button"><span><button>Button in Shadow DOM</button></span></template>
<script>customElements.define("my-button", class extends HTMLElement {
    constructor() { super();
      this.attachShadow({ mode: "open" }).appendChild(document.getElementById("my-button").content.cloneNode(true));
    }});</script>
<div _root>
    <my-button/>
</div>
```

XPath to **my-button** then CSS to **button**:

@xpath1PExample(`//my-button@#@css=button`,shadowDomNoXPathCss,1,true)

Or CSS in the first part:

@xpath1PExample(`css=my-button@#@css=button`,shadowDomNoXPathCss,1,true)

So, to locate elements within the shadow DOM, Rapise Extended locators provide a way to navigate through **#shadow-root** using the `@#@` separator, and CSS selectors can be used for element identification inside it.

## Using DevTools Console

You can experiment with XPath and CSS selectors directly in your web browser. All major browsers like Chrome, Edge, and Firefox provide a developer console that allows you to perform actions as described below.

### Elements panel

1. Press `F12` to open Chrome DevTools.
2. The `Elements` panel should be open by default.
3. Press `Ctrl + F` to enable searching in the DOM panel.
4. Enter XPath or CSS selectors to see the results.

If there are matching elements, they will be highlighted in the DOM.

Be cautious: if there are matching strings inside the DOM, they will also be considered valid results. For instance, a CSS selector like `header` might match everything (inline CSS, scripts, etc.) containing the word "header," rather than just actual elements.

### Console panel

1. Press `F12` to open Edge/Chrome/Firefox DevTools.
2. Switch to the `Console` panel.
3. Type XPath like `$x(".//header")` to evaluate and validate.
4. Type CSS selectors like `$$("header")` to evaluate and validate.
5. Review the results returned from console execution.

If elements are matched, they will be listed. Otherwise, an empty list `[ ]` is displayed.

``` sh
> $x('//div')
(11) [div#root, div.container-fluid, div.navbar-header, div.collapse.navbar-collapse, div.row.well, div, div.col-md-6, div.col-md-4.col-md-offset-2, div.form-group, div.form-group, div]

> $x(".//not-a-tag")
[ ]

```

If the XPath or CSS selector is invalid, an exception will be shown. For example:

``` sh
$x(".//header/")
SyntaxError: Failed to execute 'evaluate' on 'Document': The string './/header/' is not a valid XPath expression.

$$("header[id=]")
SyntaxError: Failed to execute 'querySelectorAll' on 'Document': 'header[id=]' is not a valid selector.
```

## Cheat Sheet

**Rapise Locators**

Explore Rapise locators: [Rapise XPath Guide](https://rapisedoc.inflectra.com/Guide/xpath/)

**XPath Cheat Sheet**

Master XPath with this cheat sheet: [XPath Quick Reference](https://devhints.io/xpath)

**CSS Cheat Sheet**

Get to know CSS selectors: [CSS Selectors Reference](https://www.w3schools.com/cssref/css_selectors.php)

## Exam

Your goal is to provide right answer for each of the questions below.

### Exam Index

``` xml @xpathQuiz(`Select 3rd **li** item by [index](#xpath-using-index):`)
<ul _root _expectedXPath="//li[3]">
    <li>Carrot</li>
    <li>Plum</li>
    <li>Apple</li>
</ul>
```

### Exercise Absolute

We have 3 buttons:

``` xml @xpathQuiz(`Get **full** ([absolute](#absolute-xpath)) XPath to a button **2**:`)
<span _expectedXPath="/html/body/span/button[2]">
    <button>1</button>
    <button _correct>2</button>
    <button>3</button>
</span>



```

### Exercise Relative

``` xml @xpathQuiz(`Using [relative XPath](#relative-xpath-in-xml) make path from Apple to Wildberries`)
<ul _root>
    <li _current>Apple</li>
    <li>Orange</li>
    <li>Mango</li>
    <li _correct>Wildberries</li>
</ul>
```

### Exercise Resilient

We have two versions of the same site:

**Old Version:**

``` xml @xpathPart(orep1)
<ol _root>
    <li id="1">One</li>
    <li id="2">Two</li>
    <li id="3" _correct>Three</li>
</ol>
```

**New Version:**

``` xml @xpathPart(orep2)
<ul _root>
    <li name="one">- One</li>
    <li name="two">- Two</li>
    <li name="three" _correct>- Three</li>
</ul>
```

Make a locator that finds the row number 3 in [both](#or) old version and new version:

@xpath2PQuiz(orep1,orep2)

### Exercise Full Text

``` xml @xpathQuiz(`Get [full text](#selecting-full-text) of the welcome message:`)
<div _root><p id="welcome_message" _oneline _expectedText="Welcome, Administrator !">
    Welcome, <i>Administrator</i> <b>!</b>
</p>
<a href="#logout">Logout</>
</div>

```


### Exercise Find By Text

``` xml @xpathQuiz(`We need to find a button containing 'very good':`)
<body _root>
    <button _correct _oneline>This hotel is <b>very</b> <i>good</i></button>
    <button _oneline>This hotel is not so <i>good</i></button>
</body>

```

### Exercise By Class

``` xml @xpathQuiz(`Select all **li** items having [class](#selecting-class) **ok**`)
<ul _root>
    <li class="active ok" _correct>Test 1</li>
    <li class="notok">Test 2</li>
    <li class="ok disabled" _correct>Test 3</li>
    <li class="default notok">Test 4</li>
    <li class="ok" _correct>Test 5</li>
</ul>
```

### Exercise Count

``` xml @xpathQuiz(`Count number of **em** elements:`)
<p _root _expectedText="3" _oneline>
    A basket contained a <em>lemon</em>, two <em>apples</em>, and two <em>white plums</em>.
</p>
```

### Exercise CSS Class

``` xml @cssQuiz(`Using CSS select all **li** items having [class](#css-class) **ok**`)
<ul _root>
    <li class="active ok" _correct>Test 1</li>
    <li class="notok">Test 2</li>
    <li class="ok disabled" _correct>Test 3</li>
    <li class="default notok">Test 4</li>
    <li class="ok" _correct>Test 5</li>
</ul>
```

### Exercise Rapise iframe Selector

``` xml @xpathQuiz(`Select the **button** with id **targetButton**. Note the [iframe](#path-to-iframe):`)
<div _root>
<iframe id='rootFrame1' src='frame1.html'> 
    <button _root>Click me!</button>
</iframe>
<hr/>
<iframe id='rootFrame2' src='frame2.html'> 
    <button id='targetButton' _root _correct>Click me!</button>
</iframe>
</div>


```

### Exercise Shadow DOM

``` xml @xpathQuiz(`Find a **button** element within [Shadow DOM](#shadow-dom-locators)`)
<template id="custom-button"><span><button _correct>Custom Button in Shadow DOM</button></span></template>
<script>customElements.define("custom-button", class extends HTMLElement {
    constructor() { super();
      this.attachShadow({ mode: "open" }).appendChild(document.getElementById("custom-button").content.cloneNode(true));
    }});</script>
<div _root>
    <custom-button/>
</div>
```

### You are Done

> Here the exam ends. If all your answers are correct, mark the training incident as Resolved. Otherwise don't hesitate to share your problems and questions!