# Columns

An RVL script is a spreadsheet containing a set of 7 columns in a fixed order:

=== "Screenshot"
    ![Columns](./img/Columns.png)
=== "Transcript"
    | Flow | Type   | Object | Action  | ParamName    | ParamType | ParamValue |
    | ---- | ------ | ------ | ------- | ------------ | --------- | ---------- |
    | #    | My scenario goes here |        |        |              |           |            |
    |      | Action | Global | DoLaunch | cmdLine      | string    | calc       |
    |      | Param  |        |          | wrkDir       | string    | .          |
    |      | Param  |        |          | attachIfExists | boolean | true       |
    |      | Param  |        |          | attachToWindow | string  | Calculator |
    |      | Action | _1     | DoClick  | x            | number    | 18         |
    |      | Param  |        |          | y            | number    | 15         |
    |      | Action | Add    | DoClick  | x            | number    | 21         |
    |      | Param  |        |          | y            | number    | 19         |
    |      | Action | _2     | DoClick  | x            | number    | 14         |
    |      | Param  |        |          | y            | number    | 13         |
    |      | Action | Equals | DoClick  | x            | number    | 12         |
    |      | Param  |        |          | y            | number    | 23

## Default Columns

??? abstract "1 - Flow"
    This column is for specifying structural information, such as blocks, branches (If-Else), and loops.

    It also contains information about single-row and multi-row comments. Possible values are limited to the following:

    - `\#` or `//` - A single-row comment.
    - `/*` - The beginning of a multi-row comment (the comment is valid up to a line starting with `*/`).
    - `*/` - The end of a multi-row comment that was started with `/*`.
    - `If` - A conditional branch. The row type must be `Condition`. The row may be followed by one or more `ElseIf` statements, zero or one `Else` statement, and must then end with `End`.
    - `?` - A [conditional action](/RVL/Actions/#conditional-actions).

??? abstract "2 - Type"
    The type of operation specified in this row. One of the following: 
    
    - `Action` - This row defines an action. An action is an operation called on one of the objects. The object is defined in the next column. See [Actions](Actions.md).
    - `Param` - Indicates that this row contains an action or condition parameter defined in the last three columns (`ParamName`, `ParamType`, and `ParamValue`).
    - `Output` - This type of row must follow the last `Param` for an action and defines a variable that accepts the output value returned from the action call.
    - `Variable` - This row defines or assigns a value to a local or global variable. See [Variables](Variables.md).
    - `Assert` - The first row of an Assertion. See [Assertions](Assertions.md).
    - `Condition`

??? abstract "3 - Object"
    The ID of the object to be used for an action. Rapise provides a set of predefined global objects and objects recorded or learned from the AUT.
    
??? abstract "4 - Action"    
    One of the actions applicable to the object selected in the previous column: `DoAction`, `DoClick`, `GetText`, etc.
    
??? abstract "5 - ParamName"    
    The name of a parameter for the action selected in the previous column. See [Params](Params.md) for more details.

??? abstract "6 - ParamType"
    The type of a parameter determines the valid input for the `ParamValue` column.
    
    - `bool` - `ParamValue` should be `true` or `false`.
    - `string` - `ParamValue` is a text string.
    - `number` - `ParamValue` is an integer or floating-point number.
    - `variable` - `ParamValue` is a variable name. The actual value is read from the variable.
    - *`Map Name`* - `ParamValue` is a column name from the given `Map`. This feature is usually used for data-driven testing.

??? abstract "7 - ParamValue"
    This column defines the actual values passed to actions. Its value depends on the `ParamType`.

In addition to these columns, you can have any number of other columns for storing supplementary data, comments, calculations, thoughts, etc. These additional columns can be used by the script itself (e.g., to contain expected values or reference data).

## Adding Custom Columns

By default, RVL always displays column `H`. This is sometimes useful (e.g., to store a temporary value or add a note).

You can show more columns. To do this, open the file (e.g., `Main.rvl.xlsx`) in a spreadsheet editor like Excel and define some values in columns `I`, `J`, etc.:

=== "Screenshot"
    ![Excel Columns](./img/CustomColumnsExcel.png)
=== "Transcript"
    Sheet name: RVL
    
    | A    | B    | C      | D      | E         | F         | G          | H   | I   | J   | K   |
    | ---- | ---- | ------ | ------ | --------- | --------- | ---------- | --- | --- | --- | --- |
    | Flow | Type | Object | Action | ParamName | ParamType | ParamValue | H   | I   | J   | K   |
    |      |      |        |        |           |           |            |     |     |     |     |
    |      |      |        |        |           |           |            |     |     |     |     |

Now, if you reopen this document in RVL, these columns will also be displayed:

=== "Screenshot"
    ![Excel Columns](./img/CustomColumnsRVL.png)
=== "Transcript"
    | Flow | Type | Object | Action | ParamName | ParamType | ParamValue | H   | I   | J   | K   |
    | ---- | ---- | ------ | ------ | --------- | --------- | ---------- | --- | --- | --- | --- |
    |      |      |        |        |           |           |            |     |     |     |     |
    |      |      |        |        |           |           |            |     |     |     |     |

The usage of these columns is up to you. You can use them for informational purposes or make them 'live' by assigning custom actions, as described in the next section.

## Custom Column Actions

RVL is flexible, and you can use more columns to implement custom script logic.

The script occupies the first seven columns of the spreadsheet (**A**, **B**, **C**, **D**, **E**, **F**, and **G**).

By default, the script also displays column **H**. It can also display as many additional columns as needed (see the previous [section](#adding-custom-columns)). These columns can hold values but have no side effects by default. For example, they can be used to:

*   Provide links (to requirements, documentation).
*   Mark a status (e.g., for review) and add notes.

However, the script can read these values and use them for its own purposes, e.g., to:

*   Set a report attribute.
*   Assign a global variable.
*   Do a screenshot.
*   Do a custom action.

You can have one or more custom columns defined in the script to achieve specific goals. This will require you to override the `OnRVLScriptStep` function as described below.

## OnRVLScriptStep

!!! note
    The information below requires some JavaScript knowledge. In most cases, all you need to do is copy the relevant snippet from the documentation or Knowledge Base (KB) to achieve the desired behavior.

Custom column actions are processed in the `OnRVLScriptStep` function, which should be defined in the `User.js` file or in a [custom library](../Guide/custom_libraries.md).

```javascript
function OnRVLScriptStep(item, place, status, ctx, stackItem)
```

The function is mostly intended for internal use. You will need information about the following parameters:

*   `item` - The current RVL action item. You need to use the following properties of this item:
    *   `item.Startrow` - The first RVL row for a given item (in RVL, each statement takes one or more rows).
        *   `item.Startrow.SheetRowIndex` - The row index in the current sheet.
        *   `item.Startrow.Ext` - A structure containing values for columns `H`, `I`, `J`, etc. For example:
            *   `item.Startrow.Ext.H` - Cell `H` for the current action.
            *   `item.Startrow.Ext.I` - Cell `I` for the current action.
            *   `item.Startrow.Ext.J` - Cell `J` for the current action.
*   `place` - One of `"before"` (a callback executed just before the row's action) or `"after"` (a callback executed just after the action is complete).

## See Also

*   [KB 433](http://www.inflectra.com/Support/KnowledgeBase/KB433.aspx) Using Extra Columns in RVL to add Report Attributes