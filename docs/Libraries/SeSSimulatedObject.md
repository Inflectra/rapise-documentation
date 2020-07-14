Summary: This is a rule for simulated objects.

# SeSSimulatedObject

This is a rule for simulated objects.





**Behavior Pattern: Win32Generic**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Bitmap](#Bitmap) | UI Image of the object. | GetBitmap |  |
| [BWBitmap](#BWBitmap) | UI Image of the object in 1-bit format (black&white). | GetBWBitmap |  |
| [Class](#Class) | Class of the object. | GetClass |  |
| [Height](#Height) | Height of the object. | GetHeight |  |
| [Name](#Name) | Name of the object. | GetName |  |
| [ObjectType](#ObjectType) | SeSMatcherRule type for this object. | GetObjectType |  |
| [State](#State) | State of the object. | GetState |  |
| [Value](#Value) | Value of the object. | GetValue | SetValue |
| [Width](#Width) | Width of the object. | GetWidth |  |
| [WindowText](#WindowText) | Window text of the object. | GetWindowText | SetWindowText |
| [X](#X) | X-coordinate of the top left corner of the object. | GetX |  |
| [Y](#Y) | Y-coordinate of the top left corner of the object. | GetY |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoAction](#DoAction) | Performs default action for an object. |
|	[DoAnalogPlay](#DoAnalogPlay) | Plays analog recording using coordinates relative to this object. |
|	[DoClick](#DoClick) | Performs left click at the center of an object. |
|	[DoEnsureVisible](#DoEnsureVisible) | Makes sure specified element is visible on the screen. |
|	[DoLButtonDown](#DoLButtonDown) | Performs left mouse button down. |
|	[DoLButtonUp](#DoLButtonUp) | Performs left mouse button up. |
|	[DoLClick](#DoLClick) | Performs a left click at the center of an object or at the specified location. |
|	[DoLDClick](#DoLDClick) | Performs a left double click at the center of an object or at the specified location. |
|	[DoMButtonDown](#DoMButtonDown) | Performs middle mouse button down. |
|	[DoMButtonUp](#DoMButtonUp) | Performs middle mouse button up. |
|	[DoMClick](#DoMClick) | Performs a middle click at the center of an object or at the specified location. |
|	[DoMDClick](#DoMDClick) | Performs a middle double click at the center of an object or at the specified location. |
|	[DoMouseMove](#DoMouseMove) | Moves mouse cursor to a location relative to this object position. |
|	[DoRButtonDown](#DoRButtonDown) | Performs right mouse button down. |
|	[DoRButtonUp](#DoRButtonUp) | Performs right mouse button up. |
|	[DoRClick](#DoRClick) | Performs a right click at the center of an object or at the specified location. |
|	[DoRDClick](#DoRDClick) | Performs a right double click at the center of an object or at the specified location. |
|	[DoSendKeys](#DoSendKeys) | Sends series of keystrokes to an object. |
|	[DoSendText](#DoSendText) | Sends text to the active application as is (while SendKeys also supports sending special keys). |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Bitmap"></a>
#### Bitmap


UI Image of the object.

			
	
			
Type: ImageWrapper
			
			
Accessors: GetBitmap
			
		
<a name="BWBitmap"></a>
#### BWBitmap


UI Image of the object in 1-bit format (black&white).

			
	
			
Type: ImageWrapper
			
			
Accessors: GetBWBitmap
			
		
<a name="Class"></a>
#### Class


Class of the object.

			
	
			
Type: string
			
			
Accessors: GetClass
			
		
<a name="Height"></a>
#### Height


Height of the object.

			
	
			
Type: number
			
			
Accessors: GetHeight
			
		
<a name="Name"></a>
#### Name


Name of the object.

			
	
			
Type: string
			
			
Accessors: GetName
			
		
<a name="ObjectType"></a>
#### ObjectType


SeSMatcherRule type for this object.

			
	
			
Type: string
			
			
Accessors: GetObjectType
			
		
<a name="State"></a>
#### State


State of the object.

			
	
			
Type: string
			
			
Accessors: GetState
			
		
<a name="Value"></a>
#### Value


Value of the object.

			
	
			
Type: string
			
			
Accessors: GetValue, SetValue
			
		
<a name="Width"></a>
#### Width


Width of the object.

			
	
			
Type: number
			
			
Accessors: GetWidth
			
		
<a name="WindowText"></a>
#### WindowText


Window text of the object.

			
	
			
Type: string
			
			
Accessors: GetWindowText, SetWindowText
			
		
<a name="X"></a>
#### X


X-coordinate of the top left corner of the object.

			
	
			
Type: number
			
			
Accessors: GetX
			
		
<a name="Y"></a>
#### Y


Y-coordinate of the top left corner of the object.

			
	
			
Type: number
			
			
Accessors: GetY
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoAction"></a>    
#### DoAction()

Performs default action for an object. If the object doesn't have default action then 'LClick' is performed.





<a name="see.also.sessimulatedobject.doaction"></a>

<a name="DoAnalogPlay"></a>    
#### DoAnalogPlay(path, left, top)

Plays analog recording using coordinates relative to this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path to analog recording (usually an .arf file). |
| left | number |	X-coordinate of top-left corner of the analog area, relative to object top-left corner<br>Optional. |
| top | number |	Y-coordinate of the top-left corner of the analog area, relative to object top-left corner.<br>Optional. |





<a name="see.also.sessimulatedobject.doanalogplay"></a>

<a name="DoClick"></a>    
#### DoClick(clickType, xOffset, yOffset)

Performs left click at the center of an object. It is a customizable variant of LClick action.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L. |
| xOffset | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |
| yOffset | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.sessimulatedobject.doclick"></a>

<a name="DoEnsureVisible"></a>    
#### DoEnsureVisible()

Makes sure specified element is visible on the screen.





<a name="see.also.sessimulatedobject.doensurevisible"></a>

<a name="DoLButtonDown"></a>    
#### DoLButtonDown()

Performs left mouse button down. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: This action must be followed by 'DoLButtonUp', otherwise it may lock mouse cursor.





<a name="see.also.sessimulatedobject.dolbuttondown"></a>

<a name="DoLButtonUp"></a>    
#### DoLButtonUp()

Performs left mouse button up. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: Use this action after 'DoLButtonDown', otherwise it will have no effect.





<a name="see.also.sessimulatedobject.dolbuttonup"></a>

<a name="DoLClick"></a>    
#### DoLClick(x, y)

Performs a left click at the center of an object or at the specified location.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |
| y | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.sessimulatedobject.dolclick"></a>

<a name="DoLDClick"></a>    
#### DoLDClick(x, y)

Performs a left double click at the center of an object or at the specified location.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |
| y | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.sessimulatedobject.doldclick"></a>

<a name="DoMButtonDown"></a>    
#### DoMButtonDown()

Performs middle mouse button down. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: This action must be followed by 'DoMButtonUp', otherwise it may lock mouse cursor.





<a name="see.also.sessimulatedobject.dombuttondown"></a>

<a name="DoMButtonUp"></a>    
#### DoMButtonUp()

Performs middle mouse button up. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: Use this action after 'DoMButtonDown', otherwise it will have no effect.





<a name="see.also.sessimulatedobject.dombuttonup"></a>

<a name="DoMClick"></a>    
#### DoMClick(x, y)

Performs a middle click at the center of an object or at the specified location.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |
| y | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.sessimulatedobject.domclick"></a>

<a name="DoMDClick"></a>    
#### DoMDClick(x, y)

Performs a middle double click at the center of an object or at the specified location.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |
| y | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.sessimulatedobject.domdclick"></a>

<a name="DoMouseMove"></a>    
#### DoMouseMove(x, y)

Moves mouse cursor to a location relative to this object position.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |
| y | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |





<a name="see.also.sessimulatedobject.domousemove"></a>

<a name="DoRButtonDown"></a>    
#### DoRButtonDown()

Performs right mouse button down. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: This action must be followed by 'DoRButtonUp', otherwise it may lock mouse cursor.





<a name="see.also.sessimulatedobject.dorbuttondown"></a>

<a name="DoRButtonUp"></a>    
#### DoRButtonUp()

Performs right mouse button up. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: Use this action after 'DoRButtonDown', otherwise it will have no effect.





<a name="see.also.sessimulatedobject.dorbuttonup"></a>

<a name="DoRClick"></a>    
#### DoRClick(x, y)

Performs a right click at the center of an object or at the specified location.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |
| y | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.sessimulatedobject.dorclick"></a>

<a name="DoRDClick"></a>    
#### DoRDClick(x, y)

Performs a right double click at the center of an object or at the specified location.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |
| y | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.sessimulatedobject.dordclick"></a>

<a name="DoSendKeys"></a>    
#### DoSendKeys(keys)

Sends series of keystrokes to an object. For example: DoSendKeys('^F') - sends {CTRL} + {F}. See <a displaytype="text" defaultstyle="true" type="weblink" href="http://msdn.microsoft.com/en-us/library/system.windows.forms.sendkeys.aspx" target="_blank" styleclass="Normal" translate="true">MSDN Article for SendKeys</a>


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| keys | string |	A sequence of keystrokes. |





<a name="see.also.sessimulatedobject.dosendkeys"></a>

<a name="DoSendText"></a>    
#### DoSendText(text)

Sends text to the active application as is (while SendKeys also supports sending special keys).


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| text | string |	A sequence of keystrokes. |





<a name="see.also.sessimulatedobject.dosendtext"></a>

	

