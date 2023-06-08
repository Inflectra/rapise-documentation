Summary: This is a JavaScript wrapper for TouchAction of Appium .NET library. Requires Rapise 8.0+.

# TouchAction

This is a JavaScript wrapper for TouchAction of Appium .NET library. Requires Rapise 8.0+.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[Cancel](#cancel) | Cancels the touch action. |
|	[LongPress](#longpress) | Presses at the specified location in the element until the  context menu appears. |
|	[MoveTo](#moveto) | Moves to the specified location in the element. |
|	[Perform](#perform) | Executes the touch action. |
|	[Press](#press) | Presses at the specified location in the element. |
|	[Release](#release) | Releases the pressure. |
|	[Tap](#tap) | Taps at the specified location in the element. |
|	[Wait](#wait) | Waits for the given duration. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="Cancel"></a>    
#### Cancel

Cancels the touch action.

```javascript
Cancel() 
```





<a name="see.also.touchaction.cancel"></a>

<a name="LongPress"></a>    
#### LongPress

Presses at the specified location in the element until the  context menu appears. If no element is specified presses at the specified location on the screen.

```javascript
LongPress(x, y, element) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	The x coordinate relative to the element or the screen top-left corner. |
| y | number |	The y coordinate relative to the element or the screen top-left corner. |
| element | AppiumElementWrapper |	The target element.<br>Optional. |




**Returns:**

Self-reference for chaining additional actions.



<a name="see.also.touchaction.longpress"></a>

<a name="MoveTo"></a>    
#### MoveTo

Moves to the specified location in the element. If no element is specified moves to the specified location on screen.

```javascript
MoveTo(x, y, element) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	The x coordinate relative to the element or the screen top-left corner. |
| y | number |	The y coordinate relative to the element or the screen top-left corner. |
| element | AppiumElementWrapper |	The target element.<br>Optional. |




**Returns:**

Self-reference for chaining additional actions.



<a name="see.also.touchaction.moveto"></a>

<a name="Perform"></a>    
#### Perform

Executes the touch action.

```javascript
Perform() 
```





<a name="see.also.touchaction.perform"></a>

<a name="Press"></a>    
#### Press

Presses at the specified location in the element. If no element is specified presses at the specified location on screen.

```javascript
Press(x, y, element) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	The x coordinate relative to the element or the screen top-left corner. |
| y | number |	The y coordinate relative to the element or the screen top-left corner. |
| element | AppiumElementWrapper |	The target element.<br>Optional. |




**Returns:**

Self-reference for chaining additional actions.



<a name="see.also.touchaction.press"></a>

<a name="Release"></a>    
#### Release

Releases the pressure.

```javascript
Release() 
```




**Returns:**

Self-reference for chaining additional actions.



<a name="see.also.touchaction.release"></a>

<a name="Tap"></a>    
#### Tap

Taps at the specified location in the element. If no element is specified taps at the specified location on screen.

```javascript
Tap(x, y, count, element) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	The x coordinate relative to the element. |
| y | number |	The y coordinate relative to the element. |
| count | number |	The number of times to tap. |
| element | AppiumElementWrapper |	The target element.<br>Optional. |




**Returns:**

Self-reference for chaining additional actions.



<a name="see.also.touchaction.tap"></a>

<a name="Wait"></a>    
#### Wait

Waits for the given duration.

```javascript
Wait(ms) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| ms | number |	The amount of time to wait in milliseconds. |




**Returns:**

Self-reference for chaining additional actions.



<a name="see.also.touchaction.wait"></a>

	

