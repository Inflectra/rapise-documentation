Summary: Behavior patterm for Dynamics NAV grid/table.

# DynamicsNAVTable

Behavior patterm for Dynamics NAV grid/table.
 
Extends [UIAObject](UIAObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DynamicsNAVTableBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Cell](#cell) | Text of the specified cell. | GetCell |  |
| [CellObject](#cellobject) | UIAObject for the specified cell. | GetCellObject |  |
| [CellRowIndex](#cellrowindex) | Index of a row with the specified cell. | GetCellRowIndex |  |
| [ColumnCount](#columncount) | Number of columns in the grid. | GetColumnCount |  |
| [ColumnIndex](#columnindex) | Index of a column with given name. | GetColumnIndex |  |
| [ColumnName](#columnname) | Caption of a column. | GetColumnName |  |
| [ColumnValues](#columnvalues) | Values of cells in a column | GetColumnValues |  |
| [RowCount](#rowcount) | Number of rows in the grid. | GetRowCount |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickCell](#doclickcell) | Clicks the specified cell. |
|  [DoClickColumn](#doclickcolumn) | Clicks on column header |
|  [DoScrollTo](#doscrollto) | Scrolls to the specified cell |



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

```javascript
value = SeS('SomeDynamicsNAVTable').GetCell(/**number|string*/ row, /**string|number*/ col)
```


<a name="CellObject"></a>
#### CellObject

UIAObject for the specified cell.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| row | number \| string | Zero-based index of a row or cell text. |
| col | string \| number | Name of a column or zero-based column index. |




Type: UIAObject


Accessors: GetCellObject

```javascript
value = SeS('SomeDynamicsNAVTable').GetCellObject(/**number|string*/ row, /**string|number*/ col)
```


<a name="CellRowIndex"></a>
#### CellRowIndex

Index of a row with the specified cell.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| row | string | Text in the cell to search for. |
| col | string \| number | Name of a column or zero-based column index. |




Type: number


Accessors: GetCellRowIndex

```javascript
value = SeS('SomeDynamicsNAVTable').GetCellRowIndex(/**string*/ row, /**string|number*/ col)
```


<a name="ColumnCount"></a>
#### ColumnCount

Number of columns in the grid.



Type: number


Accessors: GetColumnCount

```javascript
value = SeS('SomeDynamicsNAVTable').GetColumnCount()
```


<a name="ColumnIndex"></a>
#### ColumnIndex

Index of a column with given name.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| columnName | string | Column name. |




Type: number


Accessors: GetColumnIndex

```javascript
value = SeS('SomeDynamicsNAVTable').GetColumnIndex(/**string*/ columnName)
```


<a name="ColumnName"></a>
#### ColumnName

Caption of a column.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| columnIndex | number | Zero-based index of the column. |




Type: string


Accessors: GetColumnName

```javascript
value = SeS('SomeDynamicsNAVTable').GetColumnName(/**number*/ columnIndex)
```


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

```javascript
value = SeS('SomeDynamicsNAVTable').GetColumnValues(/**number*/ columnIndex, /**number*/ maxCount)
```


<a name="RowCount"></a>
#### RowCount

Number of rows in the grid.



Type: number


Accessors: GetRowCount

```javascript
value = SeS('SomeDynamicsNAVTable').GetRowCount()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClickCell"></a>    
#### DoClickCell

Clicks the specified cell.

```javascript
SeS('SomeDynamicsNAVTable').DoClickCell(row, col, clickType, xOffset, yOffset)
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



<a name="see.also.dynamicsnavtable.doclickcell"></a>

<a name="DoClickColumn"></a>    
#### DoClickColumn

Clicks on column header

```javascript
SeS('SomeDynamicsNAVTable').DoClickColumn(col, clickType, xOffset, yOffset)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| col | number \| string |  Zero-based index of the column or column name. |
| clickType | string |  Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |
| xOffset | number |  X offset to click within node. Default is a center.<br>Optional. |
| yOffset | number |  Y offset to click within node. Default is a center.<br>Optional. |





<a name="see.also.dynamicsnavtable.doclickcolumn"></a>

<a name="DoScrollTo"></a>    
#### DoScrollTo

Scrolls to the specified cell

```javascript
SeS('SomeDynamicsNAVTable').DoScrollTo(row, col)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number \| string |  Zero-based index if the row or text of a cell in the specified column. |
| col | string \| number |  Zero-based index of the column or column name. |





<a name="see.also.dynamicsnavtable.doscrollto"></a>

  

