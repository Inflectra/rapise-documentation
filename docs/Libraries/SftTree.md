Summary: This behavior pattern implements standard behavior for Tree control.

# SftTree

This behavior pattern implements standard behavior for Tree control.
 
Extends [ActiveXObject](ActiveXObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: SftTreeBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ChildrenCount](#childrencount) | Number of children of the selected node or a node specified by the input parameters. | GetChildrenCount |  |
| [Expanded](#expanded) | Expanded state of the selected node or a node specified by the input parameters. | GetExpanded | SetExpanded |
| [ItemsCount](#itemscount) | Number of rows in the table. | GetItemsCount |  |
| [Node](#node) | Selected node or a node specified by the input parameters. | GetNode |  |
| [NodeText](#nodetext) | Text of the selected node or a node specified by the input parameters. | GetNodeText | SetNodeText |
| [Selected](#selected) | Selected state of the selected node or a node specified by the input parameters | GetSelected | SetSelected |
| [SiblingsAfter](#siblingsafter) | Number of siblings after the selected node or a node specified by the input parameters. | GetSiblingsAfter |  |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickNode](#doclicknode) | Clicks specific node in the tree. |
|  [DoCollapse](#docollapse) | Collapses specific node in the tree. |
|  [DoExpand](#doexpand) | Expands specific node in the tree. |
|  [DoFullText](#dofulltext) | Returns text representation of the table. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
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
      
      
Accessors: GetExpanded, SetExpanded
      
    
<a name="ItemsCount"></a>
#### ItemsCount


Number of rows in the table.

      
  
      
Type: number
      
      
Accessors: GetItemsCount
      
    
<a name="Node"></a>
#### Node


Selected node or a node specified by the input parameters.

      
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| path | string | Path of the node |
| separator | string | Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string | Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |


  
      
Type: object
      
      
Accessors: GetNode
      
    
<a name="NodeText"></a>
#### NodeText


Text of the selected node or a node specified by the input parameters.

      
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| path | string | Path of the node |
| separator | string | Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string | Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |
| column | number | Zero-based index of a column.<br>Optional, Default: "0". |


  
      
Type: string|boolean
      
      
Accessors: GetNodeText, SetNodeText
      
    
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
      
      
Accessors: GetSelected, SetSelected
      
    
<a name="SiblingsAfter"></a>
#### SiblingsAfter


Number of siblings after the selected node or a node specified by the input parameters.

      
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| path |  |  |
| separator |  |  |
| pathType |  |  |


  
      
Type: number
      
      
Accessors: GetSiblingsAfter
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoClickNode"></a>    
#### DoClickNode

Clicks specific node in the tree.

```javascript
SeS('SomeSftTree').DoClickNode(path, separator, pathType, column, clickType, xOffset, yOffset)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path of the node |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |  Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |
| column | number \| string |  Column index or column name. Default is 0<br>Optional. |
| clickType | string |  Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |
| xOffset | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| yOffset | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.sfttree.doclicknode"></a>

<a name="DoCollapse"></a>    
#### DoCollapse

Collapses specific node in the tree.

```javascript
SeS('SomeSftTree').DoCollapse(path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path of the node |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |  Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.sfttree.docollapse"></a>

<a name="DoExpand"></a>    
#### DoExpand

Expands specific node in the tree.

```javascript
SeS('SomeSftTree').DoExpand(path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path of the node |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |  Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.sfttree.doexpand"></a>

<a name="DoFullText"></a>    
#### DoFullText

Returns text representation of the table.

```javascript
SeS('SomeSftTree').DoFullText(fileName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |  Name of a file that should hold text representation of the grid.<br>Optional. |




**Returns:**

string | <br>boolean: Text representation of the grid, 'true' if the file was successfully written, 'false' otherwise.



<a name="see.also.sfttree.dofulltext"></a>

  

