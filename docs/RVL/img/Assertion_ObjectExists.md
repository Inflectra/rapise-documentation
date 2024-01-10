
| Flow | Type                                     | Object | Action    | ParamName     | ParamType | ParamValue                               |
| ---- | ---------------------------------------- | ------ | --------- | ------------- | --------- | ---------------------------------------- |
| #    | Check that object 'Sister_Carrie' exists |        |           |               |           |                                          |
|      | Assert                                   |        |           | message       | string    | Check that object 'Sister_Carrie' exists |
|      | Action                                   | Global | DoWaitFor | objectId      | objectid  | Sister_Carrie                            |
|      | Condition                                |        |           | output1 IsSet |           |                                          |
