Summary: Java Swing Menu Bar.

# JavaSwingMenuBar

Java Swing Menu Bar.
 
UI element class: javax.swing.JMenuBar

Extends [JavaObject](JavaObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: JavaSwingObjectMenuBarBehavior**


<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoFullText](#dofulltext) | Returns text representation of the menu or saves it to a file. |
|	[DoGetSubmenuCount](#dogetsubmenucount) | Gets the number of submenu items for a given menu path. |
|	[DoGetSubmenuProperty](#dogetsubmenuproperty) | Gets submenu property. |
|	[DoGetSubmenuText](#dogetsubmenutext) | Gets submenu text. |
|	[DoMenu](#domenu) | Performs click on the menu item. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoFullText"></a>    
#### DoFullText

Returns text representation of the menu or saves it to a file.

```javascript
DoFullText(separator, filePath, append, includeSeparators) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| filePath | string |	Name of a file that should hold text representation of the menu. |
| append | boolean |	If 'false' then file should be overwritten, if 'true' then data should be appended.<br>Optional, Default: false. |
| includeSeparators | boolean |	If 'true' then menu separators are included to the result.<br>Optional, Default: false. |




**Returns:**

number | <br>boolean: Text representation of the menu, 'true' if the file was successfully written, 'false' otherwise.



<a name="see.also.javaswingmenubar.dofulltext"></a>

<a name="DoGetSubmenuCount"></a>    
#### DoGetSubmenuCount

Gets the number of submenu items for a given menu path.

```javascript
DoGetSubmenuCount(path, separator) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |	Separator character.<br>Optional, Default: ;. |




**Returns:**

number | <br>boolean: Number of submenu items, 'false' otherwise.



<a name="see.also.javaswingmenubar.dogetsubmenucount"></a>

<a name="DoGetSubmenuProperty"></a>    
#### DoGetSubmenuProperty

Gets submenu property.

```javascript
DoGetSubmenuProperty(path, index, property, separator) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path from the menu root to a leaf item with components delimited by separator parameter. |
| index | number |	Index of the submenu. |
| property | string |	Name of a property. Available properties can be seen in Java Spy. |
| separator | string |	Separator character.<br>Optional, Default: ;. |




**Returns:**

string | <br>boolean: Submenu property, 'false' otherwise.



<a name="see.also.javaswingmenubar.dogetsubmenuproperty"></a>

<a name="DoGetSubmenuText"></a>    
#### DoGetSubmenuText

Gets submenu text.

```javascript
DoGetSubmenuText(path, index, separator) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path from the menu root to a leaf item with components delimited by separator parameter. |
| index | number |	Index of the submenu. |
| separator | string |	Separator character.<br>Optional, Default: ;. |




**Returns:**

string | <br>boolean: Submenu text, 'false' otherwise.



<a name="see.also.javaswingmenubar.dogetsubmenutext"></a>

<a name="DoMenu"></a>    
#### DoMenu

Performs click on the menu item.

```javascript
DoMenu(path, separator) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |	Separator character.<br>Optional, Default: ;. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.javaswingmenubar.domenu"></a>

	

