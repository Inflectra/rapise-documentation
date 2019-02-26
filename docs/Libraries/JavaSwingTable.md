# JavaSwingTable

Java Swing Table.
 
Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="JavaObject" styleclass="Normal" translate="true">JavaObject</link>.

Extends SeSSimulatedObject.





**Behavior Pattern: JavaSwingObjectTableBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Cell](#Cell) | Text of the specified cell. | GetCell |  |
| [ColumnCount](#ColumnCount) | Number of columns in the table. | GetColumnCount |  |
| [ColumnName](#ColumnName) | Caption of a column. | GetColumnName |  |
| [RowCount](#RowCount) | Number of rows in the table. | GetRowCount |  |
| [SelectedCells](#SelectedCells) | Returns string of cell coordinates delimited by separators or an array of coordinate objects for selected cells. | GetSelectedCells |  |
| [SelectedColumn](#SelectedColumn) | Index of the selected column. | GetSelectedColumn |  |
| [SelectedColumnCount](#SelectedColumnCount) | Number of selected columns. | GetSelectedColumnCount |  |
| [SelectedColumns](#SelectedColumns) | Returns string of indexes delimited by separator or array of indexes of selected columns. | GetSelectedColumns |  |
| [SelectedRow](#SelectedRow) | Index of the selected row. | GetSelectedRow |  |
| [SelectedRowCount](#SelectedRowCount) | Number of selected rows. | GetSelectedRowCount |  |
| [SelectedRows](#SelectedRows) | Returns string of indexes delimited by separator or array of indexes of selected rows. | GetSelectedRows |  |
| [Text](#Text) | Text of the currently focused cell. | GetText |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickCell](#DoClickCell) | Clicks the specified cell |
|	[DoFullText](#DoFullText) | Read and return full text contents of the table |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Cell"></a>
#### Cell


Text of the specified cell.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| row | number | Zero-based index if the row. |
| col | number | Zero-based index of the column. |


	
			
Type: string
			
			
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


Number of rows in the table.

			
	
			
Type: number
			
			
Accessors: GetRowCount
			
		
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
			
			
Accessors: GetSelectedColumn
			
		
<a name="SelectedColumnCount"></a>
#### SelectedColumnCount


Number of selected columns.

			
	
			
Type: number
			
			
Accessors: GetSelectedColumnCount
			
		
<a name="SelectedColumns"></a>
#### SelectedColumns


Returns string of indexes delimited by separator or array of indexes of selected columns.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| asArray | boolean | If set to true, function returns an array. |
| separator | string | Separator character.<br>Optional, Default: ;. |


	
			
Type: array|string
			
			
Accessors: GetSelectedColumns
			
		
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


Returns string of indexes delimited by separator or array of indexes of selected rows.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| asArray | boolean | If set to true, function returns an array. |
| separator | string | Separator character.<br>Optional, Default: ;. |


	
			
Type: array|string
			
			
Accessors: GetSelectedRows
			
		
<a name="Text"></a>
#### Text


Text of the currently focused cell.

			
	
			
Type: string
			
			
Accessors: GetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickCell"></a>    
#### DoClickCell(row, col, clickType, xOffset, yOffset)

Clicks the specified cell


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number |	Zero-based index if the row. |
| col | number |	Zero-based index of the column. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L. |
| xOffset | number |	X offset to click within object. Default is a center.<br>Optional. |
| yOffset | number |	Y offset to click within object. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise




<a name="DoFullText"></a>    
#### DoFullText()

Read and return full text contents of the table




**Returns:**

string | <br>boolean: Full text of the table (may be very long!), 'false' otherwise




	

