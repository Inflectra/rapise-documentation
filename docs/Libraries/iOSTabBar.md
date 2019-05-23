# iOSTabBar

Extends [iOSObject](iOSObject.md)





**Behavior Pattern: iOSObjectTabBarBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#ItemCount) | Number of items. | GetItemCount |  |
| [SelectedTab](#SelectedTab) | Selected tab name. | GetSelectedTab |  |
| [TabName](#TabName) | Name of the tab at index | GetTabName |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectTab](#DoSelectTab) | Selects the tab by name or index. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemCount"></a>
#### ItemCount


Number of items.

			
	
			
Type: number
			
			
Accessors: GetItemCount
			
		
<a name="SelectedTab"></a>
#### SelectedTab


Selected tab name.

			
	
			
Type: string
			
			
Accessors: GetSelectedTab
			
		
<a name="TabName"></a>
#### TabName


Name of the tab at index

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| index | number | Index of the tab. |


	
			
Type: string
			
			
Accessors: GetTabName
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectTab"></a>    
#### DoSelectTab(tabNameIndex)

Selects the tab by name or index.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabNameIndex | string \| number |	Tab name or index. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iostabbar.doselecttab"></a>

	

