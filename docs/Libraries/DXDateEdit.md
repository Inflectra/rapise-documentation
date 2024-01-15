Summary: DevXpress DateEdit.

# DXDateEdit

DevXpress DateEdit.
 
UI element class: DevExpress.XtraEditors.Controls.DateEditCalendarBase

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DXDateEditBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Month](#month) | Current month displayed by the date picker. | GetMonth |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoNextMonth](#donextmonth) | Clicks on 'Next Month' selector. |
|  [DoPrevMonth](#doprevmonth) | Clicks on 'Previous Month' selector. |
|  [DoSelectDate](#doselectdate) | Selects specific date in the date picker. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="Month"></a>
#### Month

Current month displayed by the date picker.



Type: string|number


Accessors: GetMonth

```javascript
value = SeS('SomeDXDateEdit').GetMonth()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoNextMonth"></a>    
#### DoNextMonth

Clicks on 'Next Month' selector.

```javascript
SeS('SomeDXDateEdit').DoNextMonth()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise



<a name="see.also.dxdateedit.donextmonth"></a>

<a name="DoPrevMonth"></a>    
#### DoPrevMonth

Clicks on 'Previous Month' selector.

```javascript
SeS('SomeDXDateEdit').DoPrevMonth()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise



<a name="see.also.dxdateedit.doprevmonth"></a>

<a name="DoSelectDate"></a>    
#### DoSelectDate

Selects specific date in the date picker.

```javascript
SeS('SomeDXDateEdit').DoSelectDate(day, month, year)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| day | number |  Day to set |
| month | number |  Month to set |
| year | number |  Year to set |




**Returns:**

boolean: 'true' if success, 'false' otherwise



<a name="see.also.dxdateedit.doselectdate"></a>

  

