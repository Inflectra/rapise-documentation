Summary: This behavior pattern implements standard behavior for Ribbon control.

# SyncfusionRibbon

This behavior pattern implements standard behavior for Ribbon control.
 
UI element class: Syncfusion.Windows.Forms.Tools.RibbonControlAdv

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: SyncfusionRibbonBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [SelectedTab](#SelectedTab) | Text of the selected tab | GetSelectedTab | SetSelectedTab |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickItem](#DoClickItem) | Performs click on the ribbon item given by caption or tooltip text |
|	[DoSelectTab](#DoSelectTab) | Selects the tab by name. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="SelectedTab"></a>
#### SelectedTab


Text of the selected tab

			
	
			
Type: string
			
			
Accessors: GetSelectedTab, SetSelectedTab
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickItem"></a>    
#### DoClickItem(captionOrTooltip)

Performs click on the ribbon item given by caption or tooltip text


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| captionOrTooltip | string \| number |	caption or tooltip text of the item to click. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.syncfusionribbon.doclickitem"></a>

<a name="DoSelectTab"></a>    
#### DoSelectTab(tabName)

Selects the tab by name.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |	Tab name to select |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.syncfusionribbon.doselecttab"></a>

	

