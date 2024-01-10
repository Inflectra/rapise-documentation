Sheet name: SheetWithParams

| Flow | Type     | Object | Action  | ParamName | ParamType | ParamValue     |
| ---- | -------- | ------ | ------- | --------- | --------- | -------------- |
|      | Variable |        |         | User      | string    | DefUser        |
|      | Variable |        |         | Password  | string    | DefPassword    |
|      |          |        |         |           |           |                |
|      | Action   | Tester | Message | message   | string    | Logging In as: |
|      | Param    |        |         | message   | variable  | User           |
|      | Param    |        |         | message   | string    | /              |
|      | Param    |        |         | message   | variable  | Password       |