Summary: JQueryAccordion

# JQueryAccordion

Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: JQueryAccordionBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemsCount](#ItemsCount) | Gets the number of tabs | GetItemsCount |  |
| [SelectedIndex](#SelectedIndex) | Gets the index of the selected tab | GetSelectedIndex |  |
| [SelectedTab](#SelectedTab) | Gets the text of the selected tab | GetSelectedTab |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectTab](#DoSelectTab) | Selects a specific tab of the accordion. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemsCount"></a>
#### ItemsCount


Gets the number of tabs

			
	
			
Type: number
			
			
Accessors: GetItemsCount
			
		
<a name="SelectedIndex"></a>
#### SelectedIndex


Gets the index of the selected tab

			
	
			
Type: number
			
			
Accessors: GetSelectedIndex
			
		
<a name="SelectedTab"></a>
#### SelectedTab


Gets the text of the selected tab

			
	
			
Type: string
			
			
Accessors: GetSelectedTab
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectTab"></a>    
#### DoSelectTab(tabName)

Selects a specific tab of the accordion.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |	The name of the tab to select |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.jqueryaccordion.doselecttab"></a>

	

