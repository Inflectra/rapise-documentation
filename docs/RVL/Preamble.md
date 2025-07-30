# Sheet Preamble

A preamble is the section at the beginning of each RVL sheet that contains common data definitions.

The preamble is executed every time you use [Play Selection](../Guide/rvl_editor.md#context-menu) or [Play From Here](../Guide/rvl_editor.md#context-menu) in RVL. This means that if a selection refers to any [Variables](Variables.md), [Repositories](Repository.md), or [Maps](Maps.md) from the preamble, the executed statement will recognize them as if they were part of the selection.

The preamble is detected automatically. Everything before the first [Action](Actions.md), [Assertion](Assertions.md), [Loop](Loops.md), or [Condition](Conditions.md) is considered the preamble.

For example, the preamble here ends on row 10 because row 11 contains an **Action**.
=== "Screenshot"
    ![Preamble](./img/Preamble_Script.png)
=== "Transcript"
    | Flow | Type                               | Object | Action      | ParamName  | ParamType | ParamValue      |
    | ---- | ---------------------------------- | ------ | ----------- | ---------- | --------- | --------------- |
    |      | Variable                           |        | Login       | string     | librarian |                 |
    |      | Variable                           |        | Global      | g_password | string    | librarian       |
    |      |                                    |        |             |            |           |                 |
    | Map  | Rows                               | MyMap1 |             |            |           |                 |
    |      | Col                                | Col1   | Col2        | Col3       |           |                 |
    |      | r1                                 | r11    | r12         | r13        |           |                 |
    | End  | of Map                             |        |             |            |           |                 |
    | #    | Following action ends the preamble |        |             |            |           |                 |
    |      | Action                             | Tester | Message     | message    | string    | Starting Script |
    |      |                                    |        |             |            |           |                 |
    |      | Action                             | Tester | Message     | message    | string    | Login name:     |
    |      | Param                              |        |             | message    | variable  | Login           |
    |      |                                    |        |             |            |           |                 |
    |      | Action                             | Tester | Message     | message    | string    | Value from Map: |
    |      |                                    |        |             | MyMap1     | Col       |                 |
    |      |                                    |        |             |            |           |                 |
    |      | Action                             | RVL    | DoPlaySheet | sheetName  | string    | DefaultValue    |
    |      |                                    |        |             |            |           |                 |