# DXColorEdit

DevXpress ColorEdit.
 
UI element class: DevExpress.XtraEditors.ColorEdit

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DXColorEditBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [SelectedColor](#SelectedColor) | Selected color of the object | GetSelectedColor | SetSelectedColor |
| [SelectedText](#SelectedText) | Text of the selected item in a single string. | GetSelectedText | SetSelectedText |
| [Text](#Text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectColor](#DoSelectColor) | Selects a color. |
|	[DoSetText](#DoSetText) | Sets text value of this object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="SelectedColor"></a>
#### SelectedColor


Selected color of the object

			
	
			
Type: struct
			
			
Accessors: GetSelectedColor, SetSelectedColor
			
		
<a name="SelectedText"></a>
#### SelectedText


Text of the selected item in a single string.

			
	
			
Type: string
			
			
Accessors: GetSelectedText, SetSelectedText
			
		
<a name="Text"></a>
#### Text


Text of the object, 'false' if text can not be read.

			
	
			
Type: string
			
			
Accessors: GetText, SetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectColor"></a>    
#### DoSelectColor(val)

Selects a color.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | struct |	structure with three fields '{R, G, B}'. |




**Returns:**

boolean: 'true' if successfule, 'false' otherwise



<a name="see.also.dxcoloredit.doselectcolor"></a>

<a name="DoSetText"></a>    
#### DoSetText(val)

Sets text value of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |	Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxcoloredit.dosettext"></a>

	

