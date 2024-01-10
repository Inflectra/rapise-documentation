| Flow | Type     | Object | Action      | ParamName  | ParamType | ParamValue      |
| ---- | -------- | ------ | ----------- | ---------- | --------- | --------------- |
|      | Variable |        | Login       | string     | librarian |                 |
|      | Variable |        | Global      | g_password | string    | librarian       |
|      |          |        |             |            |           |                 |
| Map  | Rows     | MyMap1 |             |            |           |                 |
|      | Col      | Col1   | Col2        | Col3       |           |                 |
|      | r1       | r11    | r12         | r13        |           |                 |
| End  | of Map   |        |             |            |           |                 |
|      |          |        |             |            |           |                 |
|      | Action   | Tester | Message     | message    | string    | Starting Script |
|      |          |        |             |            |           |                 |
|      | Action   | Tester | Message     | message    | string    | Login name:     |
|      | Param    |        |             | message    | variable  | Login           |
|      |          |        |             |            |           |                 |
|      | Action   | Tester | Message     | message    | string    | Value from Map: |
|      |          |        |             | MyMap1     | Col       |                 |
|      |          |        |             |            |           |                 |
|      | Action   | RVL    | DoPlaySheet | sheetName  | string    | DefaultValue    |
|      |          |        |             |            |           |                 |