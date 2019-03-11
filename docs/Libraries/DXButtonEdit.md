# DXButtonEdit

DevXpress ButtonEdit.
 
Extends ManagedObject.

Extends SeSSimulatedObject.





**Behavior Pattern: ManagedObjectTextBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Text](#Text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSetText](#DoSetText) | Sets text value of this object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Text"></a>
#### Text


Text of the object, 'false' if text can not be read.

			
	
			
Type: string
			
			
Accessors: GetText, SetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSetText"></a>    
#### DoSetText(val)

Sets text value of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |	Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxbuttonedit.dosettext"></a>

	




**Behavior Pattern: DXButtonEditBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ButtonCount](#ButtonCount) | Number of buttons in this control. | GetButtonCount |  |
| [ButtonKind](#ButtonKind) | Kind of a button at index. | GetButtonKind |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickButton](#DoClickButton) | Selects an item of this object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ButtonCount"></a>
#### ButtonCount


Number of buttons in this control.

			
	
			
Type: number
			
			
Accessors: GetButtonCount
			
		
<a name="ButtonKind"></a>
#### ButtonKind


Kind of a button at index. Returns one of Glyph, Ellipsis, Delete, OK, Plus, Minus, Redo, Undo or DropDown

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| index | number | index of button |


	
			
Type: string
			
			
Accessors: GetButtonKind
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickButton"></a>    
#### DoClickButton(index, isLeft)

Selects an item of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	index of button to select |
| isLeft | boolean |	set to 'true' if buttons are at the left of the control<br>Optional, Default: false. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxbuttonedit.doclickbutton"></a>

	

