Summary: Telerik RadDropDownButton.

# TelerikRadDropDownButton

Telerik RadDropDownButton.
 
UI element class: Telerik.WinControls.UI.RadDropDownButton

Extends [ManagedButton](ManagedButton.md)

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
SeS('SomeTelerikRadDropDownButton').DoMenu(path, separator)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.telerikraddropdownbutton.domenu"></a>

  

