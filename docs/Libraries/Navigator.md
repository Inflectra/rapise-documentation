# Navigator

Navigator object. This is used to provide functions for manipulating the web browser when using the HTML libraries.






<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** |
| ------------ | --------------- |
| [AutoOpen](#AutoOpen) | During playback when Rapise connects to a browser for the first time and can not locate an object and AutoOpen is 'true' it launches a new browser instance. |
| [EnsureVisibleHorizontalAlignment](#EnsureVisibleHorizontalAlignment) | One of "start", "center", "end", or "nearest". |
| [EnsureVisibleVerticalAlignment](#EnsureVisibleVerticalAlignment) | One of "start", "center", "end", or "nearest". |
| [QuitIfNotConnected](#QuitIfNotConnected) | If connection to browser fails - open plugin page and quit. |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[CheckObjectExists](#CheckObjectExists) | Checks if object is found on the screen by its id or XPath. |
|	[CheckObjectVisible](#CheckObjectVisible) | Checks if object is visible on the screen by its id or XPath. |
|	[Close](#Close) | Closes browser. |
|	[Detach](#Detach) | Disconnects from a browser. |
|	[DoCheckAlert](#DoCheckAlert) | Waits until browser alert with a given text. |
|	[DoCheckConfirmation](#DoCheckConfirmation) | Waits until browser confirmation with a given text. |
|	[DoCheckPrompt](#DoCheckPrompt) | Waits until browser prompt with a given text. |
|	[DOMFindByAttributeValue](#DOMFindByAttributeValue) | Looks for a web element by specific attribute value through all frames. |
|	[DOMFindByName](#DOMFindByName) | Looks for a web element by its name through all frames. |
|	[DOMFindByText](#DOMFindByText) | Looks for a web element by its text contents through all frames. |
|	[DOMFindByXPath](#DOMFindByXPath) | Looks for a web element by specific local XPath value through all frames. |
|	[DoScreenshot](#DoScreenshot) | Makes screenshot of the browser window. |
|	[DoSetExpectedConfirmResult](#DoSetExpectedConfirmResult) | Set boolean value to return as a result of next browser 'confirm' request. |
|	[DoSetExpectedPromptResult](#DoSetExpectedPromptResult) | Set text to return as a result of next browser 'prompt' request. |
|	[ExecJS](#ExecJS) | Executes given JavaScript statement in a browser and returns results. |
|	[Find](#Find) | Returns HTMLObject wrapping DOM element for a given 'xpath'. |
|	[GetPerformance](#GetPerformance) | Reads performance information from currently used browser. |
|	[GetPosition](#GetPosition) | Gets position of the top-left corner of the browser window. |
|	[GetSize](#GetSize) | Gets size of the browser window. |
|	[Maximize](#Maximize) | Maximizes browser window. |
|	[Navigate](#Navigate) | Redirects browser to a specified URL. |
|	[Open](#Open) | Opens a browser. |
|	[SelectBrowserProfile](#SelectBrowserProfile) | Selects browser profile to use for testing. |
|	[SetPosition](#SetPosition) | Positions top-left corner of the browser window at specifid location. |
|	[SetSize](#SetSize) | Sets size if the browser window. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="AutoOpen"></a>
#### AutoOpen


During playback when Rapise connects to a browser for the first time and can not locate an object and AutoOpen is 'true' it launches a new browser instance.If AutoOpen is 'false' it does nothing. Default value is 'true'.Applicable to Chrome, Firefox and Internet Explorer. Selenium targets are not affected by this property.Use Navigator.GetAutoOpen() to read the value and Navigator.SetAutoOpen(true|false) to set the value.

			
	
			
Type: boolean
			
			
		
<a name="EnsureVisibleHorizontalAlignment"></a>
#### EnsureVisibleHorizontalAlignment


One of "start", "center", "end", or "nearest". Defaults to "nearest".

			
	
			
Type: string
			
			
		
<a name="EnsureVisibleVerticalAlignment"></a>
#### EnsureVisibleVerticalAlignment


One of "start", "center", "end", or "nearest". Defaults to "start".

			
	
			
Type: string
			
			
		
<a name="QuitIfNotConnected"></a>
#### QuitIfNotConnected


If connection to browser fails - open plugin page and quit. If set to 'false' - just return 'false' in Open call.

			
	
			
Type: boolean
			
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="CheckObjectExists"></a>    
#### CheckObjectExists(xpathOrObjId)

Checks if object is found on the screen by its id or XPath.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjId | string |	XPath or ID. XPath is detected by leading "." or "/". |




**Returns:**

'true' if object exists, 'false' otherwise.



<a name="see.also.navigator.checkobjectexists"></a>

<a name="CheckObjectVisible"></a>    
#### CheckObjectVisible(xpathOrObjId)

Checks if object is visible on the screen by its id or XPath.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjId | string |	XPath or ID. XPath is detected by leading "." or "/". |




**Returns:**

'true' if object is visible, 'false' otherwise.



<a name="see.also.navigator.checkobjectvisible"></a>

<a name="Close"></a>    
#### Close(url)

Closes browser. Finishes session.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |	Not used - can leave empty |





<a name="see.also.navigator.close"></a>

<a name="Detach"></a>    
#### Detach()

Disconnects from a browser. Make Navigator ready for a new browser instance connection.





<a name="see.also.navigator.detach"></a>

<a name="DoCheckAlert"></a>    
#### DoCheckAlert(msg)

Waits until browser alert with a given text. Wait timeout is 10 seconds.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| msg | string |	alert text. Can be exact text or regular expression. |




**Returns:**

'true' if browser alert had occurred, 'false' otherwise.



<a name="see.also.navigator.docheckalert"></a>

<a name="DoCheckConfirmation"></a>    
#### DoCheckConfirmation(msg, result)

Waits until browser confirmation with a given text.  Wait timeout is 10 seconds.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| msg | string |	confirmation text. Can be exact text or regular expression. |
| result | string |	Not used - can leave empty. |




**Returns:**

'true' if browser confirmation popup is shown, 'false' otherwise.



<a name="see.also.navigator.docheckconfirmation"></a>

<a name="DoCheckPrompt"></a>    
#### DoCheckPrompt(msg, result)

Waits until browser prompt with a given text.  Wait timeout is 10 seconds.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| msg | string |	prompt text. Can be exact text or regular expression. |
| result | string |	Not used - can leave empty. |




**Returns:**

'true' if browser prompt popup is shown, 'false' otherwise.



<a name="see.also.navigator.docheckprompt"></a>

<a name="DOMFindByAttributeValue"></a>    
#### DOMFindByAttributeValue(attrName, attrValue, findAll, timeout, timeout)

Looks for a web element by specific attribute value through all frames. [attrValue] is checked agains each element's [attrName] attribute.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| attrName | string |	name of the attribute to check. May be @attr or attr.<br>Optional. |
| attrValue | string |	expected attribute value.<br>Optional. |
| findAll | string |	optional, bool. Defines if we return just first element (false, default) or all found elements (true). Default is false.<br>Optional. |
| timeout | boolean |	, number. Timeout in milliseconds to keep trying to find an element. Default behavior is just do single attempt.<br>Optional. |
| timeout | number |	 |




**Returns:**

array | <br>object: If [findAll] is set to false then just first found element or null is returned. Else search is done for all matching elements and array is returned (empty array if nothing found).



<a name="see.also.navigator.domfindbyattributevalue"></a>

<a name="DOMFindByName"></a>    
#### DOMFindByName(name, tagName, findAll, timeout)

Looks for a web element by its name through all frames. Name is checked agains @name and @id attribute of each element


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	expected element name to search for<br>Optional. |
| tagName | Sring |	optional tag name, default is * (any tag)<br>Optional. |
| findAll | boolean |	optional, bool. Defines if we return just first element (false, default) or all found elements (true). Default is false.<br>Optional. |
| timeout | number |	, number. Timeout in milliseconds to keep trying to find an element. Default behavior is just do single attempt.<br>Optional. |




**Returns:**

array | <br>object: If [findAll] is set to false then just first found element or null is returned. Else search is done for all matching elements and array is returned (empty array if nothing found).



<a name="see.also.navigator.domfindbyname"></a>

<a name="DOMFindByText"></a>    
#### DOMFindByText(text, tagName, findAll, timeout)

Looks for a web element by its text contents through all frames. [text] is checked agains each element text contents.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| text | string |	expected text to search for<br>Optional. |
| tagName | string |	optional tag name, default is * (any tag)<br>Optional. |
| findAll | boolean |	optional, bool. Defines if we return just first element (false, default) or all found elements (true). Default is false.<br>Optional. |
| timeout | number |	, number. Timeout in milliseconds to keep trying to find an element. Default behavior is just do single attempt.<br>Optional. |




**Returns:**

array | <br>object: If [findAll] is set to false then just first found element or null is returned. Else search is done for all matching elements and array is returned (empty array if nothing found).



<a name="see.also.navigator.domfindbytext"></a>

<a name="DOMFindByXPath"></a>    
#### DOMFindByXPath(xpath, findAll, timeout)

Looks for a web element by specific local XPath value through all frames. If XPath is local (i.e. //img) then search will be performed for all images in all nested frames.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |	local XPath to execute for each frame.<br>Optional. |
| findAll | boolean |	optional, bool. Defines if we return just first element (false, default) or all found elements (true). Default is false.<br>Optional. |
| timeout | number |	, number. Timeout in milliseconds to keep trying to find an element. Default behavior is just do single attempt.<br>Optional. |




**Returns:**

array | <br>object: If [findAll] is set to false then just first found element or null is returned. Else search is done for all matching elements and array is returned (empty array if nothing found).



<a name="see.also.navigator.domfindbyxpath"></a>

<a name="DoScreenshot"></a>    
#### DoScreenshot(fileName)

Makes screenshot of the browser window.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Save the screenshot to a file if name is specified. Otherwise - add to report.<br>Optional. |





<a name="see.also.navigator.doscreenshot"></a>

<a name="DoSetExpectedConfirmResult"></a>    
#### DoSetExpectedConfirmResult(expectedRes)

Set boolean value to return as a result of next browser 'confirm' request.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| expectedRes | string |	The text to be returned in the next request. |





<a name="see.also.navigator.dosetexpectedconfirmresult"></a>

<a name="DoSetExpectedPromptResult"></a>    
#### DoSetExpectedPromptResult(expectedRes)

Set text to return as a result of next browser 'prompt' request.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| expectedRes | string |	The text to be returned in the next request. |





<a name="see.also.navigator.dosetexpectedpromptresult"></a>

<a name="ExecJS"></a>    
#### ExecJS(scriptText, obj)

Executes given JavaScript statement in a browser and returns results.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| scriptText | string |	JavaScript code. |
| obj | SeSObject |	 |




**Returns:**





<a name="see.also.navigator.execjs"></a>

<a name="Find"></a>    
#### Find(xpath, url, title, objInfo)

Returns HTMLObject wrapping DOM element for a given 'xpath'. HTMLObject is a {SeSObject} constructed by matching one of browser rules: IEHTMLObject, MozillaHTMLObject, etc.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |	location path of a DOM element. |
| url | string |	URL. If new navigator is launched, the URL is used.<br>Optional. |
| title | string |	The title of the HTML document that is being searched. |
| objInfo | SeSObjectInfo |	A populated SeSObjectInfo object. |




**Returns:**

HTMLObject wrapping DOM element for a given 'xpath', 'null' if 'xpath' is invalid.



<a name="see.also.navigator.find"></a>

<a name="GetPerformance"></a>    
#### GetPerformance(resources, dontWriteReport)

Reads performance information from currently used browser. Performance numbersare based on output from window.performance structure of the web page. See alsohttp://www.w3.org/TR/navigation-timing/#processing-model


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| resources | boolean |	optional, bool. Set to true if you want to dump information about resource timing into the report<br>Optional. |
| dontWriteReport | boolean |	optional, Set to true if you want just return page load time and write nothing to report<br>Optional. |




**Returns:**

number: page open time (in milliseconds)



<a name="see.also.navigator.getperformance"></a>

<a name="GetPosition"></a>    
#### GetPosition()

Gets position of the top-left corner of the browser window. This function is DPI aware.




**Returns:**

object: {X, Y}



<a name="see.also.navigator.getposition"></a>

<a name="GetSize"></a>    
#### GetSize()

Gets size of the browser window. This function is DPI aware.




**Returns:**

object: {Width, Height}



<a name="see.also.navigator.getsize"></a>

<a name="Maximize"></a>    
#### Maximize()

Maximizes browser window.





<a name="see.also.navigator.maximize"></a>

<a name="Navigate"></a>    
#### Navigate(url)

Redirects browser to a specified URL.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |	The URL to navigate to. |





<a name="see.also.navigator.navigate"></a>

<a name="Open"></a>    
#### Open(url)

Opens a browser. If URL is specified, goes to URL.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |	start URL for opening browser. Can be 'null'. |





<a name="see.also.navigator.open"></a>

<a name="SelectBrowserProfile"></a>    
#### SelectBrowserProfile(profileName)

Selects browser profile to use for testing.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| profileName | string |	name of a browser profile. |





<a name="see.also.navigator.selectbrowserprofile"></a>

<a name="SetPosition"></a>    
#### SetPosition(x, y)

Positions top-left corner of the browser window at specifid location. This function is DPI aware.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	X-offset from the top-left corner of the screen. |
| y | number |	Y-offset from the top-left corner of the screen. |





<a name="see.also.navigator.setposition"></a>

<a name="SetSize"></a>    
#### SetSize(width, height)

Sets size if the browser window. This function is DPI aware.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| width | number |	New width of the browser window. |
| height | number |	New height of the browser window. |





<a name="see.also.navigator.setsize"></a>

	

