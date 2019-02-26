# Android

Global object. Use it to perform actions not related to a particular object. You do not need torecord or learn this object, it is always automatically available in any test.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoFlick](#DoFlick) | Flick action. |
|	[DoGoToUrl](#DoGoToUrl) | Opens URL in active browser. |
|	[DoPressBack](#DoPressBack) | Presses Back button. |
|	[DoPressHome](#DoPressHome) | Presses Home button. |
|	[DoPressKeyCode](#DoPressKeyCode) | Presses key with code. |
|	[DoPressMenu](#DoPressMenu) | Presses Menu button. |
|	[DoScreenshot](#DoScreenshot) | Makes screenshot of a device. |
|	[DoStartActivity](#DoStartActivity) | Starts activity. |
|	[DoStartVideoRecording](#DoStartVideoRecording) | Starts video recording on a device. |
|	[DoStopVideoRecording](#DoStopVideoRecording) | Stops video recording on a device. |
|	[DoSwipe](#DoSwipe) | Swipe action. |
|	[DoTap](#DoTap) | Tap screen. |
|	[GetCapability](#GetCapability) | Gets capability with specified name. |
|	[GetContext](#GetContext) | Gets current context. |
|	[SetContext](#SetContext) | Sets context. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoFlick"></a>    
#### DoFlick(endX, endY, startX, startY, touchCount)

Flick action.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| endX | number |	x coordinate where swipe ends (in pixels or relative units) |
| endY | number |	y coordinate where swipe ends (in pixels or relative units) |
| startX | number |	x coordinate where swipe begins (in pixels or relative units)<br>Optional. |
| startY | number |	y coordinate where swipe begins (in pixels or relative units)<br>Optional. |
| touchCount | number |	how many fingers to swipe with<br>Optional. |




**Returns:**

'true' if successful, 'false' otherwise.




<a name="DoGoToUrl"></a>    
#### DoGoToUrl(url)

Opens URL in active browser.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |	 |




**Returns:**

'true' if successful, 'false' otherwise.




<a name="DoPressBack"></a>    
#### DoPressBack()

Presses Back button.




**Returns:**

'true' if successful, 'false' otherwise.




<a name="DoPressHome"></a>    
#### DoPressHome()

Presses Home button.




**Returns:**

'true' if successful, 'false' otherwise.




<a name="DoPressKeyCode"></a>    
#### DoPressKeyCode(keyCode)

Presses key with code.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| keyCode | number |	Key code: http://developer.android.com/reference/android/view/KeyEvent.html |




**Returns:**

'true' if successful, 'false' otherwise.




<a name="DoPressMenu"></a>    
#### DoPressMenu()

Presses Menu button.




**Returns:**

'true' if successful, 'false' otherwise.




<a name="DoScreenshot"></a>    
#### DoScreenshot()

Makes screenshot of a device.




**Returns:**

'true' if successful, 'false' otherwise.




<a name="DoStartActivity"></a>    
#### DoStartActivity(appPackage, appActivity)

Starts activity.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| appPackage | string |	Package name. |
| appActivity | string |	Activity name. |




**Returns:**

'true' if successful, 'false' otherwise.




<a name="DoStartVideoRecording"></a>    
#### DoStartVideoRecording()

Starts video recording on a device.




**Returns:**

'true' if successful, 'false' otherwise.




<a name="DoStopVideoRecording"></a>    
#### DoStopVideoRecording()

Stops video recording on a device.




**Returns:**

'true' if successful, 'false' otherwise.




<a name="DoSwipe"></a>    
#### DoSwipe(endX, endY, startX, startY, duration, touchCount)

Swipe action.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| endX | number |	x coordinate where swipe ends (in pixels or relative units) |
| endY | number |	y coordinate where swipe ends (in pixels or relative units) |
| startX | number |	x coordinate where swipe begins (in pixels or relative units)<br>Optional. |
| startY | number |	y coordinate where swipe begins (in pixels or relative units)<br>Optional. |
| duration | number |	time (in seconds) to spend performing the swipe/drag<br>Optional. |
| touchCount | number |	how many fingers to swipe with<br>Optional. |




**Returns:**

'true' if successful, 'false' otherwise.




<a name="DoTap"></a>    
#### DoTap(x, y, duration, tapCount, touchCount)

Tap screen.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	x coordinate to tap (in pixels or relative units)<br>Optional. |
| y | number |	y coordinate to tap (in pixels or relative units)<br>Optional. |
| duration | number |	how long (in seconds) to tap<br>Optional. |
| tapCount | number |	how many times to tap<br>Optional. |
| touchCount | number |	how many fingers to tap with<br>Optional. |




**Returns:**

'true' if successful, 'false' otherwise.




<a name="GetCapability"></a>    
#### GetCapability(name)

Gets capability with specified name.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of a capability. |




**Returns:**

Capability string.




<a name="GetContext"></a>    
#### GetContext()

Gets current context.




**Returns:**

Either NATIVE_APP or WEBVIEW_1.




<a name="SetContext"></a>    
#### SetContext(name)

Sets context.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Either NATIVE_APP or WEBVIEW_1. |






	

