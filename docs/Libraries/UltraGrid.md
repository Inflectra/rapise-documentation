Summary: Infragistics UltraGrid.

# UltraGrid

Infragistics UltraGrid.
 
UI element class: Infragistics.Win.UltraWinGrid.UltraGrid

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: UltraGridBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Cell](#cell) | Text of the specified cell. | GetCell |  |
| [ColumnCount](#columncount) | Number of columns in the table. | GetColumnCount |  |
| [ColumnName](#columnname) | Caption of a column. | GetColumnName |  |
| [RowCount](#rowcount) | Number of rows in the table. | GetRowCount |  |
| [SelectedColumn](#selectedcolumn) | Index of the selected column. | GetSelectedColumn |  |
| [SelectedRow](#selectedrow) | Index of the selected row. | GetSelectedRow |  |
| [Text](#text) | Text of the currently focused cell. | GetText |  |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickCell](#doclickcell) | Clicks the specified cell. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="Cell"></a>
#### Cell


Text of the specified cell.

      
  
      
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
| columnIndex | number | Zero-based index of the column. |


  
      
Type: string
      
      
Accessors: GetColumnName
      
    
<a name="RowCount"></a>
#### RowCount


Number of rows in the table.

      
  
      
Type: number
      
      
Accessors: GetRowCount
      
    
<a name="SelectedColumn"></a>
#### SelectedColumn


Index of the selected column.

      
  
      
Type: number
      
      
Accessors: GetSelectedColumn
      
    
<a name="SelectedRow"></a>
#### SelectedRow


Index of the selected row.

      
  
      
Type: number
      
      
Accessors: GetSelectedRow
      
    
<a name="Text"></a>
#### Text


Text of the currently focused cell.

      
  
      
Type: string
      
      
Accessors: GetText
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoClickCell"></a>    
#### DoClickCell

Clicks the specified cell.

```javascript
SeS('SomeUltraGrid').DoClickCell(row, col, clickType, xOffset, yOffset)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number \| string |  Zero-based index if the row or text of a cell in the specified column. |
| col | string \| number |  Zero-based index of the column or column name. |
| clickType | string |  Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |
| xOffset | number |  X offset to click within node. Default is a center.<br>Optional. |
| yOffset | number |  Y offset to click within node. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.ultragrid.doclickcell"></a>

  

