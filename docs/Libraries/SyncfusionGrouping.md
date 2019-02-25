# SyncfusionGrouping

This behavior pattern implements standard behavior for Grouping control.
 
Extends ManagedObject.

Extends SeSSimulatedObject.





**Behavior Pattern: SyncfusionGroupingBehavior**


<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickItem](#DoClickItem) | Performs click on the groupbar item |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickItem"></a>    
#### DoClickItem(captionIndex, clickType, ox, oy)

Performs click on the groupbar item


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| captionIndex | string \| number |	index or caption of the item to be selected. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L. |
| ox | number |	X offset to click within object. Default is a center.<br>Optional. |
| oy | number |	Y offset to click within object. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.




	

