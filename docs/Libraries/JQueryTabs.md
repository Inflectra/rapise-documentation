Summary: jQuery-UI JQuery Tabs.

# JQueryTabs

jQuery-UI JQuery Tabs.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: JQueryTabsBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemsCount](#itemscount) | Gets the number of tabs | GetItemsCount |  |
| [SelectedIndex](#selectedindex) | Gets the index of the selected tab | GetSelectedIndex |  |
| [SelectedTab](#selectedtab) | Gets the text of the selected tab | GetSelectedTab |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectTab](#doselecttab) | Selects a specific tab of the tab control. |




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
#### DoSelectTab

Selects a specific tab of the tab control.

```javascript
DoSelectTab(tabName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |	The name of the tab to select |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.jquerytabs.doselecttab"></a>

	

