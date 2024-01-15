Summary: YUI MenuBar.

# YUIMenuBar

YUI MenuBar.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: YUIMenuBarBehavior**


<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoFindChild](#dofindchild) | Searches for specific item in the menu. |
|  [DoMenu](#domenu) | Performs click on the menu item. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoFindChild"></a>    
#### DoFindChild

Searches for specific item in the menu.

```javascript
SeS('SomeYUIMenuBar').DoFindChild(path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |  Path type. Can be one of 'name', 'index'. |




**Returns:**

[HTMLObject](HTMLObject.md): HTMLObject of the found node



<a name="see.also.yuimenubar.dofindchild"></a>

<a name="DoMenu"></a>    
#### DoMenu

Performs click on the menu item.

```javascript
SeS('SomeYUIMenuBar').DoMenu(path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |  Path type. Can be one of 'name', 'index'. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.yuimenubar.domenu"></a>

  

