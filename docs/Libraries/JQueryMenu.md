# JQueryMenu

Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: JQueryMenuBehavior**


<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoFindChild](#DoFindChild) | Searches for specific item in the menu. |
|	[DoMenu](#DoMenu) | Performs click on the menu item. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoFindChild"></a>    
#### DoFindChild(path, separator, pathType)

Searches for specific item in the menu.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path of the node |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |




**Returns:**

[HTMLObject](HTMLObject.md): HTMLObject of the found node



<a name="see.also.jquerymenu.dofindchild"></a>

<a name="DoMenu"></a>    
#### DoMenu(path, separator, pathType)

Performs click on the menu item.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path of the node |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |




**Returns:**

[HTMLObject](HTMLObject.md): HTMLObject of the found node



<a name="see.also.jquerymenu.domenu"></a>

	

