Summary: Telerik RadGridView.

# TelerikRadGridView

Telerik RadGridView.
 
UI element class: Telerik.WinControls.UI.RadGridView

Extends [ManagedDataGridView](ManagedDataGridView.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: TelerikGridViewBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Cell](#Cell) | Text of the specified cell. | GetCell |  |
| [ColumnCount](#ColumnCount) | Number of columns in the table. | GetColumnCount |  |
| [ColumnName](#ColumnName) | Caption of a column. | GetColumnName |  |
| [RowCount](#RowCount) | Number of rows in the table. | GetRowCount |  |
| [SelectedCell](#SelectedCell) | Selected Cell | GetSelectedCell |  |
| [Text](#Text) | Text of the currently focused cell. | GetText |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickCell](#DoClickCell) | Clicks the specified cell |




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
			
		
<a name="SelectedCell"></a>
#### SelectedCell


Selected Cell

			
	
			
Type: object
			
			
Accessors: GetSelectedCell
			
		
<a name="Text"></a>
#### Text


Text of the currently focused cell.

			
	
			
Type: string
			
			
Accessors: GetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickCell"></a>    
#### DoClickCell(row, col)

Clicks the specified cell


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number |	Zero-based index if the row. |
| col | number |	Zero-based index of the column. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.telerikradgridview.doclickcell"></a>

	

