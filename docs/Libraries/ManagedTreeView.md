Summary: Managed TreeView.

# ManagedTreeView

Managed TreeView.
 
UI element class: System.Windows.Forms.TreeView

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: ManagedObjectTreeViewBehavior**


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

```javascript
value = SeS('SomeManagedTreeView').GetChecked(path, separator, pathType)
```


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

```javascript
value = SeS('SomeManagedTreeView').GetChildrenCount(path, separator, pathType)
```


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

```javascript
value = SeS('SomeManagedTreeView').GetExpanded(path, separator, pathType)
```


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

```javascript
value = SeS('SomeManagedTreeView').GetIndexPath(path, separator, pathType)
```


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

```javascript
value = SeS('SomeManagedTreeView').GetNodeText(path, separator, pathType)
```


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

```javascript
value = SeS('SomeManagedTreeView').GetSelected(path, separator, pathType)
```


<a name="Text"></a>
#### Text

;-combined text of all selected nodes.



Type: string


Accessors: GetText

```javascript
value = SeS('SomeManagedTreeView').GetText()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClickNode"></a>    
#### DoClickNode

Clicks specific node in the tree.

```javascript
SeS('SomeManagedTreeView').DoClickNode(path, separator, pathType, xOffset, yOffset)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path of the node |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |  Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |
| xOffset | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| yOffset | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedtreeview.doclicknode"></a>

<a name="DoCollapse"></a>    
#### DoCollapse

Collapses specific node in the tree.

```javascript
SeS('SomeManagedTreeView').DoCollapse(path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path of the node |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |  Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedtreeview.docollapse"></a>

<a name="DoExpand"></a>    
#### DoExpand

Expands specific node in the tree.

```javascript
SeS('SomeManagedTreeView').DoExpand(path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path of the node |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |  Path type. Can be one of 'name', 'id' or 'index'. Possible values: "name", "index", "id"<br>Optional, Default: "name". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedtreeview.doexpand"></a>

<a name="DoSetCheck"></a>    
#### DoSetCheck

Set 'checked' state of the specified node

```javascript
SeS('SomeManagedTreeView').DoSetCheck(bcheck, path, separator, pathType)
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



<a name="see.also.managedtreeview.dosetcheck"></a>

  

