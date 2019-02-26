# UltraOptionSet

Infragistics UltraOptionSet
 
Extends ManagedObject.

Extends SeSSimulatedObject.





**Behavior Pattern: UltraOptionSetBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [SelectedIndex](#SelectedIndex) | Index of the selected element of the object. | GetSelectedIndex |  |
| [SelectedItem](#SelectedItem) | Selected item of the object. | GetSelectedItem |  |
| [Text](#Text) | Text of the selected item in a single string. | GetText |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectItem](#DoSelectItem) | Performs click on the option set item |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="SelectedIndex"></a>
#### SelectedIndex


Index of the selected element of the object.

			
	
			
Type: number
			
			
Accessors: GetSelectedIndex
			
		
<a name="SelectedItem"></a>
#### SelectedItem


Selected item of the object.

			
	
			
Type: string
			
			
Accessors: GetSelectedItem
			
		
<a name="Text"></a>
#### Text


Text of the selected item in a single string.

			
	
			
Type: string
			
			
Accessors: GetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectItem"></a>    
#### DoSelectItem(captionIndex)

Performs click on the option set item


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| captionIndex | string \| number |	index or caption of the item to be selected. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.




	

