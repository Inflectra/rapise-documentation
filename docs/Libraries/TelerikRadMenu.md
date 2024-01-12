Summary: Telerik RadMenu.

# TelerikRadMenu

Telerik RadMenu.
 
UI element class: Telerik.WinControls.UI.RadMenu

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: TelerikDropDownButtonBehavior**


<!-- ============================== property summary ========================== -->

  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoMenu](#domenu) | Performs click on the menu item. |




<!-- ============================== property detail ========================== -->
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoMenu"></a>    
#### DoMenu

Performs click on the menu item.

```javascript
SeS('SomeTelerikRadMenu').DoMenu(path, separator)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.telerikradmenu.domenu"></a>

  




**Behavior Pattern: TelerikMenuBehavior**


<!-- ============================== property summary ========================== -->

  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickItem](#doclickitem) | Perform Click on the navigation item |




<!-- ============================== property detail ========================== -->
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoClickItem"></a>    
#### DoClickItem

Perform Click on the navigation item

```javascript
SeS('SomeTelerikRadMenu').DoClickItem(menuItemName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| menuItemName | string |  Menuitem name to click at. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.telerikradmenu.doclickitem"></a>

  

