Summary: jQuery-UI JQuery Date Picker.

# JQueryDatepicker

jQuery-UI JQuery Date Picker.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: JQueryDatepickerBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Month](#month) | Gets the currently selected month | GetMonth |  |
| [Year](#year) | Gets the currently selected year | GetYear |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoNextMonth](#donextmonth) | Changes to the next month. |
|  [DoPrevMonth](#doprevmonth) | Changes to the previous month. |
|  [DoSelectDate](#doselectdate) | Selects a specific day in the current month. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="Month"></a>
#### Month

Gets the currently selected month



Type: number


Accessors: GetMonth

```javascript
value = SeS('SomeJQueryDatepicker').GetMonth()
```


<a name="Year"></a>
#### Year

Gets the currently selected year



Type: number


Accessors: GetYear

```javascript
value = SeS('SomeJQueryDatepicker').GetYear()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoNextMonth"></a>    
#### DoNextMonth

Changes to the next month.

```javascript
SeS('SomeJQueryDatepicker').DoNextMonth()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.jquerydatepicker.donextmonth"></a>

<a name="DoPrevMonth"></a>    
#### DoPrevMonth

Changes to the previous month.

```javascript
SeS('SomeJQueryDatepicker').DoPrevMonth()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.jquerydatepicker.doprevmonth"></a>

<a name="DoSelectDate"></a>    
#### DoSelectDate

Selects a specific day in the current month.

```javascript
SeS('SomeJQueryDatepicker').DoSelectDate(dateValue)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| dateValue | number |  The day of the month to choose |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.jquerydatepicker.doselectdate"></a>

  

