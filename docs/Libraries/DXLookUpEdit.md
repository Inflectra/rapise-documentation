# DXLookUpEdit

DevXpress LookUpEdit.
 
UI element class: DevExpress.XtraEditors.LookUpEdit

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DXLookUpEditBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemIndex](#ItemIndex) | Index of the selected element of the object. | GetItemIndex | SetItemIndex |
| [ItemName](#ItemName) | Name of the selected element of the object. | GetItemName |  |
| [SelectedIndex](#SelectedIndex) | Index of the selected element of the object. | GetSelectedIndex | SetSelectedIndex |
| [SelectedText](#SelectedText) | Text of the object, 'false' if text can not be read. | GetSelectedText | SetSelectedText |
| [Text](#Text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectItem](#DoSelectItem) | Selects an item of this object. |
|	[DoSetText](#DoSetText) | Sets text value of this object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemIndex"></a>
#### ItemIndex


Index of the selected element of the object.

			
	
			
Type: string
			
			
Accessors: GetItemIndex, SetItemIndex
			
		
<a name="ItemName"></a>
#### ItemName


Name of the selected element of the object.

			
	
			
Type: string
			
			
Accessors: GetItemName
			
		
<a name="SelectedIndex"></a>
#### SelectedIndex


Index of the selected element of the object.

			
	
			
Type: number
			
			
Accessors: GetSelectedIndex, SetSelectedIndex
			
		
<a name="SelectedText"></a>
#### SelectedText


Text of the object, 'false' if text can not be read.

			
	
			
Type: string
			
			
Accessors: GetSelectedText, SetSelectedText
			
		
<a name="Text"></a>
#### Text


Text of the object, 'false' if text can not be read.

			
	
			
Type: string
			
			
Accessors: GetText, SetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectItem"></a>    
#### DoSelectItem(val)

Selects an item of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | number |	index of value to select |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxlookupedit.doselectitem"></a>

<a name="DoSetText"></a>    
#### DoSetText(val)

Sets text value of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |	Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxlookupedit.dosettext"></a>

	

