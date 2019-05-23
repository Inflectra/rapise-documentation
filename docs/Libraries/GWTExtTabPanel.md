# GWTExtTabPanel

GWT-Ext Tab.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: GWTExtTabPanelBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemsCount](#ItemsCount) | Number of tabs in the panel | GetItemsCount |  |
| [SelectedIndex](#SelectedIndex) | Index of the selected tab | GetSelectedIndex |  |
| [SelectedTab](#SelectedTab) | Text of the selected tab | GetSelectedTab |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectTab](#DoSelectTab) | Selects the tab by name. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemsCount"></a>
#### ItemsCount


Number of tabs in the panel

			
	
			
Type: number
			
			
Accessors: GetItemsCount
			
		
<a name="SelectedIndex"></a>
#### SelectedIndex


Index of the selected tab

			
	
			
Type: number
			
			
Accessors: GetSelectedIndex
			
		
<a name="SelectedTab"></a>
#### SelectedTab


Text of the selected tab

			
	
			
Type: string
			
			
Accessors: GetSelectedTab
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectTab"></a>    
#### DoSelectTab(name, x, y, forceEvent)

Selects the tab by name.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string \| number |	Tab name to select |
| x | number |	X-coordinate of location relative to object's left border |
| y | number |	Y-coordinate of location relative to object's top border |
| forceEvent | boolean |	pass 'true' to force browser event without actual mouse click.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.gwtexttabpanel.doselecttab"></a>

	

