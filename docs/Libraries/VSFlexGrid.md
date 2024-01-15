Summary: This behavior pattern implements standard behavior for Grid control.

# VSFlexGrid

This behavior pattern implements standard behavior for Grid control.
 
Extends [ActiveXObject](ActiveXObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: VSFlexGridBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Cell](#cell) | Text of the specified cell. | GetCell | SetCell |
| [ColumnCount](#columncount) | Number of columns in the grid. | GetColumnCount | SetColumnCount |
| [ColumnName](#columnname) | Caption of a column. | GetColumnName | SetColumnName |
| [Height](#height) | Height of the object. | GetHeight |  |
| [RowCount](#rowcount) | Number of rows in the grid. | GetRowCount | SetRowCount |
| [SelectedRow](#selectedrow) | Checked state of the selected node or a node specified by the input parameters. | GetSelectedRow | SetSelectedRow |
| [SelectedRowCount](#selectedrowcount) | Number of selected rows. | GetSelectedRowCount |  |
| [SelectedRows](#selectedrows) | Selected rows. | GetSelectedRows | SetSelectedRows |
| [Text](#text) | Text of the currently focused cell. | GetText | SetText |
| [Width](#width) | Width of the object. | GetWidth |  |
| [X](#x) | X-coordinate of the top left corner of the object. | GetX |  |
| [Y](#y) | Y-coordinate of the top left corner of the object. | GetY |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickCell](#doclickcell) | Clicks the specified cell. |
|  [DoClickText](#doclicktext) | Clicks on a specific text inside the grid. |
|  [DoFullText](#dofulltext) | Returns text representation of the grid. |



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

```javascript
value = SeS('SomeVSFlexGrid').GetCell(/**number*/rowIndex, /**number*/columnIndex)

SeS('SomeVSFlexGrid').SetCell(/**number*/rowIndex, /**number*/columnIndex, /**string*/value)
```


<a name="ColumnCount"></a>
#### ColumnCount

Number of columns in the grid.



Type: number


Accessors: GetColumnCount, SetColumnCount

```javascript
value = SeS('SomeVSFlexGrid').GetColumnCount()

SeS('SomeVSFlexGrid').SetColumnCount(/**number*/cols)
```


<a name="ColumnName"></a>
#### ColumnName

Caption of a column.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| columnIndex | number | Zero-based index of the column. |




Type: string


Accessors: GetColumnName, SetColumnName

```javascript
value = SeS('SomeVSFlexGrid').GetColumnName(/**number*/columnIndex)

SeS('SomeVSFlexGrid').SetColumnName(/**number*/columnIndex, /**string*/value)
```


<a name="Height"></a>
#### Height

Height of the object.



Type: number


Accessors: GetHeight

```javascript
value = SeS('SomeVSFlexGrid').GetHeight()
```


<a name="RowCount"></a>
#### RowCount

Number of rows in the grid.



Type: number


Accessors: GetRowCount, SetRowCount

```javascript
value = SeS('SomeVSFlexGrid').GetRowCount()

SeS('SomeVSFlexGrid').SetRowCount(/**number*/cols)
```


<a name="SelectedRow"></a>
#### SelectedRow

Checked state of the selected node or a node specified by the input parameters.



Type: boolean


Accessors: GetSelectedRow, SetSelectedRow

```javascript
value = SeS('SomeVSFlexGrid').GetSelectedRow()

SeS('SomeVSFlexGrid').SetSelectedRow(/**number*/row,/**boolean*/sel)
```


<a name="SelectedRowCount"></a>
#### SelectedRowCount

Number of selected rows.



Type: number


Accessors: GetSelectedRowCount

```javascript
value = SeS('SomeVSFlexGrid').GetSelectedRowCount()
```


<a name="SelectedRows"></a>
#### SelectedRows

Selected rows.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| asArray | boolean | If set to true, function returns an array. |
| separator | string | Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |




Type: array|string


Accessors: GetSelectedRows, SetSelectedRows

```javascript
value = SeS('SomeVSFlexGrid').GetSelectedRows(/**boolean*/asArray, /**string*/separator)

SeS('SomeVSFlexGrid').SetSelectedRows(/**boolean*/asArray, /**string*/separator, /**array|string*/values)
```


<a name="Text"></a>
#### Text

Text of the currently focused cell.



Type: string


Accessors: GetText, SetText

```javascript
value = SeS('SomeVSFlexGrid').GetText()

SeS('SomeVSFlexGrid').SetText(/**string*/value)
```


<a name="Width"></a>
#### Width

Width of the object.



Type: number


Accessors: GetWidth

```javascript
value = SeS('SomeVSFlexGrid').GetWidth()
```


<a name="X"></a>
#### X

X-coordinate of the top left corner of the object.



Type: number


Accessors: GetX

```javascript
value = SeS('SomeVSFlexGrid').GetX()
```


<a name="Y"></a>
#### Y

Y-coordinate of the top left corner of the object.



Type: number


Accessors: GetY

```javascript
value = SeS('SomeVSFlexGrid').GetY()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClickCell"></a>    
#### DoClickCell

Clicks the specified cell.

```javascript
SeS('SomeVSFlexGrid').DoClickCell(row, col, clickType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number \| string |  Zero-based index if the row or text of a cell in the specified column. |
| col | string \| number |  Zero-based index of the column or column name. |
| clickType | string |  Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.vsflexgrid.doclickcell"></a>

<a name="DoClickText"></a>    
#### DoClickText

Clicks on a specific text inside the grid.

```javascript
SeS('SomeVSFlexGrid').DoClickText(textOrRegexp, clickType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| textOrRegexp | string |  Text (or regex: expression) to search in the grid. |
| clickType | string |  Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |




**Returns:**

'true' if successful, 'false' otherwise



<a name="see.also.vsflexgrid.doclicktext"></a>

<a name="DoFullText"></a>    
#### DoFullText

Returns text representation of the grid.

```javascript
SeS('SomeVSFlexGrid').DoFullText(path, fmt)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Name of a file that should hold text representation of the grid.<br>Optional. |
| fmt | number |  function () {
}<br>Optional. |




**Returns:**

string: Path to a file with grid text when 'path' param is defined. Otherwise return Grid text.



<a name="see.also.vsflexgrid.dofulltext"></a>

  

