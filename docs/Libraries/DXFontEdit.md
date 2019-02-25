# DXFontEdit

DevXpress FontEdit.
 
Extends ManagedObject.

Extends SeSSimulatedObject.





**Behavior Pattern: DXFontEditBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [SelectedText](#SelectedText) | Text of the selected item in a single string. | GetSelectedText | SetSelectedText |
| [Text](#Text) | Text of the selected item in a single string. | GetText | SetText |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectItem](#DoSelectItem) | Selects an item of this object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="SelectedText"></a>
#### SelectedText


Text of the selected item in a single string.

			
	
			
Type: string
			
			
Accessors: GetSelectedText, SetSelectedText
			
		
<a name="Text"></a>
#### Text


Text of the selected item in a single string.

			
	
			
Type: string
			
			
Accessors: GetText, SetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectItem"></a>    
#### DoSelectItem(item)

Selects an item of this object.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| item | string \| number |	Item index or text value  to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.




	

