Summary: This is a JavaScript wrapper for Actions of Selenium .NET library.

# Actions

This is a JavaScript wrapper for Actions of Selenium .NET library.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[Build](#Build) | Builds the sequence of actions. |
|	[Click](#Click) | Clicks the mouse on the specified element. |
|	[ClickAndHold](#ClickAndHold) | Clicks and holds the mouse button down on the specified element. |
|	[ContextClick](#ContextClick) | Right-clicks the mouse on the specified element. |
|	[DoubleClick](#DoubleClick) | Double-clicks the mouse on the specified element. |
|	[DragAndDrop](#DragAndDrop) | Performs a drag-and-drop operation from one element to another. |
|	[DragAndDropToOffset](#DragAndDropToOffset) | Performs a drag-and-drop operation on one element to a specified offset. |
|	[KeyDown](#KeyDown) | Sends a modifier key down message to the specified element in the browser. |
|	[KeyUp](#KeyUp) | Sends a modifier key up message to the specified element in the browser. |
|	[MoveByOffset](#MoveByOffset) | Moves the mouse to the specified offset of the last known mouse coordinates. |
|	[MoveToElement](#MoveToElement) | Moves the mouse to the specified offset of the top-left corner of the specified element. |
|	[Perform](#Perform) | Performs the currently built action. |
|	[Release](#Release) | Releases the mouse button on the specified element. |
|	[SendKeys](#SendKeys) | Sends a sequence of keystrokes to the specified element in the browser. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="Build"></a>    
#### Build()

Builds the sequence of actions.




**Returns:**

A self-reference.



<a name="see.also.actions.build"></a>

<a name="Click"></a>    
#### Click(el)

Clicks the mouse on the specified element. If no element is specified clicks the mouse at the last known mouse coordinates.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| el | WebElement |	The element on which to click.<br>Optional. |




**Returns:**

A self-reference.



<a name="see.also.actions.click"></a>

<a name="ClickAndHold"></a>    
#### ClickAndHold(el)

Clicks and holds the mouse button down on the specified element.If no element is specified clicks and holds the mouse button at the last known mouse coordinates.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| el | WebElement |	The element on which to click and hold.<br>Optional. |




**Returns:**

A self-reference.



<a name="see.also.actions.clickandhold"></a>

<a name="ContextClick"></a>    
#### ContextClick(el)

Right-clicks the mouse on the specified element.If no element is specified right-clicks the mouse at the last known mouse coordinates.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| el | WebElement |	The element on which to right-click.<br>Optional. |




**Returns:**

A self-reference.



<a name="see.also.actions.contextclick"></a>

<a name="DoubleClick"></a>    
#### DoubleClick(el)

Double-clicks the mouse on the specified element.If no element is specified double-clicks the mouse at the last known mouse coordinates.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| el | WebElement |	The element on which to double-click.<br>Optional. |




**Returns:**

A self-reference.



<a name="see.also.actions.doubleclick"></a>

<a name="DragAndDrop"></a>    
#### DragAndDrop(source, target)

Performs a drag-and-drop operation from one element to another.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| source | WebElement |	The element on which the drag operation is started. |
| target | WebElement |	The element on which the drop is performed. |




**Returns:**

A self-reference.



<a name="see.also.actions.draganddrop"></a>

<a name="DragAndDropToOffset"></a>    
#### DragAndDropToOffset(source, offsetX, offsetY)

Performs a drag-and-drop operation on one element to a specified offset.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| source | WebElement |	The element on which the drag operation is started. |
| offsetX | number |	The horizontal offset to which to move the mouse. |
| offsetY | number |	The vertical offset to which to move the mouse. |




**Returns:**

A self-reference.



<a name="see.also.actions.draganddroptooffset"></a>

<a name="KeyDown"></a>    
#### KeyDown(theKey, el)

Sends a modifier key down message to the specified element in the browser.If no element is specified sends a modifier key down message to the browser.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| theKey | string |	The key to be sent. Accepts "Shift", "Control" and "Alt". |
| el | WebElement |	The element to which to send the key command.<br>Optional. |




**Returns:**

A self-reference.



<a name="see.also.actions.keydown"></a>

<a name="KeyUp"></a>    
#### KeyUp(theKey, el)

Sends a modifier key up message to the specified element in the browser.If no element is specified sends a modifier key up message to the browser.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| theKey | string |	The key to be sent. Accepts "Shift", "Control" and "Alt". |
| el | WebElement |	The element to which to send the key command.<br>Optional. |




**Returns:**

A self-reference.



<a name="see.also.actions.keyup"></a>

<a name="MoveByOffset"></a>    
#### MoveByOffset(offsetX, offsetY)

Moves the mouse to the specified offset of the last known mouse coordinates.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| offsetX | number |	The horizontal offset to which to move the mouse. |
| offsetY | number |	The vertical offset to which to move the mouse. |




**Returns:**

A self-reference.



<a name="see.also.actions.movebyoffset"></a>

<a name="MoveToElement"></a>    
#### MoveToElement(el, offsetX, offsetY)

Moves the mouse to the specified offset of the top-left corner of the specified element.If offset is not specified moves the mouse to the specified element.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| el | WebElement |	The element to which to move the mouse. |
| offsetX | number |	The horizontal offset to which to move the mouse.<br>Optional. |
| offsetY | number |	The vertical offset to which to move the mouse.<br>Optional. |




**Returns:**

A self-reference.



<a name="see.also.actions.movetoelement"></a>

<a name="Perform"></a>    
#### Perform()

Performs the currently built action.





<a name="see.also.actions.perform"></a>

<a name="Release"></a>    
#### Release(el)

Releases the mouse button on the specified element.If no element is specified releases the mouse button at the last known mouse coordinates.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| el | WebElement |	The element on which to release the button.<br>Optional. |




**Returns:**

A self-reference.



<a name="see.also.actions.release"></a>

<a name="SendKeys"></a>    
#### SendKeys(keysToSend, el)

Sends a sequence of keystrokes to the specified element in the browser.If no element is specified sends a sequence of keystrokes to the browser.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| keysToSend | string |	The keystrokes to send to the browser. |
| el | WebElement |	The element to which to send the keystrokes.<br>Optional. |




**Returns:**

A self-reference.



<a name="see.also.actions.sendkeys"></a>

	

