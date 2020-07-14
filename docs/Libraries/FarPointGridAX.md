Summary: This behavior pattern implements standard behavior for Grid control.

# FarPointGridAX

This behavior pattern implements standard behavior for Grid control.
 
Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: FarPointGridAXBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [CellComboList](#cellcombolist) | Get array of dropdown values for a given cell. | GetCellComboList |  |
| [CellInfo](#cellinfo) | <p>Returns object with following fields. | GetCellInfo |  |
| [ColumnCount](#columncount) | Number of columns in the grid. | GetColumnCount |  |
| [ColumnHeaders](#columnheaders) | Get array of column captions. | GetColumnHeaders |  |
| [ColumnIndex](#columnindex) | Get column index by name. | GetColumnIndex |  |
| [ColumnInfo](#columninfo) | <p>Returns object with following fields. | GetColumnInfo |  |
| [GridInfo](#gridinfo) | <p>Returns object with following fields. | GetGridInfo |  |
| [RowCount](#rowcount) | Number of rows in the table. | GetRowCount |  |
| [RowHeaders](#rowheaders) | Get array of row captions. | GetRowHeaders |  |
| [RowInfo](#rowinfo) | <p>Returns object with following fields. | GetRowInfo |  |
| [SelectedCells](#selectedcells) | Returns string of cell coordinates delimited by separators or an array of coordinate objects for selected cells. | GetSelectedCells |  |
| [SelectedColumn](#selectedcolumn) | Index of the selected column. | GetSelectedColumn | SetSelectedColumn |
| [SelectedRow](#selectedrow) | Index of the selected row. | GetSelectedRow | SetSelectedRow |
| [SelectedRowsCount](#selectedrowscount) | Get number of selected rows. | GetSelectedRowsCount |  |
| [Text](#text) | Text of the specified cell. | GetText | SetText |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoActivateCell](#doactivatecell) | Make specified cell active |
|	[DoClearCell](#doclearcell) | Clear specified cell range |
|	[DoClickCell](#doclickcell) | Clicks the specified cell |
|	[DoExportGrid](#doexportgrid) | Save Grid data to file |
|	[DoFullText](#dofulltext) | Return whole grid as text |




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
#### DoActivateCell

Make specified cell active

```javascript
DoActivateCell(row, col) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number |	Column to use |
| col | number |	Column to use |





<a name="see.also.farpointgridax.doactivatecell"></a>

<a name="DoClearCell"></a>    
#### DoClearCell

Clear specified cell range

```javascript
DoClearCell(col1, row1, col2, row2) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| col1 | number |	Column to use |
| row1 | number |	Column to use |
| col2 | number |	Column to use |
| row2 | number |	Column to use |





<a name="see.also.farpointgridax.doclearcell"></a>

<a name="DoClickCell"></a>    
#### DoClickCell

Clicks the specified cell

```javascript
DoClickCell(col, row, clickType, xOffset, yOffset) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| col | number |	Zero-based index of the column. |
| row | number |	Zero-based index if the row. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L. |
| xOffset | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |
| yOffset | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.farpointgridax.doclickcell"></a>

<a name="DoExportGrid"></a>    
#### DoExportGrid

Save Grid data to file

```javascript
DoExportGrid(fileName, type) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Path to destination file |
| type | string |	Export file format (EXCEL, HTML, XML). Empty ("") for tab-separated text<br>Optional, Default: L. |





<a name="see.also.farpointgridax.doexportgrid"></a>

<a name="DoFullText"></a>    
#### DoFullText

Return whole grid as text

```javascript
DoFullText(saveToFile, fileName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| saveToFile | boolean |	'true' if you need to have copy of the text in the file |
| fileName | string |	Path to destination file |





<a name="see.also.farpointgridax.dofulltext"></a>

	

