# DomDynamicsAXDatePicker

This behavior pattern implements standard behavior for DatePicker control.
 
Extends HTMLObject.

Extends SeSSimulatedObject.





**Behavior Pattern: DomDynamicsAXDatePickerBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Day](#Day) | Current day displayed by the date picker. | GetDay |  |
| [Month](#Month) | Current month displayed by the date picker. | GetMonth |  |
| [Year](#Year) | Current year displayed by the date picker. | GetYear |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoNextMonth](#DoNextMonth) | Clicks on 'Next Month' selector. |
|	[DoPrevMonth](#DoPrevMonth) | Clicks on 'Previous Month' selector. |
|	[DoSelectDate](#DoSelectDate) | Selects specific date in the date picker. |




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
#### DoNextMonth()

Clicks on 'Next Month' selector.




**Returns:**

boolean: 'true' if success, 'false' otherwise




<a name="DoPrevMonth"></a>    
#### DoPrevMonth()

Clicks on 'Previous Month' selector.




**Returns:**

boolean: 'true' if success, 'false' otherwise




<a name="DoSelectDate"></a>    
#### DoSelectDate(dateValue)

Selects specific date in the date picker.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| dateValue | number |	New date to select |




**Returns:**

boolean: 'true' if success, 'false' otherwise




	

