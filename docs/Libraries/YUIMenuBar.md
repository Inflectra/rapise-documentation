# YUIMenuBar

YUI MenuBar.
 
Extends HTMLObject.

Extends SeSSimulatedObject.





**Behavior Pattern: YUIMenuBarBehavior**


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
| path | string |	Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| pathType | string |	Path type. Can be one of 'name', 'index'. |




**Returns:**

HTMLObject: HTMLObject of the found node



<a name="see.also.yuimenubar.dofindchild"></a>

<a name="DoMenu"></a>    
#### DoMenu(path, separator, pathType)

Performs click on the menu item.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| pathType | string |	Path type. Can be one of 'name', 'index'. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.yuimenubar.domenu"></a>

	

