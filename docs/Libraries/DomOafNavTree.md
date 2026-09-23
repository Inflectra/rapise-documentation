Summary: This behavior pattern implements standard behavior for Oracle Application Framework (OAF) Navigation Tree control.

# DomOafNavTree

This behavior pattern implements standard behavior for Oracle Application Framework (OAF) Navigation Tree control.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DomOafNavTreeBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ChildrenCount](#childrencount) | Number of top-level nodes in the tree. | GetChildrenCount |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickNode](#doclicknode) | Clicks on a tree node to navigate to that functionality. |
|  [DoCollapse](#docollapse) | Collapses a tree node to hide its children. |
|  [DoExpand](#doexpand) | Expands a tree node to show its children. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="ChildrenCount"></a>
#### ChildrenCount

Number of top-level nodes in the tree. Read-only. Returns 0 if the tree has not been loaded yet, this property does not wait for the nodes to appear.



Type: number


Accessors: GetChildrenCount

```javascript
value = SeS('SomeDomOafNavTree').GetChildrenCount()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClickNode"></a>    
#### DoClickNode

Clicks on a tree node to navigate to that functionality.

```javascript
SeS('SomeDomOafNavTree').DoClickNode(path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path to the node. Semicolon-separated string of node names (e.g., 'Parent;Child;Grandchild') or indices (e.g., '0;1;2'). |
| separator | string |  Separator used in the path string. Default is semicolon (;).<br>Optional. |
| pathType | string |  Type of path: 'name' for node text matching (default), 'index' for zero-based indices, 'id' to look the node up anywhere in the tree by a substring of its id. An id matching more than one node is rejected as ambiguous.<br>Optional. |




**Returns:**

boolean: true if the node was clicked successfully, false if the path is empty. Fails with a descriptive message when the path cannot be resolved or the node has no clickable link.



<a name="see.also.domoafnavtree.doclicknode"></a>

<a name="DoCollapse"></a>    
#### DoCollapse

Collapses a tree node to hide its children.

```javascript
SeS('SomeDomOafNavTree').DoCollapse(path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path to the node to collapse. |
| separator | string |  Separator used in the path string. Default is semicolon (;).<br>Optional. |
| pathType | string |  Type of path: 'name' (default), 'index', or 'id'. See ClickNode for details.<br>Optional. |




**Returns:**

boolean: true if the node was found and collapsed, false if the path is empty. Fails with a descriptive message when the path cannot be resolved.



<a name="see.also.domoafnavtree.docollapse"></a>

<a name="DoExpand"></a>    
#### DoExpand

Expands a tree node to show its children.

```javascript
SeS('SomeDomOafNavTree').DoExpand(path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path to the node to expand. |
| separator | string |  Separator used in the path string. Default is semicolon (;).<br>Optional. |
| pathType | string |  Type of path: 'name' (default), 'index', or 'id'. See ClickNode for details.<br>Optional. |




**Returns:**

boolean: true if the node was found and expanded, false if the path is empty. Fails with a descriptive message when the path cannot be resolved.



<a name="see.also.domoafnavtree.doexpand"></a>

  

