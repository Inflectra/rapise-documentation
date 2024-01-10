| Flow | Type         | Object | Action                  | ParamName  | ParamType | ParamValue |
| ---- | ------------ | ------ | ----------------------- | ---------- | --------- | ---------- |
| If   | Action       | Global | GetOsType               |            |           |            |
|      | Condition    |        | output1 contains param2 |            |           |            |
|      | Param        |        |                         | param2     | string    | Windows 7  |
| #    | If actions   |        |                         |            |           |            |
|      | Variable     |        |                         | OldWindows | boolean   | true       |
| Else |              |        |                         |            |           |            |
| #    | Else actions |        |                         |            |           |            |
|      | Variable     |        |                         | OldWindows | boolean   | false      |
| End  |              |        |                         |            |           |            |