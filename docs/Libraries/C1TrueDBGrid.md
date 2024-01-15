Summary: Component One True DB Grid Control

# C1TrueDBGrid

Component One True DB Grid Control
 
Extends [ActiveXObject](ActiveXObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: C1TrueDBGridBehavior**


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
|  [DoClickCell](#doclickcell) | Clicks the specified cell |
|  [DoClickText](#doclicktext) | Clicks on a specific text inside the grid. |
|  [DoFullText](#dofulltext) | Full text of the table (may be very long!). |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="Cell"></a>
#### Cell

Text of the specified cell.



Type: string


Accessors: GetCell

```javascript
value = SeS('SomeC1TrueDBGrid').GetCell(/**Number*/row, /**Number*/col)
```


<a name="ColumnCount"></a>
#### ColumnCount

Number of columns in the table.



Type: number


Accessors: GetColumnCount

```javascript
value = SeS('SomeC1TrueDBGrid').GetColumnCount()
```


<a name="ColumnName"></a>
#### ColumnName

Caption of a column.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| col | number | Zero-based index of the column. |




Type: string


Accessors: GetColumnName

```javascript
value = SeS('SomeC1TrueDBGrid').GetColumnName(/**number*/ col)
```


<a name="RowCount"></a>
#### RowCount

Number of rows in the table.



Type: number


Accessors: GetRowCount

```javascript
value = SeS('SomeC1TrueDBGrid').GetRowCount()
```


<a name="SelectedColumn"></a>
#### SelectedColumn

Index of the selected column.



Type: number


Accessors: GetSelectedColumn

```javascript
value = SeS('SomeC1TrueDBGrid').GetSelectedColumn()
```


<a name="SelectedRow"></a>
#### SelectedRow

Index of the selected row.



Type: number


Accessors: GetSelectedRow

```javascript
value = SeS('SomeC1TrueDBGrid').GetSelectedRow()
```


<a name="Text"></a>
#### Text

Text of the currently focused cell.



Type: string


Accessors: GetText

```javascript
value = SeS('SomeC1TrueDBGrid').GetText()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClickCell"></a>    
#### DoClickCell

Clicks the specified cell

```javascript
SeS('SomeC1TrueDBGrid').DoClickCell(row, col, clickType, xOffset, yOffset)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number |  Zero-based index if the row. |
| col | number |  Zero-based index of the column. |
| clickType | string |  Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |
| xOffset | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| yOffset | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.c1truedbgrid.doclickcell"></a>

<a name="DoClickText"></a>    
#### DoClickText

Clicks on a specific text inside the grid.

```javascript
SeS('SomeC1TrueDBGrid').DoClickText(textOrRegexp, clickType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| textOrRegexp | string |  Text (or regex: expression) to search in the grid. |
| clickType | string |  Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |




**Returns:**

'true' if successful, 'false' otherwise



<a name="see.also.c1truedbgrid.doclicktext"></a>

<a name="DoFullText"></a>    
#### DoFullText

Full text of the table (may be very long!).

```javascript
SeS('SomeC1TrueDBGrid').DoFullText()
```




**Returns:**

string: Table's full text



<a name="see.also.c1truedbgrid.dofulltext"></a>

  

