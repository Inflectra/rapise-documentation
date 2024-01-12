# Map Object

Represents an RVL Map object and all its operations. The same operations are used by the RVL runtime implicitly to read the cell value or iterate through the Map.

## Actions

## DoMoveToRow

```javascript
SomeMapVar.DoMoveToRow(/**number*/ rowInd)
```

RVL:

| Flow | Type   | Object | Action      | ParamName | ParamType | ParamValue |
| ---- | ------ | ------ | ----------- | --------- | --------- | ---------- |
| Map  | Rows   | Logins |             |           |           |            |
|      | ...    | ...    | ...         |           |           |            |
| End  | of Map |        |             |           |           |            |
|      |        |        |             |           |           |            |
|      | Action | Logins | DoMoveToRow | rowInd    | number    | 7          |
|      |        |        |             |           |           |            |

Moves to the row with a given index. Zero-based. If map type is `Rows` then row with index 0 is the row with column names.

* `rowInd`: Row index (or name) to set active.

## DoSequential

```javascript
SomeMapVar.DoSequential()
```

Advances to the next row in the range. The range is either set by SetRange or it is the default range that includes all rows on the sheet except first row which is considered to contain column names. When the end of the range is reached, DoSequential rewinds back to the first row in the range and returns `false`.

Returns `false` if being called when active row is the last row or the spreadsheet is not attached, `true` - otherwise.

RVL:

| Flow | Type   | Object | Action       | ParamName | ParamType | ParamValue |
| ---- | ------ | ------ | ------------ | --------- | --------- | ---------- |
| Map  | Rows   | Logins |              |           |           |            |
|      | ...    | ...    | ...          |           |           |            |
| End  | of Map |        |              |           |           |            |
|      |        |        |              |           |           |            |
|      | Action | Logins | DoSequential |           |           |            |
|      |        |        |              |           |           |            |

## DoMoveToColumn

```javascript
DoMoveToColumn(/**number|string*/ colInd)
```

Moves to the column with a given index or name. Index is zero-based. If map type is `Columns` then column with index 0 is the column with row names.

* `colInd`: Column index (or name) to set active.

RVL:

| Flow | Type    | Object  | Action         | ParamName | ParamType | ParamValue |
| ---- | ------- | ------- | -------------- | --------- | --------- | ---------- |
| Map  | Columns | Configs |                |           |           |            |
|      | ...     | ...     | ...            |           |           |            |
| End  | of Map  |         |                |           |           |            |
|      |         |         |                |           |           |            |
|      | Action  | Configs | DoMoveToColumn | colInd    | number    | 3          |
|      |         |         |                |           |           |            |

## DoMoveToFirstColumn

```javascript
DoMoveToFirstColumn()
```

Moves to a first column with data in the map. If map type is `Columns` then first column index is 1, if map type is `Rows` then first column index is 0.

RVL:

| Flow | Type    | Object  | Action              | ParamName | ParamType | ParamValue |
| ---- | ------- | ------- | ------------------- | --------- | --------- | ---------- |
| Map  | Columns | Configs |                     |           |           |            |
|      | ...     | ...     | ...                 |           |           |            |
| End  | of Map  |         |                     |           |           |            |
|      |         |         |                     |           |           |            |
|      | Action  | Configs | DoMoveToFirstColumn |           |           |            |
|      |         |         |                     |           |           |            |

## DoMoveToFirstRow

```javascript
DoMoveToFirstRow()
```

Moves to a first row with data in the map. If map type is `Rows` then first row index is 1, if map type is `Columns` then first row index is 0.

RVL:

| Flow | Type   | Object | Action           | ParamName | ParamType | ParamValue |
| ---- | ------ | ------ | ---------------- | --------- | --------- | ---------- |
| Map  | Rows   | Logins |                  |           |           |            |
|      | ...    | ...    | ...              |           |           |            |
| End  | of Map |        |                  |           |           |            |
|      |        |        |                  |           |           |            |
|      | Action | Logins | DoMoveToFirstRow |           |           |            |
|      |        |        |                  |           |           |            |

## DoMoveToLastColumn

```javascript
DoMoveToLastColumn()
```

Moves to a last column in the map.

RVL:

| Flow | Type    | Object  | Action             | ParamName | ParamType | ParamValue |
| ---- | ------- | ------- | ------------------ | --------- | --------- | ---------- |
| Map  | Columns | Configs |                    |           |           |            |
|      | ...     | ...     | ...                |           |           |            |
| End  | of Map  |         |                    |           |           |            |
|      |         |         |                    |           |           |            |
|      | Action  | Configs | DoMoveToLastColumn |           |           |            |
|      |         |         |                    |           |           |            |

## DoMoveToLastRow

```javascript
DoMoveToLastRow()
```

Moves to a last row in the map.

RVL:

| Flow | Type   | Object | Action          | ParamName | ParamType | ParamValue |
| ---- | ------ | ------ | --------------- | --------- | --------- | ---------- |
| Map  | Rows   | Logins |                 |           |           |            |
|      | ...    | ...    | ...             |           |           |            |
| End  | of Map |        |                 |           |           |            |
|      |        |        |                 |           |           |            |
|      | Action | Logins | DoMoveToLastRow |           |           |            |
|      |        |        |                 |           |           |            |

## Properties

## Cell

```javascript
GetCell(/**number|string*/ columnId, /**number*/ rowId)
```

Gets a cell value by its coordinates. It returns the current cell value after `DoSequential` or `DoRandom` if the parameters are not set.

* `[columnId]`: Column index or name. If not set ActiveColumn is used.
* `[rowId]`: Row index. If not set ActiveRow is used.

| Flow | Type   | Object | Action  | ParamName | ParamType | ParamValue |
| ---- | ------ | ------ | ------- | --------- | --------- | ---------- |
| Map  | Rows   | Logins |         |           |           |            |
|      | ...    | ...    | ...     |           |           |            |
| End  | of Map |        |         |           |           |            |
|      |        |        |         |           |           |            |
|      | Action | Logins | GetCell | columnId  | string    | login      |
|      |        |        |         | rowId     | number    | 3          |
|      |        |        |         |           |           |            |

## ColumnCell

```javascript
GetColumnCell(/**number*/ rowId)
```

Gets cell value by its coordinates. Returns current cell value after `DoSequential`. If not set `ActiveColumn` is used.

* `[rowId]`: Row index. If not set `ActiveRow` is used.

RVL:

| Flow | Type          | Object       | Action        | ParamName    | ParamType | ParamValue |
| ---- | ------------- | ------------ | ------------- | ------------ | --------- | ---------- |
| Map  | Columns       | Configs      |               |              |           |            |
|      |               | Prod         | Staging       | QA           |           |            |
|      | url           | https://url1 | https://url2  | https://url3 |           |            |
|      | password      | (*&jn9sdf)   | test          | test         |           |            |
| End  | of Map        |              |               |              |           |            |
| #    | Read password |              |               |              |           |            |
|      | Action        | Configs      | GetColumnCell | rowId        | number    | 1          |
|      |               |              |               |              |           |            |

## ColumnCount

```javascript
GetColumnCount()
```

Returns number of columns in the spreadsheet.

RVL:

| Flow | Type          | Object       | Action         | ParamName    | ParamType | ParamValue |
| ---- | ------------- | ------------ | -------------- | ------------ | --------- | ---------- |
| Map  | Table         | Configs      |                |              |           |            |
|      |               | Prod         | Staging        | QA           |           |            |
|      | url           | https://url1 | https://url2   | https://url3 |           |            |
|      | password      | (*&jn9sdf)   | test           | test         |           |            |
| End  | of Map        |              |                |              |           |            |
| #    | Read password |              |                |              |           |            |
|      | Variable      |              |                | cnt          | number    | 0          |
|      | Action        | Configs      | GetColumnCount |              |           |            |
|      | Output        |              |                |              | variable  | cnt        |
| #    | cnt now is 3  |              |                |              |           |            |

## ColumnIndexByName

```javascript
GetColumnIndexByName(/**string*/ name)
```

Gets index of a column with the given name.

* `name`: Column name.

Returns column index if found, or -1.

RVL:

| Flow | Type      | Object   | Action               | ParamName | ParamType | ParamValue |
| ---- | --------- | -------- | -------------------- | --------- | --------- | ---------- |
| Map  | Rows      | Users    |                      |           |           |            |
|      | name      | password |                      |           |           |            |
|      | librarian | p1       |                      |           |           |            |
|      | borrower  | pass2    |                      |           |           |            |
| End  | of Map    |          |                      |           |           |            |
|      |           |          |                      |           |           |            |
|      | Action    | Users    | GetColumnIndexByName | name      | string    | password   |
|      |           |          |                      |           |           |            |
|      | Action    | Tester   | Message              | message   | variable  | LastResult |
|      |           |          |                      |           |           |            |

## ColumnName

```javascript
GetColumnName(/**number*/ ind)
```

Gets column name.

* `ind`: Column index.

RVL:

| Flow | Type      | Object   | Action        | ParamName | ParamType | ParamValue |
| ---- | --------- | -------- | ------------- | --------- | --------- | ---------- |
| Map  | Rows      | Users    |               |           |           |            |
|      | name      | password |               |           |           |            |
|      | librarian | p1       |               |           |           |            |
|      | borrower  | pass2    |               |           |           |            |
| End  | of Map    |          |               |           |           |            |
|      |           |          |               |           |           |            |
|      | Action    | Users    | GetColumnName | ind       | number    | 1          |
|      |           |          |               |           |           |            |
|      | Action    | Tester   | Message       | message   | variable  | LastResult |
|      |           |          |               |           |           |            |

Returns name of column in the spreadsheet.

## RowCount

```javascript
GetRowCount()
```

Returns number of rows in the spreadsheet.

RVL:

| Flow | Type      | Object   | Action      | ParamName | ParamType | ParamValue |
| ---- | --------- | -------- | ----------- | --------- | --------- | ---------- |
| Map  | Rows      | Users    |             |           |           |            |
|      | name      | password |             |           |           |            |
|      | librarian | p1       |             |           |           |            |
|      | borrower  | pass2    |             |           |           |            |
| End  | of Map    |          |             |           |           |            |
|      |           |          |             |           |           |            |
|      | Action    | Users    | GetRowCount |           |           |            |
|      |           |          |             |           |           |            |
|      | Action    | Tester   | Message     | message   | variable  | LastResult |
|      |           |          |             |           |           |            |

## RowIndexByName

```javascript
GetRowIndexByName(/**string*/ name)
```

Gets row name.

* `name`: Row name.

Returns row index if found, or -1.

RVL:

| Flow | Type          | Object       | Action            | ParamName    | ParamType | ParamValue |
| ---- | ------------- | ------------ | ----------------- | ------------ | --------- | ---------- |
| Map  | Table         | Configs      |                   |              |           |            |
|      |               | Prod         | Staging           | QA           |           |            |
|      | url           | https://url1 | https://url2      | https://url3 |           |            |
|      | password      | (*&jn9sdf)   | test              | test         |           |            |
| End  | of Map        |              |                   |              |           |            |
| #    | Read password |              |                   |              |           |            |
|      | Variable      |              |                   | cnt          | number    | 0          |
|      | Action        | Configs      | GetRowIndexByName | name         | string    | password   |
|      | Output        |              |                   |              | variable  | cnt        |

## CurrentRowIndex

```javascript
GetCurrentRowIndex()
```

Gets zero based current row index.

RVL:

| Flow | Type      | Object   | Action             | ParamName | ParamType | ParamValue |
| ---- | --------- | -------- | ------------------ | --------- | --------- | ---------- |
| Map  | Rows      | Users    |                    |           |           |            |
|      | name      | password |                    |           |           |            |
|      | librarian | p1       |                    |           |           |            |
|      | borrower  | pass2    |                    |           |           |            |
| End  | of Map    |          |                    |           |           |            |
|      |           |          |                    |           |           |            |
|      | Action    | Users    | GetCurrentRowIndex |           |           |            |
|      |           |          |                    |           |           |            |
|      | Action    | Tester   | Message            | message   | variable  | LastResult |
|      |           |          |                    |           |           |            |

## EOF

```javascript
GetEOF()
```

Returns `true` if current position is beyond the map boundaries range.

RVL:

| Flow | Type      | Object   | Action         | ParamName | ParamType | ParamValue |
| ---- | --------- | -------- | -------------- | --------- | --------- | ---------- |
| Map  | Rows      | Users    |                |           |           |            |
|      | name      | password |                |           |           |            |
|      | librarian | p1       |                |           |           |            |
|      | borrower  | pass2    |                |           |           |            |
| End  | of Map    |          |                |           |           |            |
|      |           |          |                |           |           |            |
| If   | Action    | Users    | GetEOF         |           |           |            |
|      | Condition |          | output1 IsTrue |           |           |            |
|      | Action    | RVL      | Return         | message   | string    | Done       |
| End  |           |          |                |           |           |            |

## RowCell

```javascript
GetRowCell(/**number|string*/ columnId)
```

Gets cell value for current row. Returns current cell value after `DoSequential`. `ActiveRow` is used.

* `[columnId]`: Column index or name. If not set `ActiveColumn` is used.

RVL:

| Flow | Type      | Object   | Action     | ParamName | ParamType | ParamValue |
| ---- | --------- | -------- | ---------- | --------- | --------- | ---------- |
| Map  | Rows      | Users    |            |           |           |            |
|      | name      | password |            |           |           |            |
|      | librarian | p1       |            |           |           |            |
|      | borrower  | pass2    |            |           |           |            |
| End  | of Map    |          |            |           |           |            |
|      |           |          |            |           |           |            |
|      | Action    | Users    | GetRowCell | columnId  | string    | passsword  |
|      |           |          |            |           |           |            |
|      | Action    | Tester   | Message    | message   | variable  | LastResult |
|      |           |          |            |           |           |            |

## RowName

```javascript
GetRowName(/**number*/ ind)
```

Gets row name.

* `ind`: Row index.

Returns name of row in the map.

RVL:

| Flow | Type          | Object       | Action       | ParamName    | ParamType | ParamValue |
| ---- | ------------- | ------------ | ------------ | ------------ | --------- | ---------- |
| Map  | Columns       | Configs      |              |              |           |            |
|      |               | Prod         | Staging      | QA           |           |            |
|      | url           | https://url1 | https://url2 | https://url3 |           |            |
|      | password      | (*&jn9sdf)   | test         | test         |           |            |
| End  | of Map        |              |              |              |           |            |
| #    | Read password |              |              |              |           |            |
|      | Action        | Configs      | GetRowName   | ind          | number    | 0          |
|      |               |              |              |              |           |            |

## Value

```javascript
GetValue(/**number|string*/ rowOrColumnNameOrId)
```

Gets cell value by its name or id. Returns current cell value after `DoSequential`. If it is `Rows` or `Table` map then the parameter needs to be a column name or index, and `ActiveRow` is used. If it is `Columns` map then the parameter needs to be a row name or index, and `ActiveRow` is used.

* `[rowOrColumnNameOrId]`: Row or Column index or Name.

RVL:

| Flow | Type                                          | Object       | Action       | ParamName    | ParamType | ParamValue |
| ---- | --------------------------------------------- | ------------ | ------------ | ------------ | --------- | ---------- |
| Map  | Columns                                       | Configs      |              |              |           |            |
|      |                                               | Prod         | Staging      | QA           |           |            |
|      | url                                           | https://url1 | https://url2 | https://url3 |           |            |
|      | password                                      | (*&jn9sdf)   | test         | test         |           |            |
| End  | of Map                                        |              |              |              |           |            |
| #    | Read password                                 |              |              |              |           |            |
|      | Action                                        | Configs      | GetValue     |              |           |            |
| #    | LastResult = https://url1 (0th row, 0th cell) |              |              |              |           |            |
