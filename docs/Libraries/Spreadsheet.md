Summary: Spreadsheet object. Use it to read and write Excel and text spreadsheets.

# Spreadsheet

Spreadsheet object. Use it to read and write Excel and text spreadsheets.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoAddColumn](#doaddcolumn) | Appends a column with specified name. |
|	[DoAddRow](#doaddrow) | Appends a new row. |
|	[DoAttach](#doattach) | Loads a sheet from Excel file (.xls, *.xlsx) or csv file (*.txt, *.csv). |
|	[DoCompare](#docompare) | Compares two spreadsheets. |
|	[DoCreate](#docreate) | Creates a new spreadsheet file. |
|	[DoInsertColumn](#doinsertcolumn) | Inserts a column at index. |
|	[DoInsertRow](#doinsertrow) | Inserts a new row at index. |
|	[DoMoveToFirstRow](#domovetofirstrow) | Moves to a first row in selected range. |
|	[DoMoveToLastRow](#domovetolastrow) | Moves to a last row in selected range. |
|	[DoMoveToRow](#domovetorow) | Sets active row index. |
|	[DoRandom](#dorandom) | Selects random row and column in the range. |
|	[DoRemoveColumn](#doremovecolumn) | Removes a column at index. |
|	[DoRemoveRow](#doremoverow) | Removes a row at index. |
|	[DoSave](#dosave) | Saves the spreadsheet. |
|	[DoSequential](#dosequential) | Advances to the next row in the range. |
|	[GetCell](#getcell) | Cell value by its coordinates. |
|	[GetColumnCount](#getcolumncount) | Gets columns count. |
|	[GetColumnIndexByName](#getcolumnindexbyname) | Gets column index by its name. |
|	[GetColumnName](#getcolumnname) | Gets column name. |
|	[GetCurrentRowIndex](#getcurrentrowindex) | Gets zero-based active row index. |
|	[GetEOF](#geteof) | Gets EOF state. |
|	[GetRange](#getrange) | Cell range used in DoSequental and in DoRandom. |
|	[GetRowCount](#getrowcount) | Gets row count. |
|	[SetCell](#setcell) | Sets cell value by its coordinates. |
|	[SetRange](#setrange) | Cell range used in DoSequental and in DoRandom. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoAddColumn"></a>    
#### DoAddColumn

Appends a column with specified name.

```javascript
DoAddColumn(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of a new column. |




**Returns:**

boolean: true if successfull, false otherwise.



<a name="see.also.spreadsheet.doaddcolumn"></a>

<a name="DoAddRow"></a>    
#### DoAddRow

Appends a new row.

```javascript
DoAddRow() 
```




**Returns:**

boolean: true if successfull, false otherwise.



<a name="see.also.spreadsheet.doaddrow"></a>

<a name="DoAttach"></a>    
#### DoAttach

Loads a sheet from Excel file (.xls, *.xlsx) or csv file (*.txt, *.csv).

```javascript
DoAttach(fileName, sheetName, separator) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Path to Excel or csv file. |
| sheetName | string |	Sheet name to load. If not specified - load the first sheet.<br>Optional. |
| separator | string |	Separator for values in csv file.<br>Optional, Default: ,. |




**Returns:**

boolean: true if successfull, false otherwise.



<a name="see.also.spreadsheet.doattach"></a>

<a name="DoCompare"></a>    
#### DoCompare

Compares two spreadsheets. In strict mode number of columns and rows matter 
and all cell values must be equal. When strict mode is off then spreadsheet2 must contain spreadsheet1 to return 'true' as a result.

```javascript
DoCompare(spreadsheet1, spreadsheet2, strict, sheet1Name, sheet2Name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| spreadsheet1 | string \| Spreadsheet |	Path to a spreadsheet file or Spreadsheet object loaded via DoAttach or DoCreate actions. |
| spreadsheet2 | string \| Spreadsheet |	Path to a spreadsheet file or Spreadsheet object loaded via DoAttach or DoCreate actions. |
| strict | boolean |	If 'true' then number of columns and rows in both spreadsheets must be exactly the same. If 'false' then check that spreadsheet1 is contained in spreadsheet2.<br>Optional, Default: false. |
| sheet1Name | string |	Name of a sheet to compare. Specify this parameter when spreadsheet1 is a path to a file. By default first sheet is compared.<br>Optional. |
| sheet2Name | string |	Name of a sheet to compare. Specify this parameter when spreadsheet2 is a path to a file. By default first sheet is compared.<br>Optional. |




**Returns:**

boolean: true if spreadsheets are equal, false otherwise.



<a name="see.also.spreadsheet.docompare"></a>

<a name="DoCreate"></a>    
#### DoCreate

Creates a new spreadsheet file.

```javascript
DoCreate(fileName, sheetName, columnNames, rowCount, separator) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Path to a file. Extension defines file format. Supported extensions: .xls, .xlsx, *.csv, *.txt. |
| sheetName | string |	Name of the first sheet.<br>Optional, Default: Sheet1. |
| columnNames | array |	Array of column names.<br>Optional. |
| rowCount | number |	Initial number of rows with values.<br>Optional, Default: 10. |
| separator | string |	Separator for values in csv files.<br>Optional, Default: ,. |




**Returns:**

boolean: true if successfull, false otherwise.



<a name="see.also.spreadsheet.docreate"></a>

<a name="DoInsertColumn"></a>    
#### DoInsertColumn

Inserts a column at index.

```javascript
DoInsertColumn(columnIndex, name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| columnIndex | number |	Index of a new column. Zero-based. |
| name | string |	Name of a new column. |




**Returns:**

boolean: true if successfull, false otherwise.



<a name="see.also.spreadsheet.doinsertcolumn"></a>

<a name="DoInsertRow"></a>    
#### DoInsertRow

Inserts a new row at index.

```javascript
DoInsertRow(rowIndex) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowIndex | number |	Index of a new row. Zero-based. |




**Returns:**

boolean: true if successfull, false otherwise.



<a name="see.also.spreadsheet.doinsertrow"></a>

<a name="DoMoveToFirstRow"></a>    
#### DoMoveToFirstRow

Moves to a first row in selected range.

```javascript
DoMoveToFirstRow() 
```




**Returns:**

boolean: true if successfull, false otherwise.



<a name="see.also.spreadsheet.domovetofirstrow"></a>

<a name="DoMoveToLastRow"></a>    
#### DoMoveToLastRow

Moves to a last row in selected range.

```javascript
DoMoveToLastRow() 
```




**Returns:**

boolean: true if successfull, false otherwise.



<a name="see.also.spreadsheet.domovetolastrow"></a>

<a name="DoMoveToRow"></a>    
#### DoMoveToRow

Sets active row index.

```javascript
DoMoveToRow(index) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	Index to set. Zero-based. |




**Returns:**

boolean: true if successfull, false otherwise.



<a name="see.also.spreadsheet.domovetorow"></a>

<a name="DoRandom"></a>    
#### DoRandom

Selects random row and column in the range. The range is either set by SetRange
or it is the default range that includes all rows (except first row 
which is considred to contain column names) and columns on the sheet.

```javascript
DoRandom() 
```




**Returns:**

boolean: false if the spreadhseet is not attached, true otherwise.



<a name="see.also.spreadsheet.dorandom"></a>

<a name="DoRemoveColumn"></a>    
#### DoRemoveColumn

Removes a column at index.

```javascript
DoRemoveColumn(columnIndex) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| columnIndex | number |	Index of a column to remove. Zero-based. |




**Returns:**

boolean: true if successfull, false otherwise.



<a name="see.also.spreadsheet.doremovecolumn"></a>

<a name="DoRemoveRow"></a>    
#### DoRemoveRow

Removes a row at index.

```javascript
DoRemoveRow(rowIndex) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowIndex | number |	Index of a row to remove. Zero-based. |




**Returns:**

boolean: true if successfull, false otherwise.



<a name="see.also.spreadsheet.doremoverow"></a>

<a name="DoSave"></a>    
#### DoSave

Saves the spreadsheet.

```javascript
DoSave(fileName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Path to a file where to save the spreadsheet.<br>Optional. |




**Returns:**

boolean: true if successfull, false otherwise.



<a name="see.also.spreadsheet.dosave"></a>

<a name="DoSequential"></a>    
#### DoSequential

Advances to the next row in the range. The range is either set by SetRange
or it is the default range that includes all rows on the sheet except first row 
which is considred to contain column names.
When the end of the range is reached DoSequential stays at the last
row in the range and returns 'false'.

```javascript
DoSequential() 
```




**Returns:**

boolean: false if being called when active row is the last row or the spreadsheet is not attached, true otherwise.



<a name="see.also.spreadsheet.dosequential"></a>

<a name="GetCell"></a>    
#### GetCell

Cell value by its coordinates. Refers to active cell value after DoSequental or DoRandom if params not set.

```javascript
GetCell(columnId, rowId) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| columnId | number \| string |	Column index or name. If not set active column is used.<br>Optional, Default: 0. |
| rowId | number |	Row index. If not set ActiveRow is used.<br>Optional, Default: 0. |




**Returns:**

string: Getter returns string with cell value and null in the case of error. Setter returns true if successfull, false otherwise.



<a name="see.also.spreadsheet.getcell"></a>

<a name="GetColumnCount"></a>    
#### GetColumnCount

Gets columns count.

```javascript
GetColumnCount() 
```




**Returns:**

number: Number of columns in the spreadsheet. -1 if no spreadsheet is attached.



<a name="see.also.spreadsheet.getcolumncount"></a>

<a name="GetColumnIndexByName"></a>    
#### GetColumnIndexByName

Gets column index by its name.

```javascript
GetColumnIndexByName(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of the column to find. |




**Returns:**

number: column index if found, or -1.



<a name="see.also.spreadsheet.getcolumnindexbyname"></a>

<a name="GetColumnName"></a>    
#### GetColumnName

Gets column name.

```javascript
GetColumnName(index) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	Index of a column in the spreadsheet. |




**Returns:**

string: Name of a column in the spreadsheet. Null in the case of error.



<a name="see.also.spreadsheet.getcolumnname"></a>

<a name="GetCurrentRowIndex"></a>    
#### GetCurrentRowIndex

Gets zero-based active row index.

```javascript
GetCurrentRowIndex() 
```




**Returns:**

number: Active row index.



<a name="see.also.spreadsheet.getcurrentrowindex"></a>

<a name="GetEOF"></a>    
#### GetEOF

Gets EOF state.

```javascript
GetEOF() 
```




**Returns:**

boolean: false if spreadsheet is attached and active row and column point to existing cell, true otherwise.



<a name="see.also.spreadsheet.geteof"></a>

<a name="GetRange"></a>    
#### GetRange

Cell range used in DoSequental and in DoRandom.

```javascript
GetRange() 
```




**Returns:**

object: Spreadsheet state object: { startRow, endRow, startCol, endCol, activeRow, activeColumn }.



<a name="see.also.spreadsheet.getrange"></a>

<a name="GetRowCount"></a>    
#### GetRowCount

Gets row count.

```javascript
GetRowCount() 
```




**Returns:**

number: Number of rows in the spreadsheet including the row with column names. -1 if no spreadsheet is attached.



<a name="see.also.spreadsheet.getrowcount"></a>

<a name="SetCell"></a>    
#### SetCell

Sets cell value by its coordinates. Sets active cell value after DoSequental or DoRandom if params not set.

```javascript
SetCell(value, columnId, rowId) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	Value to set. |
| columnId | number \| string |	Column index or name. If not set active column is used.<br>Optional, Default: 0. |
| rowId | number |	Row index. If not set active row is used.<br>Optional, Default: 0. |




**Returns:**

boolean: true if successfull, false otherwise.



<a name="see.also.spreadsheet.setcell"></a>

<a name="SetRange"></a>    
#### SetRange

Cell range used in DoSequental and in DoRandom.

```javascript
SetRange(startRow, endRow, startCol, endCol) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| startRow | number |	Start row index. |
| endRow | number |	Last row index. |
| startCol | number |	Start column index. If not set then it is the first column.<br>Optional. |
| endCol | number |	Last column index. If not set then it is the last column.<br>Optional. |




**Returns:**

boolean: true if successfull, false otherwise.



<a name="see.also.spreadsheet.setrange"></a>

	

