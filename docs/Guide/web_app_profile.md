# Web Application Profile

Each web application is unique in terms of assigning attributes to elements and this complicates the process of generating XPath locators. Some applications assign dynamic IDs to elements, some use ARIA attributes and some do not, some values of class attribute have meaning related to element position and some just used for styling. There are also cases when an app contains hidden DOM layers which stack on top of each other. So usage of same set of attributes for generating XPath is not efficient and may lead to weak locators that break after application reloading or slight modification. To cope with these problems Rapise introduces Web App Profile. It is a simple JSON file of a defined structure that instructs Rapise how to build XPath for elements in a particular application. From this topic you will learn how to define a profile for your web application.

## Purpose of WebAppProfile

`WebAppProfile` serves as an instruction to Rapise on how to record XPath locators for elements in a given application.

`WebAppProfile` addresses one of the challenges in web UI test automation: generation of resilient XPath locators during test recording.

## Adding WebAppProfile to a Test

To create `WebAppProfile.json` file in your test navigate to `Files` tab, right click `Scripts` folder and choose `Create... > WebAppProfile.json`.

<img src="/Guide/img/web_app_profile_create.gif" width="746"/>

The default profile looks like this:

```javascript
{
    record: 
    {
        attributes: [
            { name: "id", notEmpty: true, exclude: "\\d" },
            { name: "class", notEmpty: true, exclude: "\\d"},
            { name: "title" },
            { name: "name" },
            { name: "style" },
            { name: "type" },
            { name: "value" },
            { name: "placeholder" },
            { name: "autocomplete" },
            { name: "href" },
            { name: "role" }
        ],
        classes: [
            /* { name: "content" } */
        ],
        anchors: [
            /* { xpath: "//div[@class='content-wrapper']" } */
        ]
    }
}
```

## WebAppProfile Format

- `record.attributes` array  contains definition of attributes to record.
    - `name` is the only required property for an attribute. It is case insensitive.
    - `notEmpty` is `false` by default. If set to `true` then the attribute will be recorded only if it has non empty value.
    - `exclude` is a regular expression. If attribute value matches the regexp then the attribute is not recorded.
- `record.classes` array lists class names that are meaningful for element identification and should be recorded.
    - `name` is the only required property for a class. It is case sensitive.
- `record.anchors` array lists anchors.
    - `xpath` is the only required property for an anchor.

## Anchors

When element XPath is recorded and an element belongs to a DOM sub-tree of an anchor then anchor XPath is always appended to element XPath.

Let's look at the example. Here we have a table built with DIVs and ARIA roles.

```html
<div id="Customers" role="grid">
    <div role="row">
        <span role="cell" title="Contoso"></span>
        ...
    </div>
    ...
</div>
```

If we record just using `title` attribute and it's value is unique for the page we'll end up with a locator

```nohighlight
//span[@title='Contoso']
```

However if we define an anchor

```nohighlight
//div[@id='Customers']
```

we'll get the locator as

```nohighlight
//div[@id='Customers']//span[@title='Contoso']
```

The locator is now bound to the table. If another element with `Contoso` title appears somewhere on the page (outside the table) we'll find the correct element.

Here is more complex and real-life example. In [Microsoft Dynamics 365 Business Central](https://dynamics.microsoft.com/en-us/business-central/overview/) application when you navigate through the forms they are loaded into the DOM tree inside DIV elements with `spa-view` class. When you move from one form to another - old forms are not unloaded an continue to sit in the DOM tree. They just have lower `z-index` then currently active form.

<img src="/Guide/img/web_app_profile_hidden_layers.png" width="485"/>

It means that when Rapise searches for an element during test playback it should work with the topmost `spa-view`.

To achieve this goal we define an anchor in WebAppProfile for the application

```nohighlight
//div[contains(concat(' ', @class, ' '), ' spa-view ') and position()=last()]
```

Here is an example of automatically recorded XPath

```nohighlight
//div[contains(concat(' ', @class, ' '), ' spa-view ') and position()=last()]//span[@aria-label='Customers']
```

The anchor prevents us from finding elements that are not visible to user and ensure that if we find an element it belongs to an active form.

## XPath Minimization

Rapise always tries to build the minimal XPath locator possible with a given set of attributes, classes and anchors. [Full XPath is not an option](https://www.inflectra.com/support/knowledgebase/kb282.aspx).

Let's assume we have a page

```html
<div>
    <div>
        <span title="Account"></span>
        ...
    </div>
    ...
</div>
```

and XPath

```nohighlight
//span[@title='Account']
```

finds a single node, then it is a good minimal locator for the element.

Compare with full XPath

```nohighlight
/div[1]/div[1]/span[@title='Account']
```

that may easily become broken with page layout changes.

## See Also

- [Web Testing](web_testing.md)
- [Self-healing Web Locators](web_self_healing.md)