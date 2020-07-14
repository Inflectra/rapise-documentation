Summary: This behavior pattern implements standard behavior for DatePicker control.

# DomDynamicsAXDatePicker

This behavior pattern implements standard behavior for DatePicker control.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DomDynamicsAXDatePickerBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Day](#day) | Current day displayed by the date picker. | GetDay |  |
| [Month](#month) | Current month displayed by the date picker. | GetMonth |  |
| [Year](#year) | Current year displayed by the date picker. | GetYear |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoNextMonth](#donextmonth) | Clicks on 'Next Month' selector. |
|	[DoPrevMonth](#doprevmonth) | Clicks on 'Previous Month' selector. |
|	[DoSelectDate](#doselectdate) | Selects specific date in the date picker. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Day"></a>
#### Day


Current day displayed by the date picker.

			
	
			
Type: string|number
			
			
Accessors: GetDay
			
		
<a name="Month"></a>
#### Month


Current month displayed by the date picker.

			
	
			
Type: string|number
			
			
Accessors: GetMonth
			
		
<a name="Year"></a>
#### Year


Current year displayed by the date picker.

			
	
			
Type: string|number
			
			
Accessors: GetYear
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoNextMonth"></a>    
#### DoNextMonth

Clicks on 'Next Month' selector.

```javascript
DoNextMonth() 
```




**Returns:**

boolean: 'true' if success, 'false' otherwise



<a name="see.also.domdynamicsaxdatepicker.donextmonth"></a>

<a name="DoPrevMonth"></a>    
#### DoPrevMonth

Clicks on 'Previous Month' selector.

```javascript
DoPrevMonth() 
```




**Returns:**

boolean: 'true' if success, 'false' otherwise



<a name="see.also.domdynamicsaxdatepicker.doprevmonth"></a>

<a name="DoSelectDate"></a>    
#### DoSelectDate

Selects specific date in the date picker.

```javascript
DoSelectDate(dateValue) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| dateValue | number |	New date to select |




**Returns:**

boolean: 'true' if success, 'false' otherwise



<a name="see.also.domdynamicsaxdatepicker.doselectdate"></a>

	

