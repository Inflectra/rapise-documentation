Summary: This is a JavaScript wrapper for RemoteWebElement of Selenium .NET library.

# WebElementWrapper

This is a JavaScript wrapper for RemoteWebElement of Selenium .NET library.For code complete feature use class name WebElementWrapper, e.g. <br><br><p style="margin-left: 30px;"><code>var /&#42;&#42;WebElementWrapper&#42;/element = WebDriver.FindElementById('username');</code></p>






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [Clear](#clear) | Clears the content of this element. |
|  [Click](#click) | Clicks this element. |
|  [ClickAt](#clickat) | Clicks this element at the specified location. |
|  [ContextClick](#contextclick) | Opens context menu for this element. |
|  [ContextClickAt](#contextclickat) | Opens context menu for this element. |
|  [DoubleClick](#doubleclick) | Performs double click on this element. |
|  [DoubleClickAt](#doubleclickat) | Performs double click on this element. |
|  [FindElement](#findelement) | Finds the first descendant element that matches By selector. |
|  [FindElementByClassName](#findelementbyclassname) | Finds the first descendant element that matches the CSS Class supplied. |
|  [FindElementByCssSelector](#findelementbycssselector) | Finds the first descendant element matching the specified CSS selector. |
|  [FindElementById](#findelementbyid) | Finds the first descendant element that matches the ID supplied. |
|  [FindElementByLinkText](#findelementbylinktext) | Finds the first of descendant elements that match the link text supplied. |
|  [FindElementByName](#findelementbyname) | Finds the first of descendant elements that match the name supplied. |
|  [FindElementByPartialLinkText](#findelementbypartiallinktext) | Finds the first of descendant elements that match the part of the link text supplied. |
|  [FindElementByTagName](#findelementbytagname) | Finds the first of descendant elements that match the DOM Tag supplied. |
|  [FindElementByXPath](#findelementbyxpath) | Finds the first of descendant elements that match the XPath supplied. |
|  [FindElements](#findelements) | Finds a list of descendant elements that match the supplied By object. |
|  [FindElementsByClassName](#findelementsbyclassname) | Finds all decendant elements that match the class name supplied. |
|  [FindElementsByCssSelector](#findelementsbycssselector) | Finds all descendant elements matching the specified CSS selector. |
|  [FindElementsById](#findelementsbyid) | Finds all descendant elements that matche the ID supplied. |
|  [FindElementsByLinkText](#findelementsbylinktext) | Finds all descendant elements that match the link text supplied. |
|  [FindElementsByName](#findelementsbyname) | Finds all descendant elements that match the name supplied. |
|  [FindElementsByPartialLinkText](#findelementsbypartiallinktext) | Finds all descendant elements that match the part of the link text supplied. |
|  [FindElementsByTagName](#findelementsbytagname) | Finds all descendant elements that match the DOM Tag supplied. |
|  [FindElementsByXPath](#findelementsbyxpath) | Finds all descendant elements that match the XPath supplied. |
|  [GetAttribute](#getattribute) | Gets the value of the specified attribute for this element. |
|  [GetComputedAccessibleLabel](#getcomputedaccessiblelabel) | Gets the computed accessible label of this element. |
|  [GetComputedAccessibleRole](#getcomputedaccessiblerole) | Gets the computed accessible role of this element. |
|  [GetCoordinates](#getcoordinates) | Gets a `Point` object containing the coordinates of the upper-left corner of this element relative to the upper-left corner of the page. |
|  [GetCssValue](#getcssvalue) | Gets the value of a CSS property of this element. |
|  [GetDisplayed](#getdisplayed) | Gets a value indicating whether or not this element is displayed. |
|  [GetDomAttribute](#getdomattribute) | Gets the value of a declared HTML attribute of this element. |
|  [GetDomProperty](#getdomproperty) | Gets the value of a JavaScript property of this element. |
|  [GetEnabled](#getenabled) | Gets a value indicating whether or not this element is enabled. |
|  [GetHashCode](#gethashcode) | Method to get the hash code of the element. |
|  [GetId](#getid) | Gets internal element id. |
|  [GetLocation](#getlocation) | Gets a `Point` object containing the coordinates of the upper-left corner of this element relative to the upper-left corner of the page. |
|  [GetLocationOnScreenOnceScrolledIntoView](#getlocationonscreenoncescrolledintoview) | Gets the point where the element would be when scrolled into view. |
|  [GetScreenshotIW](#getscreenshotiw) | Gets screenshot of the element. |
|  [GetSelected](#getselected) | Gets a value indicating whether or not this element is selected. |
|  [GetSize](#getsize) | Gets a 'Size' object containing the height and width of this element. |
|  [GetTagName](#gettagname) | Gets the tag name of this element. |
|  [GetText](#gettext) | Gets the innerText of this element, without any leading or trailing whitespace, and with other whitespace collapsed. |
|  [SelectOptionByText](#selectoptionbytext) | Selects option from select element. |
|  [SendKeys](#sendkeys) | Simulates typing text into the element. |
|  [Submit](#submit) | Submits this element to the web server. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="Clear"></a>    
#### Clear

Clears the content of this element.

```javascript
element.Clear()
```





<a name="see.also.webelementwrapper.clear"></a>

<a name="Click"></a>    
#### Click

Clicks this element.

```javascript
element.Click()
```





<a name="see.also.webelementwrapper.click"></a>

<a name="ClickAt"></a>    
#### ClickAt

Clicks this element at the specified location.

```javascript
element.ClickAt(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  Horizontal offset from the top-left corner of the element. |
| y | number |  Vertical offset from the top-left corner of the element. |





<a name="see.also.webelementwrapper.clickat"></a>

<a name="ContextClick"></a>    
#### ContextClick

Opens context menu for this element.

```javascript
element.ContextClick()
```





<a name="see.also.webelementwrapper.contextclick"></a>

<a name="ContextClickAt"></a>    
#### ContextClickAt

Opens context menu for this element. Requires Rapise 8.3+.

```javascript
element.ContextClickAt(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  Horizontal offset from the top-left corner of the element. |
| y | number |  Vertical offset from the top-left corner of the element. |





<a name="see.also.webelementwrapper.contextclickat"></a>

<a name="DoubleClick"></a>    
#### DoubleClick

Performs double click on this element.

```javascript
element.DoubleClick()
```





<a name="see.also.webelementwrapper.doubleclick"></a>

<a name="DoubleClickAt"></a>    
#### DoubleClickAt

Performs double click on this element. Requires Rapise 8.3+.

```javascript
element.DoubleClickAt(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  Horizontal offset from the top-left corner of the element. |
| y | number |  Vertical offset from the top-left corner of the element. |





<a name="see.also.webelementwrapper.doubleclickat"></a>

<a name="FindElement"></a>    
#### FindElement

Finds the first descendant element that matches By selector. Requires Rapise 8.3+.

```javascript
element.FindElement(by)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| by | By |  By object. |




**Returns:**

element or null.



<a name="see.also.webelementwrapper.findelement"></a>

<a name="FindElementByClassName"></a>    
#### FindElementByClassName

Finds the first descendant element that matches the CSS Class supplied.

```javascript
element.FindElementByClassName(className)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| className | string |  CSS class name of the element. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): element or null.



<a name="see.also.webelementwrapper.findelementbyclassname"></a>

<a name="FindElementByCssSelector"></a>    
#### FindElementByCssSelector

Finds the first descendant element matching the specified CSS selector.

```javascript
element.FindElementByCssSelector(cssSelector)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cssSelector | string |  The CSS selector to match. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): element ot null.



<a name="see.also.webelementwrapper.findelementbycssselector"></a>

<a name="FindElementById"></a>    
#### FindElementById

Finds the first descendant element that matches the ID supplied.

```javascript
WebDriver.FindElementByTagName('section').FindElementById('h3')
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| id | string |  ID of the element. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): element or null.



<a name="see.also.webelementwrapper.findelementbyid"></a>

<a name="FindElementByLinkText"></a>    
#### FindElementByLinkText

Finds the first of descendant elements that match the link text supplied.

```javascript
element.FindElementByLinkText(linkText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| linkText | string |  Link text of element. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): element or null.



<a name="see.also.webelementwrapper.findelementbylinktext"></a>

<a name="FindElementByName"></a>    
#### FindElementByName

Finds the first of descendant elements that match the name supplied.

```javascript
element.FindElementByName(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Name of the element on the page. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): element or null.



<a name="see.also.webelementwrapper.findelementbyname"></a>

<a name="FindElementByPartialLinkText"></a>    
#### FindElementByPartialLinkText

Finds the first of descendant elements that match the part of the link text supplied.

```javascript
element.FindElementByPartialLinkText(partialLinkText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| partialLinkText | string |  Part of the link text. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): element or null.



<a name="see.also.webelementwrapper.findelementbypartiallinktext"></a>

<a name="FindElementByTagName"></a>    
#### FindElementByTagName

Finds the first of descendant elements that match the DOM Tag supplied.

```javascript
element.FindElementByTagName(tagName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tagName | string |  DOM tag Name of the element being searched. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): element or null.



<a name="see.also.webelementwrapper.findelementbytagname"></a>

<a name="FindElementByXPath"></a>    
#### FindElementByXPath

Finds the first of descendant elements that match the XPath supplied.

```javascript
element.FindElementByXPath(xpath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |  xpath to the element. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): element or null.



<a name="see.also.webelementwrapper.findelementbyxpath"></a>

<a name="FindElements"></a>    
#### FindElements

Finds a list of descendant elements that match the supplied By object. Requires Rapise 8.3+.

```javascript
element.FindElements(by)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| by | By |  By object. |




**Returns:**

array of elements.



<a name="see.also.webelementwrapper.findelements"></a>

<a name="FindElementsByClassName"></a>    
#### FindElementsByClassName

Finds all decendant elements that match the class name supplied.

```javascript
element.FindElementsByClassName(className)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| className | string |  className of the element. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): array of elements.



<a name="see.also.webelementwrapper.findelementsbyclassname"></a>

<a name="FindElementsByCssSelector"></a>    
#### FindElementsByCssSelector

Finds all descendant elements matching the specified CSS selector.

```javascript
element.FindElementsByCssSelector(cssSelector)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cssSelector | string |  The CSS selector to match. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): array of elements.



<a name="see.also.webelementwrapper.findelementsbycssselector"></a>

<a name="FindElementsById"></a>    
#### FindElementsById

Finds all descendant elements that matche the ID supplied.

```javascript
element.FindElementsById(id)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| id | string |  ID of the element. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): array of elements.



<a name="see.also.webelementwrapper.findelementsbyid"></a>

<a name="FindElementsByLinkText"></a>    
#### FindElementsByLinkText

Finds all descendant elements that match the link text supplied.

```javascript
element.FindElementsByLinkText(linkText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| linkText | string |  Link text of element. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): array of elements.



<a name="see.also.webelementwrapper.findelementsbylinktext"></a>

<a name="FindElementsByName"></a>    
#### FindElementsByName

Finds all descendant elements that match the name supplied.

```javascript
element.FindElementsByName(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Name of the element on the page. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): array of elements.



<a name="see.also.webelementwrapper.findelementsbyname"></a>

<a name="FindElementsByPartialLinkText"></a>    
#### FindElementsByPartialLinkText

Finds all descendant elements that match the part of the link text supplied.

```javascript
element.FindElementsByPartialLinkText(partialLinkText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| partialLinkText | string |  Part of the link text. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): array of elements.



<a name="see.also.webelementwrapper.findelementsbypartiallinktext"></a>

<a name="FindElementsByTagName"></a>    
#### FindElementsByTagName

Finds all descendant elements that match the DOM Tag supplied.

```javascript
element.FindElementsByTagName(tagName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tagName | string |  DOM tag Name of the element being searched. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): array of elements.



<a name="see.also.webelementwrapper.findelementsbytagname"></a>

<a name="FindElementsByXPath"></a>    
#### FindElementsByXPath

Finds all descendant elements that match the XPath supplied.

```javascript
element.FindElementsByXPath(xpath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |  xpath to the element. |




**Returns:**

[WebElementWrapper](WebElementWrapper.md): array of elements.



<a name="see.also.webelementwrapper.findelementsbyxpath"></a>

<a name="GetAttribute"></a>    
#### GetAttribute

Gets the value of the specified attribute for this element.

```javascript
element.GetAttribute(attributeName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| attributeName | string |  Name of the element attribute. |





<a name="see.also.webelementwrapper.getattribute"></a>

<a name="GetComputedAccessibleLabel"></a>    
#### GetComputedAccessibleLabel

Gets the computed accessible label of this element. Requires Rapise 8.3+.

```javascript
element.GetComputedAccessibleLabel()
```





<a name="see.also.webelementwrapper.getcomputedaccessiblelabel"></a>

<a name="GetComputedAccessibleRole"></a>    
#### GetComputedAccessibleRole

Gets the computed accessible role of this element. Requires Rapise 8.3+.

```javascript
element.GetComputedAccessibleRole()
```





<a name="see.also.webelementwrapper.getcomputedaccessiblerole"></a>

<a name="GetCoordinates"></a>    
#### GetCoordinates

Gets a `Point` object containing the coordinates of the upper-left corner of this element relative to the upper-left corner of the page.

```javascript
element.GetCoordinates()
```





<a name="see.also.webelementwrapper.getcoordinates"></a>

<a name="GetCssValue"></a>    
#### GetCssValue

Gets the value of a CSS property of this element.

```javascript
element.GetCssValue(propertyName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| propertyName |  |   |





<a name="see.also.webelementwrapper.getcssvalue"></a>

<a name="GetDisplayed"></a>    
#### GetDisplayed

Gets a value indicating whether or not this element is displayed.

```javascript
element.GetDisplayed()
```





<a name="see.also.webelementwrapper.getdisplayed"></a>

<a name="GetDomAttribute"></a>    
#### GetDomAttribute

Gets the value of a declared HTML attribute of this element. Requires Rapise 8.3+.

```javascript
element.GetDomAttribute(attributeName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| attributeName | string |  Name of the declared element attribute. |





<a name="see.also.webelementwrapper.getdomattribute"></a>

<a name="GetDomProperty"></a>    
#### GetDomProperty

Gets the value of a JavaScript property of this element. Requires Rapise 8.3+.

```javascript
element.GetDomProperty(propertyName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| propertyName | string |  Name of the DOM property to read. |





<a name="see.also.webelementwrapper.getdomproperty"></a>

<a name="GetEnabled"></a>    
#### GetEnabled

Gets a value indicating whether or not this element is enabled.

```javascript
element.GetEnabled()
```





<a name="see.also.webelementwrapper.getenabled"></a>

<a name="GetHashCode"></a>    
#### GetHashCode

Method to get the hash code of the element.

```javascript
element.GetHashCode()
```





<a name="see.also.webelementwrapper.gethashcode"></a>

<a name="GetId"></a>    
#### GetId

Gets internal element id.

```javascript
element.GetId()
```





<a name="see.also.webelementwrapper.getid"></a>

<a name="GetLocation"></a>    
#### GetLocation

Gets a `Point` object containing the coordinates of the upper-left corner of this element relative to the upper-left corner of the page.

```javascript
element.GetLocation()
```





<a name="see.also.webelementwrapper.getlocation"></a>

<a name="GetLocationOnScreenOnceScrolledIntoView"></a>    
#### GetLocationOnScreenOnceScrolledIntoView

Gets the point where the element would be when scrolled into view.

```javascript
element.GetLocationOnScreenOnceScrolledIntoView()
```





<a name="see.also.webelementwrapper.getlocationonscreenoncescrolledintoview"></a>

<a name="GetScreenshotIW"></a>    
#### GetScreenshotIW

Gets screenshot of the element.

```javascript
element.GetScreenshotIW()
```





<a name="see.also.webelementwrapper.getscreenshotiw"></a>

<a name="GetSelected"></a>    
#### GetSelected

Gets a value indicating whether or not this element is selected.

```javascript
element.GetSelected()
```





<a name="see.also.webelementwrapper.getselected"></a>

<a name="GetSize"></a>    
#### GetSize

Gets a 'Size' object containing the height and width of this element.

```javascript
element.GetSize()
```





<a name="see.also.webelementwrapper.getsize"></a>

<a name="GetTagName"></a>    
#### GetTagName

Gets the tag name of this element.

```javascript
element.GetTagName()
```





<a name="see.also.webelementwrapper.gettagname"></a>

<a name="GetText"></a>    
#### GetText

Gets the innerText of this element, without any leading or trailing whitespace, and with other whitespace collapsed.

```javascript
element.GetText()
```





<a name="see.also.webelementwrapper.gettext"></a>

<a name="SelectOptionByText"></a>    
#### SelectOptionByText

Selects option from select element.

```javascript
element.SelectOptionByText(option)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| option |  |   |





<a name="see.also.webelementwrapper.selectoptionbytext"></a>

<a name="SendKeys"></a>    
#### SendKeys

Simulates typing text into the element.

```javascript
element.SendKeys(text)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| text |  |   |





<a name="see.also.webelementwrapper.sendkeys"></a>

<a name="Submit"></a>    
#### Submit

Submits this element to the web server.

```javascript
element.Submit()
```





<a name="see.also.webelementwrapper.submit"></a>

  

