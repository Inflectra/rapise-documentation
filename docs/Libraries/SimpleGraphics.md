Summary: Graphics control.

# SimpleGraphics

Graphics control.
 
Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: Win32Generic**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Bitmap](#bitmap) | UI Image of the object. | GetBitmap |  |
| [BWBitmap](#bwbitmap) | UI Image of the object in 1-bit format (black&white). | GetBWBitmap |  |
| [Class](#class) | Class of the object. | GetClass |  |
| [Height](#height) | Height of the object. | GetHeight |  |
| [Name](#name) | Name of the object. | GetName |  |
| [ObjectType](#objecttype) | SeSMatcherRule type for this object. | GetObjectType |  |
| [State](#state) | State of the object. | GetState |  |
| [Value](#value) | Value of the object. | GetValue | SetValue |
| [Width](#width) | Width of the object. | GetWidth |  |
| [WindowText](#windowtext) | Window text of the object. | GetWindowText | SetWindowText |
| [X](#x) | X-coordinate of the top left corner of the object. | GetX |  |
| [Y](#y) | Y-coordinate of the top left corner of the object. | GetY |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoAction](#doaction) | Performs default action for an object. |
|  [DoAnalogPlay](#doanalogplay) | Plays analog recording using coordinates relative to this object. |
|  [DoClick](#doclick) | Performs left click at the center of an object. |
|  [DoEnsureVisible](#doensurevisible) | Makes sure specified element is visible on the screen. |
|  [DoLButtonDown](#dolbuttondown) | Performs left mouse button down. |
|  [DoLButtonUp](#dolbuttonup) | Performs left mouse button up. |
|  [DoLClick](#dolclick) | Performs a left click at the center of an object or at the specified location. |
|  [DoLDClick](#doldclick) | Performs a left double click at the center of an object or at the specified location. |
|  [DoMButtonDown](#dombuttondown) | Performs middle mouse button down. |
|  [DoMButtonUp](#dombuttonup) | Performs middle mouse button up. |
|  [DoMClick](#domclick) | Performs a middle click at the center of an object or at the specified location. |
|  [DoMDClick](#domdclick) | Performs a middle double click at the center of an object or at the specified location. |
|  [DoMouseMove](#domousemove) | Moves mouse cursor to a location relative to this object position. |
|  [DoRButtonDown](#dorbuttondown) | Performs right mouse button down. |
|  [DoRButtonUp](#dorbuttonup) | Performs right mouse button up. |
|  [DoRClick](#dorclick) | Performs a right click at the center of an object or at the specified location. |
|  [DoRDClick](#dordclick) | Performs a right double click at the center of an object or at the specified location. |
|  [DoSendKeys](#dosendkeys) | Sends series of keystrokes to an object. |
|  [DoSendText](#dosendtext) | Sends text to the active application as is (while SendKeys also supports sending special keys). |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="Bitmap"></a>
#### Bitmap

UI Image of the object.



Type: ImageWrapper


Accessors: GetBitmap

```javascript
value = SeS('SomeSimpleGraphics').GetBitmap()
```


<a name="BWBitmap"></a>
#### BWBitmap

UI Image of the object in 1-bit format (black&white).



Type: ImageWrapper


Accessors: GetBWBitmap

```javascript
value = SeS('SomeSimpleGraphics').GetBWBitmap()
```


<a name="Class"></a>
#### Class

Class of the object.



Type: string


Accessors: GetClass

```javascript
value = SeS('SomeSimpleGraphics').GetClass()
```


<a name="Height"></a>
#### Height

Height of the object.



Type: number


Accessors: GetHeight

```javascript
value = SeS('SomeSimpleGraphics').GetHeight()
```


<a name="Name"></a>
#### Name

Name of the object.



Type: string


Accessors: GetName

```javascript
value = SeS('SomeSimpleGraphics').GetName()
```


<a name="ObjectType"></a>
#### ObjectType

SeSMatcherRule type for this object.



Type: string


Accessors: GetObjectType

```javascript
value = SeS('SomeSimpleGraphics').GetObjectType()
```


<a name="State"></a>
#### State

State of the object.



Type: string


Accessors: GetState

```javascript
value = SeS('SomeSimpleGraphics').GetState()
```


<a name="Value"></a>
#### Value

Value of the object.



Type: string


Accessors: GetValue, SetValue

```javascript
value = SeS('SomeSimpleGraphics').GetValue()

SeS('SomeSimpleGraphics').SetValue(value)
```


<a name="Width"></a>
#### Width

Width of the object.



Type: number


Accessors: GetWidth

```javascript
value = SeS('SomeSimpleGraphics').GetWidth()
```


<a name="WindowText"></a>
#### WindowText

Window text of the object.



Type: string


Accessors: GetWindowText, SetWindowText

```javascript
value = SeS('SomeSimpleGraphics').GetWindowText()

SeS('SomeSimpleGraphics').SetWindowText(value)
```


<a name="X"></a>
#### X

X-coordinate of the top left corner of the object.



Type: number


Accessors: GetX

```javascript
value = SeS('SomeSimpleGraphics').GetX()
```


<a name="Y"></a>
#### Y

Y-coordinate of the top left corner of the object.



Type: number


Accessors: GetY

```javascript
value = SeS('SomeSimpleGraphics').GetY()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoAction"></a>    
#### DoAction

Performs default action for an object. If the object doesn't have default action then 'LClick' is performed.

```javascript
SeS('SomeSimpleGraphics').DoAction()
```





<a name="see.also.simplegraphics.doaction"></a>

<a name="DoAnalogPlay"></a>    
#### DoAnalogPlay

Plays analog recording using coordinates relative to this object.

```javascript
SeS('SomeSimpleGraphics').DoAnalogPlay(path, left, top)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path to analog recording (usually an .arf file). |
| left | number |  X-coordinate of top-left corner of the analog area, relative to object top-left corner<br>Optional. |
| top | number |  Y-coordinate of the top-left corner of the analog area, relative to object top-left corner.<br>Optional. |





<a name="see.also.simplegraphics.doanalogplay"></a>

<a name="DoClick"></a>    
#### DoClick

Performs left click at the center of an object. It is a customizable variant of LClick action.

```javascript
SeS('SomeSimpleGraphics').DoClick(clickType, xOffset, yOffset)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| clickType | string |  Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |
| xOffset | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| yOffset | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.simplegraphics.doclick"></a>

<a name="DoEnsureVisible"></a>    
#### DoEnsureVisible

Makes sure specified element is visible on the screen.

```javascript
SeS('SomeSimpleGraphics').DoEnsureVisible()
```





<a name="see.also.simplegraphics.doensurevisible"></a>

<a name="DoLButtonDown"></a>    
#### DoLButtonDown

Performs left mouse button down. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: This action must be followed by 'DoLButtonUp', otherwise it may lock mouse cursor.

```javascript
SeS('SomeSimpleGraphics').DoLButtonDown()
```





<a name="see.also.simplegraphics.dolbuttondown"></a>

<a name="DoLButtonUp"></a>    
#### DoLButtonUp

Performs left mouse button up. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: Use this action after 'DoLButtonDown', otherwise it will have no effect.

```javascript
SeS('SomeSimpleGraphics').DoLButtonUp()
```





<a name="see.also.simplegraphics.dolbuttonup"></a>

<a name="DoLClick"></a>    
#### DoLClick

Performs a left click at the center of an object or at the specified location.

```javascript
SeS('SomeSimpleGraphics').DoLClick(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.simplegraphics.dolclick"></a>

<a name="DoLDClick"></a>    
#### DoLDClick

Performs a left double click at the center of an object or at the specified location.

```javascript
SeS('SomeSimpleGraphics').DoLDClick(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.simplegraphics.doldclick"></a>

<a name="DoMButtonDown"></a>    
#### DoMButtonDown

Performs middle mouse button down. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: This action must be followed by 'DoMButtonUp', otherwise it may lock mouse cursor.

```javascript
SeS('SomeSimpleGraphics').DoMButtonDown()
```





<a name="see.also.simplegraphics.dombuttondown"></a>

<a name="DoMButtonUp"></a>    
#### DoMButtonUp

Performs middle mouse button up. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: Use this action after 'DoMButtonDown', otherwise it will have no effect.

```javascript
SeS('SomeSimpleGraphics').DoMButtonUp()
```





<a name="see.also.simplegraphics.dombuttonup"></a>

<a name="DoMClick"></a>    
#### DoMClick

Performs a middle click at the center of an object or at the specified location.

```javascript
SeS('SomeSimpleGraphics').DoMClick(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.simplegraphics.domclick"></a>

<a name="DoMDClick"></a>    
#### DoMDClick

Performs a middle double click at the center of an object or at the specified location.

```javascript
SeS('SomeSimpleGraphics').DoMDClick(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.simplegraphics.domdclick"></a>

<a name="DoMouseMove"></a>    
#### DoMouseMove

Moves mouse cursor to a location relative to this object position.

```javascript
SeS('SomeSimpleGraphics').DoMouseMove(x, y, duration)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |
| duration | number |  Mouse move duration (milliseconds). If 0 - do immediate move.<br>Optional, Default: "0". |





<a name="see.also.simplegraphics.domousemove"></a>

<a name="DoRButtonDown"></a>    
#### DoRButtonDown

Performs right mouse button down. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: This action must be followed by 'DoRButtonUp', otherwise it may lock mouse cursor.

```javascript
SeS('SomeSimpleGraphics').DoRButtonDown()
```





<a name="see.also.simplegraphics.dorbuttondown"></a>

<a name="DoRButtonUp"></a>    
#### DoRButtonUp

Performs right mouse button up. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: Use this action after 'DoRButtonDown', otherwise it will have no effect.

```javascript
SeS('SomeSimpleGraphics').DoRButtonUp()
```





<a name="see.also.simplegraphics.dorbuttonup"></a>

<a name="DoRClick"></a>    
#### DoRClick

Performs a right click at the center of an object or at the specified location.

```javascript
SeS('SomeSimpleGraphics').DoRClick(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.simplegraphics.dorclick"></a>

<a name="DoRDClick"></a>    
#### DoRDClick

Performs a right double click at the center of an object or at the specified location.

```javascript
SeS('SomeSimpleGraphics').DoRDClick(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.simplegraphics.dordclick"></a>

<a name="DoSendKeys"></a>    
#### DoSendKeys

Sends series of keystrokes to an object. For example: DoSendKeys('^F') - sends {CTRL} + {F}. See <a displaytype="text" defaultstyle="true" type="weblink" href="http://msdn.microsoft.com/en-us/library/system.windows.forms.sendkeys.aspx" target="_blank" styleclass="Normal" translate="true">MSDN Article for SendKeys</a>

```javascript
SeS('SomeSimpleGraphics').DoSendKeys(keys)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| keys | string |  A sequence of keystrokes. |





<a name="see.also.simplegraphics.dosendkeys"></a>

<a name="DoSendText"></a>    
#### DoSendText

Sends text to the active application as is (while SendKeys also supports sending special keys).

```javascript
SeS('SomeSimpleGraphics').DoSendText(text)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| text | string |  A sequence of keystrokes. |





<a name="see.also.simplegraphics.dosendtext"></a>

  

