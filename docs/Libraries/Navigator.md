Summary: Navigator object. This is used to provide functions for manipulating the web browser when using the HTML libraries.

# Navigator

Navigator object. This is used to provide functions for manipulating the web browser when using the HTML libraries.






<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** |
| ------------ | --------------- |
| [AutoOpen](#autoopen) | During playback when Rapise connects to a browser for the first time and can not locate an object and AutoOpen is 'true' it launches a new browser instance. |
| [EnsureVisibleHorizontalAlignment](#ensurevisiblehorizontalalignment) | One of "start", "center", "end", or "nearest". |
| [EnsureVisibleScrollBehavior](#ensurevisiblescrollbehavior) | One of default scroll behaviors: "auto", "smooth" or "instant". |
| [EnsureVisibleVerticalAlignment](#ensurevisibleverticalalignment) | One of "start", "center", "end", or "nearest". |
| [NativeEvents](#nativeevents) | Set it to true to use native keyboard and mouse input. |
| [QuitIfNotConnected](#quitifnotconnected) | If connection to browser fails - open plugin page and quit. |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[Back](#back) | Goes back to the previous page in the browser history. |
|	[CheckObjectEnabled](#checkobjectenabled) | Checks if object is enabled by its id or XPath. |
|	[CheckObjectExists](#checkobjectexists) | Checks if object is found on the screen by its id or XPath. |
|	[CheckObjectVisible](#checkobjectvisible) | Checks if object is visible on the screen by its id or XPath. |
|	[Close](#close) | Closes browser. |
|	[Detach](#detach) | Disconnects from a browser. |
|	[DoActivateWindow](#doactivatewindow) | Makes specified browser window active and focused. |
|	[DoCheckAlert](#docheckalert) | Waits until browser alert with a given text. |
|	[DoCheckConfirmation](#docheckconfirmation) | Waits until browser confirmation with a given text. |
|	[DoCheckPrompt](#docheckprompt) | Waits until browser prompt with a given text. |
|	[DoClickUntilOnScreen](#doclickuntilonscreen) | Clicks on a given element until another element appears on screen. |
|	[DoClickWhileOnScreen](#doclickwhileonscreen) | Clicks on an element until it disappears. |
|	[DoCloseTab](#doclosetab) | Closes currently selected tab. |
|	[DoCloseWindow](#doclosewindow) | Closes currently active browser window. |
|	[DoCreateTab](#docreatetab) | Creates new browser tab. |
|	[DoCreateWindow](#docreatewindow) | Creates a new browser window. |
|	[DOMFindByAttributeValue](#domfindbyattributevalue) | Looks for a web element by specific attribute value through all frames. |
|	[DOMFindByName](#domfindbyname) | Looks for a web element by its name through all frames. |
|	[DOMFindByText](#domfindbytext) | Looks for a web element by its text contents through all frames. |
|	[DOMFindByXPath](#domfindbyxpath) | Looks for a web element by specific local XPath value through all frames. |
|	[DoMoveWindow](#domovewindow) | Sets the position of the active browser window. |
|	[DOMQueryValue](#domqueryvalue) | Executes an xpath query that may return a value of string, number or boolean type. |
|	[DoResizeWindow](#doresizewindow) | Sets size of the active browser window. |
|	[DoScreenshot](#doscreenshot) | Makes screenshot of the browser window. |
|	[DoSelectTab](#doselecttab) | Selects browser tab by title or URL. |
|	[DoSendKeys](#dosendkeys) | Sends keys to an active element on a page. |
|	[DoSetExpectedConfirmResult](#dosetexpectedconfirmresult) | Sets boolean value to return as a result of next browser `confirm` request. |
|	[DoSetExpectedPromptResult](#dosetexpectedpromptresult) | Sets text to return as a result of next browser `prompt` request. |
|	[DoWaitFor](#dowaitfor) | Waits for object to appear in the current browser. |
|	[DoWaitForEnabled](#dowaitforenabled) | Waits for object to become enabled. |
|	[DoWaitForVisible](#dowaitforvisible) | Waits for object to appear in the screen. |
|	[ExecJS](#execjs) | Executes given JavaScript statement in a browser and returns results. |
|	[ExecPageJS](#execpagejs) | Executes given JavaScript statement in a browser in the context of the current page. |
|	[Find](#find) | Returns [HTMLObject](HTMLObject.md) wrapping DOM element for a given `xpath`. |
|	[Forward](#forward) | Goes forward to the next page in the browser history. |
|	[GetActiveTabId](#getactivetabid) | Gets Id of active browser tab. |
|	[GetActiveTabTitle](#getactivetabtitle) | Gets title of active browser tab. |
|	[GetActiveTabUrl](#getactivetaburl) | Gets URL of active browser tab. |
|	[GetActiveWindowId](#getactivewindowid) | Gets active browser window Id. |
|	[GetActiveWindowTitle](#getactivewindowtitle) | Gets active browser window title. |
|	[GetActiveWindowUrl](#getactivewindowurl) | Gets active browser window URL. |
|	[GetPerformance](#getperformance) | Reads performance information from currently used browser. |
|	[GetPosition](#getposition) | Gets position of the top-left corner of the browser window. |
|	[GetSize](#getsize) | Gets size of the browser window. |
|	[GetTabIdAt](#gettabidat) | Gets browser tab Id. |
|	[GetTabIndexById](#gettabindexbyid) | Gets index of the browser tab by Id. |
|	[GetTabsCount](#gettabscount) | Gets number of browser tabs. |
|	[GetTabTitleAt](#gettabtitleat) | Gets browser tab title. |
|	[GetTabUrlAt](#gettaburlat) | Gets browser tab URL. |
|	[GetWindowIdAt](#getwindowidat) | Gets browser window Id. |
|	[GetWindowsCount](#getwindowscount) | Gets the number of browser windows. |
|	[GetWindowTitleAt](#getwindowtitleat) | Gets browser window title. |
|	[GetWindowUrlAt](#getwindowurlat) | Gets browser window URL. |
|	[KillBrowser](#killbrowser) | Kills the browser process. |
|	[LaunchBrowser](#launchbrowser) | Launches browser, but does not connect to it. |
|	[Maximize](#maximize) | Maximizes browser window. |
|	[Navigate](#navigate) | Redirects browser to a specified URL. |
|	[Open](#open) | Opens a browser. |
|	[Refresh](#refresh) | Reloads the current page. |
|	[SelectBrowserProfile](#selectbrowserprofile) | Selects browser profile to use for testing. |
|	[SeSFind](#sesfind) | Waits for object to appear on screen. |
|	[SetPosition](#setposition) | Positions top-left corner of the browser window at specifid location. |
|	[SetSize](#setsize) | Sets size if the browser window. |




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
			
			
		
<a name="EnsureVisibleScrollBehavior"></a>
#### EnsureVisibleScrollBehavior


One of default scroll behaviors: "auto", "smooth" or "instant". Defaults ot "instant".

			
	
			
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
		
<a name="Back"></a>    
#### Back

Goes back to the previous page in the browser history. Requires Rapise 8.0+.

```javascript
Back() 
```





<a name="see.also.navigator.back"></a>

<a name="CheckObjectEnabled"></a>    
#### CheckObjectEnabled

Checks if object is enabled by its id or XPath.

```javascript
CheckObjectEnabled(xpathOrObjId) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjId | objectId |	XPath or ID. XPath is detected by leading "." or "/". |




**Returns:**

`true` if object is available and enabled, `false` otherwise.



<a name="see.also.navigator.checkobjectenabled"></a>

<a name="CheckObjectExists"></a>    
#### CheckObjectExists

Checks if object is found on the screen by its id or XPath.

```javascript
CheckObjectExists(xpathOrObjId) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjId | objectId |	XPath or ID. XPath is detected by leading "." or "/". |




**Returns:**

`true` if object exists, `false` otherwise.



<a name="see.also.navigator.checkobjectexists"></a>

<a name="CheckObjectVisible"></a>    
#### CheckObjectVisible

Checks if object is visible on the screen by its id or XPath.

```javascript
CheckObjectVisible(xpathOrObjId) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjId | objectId |	XPath or ID. XPath is detected by leading "." or "/". |




**Returns:**

`true` if object is available and visible, `false` otherwise.



<a name="see.also.navigator.checkobjectvisible"></a>

<a name="Close"></a>    
#### Close

Closes browser. Finishes session.

```javascript
Close(url) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |	Not used - can leave empty.Returns `true` if the browser closed successfully, otherwise - `false`. |





<a name="see.also.navigator.close"></a>

<a name="Detach"></a>    
#### Detach

Disconnects from a browser. Make Navigator ready for a new browser instance connection.

```javascript
Detach() 
```





<a name="see.also.navigator.detach"></a>

<a name="DoActivateWindow"></a>    
#### DoActivateWindow

Makes specified browser window active and focused. Requires Rapise 6.5+

```javascript
DoActivateWindow(titleOrUrl) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| titleOrUrl | string |	string or regex matching URL or window title. |





<a name="see.also.navigator.doactivatewindow"></a>

<a name="DoCheckAlert"></a>    
#### DoCheckAlert

Waits until browser alert with a given text. Wait timeout is 10 seconds.

```javascript
DoCheckAlert(msg) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| msg | string |	Alert text. Can be exact text or regular expression. |




**Returns:**

`true` if browser alert had occurred, `false` otherwise.



<a name="see.also.navigator.docheckalert"></a>

<a name="DoCheckConfirmation"></a>    
#### DoCheckConfirmation

Waits until browser confirmation with a given text. Wait timeout is 10 seconds.

```javascript
DoCheckConfirmation(msg, result) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| msg | string |	Confirmation text. Can be exact text or regular expression. |
| result | string |	Not used - can leave empty.<br>Optional. |




**Returns:**

`true` if browser confirmation popup is shown, `false` otherwise.



<a name="see.also.navigator.docheckconfirmation"></a>

<a name="DoCheckPrompt"></a>    
#### DoCheckPrompt

Waits until browser prompt with a given text. Wait timeout is 10 seconds.

```javascript
DoCheckPrompt(msg, result) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| msg | string |	Prompt text. Can be exact text or regular expression. |
| result | string |	Not used - can leave empty.<br>Optional. |




**Returns:**

`true` if browser prompt popup is shown, `false` otherwise.



<a name="see.also.navigator.docheckprompt"></a>

<a name="DoClickUntilOnScreen"></a>    
#### DoClickUntilOnScreen

Clicks on a given element until another element appears on screen. Requires Rapise 6.3+

```javascript
DoClickUntilOnScreen(xpathOrObjIdToClick, xpathOrObjIdToExpect, attempts, delay, x, y, forceEvent) 
```


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

expected object if successful, otherwise - null.



<a name="see.also.navigator.doclickuntilonscreen"></a>

<a name="DoClickWhileOnScreen"></a>    
#### DoClickWhileOnScreen

Clicks on an element until it disappears. Requires Rapise 6.3+

```javascript
DoClickWhileOnScreen(xpathOrObjId, attempts, delay, x, y, forceEvent) 
```


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
#### DoCloseTab

Closes currently selected tab. Requires Rapise 6.5+

```javascript
DoCloseTab() 
```





<a name="see.also.navigator.doclosetab"></a>

<a name="DoCloseWindow"></a>    
#### DoCloseWindow

Closes currently active browser window. Requires Rapise 6.5+

```javascript
DoCloseWindow() 
```





<a name="see.also.navigator.doclosewindow"></a>

<a name="DoCreateTab"></a>    
#### DoCreateTab

Creates new browser tab. Requires Rapise 6.5+

```javascript
DoCreateTab(url) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |	new page URL |





<a name="see.also.navigator.docreatetab"></a>

<a name="DoCreateWindow"></a>    
#### DoCreateWindow

Creates a new browser window. Requires Rapise 6.5+

```javascript
DoCreateWindow(url) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |	page URL. |





<a name="see.also.navigator.docreatewindow"></a>

<a name="DOMFindByAttributeValue"></a>    
#### DOMFindByAttributeValue

Looks for a web element by specific attribute value through all frames. `attrValue` is checked against each element's `attrName` attribute.

```javascript
DOMFindByAttributeValue(attrName, attrValue, tagName, findAll, timeout) 
```


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
#### DOMFindByName

Looks for a web element by its name through all frames. Name is checked against @name and @id attribute of each element

```javascript
DOMFindByName(name, tagName, findAll, timeout) 
```


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
#### DOMFindByText

Looks for a web element by its text contents through all frames. `text` is checked against each element text contents.

```javascript
DOMFindByText(text, tagName, findAll, timeout) 
```


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
#### DOMFindByXPath

Looks for a web element by specific local XPath value through all frames. If XPath is local (i.e. //img) then search will be performed for all images in all nested frames.

```javascript
DOMFindByXPath(xpath, findAll, timeout) 
```


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
#### DoMoveWindow

Sets the position of the active browser window. Requires Rapise 6.5+

```javascript
DoMoveWindow(left, top) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| left | number |	offset in pixels from the corner of the display. |
| top | number |	offset in pixels from the corner of the display. |





<a name="see.also.navigator.domovewindow"></a>

<a name="DOMQueryValue"></a>    
#### DOMQueryValue

Executes an xpath query that may return a value of string, number or boolean type. If the result of the query is an array of nodes - a combined string is returned (;-separated text values of nodes). If the query returns nothing (invalid query or nothing matches) then `null` is returned. Requires Rapise 6.4+

```javascript
DOMQueryValue(xpathOrObjId, query) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjId | objectId |	XPath or ID. XPath is detected by leading '.' or '/'. If the value is empty then this parameter defaults to `/html`. |
| query | string |	Absolute or relative xpath query. e.g. `count(//div)`, `//a[1]/@href='/Home'`, `./li/text()` |




**Returns:**

string | <br>number | <br>boolean: Result of the query or null in the case if the query is invalid or nothing matches.



<a name="see.also.navigator.domqueryvalue"></a>

<a name="DoResizeWindow"></a>    
#### DoResizeWindow

Sets size of the active browser window. Requires Rapise 6.5+

```javascript
DoResizeWindow(width, height) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| width | number |	New width of the browser window in pixels. |
| height | number |	New height of the browser window in pixels. |





<a name="see.also.navigator.doresizewindow"></a>

<a name="DoScreenshot"></a>    
#### DoScreenshot

Makes screenshot of the browser window.

```javascript
DoScreenshot(fileName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Save the screenshot to a file if name is specified. Otherwise - add to report.<br>Optional. |





<a name="see.also.navigator.doscreenshot"></a>

<a name="DoSelectTab"></a>    
#### DoSelectTab

Selects browser tab by title or URL. Requires Rapise 6.5+

```javascript
DoSelectTab(titleOrUrl) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| titleOrUrl | string |	string or regex matching tab URL or title. |





<a name="see.also.navigator.doselecttab"></a>

<a name="DoSendKeys"></a>    
#### DoSendKeys

Sends keys to an active element on a page. Requires Rapise 8.0+.

```javascript
DoSendKeys(txt) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| txt | string |	Keys to send. Supports patterns like in [Global.DoSendKeys](/Libraries/Global/#dosendkeys). |





<a name="see.also.navigator.dosendkeys"></a>

<a name="DoSetExpectedConfirmResult"></a>    
#### DoSetExpectedConfirmResult

Sets boolean value to return as a result of next browser `confirm` request.

```javascript
DoSetExpectedConfirmResult(expectedRes) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| expectedRes | string |	The text to be returned in the next request. |





<a name="see.also.navigator.dosetexpectedconfirmresult"></a>

<a name="DoSetExpectedPromptResult"></a>    
#### DoSetExpectedPromptResult

Sets text to return as a result of next browser `prompt` request.

```javascript
DoSetExpectedPromptResult(expectedRes) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| expectedRes | string |	The text to be returned in the next request. |





<a name="see.also.navigator.dosetexpectedpromptresult"></a>

<a name="DoWaitFor"></a>    
#### DoWaitFor

Waits for object to appear in the current browser. Object may be hidden or disabled. Requires Rapise 6.3+

```javascript
DoWaitFor(xpathOrObjId, timeout, params) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjId | objectid |	Object Id or XPath of an element to check. |
| timeout | number |	Max time to wait. Default is 10000 milliseconds.<br>Optional. |
| params | object |	Overrides locator options.<br>Optional. |




**Returns:**

found object, otherwise - false.



<a name="see.also.navigator.dowaitfor"></a>

<a name="DoWaitForEnabled"></a>    
#### DoWaitForEnabled

Waits for object to become enabled. Requires Rapise 7.4+

```javascript
DoWaitForEnabled(xpathOrObjId, timeout, params) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjId | objectid |	Object Id or XPath of an element to check. |
| timeout | number |	Max time to wait. Default is 10000 milliseconds.<br>Optional. |
| params | object |	Overrides locator options.<br>Optional. |




**Returns:**

found object, otherwise - false.



<a name="see.also.navigator.dowaitforenabled"></a>

<a name="DoWaitForVisible"></a>    
#### DoWaitForVisible

Waits for object to appear in the screen. Requires Rapise 7.4+

```javascript
DoWaitForVisible(xpathOrObjId, timeout, params) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjId | objectid |	Object Id or XPath of an element to check. |
| timeout | number |	Max time to wait. Default is 10000 milliseconds.<br>Optional. |
| params | object |	Overrides locator options.<br>Optional. |




**Returns:**

found object, otherwise - false.



<a name="see.also.navigator.dowaitforvisible"></a>

<a name="ExecJS"></a>    
#### ExecJS

Executes given JavaScript statement in a browser and returns results.

```javascript
ExecJS(scriptText, obj) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| scriptText | string |	JavaScript code. |
| obj | HTMLObject |	You may pass object to use in the JavaScript statement. Reference it as `el` or `arguments[0]`.<br>Optional. |




**Returns:**

Result of code execution.



<a name="see.also.navigator.execjs"></a>

<a name="ExecPageJS"></a>    
#### ExecPageJS

Executes given JavaScript statement in a browser in the context of the current page. It means the script may accessJS variables and functions declared on the page. Requires Rapise 6.5+

```javascript
ExecPageJS(scriptText, obj) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| scriptText | string |	JavaScript code. |
| obj | HTMLObject |	You may pass object to use in the JavaScript statement. The script will be executed in a frame, containing given obj.<br>Optional. |




**Returns:**

Result of code execution.



<a name="see.also.navigator.execpagejs"></a>

<a name="Find"></a>    
#### Find

Returns [HTMLObject](HTMLObject.md) wrapping DOM element for a given `xpath`.

```javascript
Find(xpath, url, title, objInfo) 
```


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

<a name="Forward"></a>    
#### Forward

Goes forward to the next page in the browser history. Requires Rapise 8.0+.

```javascript
Forward() 
```





<a name="see.also.navigator.forward"></a>

<a name="GetActiveTabId"></a>    
#### GetActiveTabId

Gets Id of active browser tab. Id may be used as parameter to Navigator.DoSelectTab(). Requires Rapise 6.5+

```javascript
GetActiveTabId() 
```





<a name="see.also.navigator.getactivetabid"></a>

<a name="GetActiveTabTitle"></a>    
#### GetActiveTabTitle

Gets title of active browser tab. Requires Rapise 6.5+

```javascript
GetActiveTabTitle() 
```





<a name="see.also.navigator.getactivetabtitle"></a>

<a name="GetActiveTabUrl"></a>    
#### GetActiveTabUrl

Gets URL of active browser tab. Requires Rapise 6.5+

```javascript
GetActiveTabUrl() 
```





<a name="see.also.navigator.getactivetaburl"></a>

<a name="GetActiveWindowId"></a>    
#### GetActiveWindowId

Gets active browser window Id. Id is an internal identifier. May be used as a parameter to Navigator.DoActivateWindow(). Requires Rapise 6.5+

```javascript
GetActiveWindowId() 
```





<a name="see.also.navigator.getactivewindowid"></a>

<a name="GetActiveWindowTitle"></a>    
#### GetActiveWindowTitle

Gets active browser window title. Requires Rapise 6.5+

```javascript
GetActiveWindowTitle() 
```





<a name="see.also.navigator.getactivewindowtitle"></a>

<a name="GetActiveWindowUrl"></a>    
#### GetActiveWindowUrl

Gets active browser window URL. Requires Rapise 6.5+

```javascript
GetActiveWindowUrl(index) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	 |





<a name="see.also.navigator.getactivewindowurl"></a>

<a name="GetPerformance"></a>    
#### GetPerformance

Reads performance information from currently used browser. Performance numbersare based on output from window.performance structure of the web page. See alsohttp://www.w3.org/TR/navigation-timing/#processing-model

```javascript
GetPerformance(resources, dontWriteReport) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| resources | boolean |	optional, bool. Set to true if you want to dump information about resource timing into the report<br>Optional. |
| dontWriteReport | boolean |	optional, Set to true if you want just return page load time and write nothing to report<br>Optional. |




**Returns:**

number: page open time (in milliseconds)



<a name="see.also.navigator.getperformance"></a>

<a name="GetPosition"></a>    
#### GetPosition

Gets position of the top-left corner of the browser window. This function is DPI aware.

```javascript
GetPosition() 
```




**Returns:**

object: {X, Y}



<a name="see.also.navigator.getposition"></a>

<a name="GetSize"></a>    
#### GetSize

Gets size of the browser window. This function is DPI aware.

```javascript
GetSize() 
```




**Returns:**

object: {Width, Height}



<a name="see.also.navigator.getsize"></a>

<a name="GetTabIdAt"></a>    
#### GetTabIdAt

Gets browser tab Id. Id may be used as parameter to Navigator.DoSelectTab(). Requires Rapise 6.5+

```javascript
GetTabIdAt(index) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	number from 0 to Navigator.GetTabsCount() |





<a name="see.also.navigator.gettabidat"></a>

<a name="GetTabIndexById"></a>    
#### GetTabIndexById

Gets index of the browser tab by Id. Index may be used as param to GetTabIdAt/GetTabUrlAt/GetTabTitleAt. Requires Rapise 6.5+

```javascript
GetTabIndexById(tabId) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabId | number |	 |





<a name="see.also.navigator.gettabindexbyid"></a>

<a name="GetTabsCount"></a>    
#### GetTabsCount

Gets number of browser tabs. Requires Rapise 6.5+

```javascript
GetTabsCount() 
```





<a name="see.also.navigator.gettabscount"></a>

<a name="GetTabTitleAt"></a>    
#### GetTabTitleAt

Gets browser tab title. Requires Rapise 6.5+

```javascript
GetTabTitleAt(index) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	number from 0 to Navigator.GetTabsCount() |





<a name="see.also.navigator.gettabtitleat"></a>

<a name="GetTabUrlAt"></a>    
#### GetTabUrlAt

Gets browser tab URL. Requires Rapise 6.5+

```javascript
GetTabUrlAt(index) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	number from 0 to Navigator.GetTabsCount() |





<a name="see.also.navigator.gettaburlat"></a>

<a name="GetWindowIdAt"></a>    
#### GetWindowIdAt

Gets browser window Id. Id is an internal identifier. May be used as a parameter to Navigator.DoActivateWindow(). Requires Rapise 6.5+

```javascript
GetWindowIdAt(index) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	number from 0 to Navigator.GetWindowsCount() |





<a name="see.also.navigator.getwindowidat"></a>

<a name="GetWindowsCount"></a>    
#### GetWindowsCount

Gets the number of browser windows. Requires Rapise 6.5+

```javascript
GetWindowsCount() 
```





<a name="see.also.navigator.getwindowscount"></a>

<a name="GetWindowTitleAt"></a>    
#### GetWindowTitleAt

Gets browser window title. Requires Rapise 6.5+

```javascript
GetWindowTitleAt(index) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	number from 0 to Navigator.GetWindowsCount() |





<a name="see.also.navigator.getwindowtitleat"></a>

<a name="GetWindowUrlAt"></a>    
#### GetWindowUrlAt

Gets browser window URL. Requires Rapise 6.5+

```javascript
GetWindowUrlAt(index) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	number from 0 to Navigator.GetWindowsCount() |





<a name="see.also.navigator.getwindowurlat"></a>

<a name="KillBrowser"></a>    
#### KillBrowser

Kills the browser process. The browser to kill is detected from browser profile settings. Requires Rapise 6.4+

```javascript
KillBrowser() 
```





<a name="see.also.navigator.killbrowser"></a>

<a name="LaunchBrowser"></a>    
#### LaunchBrowser

Launches browser, but does not connect to it. Recommended for applications with basic authentication. Requires Rapise 6.5+

```javascript
LaunchBrowser(url) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url |  |	Initial url, may be empty.<br>Optional. |





<a name="see.also.navigator.launchbrowser"></a>

<a name="Maximize"></a>    
#### Maximize

Maximizes browser window.

```javascript
Maximize() 
```





<a name="see.also.navigator.maximize"></a>

<a name="Navigate"></a>    
#### Navigate

Redirects browser to a specified URL.

```javascript
Navigate(url) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |	The URL to navigate to. |





<a name="see.also.navigator.navigate"></a>

<a name="Open"></a>    
#### Open

Opens a browser. If URL is specified, goes to URL.

```javascript
Open(url) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |	Start URL for opening browser. Can be `null`. |





<a name="see.also.navigator.open"></a>

<a name="Refresh"></a>    
#### Refresh

Reloads the current page. Requires Rapise 8.0+.

```javascript
Refresh() 
```





<a name="see.also.navigator.refresh"></a>

<a name="SelectBrowserProfile"></a>    
#### SelectBrowserProfile

Selects browser profile to use for testing.

```javascript
SelectBrowserProfile(profileName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| profileName | string |	name of a browser profile. |





<a name="see.also.navigator.selectbrowserprofile"></a>

<a name="SeSFind"></a>    
#### SeSFind

Waits for object to appear on screen. Uses test [ObjectLookup... settings](https://rapisedoc.inflectra.com/Guide/settings_dialog/#execution). Requires Rapise 6.4+

```javascript
SeSFind(xpathOrObjId, params) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpathOrObjId | objectid |	Object Id or XPath of an element to check. |
| params | object |	Overrides locator options.<br>Optional. |




**Returns:**

found object, otherwise - `false`.



<a name="see.also.navigator.sesfind"></a>

<a name="SetPosition"></a>    
#### SetPosition

Positions top-left corner of the browser window at specifid location. This function is DPI aware.

```javascript
SetPosition(x, y) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	X-offset from the top-left corner of the screen. |
| y | number |	Y-offset from the top-left corner of the screen. |





<a name="see.also.navigator.setposition"></a>

<a name="SetSize"></a>    
#### SetSize

Sets size if the browser window. This function is DPI aware.

```javascript
SetSize(width, height) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| width | number |	New width of the browser window. |
| height | number |	New height of the browser window. |





<a name="see.also.navigator.setsize"></a>

	

