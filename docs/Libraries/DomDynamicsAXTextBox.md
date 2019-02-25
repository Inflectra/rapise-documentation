# DomDynamicsAXTextBox

This behavior pattern implements standard behavior for TextBox control.
 
Extends HTMLObject.

Extends SeSSimulatedObject.





**Behavior Pattern: DomDynamicsAXTextBoxBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Text](#Text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
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
		
<a name="DoSetText"></a>    
#### DoSetText(value, hitEnter)

Sets text value of this object.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	Text value. |
| hitEnter | boolean |	Pass 'true' to additionaly hit enter after entering the text.<br>Optional, Default: false. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.




	

