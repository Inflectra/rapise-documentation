Summary: Infragistics UltraTree.

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
| [CellText](#celltext) | Cell text for the cell specified by rowPath and col | GetCellText |  |
| [Checked](#checked) | Checked state of the selected node or a node specified by the input parameters. | GetChecked |  |
| [ChildrenCount](#childrencount) | Number of children of the selected node or a node specified by the input parameters. | GetChildrenCount |  |
| [Expanded](#expanded) | Expanded state of the selected node or a node specified by the input parameters. | GetExpanded |  |
| [IndexPath](#indexpath) | Index path of the specified or selected tree node i.e. | GetIndexPath |  |
| [NodeElement](#nodeelement) |  | GetNodeElement |  |
| [NodeText](#nodetext) | Text of the selected node or a node specified by the input parameters. | GetNodeText |  |
| [Selected](#selected) | Selected state of the selected node or a node specified by the input parameters | GetSelected |  |
| [Text](#text) | ;-combined text of all selected nodes. | GetText |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickCell](#doclickcell) | Click the cell specified by row name or index and column name or index |
|	[DoClickNode](#doclicknode) | Clicks specific node in the tree. |
|	[DoCollapse](#docollapse) | Collapses specific node in the tree. |
|	[DoExpand](#doexpand) | Expands specific node in the tree. |
|	[DoSetCheck](#dosetcheck) | Set 'checked' state of the specified node |




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
| separator | string | Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string | Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |


	
			
Type: boolean
			
			
Accessors: GetChecked
			
		
<a name="ChildrenCount"></a>
#### ChildrenCount


Number of children of the selected node or a node specified by the input parameters.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| path | string | Path of the node |
| separator | string | Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string | Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |


	
			
Type: string|boolean
			
			
Accessors: GetChildrenCount
			
		
<a name="Expanded"></a>
#### Expanded


Expanded state of the selected node or a node specified by the input parameters.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| path | string | Path of the node |
| separator | string | Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string | Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |


	
			
Type: boolean
			
			
Accessors: GetExpanded
			
		
<a name="IndexPath"></a>
#### IndexPath


Index path of the specified or selected tree node i.e. string in form '0;5;2;1;6', 'false' if fails

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| path | string | Path of the node |
| separator | string | Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string | Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |


	
			
Type: string|boolean
			
			
Accessors: GetIndexPath
			
		
<a name="NodeElement"></a>
#### NodeElement




			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| separator | string | Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string | Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |
| column | number \| string | Column index or column name. Default is 0<br>Optional. |


	
			
Type: undefined @param {string|number} path Path of the top level node to select. If integer number is passed then the top level node is searched by index.
			
			
Accessors: GetNodeElement
			
		
<a name="NodeText"></a>
#### NodeText


Text of the selected node or a node specified by the input parameters.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| path | string | Path of the node |
| separator | string | Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string | Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |


	
			
Type: string|boolean
			
			
Accessors: GetNodeText
			
		
<a name="Selected"></a>
#### Selected


Selected state of the selected node or a node specified by the input parameters

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| path | string | Path of the node |
| separator | string | Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string | Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |


	
			
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
#### DoClickCell

Click the cell specified by row name or index and column name or index

```javascript
DoClickCell(rowPath, col, clickType, xOffset, yOffset) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowPath | string \| number |	Path of the top level node to select. If integer number is passed then the top level node is searched by index. |
| col | number \| string |	Column index or column name |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |
| xOffset | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| yOffset | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultratree.doclickcell"></a>

<a name="DoClickNode"></a>    
#### DoClickNode

Clicks specific node in the tree.

```javascript
DoClickNode(path, separator, pathType, column, clickType, xOffset, yOffset) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path of the node |
| separator | string |	Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |
| column | number \| string |	Column index or column name. Default is 0<br>Optional. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |
| xOffset | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| yOffset | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultratree.doclicknode"></a>

<a name="DoCollapse"></a>    
#### DoCollapse

Collapses specific node in the tree.

```javascript
DoCollapse(path, separator, pathType) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path of the node |
| separator | string |	Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultratree.docollapse"></a>

<a name="DoExpand"></a>    
#### DoExpand

Expands specific node in the tree.

```javascript
DoExpand(path, separator, pathType) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path of the node |
| separator | string |	Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultratree.doexpand"></a>

<a name="DoSetCheck"></a>    
#### DoSetCheck

Set 'checked' state of the specified node

```javascript
DoSetCheck(bcheck, path, separator, pathType) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bcheck | boolean |	Check state to set |
| path | string |	Path of the node |
| separator | string |	Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultratree.dosetcheck"></a>

	

