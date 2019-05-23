# DomDynamicsNAVEdit

This behavior pattern implements standard behavior for Edit control.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DomDynamicsNAVEditBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Text](#Text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClick](#DoClick) | Clicks on the edit field. |
|	[DoOpen](#DoOpen) | Opens lookup table for this edit field. |
|	[DoSetText](#DoSetText) | Sets text value of this object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Text"></a>
#### Text


Text of the object, 'false' if text can not be read.

			
	
			
Type: string
			
			
Accessors: GetText, SetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClick"></a>    
#### DoClick(x, y, forceEvent)

Clicks on the edit field.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	X coordinate to click.<br>Optional. |
| y | number |	Y coordinate to click.<br>Optional. |
| forceEvent | boolean |	Pass 'true' to force browser event without actual mouse click<br>Optional, Default: false. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise'



<a name="see.also.domdynamicsnavedit.doclick"></a>

<a name="DoOpen"></a>    
#### DoOpen(x, y, forceEvent)

Opens lookup table for this edit field.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	X coordinate to click.<br>Optional. |
| y | number |	Y coordinate to click.<br>Optional. |
| forceEvent | boolean |	Pass 'true' to force browser event without actual mouse click<br>Optional, Default: false. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.domdynamicsnavedit.doopen"></a>

<a name="DoSetText"></a>    
#### DoSetText()

Sets text value of this object.




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.domdynamicsnavedit.dosettext"></a>

	

