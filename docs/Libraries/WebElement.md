Summary: This is a JavaScript wrapper for RemoteWebElement of Selenium .NET library.

# WebElement

This is a JavaScript wrapper for RemoteWebElement of Selenium .NET library.For code complete feature use class name WebElementWrapper, e.g. <br><br><p style="margin-left: 30px;"><code>var /&#42;&#42;WebElementWrapper&#42;/el = WebDriver.FindElementById('username');</code></p>






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[Clear](#Clear) | Clears the content of this element. |
|	[Click](#Click) | Clicks this element. |
|	[ClickAt](#ClickAt) | Clicks this element at the specified location. |
|	[ContextClick](#ContextClick) | Opens context menu for this element. |
|	[DoubleClick](#DoubleClick) | Performs double click on this element. |
|	[FindElementByClassName](#FindElementByClassName) | Finds the first element in the page that matches the CSS Class supplied. |
|	[FindElementByCssSelector](#FindElementByCssSelector) | Finds the first element matching the specified CSS selector. |
|	[FindElementById](#FindElementById) | Finds the first element in the page that matches the ID supplied. |
|	[FindElementByLinkText](#FindElementByLinkText) | Finds the first of elements that match the link text supplied. |
|	[FindElementByName](#FindElementByName) | Finds the first of elements that match the name supplied. |
|	[FindElementByPartialLinkText](#FindElementByPartialLinkText) | Finds the first of elements that match the part of the link text supplied. |
|	[FindElementByTagName](#FindElementByTagName) | Finds the first of elements that match the DOM Tag supplied. |
|	[FindElementByXPath](#FindElementByXPath) | Finds the first of elements that match the XPath supplied. |
|	[FindElementsByClassName](#FindElementsByClassName) | Finds a list of elements that match the class name supplied. |
|	[FindElementsByCssSelector](#FindElementsByCssSelector) | Finds all elements matching the specified CSS selector. |
|	[FindElementsById](#FindElementsById) | Finds the first element in the page that matches the ID supplied. |
|	[FindElementsByLinkText](#FindElementsByLinkText) | Finds a list of elements that match the link text supplied. |
|	[FindElementsByName](#FindElementsByName) | Finds a list of elements that match the name supplied. |
|	[FindElementsByPartialLinkText](#FindElementsByPartialLinkText) | Finds a list of elements that match the part of the link text supplied. |
|	[FindElementsByTagName](#FindElementsByTagName) | Finds a list of elements that match the DOM Tag supplied. |
|	[FindElementsByXPath](#FindElementsByXPath) | Finds a list of elements that match the XPath supplied. |
|	[GetAttribute](#GetAttribute) | Gets the value of the specified attribute for this element. |
|	[GetCoordinates](#GetCoordinates) | Gets a 'Point' object containing the coordinates of theupper-left corner of this element relative to the upper-leftcorner of the page. |
|	[GetCssValue](#GetCssValue) | Gets the value of a CSS property of this element. |
|	[GetDisplayed](#GetDisplayed) | Gets a value indicating whether or not this element is displayed. |
|	[GetEnabled](#GetEnabled) | Gets a value indicating whether or not this element is enabled. |
|	[GetHashCode](#GetHashCode) | Method to get the hash code of the element. |
|	[GetLocation](#GetLocation) | Gets a 'Point' object containing the coordinates of theupper-left corner of this element relative to the upper-leftcorner of the page. |
|	[GetLocationOnScreenOnceScrolledIntoView](#GetLocationOnScreenOnceScrolledIntoView) | Gets the point where the element would be when scrolled into view. |
|	[GetSelected](#GetSelected) | Gets a value indicating whether or not this element is selected. |
|	[GetSize](#GetSize) | Gets a 'Size' object containing the height and width of this element. |
|	[GetTagName](#GetTagName) | Gets the tag name of this element. |
|	[GetText](#GetText) | Gets the innerText of this element, without any leading ortrailing whitespace, and with other whitespace collapsed. |
|	[SelectOptionByText](#SelectOptionByText) | Selects option from select element. |
|	[SendKeys](#SendKeys) | Simulates typing text into the element. |
|	[Submit](#Submit) | Submits this element to the web server. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="Clear"></a>    
#### Clear()

Clears the content of this element.





<a name="see.also.webelement.clear"></a>

<a name="Click"></a>    
#### Click()

Clicks this element.





<a name="see.also.webelement.click"></a>

<a name="ClickAt"></a>    
#### ClickAt(x, y)

Clicks this element at the specified location.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	 |
| y | number |	 |





<a name="see.also.webelement.clickat"></a>

<a name="ContextClick"></a>    
#### ContextClick()

Opens context menu for this element.





<a name="see.also.webelement.contextclick"></a>

<a name="DoubleClick"></a>    
#### DoubleClick()

Performs double click on this element.





<a name="see.also.webelement.doubleclick"></a>

<a name="FindElementByClassName"></a>    
#### FindElementByClassName(className)

Finds the first element in the page that matches the CSS Class supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| className | string |	CSS class name of the element. |




**Returns:**

element or null.



<a name="see.also.webelement.findelementbyclassname"></a>

<a name="FindElementByCssSelector"></a>    
#### FindElementByCssSelector(cssSelector)

Finds the first element matching the specified CSS selector.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cssSelector | string |	The CSS selector to match. |




**Returns:**

element ot null.



<a name="see.also.webelement.findelementbycssselector"></a>

<a name="FindElementById"></a>    
#### FindElementById(id)

Finds the first element in the page that matches the ID supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| id | string |	ID of the element. |




**Returns:**

element or null.



<a name="see.also.webelement.findelementbyid"></a>

<a name="FindElementByLinkText"></a>    
#### FindElementByLinkText(linkText)

Finds the first of elements that match the link text supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| linkText | string |	Link text of element. |




**Returns:**

element or null.



<a name="see.also.webelement.findelementbylinktext"></a>

<a name="FindElementByName"></a>    
#### FindElementByName(name)

Finds the first of elements that match the name supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of the element on the page. |




**Returns:**

element or null.



<a name="see.also.webelement.findelementbyname"></a>

<a name="FindElementByPartialLinkText"></a>    
#### FindElementByPartialLinkText(partialLinkText)

Finds the first of elements that match the part of the link text supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| partialLinkText | string |	Part of the link text. |




**Returns:**

element or null.



<a name="see.also.webelement.findelementbypartiallinktext"></a>

<a name="FindElementByTagName"></a>    
#### FindElementByTagName(tagName)

Finds the first of elements that match the DOM Tag supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tagName | string |	DOM tag Name of the element being searched. |




**Returns:**

element or null.



<a name="see.also.webelement.findelementbytagname"></a>

<a name="FindElementByXPath"></a>    
#### FindElementByXPath(xpath)

Finds the first of elements that match the XPath supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |	xpath to the element. |




**Returns:**

element or null.



<a name="see.also.webelement.findelementbyxpath"></a>

<a name="FindElementsByClassName"></a>    
#### FindElementsByClassName(className)

Finds a list of elements that match the class name supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| className | string |	className of the element. |




**Returns:**

array of elements.



<a name="see.also.webelement.findelementsbyclassname"></a>

<a name="FindElementsByCssSelector"></a>    
#### FindElementsByCssSelector(cssSelector)

Finds all elements matching the specified CSS selector.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cssSelector | string |	The CSS selector to match. |




**Returns:**

array of elements.



<a name="see.also.webelement.findelementsbycssselector"></a>

<a name="FindElementsById"></a>    
#### FindElementsById(id)

Finds the first element in the page that matches the ID supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| id | string |	ID of the element. |




**Returns:**

array of elements.



<a name="see.also.webelement.findelementsbyid"></a>

<a name="FindElementsByLinkText"></a>    
#### FindElementsByLinkText(linkText)

Finds a list of elements that match the link text supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| linkText | string |	Link text of element. |




**Returns:**

array of elements.



<a name="see.also.webelement.findelementsbylinktext"></a>

<a name="FindElementsByName"></a>    
#### FindElementsByName(name)

Finds a list of elements that match the name supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of the element on the page. |




**Returns:**

array of elements.



<a name="see.also.webelement.findelementsbyname"></a>

<a name="FindElementsByPartialLinkText"></a>    
#### FindElementsByPartialLinkText(partialLinkText)

Finds a list of elements that match the part of the link text supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| partialLinkText | string |	Part of the link text. |




**Returns:**

array of elements.



<a name="see.also.webelement.findelementsbypartiallinktext"></a>

<a name="FindElementsByTagName"></a>    
#### FindElementsByTagName(tagName)

Finds a list of elements that match the DOM Tag supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tagName | string |	DOM tag Name of the element being searched. |




**Returns:**

array of elements.



<a name="see.also.webelement.findelementsbytagname"></a>

<a name="FindElementsByXPath"></a>    
#### FindElementsByXPath(xpath)

Finds a list of elements that match the XPath supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |	xpath to the element. |




**Returns:**

array of elements.



<a name="see.also.webelement.findelementsbyxpath"></a>

<a name="GetAttribute"></a>    
#### GetAttribute(attributeName)

Gets the value of the specified attribute for this element.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| attributeName |  |	 |





<a name="see.also.webelement.getattribute"></a>

<a name="GetCoordinates"></a>    
#### GetCoordinates()

Gets a 'Point' object containing the coordinates of theupper-left corner of this element relative to the upper-leftcorner of the page.





<a name="see.also.webelement.getcoordinates"></a>

<a name="GetCssValue"></a>    
#### GetCssValue(propertyName)

Gets the value of a CSS property of this element.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| propertyName |  |	 |





<a name="see.also.webelement.getcssvalue"></a>

<a name="GetDisplayed"></a>    
#### GetDisplayed()

Gets a value indicating whether or not this element is displayed.





<a name="see.also.webelement.getdisplayed"></a>

<a name="GetEnabled"></a>    
#### GetEnabled()

Gets a value indicating whether or not this element is enabled.





<a name="see.also.webelement.getenabled"></a>

<a name="GetHashCode"></a>    
#### GetHashCode()

Method to get the hash code of the element.





<a name="see.also.webelement.gethashcode"></a>

<a name="GetLocation"></a>    
#### GetLocation()

Gets a 'Point' object containing the coordinates of theupper-left corner of this element relative to the upper-leftcorner of the page.





<a name="see.also.webelement.getlocation"></a>

<a name="GetLocationOnScreenOnceScrolledIntoView"></a>    
#### GetLocationOnScreenOnceScrolledIntoView()

Gets the point where the element would be when scrolled into view.





<a name="see.also.webelement.getlocationonscreenoncescrolledintoview"></a>

<a name="GetSelected"></a>    
#### GetSelected()

Gets a value indicating whether or not this element is selected.





<a name="see.also.webelement.getselected"></a>

<a name="GetSize"></a>    
#### GetSize()

Gets a 'Size' object containing the height and width of this element.





<a name="see.also.webelement.getsize"></a>

<a name="GetTagName"></a>    
#### GetTagName()

Gets the tag name of this element.





<a name="see.also.webelement.gettagname"></a>

<a name="GetText"></a>    
#### GetText()

Gets the innerText of this element, without any leading ortrailing whitespace, and with other whitespace collapsed.





<a name="see.also.webelement.gettext"></a>

<a name="SelectOptionByText"></a>    
#### SelectOptionByText(option)

Selects option from select element.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| option |  |	 |





<a name="see.also.webelement.selectoptionbytext"></a>

<a name="SendKeys"></a>    
#### SendKeys(text)

Simulates typing text into the element.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| text |  |	 |





<a name="see.also.webelement.sendkeys"></a>

<a name="Submit"></a>    
#### Submit()

Submits this element to the web server.





<a name="see.also.webelement.submit"></a>

	

