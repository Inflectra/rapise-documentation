Summary: ComCtl TreeView20 Control

# MSComCtlTreeView20

ComCtl TreeView20 Control
 
Extends [ActiveXObject](ActiveXObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: MSComCtlTreeView20Behavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Checked](#checked) | Checked state of the selected node or a node specified by the input parameters. | GetChecked |  |
| [ChildrenCount](#childrencount) | Number of children of the selected node or a node specified by the input parameters. | GetChildrenCount |  |
| [Expanded](#expanded) | Expanded state of the selected node or a node specified by the input parameters. | GetExpanded |  |
| [IndexPath](#indexpath) | Index path of the specified or selected tree node i.e. | GetIndexPath |  |
| [NodeText](#nodetext) | Text of the selected node or a node specified by the input parameters. | GetNodeText |  |
| [Selected](#selected) | Selected state of the selected node or a node specified by the input parameters | GetSelected |  |
| [Text](#text) | ;-combined text of all selected nodes. | GetText |  |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickNode](#doclicknode) | Clicks specific node in the tree. |
|  [DoCollapse](#docollapse) | Collapses specific node in the tree. |
|  [DoExpand](#doexpand) | Expands specific node in the tree. |
|  [DoSetCheck](#dosetcheck) | Set 'checked' state of the specified node |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
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
    
<a name="DoClickNode"></a>    
#### DoClickNode

Clicks specific node in the tree.

```javascript
SeS('SomeMSComCtlTreeView20').DoClickNode(path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path of the node |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |  Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.mscomctltreeview20.doclicknode"></a>

<a name="DoCollapse"></a>    
#### DoCollapse

Collapses specific node in the tree.

```javascript
SeS('SomeMSComCtlTreeView20').DoCollapse(path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path of the node |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |  Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.mscomctltreeview20.docollapse"></a>

<a name="DoExpand"></a>    
#### DoExpand

Expands specific node in the tree.

```javascript
SeS('SomeMSComCtlTreeView20').DoExpand(path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path of the node |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |  Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.mscomctltreeview20.doexpand"></a>

<a name="DoSetCheck"></a>    
#### DoSetCheck

Set 'checked' state of the specified node

```javascript
SeS('SomeMSComCtlTreeView20').DoSetCheck(bcheck, path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bcheck | boolean |  Check state to set |
| path | string |  Path of the node |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |  Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.mscomctltreeview20.dosetcheck"></a>

  

