Summary: This is Qt masked date edit box. Use DoSetDateTime to set the time value of the edit box and GetText to read current value.

# QDateTimeEdit

This is Qt masked date edit box. Use DoSetDateTime to set the time value of the edit box and GetText to read current value.
 
Extends [QWidget](QWidget.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: QtDateTimeBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSetDate](#dosetdate) | Sets the date value of this object. |
|	[DoSetDateTime](#dosetdatetime) | Sets the date/time value of this object. |
|	[DoSetTime](#dosettime) | Sets the time value of this object. |




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
#### DoSetDate

Sets the date value of this object.

```javascript
DoSetDate(value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	Date value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.qdatetimeedit.dosetdate"></a>

<a name="DoSetDateTime"></a>    
#### DoSetDateTime

Sets the date/time value of this object.

```javascript
DoSetDateTime(value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	Date/time value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.qdatetimeedit.dosetdatetime"></a>

<a name="DoSetTime"></a>    
#### DoSetTime

Sets the time value of this object.

```javascript
DoSetTime(value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	Time value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.qdatetimeedit.dosettime"></a>

	

