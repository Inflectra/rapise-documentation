Summary: Global object. Use it to perform actions not related to a particular object. You do not need to

# iOS

Global object. Use it to perform actions not related to a particular object. You do not need torecord or learn this object, it is always automatically available in any test.






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoFlick](#doflick) | Flick action. |
|  [DoGoToUrl](#dogotourl) | Opens URL in active browser. |
|  [DoScreenshot](#doscreenshot) | Makes screenshot of a device. |
|  [DoShake](#doshake) | Shakes device. |
|  [DoSwipe](#doswipe) | Swipe action. |
|  [DoTap](#dotap) | Tap screen. |
|  [GetCapability](#getcapability) | Gets capability with specified name. |
|  [GetContext](#getcontext) | Gets current context. |
|  [GetDeviceOrientation](#getdeviceorientation) | Gets device orientation. |
|  [SetContext](#setcontext) | Sets context. |
|  [SetDeviceOrientation](#setdeviceorientation) | Sets device orientation. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoFlick"></a>    
#### DoFlick

Flick action.

```javascript
iOS.DoFlick(endX, endY, startX, startY, touchCount)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| endX | number |  x coordinate where swipe ends (in pixels or relative units) |
| endY | number |  y coordinate where swipe ends (in pixels or relative units) |
| startX | number |  x coordinate where swipe begins (in pixels or relative units)<br>Optional. |
| startY | number |  y coordinate where swipe begins (in pixels or relative units)<br>Optional. |
| touchCount | number |  how many fingers to swipe with<br>Optional. |




**Returns:**

'true' if successful, 'false' otherwise.



<a name="see.also.ios.doflick"></a>

<a name="DoGoToUrl"></a>    
#### DoGoToUrl

Opens URL in active browser.

```javascript
iOS.DoGoToUrl(url)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |   |




**Returns:**

'true' if successful, 'false' otherwise.



<a name="see.also.ios.dogotourl"></a>

<a name="DoScreenshot"></a>    
#### DoScreenshot

Makes screenshot of a device.

```javascript
iOS.DoScreenshot(txtLabel)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| txtLabel | string |  Label of a screenshot in the report.<br>Optional. |




**Returns:**

'true' if successful, 'false' otherwise.



<a name="see.also.ios.doscreenshot"></a>

<a name="DoShake"></a>    
#### DoShake

Shakes device.

```javascript
iOS.DoShake()
```




**Returns:**

'true' if successful, 'false' otherwise.



<a name="see.also.ios.doshake"></a>

<a name="DoSwipe"></a>    
#### DoSwipe

Swipe action.

```javascript
iOS.DoSwipe(endX, endY, startX, startY, duration, touchCount)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| endX | number |  x coordinate where swipe ends (in pixels or relative units) |
| endY | number |  y coordinate where swipe ends (in pixels or relative units) |
| startX | number |  x coordinate where swipe begins (in pixels or relative units)<br>Optional. |
| startY | number |  y coordinate where swipe begins (in pixels or relative units)<br>Optional. |
| duration | number |  time (in seconds) to spend performing the swipe/drag<br>Optional. |
| touchCount | number |  how many fingers to swipe with<br>Optional. |




**Returns:**

'true' if successful, 'false' otherwise.



<a name="see.also.ios.doswipe"></a>

<a name="DoTap"></a>    
#### DoTap

Tap screen.

```javascript
iOS.DoTap(x, y, duration, tapCount, touchCount)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  x coordinate to tap (in pixels or relative units)<br>Optional. |
| y | number |  y coordinate to tap (in pixels or relative units)<br>Optional. |
| duration | number |  how long (in seconds) to tap<br>Optional. |
| tapCount | number |  how many times to tap<br>Optional. |
| touchCount | number |  how many fingers to tap with<br>Optional. |




**Returns:**

'true' if successful, 'false' otherwise.



<a name="see.also.ios.dotap"></a>

<a name="GetCapability"></a>    
#### GetCapability

Gets capability with specified name.

```javascript
iOS.GetCapability(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Name of a capability. |




**Returns:**

Capability string.



<a name="see.also.ios.getcapability"></a>

<a name="GetContext"></a>    
#### GetContext

Gets current context.

```javascript
iOS.GetContext()
```




**Returns:**

Either NATIVE_APP or WEBVIEW_1.



<a name="see.also.ios.getcontext"></a>

<a name="GetDeviceOrientation"></a>    
#### GetDeviceOrientation

Gets device orientation.

```javascript
iOS.GetDeviceOrientation()
```




**Returns:**

Device orientation.



<a name="see.also.ios.getdeviceorientation"></a>

<a name="SetContext"></a>    
#### SetContext

Sets context.

```javascript
iOS.SetContext(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Either NATIVE_APP or WEBVIEW_1. |





<a name="see.also.ios.setcontext"></a>

<a name="SetDeviceOrientation"></a>    
#### SetDeviceOrientation

Sets device orientation.

```javascript
iOS.SetDeviceOrientation(orientation)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| orientation | number |  ORIENTATION_PORTRAIT, ORIENTATION_LANDSCAPE |




**Returns:**

Device orientation.



<a name="see.also.ios.setdeviceorientation"></a>

  

