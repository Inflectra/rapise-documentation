# Comments

## Single Row Comments

RVL has two types of single line comments depending on the purpose.

Sometimes comment is used to exclude line of code from execution. 

=== "Screenshot"
    ![Disable Execution](./img/Comment_SingleLine_Disable.png)
=== "Transcript"
    
    | Flow | Type   | Object | Action   | ParamName | ParamType | ParamValue |
    | ---- | ------ | ------ | -------- | --------- | --------- | ---------- |
    |      |        |        |          |           |           |            |
    | //   | Action | Global | DoLaunch | cmdLine   | string    | calc.exe   |
    

There is a special type of single row comments intended to put long text comments into the document.

Single row comment is displayed as long text providing that:
1. Flow is set to `#` or `//`
2. Text is completely typed into the `Type` cell.
3. Other cells after `Type` are empty.

In such case the text is displayed through the whole line:

=== "Screenshot"
    ![Comment text](./img/Comment_SingleLine_Text.png)
=== "Transcript"
    | Flow | Type                                                                                   | Object | Action  | ParamName | ParamType | ParamValue |
    | ---- | -------------------------------------------------------------------------------------- | ------ | ------- | --------- | --------- | ---------- |
    | #    | My scenario goes here. We are going to perform arithmetical operation with Calculator. |        |         |           |           |            |
    |      | Action                                                                                 | _1     | DoClick | x         | number    | 18         |
    |      |                                                                                        |        |         | y         | number    | 15         |


## Multiple Row Comments

Used to disable several rows of script:

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
    

