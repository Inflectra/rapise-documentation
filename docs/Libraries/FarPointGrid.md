Summary: This behavior pattern implements standard behavior for Grid control.

# FarPointGrid

This behavior pattern implements standard behavior for Grid control.
 
Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: FarPointGridBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Cell](#cell) | Text of the specified cell. | GetCell | SetCell |
| [ColumnCount](#columncount) | Number of columns in the grid. | GetColumnCount | SetColumnCount |
| [ColumnName](#columnname) | Caption of a column. | GetColumnName | SetColumnName |
| [RowCount](#rowcount) | Number of rows in the grid. | GetRowCount | SetRowCount |
| [SelectedCells](#selectedcells) | Selected cells. | GetSelectedCells | SetSelectedCells |
| [SelectedColumn](#selectedcolumn) | Index of the selected column. | GetSelectedColumn |  |
| [SelectedColumnCount](#selectedcolumncount) | Number of selected columns. | GetSelectedColumnCount |  |
| [SelectedRow](#selectedrow) | Index of the selected row. | GetSelectedRow |  |
| [SelectedRowCount](#selectedrowcount) | Number of selected rows. | GetSelectedRowCount |  |
| [Text](#text) | Text of the currently focused cell. | GetText | SetText |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickCell](#doclickcell) | Clicks the specified cell |
|  [DoFullText](#dofulltext) | Returns text representation of the table. |




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
      
    
<a name="RowCount"></a>
#### RowCount


Number of rows in the grid.

      
  
      
Type: number
      
      
Accessors: GetRowCount, SetRowCount
      
    
<a name="SelectedCells"></a>
#### SelectedCells


Selected cells.

      
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| asArray |  |  |
| rowcolSep |  |  |
| cellSep |  |  |


  
      
Type: array|string
      
      
Accessors: GetSelectedCells, SetSelectedCells
      
    
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
      
    
<a name="Text"></a>
#### Text


Text of the currently focused cell.

      
  
      
Type: string
      
      
Accessors: GetText, SetText
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoClickCell"></a>    
#### DoClickCell

Clicks the specified cell

```javascript
SeS('SomeFarPointGrid').DoClickCell(rowIndex, columnIndex)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowIndex | number |  Zero-based index if the row. |
| columnIndex | number |  Zero-based index of the column. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.farpointgrid.doclickcell"></a>

<a name="DoFullText"></a>    
#### DoFullText

Returns text representation of the table.

```javascript
SeS('SomeFarPointGrid').DoFullText(fileName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |  Name of a file that should hold text representation of the grid.<br>Optional. |




**Returns:**

string | <br>boolean: Text representation of the grid, 'true' if the file was successfully written, 'false' otherwise.



<a name="see.also.farpointgrid.dofulltext"></a>

  

