Summary: This is a JavaScript wrapper for RemoteWebDriver of Selenium .NET library.

# WebDriver

This is a JavaScript wrapper for RemoteWebDriver of Selenium .NET library.






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [Actions](#actions) | Gets Actions object. |
|  [AlertIsPresent](#alertispresent) | Checks if alert is displayed. |
|  [ClearSessions](#clearsessions) | Deletes active sessions on Selenium grid. |
|  [Close](#close) | Close the Browser and Dispose of WebDriver. |
|  [Cookies](#cookies) | Gets Cookies object. |
|  [CreateDriver](#createdriver) | This will create a WebDriver for currently selected Browser profile. |
|  [CreateDriverForSession](#createdriverforsession) | Connects to active Selenium session with given URL and Id. |
|  [CreatePointerInput](#createpointerinput) | Gets PointerInputDevice object. |
|  [Dispose](#dispose) | Dispose of WebDriver. |
|  [DownloadDriver](#downloaddriver) | This will download required binary (e.g. |
|  [DumpSessions](#dumpsessions) | Prints information about active Selenium sessions to output. |
|  [ExecuteScript](#executescript) | Executes JavaScript in the context of the currently selected frame or window. |
|  [FindElementByClassName](#findelementbyclassname) | Finds the first element in the page that matches the CSS Class supplied. |
|  [FindElementByCssSelector](#findelementbycssselector) | Finds the first element matching the specified CSS selector. |
|  [FindElementById](#findelementbyid) | Finds the first element in the page that matches the ID supplied. |
|  [FindElementByLinkText](#findelementbylinktext) | Finds the first of elements that match the link text supplied. |
|  [FindElementByName](#findelementbyname) | Finds the first of elements that match the name supplied. |
|  [FindElementByPartialLinkText](#findelementbypartiallinktext) | Finds the first of elements that match the part of the link text supplied. |
|  [FindElementByTagName](#findelementbytagname) | Finds the first of elements that match the DOM Tag supplied. |
|  [FindElementByXPath](#findelementbyxpath) | Finds the first of elements that match the XPath supplied. |
|  [FindElementsByClassName](#findelementsbyclassname) | Finds a list of elements that match the class name supplied. |
|  [FindElementsByCssSelector](#findelementsbycssselector) | Finds all elements matching the specified CSS selector. |
|  [FindElementsById](#findelementsbyid) | Finds the first element in the page that matches the ID supplied. |
|  [FindElementsByLinkText](#findelementsbylinktext) | Finds a list of elements that match the link text supplied. |
|  [FindElementsByName](#findelementsbyname) | Finds a list of elements that match the name supplied. |
|  [FindElementsByPartialLinkText](#findelementsbypartiallinktext) | Finds a list of elements that match the part of the link text supplied. |
|  [FindElementsByTagName](#findelementsbytagname) | Finds a list of elements that match the DOM Tag supplied. |
|  [FindElementsByXPath](#findelementsbyxpath) | Finds a list of elements that match the XPath supplied. |
|  [GetAddressOfRemoteServer](#getaddressofremoteserver) |  |
|  [GetBrowserVersion](#getbrowserversion) |  |
|  [GetCurrentWindowHandle](#getcurrentwindowhandle) | Gets the current window handle, which is an opaque handle to this window that uniquely identifies it within this driver instance. |
|  [GetDebuggerAddress](#getdebuggeraddress) |  |
|  [GetPageSource](#getpagesource) | Gets the source of the page last loaded by the browser. |
|  [GetScreenshot](#getscreenshot) | Gets the screenshot of the page. |
|  [GetSessionId](#getsessionid) |  |
|  [GetTitle](#gettitle) | Gets the title of the current browser window. |
|  [GetUrl](#geturl) | Gets the URL the browser is currently displaying. |
|  [GetWindowHandles](#getwindowhandles) | Gets the window handles of open browser windows. |
|  [Navigate](#navigate) | Gets Navigation object with the following actions: Back, Forward, Refresh, GotToUrl(url). |
|  [PerformActions](#performactions) | Performs W3C actions. |
|  [Quit](#quit) | Disconnects from the Browser. |
|  [ReconnectSession](#reconnectsession) | Reads session information produced by SaveSession and connects to the mobile target. |
|  [SaveSession](#savesession) | Saves session information for use by ReconnectSession. |
|  [SetBrowserSize](#setbrowsersize) | Sets size of a browser window. |
|  [SetUrl](#seturl) | Sets the URL the browser is currently displaying. |
|  [SwitchToAlert](#switchtoalert) | Switches to the currently active modal dialog for this particular driver instance. |
|  [SwitchToDefaultContent](#switchtodefaultcontent) | Change the active frame to the default. |
|  [SwitchToFrame](#switchtoframe) | Move to different frame using its element. |
|  [SwitchToLastWindow](#switchtolastwindow) | Switch to last browser window. |
|  [SwitchToParentFrame](#switchtoparentframe) | Select the parent frame of the currently selected frame. |
|  [SwitchToWindow](#switchtowindow) | Switch to window specified by handle. |
|  [Window](#window) | Gets Window object. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="Actions"></a>    
#### Actions

Gets Actions object.

```javascript
WebDriver.Actions()
```





<a name="see.also.webdriver.actions"></a>

<a name="AlertIsPresent"></a>    
#### AlertIsPresent

Checks if alert is displayed.

```javascript
WebDriver.AlertIsPresent()
```





<a name="see.also.webdriver.alertispresent"></a>

<a name="ClearSessions"></a>    
#### ClearSessions

Deletes active sessions on Selenium grid.

```javascript
WebDriver.ClearSessions()
```





<a name="see.also.webdriver.clearsessions"></a>

<a name="Close"></a>    
#### Close

Close the Browser and Dispose of WebDriver.

```javascript
WebDriver.Close()
```





<a name="see.also.webdriver.close"></a>

<a name="Cookies"></a>    
#### Cookies

Gets Cookies object.

```javascript
WebDriver.Cookies()
```





<a name="see.also.webdriver.cookies"></a>

<a name="CreateDriver"></a>    
#### CreateDriver

This will create a WebDriver for currently selected Browser profile.

```javascript
WebDriver.CreateDriver(nonProfileCapsJson)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nonProfileCapsJson | object |  JSON object with capabilities not available in a Browser profile. |




**Returns:**

WebDriver object.



<a name="see.also.webdriver.createdriver"></a>

<a name="CreateDriverForSession"></a>    
#### CreateDriverForSession

Connects to active Selenium session with given URL and Id.

```javascript
WebDriver.CreateDriverForSession(addressOfRemoteServer, sessionId, driverServiceProcessId, debuggerAddress, browserVersion)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| addressOfRemoteServer |  |  Selenium server URL. |
| sessionId |  |  Id of the session to connect. |
| driverServiceProcessId |  |  Process id for the driver executable. |
| debuggerAddress |  |  Debugger address for DevTools connection. |
| browserVersion |  |  Browser version for DevTools connection. |




**Returns:**

true if successful, false otherwise.



<a name="see.also.webdriver.createdriverforsession"></a>

<a name="CreatePointerInput"></a>    
#### CreatePointerInput

Gets PointerInputDevice object. Requires Rapise 8.2+.

```javascript
var element = WebDriver.FindElementByXPath("//button[@id='Login']");
var p = WebDriver.CreatePointerInput("Mouse", "pointer");
var sequence = p.CreateActionSequence(p);
var move = p.CreatePointerMoveElement(element, 5, 5, 0);
var actionPress = p.CreatePointerDown("Left");
var pause = p.CreatePause(50);
var actionRelease = p.CreatePointerUp("Left");

sequence.AddAction(move);
sequence.AddAction(actionPress);
sequence.AddAction(pause);
sequence.AddAction(actionRelease);

WebDriver.PerformActions(sequence);
```

```javascript
WebDriver.CreatePointerInput(kind, name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| kind | string |  Touch, Mouse or Pen. |
| name | string |  Name of the pointer device. Whatever you like. |





<a name="see.also.webdriver.createpointerinput"></a>

<a name="Dispose"></a>    
#### Dispose

Dispose of WebDriver.

```javascript
WebDriver.Dispose()
```





<a name="see.also.webdriver.dispose"></a>

<a name="DownloadDriver"></a>    
#### DownloadDriver

This will download required binary (e.g. chromedriver.exe) for currently selected Browser profile. Requires Rapise 7.2+

```javascript
WebDriver.DownloadDriver(driverVersion)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| driverVersion | string |  Version of the driver executable.<br>Optional. |




**Returns:**

`true` if successful, otherwise - `false`.



<a name="see.also.webdriver.downloaddriver"></a>

<a name="DumpSessions"></a>    
#### DumpSessions

Prints information about active Selenium sessions to output.

```javascript
WebDriver.DumpSessions()
```





<a name="see.also.webdriver.dumpsessions"></a>

<a name="ExecuteScript"></a>    
#### ExecuteScript

Executes JavaScript in the context of the currently selected frame or window.

```javascript
WebDriver.ExecuteScript(script, args)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| script | string |  The JavaScript code to execute. |
| args | array |  The arguments to the script. |




**Returns:**

Null, string or element depending on the script.



<a name="see.also.webdriver.executescript"></a>

<a name="FindElementByClassName"></a>    
#### FindElementByClassName

Finds the first element in the page that matches the CSS Class supplied.

```javascript
WebDriver.FindElementByClassName(className)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| className | string |  CSS class name of the element. |




**Returns:**

element or null.



<a name="see.also.webdriver.findelementbyclassname"></a>

<a name="FindElementByCssSelector"></a>    
#### FindElementByCssSelector

Finds the first element matching the specified CSS selector.

```javascript
WebDriver.FindElementByCssSelector(cssSelector)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cssSelector | string |  The CSS selector to match. |




**Returns:**

element ot null.



<a name="see.also.webdriver.findelementbycssselector"></a>

<a name="FindElementById"></a>    
#### FindElementById

Finds the first element in the page that matches the ID supplied.

```javascript
WebDriver.FindElementById(id)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| id | string |  ID of the element. |




**Returns:**

element or null.



<a name="see.also.webdriver.findelementbyid"></a>

<a name="FindElementByLinkText"></a>    
#### FindElementByLinkText

Finds the first of elements that match the link text supplied.

```javascript
WebDriver.FindElementByLinkText(linkText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| linkText | string |  Link text of element. |




**Returns:**

element or null.



<a name="see.also.webdriver.findelementbylinktext"></a>

<a name="FindElementByName"></a>    
#### FindElementByName

Finds the first of elements that match the name supplied.

```javascript
WebDriver.FindElementByName(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Name of the element on the page. |




**Returns:**

element or null.



<a name="see.also.webdriver.findelementbyname"></a>

<a name="FindElementByPartialLinkText"></a>    
#### FindElementByPartialLinkText

Finds the first of elements that match the part of the link text supplied.

```javascript
WebDriver.FindElementByPartialLinkText(partialLinkText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| partialLinkText | string |  Part of the link text. |




**Returns:**

element or null.



<a name="see.also.webdriver.findelementbypartiallinktext"></a>

<a name="FindElementByTagName"></a>    
#### FindElementByTagName

Finds the first of elements that match the DOM Tag supplied.

```javascript
WebDriver.FindElementByTagName(tagName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tagName | string |  DOM tag Name of the element being searched. |




**Returns:**

element or null.



<a name="see.also.webdriver.findelementbytagname"></a>

<a name="FindElementByXPath"></a>    
#### FindElementByXPath

Finds the first of elements that match the XPath supplied.

```javascript
WebDriver.FindElementByXPath(xpath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |  xpath to the element. |




**Returns:**

element or null.



<a name="see.also.webdriver.findelementbyxpath"></a>

<a name="FindElementsByClassName"></a>    
#### FindElementsByClassName

Finds a list of elements that match the class name supplied.

```javascript
WebDriver.FindElementsByClassName(className)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| className | string |  className of the element. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbyclassname"></a>

<a name="FindElementsByCssSelector"></a>    
#### FindElementsByCssSelector

Finds all elements matching the specified CSS selector.

```javascript
WebDriver.FindElementsByCssSelector(cssSelector)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cssSelector | string |  The CSS selector to match. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbycssselector"></a>

<a name="FindElementsById"></a>    
#### FindElementsById

Finds the first element in the page that matches the ID supplied.

```javascript
WebDriver.FindElementsById(id)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| id | string |  ID of the element. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbyid"></a>

<a name="FindElementsByLinkText"></a>    
#### FindElementsByLinkText

Finds a list of elements that match the link text supplied.

```javascript
WebDriver.FindElementsByLinkText(linkText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| linkText |  |  Link text of element. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbylinktext"></a>

<a name="FindElementsByName"></a>    
#### FindElementsByName

Finds a list of elements that match the name supplied.

```javascript
WebDriver.FindElementsByName(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Name of the element on the page. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbyname"></a>

<a name="FindElementsByPartialLinkText"></a>    
#### FindElementsByPartialLinkText

Finds a list of elements that match the part of the link text supplied.

```javascript
WebDriver.FindElementsByPartialLinkText(partialLinkText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| partialLinkText | string |  Part of the link text. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbypartiallinktext"></a>

<a name="FindElementsByTagName"></a>    
#### FindElementsByTagName

Finds a list of elements that match the DOM Tag supplied.

```javascript
WebDriver.FindElementsByTagName(tagName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tagName | string |  DOM tag Name of the element being searched. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbytagname"></a>

<a name="FindElementsByXPath"></a>    
#### FindElementsByXPath

Finds a list of elements that match the XPath supplied.

```javascript
WebDriver.FindElementsByXPath(xpath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |  xpath to the element. |




**Returns:**

array of elements.



<a name="see.also.webdriver.findelementsbyxpath"></a>

<a name="GetAddressOfRemoteServer"></a>    
#### GetAddressOfRemoteServer



```javascript
WebDriver.GetAddressOfRemoteServer()
```




**Returns:**

URL of the remote Selenium server.



<a name="see.also.webdriver.getaddressofremoteserver"></a>

<a name="GetBrowserVersion"></a>    
#### GetBrowserVersion



```javascript
WebDriver.GetBrowserVersion()
```




**Returns:**

browser version of the remote Selenium server.



<a name="see.also.webdriver.getbrowserversion"></a>

<a name="GetCurrentWindowHandle"></a>    
#### GetCurrentWindowHandle

Gets the current window handle, which is an opaque handle to this window that uniquely identifies it within this driver instance.

```javascript
WebDriver.GetCurrentWindowHandle()
```





<a name="see.also.webdriver.getcurrentwindowhandle"></a>

<a name="GetDebuggerAddress"></a>    
#### GetDebuggerAddress



```javascript
WebDriver.GetDebuggerAddress()
```




**Returns:**

debugger address of the remote Selenium server.



<a name="see.also.webdriver.getdebuggeraddress"></a>

<a name="GetPageSource"></a>    
#### GetPageSource

Gets the source of the page last loaded by the browser.

```javascript
WebDriver.GetPageSource()
```





<a name="see.also.webdriver.getpagesource"></a>

<a name="GetScreenshot"></a>    
#### GetScreenshot

Gets the screenshot of the page.

```javascript
WebDriver.GetScreenshot()
```





<a name="see.also.webdriver.getscreenshot"></a>

<a name="GetSessionId"></a>    
#### GetSessionId



```javascript
WebDriver.GetSessionId()
```




**Returns:**

Id of the current session.



<a name="see.also.webdriver.getsessionid"></a>

<a name="GetTitle"></a>    
#### GetTitle

Gets the title of the current browser window.

```javascript
WebDriver.GetTitle()
```





<a name="see.also.webdriver.gettitle"></a>

<a name="GetUrl"></a>    
#### GetUrl

Gets the URL the browser is currently displaying.

```javascript
WebDriver.GetUrl()
```





<a name="see.also.webdriver.geturl"></a>

<a name="GetWindowHandles"></a>    
#### GetWindowHandles

Gets the window handles of open browser windows.

```javascript
WebDriver.GetWindowHandles()
```





<a name="see.also.webdriver.getwindowhandles"></a>

<a name="Navigate"></a>    
#### Navigate

Gets Navigation object with the following actions: Back, Forward, Refresh, GotToUrl(url).

Example:

```javascript
WebDriver.Navigate().Back();
```

```javascript
WebDriver.Navigate()
```





<a name="see.also.webdriver.navigate"></a>

<a name="PerformActions"></a>    
#### PerformActions

Performs W3C actions. Requires Rapise 8.2+. See [CreatePointerInput](#createpointerinput) for usage example.

```javascript
WebDriver.PerformActions(sequence)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| sequence | ActionSequence |  Array of ActionSequence objects. |





<a name="see.also.webdriver.performactions"></a>

<a name="Quit"></a>    
#### Quit

Disconnects from the Browser.

```javascript
WebDriver.Quit()
```





<a name="see.also.webdriver.quit"></a>

<a name="ReconnectSession"></a>    
#### ReconnectSession

Reads session information produced by SaveSession and connects to the mobile target.

```javascript
WebDriver.ReconnectSession(autoCreate)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| autoCreate | boolean |  'true' to automatically create a new session if there is no saved session or saved session is not available anymore.<br>Optional, Default: "false". |





<a name="see.also.webdriver.reconnectsession"></a>

<a name="SaveSession"></a>    
#### SaveSession

Saves session information for use by ReconnectSession.

```javascript
WebDriver.SaveSession()
```





<a name="see.also.webdriver.savesession"></a>

<a name="SetBrowserSize"></a>    
#### SetBrowserSize

Sets size of a browser window.

```javascript
WebDriver.SetBrowserSize(width, height)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| width | number |  Window width to set |
| height | number |  Window height to set |





<a name="see.also.webdriver.setbrowsersize"></a>

<a name="SetUrl"></a>    
#### SetUrl

Sets the URL the browser is currently displaying.

```javascript
WebDriver.SetUrl(url)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |  The URL to display |





<a name="see.also.webdriver.seturl"></a>

<a name="SwitchToAlert"></a>    
#### SwitchToAlert

Switches to the currently active modal dialog for this particular driver instance.

```javascript
WebDriver.SwitchToAlert()
```





<a name="see.also.webdriver.switchtoalert"></a>

<a name="SwitchToDefaultContent"></a>    
#### SwitchToDefaultContent

Change the active frame to the default.

```javascript
WebDriver.SwitchToDefaultContent()
```





<a name="see.also.webdriver.switchtodefaultcontent"></a>

<a name="SwitchToFrame"></a>    
#### SwitchToFrame

Move to different frame using its element.

```javascript
WebDriver.SwitchToFrame(el)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| el | WebElementWrapper |  Element of the frame. |





<a name="see.also.webdriver.switchtoframe"></a>

<a name="SwitchToLastWindow"></a>    
#### SwitchToLastWindow

Switch to last browser window.

```javascript
WebDriver.SwitchToLastWindow()
```





<a name="see.also.webdriver.switchtolastwindow"></a>

<a name="SwitchToParentFrame"></a>    
#### SwitchToParentFrame

Select the parent frame of the currently selected frame.

```javascript
WebDriver.SwitchToParentFrame()
```





<a name="see.also.webdriver.switchtoparentframe"></a>

<a name="SwitchToWindow"></a>    
#### SwitchToWindow

Switch to window specified by handle.

```javascript
WebDriver.SwitchToWindow(windowHandle)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| windowHandle |  |   |





<a name="see.also.webdriver.switchtowindow"></a>

<a name="Window"></a>    
#### Window

Gets Window object.

```javascript
WebDriver.Window()
```





<a name="see.also.webdriver.window"></a>

  

