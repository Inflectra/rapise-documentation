# UltraTree

Infragistics UltraTree.
 
UI element class: Infragistics.Win.UltraWinTree.UltraTree

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: UltraTreeBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [CellText](#CellText) | Cell text for the cell specified by rowPath and col | GetCellText |  |
| [Checked](#Checked) | Checked state of the selected node or a node specified by the input parameters. | GetChecked |  |
| [ChildrenCount](#ChildrenCount) | Number of children of the selected node or a node specified by the input parameters. | GetChildrenCount |  |
| [Expanded](#Expanded) | Expanded state of the selected node or a node specified by the input parameters. | GetExpanded |  |
| [IndexPath](#IndexPath) | Index path of the specified or selected tree node i.e. | GetIndexPath |  |
| [NodeText](#NodeText) | Text of the selected node or a node specified by the input parameters. | GetNodeText |  |
| [Selected](#Selected) | Selected state of the selected node or a node specified by the input parameters | GetSelected |  |
| [Text](#Text) | ;-combined text of all selected nodes. | GetText |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickCell](#DoClickCell) | Click the cell specified by row name or index and column name or index |
|	[DoClickNode](#DoClickNode) | Clicks specific node in the tree. |
|	[DoCollapse](#DoCollapse) | Collapses specific node in the tree. |
|	[DoExpand](#DoExpand) | Expands specific node in the tree. |
|	[DoSetCheck](#DoSetCheck) | Set 'checked' state of the specified node |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="CellText"></a>
#### CellText


Cell text for the cell specified by rowPath and col

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| rowPath | string \| number | Path of the top level node to select. If integer number is passed then the top level node is searched by index. |
| column | number \| string | Column index or column name. Default is 0<br>Optional. |


	
			
Type: string
			
			
Accessors: GetCellText
			
		
<a name="Checked"></a>
#### Checked


Checked state of the selected node or a node specified by the input parameters.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| path | string | Path of the node |
| separator | string | Separator character.<br>Optional, Default: ;. |
| pathType | string | Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |


	
			
Type: boolean
			
			
Accessors: GetChecked
			
		
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
			
		
<a name="Text"></a>
#### Text


;-combined text of all selected nodes.

			
	
			
Type: string
			
			
Accessors: GetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickCell"></a>    
#### DoClickCell(rowPath, col, clickType, xOffset, yOffset)

Click the cell specified by row name or index and column name or index


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowPath | string \| number |	Path of the top level node to select. If integer number is passed then the top level node is searched by index. |
| col | number \| string |	Column index or column name |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L. |
| xOffset | number |	X offset to click within object. Default is a center.<br>Optional. |
| yOffset | number |	Y offset to click within object. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultratree.doclickcell"></a>

<a name="DoClickNode"></a>    
#### DoClickNode(path, separator, pathType, column, clickType, xOffset, yOffset)

Clicks specific node in the tree.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path of the node |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |
| column | number \| string |	Column index or column name. Default is 0<br>Optional. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L. |
| xOffset | number |	X offset to click within object. Default is a center.<br>Optional. |
| yOffset | number |	Y offset to click within object. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultratree.doclicknode"></a>

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



<a name="see.also.ultratree.docollapse"></a>

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



<a name="see.also.ultratree.doexpand"></a>

<a name="DoSetCheck"></a>    
#### DoSetCheck(bcheck, path, separator, pathType)

Set 'checked' state of the specified node


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bcheck | boolean |	Check state to set |
| path | string |	Path of the node |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultratree.dosetcheck"></a>

	

