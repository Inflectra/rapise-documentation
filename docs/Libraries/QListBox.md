# QListBox

This is the Qt list box. Use DoSelectItem to select a particular item.
 
Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="QWidget" styleclass="Normal" translate="true">QWidget</link>.

Extends SeSSimulatedObject.





**Behavior Pattern: QtListBoxBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Value](#Value) | Gets the value of the selected item. | GetValue |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectItem](#DoSelectItem) | Selects an item of this object. |




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
#### DoSelectItem(itemName)

Selects an item of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| itemName | string |	Item name to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.qlistbox.doselectitem"></a>

	

