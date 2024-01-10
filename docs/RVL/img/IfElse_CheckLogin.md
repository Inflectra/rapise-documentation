| Flow | Type       | Object                                  | Action        | ParamName | ParamType | ParamValue |
| ---- | ---------- | --------------------------------------- | ------------- | --------- | --------- | ---------- |
| If   | Action     | Global                                  | DoWaitFor     | objectId  | objectId  | Log_In     |
|      | Condition  |                                         | output1 IsSet |           |           |            |
| #    | If actions |                                         |               |           |           |            |
|      | Action     | Log_In                                  | DoClick       |           |           |            |
|      | Action     | Username                                | DoSetText     | txt       | string    | librarian  |
|      | Action     | Password                                | DoSetText     | txt       | string    | librarian  |
|      | Action     | ctl00$MainContent$LoginUser$LoginButton | DoClick       |           |           |            |
| End  |            |                                         |               |           |           |            |