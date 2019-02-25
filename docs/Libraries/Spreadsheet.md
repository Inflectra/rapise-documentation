# Spreadsheet

Spreadsheet object. Use it to read and write Excel and text spreadsheets.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoAddColumn](#DoAddColumn) | Appends a column with specified name. |
|	[DoAddRow](#DoAddRow) | Appends a new row. |
|	[DoAttach](#DoAttach) | Loads a sheet from Excel file (.xls, *.xlsx) or csv file (*.txt, *.csv). |
|	[DoCompare](#DoCompare) | Compares two spreadsheets. |
|	[DoCreate](#DoCreate) | Creates a new spreadsheet file. |
|	[DoInsertColumn](#DoInsertColumn) | Inserts a column at index. |
|	[DoInsertRow](#DoInsertRow) | Inserts a new row at index. |
|	[DoMoveToFirstRow](#DoMoveToFirstRow) | Moves to a first row in selected range. |
|	[DoMoveToLastRow](#DoMoveToLastRow) | Moves to a last row in selected range. |
|	[DoMoveToRow](#DoMoveToRow) | Sets active row index. |
|	[DoRandom](#DoRandom) | Selects random row and column in the range. |
|	[DoRemoveColumn](#DoRemoveColumn) | Removes a column at index. |
|	[DoRemoveRow](#DoRemoveRow) | Removes a row at index. |
|	[DoSave](#DoSave) | Saves the spreadsheet. |
|	[DoSequential](#DoSequential) | Advances to the next row in the range. |
|	[GetCell](#GetCell) | Cell value by its coordinates. |
|	[GetColumnCount](#GetColumnCount) | Gets columns count. |
|	[GetColumnIndexByName](#GetColumnIndexByName) | Gets column index by its name. |
|	[GetColumnName](#GetColumnName) | Gets column name. |
|	[GetCurrentRowIndex](#GetCurrentRowIndex) | Gets zero-based active row index. |
|	[GetEOF](#GetEOF) | Gets EOF state. |
|	[GetRange](#GetRange) | Cell range used in DoSequental and in DoRandom. |
|	[GetRowCount](#GetRowCount) | Gets row count. |
|	[SetCell](#SetCell) | Sets cell value by its coordinates. |
|	[SetRange](#SetRange) | Cell range used in DoSequental and in DoRandom. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoAddColumn"></a>    
#### DoAddColumn(name)

Appends a column with specified name.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of a new column. |




**Returns:**

boolean: true if successfull, false otherwise.




<a name="DoAddRow"></a>    
#### DoAddRow()

Appends a new row.




**Returns:**

boolean: true if successfull, false otherwise.




<a name="DoAttach"></a>    
#### DoAttach(fileName, sheetName, separator)

Loads a sheet from Excel file (.xls, *.xlsx) or csv file (*.txt, *.csv).


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Path to Excel or csv file. |
| sheetName | string |	Sheet name to load. If not specified - load the first sheet.<br>Optional. |
| separator | string |	Separator for values in csv file.<br>Optional, Default: ,. |




**Returns:**

boolean: true if successfull, false otherwise.




<a name="DoCompare"></a>    
#### DoCompare(spreadsheet1, spreadsheet2, strict, sheet1Name, sheet2Name)

Compares two spreadsheets. In strict mode number of columns and rows matter 
and all cell values must be equal. When strict mode is off then spreadsheet2 must contain spreadsheet1 to return 'true' as a result.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| spreadsheet1 | string \| Spreadsheet |	Path to a spreadsheet file or Spreadsheet object loaded via DoAttach or DoCreate actions. |
| spreadsheet2 | string \| Spreadsheet |	Path to a spreadsheet file or Spreadsheet object loaded via DoAttach or DoCreate actions. |
| strict | boolean |	If 'true' then number of columns and rows in both spreadsheets must be exactly the same. If 'false' then check that spreadsheet1 is contained in spreadsheet2.<br>Optional, Default: false. |
| sheet1Name | string |	Name of a sheet to compare. Specify this parameter when spreadsheet1 is a path to a file. By default first sheet is compared.<br>Optional. |
| sheet2Name | string |	Name of a sheet to compare. Specify this parameter when spreadsheet2 is a path to a file. By default first sheet is compared.<br>Optional. |




**Returns:**

boolean: true if spreadsheets are equal, false otherwise.




<a name="DoCreate"></a>    
#### DoCreate(fileName, sheetName, columnNames, rowCount, separator)

Creates a new spreadsheet file.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Path to a file. Extension defines file format. Supported extensions: .xls, .xlsx, *.csv, *.txt. |
| sheetName | string |	Name of the first sheet.<br>Optional, Default: Sheet1. |
| columnNames | array |	Array of column names.<br>Optional. |
| rowCount | number |	Initial number of rows with values.<br>Optional, Default: 10. |
| separator | string |	Separator for values in csv files.<br>Optional, Default: ,. |




**Returns:**

boolean: true if successfull, false otherwise.




<a name="DoInsertColumn"></a>    
#### DoInsertColumn(columnIndex, name)

Inserts a column at index.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| columnIndex | number |	Index of a new column. Zero-based. |
| name | string |	Name of a new column. |




**Returns:**

boolean: true if successfull, false otherwise.




<a name="DoInsertRow"></a>    
#### DoInsertRow(rowIndex)

Inserts a new row at index.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowIndex | number |	Index of a new row. Zero-based. |




**Returns:**

boolean: true if successfull, false otherwise.




<a name="DoMoveToFirstRow"></a>    
#### DoMoveToFirstRow()

Moves to a first row in selected range.




**Returns:**

boolean: true if successfull, false otherwise.




<a name="DoMoveToLastRow"></a>    
#### DoMoveToLastRow()

Moves to a last row in selected range.




**Returns:**

boolean: true if successfull, false otherwise.




<a name="DoMoveToRow"></a>    
#### DoMoveToRow(index)

Sets active row index.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	Index to set. Zero-based. |




**Returns:**

boolean: true if successfull, false otherwise.




<a name="DoRandom"></a>    
#### DoRandom()

Selects random row and column in the range. The range is either set by SetRange
or it is the default range that includes all rows (except first row 
which is considred to contain column names) and columns on the sheet.




**Returns:**

boolean: false if the spreadhseet is not attached, true otherwise.




<a name="DoRemoveColumn"></a>    
#### DoRemoveColumn(columnIndex)

Removes a column at index.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| columnIndex | number |	Index of a column to remove. Zero-based. |




**Returns:**

boolean: true if successfull, false otherwise.




<a name="DoRemoveRow"></a>    
#### DoRemoveRow(rowIndex)

Removes a row at index.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowIndex | number |	Index of a row to remove. Zero-based. |




**Returns:**

boolean: true if successfull, false otherwise.




<a name="DoSave"></a>    
#### DoSave(fileName)

Saves the spreadsheet.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Path to a file where to save the spreadsheet.<br>Optional. |




**Returns:**

boolean: true if successfull, false otherwise.




<a name="DoSequential"></a>    
#### DoSequential()

Advances to the next row in the range. The range is either set by SetRange
or it is the default range that includes all rows on the sheet except first row 
which is considred to contain column names.
When the end of the range is reached DoSequential stays at the last
row in the range and returns 'false'.




**Returns:**

boolean: false if being called when active row is the last row or the spreadsheet is not attached, true otherwise.




<a name="GetCell"></a>    
#### GetCell(columnId, rowId)

Cell value by its coordinates. Refers to active cell value after DoSequental or DoRandom if params not set.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| columnId | number \| string |	Column index or name. If not set active column is used.<br>Optional, Default: 0. |
| rowId | number |	Row index. If not set ActiveRow is used.<br>Optional, Default: 0. |




**Returns:**

string: Getter returns string with cell value and null in the case of error. Setter returns true if successfull, false otherwise.




<a name="GetColumnCount"></a>    
#### GetColumnCount()

Gets columns count.




**Returns:**

number: Number of columns in the spreadsheet. -1 if no spreadsheet is attached.




<a name="GetColumnIndexByName"></a>    
#### GetColumnIndexByName(name)

Gets column index by its name.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of the column to find. |




**Returns:**

number: column index if found, or -1.




<a name="GetColumnName"></a>    
#### GetColumnName(index)

Gets column name.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	Index of a column in the spreadsheet. |




**Returns:**

string: Name of a column in the spreadsheet. Null in the case of error.




<a name="GetCurrentRowIndex"></a>    
#### GetCurrentRowIndex()

Gets zero-based active row index.




**Returns:**

number: Active row index.




<a name="GetEOF"></a>    
#### GetEOF()

Gets EOF state.




**Returns:**

boolean: false if spreadsheet is attached and active row and column point to existing cell, true otherwise.




<a name="GetRange"></a>    
#### GetRange()

Cell range used in DoSequental and in DoRandom.




**Returns:**

object: Spreadsheet state object: { startRow, endRow, startCol, endCol, activeRow, activeColumn }.




<a name="GetRowCount"></a>    
#### GetRowCount()

Gets row count.




**Returns:**

number: Number of rows in the spreadsheet including the row with column names. -1 if no spreadsheet is attached.




<a name="SetCell"></a>    
#### SetCell(value, columnId, rowId)

Sets cell value by its coordinates. Sets active cell value after DoSequental or DoRandom if params not set.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	Value to set. |
| columnId | number \| string |	Column index or name. If not set active column is used.<br>Optional, Default: 0. |
| rowId | number |	Row index. If not set active row is used.<br>Optional, Default: 0. |




**Returns:**

boolean: true if successfull, false otherwise.




<a name="SetRange"></a>    
#### SetRange(startRow, endRow, startCol, endCol)

Cell range used in DoSequental and in DoRandom.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| startRow | number |	Start row index. |
| endRow | number |	Last row index. |
| startCol | number |	Start column index. If not set then it is the first column.<br>Optional. |
| endCol | number |	Last column index. If not set then it is the last column.<br>Optional. |




**Returns:**

boolean: true if successfull, false otherwise.




	

