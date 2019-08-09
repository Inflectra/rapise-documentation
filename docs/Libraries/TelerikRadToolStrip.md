Summary: Telerik RadToolStrip.

# TelerikRadToolStrip

Telerik RadToolStrip.
 
UI element class: Telerik.WinControls.UI.RadToolStrip

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: TelerikRadToolStripBehavior**


<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickItem](#DoClickItem) | Clicks on an item on the ribbon. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickItem"></a>    
#### DoClickItem(caption, clickType, xOffset, yOffset)

Clicks on an item on the ribbon.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |	Caption of an item to click. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L. |
| xOffset | number |	X offset to click within object. Default is a center.<br>Optional. |
| yOffset | number |	Y offset to click within object. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.telerikradtoolstrip.doclickitem"></a>

	

