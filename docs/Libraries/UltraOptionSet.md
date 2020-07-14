Summary: Infragistics UltraOptionSet

# UltraOptionSet

Infragistics UltraOptionSet
 
UI element class: Infragistics.Win.UltraWinEditors.UltraOptionSet

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: UltraOptionSetBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [SelectedIndex](#selectedindex) | Index of the selected element of the object. | GetSelectedIndex |  |
| [SelectedItem](#selecteditem) | Selected item of the object. | GetSelectedItem |  |
| [Text](#text) | Text of the selected item in a single string. | GetText |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectItem](#doselectitem) | Performs click on the option set item |




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
#### DoSelectItem

Performs click on the option set item

```javascript
DoSelectItem(captionIndex) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| captionIndex | string \| number |	index or caption of the item to be selected. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultraoptionset.doselectitem"></a>

	

