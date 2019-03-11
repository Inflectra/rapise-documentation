# Win32CheckButton

This is generic Win32 check box. Use DoAction to toggle its state.
 
Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="SeSSimulatedObject" styleclass="Normal" translate="true">SeSSimulatedObject</link>.





**Behavior Pattern: Win32CheckBox**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Checked](#Checked) | Check state of the button. | GetChecked | SetChecked |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSetCheck](#DoSetCheck) | Sets check state of the object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Checked"></a>
#### Checked


Check state of the button. 'true' if the button is checked, 'false' otherwise.

			
	
			
Type: boolean
			
			
Accessors: GetChecked, SetChecked
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSetCheck"></a>    
#### DoSetCheck(bcheck)

Sets check state of the object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bcheck | boolean |	Desired check state for the item. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.win32checkbutton.dosetcheck"></a>

	

