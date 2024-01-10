| Flow   | Type                                | Object | Action           | ParamName | ParamType | ParamValue |
| ------ | ----------------------------------- | ------ | ---------------- | --------- | --------- | ---------- |
| #      | Global variable, assigned elsewhere |        |                  |           |           |            |
|        | Variable                            |        | Global           | Direction |           |            |
| If     | Param                               |        |                  | param1    | variable  | Direction  |
|        | Condition                           |        | param1 == param2 |           |           |            |
|        | Param                               |        |                  | param2    | string    | Up         |
| #      | Case 'Up'                           |        |                  |           |           |            |
| ElseIf | Param                               |        |                  | param1    | variable  | Direction  |
|        | Condition                           |        | param1 == param2 |           |           |            |
|        | Param                               |        |                  | param2    | string    | Down       |
| #      | Case 'Down'                         |        |                  |           |           |            |
| ElseIf | Param                               |        |                  | param1    | variable  | Direction  |
|        | Condition                           |        | param1 == param2 | param2    | string    | Left |
| #      | Case 'Left'                         |        |                  |           |           |            |
| ElseIf | Param                               |        |                  | param1    | variable  | Direction  |
|        | Condition                           |        | param1 == param2 |           |           |            |
|        | Param                               |        |                  | param2    | string    | Right      |
| #      | Case 'Right'                        |        |                  |           |           |            |
| End    | of ElseIf                           |        |                  |           |           |            |