Summary: UI element class: Infragistics.Win.UltraWinToolbars.UltraToolbarsDockArea

# UltraRibbon

UI element class: Infragistics.Win.UltraWinToolbars.UltraToolbarsDockArea

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: UltraRibbonControlBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [DropdownCount](#DropdownCount) | NUmber of dropdown controls. | GetDropdownCount |  |
| [ItemValue](#ItemValue) | Value of an item. | GetItemValue |  |
| [ToggleState](#ToggleState) | Toggle state of a button | GetToggleState |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickApplicationButton](#DoClickApplicationButton) | Clicks an application button on the ribbon. |
|	[DoClickItem](#DoClickItem) | Clicks on an item on the ribbon. |
|	[DoClickTab](#DoClickTab) | Clicks on a tab in the ribbon. |
|	[DoItemDropSelect](#DoItemDropSelect) | Clicks specific item in the drop control. |
|	[DoMenu](#DoMenu) | Performs click on the menu item. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="DropdownCount"></a>
#### DropdownCount


NUmber of dropdown controls.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| caption | string | Name of a dropdown. |


	
			
Type: number
			
			
Accessors: GetDropdownCount
			
		
<a name="ItemValue"></a>
#### ItemValue


Value of an item.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| caption | string | Name of an item. |


	
			
Type: string|number|boolean
			
			
Accessors: GetItemValue
			
		
<a name="ToggleState"></a>
#### ToggleState


Toggle state of a button

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| caption | string | Name of a button. |


	
			
Type: boolean
			
			
Accessors: GetToggleState
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickApplicationButton"></a>    
#### DoClickApplicationButton(xOffset, yOffset)

Clicks an application button on the ribbon.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xOffset | number |	X offset to click within object. Default is a center.<br>Optional. |
| yOffset | number |	Y offset to click within object. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultraribbon.doclickapplicationbutton"></a>

<a name="DoClickItem"></a>    
#### DoClickItem(caption, xOffset, yOffset)

Clicks on an item on the ribbon.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |	Caption of an item to click. |
| xOffset | number |	X offset to click within object. Default is a center.<br>Optional. |
| yOffset | number |	Y offset to click within object. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultraribbon.doclickitem"></a>

<a name="DoClickTab"></a>    
#### DoClickTab(caption, xOffset, yOffset)

Clicks on a tab in the ribbon.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |	Caption of a tab to click. |
| xOffset | number |	X offset to click within object. Default is a center.<br>Optional. |
| yOffset | number |	Y offset to click within object. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultraribbon.doclicktab"></a>

<a name="DoItemDropSelect"></a>    
#### DoItemDropSelect(caption, item)

Clicks specific item in the drop control.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |	Caption of the drop control. |
| item | string |	Item to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultraribbon.doitemdropselect"></a>

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



<a name="see.also.ultraribbon.domenu"></a>

	

