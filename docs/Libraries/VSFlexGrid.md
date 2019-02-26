# VSFlexGrid

This behavior pattern implements standard behavior for Grid control.
 
Extends ActiveXObject.

Extends SeSSimulatedObject.





**Behavior Pattern: VSFlexGridBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Cell](#Cell) | Text of the specified cell. | GetCell | SetCell |
| [ColumnCount](#ColumnCount) | Number of columns in the grid. | GetColumnCount | SetColumnCount |
| [ColumnName](#ColumnName) | Caption of a column. | GetColumnName | SetColumnName |
| [Height](#Height) | Height of the object. | GetHeight |  |
| [RowCount](#RowCount) | Number of rows in the grid. | GetRowCount | SetRowCount |
| [SelectedRow](#SelectedRow) | Checked state of the selected node or a node specified by the input parameters. | GetSelectedRow | SetSelectedRow |
| [SelectedRowCount](#SelectedRowCount) | Number of selected rows. | GetSelectedRowCount |  |
| [SelectedRows](#SelectedRows) | Selected rows. | GetSelectedRows | SetSelectedRows |
| [Text](#Text) | Text of the currently focused cell. | GetText | SetText |
| [Width](#Width) | Width of the object. | GetWidth |  |
| [X](#X) | X-coordinate of the top left corner of the object. | GetX |  |
| [Y](#Y) | Y-coordinate of the top left corner of the object. | GetY |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickCell](#DoClickCell) | Clicks the specified cell. |
|	[DoClickText](#DoClickText) | Clicks on a specific text inside the grid. |
|	[DoFullText](#DoFullText) | Returns text representation of the grid. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Cell"></a>
#### Cell


Text of the specified cell.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| rowIndex | number | Zero-based index of the column. |
| columnIndex | number | Zero-based index if the row. |


	
			
Type: string
			
			
Accessors: GetCell, SetCell
			
		
<a name="ColumnCount"></a>
#### ColumnCount


Number of columns in the grid.

			
	
			
Type: number
			
			
Accessors: GetColumnCount, SetColumnCount
			
		
<a name="ColumnName"></a>
#### ColumnName


Caption of a column.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| columnIndex | number | Zero-based index of the column. |


	
			
Type: string
			
			
Accessors: GetColumnName, SetColumnName
			
		
<a name="Height"></a>
#### Height


Height of the object.

			
	
			
Type: number
			
			
Accessors: GetHeight
			
		
<a name="RowCount"></a>
#### RowCount


Number of rows in the grid.

			
	
			
Type: number
			
			
Accessors: GetRowCount, SetRowCount
			
		
<a name="SelectedRow"></a>
#### SelectedRow


Checked state of the selected node or a node specified by the input parameters.

			
	
			
Type: boolean
			
			
Accessors: GetSelectedRow, SetSelectedRow
			
		
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
| separator | string | Separator character.<br>Optional, Default: ;. |


	
			
Type: array|string
			
			
Accessors: GetSelectedRows, SetSelectedRows
			
		
<a name="Text"></a>
#### Text


Text of the currently focused cell.

			
	
			
Type: string
			
			
Accessors: GetText, SetText
			
		
<a name="Width"></a>
#### Width


Width of the object.

			
	
			
Type: number
			
			
Accessors: GetWidth
			
		
<a name="X"></a>
#### X


X-coordinate of the top left corner of the object.

			
	
			
Type: number
			
			
Accessors: GetX
			
		
<a name="Y"></a>
#### Y


Y-coordinate of the top left corner of the object.

			
	
			
Type: number
			
			
Accessors: GetY
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickCell"></a>    
#### DoClickCell(row, col, clickType)

Clicks the specified cell.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number \| string |	Zero-based index if the row or text of a cell in the specified column. |
| col | string \| number |	Zero-based index of the column or column name. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise




<a name="DoClickText"></a>    
#### DoClickText()

Clicks on a specific text inside the grid.




**Returns:**

'true' if successful, 'false' otherwise




<a name="DoFullText"></a>    
#### DoFullText(path, fmt)

Returns text representation of the grid.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Name of a file that should hold text representation of the grid.<br>Optional. |
| fmt | number |	function () {
}<br>Optional. |




**Returns:**

string: Path to a file with grid text when 'path' param is defined. Otherwise return Grid text.




	

