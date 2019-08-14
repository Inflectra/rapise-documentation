Summary: This behavior pattern implements standard behavior for List control.

# DomDynamicsCrmUnifiedInterfaceList

This behavior pattern implements standard behavior for List control.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DomDynamicsCrmUnifiedInterfaceListBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#ItemCount) | Number of items. | GetItemCount |  |
| [ItemNameByIndex](#ItemNameByIndex) | Returns item name by its index. | GetItemNameByIndex |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickItem](#DoClickItem) | Performs click on the item |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemCount"></a>
#### ItemCount


Number of items.

			
	
			
Type: number
			
			
Accessors: GetItemCount
			
		
<a name="ItemNameByIndex"></a>
#### ItemNameByIndex


Returns item name by its index.'false' if name is not found.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| index | number | Index of the item |


	
			
Type: string|boolean
			
			
Accessors: GetItemNameByIndex
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickItem"></a>    
#### DoClickItem(item, xOffset, yOffset)

Performs click on the item


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| item | string \| number |	Index or name  of the item to be selected. |
| xOffset | number |	X offset to click within object. Default is a center.<br>Optional. |
| yOffset | number |	Y offset to click within object. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise.



<a name="see.also.domdynamicscrmunifiedinterfacelist.doclickitem"></a>

	

