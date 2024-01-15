Summary: Behavior patterm for Dynamics AX grid/table.

# DynamicsAXTable

Behavior patterm for Dynamics AX grid/table.
 
Extends [UIAObject](UIAObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DynamicsAXTableBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Cell](#cell) | Text of the specified cell. | GetCell |  |
| [CellObject](#cellobject) | UIAObject for the specified cell. | GetCellObject |  |
| [ColumnCount](#columncount) | Number of columns in the grid. | GetColumnCount |  |
| [ColumnIndex](#columnindex) | Zero-based index of the column. | GetColumnIndex |  |
| [ColumnName](#columnname) | Caption of a column. | GetColumnName |  |
| [ColumnValues](#columnvalues) | Values of cells in a column | GetColumnValues |  |
| [RowCount](#rowcount) | Number of rows in the grid. | GetRowCount |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickCell](#doclickcell) | Clicks the specified cell. |
|  [DoClickColumn](#doclickcolumn) | Clicks on column header |
|  [DoScroll](#doscroll) | Scrolls table horizontally and vertically. |



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
value = SeS('SomeDynamicsAXTable').GetCell(/**number|string*/ row, /**string|number*/ col)
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
value = SeS('SomeDynamicsAXTable').GetCellObject(/**number|string*/ row, /**string|number*/ col)
```


<a name="ColumnCount"></a>
#### ColumnCount

Number of columns in the grid.



Type: number


Accessors: GetColumnCount

```javascript
value = SeS('SomeDynamicsAXTable').GetColumnCount()
```


<a name="ColumnIndex"></a>
#### ColumnIndex

Zero-based index of the column.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| columnName | string | Name of a column. |




Type: number


Accessors: GetColumnIndex

```javascript
value = SeS('SomeDynamicsAXTable').GetColumnIndex(/**string*/ columnName)
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
value = SeS('SomeDynamicsAXTable').GetColumnName(/**number*/ columnIndex)
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
value = SeS('SomeDynamicsAXTable').GetColumnValues(/**number*/ columnIndex,/**number*/ maxCount)
```


<a name="RowCount"></a>
#### RowCount

Number of rows in the grid.



Type: number


Accessors: GetRowCount

```javascript
value = SeS('SomeDynamicsAXTable').GetRowCount()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClickCell"></a>    
#### DoClickCell

Clicks the specified cell.

```javascript
SeS('SomeDynamicsAXTable').DoClickCell(row, col, clickType, xOffset, yOffset)
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



<a name="see.also.dynamicsaxtable.doclickcell"></a>

<a name="DoClickColumn"></a>    
#### DoClickColumn

Clicks on column header

```javascript
SeS('SomeDynamicsAXTable').DoClickColumn(col, clickType, xOffset, yOffset)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| col | number \| string |  Zero-based index of the column or column name. |
| clickType | string |  Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |
| xOffset | number |  X offset to click within node. Default is a center.<br>Optional. |
| yOffset | number |  Y offset to click within node. Default is a center.<br>Optional. |





<a name="see.also.dynamicsaxtable.doclickcolumn"></a>

<a name="DoScroll"></a>    
#### DoScroll

Scrolls table horizontally and vertically.

```javascript
SeS('SomeDynamicsAXTable').DoScroll(horizontalPercent, verticalPercent)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| horizontalPercent | number |  Percent value from 0 to 100. -1 means no horizontal scroll. |
| verticalPercent | number |  Percent value from 0 to 100. -1 means no vertical scroll. |





<a name="see.also.dynamicsaxtable.doscroll"></a>

  

