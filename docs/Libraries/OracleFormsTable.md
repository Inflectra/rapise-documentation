Summary: Oracle Forms Table.

# OracleFormsTable

Oracle Forms Table.
 
UI element class: oracle.forms.ui.ExtendedFrame

Extends [OracleFormsObject](OracleFormsObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: OracleFormsTableBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Cell](#cell) | Value of the specified cell. | GetCell |  |
| [ColumnCount](#columncount) | Number of columns in the table. | GetColumnCount |  |
| [ColumnName](#columnname) | Caption of a column. | GetColumnName |  |
| [RowCount](#rowcount) | Number of rows in the grid. | GetRowCount |  |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoGetValue](#dogetvalue) | Sets value of the table cell. |
|  [DoPress](#dopress) | Click the cell. |
|  [DoSetFocus](#dosetfocus) | Sets keyboard input focus to the table cell. |
|  [DoSetValue](#dosetvalue) | Sets value of the table cell. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="Cell"></a>
#### Cell


Value of the specified cell.

      
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| row | number | Zero-based index of a row. |
| col | string \| number | Name of a column or zero-based column index. |


  
      
Type: string|number|boolean
      
      
Accessors: GetCell
      
    
<a name="ColumnCount"></a>
#### ColumnCount


Number of columns in the table.

      
  
      
Type: number
      
      
Accessors: GetColumnCount
      
    
<a name="ColumnName"></a>
#### ColumnName


Caption of a column.

      
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| col | number | Zero-based index of the column. |


  
      
Type: string
      
      
Accessors: GetColumnName
      
    
<a name="RowCount"></a>
#### RowCount


Number of rows in the grid.

      
  
      
Type: number
      
      
Accessors: GetRowCount
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoGetValue"></a>    
#### DoGetValue

Sets value of the table cell.

```javascript
SeS('SomeOracleFormsTable').DoGetValue(row, col)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number |  Table row index |
| col | string \| number |  Table column caption or index |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.oracleformstable.dogetvalue"></a>

<a name="DoPress"></a>    
#### DoPress

Click the cell.

```javascript
SeS('SomeOracleFormsTable').DoPress(row, col)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number |  Table row index |
| col | string \| number |  Table column caption or index |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.oracleformstable.dopress"></a>

<a name="DoSetFocus"></a>    
#### DoSetFocus

Sets keyboard input focus to the table cell.

```javascript
SeS('SomeOracleFormsTable').DoSetFocus(row, col)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number |  Table row index |
| col | string \| number |  Table column caption or index |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.oracleformstable.dosetfocus"></a>

<a name="DoSetValue"></a>    
#### DoSetValue

Sets value of the table cell.

```javascript
SeS('SomeOracleFormsTable').DoSetValue(row, col, value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number |  Table row index |
| col | string \| number |  Table column caption or index |
| value | string \| boolean \| number |  value to set |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.oracleformstable.dosetvalue"></a>

  

