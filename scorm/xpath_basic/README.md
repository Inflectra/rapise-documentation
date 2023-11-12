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

    https://www.browserstack.com/guide/xpath-in-selenium

## Where is XML?

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


Locating Elements: XML vs. DOM
While a web page isn't precisely an XML document—it's a Document Object Model (DOM)—a comparison between a typical XML structure and the DOM of a webpage reveals striking similarities:

XML Document:

xml
Copy code
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
Webpage DOM:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Sample HTML Document</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
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
    <footer>
        <p>&copy; 2023 My Website. All rights reserved.</p>
    </footer>
</body>
</html>

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

``` xml @xpathQuiz(Enter **//b** and press **Check**:)
<p _root>
    some
    <b _correct>bold</b>
    and some
    <i>italic</i>
</p>
```

You got the point? Now select an *italic* element:

``` xml @xpathQuiz(Select <i>italic</> element:)
<p _root>
    some
    <b>bold</b>
    and some
    <i _correct>italic</i>
</p>
```

In these examples, we used tag names (`b` and `i` respectively) to find a corresponding element. But what happened if we have more than one element with the same tag? Let's see:

``` xml @xpathQuiz(Select **//b** element:)
<p _root>
    We have:
    <b _correct>bold1</b>
    and
    <b _correct>bold2</b>
</p>
```

See what happened? Two items were selected. So just tag name is not enough and we need to provide more information if we have to select just one element.

## XPath Structure

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

``` xml @xpathQuiz(` `)
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


