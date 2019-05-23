# QDateTimeEdit

This is Qt masked date edit box. Use DoSetDateTime to set the time value of the edit box and GetText to read current value.
 
Extends [QWidget](QWidget.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: QtDateTimeBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Text](#Text) | Text of the object, 'false' if text can not be read. | GetText |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSetDate](#DoSetDate) | Sets the date value of this object. |
|	[DoSetDateTime](#DoSetDateTime) | Sets the date/time value of this object. |
|	[DoSetTime](#DoSetTime) | Sets the time value of this object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Text"></a>
#### Text


Text of the object, 'false' if text can not be read.

			
	
			
Type: string
			
			
Accessors: GetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSetDate"></a>    
#### DoSetDate(value)

Sets the date value of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	Date value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.qdatetimeedit.dosetdate"></a>

<a name="DoSetDateTime"></a>    
#### DoSetDateTime(value)

Sets the date/time value of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	Date/time value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.qdatetimeedit.dosetdatetime"></a>

<a name="DoSetTime"></a>    
#### DoSetTime(value)

Sets the time value of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	Time value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.qdatetimeedit.dosettime"></a>

	

