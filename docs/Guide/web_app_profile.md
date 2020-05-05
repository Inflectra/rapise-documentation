# Web Application Profile

Each web application is unique in terms of assigning attributes to elements and this complicates the process of generating XPath locators. Some applications assign dynamic IDs to elements, some use ARIA attributes and some do not, some values of class attribute have meaning related to element position and some just used for element styling. There are also cases when an app contains hidden DOM layers which stack on top of each other. So usage of same set of attributes for generating XPath is not efficient and may lead to weak locators that break after application reloading or slight modification. To cope with these problems Rapise introduces Web App Profile. It is a simple JSON file of a defined structure that instructs Rapise how to build XPath for elements in a particular application. From this topic you will learn how to define a profile for your web application.

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
        ],
        clickable: {
            classes: [
                /* "sapMInputBaseIcon" */
            ]
        },
        handlers:
        {
            elementName: function(el)
            {
                /*
                var label = __getAttribute(el, "aria-label");
                if (label)
                {
                    if (label.indexOf(",") > 0)
                    {
                        return label.split(",")[0];
                    }
                    return label;
                }
                */
                return null;
            },
            skipAttribute: function (node, attr, value)
            {
                /*
                var tag = node.tagName.toLowerCase();
                if (attr == "title")
                {
                    if (tag == "textarea" || tag == "select" || tag == "input")
                    {
                        return true;
                    }
                }
                else if (attr == "text")
                {
                    if (__hasAttribute(node, "data-id") || __hasAttribute(node, "id"))
                    {
                        return true;
                    }
                }
                */
                return false;
            }
        }
    }
}
```

## WebAppProfile Format

- `record.attributes` array contains definition of attributes to record.
    - `name` is the only required property for an attribute. It is case insensitive.
    - `notEmpty` is `false` by default. If set to `true` then the attribute will be recorded only if it has non empty value.
    - `exclude` is a regular expression. If attribute value matches the regexp then the attribute is not recorded.

    > Note: Rapise 6.4+ supports `text` attribute that is mapped to inner text of leaf elements.

- `record.classes` array lists class names that are meaningful for element identification and should be recorded.
    - `name` is the only required property for a class. It is case sensitive.
- `record.anchors` array lists anchors.
    - `xpath` is the only required property for an anchor.
- `record.clickable.classes` is an array of classes that indicate clickable elements. By default Rapise does not record clicks on DIVs, SPANs and some other elements. By listing classes of elements that can be clicked you may change the default behavior. Requires Rapise 6.4+
- `record.handlers` is an objects that defines functions injected into the recorder. Requires Rapise 6.4+
    - `elementName(el)` builds a name for a given element. This name is used as object ID in the object repository. If this function returns `null` then default algorithm is used to build the name.
    - `skipAttribute(node, attr, value)` allows to skip recording of some attributes in specific cases. The function must return `true` if an attribute should not be recorded.

## Anchors

When XPath of an element is being recorded and the element belongs to the sub-tree of an anchor element (including the anchor element itself) then XPath of the element will start/or be replaced with XPath of the anchor element.

### Example 1

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

## Example 2

Here is more complex and real-life example. In [Microsoft Dynamics 365 Business Central](https://dynamics.microsoft.com/en-us/business-central/overview/) application when you navigate through the forms they are loaded into the DOM tree inside DIV elements with `spa-view` class. When you move from one form to another - old forms are not unloaded and continue to stay in the DOM tree. They just have lower `z-index` then currently active form.

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

### Example 3

Requires Rapise 6.4+. An anchor may be used to rewrite XPath for an element completely. It means if an anchor points to an element then it will be used instead of XPath expression generated using attributes. Let's assume we have a page

```html
<table>
    <tr>
        <td>
            <span>UserName</span>
        </td>
        <td>
            <input type="text" id="obj-1267" title="Enter email or user ID:"/>
        </td>
    </tr>
</table>
```

If we have an anchor defined like

```javascript
{ xpath: "//input[../../td/span[text()='UserName']]"}
```

and we click on the field then instead of something like

```nohighlight
//input[@title='Enter email or user ID:']
```

the recorder will use the anchor.

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