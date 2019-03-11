# ManagedMenuStrip

Managed MenuStrip.
 
Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="ManagedObject" styleclass="Normal" translate="true">ManagedObject</link>.

Extends SeSSimulatedObject.





**Behavior Pattern: ManagedMenuBehavior**


<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickItem](#DoClickItem) | Perform Click on the navigation item |
|	[DoFullText](#DoFullText) | Returns text representation of the menu or saves it to a file. |
|	[DoGetSubmenuCount](#DoGetSubmenuCount) | Gets the number of submenu items for a given menu path. |
|	[DoGetSubmenuProperty](#DoGetSubmenuProperty) | Gets submenu property. |
|	[DoGetSubmenuText](#DoGetSubmenuText) | Gets submenu text. |
|	[DoMenu](#DoMenu) | Performs click on the menu item. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickItem"></a>    
#### DoClickItem(menuItemName)

Perform Click on the navigation item


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| menuItemName | string |	Name of MenuStip's item to click |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedmenustrip.doclickitem"></a>

<a name="DoFullText"></a>    
#### DoFullText(separator, filePath, append, includeSeparators)

Returns text representation of the menu or saves it to a file.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| filePath | string |	Name of a file that should hold text representation of the menu. |
| append | boolean |	If 'false' then file should be overwritten, if 'true' then data should be appended.<br>Optional, Default: false. |
| includeSeparators | boolean |	If 'true' then menu separators are included to the result.<br>Optional, Default: false. |




**Returns:**

number | <br>boolean: Text representation of the menu, 'true' if the file was successfully written, 'false' otherwise.



<a name="see.also.managedmenustrip.dofulltext"></a>

<a name="DoGetSubmenuCount"></a>    
#### DoGetSubmenuCount(path, separator)

Gets the number of submenu items for a given menu path.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |	Separator character.<br>Optional, Default: ;. |




**Returns:**

number | <br>boolean: Number of submenu items, 'false' otherwise.



<a name="see.also.managedmenustrip.dogetsubmenucount"></a>

<a name="DoGetSubmenuProperty"></a>    
#### DoGetSubmenuProperty(path, index, property, separator)

Gets submenu property.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path from the menu root to a leaf item with components delimited by separator parameter. |
| index | number |	Index of the submenu. |
| property | string |	Name of a property. Available properties can be seen in Java Spy. |
| separator | string |	Separator character.<br>Optional, Default: ;. |




**Returns:**

string | <br>boolean: Submenu property, 'false' otherwise.



<a name="see.also.managedmenustrip.dogetsubmenuproperty"></a>

<a name="DoGetSubmenuText"></a>    
#### DoGetSubmenuText(path, index, separator)

Gets submenu text.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path from the menu root to a leaf item with components delimited by separator parameter. |
| index | number |	Index of the submenu. |
| separator | string |	Separator character.<br>Optional, Default: ;. |




**Returns:**

string | <br>boolean: Submenu text, 'false' otherwise.



<a name="see.also.managedmenustrip.dogetsubmenutext"></a>

<a name="DoMenu"></a>    
#### DoMenu(path, separator)

Performs click on the menu item.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |	Separator character.<br>Optional, Default: ;. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedmenustrip.domenu"></a>

	

