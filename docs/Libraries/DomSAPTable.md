Summary: Table control.

# DomSAPTable

Table control.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DomSAPTableBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Cell](#cell) | Text of the specified cell. | GetCell |  |
| [ColumnCount](#columncount) | Number of columns in the grid. | GetColumnCount |  |
| [ColumnIndex](#columnindex) | Index of a column with a given name. | GetColumnIndex |  |
| [ColumnName](#columnname) | Caption of a column. | GetColumnName |  |
| [RowCount](#rowcount) | Number of rows in the grid. | GetRowCount |  |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickCell](#doclickcell) | Clicks the specified cell. |
|  [DoFullText](#dofulltext) | Returns text representation of the table. |
|  [DoScrollTo](#doscrollto) | Scrolls to the specified cell. |




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

      
  
      
Type: number
      
      
Accessors: GetColumnCount
      
    
<a name="ColumnIndex"></a>
#### ColumnIndex


Index of a column with a given name.

      
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| columnName | string | Name of a column. |


  
      
Type: string
      
      
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
      
    
<a name="RowCount"></a>
#### RowCount


Number of rows in the grid.

      
  
      
Type: number
      
      
Accessors: GetRowCount
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoClickCell"></a>    
#### DoClickCell

Clicks the specified cell.

```javascript
SeS('SomeDomSAPTable').DoClickCell(row, col, clickType, xOffset, yOffset)
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



<a name="see.also.domsaptable.doclickcell"></a>

<a name="DoFullText"></a>    
#### DoFullText

Returns text representation of the table.

```javascript
SeS('SomeDomSAPTable').DoFullText()
```




**Returns:**

string | <br>boolean: Text representation of the grid, 'true' if the file was successfully written, 'false' otherwise.



<a name="see.also.domsaptable.dofulltext"></a>

<a name="DoScrollTo"></a>    
#### DoScrollTo

Scrolls to the specified cell.

```javascript
SeS('SomeDomSAPTable').DoScrollTo(row, col)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number \| string |  Zero-based index if the row or text of a cell in the specified column. |
| col | string \| number |  Zero-based index of the column or column name. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.domsaptable.doscrollto"></a>

  

