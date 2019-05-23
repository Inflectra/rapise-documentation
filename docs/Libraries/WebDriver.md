# WebDriver

This is a JavaScript wrapper for RemoteWebDriver of Selenium .NET library.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[Actions](#Actions) | Gets Actions object. |
|	[Close](#Close) | Close the Browser and Dispose of WebDriver. |
|	[Cookies](#Cookies) | Gets Cookies object. |
|	[CreateDriver](#CreateDriver) | This will create a WebDriver for currently selected Browser profile. |
|	[Dispose](#Dispose) | Dispose of WebDriver. |
|	[ExecuteScript](#ExecuteScript) | Executes JavaScript in the context of the currently selected frame or window. |
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
|	[GetCurrentWindowHandle](#GetCurrentWindowHandle) | Gets the current window handle, which is an opaque handle to this window that uniquely identifies it within this driver instance. |
|	[GetPageSource](#GetPageSource) | Gets the source of the page last loaded by the browser. |
|	[GetProfileCapability](#GetProfileCapability) |  |
|	[GetScreenshot](#GetScreenshot) | Gets the screenshot of the page. |
|	[GetScreenshotIW](#GetScreenshotIW) |  |
|	[GetTitle](#GetTitle) | Gets the title of the current browser window. |
|	[GetUrl](#GetUrl) | Gets the URL the browser is currently displaying. |
|	[GetWindowHandles](#GetWindowHandles) | Gets the window handles of open browser windows. |
|	[Quit](#Quit) | Disconnects from the Browser. |
|	[SetBrowserSize](#SetBrowserSize) |  |
|	[SetUrl](#SetUrl) | Sets the URL the browser is currently displaying. |
|	[SwitchToAlert](#SwitchToAlert) | Switches to the currently active modal dialog for this particular driver instance. |
|	[SwitchToDefaultContent](#SwitchToDefaultContent) | Change the active frame to the default. |
|	[SwitchToFrame](#SwitchToFrame) | Move to different frame using its element. |
|	[SwitchToLastWindow](#SwitchToLastWindow) | Switch to last browser window. |
|	[SwitchToParentFrame](#SwitchToParentFrame) | Select the parent frame of the currently selected frame. |
|	[SwitchToWindow](#SwitchToWindow) | Switch to window specified by handle. |
|	[Window](#Window) | Gets Window object. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="Actions"></a>    
#### Actions()

Gets Actions object.





<a name="see.also.webdriver.actions"></a>

<a name="Close"></a>    
#### Close()

Close the Browser and Dispose of WebDriver.





<a name="see.also.webdriver.close"></a>

<a name="Cookies"></a>    
#### Cookies()

Gets Cookies object.





<a name="see.also.webdriver.cookies"></a>

<a name="CreateDriver"></a>    
#### CreateDriver(nonProfileCapsJson)

This will create a WebDriver for currently selected Browser profile.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nonProfileCapsJson |  |	 |




**Returns:**

WebDriver object.



<a name="see.also.webdriver.createdriver"></a>

<a name="Dispose"></a>    
#### Dispose()

Dispose of WebDriver.





<a name="see.also.webdriver.dispose"></a>

<a name="ExecuteScript"></a>    
#### ExecuteScript(script, args)

Executes JavaScript in the context of the currently selected frame or window.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| script | string |	The JavaScript code to execute. |
| args | array |	The arguments to the script. |




**Returns:**

Null, string or element depending on the script.



<a name="see.also.webdriver.executescript"></a>

<a name="FindElementByClassName"></a>    
#### FindElementByClassName(className)

Finds the first element in the page that matches the CSS Class supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| className | string |	CSS class name of the element. |




**Returns:**

element or null.



<a name="see.also.webdriver.findelementbyclassname"></a>

<a name="FindElementByCssSelector"></a>    
#### FindElementByCssSelector(cssSelector)

Finds the first element matching the specified CSS selector.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cssSelector | string |	The CSS selector to match. |




**Returns:**

element ot null.



<a name="see.also.webdriver.findelementbycssselector"></a>

<a name="FindElementById"></a>    
#### FindElementById(id)

Finds the first element in the page that matches the ID supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| id | string |	ID of the element. |




**Returns:**

element or null.



<a name="see.also.webdriver.findelementbyid"></a>

<a name="FindElementByLinkText"></a>    
#### FindElementByLinkText(linkText)

Finds the first of elements that match the link text supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| linkText | string |	Link text of element. |




**Returns:**

element or null.



<a name="see.also.webdriver.findelementbylinktext"></a>

<a name="FindElementByName"></a>    
#### FindElementByName(name)

Finds the first of elements that match the name supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of the element on the page. |




**Returns:**

element or null.



<a name="see.also.webdriver.findelementbyname"></a>

<a name="FindElementByPartialLinkText"></a>    
#### FindElementByPartialLinkText(partialLinkText)

Finds the first of elements that match the part of the link text supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| partialLinkText | string |	Part of the link text. |




**Returns:**

element or null.



<a name="see.also.webdriver.findelementbypartiallinktext"></a>

<a name="FindElementByTagName"></a>    
#### FindElementByTagName(tagName)

Finds the first of elements that match the DOM Tag supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tagName | string |	DOM tag Name of the element being searched. |




**Returns:**

element or null.



<a name="see.also.webdriver.findelementbytagname"></a>

<a name="FindElementByXPath"></a>    
#### FindElementByXPath(xpath)

Finds the first of elements that match the XPath supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |	xpath to the element. |




**Returns:**

element or null.



<a name="see.also.webdriver.findelementbyxpath"></a>

<a name="FindElementsByClassName"></a>    
#### FindElementsByClassName(className)

Finds a list of elements that match the class name supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| className | string |	className of the element. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbyclassname"></a>

<a name="FindElementsByCssSelector"></a>    
#### FindElementsByCssSelector(cssSelector)

Finds all elements matching the specified CSS selector.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cssSelector | string |	The CSS selector to match. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbycssselector"></a>

<a name="FindElementsById"></a>    
#### FindElementsById(id)

Finds the first element in the page that matches the ID supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| id | string |	ID of the element. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbyid"></a>

<a name="FindElementsByLinkText"></a>    
#### FindElementsByLinkText(linkText)

Finds a list of elements that match the link text supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| linkText |  |	Link text of element. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbylinktext"></a>

<a name="FindElementsByName"></a>    
#### FindElementsByName(name)

Finds a list of elements that match the name supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of the element on the page. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbyname"></a>

<a name="FindElementsByPartialLinkText"></a>    
#### FindElementsByPartialLinkText(partialLinkText)

Finds a list of elements that match the part of the link text supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| partialLinkText | string |	Part of the link text. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbypartiallinktext"></a>

<a name="FindElementsByTagName"></a>    
#### FindElementsByTagName(tagName)

Finds a list of elements that match the DOM Tag supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tagName | string |	DOM tag Name of the element being searched. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbytagname"></a>

<a name="FindElementsByXPath"></a>    
#### FindElementsByXPath(xpath)

Finds a list of elements that match the XPath supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |	xpath to the element. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbyxpath"></a>

<a name="GetCurrentWindowHandle"></a>    
#### GetCurrentWindowHandle()

Gets the current window handle, which is an opaque handle to this window that uniquely identifies it within this driver instance.





<a name="see.also.webdriver.getcurrentwindowhandle"></a>

<a name="GetPageSource"></a>    
#### GetPageSource()

Gets the source of the page last loaded by the browser.





<a name="see.also.webdriver.getpagesource"></a>

<a name="GetProfileCapability"></a>    
#### GetProfileCapability(name)




**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name |  |	 |





<a name="see.also.webdriver.getprofilecapability"></a>

<a name="GetScreenshot"></a>    
#### GetScreenshot()

Gets the screenshot of the page.





<a name="see.also.webdriver.getscreenshot"></a>

<a name="GetScreenshotIW"></a>    
#### GetScreenshotIW()







<a name="see.also.webdriver.getscreenshotiw"></a>

<a name="GetTitle"></a>    
#### GetTitle()

Gets the title of the current browser window.





<a name="see.also.webdriver.gettitle"></a>

<a name="GetUrl"></a>    
#### GetUrl()

Gets the URL the browser is currently displaying.





<a name="see.also.webdriver.geturl"></a>

<a name="GetWindowHandles"></a>    
#### GetWindowHandles()

Gets the window handles of open browser windows.





<a name="see.also.webdriver.getwindowhandles"></a>

<a name="Quit"></a>    
#### Quit()

Disconnects from the Browser.





<a name="see.also.webdriver.quit"></a>

<a name="SetBrowserSize"></a>    
#### SetBrowserSize(width, height)




**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| width |  |	 |
| height |  |	 |





<a name="see.also.webdriver.setbrowsersize"></a>

<a name="SetUrl"></a>    
#### SetUrl(url)

Sets the URL the browser is currently displaying.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |	The URL to display |





<a name="see.also.webdriver.seturl"></a>

<a name="SwitchToAlert"></a>    
#### SwitchToAlert()

Switches to the currently active modal dialog for this particular driver instance.





<a name="see.also.webdriver.switchtoalert"></a>

<a name="SwitchToDefaultContent"></a>    
#### SwitchToDefaultContent()

Change the active frame to the default.





<a name="see.also.webdriver.switchtodefaultcontent"></a>

<a name="SwitchToFrame"></a>    
#### SwitchToFrame(el)

Move to different frame using its element.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| el | WebElementWrapper |	Element of the frame. |





<a name="see.also.webdriver.switchtoframe"></a>

<a name="SwitchToLastWindow"></a>    
#### SwitchToLastWindow()

Switch to last browser window.





<a name="see.also.webdriver.switchtolastwindow"></a>

<a name="SwitchToParentFrame"></a>    
#### SwitchToParentFrame()

Select the parent frame of the currently selected frame.





<a name="see.also.webdriver.switchtoparentframe"></a>

<a name="SwitchToWindow"></a>    
#### SwitchToWindow(windowHandle)

Switch to window specified by handle.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| windowHandle |  |	 |





<a name="see.also.webdriver.switchtowindow"></a>

<a name="Window"></a>    
#### Window()

Gets Window object.





<a name="see.also.webdriver.window"></a>

	

