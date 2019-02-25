# DynamicsAXTable

Behavior patterm for Dynamics AX grid/table.
 
Extends UIAObject.

Extends SeSSimulatedObject.





**Behavior Pattern: DynamicsAXTableBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Cell](#Cell) | Text of the specified cell. | GetCell |  |
| [CellObject](#CellObject) | UIAObject for the specified cell. | GetCellObject |  |
| [ColumnCount](#ColumnCount) | Number of columns in the grid. | GetColumnCount |  |
| [ColumnIndex](#ColumnIndex) | Zero-based index of the column. | GetColumnIndex |  |
| [ColumnName](#ColumnName) | Caption of a column. | GetColumnName |  |
| [ColumnValues](#ColumnValues) | Values of cells in a column | GetColumnValues |  |
| [RowCount](#RowCount) | Number of rows in the grid. | GetRowCount |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickCell](#DoClickCell) | Clicks the specified cell. |
|	[DoClickColumn](#DoClickColumn) | Clicks on column header |
|	[DoScroll](#DoScroll) | Scrolls table horizontally and vertically. |




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
			
		
<a name="CellObject"></a>
#### CellObject


UIAObject for the specified cell.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| row | number \| string | Zero-based index of a row or cell text. |
| col | string \| number | Name of a column or zero-based column index. |


	
			
Type: object
			
			
Accessors: GetCellObject
			
		
<a name="ColumnCount"></a>
#### ColumnCount


Number of columns in the grid.

			
	
			
Type: number
			
			
Accessors: GetColumnCount
			
		
<a name="ColumnIndex"></a>
#### ColumnIndex


Zero-based index of the column.

			
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
			
		
<a name="ColumnValues"></a>
#### ColumnValues


Values of cells in a column

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| columnIndex | number | Zero-based index of the column. |
| maxCount | number | Maximum number of values to return. Zero means everything. |


	
			
Type: Array
			
			
Accessors: GetColumnValues
			
		
<a name="RowCount"></a>
#### RowCount


Number of rows in the grid.

			
	
			
Type: number
			
			
Accessors: GetRowCount
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickCell"></a>    
#### DoClickCell(row, col, clickType, xOffset, yOffset)

Clicks the specified cell.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number \| string |	Zero-based index if the row or text of a cell in the specified column. |
| col | string \| number |	Zero-based index of the column or column name. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L. |
| xOffset | number |	X offset to click within node. Default is a center.<br>Optional. |
| yOffset | number |	Y offset to click within node. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise




<a name="DoClickColumn"></a>    
#### DoClickColumn(col, clickType, xOffset, yOffset)

Clicks on column header


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| col | number \| string |	Zero-based index of the column or column name. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L. |
| xOffset | number |	X offset to click within node. Default is a center.<br>Optional. |
| yOffset | number |	Y offset to click within node. Default is a center.<br>Optional. |






<a name="DoScroll"></a>    
#### DoScroll(horizontalPercent, verticalPercent)

Scrolls table horizontally and vertically.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| horizontalPercent | number |	Percent value from 0 to 100. -1 means no horizontal scroll. |
| verticalPercent | number |	Percent value from 0 to 100. -1 means no vertical scroll. |






	

