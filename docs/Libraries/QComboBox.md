Summary: This is the Qt combo box. Use DoSelectItem to select a particular item.

# QComboBox

This is the Qt combo box. Use DoSelectItem to select a particular item.
 
Extends [QWidget](QWidget.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: QtItemComboBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Value](#value) | Gets the value of the selected item. | GetValue |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectItem](#doselectitem) | Selects an item of this object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Value"></a>
#### Value


Gets the value of the selected item. This is usually equivalent to the name of the item being selected.

			
	
			
Type: string
			
			
Accessors: GetValue
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects an item of this object.

```javascript
DoSelectItem(itemName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| itemName | string |	Item name to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.qcombobox.doselectitem"></a>

	

