Summary: Behavior patterm for Dynamics NAV fast tabs control.

# DynamicsNAVFastTabs

Behavior patterm for Dynamics NAV fast tabs control.
 
Extends [UIAObject](UIAObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DynamicsNAVFastTabsBehavior**


<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectTab](#doselecttab) | Selects the tab by name. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectTab"></a>    
#### DoSelectTab

Selects the tab by name.

```javascript
DoSelectTab(tabName, toggleAdditionalFields, additionalFieldsButtonName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |	Tab name to select. |
| toggleAdditionalFields | boolean |	Set to `true` to click on `Show more fields` button inside the tab. Supported in Rapise 6.4+.<br>Optional, Default: "false". |
| additionalFieldsButtonName | string |	If `Show more fields` button is named differently in your locale you need to specify it. Supported in Rapise 6.4+.<br>Optional, Default: "Show more fields". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dynamicsnavfasttabs.doselecttab"></a>

	

