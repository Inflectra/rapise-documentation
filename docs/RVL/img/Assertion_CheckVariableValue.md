| Flow | Type                                        | Object | Action    | ParamName        | ParamType | ParamValue        |
| ---- | ------------------------------------------- | ------ | --------- | ---------------- | --------- | ----------------- |
| #    | Check that variable 'Age' contains value 74 |        |           |                  |           |                   |
|      | Assert                                      |        |           | message          | string    | Check that Age=74 |
|      | Param                                       |        |           | param1           | variable  | Age               |
|      |                                             |        | Condition | param1 == param2 |           |                   |
|      | Param                                       |        |           | param2           | string    | 74                |
