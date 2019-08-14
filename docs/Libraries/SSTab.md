Summary: SSTab

# SSTab

Extends [ActiveXObject](ActiveXObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: SSTabBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [SelectedTab](#SelectedTab) | Text of the selected tab | GetSelectedTab |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectTab](#DoSelectTab) | Selects the tab by name. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="SelectedTab"></a>
#### SelectedTab


Text of the selected tab

			
	
			
Type: string
			
			
Accessors: GetSelectedTab
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectTab"></a>    
#### DoSelectTab(tabName, clickType)

Selects the tab by name.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |	Tab name to select |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.sstab.doselecttab"></a>

	

