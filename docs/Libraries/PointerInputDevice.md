Summary: This is a JavaScript wrapper for PointerInputDevice of Selenium .NET library.

# PointerInputDevice

This is a JavaScript wrapper for PointerInputDevice of Selenium .NET library.Use [WebDriver.CreatePointerInput](WebDriver.md#createpointerinput) or [AppiumDriver.CreatePointerInput](AppiumDriver.md#createpointerinput) to create an instance of PointerInputDevice.
```javascript
var p = WebDriver.CreatePointerInput("Mouse", "pointer");
// or
var p = AppiumDriver.CreatePointerInput("Touch", "finger");
// p is used in examples below to refer to an instance of PointerInputDevice.
```






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [CreateActionSequence](#createactionsequence) | Creates new action sequence. |
|  [CreatePause](#createpause) | Creates pause action. |
|  [CreatePointerCancel](#createpointercancel) | Creates pointer cancel action. |
|  [CreatePointerDown](#createpointerdown) | Creates pointer down action. |
|  [CreatePointerMove](#createpointermove) | Creates pointer move action. |
|  [CreatePointerMoveElement](#createpointermoveelement) | Creates pointer move action. |
|  [CreatePointerUp](#createpointerup) | Creates pointer up action. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="CreateActionSequence"></a>    
#### CreateActionSequence

Creates new action sequence. See [ActionSequence](ActionSequence.md).

```javascript
p.CreateActionSequence(p);
```




**Returns:**

ActionSequence object.



<a name="see.also.pointerinputdevice.createactionsequence"></a>

<a name="CreatePause"></a>    
#### CreatePause

Creates pause action.

```javascript
p.CreatePause(duration)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| duration | number |  Pause duration in milliseconds. |




**Returns:**

Interaction object to add to ActionSequence.



<a name="see.also.pointerinputdevice.createpause"></a>

<a name="CreatePointerCancel"></a>    
#### CreatePointerCancel

Creates pointer cancel action.

```javascript
p.CreatePointerCancel()
```




**Returns:**

Interaction object to add to ActionSequence.



<a name="see.also.pointerinputdevice.createpointercancel"></a>

<a name="CreatePointerDown"></a>    
#### CreatePointerDown

Creates pointer down action.

```javascript
p.CreatePointerDown(button)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| button | string |  Touch, Left, Middle or Right |




**Returns:**

Interaction object to add to ActionSequence.



<a name="see.also.pointerinputdevice.createpointerdown"></a>

<a name="CreatePointerMove"></a>    
#### CreatePointerMove

Creates pointer move action.

```javascript
p.CreatePointerMove(origin, xOffset, yOffset, duration)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| origin | string |  Viewport, Pointer |
| xOffset | number |  X-coordinate offset from top-left corner of the origin. |
| yOffset | number |  Y-coordinate offset from top-left corner of the origin. |
| duration | number |  Move duration in milliseconds. |




**Returns:**

Interaction object to add to ActionSequence.



<a name="see.also.pointerinputdevice.createpointermove"></a>

<a name="CreatePointerMoveElement"></a>    
#### CreatePointerMoveElement

Creates pointer move action.

```javascript
p.CreatePointerMoveElement(target, xOffset, yOffset, duration)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| target | AppiumWebElement |  Target element. |
| xOffset | number |  X-coordinate offset from top-left corner of the target. |
| yOffset | number |  Y-coordinate offset from top-left corner of the target. |
| duration | number |  Move duration in milliseconds. |




**Returns:**

Interaction object to add to ActionSequence.



<a name="see.also.pointerinputdevice.createpointermoveelement"></a>

<a name="CreatePointerUp"></a>    
#### CreatePointerUp

Creates pointer up action.

```javascript
p.CreatePointerUp(button)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| button | string |  Touch, Left, Middle or Right |




**Returns:**

Interaction object to add to ActionSequence.



<a name="see.also.pointerinputdevice.createpointerup"></a>

  

