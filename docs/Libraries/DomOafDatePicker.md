Summary: This behavior pattern implements standard behavior for Oracle Application Framework (OAF) Date Picker control.

# DomOafDatePicker

This behavior pattern implements standard behavior for Oracle Application Framework (OAF) Date Picker control.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DomOafDatePickerBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [IsOpen](#isopen) | Returns whether the date picker popup is currently visible. | GetIsOpen |  |
| [Month](#month) | Gets or sets the currently displayed month in the popup calendar. | GetMonth | SetMonth |
| [SelectedDay](#selectedday) | Gets the currently highlighted day number in the popup calendar. | GetSelectedDay |  |
| [Text](#text) | Gets or sets the current date value in the input field. | GetText | SetText |
| [Year](#year) | Gets or sets the currently displayed year in the popup calendar. | GetYear | SetYear |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClose](#doclose) | Closes the date picker popup calendar. |
|  [DoNextMonth](#donextmonth) | Navigates to the next month in the calendar popup. |
|  [DoOpen](#doopen) | Opens the date picker popup calendar. |
|  [DoPrevMonth](#doprevmonth) | Navigates to the previous month in the calendar popup. |
|  [DoSelectDate](#doselectdate) | Selects a specific day in the currently displayed month. |
|  [DoSetText](#dosettext) | Sets the date by typing directly into the input field. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="IsOpen"></a>
#### IsOpen

Returns whether the date picker popup is currently visible.



Type: boolean


Accessors: GetIsOpen

```javascript
value = SeS('SomeDomOafDatePicker').GetIsOpen()
```


<a name="Month"></a>
#### Month

Gets or sets the currently displayed month in the popup calendar. Accepts month name (e.g., 'January') or zero-based index (0-11).



Type: string|number


Accessors: GetMonth, SetMonth

```javascript
value = SeS('SomeDomOafDatePicker').GetMonth()

SeS('SomeDomOafDatePicker').SetMonth()
```


<a name="SelectedDay"></a>
#### SelectedDay

Gets the currently highlighted day number in the popup calendar. Returns -1 if no day is highlighted.



Type: number


Accessors: GetSelectedDay

```javascript
value = SeS('SomeDomOafDatePicker').GetSelectedDay()
```


<a name="Text"></a>
#### Text

Gets or sets the current date value in the input field.



Type: string


Accessors: GetText, SetText

```javascript
value = SeS('SomeDomOafDatePicker').GetText()

SeS('SomeDomOafDatePicker').SetText()
```


<a name="Year"></a>
#### Year

Gets or sets the currently displayed year in the popup calendar.



Type: string|number


Accessors: GetYear, SetYear

```javascript
value = SeS('SomeDomOafDatePicker').GetYear()

SeS('SomeDomOafDatePicker').SetYear()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClose"></a>    
#### DoClose

Closes the date picker popup calendar.

```javascript
SeS('SomeDomOafDatePicker').DoClose()
```




**Returns:**

boolean: true if popup closed successfully, false otherwise.



<a name="see.also.domoafdatepicker.doclose"></a>

<a name="DoNextMonth"></a>    
#### DoNextMonth

Navigates to the next month in the calendar popup.

```javascript
SeS('SomeDomOafDatePicker').DoNextMonth()
```




**Returns:**

boolean: true if navigation successful, false otherwise.



<a name="see.also.domoafdatepicker.donextmonth"></a>

<a name="DoOpen"></a>    
#### DoOpen

Opens the date picker popup calendar.

```javascript
SeS('SomeDomOafDatePicker').DoOpen()
```




**Returns:**

boolean: true if popup opened successfully, false otherwise.



<a name="see.also.domoafdatepicker.doopen"></a>

<a name="DoPrevMonth"></a>    
#### DoPrevMonth

Navigates to the previous month in the calendar popup.

```javascript
SeS('SomeDomOafDatePicker').DoPrevMonth()
```




**Returns:**

boolean: true if navigation successful, false otherwise.



<a name="see.also.domoafdatepicker.doprevmonth"></a>

<a name="DoSelectDate"></a>    
#### DoSelectDate

Selects a specific day in the currently displayed month.

```javascript
SeS('SomeDomOafDatePicker').DoSelectDate(day)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| day | number |  Day of month to select (1-31). |




**Returns:**

boolean: true if date selected successfully, false otherwise.



<a name="see.also.domoafdatepicker.doselectdate"></a>

<a name="DoSetText"></a>    
#### DoSetText

Sets the date by typing directly into the input field.

```javascript
SeS('SomeDomOafDatePicker').DoSetText(value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |  Date value in the format expected by the field (e.g., '23-Jan-2004'). |




**Returns:**

boolean: true if successful, false otherwise.



<a name="see.also.domoafdatepicker.dosettext"></a>

  

