Summary: GWT Tree.

# GWTTree

GWT Tree.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: GWTTreeBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ChildrenCount](#childrencount) | Children count of the current node in the tree. | GetChildrenCount |  |
| [Expanded](#expanded) | Expanded state of the current node. | GetExpanded |  |
| [NodeIndex](#nodeindex) | Zero based index of the current node. | GetNodeIndex |  |
| [NodeText](#nodetext) | Text of the current node. | GetNodeText |  |
| [Selected](#selected) | Selected state of the current node. | GetSelected |  |
| [SelectedNodeText](#selectednodetext) | Text of the selected node. | GetSelectedNodeText |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickNode](#doclicknode) | Clicks specific node in the tree. |
|	[DoCollapse](#docollapse) | Collapses specific node in the tree. |
|	[DoExpand](#doexpand) | Expands specific node in the tree. |
|	[DoFindChild](#dofindchild) | Finds child node by its path from the current node and remembers it as the current node. |
|	[DoFindNode](#dofindnode) | Searches for specific node in the tree and remembers it as the current node. |
|	[DoGetPath](#dogetpath) | Returns path to the current node. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ChildrenCount"></a>
#### ChildrenCount


Children count of the current node in the tree.

			
	
			
Type: number
			
			
Accessors: GetChildrenCount
			
		
<a name="Expanded"></a>
#### Expanded


Expanded state of the current node. Use DoFindNode to set current node. 0 - if the node is collapsed, 1 - if the node is expanded, 2 - if the node is a leaf.

			
	
			
Type: number
			
			
Accessors: GetExpanded
			
		
<a name="NodeIndex"></a>
#### NodeIndex


Zero based index of the current node. Use DoFindNode to set current node.

			
	
			
Type: number
			
			
Accessors: GetNodeIndex
			
		
<a name="NodeText"></a>
#### NodeText


Text of the current node. Use DoFindNode to set current node.

			
	
			
Type: string
			
			
Accessors: GetNodeText
			
		
<a name="Selected"></a>
#### Selected


Selected state of the current node. Use DoFindNode to set current node. 'true' if the node is selected, 'false' otherwise.

			
	
			
Type: boolean
			
			
Accessors: GetSelected
			
		
<a name="SelectedNodeText"></a>
#### SelectedNodeText


Text of the selected node.

			
	
			
Type: string
			
			
Accessors: GetSelectedNodeText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickNode"></a>    
#### DoClickNode

Clicks specific node in the tree.

```javascript
DoClickNode(path, separator, pathType) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path of the node |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.gwttree.doclicknode"></a>

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
| separator | string |	Separator character.<br>Optional, Default: ;. |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.gwttree.docollapse"></a>

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
| separator | string |	Separator character.<br>Optional, Default: ;. |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.gwttree.doexpand"></a>

<a name="DoFindChild"></a>    
#### DoFindChild

Finds child node by its path from the current node and remembers it as the current node. If current node is not set then Root node is used.

```javascript
DoFindChild(path, separator, pathType, expand) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path of the node |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |
| expand | boolean |	is set to true, then found node is expanded |




**Returns:**

[HTMLObject](HTMLObject.md): HTMLObject of the found node



<a name="see.also.gwttree.dofindchild"></a>

<a name="DoFindNode"></a>    
#### DoFindNode

Searches for specific node in the tree and remembers it as the current node.

```javascript
DoFindNode(path, separator, pathType, expand) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path of the node |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |
| expand | boolean |	is set to true, then found node is expanded |




**Returns:**

[HTMLObject](HTMLObject.md): HTMLObject of the found node



<a name="see.also.gwttree.dofindnode"></a>

<a name="DoGetPath"></a>    
#### DoGetPath

Returns path to the current node.

```javascript
DoGetPath(pathType, separator) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| pathType | string |	Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name. |
| separator | string |	Separator character.<br>Optional, Default: ;. |




**Returns:**

string: Path to the current node



<a name="see.also.gwttree.dogetpath"></a>

	

