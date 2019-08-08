# AppiumDriver

This is a JavaScript wrapper for AppiumDriver of AppiumDotNet library.<br>https://github.com/appium/appium-dotnet-driver






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[ActivateIMEEngine](#ActivateIMEEngine) | Activate the given IME on the device. |
|	[BackgroundApp](#BackgroundApp) | Send the currently active app to the background, and either return after a certain amount of time, or leave the app deactivated. |
|	[ClearSessions](#ClearSessions) | Deletes active sessions on Appium server. |
|	[Close](#Close) | Close the Browser and Dispose of WebDriver. |
|	[CloseApp](#CloseApp) | Close the application. |
|	[CreateAppiumDriver](#CreateAppiumDriver) |  |
|	[CreateDesiredCapabilities](#CreateDesiredCapabilities) |  |
|	[CreateDriverForSession](#CreateDriverForSession) | Connects to active Appium session with given URL and Id. |
|	[DeactiveIMEEngine](#DeactiveIMEEngine) | Deactivate the currently Active IME Engine on the device. |
|	[Dispose](#Dispose) | Dispose of WebDriver. |
|	[DumpSessions](#DumpSessions) | Prints information about active Appium sessions to output. |
|	[ExecuteScript](#ExecuteScript) | Executes JavaScript in the context of the currently selected frame or window. |
|	[FindElementByAccessibilityId](#FindElementByAccessibilityId) | Search for an element using Accessibility ID. |
|	[FindElementByAndroidUIAutomator](#FindElementByAndroidUIAutomator) | Search for an element using UIAutomator selector. |
|	[FindElementByClassName](#FindElementByClassName) | Finds the first element in the page that matches the CSS Class supplied. |
|	[FindElementByCssSelector](#FindElementByCssSelector) | Finds the first element matching the specified CSS selector. |
|	[FindElementById](#FindElementById) | Finds the first element in the page that matches the ID supplied. |
|	[FindElementByIosUIAutomation](#FindElementByIosUIAutomation) | Search for an element using UIAutomation selector. |
|	[FindElementByLinkText](#FindElementByLinkText) | Finds the first of elements that match the link text supplied. |
|	[FindElementByName](#FindElementByName) | Finds the first of elements that match the name supplied. |
|	[FindElementByPartialLinkText](#FindElementByPartialLinkText) | Finds the first of elements that match the part of the link text supplied. |
|	[FindElementByTagName](#FindElementByTagName) | Finds the first of elements that match the DOM Tag supplied. |
|	[FindElementByXPath](#FindElementByXPath) | Finds the first of elements that match the XPath supplied. |
|	[FindElementsByAccessibilityId](#FindElementsByAccessibilityId) | Search for all elements matching Accessibility ID. |
|	[FindElementsByAndroidUIAutomator](#FindElementsByAndroidUIAutomator) | Search for all elements using UIAutomator selector. |
|	[FindElementsByClassName](#FindElementsByClassName) | Finds a list of elements that match the class name supplied. |
|	[FindElementsByCssSelector](#FindElementsByCssSelector) | Finds all elements matching the specified CSS selector. |
|	[FindElementsById](#FindElementsById) | Finds the first element in the page that matches the ID supplied. |
|	[FindElementsByIosUIAutomation](#FindElementsByIosUIAutomation) | Search for all elements using UIAutomation selector. |
|	[FindElementsByLinkText](#FindElementsByLinkText) | Finds a list of elements that match the link text supplied. |
|	[FindElementsByName](#FindElementsByName) | Finds a list of elements that match the name supplied. |
|	[FindElementsByPartialLinkText](#FindElementsByPartialLinkText) | Finds a list of elements that match the part of the link text supplied. |
|	[FindElementsByTagName](#FindElementsByTagName) | Finds a list of elements that match the DOM Tag supplied. |
|	[FindElementsByXPath](#FindElementsByXPath) | Finds a list of elements that match the XPath supplied. |
|	[GetAddressOfRemoteServer](#GetAddressOfRemoteServer) |  |
|	[GetContext](#GetContext) |  |
|	[GetContexts](#GetContexts) |  |
|	[GetCurrentActivity](#GetCurrentActivity) |  |
|	[GetCurrentWindowHandle](#GetCurrentWindowHandle) | Gets the current window handle, which is an opaque handle to this window that uniquely identifies it within this driver instance. |
|	[GetIMEActiveEngine](#GetIMEActiveEngine) |  |
|	[GetIMEAvailableEngines](#GetIMEAvailableEngines) |  |
|	[GetOrientation](#GetOrientation) |  |
|	[GetPageSource](#GetPageSource) | Gets the source of the page last loaded by the browser. |
|	[GetSessionId](#GetSessionId) |  |
|	[GetTitle](#GetTitle) | Gets the title of the current browser window. |
|	[GetUrl](#GetUrl) | Gets the URL the browser is currently displaying. |
|	[GetWindowHandles](#GetWindowHandles) | Gets the window handles of open browser windows. |
|	[HideKeyboard](#HideKeyboard) |  |
|	[IgnoreUnimportantViews](#IgnoreUnimportantViews) |  |
|	[InstallApp](#InstallApp) |  |
|	[IsAppInstalled](#IsAppInstalled) |  |
|	[IsIMEActive](#IsIMEActive) |  |
|	[IsLocked](#IsLocked) |  |
|	[LaunchApp](#LaunchApp) |  |
|	[OpenNotifications](#OpenNotifications) |  |
|	[PressKeyCode](#PressKeyCode) |  |
|	[PullFile](#PullFile) |  |
|	[PushFile](#PushFile) |  |
|	[Quit](#Quit) | Disconnects from the Browser. |
|	[ReconnectSession](#ReconnectSession) | Reads session information produced by SaveSession and connects to the mobile target. |
|	[RemoveApp](#RemoveApp) |  |
|	[ResetApp](#ResetApp) |  |
|	[SaveSession](#SaveSession) | Saves session information for use by ReconnectSession. |
|	[SetContext](#SetContext) | Sets current context. |
|	[SetOrientation](#SetOrientation) | Sets device orienataion. |
|	[SetUrl](#SetUrl) | Sets the URL the browser is currently displaying. |
|	[ShakeDevice](#ShakeDevice) |  |
|	[StartActivity](#StartActivity) |  |
|	[ToggleAirplaneMode](#ToggleAirplaneMode) |  |
|	[ToggleLocationServices](#ToggleLocationServices) |  |
|	[ToggleWifi](#ToggleWifi) |  |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="ActivateIMEEngine"></a>    
#### ActivateIMEEngine(imeEngine)

Activate the given IME on the device.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| imeEngine | string |	IME to activate |





<a name="see.also.appiumdriver.activateimeengine"></a>

<a name="BackgroundApp"></a>    
#### BackgroundApp(seconds)

Send the currently active app to the background, and either return after a certain amount of time, or leave the app deactivated.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| seconds | number |	Timeout value |





<a name="see.also.appiumdriver.backgroundapp"></a>

<a name="ClearSessions"></a>    
#### ClearSessions()

Deletes active sessions on Appium server.





<a name="see.also.appiumdriver.clearsessions"></a>

<a name="Close"></a>    
#### Close()

Close the Browser and Dispose of WebDriver.





<a name="see.also.appiumdriver.close"></a>

<a name="CloseApp"></a>    
#### CloseApp()

Close the application.





<a name="see.also.appiumdriver.closeapp"></a>

<a name="CreateAppiumDriver"></a>    
#### CreateAppiumDriver(uri, caps)




**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| uri | string |	 |
| caps | AppiumCapabilities |	 |





<a name="see.also.appiumdriver.createappiumdriver"></a>

<a name="CreateDesiredCapabilities"></a>    
#### CreateDesiredCapabilities()






**Returns:**

AppiumCapabilities object.



<a name="see.also.appiumdriver.createdesiredcapabilities"></a>

<a name="CreateDriverForSession"></a>    
#### CreateDriverForSession(addressOfRemoteServer, sessionId, suppressErrors)

Connects to active Appium session with given URL and Id.


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
#### DeactiveIMEEngine()

Deactivate the currently Active IME Engine on the device.





<a name="see.also.appiumdriver.deactiveimeengine"></a>

<a name="Dispose"></a>    
#### Dispose()

Dispose of WebDriver.





<a name="see.also.appiumdriver.dispose"></a>

<a name="DumpSessions"></a>    
#### DumpSessions()

Prints information about active Appium sessions to output.





<a name="see.also.appiumdriver.dumpsessions"></a>

<a name="ExecuteScript"></a>    
#### ExecuteScript(script, args)

Executes JavaScript in the context of the currently selected frame or window.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| script | string |	The JavaScript code to execute. |
| args | array |	The arguments to the script. |





<a name="see.also.appiumdriver.executescript"></a>

<a name="FindElementByAccessibilityId"></a>    
#### FindElementByAccessibilityId(selector)

Search for an element using Accessibility ID.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |	 |





<a name="see.also.appiumdriver.findelementbyaccessibilityid"></a>

<a name="FindElementByAndroidUIAutomator"></a>    
#### FindElementByAndroidUIAutomator(selector)

Search for an element using UIAutomator selector.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |	 |





<a name="see.also.appiumdriver.findelementbyandroiduiautomator"></a>

<a name="FindElementByClassName"></a>    
#### FindElementByClassName(className)

Finds the first element in the page that matches the CSS Class supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| className | string |	CSS class name of the element. |





<a name="see.also.appiumdriver.findelementbyclassname"></a>

<a name="FindElementByCssSelector"></a>    
#### FindElementByCssSelector(cssSelector)

Finds the first element matching the specified CSS selector.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cssSelector | string |	The CSS selector to match. |





<a name="see.also.appiumdriver.findelementbycssselector"></a>

<a name="FindElementById"></a>    
#### FindElementById(id)

Finds the first element in the page that matches the ID supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| id | string |	ID of the element. |





<a name="see.also.appiumdriver.findelementbyid"></a>

<a name="FindElementByIosUIAutomation"></a>    
#### FindElementByIosUIAutomation(selector)

Search for an element using UIAutomation selector.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |	 |





<a name="see.also.appiumdriver.findelementbyiosuiautomation"></a>

<a name="FindElementByLinkText"></a>    
#### FindElementByLinkText(linkText)

Finds the first of elements that match the link text supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| linkText | string |	Link text of element. |





<a name="see.also.appiumdriver.findelementbylinktext"></a>

<a name="FindElementByName"></a>    
#### FindElementByName(name)

Finds the first of elements that match the name supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of the element on the page. |





<a name="see.also.appiumdriver.findelementbyname"></a>

<a name="FindElementByPartialLinkText"></a>    
#### FindElementByPartialLinkText(partialLinkText)

Finds the first of elements that match the part of the link text supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| partialLinkText | string |	Part of the link text. |





<a name="see.also.appiumdriver.findelementbypartiallinktext"></a>

<a name="FindElementByTagName"></a>    
#### FindElementByTagName(tagName)

Finds the first of elements that match the DOM Tag supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tagName | string |	DOM tag Name of the element being searched. |





<a name="see.also.appiumdriver.findelementbytagname"></a>

<a name="FindElementByXPath"></a>    
#### FindElementByXPath(xpath)

Finds the first of elements that match the XPath supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |	xpath to the element. |





<a name="see.also.appiumdriver.findelementbyxpath"></a>

<a name="FindElementsByAccessibilityId"></a>    
#### FindElementsByAccessibilityId(selector)

Search for all elements matching Accessibility ID.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |	 |





<a name="see.also.appiumdriver.findelementsbyaccessibilityid"></a>

<a name="FindElementsByAndroidUIAutomator"></a>    
#### FindElementsByAndroidUIAutomator(selector)

Search for all elements using UIAutomator selector.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |	 |





<a name="see.also.appiumdriver.findelementsbyandroiduiautomator"></a>

<a name="FindElementsByClassName"></a>    
#### FindElementsByClassName(className)

Finds a list of elements that match the class name supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| className | string |	class name of the element. |





<a name="see.also.appiumdriver.findelementsbyclassname"></a>

<a name="FindElementsByCssSelector"></a>    
#### FindElementsByCssSelector(cssSelector)

Finds all elements matching the specified CSS selector.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cssSelector | string |	The CSS selector to match. |





<a name="see.also.appiumdriver.findelementsbycssselector"></a>

<a name="FindElementsById"></a>    
#### FindElementsById(id)

Finds the first element in the page that matches the ID supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| id | string |	ID of the element. |





<a name="see.also.appiumdriver.findelementsbyid"></a>

<a name="FindElementsByIosUIAutomation"></a>    
#### FindElementsByIosUIAutomation(selector)

Search for all elements using UIAutomation selector.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |	 |





<a name="see.also.appiumdriver.findelementsbyiosuiautomation"></a>

<a name="FindElementsByLinkText"></a>    
#### FindElementsByLinkText(linkText)

Finds a list of elements that match the link text supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| linkText | string |	Link text of element. |





<a name="see.also.appiumdriver.findelementsbylinktext"></a>

<a name="FindElementsByName"></a>    
#### FindElementsByName(name)

Finds a list of elements that match the name supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of the element on the page. |





<a name="see.also.appiumdriver.findelementsbyname"></a>

<a name="FindElementsByPartialLinkText"></a>    
#### FindElementsByPartialLinkText(partialLinkText)

Finds a list of elements that match the part of the link text supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| partialLinkText | string |	Part of the link text. |





<a name="see.also.appiumdriver.findelementsbypartiallinktext"></a>

<a name="FindElementsByTagName"></a>    
#### FindElementsByTagName(tagName)

Finds a list of elements that match the DOM Tag supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tagName | string |	DOM tag Name of the element being searched. |





<a name="see.also.appiumdriver.findelementsbytagname"></a>

<a name="FindElementsByXPath"></a>    
#### FindElementsByXPath(xpath)

Finds a list of elements that match the XPath supplied.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |	xpath to the element. |





<a name="see.also.appiumdriver.findelementsbyxpath"></a>

<a name="GetAddressOfRemoteServer"></a>    
#### GetAddressOfRemoteServer()






**Returns:**

URL of the remote Appium server.



<a name="see.also.appiumdriver.getaddressofremoteserver"></a>

<a name="GetContext"></a>    
#### GetContext()






**Returns:**

Current context (NATIVE_APP or WEBVIEW_*).



<a name="see.also.appiumdriver.getcontext"></a>

<a name="GetContexts"></a>    
#### GetContexts()






**Returns:**

Array of available contexts for a hybrid application.



<a name="see.also.appiumdriver.getcontexts"></a>

<a name="GetCurrentActivity"></a>    
#### GetCurrentActivity()







<a name="see.also.appiumdriver.getcurrentactivity"></a>

<a name="GetCurrentWindowHandle"></a>    
#### GetCurrentWindowHandle()

Gets the current window handle, which is an opaque handle to this window that uniquely identifies it within this driver instance.





<a name="see.also.appiumdriver.getcurrentwindowhandle"></a>

<a name="GetIMEActiveEngine"></a>    
#### GetIMEActiveEngine()






**Returns:**

Currently active IME Engine on the device.



<a name="see.also.appiumdriver.getimeactiveengine"></a>

<a name="GetIMEAvailableEngines"></a>    
#### GetIMEAvailableEngines()






**Returns:**

A list of IME engines available on the device.



<a name="see.also.appiumdriver.getimeavailableengines"></a>

<a name="GetOrientation"></a>    
#### GetOrientation()






**Returns:**

Orientation of the device (0 - portrait, 1 - landscape).



<a name="see.also.appiumdriver.getorientation"></a>

<a name="GetPageSource"></a>    
#### GetPageSource()

Gets the source of the page last loaded by the browser.





<a name="see.also.appiumdriver.getpagesource"></a>

<a name="GetSessionId"></a>    
#### GetSessionId()






**Returns:**

Id of the current session.



<a name="see.also.appiumdriver.getsessionid"></a>

<a name="GetTitle"></a>    
#### GetTitle()

Gets the title of the current browser window.





<a name="see.also.appiumdriver.gettitle"></a>

<a name="GetUrl"></a>    
#### GetUrl()

Gets the URL the browser is currently displaying.





<a name="see.also.appiumdriver.geturl"></a>

<a name="GetWindowHandles"></a>    
#### GetWindowHandles()

Gets the window handles of open browser windows.





<a name="see.also.appiumdriver.getwindowhandles"></a>

<a name="HideKeyboard"></a>    
#### HideKeyboard(key, key)




**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| key |  |	 |
| key |  |	 |





<a name="see.also.appiumdriver.hidekeyboard"></a>

<a name="IgnoreUnimportantViews"></a>    
#### IgnoreUnimportantViews(value)




**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value |  |	 |





<a name="see.also.appiumdriver.ignoreunimportantviews"></a>

<a name="InstallApp"></a>    
#### InstallApp(appPath)




**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| appPath |  |	 |





<a name="see.also.appiumdriver.installapp"></a>

<a name="IsAppInstalled"></a>    
#### IsAppInstalled(bundleId)




**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bundleId |  |	 |





<a name="see.also.appiumdriver.isappinstalled"></a>

<a name="IsIMEActive"></a>    
#### IsIMEActive()







<a name="see.also.appiumdriver.isimeactive"></a>

<a name="IsLocked"></a>    
#### IsLocked()







<a name="see.also.appiumdriver.islocked"></a>

<a name="LaunchApp"></a>    
#### LaunchApp()







<a name="see.also.appiumdriver.launchapp"></a>

<a name="OpenNotifications"></a>    
#### OpenNotifications()







<a name="see.also.appiumdriver.opennotifications"></a>

<a name="PressKeyCode"></a>    
#### PressKeyCode(keyCode)




**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| keyCode |  |	 |





<a name="see.also.appiumdriver.presskeycode"></a>

<a name="PullFile"></a>    
#### PullFile(pathOnDevice)




**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| pathOnDevice |  |	 |





<a name="see.also.appiumdriver.pullfile"></a>

<a name="PushFile"></a>    
#### PushFile(base64Data, base64Data)




**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| base64Data |  |	 |
| base64Data |  |	 |





<a name="see.also.appiumdriver.pushfile"></a>

<a name="Quit"></a>    
#### Quit()

Disconnects from the Browser.





<a name="see.also.appiumdriver.quit"></a>

<a name="ReconnectSession"></a>    
#### ReconnectSession(autoCreate)

Reads session information produced by SaveSession and connects to the mobile target.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| autoCreate | boolean |	'true' to automatically create a new session if there is no saved session or saved session is not available anymore.<br>Optional, Default: false. |





<a name="see.also.appiumdriver.reconnectsession"></a>

<a name="RemoveApp"></a>    
#### RemoveApp(appId)




**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| appId |  |	 |





<a name="see.also.appiumdriver.removeapp"></a>

<a name="ResetApp"></a>    
#### ResetApp()







<a name="see.also.appiumdriver.resetapp"></a>

<a name="SaveSession"></a>    
#### SaveSession()

Saves session information for use by ReconnectSession.





<a name="see.also.appiumdriver.savesession"></a>

<a name="SetContext"></a>    
#### SetContext(name)

Sets current context.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	 |





<a name="see.also.appiumdriver.setcontext"></a>

<a name="SetOrientation"></a>    
#### SetOrientation(orientation)

Sets device orienataion.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| orientation | number |	0 - portrait, 1 - landscape |





<a name="see.also.appiumdriver.setorientation"></a>

<a name="SetUrl"></a>    
#### SetUrl(value)

Sets the URL the browser is currently displaying.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	The URL to display |





<a name="see.also.appiumdriver.seturl"></a>

<a name="ShakeDevice"></a>    
#### ShakeDevice()







<a name="see.also.appiumdriver.shakedevice"></a>

<a name="StartActivity"></a>    
#### StartActivity(appActivity, appWaitPackage, appWaitActivity, appWaitActivity)




**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| appActivity |  |	 |
| appWaitPackage |  |	 |
| appWaitActivity |  |	 |
| appWaitActivity |  |	 |





<a name="see.also.appiumdriver.startactivity"></a>

<a name="ToggleAirplaneMode"></a>    
#### ToggleAirplaneMode()







<a name="see.also.appiumdriver.toggleairplanemode"></a>

<a name="ToggleLocationServices"></a>    
#### ToggleLocationServices()







<a name="see.also.appiumdriver.togglelocationservices"></a>

<a name="ToggleWifi"></a>    
#### ToggleWifi()







<a name="see.also.appiumdriver.togglewifi"></a>

	

