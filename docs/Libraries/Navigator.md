Summary: Navigator object. This is used to provide functions for manipulating the web browser when using the HTML libraries.

# Navigator

Navigator object. This is used to provide functions for manipulating the web browser when using the HTML libraries.






<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** |
| ------------ | --------------- |
| [AutoOpen](#AutoOpen) | During playback when Rapise connects to a browser for the first time and can not locate an object and AutoOpen is 'true' it launches a new browser instance. |
| [EnsureVisibleHorizontalAlignment](#EnsureVisibleHorizontalAlignment) | One of "start", "center", "end", or "nearest". |
| [EnsureVisibleVerticalAlignment](#EnsureVisibleVerticalAlignment) | One of "start", "center", "end", or "nearest". |
| [NativeEvents](#NativeEvents) | Set it to true to use native keyboard and mouse input. |
| [QuitIfNotConnected](#QuitIfNotConnected) | If connection to browser fails - open plugin page and quit. |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[CheckObjectExists](#CheckObjectExists) | Checks if object is found on the screen by its id or XPath. |
|	[CheckObjectVisible](#CheckObjectVisible) | Checks if object is visible on the screen by its id or XPath. |
|	[Close](#Close) | Closes browser. |
|	[Detach](#Detach) | Disconnects from a browser. |
|	[DoActivateWindow](#DoActivateWindow) | Makes specified browser window active and focused. |
|	[DoCheckAlert](#DoCheckAlert) | Waits until browser alert with a given text. |
|	[DoCheckConfirmation](#DoCheckConfirmation) | Waits until browser confirmation with a given text. |
|	[DoCheckPrompt](#DoCheckPrompt) | Waits until browser prompt with a given text. |
|	[DoClickUntilOnScreen](#DoClickUntilOnScreen) | Clicks on a given element until another element appears on screen. |
|	[DoClickWhileOnScreen](#DoClickWhileOnScreen) | Clicks on an element until it disappears. |
|	[DoCloseTab](#DoCloseTab) | Closes currently selected tab. |
|	[DoCloseWindow](#DoCloseWindow) | Closes currently active browser window. |
|	[DoCreateTab](#DoCreateTab) | Creates new browser tab. |
|	[DoCreateWindow](#DoCreateWindow) | Creates a new browser window. |
|	[DOMFindByAttributeValue](#DOMFindByAttributeValue) | Looks for a web element by specific attribute value through all frames. |
|	[DOMFindByName](#DOMFindByName) | Looks for a web element by its name through all frames. |
|	[DOMFindByText](#DOMFindByText) | Looks for a web element by its text contents through all frames. |
|	[DOMFindByXPath](#DOMFindByXPath) | Looks for a web element by specific local XPath value through all frames. |
|	[DoMoveWindow](#DoMoveWindow) | Sets the position of the active browser window. |
|	[DOMQueryValue](#DOMQueryValue) | Executes an xpath query that may return a value of string, number or boolean type. |
|	[DoResizeWindow](#DoResizeWindow) | Sets size of the active browser window. |
|	[DoScreenshot](#DoScreenshot) | Makes screenshot of the browser window. |
|	[DoSelectTab](#DoSelectTab) | Selects browser tab by title or URL. |
|	[DoSetExpectedConfirmResult](#DoSetExpectedConfirmResult) | Sets boolean value to return as a result of next browser `confirm` request. |
|	[DoSetExpectedPromptResult](#DoSetExpectedPromptResult) | Sets text to return as a result of next browser `prompt` request. |
|	[DoWaitFor](#DoWaitFor) | Waits for object to appear on screen. |
|	[ExecJS](#ExecJS) | Executes given JavaScript statement in a browser and returns results. |
|	[ExecPageJS](#ExecPageJS) | Executes given JavaScript statement in a browser in the context of the current page. |
|	[Find](#Find) | Returns [HTMLObject](HTMLObject.md) wrapping DOM element for a given `xpath`. |
|	[GetActiveTabId](#GetActiveTabId) | Gets Id of active browser tab. |
|	[GetActiveTabTitle](#GetActiveTabTitle) | Gets title of active browser tab. |
|	[GetActiveTabUrl](#GetActiveTabUrl) | Gets URL of active browser tab. |
|	[GetActiveWindowId](#GetActiveWindowId) | Gets active browser window Id. |
|	[GetActiveWindowTitle](#GetActiveWindowTitle) | Gets active browser window title. |
|	[GetActiveWindowUrl](#GetActiveWindowUrl) | Gets active browser window URL. |
|	[GetPerformance](#GetPerformance) | Reads performance information from currently used browser. |
|	[GetPosition](#GetPosition) | Gets position of the top-left corner of the browser window. |
|	[GetSize](#GetSize) | Gets size of the browser window. |
|	[GetTabIdAt](#GetTabIdAt) | Gets browser tab Id. |
|	[GetTabIndexById](#GetTabIndexById) | Gets index of the browser tab by Id. |
|	[GetTabsCount](#GetTabsCount) | Gets number of browser tabs. |
|	[GetTabTitleAt](#GetTabTitleAt) | Gets browser tab title. |
|	[GetTabUrlAt](#GetTabUrlAt) | Gets browser tab URL. |
|	[GetWindowIdAt](#GetWindowIdAt) | Gets browser window Id. |
|	[GetWindowsCount](#GetWindowsCount) | Gets the number of browser windows. |
|	[GetWindowTitleAt](#GetWindowTitleAt) | Gets browser window title. |
|	[GetWindowUrlAt](#GetWindowUrlAt) | Gets browser window URL. |
|	[KillBrowser](#KillBrowser) | Kills the browser process. |
|	[LaunchBrowser](#LaunchBrowser) | Launches browser, but does not connect to it. |
|	[Maximize](#Maximize) | Maximizes browser window. |
|	[Navigate](#Navigate) | Redirects browser to a specified URL. |
|	[Open](#Open) | Opens a browser. |
|	[SelectBrowserProfile](#SelectBrowserProfile) | Selects browser profile to use for testing. |
|	[SeSFind](#SeSFind) | Waits for object to appear on screen. |
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
			
			
		
<a name="NativeEvents"></a>
#### NativeEvents


Set it to true to use native keyboard and mouse input. Overrides browser profile settings. Does not affect Selenium targets. Requires Rapise 6.3+

			
	
			
Type: boolean
			
			
		
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
| xpathOrObjId | objectId |	XPath or ID. XPath is detected by leading "." or "/". |




**Returns:**

`true` if object exists, `false` otherwise.



<a name="see.also.navigator.checkobjectexists"></a>

<a name="CheckObjectVisible"></a>    
#### CheckObjectVisible(xpathOrObjId)

Checks if object is visible on the screen by its id or XPath.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjId | objectId |	XPath or ID. XPath is detected by leading "." or "/". |




**Returns:**

`true` if object is visible, `false` otherwise.



<a name="see.also.navigator.checkobjectvisible"></a>

<a name="Close"></a>    
#### Close(url)

Closes browser. Finishes session.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |	Not used - can leave empty. |





<a name="see.also.navigator.close"></a>

<a name="Detach"></a>    
#### Detach()

Disconnects from a browser. Make Navigator ready for a new browser instance connection.





<a name="see.also.navigator.detach"></a>

<a name="DoActivateWindow"></a>    
#### DoActivateWindow(titleOrUrl)

Makes specified browser window active and focused. Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| titleOrUrl | string |	string or regex matching URL or window title. |





<a name="see.also.navigator.doactivatewindow"></a>

<a name="DoCheckAlert"></a>    
#### DoCheckAlert(msg)

Waits until browser alert with a given text. Wait timeout is 10 seconds.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| msg | string |	Alert text. Can be exact text or regular expression. |




**Returns:**

`true` if browser alert had occurred, `false` otherwise.



<a name="see.also.navigator.docheckalert"></a>

<a name="DoCheckConfirmation"></a>    
#### DoCheckConfirmation(msg, result)

Waits until browser confirmation with a given text. Wait timeout is 10 seconds.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| msg | string |	Confirmation text. Can be exact text or regular expression. |
| result | string |	Not used - can leave empty.<br>Optional. |




**Returns:**

`true` if browser confirmation popup is shown, `false` otherwise.



<a name="see.also.navigator.docheckconfirmation"></a>

<a name="DoCheckPrompt"></a>    
#### DoCheckPrompt(msg, result)

Waits until browser prompt with a given text. Wait timeout is 10 seconds.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| msg | string |	Prompt text. Can be exact text or regular expression. |
| result | string |	Not used - can leave empty.<br>Optional. |




**Returns:**

`true` if browser prompt popup is shown, `false` otherwise.



<a name="see.also.navigator.docheckprompt"></a>

<a name="DoClickUntilOnScreen"></a>    
#### DoClickUntilOnScreen(xpathOrObjIdToClick, xpathOrObjIdToExpect, attempts, delay, x, y, forceEvent)

Clicks on a given element until another element appears on screen. Requires Rapise 6.3+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjIdToClick | objectId |	Object Id or XPath of an element to click. |
| xpathOrObjIdToExpect | objectId |	Object Id or XPath of an element that should appear on screen. |
| attempts | number |	Max number of clicks. Default is 2.<br>Optional. |
| delay | number |	Delay between attempts. Default is 1000 milliseconds.<br>Optional. |
| x | number |	X-offset from the top-left corner of the object. Default is object width/2.<br>Optional. |
| y | number |	Y-offset from the top-left corner of the object. Default is object height/2.<br>Optional. |
| forceEvent | boolean |	Default is false. Set to true to use browser level event for the click. Overrides browser profile settings.<br>Optional. |




**Returns:**

expected object if successfull, otherwise - null.



<a name="see.also.navigator.doclickuntilonscreen"></a>

<a name="DoClickWhileOnScreen"></a>    
#### DoClickWhileOnScreen(xpathOrObjId, attempts, delay, x, y, forceEvent)

Clicks on an element until it disappears. Requires Rapise 6.3+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjId | objectid |	Object Id or XPath of an element to click. |
| attempts | number |	Max number of clicks. Default is 2.<br>Optional. |
| delay | number |	Delay between attempts. Default is 1000 milliseconds.<br>Optional. |
| x | number |	X-offset from the top-left corner of the object. Default is object width/2.<br>Optional. |
| y | number |	Y-offset from the top-left corner of the object. Default is object height/2.<br>Optional. |
| forceEvent | boolean |	Default is false. Set to true to use browser level event for the click. Overrides browser profile settings.<br>Optional. |




**Returns:**

true if object disappeared, otherwise - false.



<a name="see.also.navigator.doclickwhileonscreen"></a>

<a name="DoCloseTab"></a>    
#### DoCloseTab()

Closes currently selected tab. Requires Rapise 6.5+





<a name="see.also.navigator.doclosetab"></a>

<a name="DoCloseWindow"></a>    
#### DoCloseWindow()

Closes currently active browser window. Requires Rapise 6.5+





<a name="see.also.navigator.doclosewindow"></a>

<a name="DoCreateTab"></a>    
#### DoCreateTab(url)

Creates new browser tab. Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |	new page URL |





<a name="see.also.navigator.docreatetab"></a>

<a name="DoCreateWindow"></a>    
#### DoCreateWindow(url)

Creates a new browser window. Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |	page URL. |





<a name="see.also.navigator.docreatewindow"></a>

<a name="DOMFindByAttributeValue"></a>    
#### DOMFindByAttributeValue(attrName, attrValue, tagName, findAll, timeout)

Looks for a web element by specific attribute value through all frames. `attrValue` is checked against each element's `attrName` attribute.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| attrName | string |	Name of the attribute to check. May be `@attr` or `attr`. |
| attrValue | string |	Expected attribute value. |
| tagName | string |	Tag name, default is * (any tag).<br>Optional. |
| findAll | boolean |	Defines if we return just first element (`false`, default) or all found elements (`true`). Default is `false`.<br>Optional. |
| timeout | number |	Timeout in milliseconds to keep trying to find an element. Default behavior is just do single attempt.<br>Optional. |




**Returns:**

array | <br>object: If `findAll` is set to `false` then just first found [element](HTMLObject.md) or null is returned. Else search is done for all matching elements and array of [elements](HTMLObject.md) is returned (empty array if nothing found).



<a name="see.also.navigator.domfindbyattributevalue"></a>

<a name="DOMFindByName"></a>    
#### DOMFindByName(name, tagName, findAll, timeout)

Looks for a web element by its name through all frames. Name is checked agains @name and @id attribute of each element


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Expected element name to search for. |
| tagName | string |	Tag name, default is * (any tag).<br>Optional. |
| findAll | boolean |	Defines if we return just first element (`false`, default) or all found elements (`true`). Default is `false`.<br>Optional. |
| timeout | number |	Timeout in milliseconds to keep trying to find an element. Default behavior is just do single attempt.<br>Optional. |




**Returns:**

array | <br>object: If `findAll` is set to `false` then just first found [element](HTMLObject.md) or null is returned. Else search is done for all matching elements and array of [elements](HTMLObject.md) is returned (empty array if nothing found).



<a name="see.also.navigator.domfindbyname"></a>

<a name="DOMFindByText"></a>    
#### DOMFindByText(text, tagName, findAll, timeout)

Looks for a web element by its text contents through all frames. `text` is checked agains each element text contents.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| text | string |	Expected text to search for. |
| tagName | string |	Tag name, default is * (any tag).<br>Optional. |
| findAll | boolean |	Defines if we return just first element (`false`, default) or all found elements (`true`). Default is `false`.<br>Optional. |
| timeout | number |	Timeout in milliseconds to keep trying to find an element. Default behavior is just do single attempt.<br>Optional. |




**Returns:**

array | <br>object: If `findAll` is set to `false` then just first found [element](HTMLObject.md) or `null` is returned. Else search is done for all matching elements and array of [elements](HTMLObject.md) is returned (empty array if nothing found).



<a name="see.also.navigator.domfindbytext"></a>

<a name="DOMFindByXPath"></a>    
#### DOMFindByXPath(xpath, findAll, timeout)

Looks for a web element by specific local XPath value through all frames. If XPath is local (i.e. //img) then search will be performed for all images in all nested frames.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |	Local XPath to execute for each frame. |
| findAll | boolean |	Defines if we return just first element (`false`, default) or all found elements (`true`). Default is `false`.<br>Optional. |
| timeout | number |	Timeout in milliseconds to keep trying to find an element. Default behavior is just do single attempt.<br>Optional. |




**Returns:**

array | <br>object: If `findAll` is set to `false` then just first found [element](HTMLObject.md) or `null` is returned. Else search is done for all matching elements and array of [elements](HTMLObject.md) is returned (empty array if nothing found).



<a name="see.also.navigator.domfindbyxpath"></a>

<a name="DoMoveWindow"></a>    
#### DoMoveWindow(left, top)

Sets the position of the active browser window. Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| left | number |	offset in pixels from the corner of the display. |
| top | number |	offset in pixels from the corner of the display. |





<a name="see.also.navigator.domovewindow"></a>

<a name="DOMQueryValue"></a>    
#### DOMQueryValue(xpathOrObjId, query)

Executes an xpath query that may return a value of string, number or boolean type. If the result of the query is an array of nodes - a combined string is returned (;-separated text values of nodes). If the query returns nothing (invalid query or nothing matches) then `null` is returned. Requires Rapise 6.4+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjId | objectId |	XPath or ID. XPath is detected by leading '.' or '/'. If the value is empty then this parameter defaults to `/html`. |
| query | string |	Absolute or relative xpath query. e.g. `count(//div)`, `//a[1]/@href='/Home'`, `./li/text()` |




**Returns:**

string | <br>number | <br>boolean: Result of the query or null in the case if the query is invalid or nothing matches.



<a name="see.also.navigator.domqueryvalue"></a>

<a name="DoResizeWindow"></a>    
#### DoResizeWindow(width, height)

Sets size of the active browser window. Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| width | number |	New width of the browser window in pixels. |
| height | number |	New height of the browser window in pixels. |





<a name="see.also.navigator.doresizewindow"></a>

<a name="DoScreenshot"></a>    
#### DoScreenshot(fileName)

Makes screenshot of the browser window.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Save the screenshot to a file if name is specified. Otherwise - add to report.<br>Optional. |





<a name="see.also.navigator.doscreenshot"></a>

<a name="DoSelectTab"></a>    
#### DoSelectTab(titleOrUrl)

Selects browser tab by title or URL. Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| titleOrUrl | string |	string or regex matching tab URL or title. |





<a name="see.also.navigator.doselecttab"></a>

<a name="DoSetExpectedConfirmResult"></a>    
#### DoSetExpectedConfirmResult(expectedRes)

Sets boolean value to return as a result of next browser `confirm` request.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| expectedRes | string |	The text to be returned in the next request. |





<a name="see.also.navigator.dosetexpectedconfirmresult"></a>

<a name="DoSetExpectedPromptResult"></a>    
#### DoSetExpectedPromptResult(expectedRes)

Sets text to return as a result of next browser `prompt` request.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| expectedRes | string |	The text to be returned in the next request. |





<a name="see.also.navigator.dosetexpectedpromptresult"></a>

<a name="DoWaitFor"></a>    
#### DoWaitFor(xpathOrObjId, timeout, params)

Waits for object to appear on screen. Requires Rapise 6.3+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjId | objectid |	Object Id or XPath of an element to check. |
| timeout | number |	Max time to wait. Default is 10000 milliseconds.<br>Optional. |
| params | object |	Overrides locator options.<br>Optional. |




**Returns:**

found object, otherwise - false.



<a name="see.also.navigator.dowaitfor"></a>

<a name="ExecJS"></a>    
#### ExecJS(scriptText, obj)

Executes given JavaScript statement in a browser and returns results.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| scriptText | string |	JavaScript code. |
| obj | HTMLObject |	You may pass object to use in the JavaScript statement. Reference it as `el` or `arguments[0]`.<br>Optional. |




**Returns:**

Result of code execution.



<a name="see.also.navigator.execjs"></a>

<a name="ExecPageJS"></a>    
#### ExecPageJS(scriptText, obj)

Executes given JavaScript statement in a browser in the context of the current page. It means the script may accessJS variables and functions declared on the page. Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| scriptText | string |	JavaScript code. |
| obj | HTMLObject |	You may pass object to use in the JavaScript statement. The script will be executed in a frame, containing given obj.<br>Optional. |




**Returns:**

Result of code execution.



<a name="see.also.navigator.execpagejs"></a>

<a name="Find"></a>    
#### Find(xpath, url, title, objInfo)

Returns [HTMLObject](HTMLObject.md) wrapping DOM element for a given `xpath`.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |	Location path of a DOM element. |
| url | string |	URL. If new Navigator is launched, the URL is used.<br>Optional. |
| title | string |	The title of the HTML document that is being searched. |
| objInfo | SeSObjectInfo |	A populated `SeSObjectInfo` object. |




**Returns:**

[HTMLObject](HTMLObject.md) wrapping DOM element for a given `xpath`, `null` if `xpath` is invalid.



<a name="see.also.navigator.find"></a>

<a name="GetActiveTabId"></a>    
#### GetActiveTabId()

Gets Id of active browser tab. Id may be used as parameter to Navigator.DoSelectTab(). Requires Rapise 6.5+





<a name="see.also.navigator.getactivetabid"></a>

<a name="GetActiveTabTitle"></a>    
#### GetActiveTabTitle()

Gets title of active browser tab. Requires Rapise 6.5+





<a name="see.also.navigator.getactivetabtitle"></a>

<a name="GetActiveTabUrl"></a>    
#### GetActiveTabUrl()

Gets URL of active browser tab. Requires Rapise 6.5+





<a name="see.also.navigator.getactivetaburl"></a>

<a name="GetActiveWindowId"></a>    
#### GetActiveWindowId()

Gets active browser window Id. Id is an internal identifier. May be used as a parameter to Navigator.DoActivateWindow(). Requires Rapise 6.5+





<a name="see.also.navigator.getactivewindowid"></a>

<a name="GetActiveWindowTitle"></a>    
#### GetActiveWindowTitle()

Gets active browser window title. Requires Rapise 6.5+





<a name="see.also.navigator.getactivewindowtitle"></a>

<a name="GetActiveWindowUrl"></a>    
#### GetActiveWindowUrl(index)

Gets active browser window URL. Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	 |





<a name="see.also.navigator.getactivewindowurl"></a>

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

<a name="GetTabIdAt"></a>    
#### GetTabIdAt(index)

Gets browser tab Id. Id may be used as parameter to Navigator.DoSelectTab(). Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	number from 0 to Navigator.GetTabsCount() |





<a name="see.also.navigator.gettabidat"></a>

<a name="GetTabIndexById"></a>    
#### GetTabIndexById(tabId)

Gets index of the browser tab by Id. Index may be used as param to GetTabIdAt/GetTabUrlAt/GetTabTitleAt. Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabId | number |	 |





<a name="see.also.navigator.gettabindexbyid"></a>

<a name="GetTabsCount"></a>    
#### GetTabsCount()

Gets number of browser tabs. Requires Rapise 6.5+





<a name="see.also.navigator.gettabscount"></a>

<a name="GetTabTitleAt"></a>    
#### GetTabTitleAt(index)

Gets browser tab title. Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	number from 0 to Navigator.GetTabsCount() |





<a name="see.also.navigator.gettabtitleat"></a>

<a name="GetTabUrlAt"></a>    
#### GetTabUrlAt(index)

Gets browser tab URL. Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	number from 0 to Navigator.GetTabsCount() |





<a name="see.also.navigator.gettaburlat"></a>

<a name="GetWindowIdAt"></a>    
#### GetWindowIdAt(index)

Gets browser window Id. Id is an internal identifier. May be used as a parameter to Navigator.DoActivateWindow(). Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	number from 0 to Navigator.GetWindowsCount() |





<a name="see.also.navigator.getwindowidat"></a>

<a name="GetWindowsCount"></a>    
#### GetWindowsCount()

Gets the number of browser windows. Requires Rapise 6.5+





<a name="see.also.navigator.getwindowscount"></a>

<a name="GetWindowTitleAt"></a>    
#### GetWindowTitleAt(index)

Gets browser window title. Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	number from 0 to Navigator.GetWindowsCount() |





<a name="see.also.navigator.getwindowtitleat"></a>

<a name="GetWindowUrlAt"></a>    
#### GetWindowUrlAt(index)

Gets browser window URL. Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	number from 0 to Navigator.GetWindowsCount() |





<a name="see.also.navigator.getwindowurlat"></a>

<a name="KillBrowser"></a>    
#### KillBrowser()

Kills the browser process. The browser to kill is detected from browser profile settings. Requires Rapise 6.4+





<a name="see.also.navigator.killbrowser"></a>

<a name="LaunchBrowser"></a>    
#### LaunchBrowser(url)

Launches browser, but does not connect to it. Recommended for applications with basic authentication. Requires Rapise 6.5+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url |  |	Initial url, may be empty.<br>Optional. |





<a name="see.also.navigator.launchbrowser"></a>

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
| url | string |	Start URL for opening browser. Can be `null`. |





<a name="see.also.navigator.open"></a>

<a name="SelectBrowserProfile"></a>    
#### SelectBrowserProfile(profileName)

Selects browser profile to use for testing.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| profileName | string |	name of a browser profile. |





<a name="see.also.navigator.selectbrowserprofile"></a>

<a name="SeSFind"></a>    
#### SeSFind(xpathOrObjId, params)

Waits for object to appear on screen. Uses test [ObjectLookup... settings](https://rapisedoc.inflectra.com/Guide/settings_dialog/#execution). Requires Rapise 6.4+


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjId | objectid |	Object Id or XPath of an element to check. |
| params | object |	Overrides locator options.<br>Optional. |




**Returns:**

found object, otherwise - `false`.



<a name="see.also.navigator.sesfind"></a>

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

	

