# Database

Database object. Use it to read and write ADO data sources.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoAttach](#DoAttach) | Attaches to a Database with given ADO connection string and SQL query. |
|	[DoMoveToRow](#DoMoveToRow) | Moves to a given row. |
|	[DoRandom](#DoRandom) | Selects random row and column in the recordset. |
|	[DoSequential](#DoSequential) | Advances to the next row in the table. |
|	[GetColumnCount](#GetColumnCount) | Gets columns count. |
|	[GetColumnName](#GetColumnName) | Gets column name. |
|	[GetColumnNames](#GetColumnNames) | Gets column names. |
|	[GetCurrentRowIndex](#GetCurrentRowIndex) | Get zero based current row index. |
|	[GetRowCount](#GetRowCount) | Gets rows count. |
|	[GetValue](#GetValue) | Gets value by column name, and, optionally, row number. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoAttach"></a>    
#### DoAttach(connection_string, sql)

Attaches to a Database with given ADO connection string and SQL query.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| connection_string | string |	ADO connection string. |
| sql |  |	SQL Query (i.e. 'select * from Customers')<br>Optional. |




**Returns:**

true, if successfull




<a name="DoMoveToRow"></a>    
#### DoMoveToRow(rowInd)

Moves to a given row.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowInd | number |	Row index to set active. |






<a name="DoRandom"></a>    
#### DoRandom()

Selects random row and column in the recordset.




**Returns:**

'false' if the the DB is is not connected, 'true' - otherwise.




<a name="DoSequential"></a>    
#### DoSequential()

Advances to the next row in the table. When the end of the range is reached DoSequential returns 'false'.




**Returns:**

'false' if being called when active row is the last row or the recordset is not attached, 'true' - otherwise.




<a name="GetColumnCount"></a>    
#### GetColumnCount()

Gets columns count.




**Returns:**

Number of Columns in the result set.




<a name="GetColumnName"></a>    
#### GetColumnName(ind)

Gets column name.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| ind | number |	Column index. |




**Returns:**

Name of column in the spreadsheet.




<a name="GetColumnNames"></a>    
#### GetColumnNames()

Gets column names.




**Returns:**

Array of column names in the table.




<a name="GetCurrentRowIndex"></a>    
#### GetCurrentRowIndex()

Get zero based current row index.






<a name="GetRowCount"></a>    
#### GetRowCount()

Gets rows count.




**Returns:**

Number of rows in the result set.




<a name="GetValue"></a>    
#### GetValue(columnId, rowId)

Gets value by column name, and, optionally, row number. Returns current cell value after DoSequental or DoRandom if params not set.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| columnId | Number \| String |	Column index or name. If not set 1st column is used.<br>Optional. |
| rowId | number |	Row index. If not set current row is used.<br>Optional. |






	

