Summary: Oracle Forms MenuBar.

# OracleFormsMenuBar

Oracle Forms MenuBar.
 
UI element class: oracle.ewt.lwAWT.lwMenu.LWMenuBar

Extends [OracleFormsObject](OracleFormsObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: OracleFormsMenuBarBehavior**


<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoGetSubmenuProperty](#dogetsubmenuproperty) | Gets submenu property. |
|  [DoMenu](#domenu) | Performs click on the menu item. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoGetSubmenuProperty"></a>    
#### DoGetSubmenuProperty

Gets submenu property.

```javascript
SeS('SomeOracleFormsMenuBar').DoGetSubmenuProperty(path, property, separator)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| property | string |  Name of a property. Available properties can be seen in Java Spy. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |




**Returns:**

string | <br>boolean: Submenu property, 'false' otherwise.



<a name="see.also.oracleformsmenubar.dogetsubmenuproperty"></a>

<a name="DoMenu"></a>    
#### DoMenu

Performs click on the menu item.

```javascript
SeS('SomeOracleFormsMenuBar').DoMenu(path, separator)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.oracleformsmenubar.domenu"></a>

  

