# iOS

Global object. Use it to perform actions not related to a particular object. You do not need torecord or learn this object, it is always automatically available in any test.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoFlick](#DoFlick) | Flick action. |
|	[DoGoToUrl](#DoGoToUrl) | Opens URL in active browser. |
|	[DoScreenshot](#DoScreenshot) | Makes screenshot of a device. |
|	[DoShake](#DoShake) | Shakes device. |
|	[DoSwipe](#DoSwipe) | Swipe action. |
|	[DoTap](#DoTap) | Tap screen. |
|	[GetCapability](#GetCapability) | Gets capability with specified name. |
|	[GetContext](#GetContext) | Gets current context. |
|	[GetDeviceOrientation](#GetDeviceOrientation) | Gets device orientation. |
|	[SetContext](#SetContext) | Sets context. |
|	[SetDeviceOrientation](#SetDeviceOrientation) | Sets device orientation. |




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



<a name="see.also.ios.doflick"></a>

<a name="DoGoToUrl"></a>    
#### DoGoToUrl(url)

Opens URL in active browser.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |	 |




**Returns:**

'true' if successful, 'false' otherwise.



<a name="see.also.ios.dogotourl"></a>

<a name="DoScreenshot"></a>    
#### DoScreenshot()

Makes screenshot of a device.




**Returns:**

'true' if successful, 'false' otherwise.



<a name="see.also.ios.doscreenshot"></a>

<a name="DoShake"></a>    
#### DoShake()

Shakes device.




**Returns:**

'true' if successful, 'false' otherwise.



<a name="see.also.ios.doshake"></a>

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



<a name="see.also.ios.doswipe"></a>

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



<a name="see.also.ios.dotap"></a>

<a name="GetCapability"></a>    
#### GetCapability(name)

Gets capability with specified name.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of a capability. |




**Returns:**

Capability string.



<a name="see.also.ios.getcapability"></a>

<a name="GetContext"></a>    
#### GetContext()

Gets current context.




**Returns:**

Either NATIVE_APP or WEBVIEW_1.



<a name="see.also.ios.getcontext"></a>

<a name="GetDeviceOrientation"></a>    
#### GetDeviceOrientation()

Gets device orientation.




**Returns:**

Device orientation.



<a name="see.also.ios.getdeviceorientation"></a>

<a name="SetContext"></a>    
#### SetContext(name)

Sets context.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Either NATIVE_APP or WEBVIEW_1. |





<a name="see.also.ios.setcontext"></a>

<a name="SetDeviceOrientation"></a>    
#### SetDeviceOrientation(orientation)

Sets device orientation.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| orientation | number |	ORIENTATION_PORTRAIT, ORIENTATION_LANDSCAPE |




**Returns:**

Device orientation.



<a name="see.also.ios.setdeviceorientation"></a>

	

