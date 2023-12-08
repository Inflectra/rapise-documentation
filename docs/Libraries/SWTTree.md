Summary: Java SWT Tree.

# SWTTree

Java SWT Tree.
 
Extends [SWTObject](SWTObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: SWTTreeBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Checked](#checked) | Checked state of the selected node or a node specified by the input parameters. | GetChecked | SetChecked |
| [ChildrenCount](#childrencount) | Number of children of the selected node or a node specified by the input parameters. | GetChildrenCount | SetChildrenCount |
| [Expanded](#expanded) | Expanded state of the selected node or a node specified by the input parameters. | GetExpanded | SetExpanded |
| [NodeText](#nodetext) | Text of the selected node or a node specified by the input parameters. | GetNodeText | SetNodeText |
| [Selected](#selected) | Selected state of the selected node or a node specified by the input parameters | GetSelected | SetSelected |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoCollapse](#docollapse) | Collapses specific node in the tree. |
|	[DoExpand](#doexpand) | Expands a specific node in the tree. |
|	[DoSelectItem](#doselectitem) | Selects specified item in the tree. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Checked"></a>
#### Checked


Checked state of the selected node or a node specified by the input parameters.

			
	
			
Type: boolean
			
			
Accessors: GetChecked, SetChecked
			
		
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
			
			
Accessors: GetChildrenCount, SetChildrenCount
			
		
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
			
		
<a name="NodeText"></a>
#### NodeText


Text of the selected node or a node specified by the input parameters.

			
	
			
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
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
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



<a name="see.also.swttree.docollapse"></a>

<a name="DoExpand"></a>    
#### DoExpand

Expands a specific node in the tree.

```javascript
DoExpand(node) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| node | string |	Name of the node |




**Returns:**

boolean: 'true' if successful, 'false' otherwise.



<a name="see.also.swttree.doexpand"></a>

<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects specified item in the tree.

```javascript
DoSelectItem(value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	Item to select |




**Returns:**

boolean: 'true' if successful, 'false' otherwise.



<a name="see.also.swttree.doselectitem"></a>

	

