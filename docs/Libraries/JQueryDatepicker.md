Summary: JQueryDatepicker

# JQueryDatepicker

Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: JQueryDatepickerBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Month](#Month) | Gets the currently selected month | GetMonth |  |
| [Year](#Year) | Gets the currently selected year | GetYear |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoNextMonth](#DoNextMonth) | Changes to the next month. |
|	[DoPrevMonth](#DoPrevMonth) | Changes to the previous month. |
|	[DoSelectDate](#DoSelectDate) | Selects a specific day in the current month. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Month"></a>
#### Month


Gets the currently selected month

			
	
			
Type: number
			
			
Accessors: GetMonth
			
		
<a name="Year"></a>
#### Year


Gets the currently selected year

			
	
			
Type: number
			
			
Accessors: GetYear
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoNextMonth"></a>    
#### DoNextMonth()

Changes to the next month.




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.jquerydatepicker.donextmonth"></a>

<a name="DoPrevMonth"></a>    
#### DoPrevMonth()

Changes to the previous month.




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.jquerydatepicker.doprevmonth"></a>

<a name="DoSelectDate"></a>    
#### DoSelectDate(dateValue)

Selects a specific day in the current month.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| dateValue | number |	The day of the month to choose |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.jquerydatepicker.doselectdate"></a>

	

