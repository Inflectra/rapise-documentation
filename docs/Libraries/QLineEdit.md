Summary: This is Qt single-line text edit box. Use DoSetText to set the value of the edit box and GetText to read current value.

# QLineEdit

This is Qt single-line text edit box. Use DoSetText to set the value of the edit box and GetText to read current value.
 
Extends [QWidget](QWidget.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: QtTextEditableBehavior**


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
DoSetText(val) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |	Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.qlineedit.dosettext"></a>

	

