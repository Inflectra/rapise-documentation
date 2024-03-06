# Columns

RVL script is a spreadsheet containing set of 7 columns in fixed order:

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
    This column is dedicated to specifying structural information such as blocks, branches (If-Else), loops.

    Also it contains information about single row and multi row comments. Possible values are limited by the list:

    - `\#` or `//` - single row  comment
    - `/*` - begin of multi row comment (comment is valid up to line starting with `*/`)
    - `*/` - end of multi row comment started earlier from `/*`
    - `If` - conditional branch. Row type must be `Condition`. The row may be followed with one or more `ElseIf` statements, zero or one `Else` statement and then should end with `End`.
    - `?` - [conditional action](/RVL/Actions/#conditional-actions).

??? abstract "2 - Type"
    Type of operation specified in this row. One of: 
    
    - `Action` - row defines an action. Action is a call for operation for one of the objects. Object is defined in the next column. See [Actions](Actions.md).
    - `Param` - signals that this row contains action parameter or condition parameter defined in last 3 columns (`ParamName`, `ParamType` and `ParamValue`).
    - `Output` - this type of row must go after last Param for an action and defines a variable that should accept output value returned from the call to the Action.
    - `Variable` - this row defines or assigns value to a local or global variable. See [Variables](Variables.md).
    - `Assert` - first row for the Assertion. See [Assertions](Assertions.md).
    - `Condition`

??? abstract "3 - Object"
    Id of the object to be used for an action. Rapise provides set of predefined global objects and objects recorded/learned from the AUT.
    
??? abstract "4 - Action"    
    One of the actions applicable to the object selected in the previous column: `DoAction`, `DoClick`, `GetText` etc.
    
??? abstract "5 - ParamName"    
    Name of a parameter to the action selected in the previous column. See [Params](Params.md) for more details.

??? abstract "6 - ParamType"
    The type of a parameter determines valid input for the next `ParamValue` column.
    
    - `bool` - *ParamValue* should be `true` or `false`,
    - `string` - *ParamValue* is a text string
    - `number` - *ParamValue* is an integer or floating point number,
    - `variable` - *ParamValue* is a variable name. Actual value is read from the variable.
    - *`Map Name`* - *ParamValue* is a column name from the given `Map`. Usually this feature is used for data driven testing.

??? abstract "7 - ParamValue"
    This columns defines actual values passed to actions. Depends on the *ParamType*.

In addition to these columns there may be any number of other columns used for storing supplementary data, comments, calculations, thoughts etc. Additional columns may be utilized for script itself (i.e. contain expected values or reference data).

## Adding Custom Columns

By default RVL always displays column `H`. It is sometimes useful (to store temp value, add a note etc).

One may show more columns. To do this open the file (i.e. `Main.rvl.xlsx`) in the spreadsheet editor or Excel and define some values in columns `I`, `J` etc respectively:

=== "Screenshot"
    ![Excel Columns](./img/CustomColumnsExcel.png)
=== "Transcript"
    Sheet name: RVL
    
    | A    | B    | C      | D      | E         | F         | G          | H   | I   | J   | K   |
    | ---- | ---- | ------ | ------ | --------- | --------- | ---------- | --- | --- | --- | --- |
    | Flow | Type | Object | Action | ParamName | ParamType | ParamValue | H   | I   | J   | K   |
    |      |      |        |        |           |           |            |     |     |     |     |
    |      |      |        |        |           |           |            |     |     |     |     |

Now if you re-open this document in RVL these columns will also be displayed:

=== "Screenshot"
    ![Excel Columns](./img/CustomColumnsRVL.png)
=== "Transcript"
    | Flow | Type | Object | Action | ParamName | ParamType | ParamValue | H   | I   | J   | K   |
    | ---- | ---- | ------ | ------ | --------- | --------- | ---------- | --- | --- | --- | --- |
    |      |      |        |        |           |           |            |     |     |     |     |
    |      |      |        |        |           |           |            |     |     |     |     |

The usage of this columns is up to you. You may use them just for information or make them 'live' by assigning custom actions as will be described in the next section.

## Custom Column Actions

RVL is flexible and one may use more columns to implement custom script logic.

The script occupies first 7 columns of the spreadsheet (**A**, **B**, **C**, **D**, **E**, **F**, **G**).

By default the script also displays the column **H**. It may also display as many additional columns as needed (see previous [section](#adding-custom-columns)). It may have some value but has no side effects, i.e.:

* Provide links (to requirements, documentation)
* Mark Status (review) and notes.

However the script may see this value and use it for own purpose, i.e.:

* Set report attribute
* Assign global variable
* Do Screenshot
* Do custom action.

You may have one or more custom columns defined in the script to achieve necessary goals. This will require you to override `OnRVLScriptStep` function as described below.

## OnRVLScriptStep

!!! note
    The information below requires some JavaScript knowledge. In most cases all you need is to copy relevant snippet from the documentation or KB to achieve desired behavior

Custom column actions are processed in the `OnRVLScriptStep` function that should be defined in the `User.js` file or in the [custom library](../Guide/custom_libraries.md).

```javascript
function OnRVLScriptStep(item, place, status, ctx, stackItem)
```

The function is mostly intended for internal use. Here you need information about the following parameters:

* `item` - current RVL action item. We need to use the following property of this item:
  * `item.Startrow` - First RVL row for given item (in RVL each statement takes one or more rows).
    * `item.Startrow.SheetRowIndex` - Row index in the current sheet.
    * `item.Startrow.Ext` - The structure, containing values for rows `H`, `I` and `J`, i.e.:
      * `item.Startrow.Ext.H` - Cell `H` for the current action
      * `item.Startrow.Ext.I` - Cell `I` for the current action
      * `item.Startrow.Ext.J` - Cell `J` for the current action
* `place` - One of `"before"` - callback just before executing row action, `"after"` - callback called after action has just been done.

## See Also

* [KB 433](http://www.inflectra.com/Support/KnowledgeBase/KB433.aspx) Using Extra Columns in RVL to add Report Attributes