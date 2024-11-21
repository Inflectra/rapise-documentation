Summary: This is a JavaScript wrapper for By of Selenium .NET library. Requires Rapise 8.3+.

# By

This is a JavaScript wrapper for By of Selenium .NET library. Requires Rapise 8.3+.Examples:
 
```javascript 
var by = By.XPath("//input[@id='username']");
var el = WebDriver.FindElement(by);
// is an alternative to
var el = WebDriver.FindElementByXPath("//input[@id='username']");
``` 

```javascript 
var by = By.XPath("//input");
var els = WebDriver.FindElements(by);
// is an alternative to
var els = WebDriver.FindElementsByXPath("//input");
```






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [ClassName](#classname) | Creates By.ClassName selector. |
|  [CssSelector](#cssselector) | Creates By.CssSelector selector. |
|  [Id](#id) | Creates By.Id selector. |
|  [LinkText](#linktext) | Creates By.LinkText selector. |
|  [Name](#name) | Creates By.Name selector. |
|  [PartialLinkText](#partiallinktext) | Creates By.PartialLinkText selector. |
|  [TagName](#tagname) | Creates By.TagName selector. |
|  [XPath](#xpath) | Creates By.XPath selector. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="ClassName"></a>    
#### ClassName

Creates By.ClassName selector.

```javascript
WebDriver.ClassName(classNameToFind)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| classNameToFind | string |  Class name to find. |




**Returns:**

By object.



<a name="see.also.by.classname"></a>

<a name="CssSelector"></a>    
#### CssSelector

Creates By.CssSelector selector.

```javascript
WebDriver.CssSelector(cssSelectorToFind)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cssSelectorToFind | string |  CSS selector to find. |




**Returns:**

By object.



<a name="see.also.by.cssselector"></a>

<a name="Id"></a>    
#### Id

Creates By.Id selector.

```javascript
WebDriver.Id(idToFind)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| idToFind | string |  Id to find. |




**Returns:**

By object.



<a name="see.also.by.id"></a>

<a name="LinkText"></a>    
#### LinkText

Creates By.LinkText selector.

```javascript
WebDriver.LinkText(linkTextToFind)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| linkTextToFind | string |  Link text to find. |




**Returns:**

By object.



<a name="see.also.by.linktext"></a>

<a name="Name"></a>    
#### Name

Creates By.Name selector.

```javascript
WebDriver.Name(nameToFind)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameToFind | string |  Name to find. |




**Returns:**

By object.



<a name="see.also.by.name"></a>

<a name="PartialLinkText"></a>    
#### PartialLinkText

Creates By.PartialLinkText selector.

```javascript
WebDriver.PartialLinkText(partialLinkTextToFind)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| partialLinkTextToFind | string |  Partial link text to find. |




**Returns:**

By object.



<a name="see.also.by.partiallinktext"></a>

<a name="TagName"></a>    
#### TagName

Creates By.TagName selector.

```javascript
WebDriver.TagName(tagNameToFind)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tagNameToFind | string |  TagName to find. |




**Returns:**

By object.



<a name="see.also.by.tagname"></a>

<a name="XPath"></a>    
#### XPath

Creates By.XPath selector.

```javascript
WebDriver.XPath(xPathToFind)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xPathToFind | string |  XPath to find. |




**Returns:**

By object.



<a name="see.also.by.xpath"></a>

  

