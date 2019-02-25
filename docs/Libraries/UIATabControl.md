# UIATabControl

Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="UIAObject" styleclass="Normal" translate="true">UIAObject</link>.

Extends SeSSimulatedObject.





**Behavior Pattern: UIAutomationTabControlBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemsCount](#ItemsCount) | Number of items. | GetItemsCount |  |
| [SelectedIndex](#SelectedIndex) | Index of the selected element of the object. | GetSelectedIndex | SetSelectedIndex |
| [SelectedTab](#SelectedTab) | Text of the selected tab | GetSelectedTab | SetSelectedTab |
| [TabName](#TabName) | Name of the tab at index | GetTabName |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectTab](#DoSelectTab) | Selects the tab by name. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemsCount"></a>
#### ItemsCount


Number of items.

			
	
			
Type: number
			
			
Accessors: GetItemsCount
			
		
<a name="SelectedIndex"></a>
#### SelectedIndex


Index of the selected element of the object.

			
	
			
Type: number
			
			
Accessors: GetSelectedIndex, SetSelectedIndex
			
		
<a name="SelectedTab"></a>
#### SelectedTab


Text of the selected tab

			
	
			
Type: string
			
			
Accessors: GetSelectedTab, SetSelectedTab
			
		
<a name="TabName"></a>
#### TabName


Name of the tab at index

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| index | number |  |


	
			
Type: string
			
			
Accessors: GetTabName
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectTab"></a>    
#### DoSelectTab(tabName)

Selects the tab by name.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |	Tab name to select |




**Returns:**

boolean: 'true' if success, 'false' otherwise.




	

