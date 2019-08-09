Summary: This behavior pattern implements standard behavior for TabControl control.

# DomDynamicsAXTabControl

This behavior pattern implements standard behavior for TabControl control.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DomDynamicsAXTabControlBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Expanded](#Expanded) | State of a tab with name. | GetExpanded |  |
| [ItemsCount](#ItemsCount) | Number of tabs. | GetItemsCount |  |
| [TabName](#TabName) | Name of a tab at index | GetTabName |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoCollapse](#DoCollapse) | Collapses specific tab in a tab control. |
|	[DoExpand](#DoExpand) | Expands specific tab in a tab control. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Expanded"></a>
#### Expanded


State of a tab with name. Returns 'true' if the tab is expanded, 'false' - otherwise.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| tabName | string | Name of a tab. |


	
			
Type: boolean
			
			
Accessors: GetExpanded
			
		
<a name="ItemsCount"></a>
#### ItemsCount


Number of tabs.

			
	
			
Type: number
			
			
Accessors: GetItemsCount
			
		
<a name="TabName"></a>
#### TabName


Name of a tab at index

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| index | number | Index of a tab. |


	
			
Type: string
			
			
Accessors: GetTabName
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoCollapse"></a>    
#### DoCollapse(tabName)

Collapses specific tab in a tab control.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |	Name of a tab |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.domdynamicsaxtabcontrol.docollapse"></a>

<a name="DoExpand"></a>    
#### DoExpand(tabName)

Expands specific tab in a tab control.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |	Name of a tab |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.domdynamicsaxtabcontrol.doexpand"></a>

	

