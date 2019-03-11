# GWTExtComboBox

GWT-Ext ComboBox.
 
Extends HTMLObject.

Extends SeSSimulatedObject.





**Behavior Pattern: GWTExtComboBoxBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [SelectedIndex](#SelectedIndex) | Index of the selected element of the object. | GetSelectedIndex | SetSelectedIndex |
| [SelectedItem](#SelectedItem) | Text of the selected item in a single string. | GetSelectedItem | SetSelectedItem |
| [Text](#Text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoExpand](#DoExpand) | Expands the combobox. |
|	[DoSelectItem](#DoSelectItem) | Selects an item of this object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="SelectedIndex"></a>
#### SelectedIndex


Index of the selected element of the object.

			
	
			
Type: number
			
			
Accessors: GetSelectedIndex, SetSelectedIndex
			
		
<a name="SelectedItem"></a>
#### SelectedItem


Text of the selected item in a single string.

			
	
			
Type: string
			
			
Accessors: GetSelectedItem, SetSelectedItem
			
		
<a name="Text"></a>
#### Text


Text of the object, 'false' if text can not be read.

			
	
			
Type: string
			
			
Accessors: GetText, SetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoExpand"></a>    
#### DoExpand(x, y, forceEvent)

Expands the combobox.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	X-coordinate of location relative to object's left border |
| y | number |	Y-coordinate of location relative to object's top border |
| forceEvent | boolean |	pass 'true' to force browser event without actual mouse click.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.gwtextcombobox.doexpand"></a>

<a name="DoSelectItem"></a>    
#### DoSelectItem(item)

Selects an item of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| item | string \| number |	Item index or text value  to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.gwtextcombobox.doselectitem"></a>

	

