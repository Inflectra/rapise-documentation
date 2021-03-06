Summary: iOSPicker

# iOSPicker

Extends [iOSObject](iOSObject.md)





**Behavior Pattern: iOSObjectPickerSelectableBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [SelectedItem](#selecteditem) | Text of the selected item. | GetSelectedItem |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectItem](#doselectitem) | Selects an item with the specified name. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="SelectedItem"></a>
#### SelectedItem


Text of the selected item.

			
	
			
Type: string
			
			
Accessors: GetSelectedItem
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects an item with the specified name.

```javascript
DoSelectItem(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Item name. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iospicker.doselectitem"></a>

	

