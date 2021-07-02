Summary: This behavior pattern implements standard behavior for TextBox control.

# DomDynamicsAXTextBox

This behavior pattern implements standard behavior for TextBox control.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DomDynamicsAXTextBoxBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSetText](#dosettext) | Sets text value of this object. |




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
#### DoSetText

Sets text value of this object.

```javascript
DoSetText(value, hitEnter) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	Text value. |
| hitEnter | boolean |	Pass 'true' to additionally hit enter after entering the text.<br>Optional, Default: "false". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.domdynamicsaxtextbox.dosettext"></a>

	

