# Comments

## Single-Line Comments

RVL has two types of single-line comments.

One type is used to prevent a line of code from being executed.

=== "Screenshot"
    ![Disable Execution](./img/Comment_SingleLine_Disable.png)
=== "Transcript"
    
    | Flow | Type   | Object | Action   | ParamName | ParamType | ParamValue |
    | ---- | ------ | ------ | -------- | --------- | --------- | ---------- |
    |      |        |        |          |           |           |            |
    | //   | Action | Global | DoLaunch | cmdLine   | string    | calc.exe   |
    

The other type is for adding long, descriptive comments to your script.

A comment is displayed as long text provided that:
1. The `Flow` cell is set to `#` or `//`.
2. The comment text is entered entirely into the `Type` cell.
3. All other cells in the row after the `Type` cell are empty.

In this case, the comment is displayed across the entire row:

=== "Screenshot"
    ![Comment text](./img/Comment_SingleLine_Text.png)
=== "Transcript"
    | Flow | Type                                                                                   | Object | Action  | ParamName | ParamType | ParamValue |
    | ---- | -------------------------------------------------------------------------------------- | ------ | ------- | --------- | --------- | ---------- |
    | #    | My scenario goes here. We are going to perform an arithmetic operation with the Calculator. |        |         |           |           |            |
    |      | Action                                                                                 | _1     | DoClick | x         | number    | 18         |
    |      |                                                                                        |        |         | y         | number    | 15         |


## Multi-Line Comments

Multi-line comments are used to disable several rows of a script:

=== "Screenshot"
    ![Disable Execution Multiline](./img/Comment_MultiLine_Disable.png)
=== "Transcript"
    | Flow | Type      | Object | Action        | ParamName | ParamType | ParamValue |
    | ---- | --------- | ------ | ------------- | --------- | --------- | ---------- |
    | /*   |           |        |               |           |           |            |
    |      | Assert    |        |               | message   | string    | TBD        |
    |      | Action    | Global | GetCurrentDir |           |           |            |
    |      | Condition |        | output IsTrue |           |           |            |
    | */   |           |        |               |           |           |            |