# Sheet Preamble

Preamble is a beginning of each RVL sheet containing common data definitions.

Preamble is executed every time when one does [Play Selection](../Guide/rvl_editor.md#context-menu) or [Play From Here](../Guide/rvl_editor.md#context-menu) in RVL. So if the piece that you try to have executed refers [Variables](Variables.md), [Repositories](Repository.md) or [Maps](Maps.md) then executed statement will 'see' them as if they are part of the selection.

The preamble is detected automatically. Everything before first [Action](Actions.md), [Assertion](Assertions.md), [Loop](Loops.md) or [Condition](Conditions.md) is a preamble.

For example, Preamble here ends at the row 10 (because row 11 is **Action**)
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