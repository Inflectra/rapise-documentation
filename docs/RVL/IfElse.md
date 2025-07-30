# If - Else

`If` is used for branching statements in RVL.

A basic branch statement has two parts: the first row is the `If` flow with a [Condition](Conditions.md):

## If

| Flow | Type       | ...           | Action                | ParamName  | ... |
| ---- | ---------- | ------------- | --------------------- | ---------- | --- |
| If   | Param      |               |                       | param1     |
|      | Condition  |               | *condition statement* |            |
|      | Param      |               |                       | param2     |
|      | ***some*** | ***actions*** | ***go***              | ***here*** |
| End  |            |               |                       |            |

The actions after the `If` condition and before the `End` statement are executed when the condition is true.

## If-Else

The `If-Else` statement is similar to `If`, with one extension. It contains an alternative `Else` section that is executed when the `If` condition is false:

| Flow | Type        | ...           | Action                | ParamName  | ... |
| ---- | ----------- | ------------- | --------------------- | ---------- | --- |
| If   | Param       |               |                       | param1     |     |
|      | Condition   |               | *condition statement* |            |     |
|      | Param       |               |                       | param2     |     |
| #    | ***some***  | ***actions*** | ***go***              | ***here*** |     |
| Else |             |               |                       |            |     |
| #    | ***other*** | ***actions*** | ***go***              | ***here*** |     |
| End  |             |               |                       |            |     |

## If-ElseIf

`ElseIf` is a way to establish a chain of conditions. Each condition is evaluated only when the previous one is false.

The `If-Else` statement is similar to `If`, with one extension. It contains an alternative `Else` section that is executed when the `If` condition is false:

| Flow   | Type        | ...           | Action                | ParamName  | ... |
| ------ | ----------- | ------------- | --------------------- | ---------- | --- |
| If     | Param       |               |                       | param1     |     |
|        | Condition   |               | *condition statement* |            |     |
|        | Param       |               |                       | param2     |     |
| #      | ***some***  | ***actions*** | ***go***              | ***here*** |     |
| ElseIf | Param       |               |                       | param1     |     |
|        | Condition   |               | *condition statement* |            |     |
|        | Param       |               |                       | param2     |     |
| #      | ***other*** | ***actions*** | ***go***              | ***here*** |     |
| End    |             |               |                       |            |     |

There may be many `ElseIf` blocks:

| Flow   | Type        | Object        | Action                | ParamName  | ParamType | ParamValue |
| ------ | ----------- | ------------- | --------------------- | ---------- | --------- | ---------- |
| If     | Param       |               |                       | param1     |           |            |
|        | Condition   |               | *condition statement* |            |           |            |
|        | Param       |               |                       | param2     |           |            |
| #      | ***some***  | ***actions*** | ***go***              | ***here*** |           |            |
| ElseIf | Param       |               |                       | param1     |           |            |
|        | Condition   |               | *condition statement* |            |           |            |
|        | Param       |               |                       | param2     |           |            |
| #      | ***other*** | ***actions*** | ***go***              | ***here*** |           |            |
| ElseIf | Param       |               |                       | param1     |           |            |
|        | Condition   |               | *condition statement* |            |           |            |
|        | Param       |               |                       | param2     |           |            |
| #      | ***other*** | ***actions*** | ***go***              | ***here*** |           |            |
| End    |             |               |                       |            |           |            |

An `Else` block can also be included at the end:

| Flow   | Type        | Object        | Action                | ParamName  | ParamType | ParamValue |
| ------ | ----------- | ------------- | --------------------- | ---------- | --------- | ---------- |
| If     | Param       |               |                       | param1     |           |            |
|        | Condition   |               | *condition statement* |            |           |            |
|        | Param       |               |                       | param2     |           |            |
| #      | ***some***  | ***actions*** | ***go***              | ***here*** |           |            |
| ElseIf | Param       |               |                       | param1     |           |            |
|        | Condition   |               | *condition statement* |            |           |            |
|        | Param       |               |                       | param2     |           |            |
| #      | ***other*** | ***actions*** | ***go***              | ***here*** |           |            |
| ElseIf | Param       |               |                       | param1     |           |            |
|        | Condition   |               | *condition statement* |            |           |            |
|        | Param       |               |                       | param2     |           |            |
| #      | ***other*** | ***actions*** | ***go***              | ***here*** |           |            |
| Else   |             |               |                       |            |           |            |
| #      | ***other*** | ***actions*** | ***go***              | ***here*** |           |            |
| End    |             |               |                       |            |           |            |

## Examples

Check if the `Log In` link is available. If so, log in:

=== "Screenshot"
    ![If Check Object Exists](./img/IfElse_CheckLogin.png)
=== "Transcript"
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

Check if an old version of the OS is in use and assign the `OldWindows` variable accordingly:

=== "Screenshot"
    ![If Check OS Version](./img/IfElse_CheckOldOs.png)
=== "Transcript"
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