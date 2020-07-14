Summary: YUI Calendar.

# YUICalendar

YUI Calendar.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: YUICalendarBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Month](#month) | Current month displayed by the date picker. | GetMonth |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoNextMonth](#donextmonth) | Clicks on 'Next Month' selector. |
|	[DoPrevMonth](#doprevmonth) | Clicks on 'Previous Month' selector. |
|	[DoSelectDate](#doselectdate) | Selects specific date in the date picker. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Month"></a>
#### Month


Current month displayed by the date picker.

			
	
			
Type: string|number
			
			
Accessors: GetMonth
			
		
	
	
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



<a name="see.also.yuicalendar.donextmonth"></a>

<a name="DoPrevMonth"></a>    
#### DoPrevMonth

Clicks on 'Previous Month' selector.

```javascript
DoPrevMonth() 
```




**Returns:**

boolean: 'true' if success, 'false' otherwise



<a name="see.also.yuicalendar.doprevmonth"></a>

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



<a name="see.also.yuicalendar.doselectdate"></a>

	

