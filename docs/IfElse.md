`If` using for branching statements in RVL.

Basic branch statement has 2 parts: 1st row is `If` flow with [Condition](Conditions.md):

## If

Flow | Type | ...  | Action | ParamName | ...
----|------|----- |--------|------------|----
If  |Param |      |        | param1     |
    |Condition|   | *condition statement*       |            |
    |Param |      |        | param2     |
    |***some*** | ***actions*** | ***go***  | ***here***     | 
End |    |        |        |            |

Actions after `If` condition and up to `End` statement are executed when condition is truth.


## If-Else

`If-Else` statement is similar to `If` with one extension. It contains an alternative `Else` section that is executed when `If` condition is false:

Flow | Type | ...  | Action | ParamName | ...
----|------|----- |--------|------------|----
If  |Param |      |        | param1     |
    |Condition|   | *condition statement*       |            |
    |Param |      |        | param2     |
    |***some*** | ***actions*** | ***go***  | ***here***     | 
Else |    |        |        |            |
    |***other*** | ***actions*** | ***go***  | ***here***     | 
End |    |        |        |            |


## If-ElseIf

`ElseIf` is a way to establish a chain of conditions. Each condition is evaluated with previous is false.


`If-Else` statement is similar to `If` with one extension. It contains an alternative `Else` section that is executed when `If` condition is false:

*Flow*|*Type*| ...  |*Action*|*ParamName*| ...
----|------|----- |--------|------------|----
If  |Param |      |        | param1     |
    |Condition|   | *condition statement*       |            |
    |Param |      |        | param2     |
    |***some*** | ***actions*** | ***go***  | ***here***     | 
ElseIf  |Param |      |        | param1     |
    |Condition|   | *condition statement*       |            |
    |Param |      |        | param2     |
    |***other*** | ***actions*** | ***go***  | ***here***     | 
End |    |        |        |            |


There may be many ElseIf` blocks:

*Flow*|*Type*| ...  |*Action*|*ParamName*| ...
----|------|----- |--------|------------|----
If  |Param |      |        | param1     |
    |Condition|   | *condition statement*       |            |
    |Param |      |        | param2     |
    |***some*** | ***actions*** | ***go***  | ***here***     | 
ElseIf  |Param |      |        | param1     |
    |Condition|   | *condition statement*       |            |
    |Param |      |        | param2     |
    |***other*** | ***actions*** | ***go***  | ***here***     | 
ElseIf  |Param |      |        | param1     |
    |Condition|   | *condition statement*       |            |
    |Param |      |        | param2     |
    |***other*** | ***actions*** | ***go***  | ***here***     | 
End |    |        |        |            |


And there might also be an `Else` block in the end:

*Flow*|*Type*| ...  |*Action*|*ParamName*| ...
----|------|----- |--------|------------|----
If  |Param |      |        | param1     |
    |Condition|   | *condition statement*       |            |
    |Param |      |        | param2     |
    |***some*** | ***actions*** | ***go***  | ***here***     | 
ElseIf  |Param |      |        | param1     |
    |Condition|   | *condition statement*       |            |
    |Param |      |        | param2     |
    |***other*** | ***actions*** | ***go***  | ***here***     | 
ElseIf  |Param |      |        | param1     |
    |Condition|   | *condition statement*       |            |
    |Param |      |        | param2     |
    |***other*** | ***actions*** | ***go***  | ***here***     | 
Else |    |        |        |            |
    |***other*** | ***actions*** | ***go***  | ***here***     | 
End |    |        |        |            |


## Examples

Check if `Log In` link available. If so, do login:

![If Check Object Exists](img/IfElse_CheckLogin.png)


Check if we use old version of OS and assign a variable `OldWindows` accordingly:

![If Check OS Version](img/IfElse_CheckOldOs.png)

