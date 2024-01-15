Summary: Managed MenuStrip.

# ManagedMenuStrip

Managed MenuStrip.
 
UI element class: System.Windows.Forms.MenuStrip

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: ManagedMenuBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [IsEnabled](#isenabled) | Checks if given menu item is enabled. | GetIsEnabled |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickItem](#doclickitem) | Perform Click on the navigation item |
|  [DoFullText](#dofulltext) | Returns text representation of the menu or saves it to a file. |
|  [DoGetSubmenuCount](#dogetsubmenucount) | Gets the number of submenu items for a given menu path. |
|  [DoGetSubmenuProperty](#dogetsubmenuproperty) | Gets submenu property. |
|  [DoGetSubmenuText](#dogetsubmenutext) | Gets submenu text. |
|  [DoMenu](#domenu) | Performs click on the menu item. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="IsEnabled"></a>
#### IsEnabled

Checks if given menu item is enabled.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| path | string | Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string | Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |




Type: boolean


Accessors: GetIsEnabled

```javascript
value = SeS('SomeManagedMenuStrip').GetIsEnabled(/**string*/ path, /**string*/ separator)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClickItem"></a>    
#### DoClickItem

Perform Click on the navigation item

```javascript
SeS('SomeManagedMenuStrip').DoClickItem(menuItemName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| menuItemName | string |  Name of MenuStip's item to click |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedmenustrip.doclickitem"></a>

<a name="DoFullText"></a>    
#### DoFullText

Returns text representation of the menu or saves it to a file.

```javascript
SeS('SomeManagedMenuStrip').DoFullText(separator, filePath, append, includeSeparators)
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



<a name="see.also.managedmenustrip.dofulltext"></a>

<a name="DoGetSubmenuCount"></a>    
#### DoGetSubmenuCount

Gets the number of submenu items for a given menu path.

```javascript
SeS('SomeManagedMenuStrip').DoGetSubmenuCount(path, separator)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |




**Returns:**

number | <br>boolean: Number of submenu items, 'false' otherwise.



<a name="see.also.managedmenustrip.dogetsubmenucount"></a>

<a name="DoGetSubmenuProperty"></a>    
#### DoGetSubmenuProperty

Gets submenu property.

```javascript
SeS('SomeManagedMenuStrip').DoGetSubmenuProperty(path, index, property, separator)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| index | number |  Index of the submenu. |
| property | string |  Name of a property. Available properties can be seen in Java Spy. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |




**Returns:**

string | <br>boolean: Submenu property, 'false' otherwise.



<a name="see.also.managedmenustrip.dogetsubmenuproperty"></a>

<a name="DoGetSubmenuText"></a>    
#### DoGetSubmenuText

Gets submenu text.

```javascript
SeS('SomeManagedMenuStrip').DoGetSubmenuText(path, index, separator)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| index | number |  Index of the submenu. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |




**Returns:**

string | <br>boolean: Submenu text, 'false' otherwise.



<a name="see.also.managedmenustrip.dogetsubmenutext"></a>

<a name="DoMenu"></a>    
#### DoMenu

Performs click on the menu item.

```javascript
SeS('SomeManagedMenuStrip').DoMenu(path, separator)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedmenustrip.domenu"></a>

  

