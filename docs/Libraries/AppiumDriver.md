Summary: This is a JavaScript wrapper for AppiumDriver of AppiumDotNet library.

# AppiumDriver

This is a JavaScript wrapper for AppiumDriver of AppiumDotNet library.
<br>https://github.com/appium/appium-dotnet-driver






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [Actions](#actions) | Gets Actions object. |
|  [ActivateApp](#activateapp) | Activates an application by it's ID. |
|  [ActivateIMEEngine](#activateimeengine) | Activate the given IME on the device. |
|  [BackgroundApp](#backgroundapp) | Send the currently active app to the background, and either return after a certain amount of time, or leave the app deactivated. |
|  [ClearSavedSession](#clearsavedsession) | Clears saved Appium session to start a new one. |
|  [ClearSessions](#clearsessions) | Deletes active sessions on Appium server. |
|  [Close](#close) | Close the Browser and Dispose of WebDriver. |
|  [CloseApp](#closeapp) | Close the application. |
|  [CreateAppiumDriver](#createappiumdriver) | Connects to a mobile target using given Appium uri and capabilities. |
|  [CreateDesiredCapabilities](#createdesiredcapabilities) |  |
|  [CreateDriverForSession](#createdriverforsession) | Connects to active Appium session with given URL and Id. |
|  [CreatePointerInput](#createpointerinput) | Gets PointerInputDevice object. |
|  [DeactiveIMEEngine](#deactiveimeengine) | Deactivate the currently Active IME Engine on the device. |
|  [Dispose](#dispose) | Dispose of WebDriver. |
|  [DoScreenshot](#doscreenshot) | Makes screenshot of a device. |
|  [DoSendKeys](#dosendkeys) | Sends keys to an active element. |
|  [DumpSessions](#dumpsessions) | Prints information about active Appium sessions to output. |
|  [ExecuteScript](#executescript) | Executes JavaScript in the context of the currently selected frame or window. |
|  [FindElementByAccessibilityId](#findelementbyaccessibilityid) | Search for an element using Accessibility ID. |
|  [FindElementByAndroidUIAutomator](#findelementbyandroiduiautomator) | Search for an element using UIAutomator selector. |
|  [FindElementByClassName](#findelementbyclassname) | Finds the first element in the page that matches the CSS Class supplied. |
|  [FindElementByCssSelector](#findelementbycssselector) | Finds the first element matching the specified CSS selector. |
|  [FindElementById](#findelementbyid) | Finds the first element in the page that matches the ID supplied. |
|  [FindElementByIosUIAutomation](#findelementbyiosuiautomation) | Search for an element using UIAutomation selector. |
|  [FindElementByLinkText](#findelementbylinktext) | Finds the first of elements that match the link text supplied. |
|  [FindElementByName](#findelementbyname) | Finds the first of elements that match the name supplied. |
|  [FindElementByPartialLinkText](#findelementbypartiallinktext) | Finds the first of elements that match the part of the link text supplied. |
|  [FindElementByTagName](#findelementbytagname) | Finds the first of elements that match the DOM Tag supplied. |
|  [FindElementByXPath](#findelementbyxpath) | Finds the first of elements that match the XPath supplied. |
|  [FindElementsByAccessibilityId](#findelementsbyaccessibilityid) | Search for all elements matching Accessibility ID. |
|  [FindElementsByAndroidUIAutomator](#findelementsbyandroiduiautomator) | Search for all elements using UIAutomator selector. |
|  [FindElementsByClassName](#findelementsbyclassname) | Finds a list of elements that match the class name supplied. |
|  [FindElementsByCssSelector](#findelementsbycssselector) | Finds all elements matching the specified CSS selector. |
|  [FindElementsById](#findelementsbyid) | Finds the first element in the page that matches the ID supplied. |
|  [FindElementsByIosUIAutomation](#findelementsbyiosuiautomation) | Search for all elements using UIAutomation selector. |
|  [FindElementsByLinkText](#findelementsbylinktext) | Finds a list of elements that match the link text supplied. |
|  [FindElementsByName](#findelementsbyname) | Finds a list of elements that match the name supplied. |
|  [FindElementsByPartialLinkText](#findelementsbypartiallinktext) | Finds a list of elements that match the part of the link text supplied. |
|  [FindElementsByTagName](#findelementsbytagname) | Finds a list of elements that match the DOM Tag supplied. |
|  [FindElementsByXPath](#findelementsbyxpath) | Finds a list of elements that match the XPath supplied. |
|  [GetAddressOfRemoteServer](#getaddressofremoteserver) |  |
|  [GetContext](#getcontext) |  |
|  [GetContexts](#getcontexts) |  |
|  [GetCurrentActivity](#getcurrentactivity) |  |
|  [GetCurrentWindowHandle](#getcurrentwindowhandle) | Gets the current window handle, which is an opaque handle to this window that uniquely identifies it within this driver instance. |
|  [GetIMEActiveEngine](#getimeactiveengine) |  |
|  [GetIMEAvailableEngines](#getimeavailableengines) |  |
|  [GetOrientation](#getorientation) |  |
|  [GetPageSource](#getpagesource) | Gets the source of the page last loaded by the browser. |
|  [GetSessionId](#getsessionid) |  |
|  [GetTitle](#gettitle) | Gets the title of the current browser window. |
|  [GetUrl](#geturl) | Gets the URL the browser is currently displaying. |
|  [GetWindowHandles](#getwindowhandles) | Gets the window handles of open browser windows. |
|  [HideKeyboard](#hidekeyboard) | Hide soft keyboard |
|  [IgnoreUnimportantViews](#ignoreunimportantviews) | This capability can speed up test execution, since Accessibility commands will run faster ignoring some elements. |
|  [InstallApp](#installapp) | Install the given app onto the device. |
|  [IsAppInstalled](#isappinstalled) | Check whether the specified app is installed on the device. |
|  [IsIMEActive](#isimeactive) | Check if IME is active. |
|  [IsLocked](#islocked) | Check whether the device is locked or not |
|  [LaunchApp](#launchapp) | Launch the app-under-test on the device |
|  [OpenNotifications](#opennotifications) | Open Android notifications (Emulator only) |
|  [PerformActions](#performactions) | Performs W3C actions. |
|  [PressKeyCode](#presskeycode) | Press a particular key on Device |
|  [PullFile](#pullfile) | Retrieve a file from the device's file system. |
|  [PushFile](#pushfile) | Place a file onto the device in a particular place. |
|  [Quit](#quit) | Disconnects from the Browser. |
|  [ReconnectSession](#reconnectsession) | Reads session information produced by SaveSession and connects to the mobile target. |
|  [RemoveApp](#removeapp) | Remove an app from the device |
|  [ResetApp](#resetapp) | Reset the currently running app for this session |
|  [SaveSession](#savesession) | Saves session information for use by ReconnectSession. |
|  [SeSFind](#sesfind) | Finds an element given it's locator string. |
|  [SetContext](#setcontext) | Sets current context. |
|  [SetOrientation](#setorientation) | Sets device orienataion. |
|  [SetUrl](#seturl) | Sets the URL the browser is currently displaying. |
|  [ShakeDevice](#shakedevice) | Perform a shake action on the device |
|  [StartActivity](#startactivity) | Start an Android activity by providing package name and activity name |
|  [StartRecordingScreen](#startrecordingscreen) | Starts video recording on a device. |
|  [StopRecordingScreen](#stoprecordingscreen) | Stops video recording on a device. |
|  [TerminateApp](#terminateapp) | Close the application. |
|  [ToggleAirplaneMode](#toggleairplanemode) | Toggle airplane mode on device |
|  [ToggleLocationServices](#togglelocationservices) | Switch the state of the location service |
|  [ToggleWifi](#togglewifi) | Switch the state of the WiFi service |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="Actions"></a>    
#### Actions

Gets Actions object.

```javascript
AppiumDriver.Actions()
```





<a name="see.also.appiumdriver.actions"></a>

<a name="ActivateApp"></a>    
#### ActivateApp

Activates an application by it's ID. 
Find iOS default application IDs [here](https://support.apple.com/guide/deployment/bundle-ids-for-native-iphone-and-ipad-apps-depece748c41/web).
For Android application ID is Package Name, e.g. com.android.chrome.

```javascript
AppiumDriver.ActivateApp(appId)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| appId | string |  ID of an application to activate. |





<a name="see.also.appiumdriver.activateapp"></a>

<a name="ActivateIMEEngine"></a>    
#### ActivateIMEEngine

Activate the given IME on the device.

```javascript
AppiumDriver.ActivateIMEEngine(imeEngine)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| imeEngine | string |  IME to activate |





<a name="see.also.appiumdriver.activateimeengine"></a>

<a name="BackgroundApp"></a>    
#### BackgroundApp

Send the currently active app to the background, and either return after a certain amount of time, or leave the app deactivated.

```javascript
AppiumDriver.BackgroundApp(seconds)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| seconds | number |  Timeout value |





<a name="see.also.appiumdriver.backgroundapp"></a>

<a name="ClearSavedSession"></a>    
#### ClearSavedSession

Clears saved Appium session to start a new one. Requires Rapise 8.0+.

```javascript
AppiumDriver.ClearSavedSession()
```





<a name="see.also.appiumdriver.clearsavedsession"></a>

<a name="ClearSessions"></a>    
#### ClearSessions

Deletes active sessions on Appium server.

```javascript
AppiumDriver.ClearSessions()
```





<a name="see.also.appiumdriver.clearsessions"></a>

<a name="Close"></a>    
#### Close

Close the Browser and Dispose of WebDriver.

```javascript
AppiumDriver.Close()
```





<a name="see.also.appiumdriver.close"></a>

<a name="CloseApp"></a>    
#### CloseApp

Close the application.

```javascript
AppiumDriver.CloseApp()
```





<a name="see.also.appiumdriver.closeapp"></a>

<a name="CreateAppiumDriver"></a>    
#### CreateAppiumDriver

Connects to a mobile target using given Appium uri and capabilities.

```javascript
AppiumDriver.CreateAppiumDriver(uri, caps)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| uri | string |  Appium server URL. |
| caps | AppiumCapabilities |  DesiredCapabilities object with key/value pairs. |




**Returns:**

Driver object.



<a name="see.also.appiumdriver.createappiumdriver"></a>

<a name="CreateDesiredCapabilities"></a>    
#### CreateDesiredCapabilities



```javascript
AppiumDriver.CreateDesiredCapabilities()
```




**Returns:**

AppiumCapabilities object.



<a name="see.also.appiumdriver.createdesiredcapabilities"></a>

<a name="CreateDriverForSession"></a>    
#### CreateDriverForSession

Connects to active Appium session with given URL and Id.

```javascript
AppiumDriver.CreateDriverForSession(addressOfRemoteServer, sessionId, suppressErrors)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| addressOfRemoteServer | string |  Appium server URL. |
| sessionId | string |  Id of the session to connect. |
| suppressErrors | boolean |  'true' to suppress failures in the report, default 'false'.<br>Optional, Default: "false". |




**Returns:**

true if successful, false otherwise.



<a name="see.also.appiumdriver.createdriverforsession"></a>

<a name="CreatePointerInput"></a>    
#### CreatePointerInput

Gets PointerInputDevice object. Requires Rapise 8.2+.
			 
```javascript
var element = AppiumDriver.FindElementByXPath("//*[@text='Login']");
var p = AppiumDriver.CreatePointerInput("Touch", "finger");
var sequence = p.CreateActionSequence(p);
var move = p.CreatePointerMoveElement(element, 0, 0, 0);
var actionPress = p.CreatePointerDown("Touch");
var pause = p.CreatePause(50);
var actionRelease = p.CreatePointerUp("Touch");

sequence.AddAction(move);
sequence.AddAction(actionPress);
sequence.AddAction(pause);
sequence.AddAction(actionRelease);

AppiumDriver.PerformActions(sequence);
```

```javascript
AppiumDriver.CreatePointerInput(kind, name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| kind | string |  Touch, Mouse or Pen. |
| name | string |  Name of the pointer device. Whatever you like. |





<a name="see.also.appiumdriver.createpointerinput"></a>

<a name="DeactiveIMEEngine"></a>    
#### DeactiveIMEEngine

Deactivate the currently Active IME Engine on the device.

```javascript
AppiumDriver.DeactiveIMEEngine()
```





<a name="see.also.appiumdriver.deactiveimeengine"></a>

<a name="Dispose"></a>    
#### Dispose

Dispose of WebDriver.

```javascript
AppiumDriver.Dispose()
```





<a name="see.also.appiumdriver.dispose"></a>

<a name="DoScreenshot"></a>    
#### DoScreenshot

Makes screenshot of a device.

```javascript
AppiumDriver.DoScreenshot(txtLabel)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| txtLabel | string |  Label of a screenshot in the report.<br>Optional. |




**Returns:**

'true' if successful, 'false' otherwise.



<a name="see.also.appiumdriver.doscreenshot"></a>

<a name="DoSendKeys"></a>    
#### DoSendKeys

Sends keys to an active element. Requires Rapise 8.1+.

```javascript
AppiumDriver.DoSendKeys(txt)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| txt | string |  Keys to send. Supports patterns like in [Global.DoSendKeys](Global.md#dosendkeys). |





<a name="see.also.appiumdriver.dosendkeys"></a>

<a name="DumpSessions"></a>    
#### DumpSessions

Prints information about active Appium sessions to output.

```javascript
AppiumDriver.DumpSessions()
```





<a name="see.also.appiumdriver.dumpsessions"></a>

<a name="ExecuteScript"></a>    
#### ExecuteScript

Executes JavaScript in the context of the currently selected frame or window.

```javascript
AppiumDriver.ExecuteScript(script, args)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| script | string |  The JavaScript code to execute. |
| args | array |  The arguments to the script. |





<a name="see.also.appiumdriver.executescript"></a>

<a name="FindElementByAccessibilityId"></a>    
#### FindElementByAccessibilityId

Search for an element using Accessibility ID.

```javascript
AppiumDriver.FindElementByAccessibilityId(selector)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |  Element selector |





<a name="see.also.appiumdriver.findelementbyaccessibilityid"></a>

<a name="FindElementByAndroidUIAutomator"></a>    
#### FindElementByAndroidUIAutomator

Search for an element using UIAutomator selector.

```javascript
AppiumDriver.FindElementByAndroidUIAutomator(selector)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |  Element selector |





<a name="see.also.appiumdriver.findelementbyandroiduiautomator"></a>

<a name="FindElementByClassName"></a>    
#### FindElementByClassName

Finds the first element in the page that matches the CSS Class supplied.

```javascript
AppiumDriver.FindElementByClassName(className)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| className | string |  CSS class name of the element. |





<a name="see.also.appiumdriver.findelementbyclassname"></a>

<a name="FindElementByCssSelector"></a>    
#### FindElementByCssSelector

Finds the first element matching the specified CSS selector.

```javascript
AppiumDriver.FindElementByCssSelector(cssSelector)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cssSelector | string |  The CSS selector to match. |





<a name="see.also.appiumdriver.findelementbycssselector"></a>

<a name="FindElementById"></a>    
#### FindElementById

Finds the first element in the page that matches the ID supplied.

```javascript
AppiumDriver.FindElementById(id)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| id | string |  ID of the element. |





<a name="see.also.appiumdriver.findelementbyid"></a>

<a name="FindElementByIosUIAutomation"></a>    
#### FindElementByIosUIAutomation

Search for an element using UIAutomation selector.

```javascript
AppiumDriver.FindElementByIosUIAutomation(selector)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |  Element selector |





<a name="see.also.appiumdriver.findelementbyiosuiautomation"></a>

<a name="FindElementByLinkText"></a>    
#### FindElementByLinkText

Finds the first of elements that match the link text supplied.

```javascript
AppiumDriver.FindElementByLinkText(linkText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| linkText | string |  Link text of element. |





<a name="see.also.appiumdriver.findelementbylinktext"></a>

<a name="FindElementByName"></a>    
#### FindElementByName

Finds the first of elements that match the name supplied.

```javascript
AppiumDriver.FindElementByName(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Name of the element on the page. |





<a name="see.also.appiumdriver.findelementbyname"></a>

<a name="FindElementByPartialLinkText"></a>    
#### FindElementByPartialLinkText

Finds the first of elements that match the part of the link text supplied.

```javascript
AppiumDriver.FindElementByPartialLinkText(partialLinkText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| partialLinkText | string |  Part of the link text. |





<a name="see.also.appiumdriver.findelementbypartiallinktext"></a>

<a name="FindElementByTagName"></a>    
#### FindElementByTagName

Finds the first of elements that match the DOM Tag supplied.

```javascript
AppiumDriver.FindElementByTagName(tagName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tagName | string |  DOM tag Name of the element being searched. |





<a name="see.also.appiumdriver.findelementbytagname"></a>

<a name="FindElementByXPath"></a>    
#### FindElementByXPath

Finds the first of elements that match the XPath supplied.

```javascript
AppiumDriver.FindElementByXPath(xpath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |  xpath to the element. |





<a name="see.also.appiumdriver.findelementbyxpath"></a>

<a name="FindElementsByAccessibilityId"></a>    
#### FindElementsByAccessibilityId

Search for all elements matching Accessibility ID.

```javascript
AppiumDriver.FindElementsByAccessibilityId(selector)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |  Element selector |





<a name="see.also.appiumdriver.findelementsbyaccessibilityid"></a>

<a name="FindElementsByAndroidUIAutomator"></a>    
#### FindElementsByAndroidUIAutomator

Search for all elements using UIAutomator selector.

```javascript
AppiumDriver.FindElementsByAndroidUIAutomator(selector)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |  Element selector |





<a name="see.also.appiumdriver.findelementsbyandroiduiautomator"></a>

<a name="FindElementsByClassName"></a>    
#### FindElementsByClassName

Finds a list of elements that match the class name supplied.

```javascript
AppiumDriver.FindElementsByClassName(className)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| className | string |  class name of the element. |





<a name="see.also.appiumdriver.findelementsbyclassname"></a>

<a name="FindElementsByCssSelector"></a>    
#### FindElementsByCssSelector

Finds all elements matching the specified CSS selector.

```javascript
AppiumDriver.FindElementsByCssSelector(cssSelector)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cssSelector | string |  The CSS selector to match. |





<a name="see.also.appiumdriver.findelementsbycssselector"></a>

<a name="FindElementsById"></a>    
#### FindElementsById

Finds the first element in the page that matches the ID supplied.

```javascript
AppiumDriver.FindElementsById(id)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| id | string |  ID of the element. |





<a name="see.also.appiumdriver.findelementsbyid"></a>

<a name="FindElementsByIosUIAutomation"></a>    
#### FindElementsByIosUIAutomation

Search for all elements using UIAutomation selector.

```javascript
AppiumDriver.FindElementsByIosUIAutomation(selector)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |  Element selector |





<a name="see.also.appiumdriver.findelementsbyiosuiautomation"></a>

<a name="FindElementsByLinkText"></a>    
#### FindElementsByLinkText

Finds a list of elements that match the link text supplied.

```javascript
AppiumDriver.FindElementsByLinkText(linkText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| linkText | string |  Link text of element. |





<a name="see.also.appiumdriver.findelementsbylinktext"></a>

<a name="FindElementsByName"></a>    
#### FindElementsByName

Finds a list of elements that match the name supplied.

```javascript
AppiumDriver.FindElementsByName(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Name of the element on the page. |





<a name="see.also.appiumdriver.findelementsbyname"></a>

<a name="FindElementsByPartialLinkText"></a>    
#### FindElementsByPartialLinkText

Finds a list of elements that match the part of the link text supplied.

```javascript
AppiumDriver.FindElementsByPartialLinkText(partialLinkText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| partialLinkText | string |  Part of the link text. |





<a name="see.also.appiumdriver.findelementsbypartiallinktext"></a>

<a name="FindElementsByTagName"></a>    
#### FindElementsByTagName

Finds a list of elements that match the DOM Tag supplied.

```javascript
AppiumDriver.FindElementsByTagName(tagName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tagName | string |  DOM tag Name of the element being searched. |





<a name="see.also.appiumdriver.findelementsbytagname"></a>

<a name="FindElementsByXPath"></a>    
#### FindElementsByXPath

Finds a list of elements that match the XPath supplied.

```javascript
AppiumDriver.FindElementsByXPath(xpath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |  xpath to the element. |





<a name="see.also.appiumdriver.findelementsbyxpath"></a>

<a name="GetAddressOfRemoteServer"></a>    
#### GetAddressOfRemoteServer



```javascript
AppiumDriver.GetAddressOfRemoteServer()
```




**Returns:**

URL of the remote Appium server.



<a name="see.also.appiumdriver.getaddressofremoteserver"></a>

<a name="GetContext"></a>    
#### GetContext



```javascript
AppiumDriver.GetContext()
```




**Returns:**

Current context (NATIVE_APP or WEBVIEW_*).



<a name="see.also.appiumdriver.getcontext"></a>

<a name="GetContexts"></a>    
#### GetContexts



```javascript
AppiumDriver.GetContexts()
```




**Returns:**

Array of available contexts for a hybrid application.



<a name="see.also.appiumdriver.getcontexts"></a>

<a name="GetCurrentActivity"></a>    
#### GetCurrentActivity



```javascript
AppiumDriver.GetCurrentActivity()
```





<a name="see.also.appiumdriver.getcurrentactivity"></a>

<a name="GetCurrentWindowHandle"></a>    
#### GetCurrentWindowHandle

Gets the current window handle, which is an opaque handle to this window that uniquely identifies it within this driver instance.

```javascript
AppiumDriver.GetCurrentWindowHandle()
```





<a name="see.also.appiumdriver.getcurrentwindowhandle"></a>

<a name="GetIMEActiveEngine"></a>    
#### GetIMEActiveEngine



```javascript
AppiumDriver.GetIMEActiveEngine()
```




**Returns:**

Currently active IME Engine on the device.



<a name="see.also.appiumdriver.getimeactiveengine"></a>

<a name="GetIMEAvailableEngines"></a>    
#### GetIMEAvailableEngines



```javascript
AppiumDriver.GetIMEAvailableEngines()
```




**Returns:**

A list of IME engines available on the device.



<a name="see.also.appiumdriver.getimeavailableengines"></a>

<a name="GetOrientation"></a>    
#### GetOrientation



```javascript
AppiumDriver.GetOrientation()
```




**Returns:**

Orientation of the device (0 - portrait, 1 - landscape).



<a name="see.also.appiumdriver.getorientation"></a>

<a name="GetPageSource"></a>    
#### GetPageSource

Gets the source of the page last loaded by the browser.

```javascript
AppiumDriver.GetPageSource()
```





<a name="see.also.appiumdriver.getpagesource"></a>

<a name="GetSessionId"></a>    
#### GetSessionId



```javascript
AppiumDriver.GetSessionId()
```




**Returns:**

Id of the current session.



<a name="see.also.appiumdriver.getsessionid"></a>

<a name="GetTitle"></a>    
#### GetTitle

Gets the title of the current browser window.

```javascript
AppiumDriver.GetTitle()
```





<a name="see.also.appiumdriver.gettitle"></a>

<a name="GetUrl"></a>    
#### GetUrl

Gets the URL the browser is currently displaying.

```javascript
AppiumDriver.GetUrl()
```





<a name="see.also.appiumdriver.geturl"></a>

<a name="GetWindowHandles"></a>    
#### GetWindowHandles

Gets the window handles of open browser windows.

```javascript
AppiumDriver.GetWindowHandles()
```





<a name="see.also.appiumdriver.getwindowhandles"></a>

<a name="HideKeyboard"></a>    
#### HideKeyboard

Hide soft keyboard

```javascript
AppiumDriver.HideKeyboard(strategy, key)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| strategy | string |  Hide keyboard strategy (optional, UIAutomation only). Available strategies - 'press', 'pressKey', 'swipeDown', 'tapOut', 'tapOutside', 'default'. |
| key | string |  Key<br>Optional. |





<a name="see.also.appiumdriver.hidekeyboard"></a>

<a name="IgnoreUnimportantViews"></a>    
#### IgnoreUnimportantViews

This capability can speed up test execution, since Accessibility commands will run faster ignoring some elements. The ignored elements will not be findable.

```javascript
AppiumDriver.IgnoreUnimportantViews(value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | bool |  `true` to ignore. |





<a name="see.also.appiumdriver.ignoreunimportantviews"></a>

<a name="InstallApp"></a>    
#### InstallApp

Install the given app onto the device.

```javascript
AppiumDriver.InstallApp(appPath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| appPath | string |  Path of the app being installed |





<a name="see.also.appiumdriver.installapp"></a>

<a name="IsAppInstalled"></a>    
#### IsAppInstalled

Check whether the specified app is installed on the device.

```javascript
AppiumDriver.IsAppInstalled(bundleId)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bundleId | string |  iOS bundleID or Android package name |





<a name="see.also.appiumdriver.isappinstalled"></a>

<a name="IsIMEActive"></a>    
#### IsIMEActive

Check if IME is active.

```javascript
AppiumDriver.IsIMEActive()
```





<a name="see.also.appiumdriver.isimeactive"></a>

<a name="IsLocked"></a>    
#### IsLocked

Check whether the device is locked or not

```javascript
AppiumDriver.IsLocked()
```





<a name="see.also.appiumdriver.islocked"></a>

<a name="LaunchApp"></a>    
#### LaunchApp

Launch the app-under-test on the device

```javascript
AppiumDriver.LaunchApp()
```





<a name="see.also.appiumdriver.launchapp"></a>

<a name="OpenNotifications"></a>    
#### OpenNotifications

Open Android notifications (Emulator only)

```javascript
AppiumDriver.OpenNotifications()
```





<a name="see.also.appiumdriver.opennotifications"></a>

<a name="PerformActions"></a>    
#### PerformActions

Performs W3C actions. Requires Rapise 8.2+. See [CreatePointerInput](#createpointerinput) for usage example.

```javascript
AppiumDriver.PerformActions(sequence)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| sequence | ActionSequence |  Array of ActionSequence objects. |





<a name="see.also.appiumdriver.performactions"></a>

<a name="PressKeyCode"></a>    
#### PressKeyCode

Press a particular key on Device

```javascript
AppiumDriver.PressKeyCode(keyCode)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| keyCode | number |  Key code pressed on the device. |





<a name="see.also.appiumdriver.presskeycode"></a>

<a name="PullFile"></a>    
#### PullFile

Retrieve a file from the device's file system.

```javascript
AppiumDriver.PullFile(pathOnDevice)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| pathOnDevice | string |  Path on the device to pull file from |





<a name="see.also.appiumdriver.pullfile"></a>

<a name="PushFile"></a>    
#### PushFile

Place a file onto the device in a particular place.

```javascript
AppiumDriver.PushFile(pathOnDevice, base64Data)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| pathOnDevice | string |  Path to install the data to. |
| base64Data | string |  Contents of file in base64. |





<a name="see.also.appiumdriver.pushfile"></a>

<a name="Quit"></a>    
#### Quit

Disconnects from the Browser.

```javascript
AppiumDriver.Quit()
```





<a name="see.also.appiumdriver.quit"></a>

<a name="ReconnectSession"></a>    
#### ReconnectSession

Reads session information produced by SaveSession and connects to the mobile target.

```javascript
AppiumDriver.ReconnectSession(autoCreate)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| autoCreate | boolean |  'true' to automatically create a new session if there is no saved session or saved session is not available anymore.<br>Optional, Default: "false". |





<a name="see.also.appiumdriver.reconnectsession"></a>

<a name="RemoveApp"></a>    
#### RemoveApp

Remove an app from the device

```javascript
AppiumDriver.RemoveApp(appId)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| appId | string |  The iOS App ID |





<a name="see.also.appiumdriver.removeapp"></a>

<a name="ResetApp"></a>    
#### ResetApp

Reset the currently running app for this session

```javascript
AppiumDriver.ResetApp()
```





<a name="see.also.appiumdriver.resetapp"></a>

<a name="SaveSession"></a>    
#### SaveSession

Saves session information for use by ReconnectSession.

```javascript
AppiumDriver.SaveSession()
```





<a name="see.also.appiumdriver.savesession"></a>

<a name="SeSFind"></a>    
#### SeSFind

Finds an element given it's locator string. Requires Rapise 8.1+.

```javascript
AppiumDriver.SeSFind(selector, objectType, selectorType, objectName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| selector | string |  Selector query, format depends on a selector type. |
| objectType | string |  Type of an object: android, ios or web. Possible values: "android", "ios", "web"<br>Optional, Default: "web". |
| selectorType | string |  Type of a selector: acc, css, id, ios, xpath. Possible values: "acc", "css", "id", "ios", "xpath"<br>Optional, Default: "xpath". |
| objectName | string |  Name to assign to the found object. Used in the report.<br>Optional. |





<a name="see.also.appiumdriver.sesfind"></a>

<a name="SetContext"></a>    
#### SetContext

Sets current context.

```javascript
AppiumDriver.SetContext(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  The name of the context to which to change |





<a name="see.also.appiumdriver.setcontext"></a>

<a name="SetOrientation"></a>    
#### SetOrientation

Sets device orienataion.

```javascript
AppiumDriver.SetOrientation(orientation)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| orientation | number |  0 - portrait, 1 - landscape |





<a name="see.also.appiumdriver.setorientation"></a>

<a name="SetUrl"></a>    
#### SetUrl

Sets the URL the browser is currently displaying.

```javascript
AppiumDriver.SetUrl(value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |  The URL to display |





<a name="see.also.appiumdriver.seturl"></a>

<a name="ShakeDevice"></a>    
#### ShakeDevice

Perform a shake action on the device

```javascript
AppiumDriver.ShakeDevice()
```





<a name="see.also.appiumdriver.shakedevice"></a>

<a name="StartActivity"></a>    
#### StartActivity

Start an Android activity by providing package name and activity name

```javascript
AppiumDriver.StartActivity(appPackage, appActivity, appWaitPackage, appWaitActivity)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| appPackage | string |  Name of the package |
| appActivity | string |  Name of the activity |
| appWaitPackage | string |  Automation will begin after this package starts |
| appWaitActivity | string |  appWaitActivity |





<a name="see.also.appiumdriver.startactivity"></a>

<a name="StartRecordingScreen"></a>    
#### StartRecordingScreen

Starts video recording on a device. Requires Rapise 8.0+.

```javascript
AppiumDriver.StartRecordingScreen()
```




**Returns:**

'true' if successful, 'false' otherwise.



<a name="see.also.appiumdriver.startrecordingscreen"></a>

<a name="StopRecordingScreen"></a>    
#### StopRecordingScreen

Stops video recording on a device. Requires Rapise 8.0+.

```javascript
AppiumDriver.StopRecordingScreen()
```




**Returns:**

'true' if successful, 'false' otherwise.



<a name="see.also.appiumdriver.stoprecordingscreen"></a>

<a name="TerminateApp"></a>    
#### TerminateApp

Close the application.

```javascript
AppiumDriver.TerminateApp(appId)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| appId | string |  Application Id |





<a name="see.also.appiumdriver.terminateapp"></a>

<a name="ToggleAirplaneMode"></a>    
#### ToggleAirplaneMode

Toggle airplane mode on device

```javascript
AppiumDriver.ToggleAirplaneMode()
```





<a name="see.also.appiumdriver.toggleairplanemode"></a>

<a name="ToggleLocationServices"></a>    
#### ToggleLocationServices

Switch the state of the location service

```javascript
AppiumDriver.ToggleLocationServices()
```





<a name="see.also.appiumdriver.togglelocationservices"></a>

<a name="ToggleWifi"></a>    
#### ToggleWifi

Switch the state of the WiFi service

```javascript
AppiumDriver.ToggleWifi()
```





<a name="see.also.appiumdriver.togglewifi"></a>

  

