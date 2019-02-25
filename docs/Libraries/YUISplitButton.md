# YUISplitButton

Standard YUI SplitButton.
 
Extends HTMLObject.

Extends SeSSimulatedObject.





**Behavior Pattern: YUISplitButtonBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Active](#Active) | Active state of the button. | GetActive |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClick](#DoClick) | Clicks the button. |
|	[DoMenu](#DoMenu) | Clicks menu of the split button. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Active"></a>
#### Active


Active state of the button. If the button is active it is highlightedin YUI. Usually to make an object Active user needs to move mouseover the object.

			
	
			
Type: Boolean
			
			
Accessors: GetActive
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClick"></a>    
#### DoClick(x, y)

Clicks the button.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	x coordinate to click<br>Optional. |
| y | number |	y coordinate to click<br>Optional. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise




<a name="DoMenu"></a>    
#### DoMenu()

Clicks menu of the split button.




**Returns:**

boolean: 'true' if successful, 'false' otherwise




	

