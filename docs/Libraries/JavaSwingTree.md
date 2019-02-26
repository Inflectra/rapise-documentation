# JavaSwingTree

Java Swing Tree.
 
Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="JavaObject" styleclass="Normal" translate="true">JavaObject</link>.

Extends SeSSimulatedObject.





**Behavior Pattern: JavaSwingObjectTreeBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ChildrenCount](#ChildrenCount) | Number of children of the selected node or a node specified by the input parameters. | GetChildrenCount |  |
| [Expanded](#Expanded) | Expanded state of the selected node or a node specified by the input parameters. | GetExpanded |  |
| [IndexPath](#IndexPath) | Index path of the specified or selected tree node i.e. | GetIndexPath |  |
| [NodeText](#NodeText) | Text of the selected node or a node specified by the input parameters. | GetNodeText |  |
| [Selected](#Selected) | Selected state of the selected node or a node specified by the input parameters | GetSelected |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickNode](#DoClickNode) | Clicks specific node in the tree. |
|	[DoCollapse](#DoCollapse) | Collapses specific node in the tree. |
|	[DoExpand](#DoExpand) | Expands specific node in the tree. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ChildrenCount"></a>
#### ChildrenCount


Number of children of the selected node or a node specified by the input parameters.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| path | string | Path of the node |
| separator | string | Separator character.<br>Optional, Default: ;. |
| pathType | string | Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |


	
			
Type: string|boolean
			
			
Accessors: GetChildrenCount
			
		
<a name="Expanded"></a>
#### Expanded


Expanded state of the selected node or a node specified by the input parameters.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| path | string | Path of the node |
| separator | string | Separator character.<br>Optional, Default: ;. |
| pathType | string | Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |


	
			
Type: boolean
			
			
Accessors: GetExpanded
			
		
<a name="IndexPath"></a>
#### IndexPath


Index path of the specified or selected tree node i.e. string in form '0;5;2;1;6', 'false' if fails

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| path | string | Path of the node |
| separator | string | Separator character.<br>Optional, Default: ;. |
| pathType | string | Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |


	
			
Type: string|boolean
			
			
Accessors: GetIndexPath
			
		
<a name="NodeText"></a>
#### NodeText


Text of the selected node or a node specified by the input parameters.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| path | string | Path of the node |
| separator | string | Separator character.<br>Optional, Default: ;. |
| pathType | string | Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |


	
			
Type: string|boolean
			
			
Accessors: GetNodeText
			
		
<a name="Selected"></a>
#### Selected


Selected state of the selected node or a node specified by the input parameters

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| path | string | Path of the node |
| separator | string | Separator character.<br>Optional, Default: ;. |
| pathType | string | Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |


	
			
Type: boolean
			
			
Accessors: GetSelected
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickNode"></a>    
#### DoClickNode(path, separator, pathType, clickType, xOffset, yOffset)

Clicks specific node in the tree.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path of the node |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L. |
| xOffset | number |	X offset to click within object. Default is a center.<br>Optional. |
| yOffset | number |	Y offset to click within object. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.




<a name="DoCollapse"></a>    
#### DoCollapse(path, separator, pathType)

Collapses specific node in the tree.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path of the node |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.




<a name="DoExpand"></a>    
#### DoExpand(path, separator, pathType)

Expands specific node in the tree.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path of the node |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.




	

