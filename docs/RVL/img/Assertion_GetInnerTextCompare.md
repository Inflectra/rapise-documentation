| Flow | Type      | Object        | Action            | ParamName | ParamType | ParamValue                           |
| ---- | --------- | ------------- | ----------------- | --------- | --------- | ------------------------------------ |
|      | Assert    |               |                   | message   | string    | Verify that: InnerText=Sister Carrie |
|      | Action    | Sister_Carrie | GetInnerText      |           |           |                                      |
|      | Condition |               | output1 == param2 |           |           |                                      |
|      | Param     |               |                   | param2    | string    | Sister Carrie                        |