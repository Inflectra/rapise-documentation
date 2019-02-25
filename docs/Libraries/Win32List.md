# Win32List

This is generic Win32 list. Use DoSelectItem to select a particular item. 
 
Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="SeSSimulatedObject" styleclass="Normal" translate="true">SeSSimulatedObject</link>.





**Behavior Pattern: Win32ItemSelectable**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#ItemCount) | Number of items. | GetItemCount |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectItem](#DoSelectItem) | Selects item of this object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemCount"></a>
#### ItemCount


Number of items.

			
	
			
Type: number
			
			
Accessors: GetItemCount
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectItem"></a>    
#### DoSelectItem(itemName)

Selects item of this object.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| itemName | string |	This is a name of item to select. Or an array of item names in the case of multi-select. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise




	




**Behavior Pattern: Win32ItemExpandable**


<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoExpand](#DoExpand) | Expands an item of this object. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoExpand"></a>    
#### DoExpand(itemName)

Expands an item of this object.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| itemName | string |	Name of the item to expand |




**Returns:**

boolean: 'true' if operation was successful, 'false' otherwise




	

