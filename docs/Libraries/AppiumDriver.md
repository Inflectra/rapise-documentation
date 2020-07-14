Summary: This is a JavaScript wrapper for AppiumDriver of AppiumDotNet library.

# AppiumDriver

This is a JavaScript wrapper for AppiumDriver of AppiumDotNet library.<br>https://github.com/appium/appium-dotnet-driver






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[ActivateIMEEngine](#activateimeengine) | Activate the given IME on the device. |
|	[BackgroundApp](#backgroundapp) | Send the currently active app to the background, and either return after a certain amount of time, or leave the app deactivated. |
|	[ClearSessions](#clearsessions) | Deletes active sessions on Appium server. |
|	[Close](#close) | Close the Browser and Dispose of WebDriver. |
|	[CloseApp](#closeapp) | Close the application. |
|	[CreateAppiumDriver](#createappiumdriver) |  |
|	[CreateDesiredCapabilities](#createdesiredcapabilities) |  |
|	[CreateDriverForSession](#createdriverforsession) | Connects to active Appium session with given URL and Id. |
|	[DeactiveIMEEngine](#deactiveimeengine) | Deactivate the currently Active IME Engine on the device. |
|	[Dispose](#dispose) | Dispose of WebDriver. |
|	[DumpSessions](#dumpsessions) | Prints information about active Appium sessions to output. |
|	[ExecuteScript](#executescript) | Executes JavaScript in the context of the currently selected frame or window. |
|	[FindElementByAccessibilityId](#findelementbyaccessibilityid) | Search for an element using Accessibility ID. |
|	[FindElementByAndroidUIAutomator](#findelementbyandroiduiautomator) | Search for an element using UIAutomator selector. |
|	[FindElementByClassName](#findelementbyclassname) | Finds the first element in the page that matches the CSS Class supplied. |
|	[FindElementByCssSelector](#findelementbycssselector) | Finds the first element matching the specified CSS selector. |
|	[FindElementById](#findelementbyid) | Finds the first element in the page that matches the ID supplied. |
|	[FindElementByIosUIAutomation](#findelementbyiosuiautomation) | Search for an element using UIAutomation selector. |
|	[FindElementByLinkText](#findelementbylinktext) | Finds the first of elements that match the link text supplied. |
|	[FindElementByName](#findelementbyname) | Finds the first of elements that match the name supplied. |
|	[FindElementByPartialLinkText](#findelementbypartiallinktext) | Finds the first of elements that match the part of the link text supplied. |
|	[FindElementByTagName](#findelementbytagname) | Finds the first of elements that match the DOM Tag supplied. |
|	[FindElementByXPath](#findelementbyxpath) | Finds the first of elements that match the XPath supplied. |
|	[FindElementsByAccessibilityId](#findelementsbyaccessibilityid) | Search for all elements matching Accessibility ID. |
|	[FindElementsByAndroidUIAutomator](#findelementsbyandroiduiautomator) | Search for all elements using UIAutomator selector. |
|	[FindElementsByClassName](#findelementsbyclassname) | Finds a list of elements that match the class name supplied. |
|	[FindElementsByCssSelector](#findelementsbycssselector) | Finds all elements matching the specified CSS selector. |
|	[FindElementsById](#findelementsbyid) | Finds the first element in the page that matches the ID supplied. |
|	[FindElementsByIosUIAutomation](#findelementsbyiosuiautomation) | Search for all elements using UIAutomation selector. |
|	[FindElementsByLinkText](#findelementsbylinktext) | Finds a list of elements that match the link text supplied. |
|	[FindElementsByName](#findelementsbyname) | Finds a list of elements that match the name supplied. |
|	[FindElementsByPartialLinkText](#findelementsbypartiallinktext) | Finds a list of elements that match the part of the link text supplied. |
|	[FindElementsByTagName](#findelementsbytagname) | Finds a list of elements that match the DOM Tag supplied. |
|	[FindElementsByXPath](#findelementsbyxpath) | Finds a list of elements that match the XPath supplied. |
|	[GetAddressOfRemoteServer](#getaddressofremoteserver) |  |
|	[GetContext](#getcontext) |  |
|	[GetContexts](#getcontexts) |  |
|	[GetCurrentActivity](#getcurrentactivity) |  |
|	[GetCurrentWindowHandle](#getcurrentwindowhandle) | Gets the current window handle, which is an opaque handle to this window that uniquely identifies it within this driver instance. |
|	[GetIMEActiveEngine](#getimeactiveengine) |  |
|	[GetIMEAvailableEngines](#getimeavailableengines) |  |
|	[GetOrientation](#getorientation) |  |
|	[GetPageSource](#getpagesource) | Gets the source of the page last loaded by the browser. |
|	[GetSessionId](#getsessionid) |  |
|	[GetTitle](#gettitle) | Gets the title of the current browser window. |
|	[GetUrl](#geturl) | Gets the URL the browser is currently displaying. |
|	[GetWindowHandles](#getwindowhandles) | Gets the window handles of open browser windows. |
|	[HideKeyboard](#hidekeyboard) |  |
|	[IgnoreUnimportantViews](#ignoreunimportantviews) |  |
|	[InstallApp](#installapp) |  |
|	[IsAppInstalled](#isappinstalled) |  |
|	[IsIMEActive](#isimeactive) |  |
|	[IsLocked](#islocked) |  |
|	[LaunchApp](#launchapp) |  |
|	[OpenNotifications](#opennotifications) |  |
|	[PressKeyCode](#presskeycode) |  |
|	[PullFile](#pullfile) |  |
|	[PushFile](#pushfile) |  |
|	[Quit](#quit) | Disconnects from the Browser. |
|	[ReconnectSession](#reconnectsession) | Reads session information produced by SaveSession and connects to the mobile target. |
|	[RemoveApp](#removeapp) |  |
|	[ResetApp](#resetapp) |  |
|	[SaveSession](#savesession) | Saves session information for use by ReconnectSession. |
|	[SetContext](#setcontext) | Sets current context. |
|	[SetOrientation](#setorientation) | Sets device orienataion. |
|	[SetUrl](#seturl) | Sets the URL the browser is currently displaying. |
|	[ShakeDevice](#shakedevice) |  |
|	[StartActivity](#startactivity) |  |
|	[ToggleAirplaneMode](#toggleairplanemode) |  |
|	[ToggleLocationServices](#togglelocationservices) |  |
|	[ToggleWifi](#togglewifi) |  |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="ActivateIMEEngine"></a>    
#### ActivateIMEEngine

Activate the given IME on the device.

```javascript
ActivateIMEEngine(imeEngine) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| imeEngine | string |	IME to activate |





<a name="see.also.appiumdriver.activateimeengine"></a>

<a name="BackgroundApp"></a>    
#### BackgroundApp

Send the currently active app to the background, and either return after a certain amount of time, or leave the app deactivated.

```javascript
BackgroundApp(seconds) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| seconds | number |	Timeout value |





<a name="see.also.appiumdriver.backgroundapp"></a>

<a name="ClearSessions"></a>    
#### ClearSessions

Deletes active sessions on Appium server.

```javascript
ClearSessions() 
```





<a name="see.also.appiumdriver.clearsessions"></a>

<a name="Close"></a>    
#### Close

Close the Browser and Dispose of WebDriver.

```javascript
Close() 
```





<a name="see.also.appiumdriver.close"></a>

<a name="CloseApp"></a>    
#### CloseApp

Close the application.

```javascript
CloseApp() 
```





<a name="see.also.appiumdriver.closeapp"></a>

<a name="CreateAppiumDriver"></a>    
#### CreateAppiumDriver



```javascript
CreateAppiumDriver(uri, caps) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| uri | string |	 |
| caps | AppiumCapabilities |	 |





<a name="see.also.appiumdriver.createappiumdriver"></a>

<a name="CreateDesiredCapabilities"></a>    
#### CreateDesiredCapabilities



```javascript
CreateDesiredCapabilities() 
```




**Returns:**

AppiumCapabilities object.



<a name="see.also.appiumdriver.createdesiredcapabilities"></a>

<a name="CreateDriverForSession"></a>    
#### CreateDriverForSession

Connects to active Appium session with given URL and Id.

```javascript
CreateDriverForSession(addressOfRemoteServer, sessionId, suppressErrors) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| addressOfRemoteServer | string |	Appium server URL. |
| sessionId | string |	Id of the session to connect. |
| suppressErrors | boolean |	'true' to suppress failures in the report, default 'false'.<br>Optional, Default: false. |




**Returns:**

true if successful, false otherwise.



<a name="see.also.appiumdriver.createdriverforsession"></a>

<a name="DeactiveIMEEngine"></a>    
#### DeactiveIMEEngine

Deactivate the currently Active IME Engine on the device.

```javascript
DeactiveIMEEngine() 
```





<a name="see.also.appiumdriver.deactiveimeengine"></a>

<a name="Dispose"></a>    
#### Dispose

Dispose of WebDriver.

```javascript
Dispose() 
```





<a name="see.also.appiumdriver.dispose"></a>

<a name="DumpSessions"></a>    
#### DumpSessions

Prints information about active Appium sessions to output.

```javascript
DumpSessions() 
```





<a name="see.also.appiumdriver.dumpsessions"></a>

<a name="ExecuteScript"></a>    
#### ExecuteScript

Executes JavaScript in the context of the currently selected frame or window.

```javascript
ExecuteScript(script, args) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| script | string |	The JavaScript code to execute. |
| args | array |	The arguments to the script. |





<a name="see.also.appiumdriver.executescript"></a>

<a name="FindElementByAccessibilityId"></a>    
#### FindElementByAccessibilityId

Search for an element using Accessibility ID.

```javascript
FindElementByAccessibilityId(selector) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |	 |





<a name="see.also.appiumdriver.findelementbyaccessibilityid"></a>

<a name="FindElementByAndroidUIAutomator"></a>    
#### FindElementByAndroidUIAutomator

Search for an element using UIAutomator selector.

```javascript
FindElementByAndroidUIAutomator(selector) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |	 |





<a name="see.also.appiumdriver.findelementbyandroiduiautomator"></a>

<a name="FindElementByClassName"></a>    
#### FindElementByClassName

Finds the first element in the page that matches the CSS Class supplied.

```javascript
FindElementByClassName(className) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| className | string |	CSS class name of the element. |





<a name="see.also.appiumdriver.findelementbyclassname"></a>

<a name="FindElementByCssSelector"></a>    
#### FindElementByCssSelector

Finds the first element matching the specified CSS selector.

```javascript
FindElementByCssSelector(cssSelector) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cssSelector | string |	The CSS selector to match. |





<a name="see.also.appiumdriver.findelementbycssselector"></a>

<a name="FindElementById"></a>    
#### FindElementById

Finds the first element in the page that matches the ID supplied.

```javascript
FindElementById(id) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| id | string |	ID of the element. |





<a name="see.also.appiumdriver.findelementbyid"></a>

<a name="FindElementByIosUIAutomation"></a>    
#### FindElementByIosUIAutomation

Search for an element using UIAutomation selector.

```javascript
FindElementByIosUIAutomation(selector) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |	 |





<a name="see.also.appiumdriver.findelementbyiosuiautomation"></a>

<a name="FindElementByLinkText"></a>    
#### FindElementByLinkText

Finds the first of elements that match the link text supplied.

```javascript
FindElementByLinkText(linkText) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| linkText | string |	Link text of element. |





<a name="see.also.appiumdriver.findelementbylinktext"></a>

<a name="FindElementByName"></a>    
#### FindElementByName

Finds the first of elements that match the name supplied.

```javascript
FindElementByName(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of the element on the page. |





<a name="see.also.appiumdriver.findelementbyname"></a>

<a name="FindElementByPartialLinkText"></a>    
#### FindElementByPartialLinkText

Finds the first of elements that match the part of the link text supplied.

```javascript
FindElementByPartialLinkText(partialLinkText) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| partialLinkText | string |	Part of the link text. |





<a name="see.also.appiumdriver.findelementbypartiallinktext"></a>

<a name="FindElementByTagName"></a>    
#### FindElementByTagName

Finds the first of elements that match the DOM Tag supplied.

```javascript
FindElementByTagName(tagName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tagName | string |	DOM tag Name of the element being searched. |





<a name="see.also.appiumdriver.findelementbytagname"></a>

<a name="FindElementByXPath"></a>    
#### FindElementByXPath

Finds the first of elements that match the XPath supplied.

```javascript
FindElementByXPath(xpath) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |	xpath to the element. |





<a name="see.also.appiumdriver.findelementbyxpath"></a>

<a name="FindElementsByAccessibilityId"></a>    
#### FindElementsByAccessibilityId

Search for all elements matching Accessibility ID.

```javascript
FindElementsByAccessibilityId(selector) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |	 |





<a name="see.also.appiumdriver.findelementsbyaccessibilityid"></a>

<a name="FindElementsByAndroidUIAutomator"></a>    
#### FindElementsByAndroidUIAutomator

Search for all elements using UIAutomator selector.

```javascript
FindElementsByAndroidUIAutomator(selector) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |	 |





<a name="see.also.appiumdriver.findelementsbyandroiduiautomator"></a>

<a name="FindElementsByClassName"></a>    
#### FindElementsByClassName

Finds a list of elements that match the class name supplied.

```javascript
FindElementsByClassName(className) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| className | string |	class name of the element. |





<a name="see.also.appiumdriver.findelementsbyclassname"></a>

<a name="FindElementsByCssSelector"></a>    
#### FindElementsByCssSelector

Finds all elements matching the specified CSS selector.

```javascript
FindElementsByCssSelector(cssSelector) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cssSelector | string |	The CSS selector to match. |





<a name="see.also.appiumdriver.findelementsbycssselector"></a>

<a name="FindElementsById"></a>    
#### FindElementsById

Finds the first element in the page that matches the ID supplied.

```javascript
FindElementsById(id) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| id | string |	ID of the element. |





<a name="see.also.appiumdriver.findelementsbyid"></a>

<a name="FindElementsByIosUIAutomation"></a>    
#### FindElementsByIosUIAutomation

Search for all elements using UIAutomation selector.

```javascript
FindElementsByIosUIAutomation(selector) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |	 |





<a name="see.also.appiumdriver.findelementsbyiosuiautomation"></a>

<a name="FindElementsByLinkText"></a>    
#### FindElementsByLinkText

Finds a list of elements that match the link text supplied.

```javascript
FindElementsByLinkText(linkText) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| linkText | string |	Link text of element. |





<a name="see.also.appiumdriver.findelementsbylinktext"></a>

<a name="FindElementsByName"></a>    
#### FindElementsByName

Finds a list of elements that match the name supplied.

```javascript
FindElementsByName(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of the element on the page. |





<a name="see.also.appiumdriver.findelementsbyname"></a>

<a name="FindElementsByPartialLinkText"></a>    
#### FindElementsByPartialLinkText

Finds a list of elements that match the part of the link text supplied.

```javascript
FindElementsByPartialLinkText(partialLinkText) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| partialLinkText | string |	Part of the link text. |





<a name="see.also.appiumdriver.findelementsbypartiallinktext"></a>

<a name="FindElementsByTagName"></a>    
#### FindElementsByTagName

Finds a list of elements that match the DOM Tag supplied.

```javascript
FindElementsByTagName(tagName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tagName | string |	DOM tag Name of the element being searched. |





<a name="see.also.appiumdriver.findelementsbytagname"></a>

<a name="FindElementsByXPath"></a>    
#### FindElementsByXPath

Finds a list of elements that match the XPath supplied.

```javascript
FindElementsByXPath(xpath) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |	xpath to the element. |





<a name="see.also.appiumdriver.findelementsbyxpath"></a>

<a name="GetAddressOfRemoteServer"></a>    
#### GetAddressOfRemoteServer



```javascript
GetAddressOfRemoteServer() 
```




**Returns:**

URL of the remote Appium server.



<a name="see.also.appiumdriver.getaddressofremoteserver"></a>

<a name="GetContext"></a>    
#### GetContext



```javascript
GetContext() 
```




**Returns:**

Current context (NATIVE_APP or WEBVIEW_*).



<a name="see.also.appiumdriver.getcontext"></a>

<a name="GetContexts"></a>    
#### GetContexts



```javascript
GetContexts() 
```




**Returns:**

Array of available contexts for a hybrid application.



<a name="see.also.appiumdriver.getcontexts"></a>

<a name="GetCurrentActivity"></a>    
#### GetCurrentActivity



```javascript
GetCurrentActivity() 
```





<a name="see.also.appiumdriver.getcurrentactivity"></a>

<a name="GetCurrentWindowHandle"></a>    
#### GetCurrentWindowHandle

Gets the current window handle, which is an opaque handle to this window that uniquely identifies it within this driver instance.

```javascript
GetCurrentWindowHandle() 
```





<a name="see.also.appiumdriver.getcurrentwindowhandle"></a>

<a name="GetIMEActiveEngine"></a>    
#### GetIMEActiveEngine



```javascript
GetIMEActiveEngine() 
```




**Returns:**

Currently active IME Engine on the device.



<a name="see.also.appiumdriver.getimeactiveengine"></a>

<a name="GetIMEAvailableEngines"></a>    
#### GetIMEAvailableEngines



```javascript
GetIMEAvailableEngines() 
```




**Returns:**

A list of IME engines available on the device.



<a name="see.also.appiumdriver.getimeavailableengines"></a>

<a name="GetOrientation"></a>    
#### GetOrientation



```javascript
GetOrientation() 
```




**Returns:**

Orientation of the device (0 - portrait, 1 - landscape).



<a name="see.also.appiumdriver.getorientation"></a>

<a name="GetPageSource"></a>    
#### GetPageSource

Gets the source of the page last loaded by the browser.

```javascript
GetPageSource() 
```





<a name="see.also.appiumdriver.getpagesource"></a>

<a name="GetSessionId"></a>    
#### GetSessionId



```javascript
GetSessionId() 
```




**Returns:**

Id of the current session.



<a name="see.also.appiumdriver.getsessionid"></a>

<a name="GetTitle"></a>    
#### GetTitle

Gets the title of the current browser window.

```javascript
GetTitle() 
```





<a name="see.also.appiumdriver.gettitle"></a>

<a name="GetUrl"></a>    
#### GetUrl

Gets the URL the browser is currently displaying.

```javascript
GetUrl() 
```





<a name="see.also.appiumdriver.geturl"></a>

<a name="GetWindowHandles"></a>    
#### GetWindowHandles

Gets the window handles of open browser windows.

```javascript
GetWindowHandles() 
```





<a name="see.also.appiumdriver.getwindowhandles"></a>

<a name="HideKeyboard"></a>    
#### HideKeyboard



```javascript
HideKeyboard(key, key) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| key |  |	 |
| key |  |	 |





<a name="see.also.appiumdriver.hidekeyboard"></a>

<a name="IgnoreUnimportantViews"></a>    
#### IgnoreUnimportantViews



```javascript
IgnoreUnimportantViews(value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value |  |	 |





<a name="see.also.appiumdriver.ignoreunimportantviews"></a>

<a name="InstallApp"></a>    
#### InstallApp



```javascript
InstallApp(appPath) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| appPath |  |	 |





<a name="see.also.appiumdriver.installapp"></a>

<a name="IsAppInstalled"></a>    
#### IsAppInstalled



```javascript
IsAppInstalled(bundleId) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bundleId |  |	 |





<a name="see.also.appiumdriver.isappinstalled"></a>

<a name="IsIMEActive"></a>    
#### IsIMEActive



```javascript
IsIMEActive() 
```





<a name="see.also.appiumdriver.isimeactive"></a>

<a name="IsLocked"></a>    
#### IsLocked



```javascript
IsLocked() 
```





<a name="see.also.appiumdriver.islocked"></a>

<a name="LaunchApp"></a>    
#### LaunchApp



```javascript
LaunchApp() 
```





<a name="see.also.appiumdriver.launchapp"></a>

<a name="OpenNotifications"></a>    
#### OpenNotifications



```javascript
OpenNotifications() 
```





<a name="see.also.appiumdriver.opennotifications"></a>

<a name="PressKeyCode"></a>    
#### PressKeyCode



```javascript
PressKeyCode(keyCode) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| keyCode |  |	 |





<a name="see.also.appiumdriver.presskeycode"></a>

<a name="PullFile"></a>    
#### PullFile



```javascript
PullFile(pathOnDevice) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| pathOnDevice |  |	 |





<a name="see.also.appiumdriver.pullfile"></a>

<a name="PushFile"></a>    
#### PushFile



```javascript
PushFile(base64Data, base64Data) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| base64Data |  |	 |
| base64Data |  |	 |





<a name="see.also.appiumdriver.pushfile"></a>

<a name="Quit"></a>    
#### Quit

Disconnects from the Browser.

```javascript
Quit() 
```





<a name="see.also.appiumdriver.quit"></a>

<a name="ReconnectSession"></a>    
#### ReconnectSession

Reads session information produced by SaveSession and connects to the mobile target.

```javascript
ReconnectSession(autoCreate) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| autoCreate | boolean |	'true' to automatically create a new session if there is no saved session or saved session is not available anymore.<br>Optional, Default: false. |





<a name="see.also.appiumdriver.reconnectsession"></a>

<a name="RemoveApp"></a>    
#### RemoveApp



```javascript
RemoveApp(appId) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| appId |  |	 |





<a name="see.also.appiumdriver.removeapp"></a>

<a name="ResetApp"></a>    
#### ResetApp



```javascript
ResetApp() 
```





<a name="see.also.appiumdriver.resetapp"></a>

<a name="SaveSession"></a>    
#### SaveSession

Saves session information for use by ReconnectSession.

```javascript
SaveSession() 
```





<a name="see.also.appiumdriver.savesession"></a>

<a name="SetContext"></a>    
#### SetContext

Sets current context.

```javascript
SetContext(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	 |





<a name="see.also.appiumdriver.setcontext"></a>

<a name="SetOrientation"></a>    
#### SetOrientation

Sets device orienataion.

```javascript
SetOrientation(orientation) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| orientation | number |	0 - portrait, 1 - landscape |





<a name="see.also.appiumdriver.setorientation"></a>

<a name="SetUrl"></a>    
#### SetUrl

Sets the URL the browser is currently displaying.

```javascript
SetUrl(value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	The URL to display |





<a name="see.also.appiumdriver.seturl"></a>

<a name="ShakeDevice"></a>    
#### ShakeDevice



```javascript
ShakeDevice() 
```





<a name="see.also.appiumdriver.shakedevice"></a>

<a name="StartActivity"></a>    
#### StartActivity



```javascript
StartActivity(appActivity, appWaitPackage, appWaitActivity, appWaitActivity) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| appActivity |  |	 |
| appWaitPackage |  |	 |
| appWaitActivity |  |	 |
| appWaitActivity |  |	 |





<a name="see.also.appiumdriver.startactivity"></a>

<a name="ToggleAirplaneMode"></a>    
#### ToggleAirplaneMode



```javascript
ToggleAirplaneMode() 
```





<a name="see.also.appiumdriver.toggleairplanemode"></a>

<a name="ToggleLocationServices"></a>    
#### ToggleLocationServices



```javascript
ToggleLocationServices() 
```





<a name="see.also.appiumdriver.togglelocationservices"></a>

<a name="ToggleWifi"></a>    
#### ToggleWifi



```javascript
ToggleWifi() 
```





<a name="see.also.appiumdriver.togglewifi"></a>

	

