Summary: Database object. Use it to read and write ADO data sources.

# Database

Database object. Use it to read and write ADO data sources.






<!-- ============================== property summary ========================== -->

  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoAttach](#doattach) | Attaches to a Database with given ADO connection string and SQL query. |
|  [DoMoveToRow](#domovetorow) | Moves to a given row. |
|  [DoRandom](#dorandom) | Selects random row and column in the recordset. |
|  [DoSequential](#dosequential) | Advances to the next row in the table. |
|  [GetColumnCount](#getcolumncount) | Gets columns count. |
|  [GetColumnName](#getcolumnname) | Gets column name. |
|  [GetColumnNames](#getcolumnnames) | Gets column names. |
|  [GetCurrentRowIndex](#getcurrentrowindex) | Get zero based current row index. |
|  [GetRowCount](#getrowcount) | Gets rows count. |
|  [GetValue](#getvalue) | Gets value by column name, and, optionally, row number. |




<!-- ============================== property detail ========================== -->
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoAttach"></a>    
#### DoAttach

Attaches to a Database with given ADO connection string and SQL query.

```javascript
Database.DoAttach(connection_string, sql)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| connection_string | string |  ADO connection string. |
| sql |  |  SQL Query (i.e. 'select * from Customers')<br>Optional. |




**Returns:**

true, if successful



<a name="see.also.database.doattach"></a>

<a name="DoMoveToRow"></a>    
#### DoMoveToRow

Moves to a given row.

```javascript
Database.DoMoveToRow(rowInd)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowInd | number |  Row index to set active. |





<a name="see.also.database.domovetorow"></a>

<a name="DoRandom"></a>    
#### DoRandom

Selects random row and column in the recordset.

```javascript
Database.DoRandom()
```




**Returns:**

'false' if the the DB is is not connected, 'true' - otherwise.



<a name="see.also.database.dorandom"></a>

<a name="DoSequential"></a>    
#### DoSequential

Advances to the next row in the table. When the end of the range is reached DoSequential returns 'false'.

```javascript
Database.DoSequential()
```




**Returns:**

'false' if being called when active row is the last row or the recordset is not attached, 'true' - otherwise.



<a name="see.also.database.dosequential"></a>

<a name="GetColumnCount"></a>    
#### GetColumnCount

Gets columns count.

```javascript
Database.GetColumnCount()
```




**Returns:**

Number of Columns in the result set.



<a name="see.also.database.getcolumncount"></a>

<a name="GetColumnName"></a>    
#### GetColumnName

Gets column name.

```javascript
Database.GetColumnName(ind)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| ind | number |  Column index. |




**Returns:**

Name of column in the spreadsheet.



<a name="see.also.database.getcolumnname"></a>

<a name="GetColumnNames"></a>    
#### GetColumnNames

Gets column names.

```javascript
Database.GetColumnNames()
```




**Returns:**

Array of column names in the table.



<a name="see.also.database.getcolumnnames"></a>

<a name="GetCurrentRowIndex"></a>    
#### GetCurrentRowIndex

Get zero based current row index.

```javascript
Database.GetCurrentRowIndex()
```





<a name="see.also.database.getcurrentrowindex"></a>

<a name="GetRowCount"></a>    
#### GetRowCount

Gets rows count.

```javascript
Database.GetRowCount()
```




**Returns:**

Number of rows in the result set.



<a name="see.also.database.getrowcount"></a>

<a name="GetValue"></a>    
#### GetValue

Gets value by column name, and, optionally, row number. Returns current cell value after DoSequential or DoRandom if params not set.

```javascript
Database.GetValue(columnId, rowId)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| columnId | Number \| String |  Column index or name. If not set 1st column is used.<br>Optional. |
| rowId | number |  Row index. If not set current row is used.<br>Optional. |





<a name="see.also.database.getvalue"></a>

  

