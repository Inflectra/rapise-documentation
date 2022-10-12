Summary: This behavior pattern implements standard behavior for AgGrid control.

# AgGrid

This behavior pattern implements standard behavior for AgGrid control.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: AgGridBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Cell](#cell) | Text of the specified cell. | GetCell |  |
| [ColumnCount](#columncount) | Number of columns in the grid. | GetColumnCount |  |
| [ColumnId](#columnid) | Internal ID of a column with a given name. | GetColumnId |  |
| [ColumnIndex](#columnindex) | Index of a column with a given name. | GetColumnIndex |  |
| [ColumnName](#columnname) | Caption of a column. | GetColumnName |  |
| [ColumnVisible](#columnvisible) | Returns true if a column is visible on screen, otherwise - false. | GetColumnVisible |  |
| [RowCount](#rowcount) | Number of rows in the grid. | GetRowCount |  |
| [SelectedRow](#selectedrow) | Index of the selected row. | GetSelectedRow |  |
| [SelectedRowCount](#selectedrowcount) | Number of selected rows. | GetSelectedRowCount |  |
| [SelectedRows](#selectedrows) | Selected rows. | GetSelectedRows |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickBottomCell](#doclickbottomcell) | Clicks floating bottom cell in the specified column. |
|	[DoClickCell](#doclickcell) | Clicks the specified cell. |
|	[DoFilterByColumn](#dofilterbycolumn) | Enters value into the column filter for specified column. |
|	[DoFullText](#dofulltext) | Returns text representation of the table. |
|	[DoScrollBy](#doscrollby) | Performs horizontal and vertical scrolling. |
|	[DoScrollTo](#doscrollto) | Scrolls to a given row, col. |
|	[DoSetCheckbox](#dosetcheckbox) | Clicks floating bottom cell in the specified column. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Cell"></a>
#### Cell


Text of the specified cell.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| row | number \| string | Zero-based index of a row or cell text. |
| col | string \| number | Name of a column or zero-based column index. |


	
			
Type: string
			
			
Accessors: GetCell
			
		
<a name="ColumnCount"></a>
#### ColumnCount


Number of columns in the grid.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| headerIndex | number | Zero-based index of a header row. Optional. Default value is zero. |


	
			
Type: number
			
			
Accessors: GetColumnCount
			
		
<a name="ColumnId"></a>
#### ColumnId


Internal ID of a column with a given name. If the column is not available in the viewport returns empty string. The ID can be used instead of a column name in ClickCell.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| columnName | string | Name of a column. |


	
			
Type: string
			
			
Accessors: GetColumnId
			
		
<a name="ColumnIndex"></a>
#### ColumnIndex


Index of a column with a given name. If the column is not available in the viewport returns -1

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| columnName | string | Name of a column. |


	
			
Type: number
			
			
Accessors: GetColumnIndex
			
		
<a name="ColumnName"></a>
#### ColumnName


Caption of a column.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| columnIndex | number | Zero-based index of the column. |


	
			
Type: string
			
			
Accessors: GetColumnName
			
		
<a name="ColumnVisible"></a>
#### ColumnVisible


Returns true if a column is visible on screen, otherwise - false.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| columnIndex | number | Index of a column. |


	
			
Type: boolean
			
			
Accessors: GetColumnVisible
			
		
<a name="RowCount"></a>
#### RowCount


Number of rows in the grid.

			
	
			
Type: number
			
			
Accessors: GetRowCount
			
		
<a name="SelectedRow"></a>
#### SelectedRow


Index of the selected row.

			
	
			
Type: number
			
			
Accessors: GetSelectedRow
			
		
<a name="SelectedRowCount"></a>
#### SelectedRowCount


Number of selected rows.

			
	
			
Type: number
			
			
Accessors: GetSelectedRowCount
			
		
<a name="SelectedRows"></a>
#### SelectedRows


Selected rows.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| asArray | boolean | If set to true, function returns an array. |
| separator | string | Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |


	
			
Type: array|string
			
			
Accessors: GetSelectedRows
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickBottomCell"></a>    
#### DoClickBottomCell

Clicks floating bottom cell in the specified column.

```javascript
DoClickBottomCell(col, clickType, xOffset, yOffset) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| col | string \| number |	Column name or zero-based index of the column. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |
| xOffset | number |	X offset to click within a cell. Default is center.<br>Optional. |
| yOffset | number |	Y offset to click within a cell. Default is center.<br>Optional. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.aggrid.doclickbottomcell"></a>

<a name="DoClickCell"></a>    
#### DoClickCell

Clicks the specified cell.

```javascript
DoClickCell(row, col, clickType, xOffset, yOffset) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number \| string |	Zero-based index if the row or text of a cell in the specified column. |
| col | string \| number |	Zero-based index of the column or column name. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |
| xOffset | number |	X offset to click within node. Default is a center.<br>Optional. |
| yOffset | number |	Y offset to click within node. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.aggrid.doclickcell"></a>

<a name="DoFilterByColumn"></a>    
#### DoFilterByColumn

Enters value into the column filter for specified column.

```javascript
DoFilterByColumn(col, value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| col | string \| number |	Column name or zero-based index of the column. |
| value | string |	Value to filter by. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.aggrid.dofilterbycolumn"></a>

<a name="DoFullText"></a>    
#### DoFullText

Returns text representation of the table.

```javascript
DoFullText() 
```




**Returns:**

string | <br>boolean: Text representation of the grid, 'true' if the file was successfully written, 'false' otherwise.



<a name="see.also.aggrid.dofulltext"></a>

<a name="DoScrollBy"></a>    
#### DoScrollBy

Performs horizontal and vertical scrolling.

```javascript
DoScrollBy(h, v, withArrows) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| h | number |	Number of horizontal scroll actions, positive - right, negative - left. |
| v | number |	Number of vertical scroll actions, positive - down, negative - up. |
| withArrows | boolean |	By default it is false, when set to true then scrolling is performed via arrow keys.<br>Optional, Default: "false". |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.aggrid.doscrollby"></a>

<a name="DoScrollTo"></a>    
#### DoScrollTo

Scrolls to a given row, col.

```javascript
DoScrollTo(row, col, left, up, rewind, useArrows) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number |	Index of a row to make visible on screen. If row is -1 then no vertical scrolling is performed. |
| col | string |	Name of a column to make visible on screen. If col is empty or null then no horizontal scrolling is performed. |
| left | boolean |	By default it is false, when set to true then horizontal scrolling direction is left side.<br>Optional, Default: "false". |
| up | boolean |	By default it is false, when set to true then vertical scrolling direction is up side.<br>Optional, Default: "false". |
| rewind | boolean |	By default it is false, when set to true then before scrolling the grid is positioned to make top-left cell visible. May not work with some grids.<br>Optional, Default: "false". |
| useArrows | boolean |	By default it is false, when set to true then horizontal scrolling is performed via arrow keys.<br>Optional, Default: "false". |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.aggrid.doscrollto"></a>

<a name="DoSetCheckbox"></a>    
#### DoSetCheckbox

Clicks floating bottom cell in the specified column.

```javascript
DoSetCheckbox(row, col) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number \| string |	Zero-based index if the row or text of a cell in the specified column. |
| col | string \| number |	Column name or zero-based index of the column. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.aggrid.dosetcheckbox"></a>

	

