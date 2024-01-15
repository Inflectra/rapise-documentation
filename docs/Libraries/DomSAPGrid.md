Summary: Grid control.

# DomSAPGrid

Grid control.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DomSAPGridBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Cell](#cell) | Text of the specified cell. | GetCell |  |
| [CellElement](#cellelement) | Get Cell element. | GetCellElement |  |
| [ColumnCount](#columncount) | Number of columns in the grid. | GetColumnCount |  |
| [ColumnIndex](#columnindex) | Index of a column with a given name. | GetColumnIndex |  |
| [ColumnName](#columnname) | Caption of a column. | GetColumnName |  |
| [RowCount](#rowcount) | Number of rows in the grid. | GetRowCount |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickCell](#doclickcell) | Clicks the specified cell. |
|  [DoScrollTo](#doscrollto) | Scrolls to the specified cell. |
|  [DoSelect](#doselect) | Selects a dropdown item in the specified cell. |
|  [DoSelectAll](#doselectall) | Selects/deselects all rows based on check parameter value. |
|  [DoSelectRadio](#doselectradio) | Select a radio button within a cell. |
|  [DoSelectRow](#doselectrow) | Selects/deselects a given row based on check parameter value. |
|  [DoSetText](#dosettext) | Sets a text value into the specified cell. |



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
value = SeS('SomeDomSAPGrid').GetCell(/**number|string*/row, /**string|number*/col)
```


<a name="CellElement"></a>
#### CellElement

Get Cell element.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| row | number \| string | Zero-based index if the row or text of a cell in the specified column. |
| col | string \| number | Zero-based index of the column or column name. |




Type: HTMLObject


Accessors: GetCellElement

```javascript
value = SeS('SomeDomSAPGrid').GetCellElement(/**number|string*/row, /**string|number*/col)
```


<a name="ColumnCount"></a>
#### ColumnCount

Number of columns in the grid.



Type: number


Accessors: GetColumnCount

```javascript
value = SeS('SomeDomSAPGrid').GetColumnCount()
```


<a name="ColumnIndex"></a>
#### ColumnIndex

Index of a column with a given name.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| columnName | string | Name of a column. |




Type: string


Accessors: GetColumnIndex

```javascript
value = SeS('SomeDomSAPGrid').GetColumnIndex(/**string*/columnName)
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
value = SeS('SomeDomSAPGrid').GetColumnName(/**number*/columnIndex)
```


<a name="RowCount"></a>
#### RowCount

Number of rows in the grid.



Type: number


Accessors: GetRowCount

```javascript
value = SeS('SomeDomSAPGrid').GetRowCount()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClickCell"></a>    
#### DoClickCell

Clicks the specified cell.

```javascript
SeS('SomeDomSAPGrid').DoClickCell(row, col, clickType, xOffset, yOffset)
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



<a name="see.also.domsapgrid.doclickcell"></a>

<a name="DoScrollTo"></a>    
#### DoScrollTo

Scrolls to the specified cell.

```javascript
SeS('SomeDomSAPGrid').DoScrollTo(row, col)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number \| string |  Zero-based index if the row or text of a cell in the specified column. |
| col | string \| number |  Zero-based index of the column or column name. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.domsapgrid.doscrollto"></a>

<a name="DoSelect"></a>    
#### DoSelect

Selects a dropdown item in the specified cell.

```javascript
SeS('SomeDomSAPGrid').DoSelect(row, col, item)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number \| string |  Zero-based index if the row or text of a cell in the specified column. |
| col | string \| number |  Zero-based index of the column or column name. |
| item | string |  Text of an item in the dropdown. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.domsapgrid.doselect"></a>

<a name="DoSelectAll"></a>    
#### DoSelectAll

Selects/deselects all rows based on check parameter value.

```javascript
SeS('SomeDomSAPGrid').DoSelectAll(check)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| check | boolean |  Desired checkbox state. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.domsapgrid.doselectall"></a>

<a name="DoSelectRadio"></a>    
#### DoSelectRadio

Select a radio button within a cell.

```javascript
SeS('SomeDomSAPGrid').DoSelectRadio(row, col, item)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number \| string |  Zero-based index if the row or text of a cell in the specified column. |
| col | string \| number |  Zero-based index of the column or column name. |
| item | string |  Radio button caption. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.domsapgrid.doselectradio"></a>

<a name="DoSelectRow"></a>    
#### DoSelectRow

Selects/deselects a given row based on check parameter value.

```javascript
SeS('SomeDomSAPGrid').DoSelectRow(row, check)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number |  Zero-based index if the row. |
| check | boolean |  Desired checkbox state. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.domsapgrid.doselectrow"></a>

<a name="DoSetText"></a>    
#### DoSetText

Sets a text value into the specified cell.

```javascript
SeS('SomeDomSAPGrid').DoSetText(row, col, text)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number \| string |  Zero-based index if the row or text of a cell in the specified column. |
| col | string \| number |  Zero-based index of the column or column name. |
| text | string |  Text to set into the cell. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.domsapgrid.dosettext"></a>

  

