# Loops

*Loops* serve several needs in RVL:

1. Iterate through [Maps](Maps.md) to make data-driven testing easier.
2. Allows you to repeat a set of actions for a given number of iterations.
3. Lets you repeat a loop body while some [Condition](Conditions.md) is satisfied.


### Loop Map

A [Map](Maps.md) allows both reading script data from the table defined in the same script or from external data source such as spreadsheet, file or database. Once a Map is defined, the loop is the simplest way of traversing it.

| Flow | Type  | Object    | Action | ParamName | ParamType | ParamValue |
| ---- | ----- | --------- | ------ | --------- | --------- | ---------- |
| Loop | `Map` | *MapName* |        |           |           |            |
|      | ...   |           | ...    | ...       | ...       | ...        |
|      |       |           |        |           |           |            |
| End  |       |           |        |           |           |            |

Where *MapName* should be name of the map declared earlier in the same script.

The loop goes through either the map rows or through the map columns depending on the type of map:

* For `Rows`, `Range` or `Database` type of Map, the loop goes through rows. I.e. 1st iteration points to 1st Row, then 2nd iteration points to 2nd row etc.
* For `Columns` and `Table` types of Map, the iteration goes through the columns.

### Loop Variable
![Variable Loop](./img/Loops_Variable.png)

| Flow | Type         | Object    | Action | ParamName | ParamType | ParamValue |
| ---- | ------------ | --------- | ------ | --------- | --------- | ---------- |
| Loop | **Variable** | *VarName* |        | `from`    | number    | 1          |
|      | Param        |           |        | `to`      | number    | 10         |
|      | ...          |           | ...    | ...       | ...       | ...        |
| End  |              |           |        |           |           |            |

Where:

* *VarName* is an optional name of variable. It may be avoided if the goal is just to do specified number of iterations. If *VarName* is set, then the corresponding variable is assigned with the `from` value and incremented up to the `to` value throughout the loop. If *VarName* refers to an existing local or global variable then it is used, otherwise a local variable named *VarName* is created.

* *from* initial value of the loop variable
* *to* final value of the loop variable
* *step* optional, default is 1. Loop step to increment in each iteration.

### Loop Condition

![Loop with Condition](./img/Loops_Condition.png)

Loop repeats while condition is satisfied (i.e. `while(someCondition)`).
