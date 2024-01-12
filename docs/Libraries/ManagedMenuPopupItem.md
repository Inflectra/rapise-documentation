Summary: Managed MenuPopupItem.

# ManagedMenuPopupItem

Managed MenuPopupItem.
 
UI element class: System.Windows.Forms.ToolStripDropDown

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: ManagedMenuItemBehavior**


<!-- ============================== property summary ========================== -->

  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoFullText](#dofulltext) | Returns text representation of the menu or saves it to a file. |
|  [DoMenu](#domenu) | Performs click on the menu item. |




<!-- ============================== property detail ========================== -->
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoFullText"></a>    
#### DoFullText

Returns text representation of the menu or saves it to a file.

```javascript
SeS('SomeManagedMenuPopupItem').DoFullText(separator, filePath, append, includeSeparators)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| filePath | string |  Name of a file that should hold text representation of the menu. |
| append | boolean |  If 'false' then file should be overwritten, if 'true' then data should be appended.<br>Optional, Default: "false". |
| includeSeparators | boolean |  If 'true' then menu separators are included to the result.<br>Optional, Default: "false". |




**Returns:**

number | <br>boolean: Text representation of the menu, 'true' if the file was successfully written, 'false' otherwise.



<a name="see.also.managedmenupopupitem.dofulltext"></a>

<a name="DoMenu"></a>    
#### DoMenu

Performs click on the menu item.

```javascript
SeS('SomeManagedMenuPopupItem').DoMenu(path, separator)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedmenupopupitem.domenu"></a>

  

