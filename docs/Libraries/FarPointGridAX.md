# FarPointGridAX

This behavior pattern implements standard behavior for Grid control.
 
Extends SeSSimulatedObject.





**Behavior Pattern: FarPointGridAXBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [CellComboList](#CellComboList) | Get array of dropdown values for a given cell. | GetCellComboList |  |
| [CellInfo](#CellInfo) | <p>Returns object with following fields. | GetCellInfo |  |
| [ColumnCount](#ColumnCount) | Number of columns in the grid. | GetColumnCount |  |
| [ColumnHeaders](#ColumnHeaders) | Get array of column captions. | GetColumnHeaders |  |
| [ColumnIndex](#ColumnIndex) | Get column index by name. | GetColumnIndex |  |
| [ColumnInfo](#ColumnInfo) | <p>Returns object with following fields. | GetColumnInfo |  |
| [GridInfo](#GridInfo) | <p>Returns object with following fields. | GetGridInfo |  |
| [RowCount](#RowCount) | Number of rows in the table. | GetRowCount |  |
| [RowHeaders](#RowHeaders) | Get array of row captions. | GetRowHeaders |  |
| [RowInfo](#RowInfo) | <p>Returns object with following fields. | GetRowInfo |  |
| [SelectedCells](#SelectedCells) | Returns string of cell coordinates delimited by separators or an array of coordinate objects for selected cells. | GetSelectedCells |  |
| [SelectedColumn](#SelectedColumn) | Index of the selected column. | GetSelectedColumn | SetSelectedColumn |
| [SelectedRow](#SelectedRow) | Index of the selected row. | GetSelectedRow | SetSelectedRow |
| [SelectedRowsCount](#SelectedRowsCount) | Get number of selected rows. | GetSelectedRowsCount |  |
| [Text](#Text) | Text of the specified cell. | GetText | SetText |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoActivateCell](#DoActivateCell) | Make specified cell active |
|	[DoClearCell](#DoClearCell) | Clear specified cell range |
|	[DoClickCell](#DoClickCell) | Clicks the specified cell |
|	[DoExportGrid](#DoExportGrid) | Save Grid data to file |
|	[DoFullText](#DoFullText) | Return whole grid as text |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="CellComboList"></a>
#### CellComboList


Get array of dropdown values for a given cell.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| row | number | Row index |
| col | number | Column index |


	
			
Type: array
			
			
Accessors: GetCellComboList
			
		
<a name="CellInfo"></a>
#### CellInfo


<p>Returns object with following fields.</p>

<pre>
ActionOnEnter one of:
			0 None			(Default) Active cell does not change
			1 Up				Active cell moves up
			2 Down			Active cell moves down
			3 Left			Active cell moves left
			4 Right			Active cell moves right
			5 Next			Next cell becomes active cell
			6 Previous		Previous cell becomes active cell
			7 Same			Current cell remains active cell
			8 Next Row			Active cell moves to first column of next row


EditMode
Locked
MoveOnArrow    ArrowsExitEditMode;
NextCellOnTab  ProcessTab;

Type one of:
			0 Date			Creates date cell
			1 Edit			(Default) Creates edit cell
			4 PIC				Creates PIC cell
			5 Static Text		Creates static text cell
			6 Time			Creates time cell
			7 Button			Creates button cell
			8 Combo Box		Creates combo box cell
			9 Picture			Creates picture cell
			10 Check Box		Creates check box cell
			11 OwnerDrawn	Creates ownerdrawn cell
			12 Currency		Creates currency cell
			13 Number			Creates numeric cell
			14 Percent		Creates percent cell
			15 Scientific		Creates scientific cell
			16 Custom			Creates custom cell

Text
Value

Width
WidthTwips
Height
HeightTwips

Left
Right
Top
Bottom

Visible

row
col
</pre>

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| row | number | Row index |
| col | number | Column index |


	
			
Type: object
			
			
Accessors: GetCellInfo
			
		
<a name="ColumnCount"></a>
#### ColumnCount


Number of columns in the grid.

			
	
			
Type: number
			
			
Accessors: GetColumnCount
			
		
<a name="ColumnHeaders"></a>
#### ColumnHeaders


Get array of column captions.

			
	
			
Type: array
			
			
Accessors: GetColumnHeaders
			
		
<a name="ColumnIndex"></a>
#### ColumnIndex


Get column index by name.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| colName | string | Column name |


	
			
Type: number
			
			
Accessors: GetColumnIndex
			
		
<a name="ColumnInfo"></a>
#### ColumnInfo


<p>Returns object with following fields.</p>

<pre>
Header - Column caption, if any
Width - Width in pixels
WidthTwips - Width in TWIPs
Hidden
Index
Visible
</pre>

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| col | number | Column index |


	
			
Type: object
			
			
Accessors: GetColumnInfo
			
		
<a name="GridInfo"></a>
#### GridInfo


<p>Returns object with following fields.</p>

<pre>
ActiveCol
ActiveRow
ColCount
RowCount

Enabled
Visible

Top
Bottom
Height
Width

Rect [Top, Right, Bottom, Left]

Left
Right

hWnd

TopRow
LeftCol
</pre>

			
	
			
Type: object
			
			
Accessors: GetGridInfo
			
		
<a name="RowCount"></a>
#### RowCount


Number of rows in the table.

			
	
			
Type: number
			
			
Accessors: GetRowCount
			
		
<a name="RowHeaders"></a>
#### RowHeaders


Get array of row captions.

			
	
			
Type: array
			
			
Accessors: GetRowHeaders
			
		
<a name="RowInfo"></a>
#### RowInfo


<p>Returns object with following fields.</p>

<pre>
ActiveCol
ActiveRow
ColCount
RowCount

Enabled
Visible

Top
Bottom
Height
Width

Rect [Top, Right, Bottom, Left]

Left
Right

hWnd

TopRow
LeftCol
</pre>

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| row | number | Row index |


	
			
Type: object
			
			
Accessors: GetRowInfo
			
		
<a name="SelectedCells"></a>
#### SelectedCells


Returns string of cell coordinates delimited by separators or an array of coordinate objects for selected cells.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| asArray | boolean | If set to true, function returns an array. |
| rowcolSep | string | row separator<br>Optional. |
| cellSep | string | cell ceparator<br>Optional. |


	
			
Type: string
			
			
Accessors: GetSelectedCells
			
		
<a name="SelectedColumn"></a>
#### SelectedColumn


Index of the selected column.

			
	
			
Type: number
			
			
Accessors: GetSelectedColumn, SetSelectedColumn
			
		
<a name="SelectedRow"></a>
#### SelectedRow


Index of the selected row.

			
	
			
Type: number
			
			
Accessors: GetSelectedRow, SetSelectedRow
			
		
<a name="SelectedRowsCount"></a>
#### SelectedRowsCount


Get number of selected rows.

			
	
			
Type: number
			
			
Accessors: GetSelectedRowsCount
			
		
<a name="Text"></a>
#### Text


Text of the specified cell.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| row | number | Zero-based index if the row. |
| col | number | Zero-based index of the column. |


	
			
Type: string
			
			
Accessors: GetText, SetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoActivateCell"></a>    
#### DoActivateCell(row, col)

Make specified cell active


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number |	Column to use |
| col | number |	Column to use |






<a name="DoClearCell"></a>    
#### DoClearCell(col1, row1, col2, row2)

Clear specified cell range


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| col1 | number |	Column to use |
| row1 | number |	Column to use |
| col2 | number |	Column to use |
| row2 | number |	Column to use |






<a name="DoClickCell"></a>    
#### DoClickCell(col, row, clickType, xOffset, yOffset)

Clicks the specified cell


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| col | number |	Zero-based index of the column. |
| row | number |	Zero-based index if the row. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L. |
| xOffset | number |	X offset to click within object. Default is a center.<br>Optional. |
| yOffset | number |	Y offset to click within object. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise




<a name="DoExportGrid"></a>    
#### DoExportGrid(fileName, type)

Save Grid data to file


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Path to destination file |
| type | string |	Export file format (EXCEL, HTML, XML). Empty ("") for tab-separated text<br>Optional, Default: L. |






<a name="DoFullText"></a>    
#### DoFullText(saveToFile, fileName)

Return whole grid as text


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| saveToFile | boolean |	'true' if you need to have copy of the text in the file |
| fileName | string |	Path to destination file |






	

