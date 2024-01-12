Summary: YUI Menu.

# YUIMenu

YUI Menu.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: YUIMenuBehavior**


<!-- ============================== property summary ========================== -->

  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoFindChild](#dofindchild) | Searches for specific item in the menu. |
|  [DoMenu](#domenu) | Performs click on the menu item. |
|  [DoTitleMenu](#dotitlemenu) | Clicks menu title item. |




<!-- ============================== property detail ========================== -->
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoFindChild"></a>    
#### DoFindChild

Searches for specific item in the menu.

```javascript
SeS('SomeYUIMenu').DoFindChild(path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |  Path type. Can be one of 'name', 'index'. |




**Returns:**

[HTMLObject](HTMLObject.md): HTMLObject of the found node



<a name="see.also.yuimenu.dofindchild"></a>

<a name="DoMenu"></a>    
#### DoMenu

Performs click on the menu item.

```javascript
SeS('SomeYUIMenu').DoMenu(path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |  Path type. Can be one of 'name', 'index'. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.yuimenu.domenu"></a>

<a name="DoTitleMenu"></a>    
#### DoTitleMenu

Clicks menu title item. Only 1 menu level currently supported.

```javascript
SeS('SomeYUIMenu').DoTitleMenu(path, separator, pathType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| pathType | string |  Path type. Can be one of 'name', 'index'. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.yuimenu.dotitlemenu"></a>

  

