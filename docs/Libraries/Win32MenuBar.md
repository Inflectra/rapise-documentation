Summary: This is generic WIn32 menu bar (e.g. main menu of the application). Use DoClickItem to click a particular item from the menu and DoMenu to choose a menu item at the specified path.

# Win32MenuBar

This is generic WIn32 menu bar (e.g. main menu of the application). Use DoClickItem to click a particular item from the menu and DoMenu to choose a menu item at the specified path.
 
Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: Win32ItemClickable**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#itemcount) | Number of items. | GetItemCount |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickItem](#doclickitem) | Performs click on an item of this object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemCount"></a>
#### ItemCount


Number of items.

			
	
			
Type: number
			
			
Accessors: GetItemCount
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickItem"></a>    
#### DoClickItem

Performs click on an item of this object.

```javascript
DoClickItem(itemName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| itemName | string |	Name of the item to click |




**Returns:**

boolean: 'true' if operation was successful, 'false' otherwise



<a name="see.also.win32menubar.doclickitem"></a>

	




**Behavior Pattern: Win32Menu**


<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoMenu](#domenu) | Performs click on the menu item. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoMenu"></a>    
#### DoMenu

Performs click on the menu item.

```javascript
DoMenu(path, sep) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path from the menu root to a leaf item with components delimited by separator parameter. |
| sep | string |	Separator character.<br>Optional, Default: ;. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.win32menubar.domenu"></a>

	

