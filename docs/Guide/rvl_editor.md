# RVL Editor

![rvl editor](./img/rvl_editor1.png)

## Purpose

[Rapise Visual Language](visual_language.md) Editor

## How to Open

Use the **RVL** button on the main toolbar to open an RVL (`.rvl.xlsx`) file. The file will be opened by the **RVL Editor** in the [Content View](content_view.md).

## Features

The editor supports all RVL statements, including:

*   [Variables](../RVL/Variables.md)
*   [Actions](../RVL/Actions.md)
*   [Assertions](../RVL/Assertions.md)
*   [Maps](../RVL/Maps.md)
*   [If-Else](../RVL/IfElse.md)
*   [Loops](../RVL/Loops.md)

RVL is a recordable language. The Rapise recorder translates captured actions into objects stored in the [object repository](object_tree.md) and a set of actions. Each recorded chunk can be inserted into the desired place in the selected sheet:

![Recording](./img/rvl_editor_recording.png)

Recording is usually performed in conjunction with scripting and, potentially, some JavaScript for advanced tasks.

## RVL Scripting

In addition to recording, you can use the RVL editor for authoring scripts. You may drag and drop actions from the Object Tree into the RVL. The RVL editor is also both keyboard and mouse friendly. You can either type whole commands or parts of them and rely on autocompletion, or simply select from a dropdown in a cell of the row.

When writing or modifying a script, it is recommended to work from left to right for script creation.

## Auto Completion

The RVL Editor supports autocompletion. For example, if you type `I` in the flow column:

![Flow I](./img/rvl_editor_flow_i.png)

And hit the ++tab++ key, the whole **If** statement is created:

![Flow If](./img/rvl_editor_flow_if.png)

> **Note**: ++tab++ is a trigger for autocompletion. If you use cursor keys or the mouse to leave the cell, autocompletion will not be executed.

If you go to the last line and change **End** to **ElseIf**:

![Flow If](./img/rvl_editor_flow_if_elseif.png)

Then an alternative branch is appended:

![Flow If](./img/rvl_editor_flow_if_elseif1.png)

Similar logic works for Params, Conditions, Maps, Loops, Assertions, and so on.

## Disabling Cell Auto Correction

Sometimes autocompletion prevents you from entering a desired value. For example, you have a global object `navigator`, and typing it into the **Object** column automatically changes it to `Navigator`.

The solution is to enter the cell to edit text and press `F2`. This will disable autocompletion for this cell, and then you can type any value.

## Action Params

When you select an action from the list, the **RVL Editor** automatically fills in default action parameters. For example, if we choose:

![DoLaunch](./img/rvl_editor_global_dolaunch0.png)

And press ++tab++ after `DoLaunch`, the **RVL Editor** fills in the default parameter:

![DoLaunch](./img/rvl_editor_global_dolaunch1.png)

`DoLaunch` has one required parameter, `cmdLine`. It also has a number of optional parameters. They are not added by default to make the script more concise. However, you might need all or some of them. So you can add them by pressing the `Params` button on the [RVL Toolbar](menu_and_toolbars.md#rvl-toolbar):

![DoLaunch](./img/rvl_editor_global_dolaunch2.png)

It is also possible to add parameters one-by-one using the dropdown in the **ParamName** column:

![DoLaunch](./img/rvl_editor_global_dolaunch3.png)

## Password Param Value

Once the **ParamType** column is set to `password`, **ParamValue** should be an encrypted string. Setting an encrypted value is simple:

1.  Change **ParamType** to `string`.
2.  Type the plain value to be encrypted into **ParamValue**.
3.  Switch **ParamType** to `password` - the plain value becomes encrypted.

## Param Dropdowns

It is possible to define your own list of dropdown values for any parameter. In most cases, this is defined for custom functions.

For example, you might have a function `SetState(stateCode)` where you expect a predefined, limited set of state code values.

```javascript
function SetState(/**string*/stateName)
```

You can define a dropdown for the `stateName` parameter so that the RVL editor suggests the following list:

![States](./img/rvl_dropdowns_states.png)

The values for this dropdown are defined in the spreadsheet:

![States](./img/rvl_dropdowns_xls_states.png)

Moreover, a code is defined for each state name, so it can be re-mapped in the implementation of the `SetState` function:

![States](./img/rvl_dropdowns_xls_stateCodes.png)

Dropdown values are defined in the file `Dropdowns.xlsx`, which can be added to the test using the [Create/Spreadsheet...](test_files_dialog.md#context-menu-folder) menu item.

The full key to find a matching dropdown is `objectid`.`method`.`paramName`. If not found, it will check the `method.paramName` and `paramName` columns:

| Key                      | Example                            |
| :----------------------- | :--------------------------------- |
| ``objectid`.`method`.`paramName`` | `Global.DoLaunch.cmdLine`          |
|                          | `Functions.SetState.stateName`     |
|                          | `MyButton.DoClick.clickType`       |
| ``object_type`.`method`.`paramName`` | `VSFlexGrid.DoClickCell.row`       |
| ``method`.`paramName``   | `SetState.stateName`               |
| `paramName`              | `stateName`                        |

The dropdown can be defined in the current (next to `Main.rvl.xlsx`), in the parent test, and so on, up to the framework root (the folder pointed to by `%WORKDIR%`).

![States](./img/rvl_dropdowns_nesting.png)

The RVL Editor always tries to find the best match for a dropdown column, starting from the nearest `Dropdowns.xlsx` and climbing up to the framework root.

Dropdowns can also be mapped to other values, i.e., human-readable menu area names to learned object IDs, state names to state codes, element names to XPath statements, and so on. This mapping is done by adjacent columns in `Dropdowns.xlsx`. The mapping can be one-to-many, so you can define the state code, state order number, and state capital for the same state name by adding corresponding columns.

## Full Line Comments

Anything typed into the **Type** cell of the commented line is expanded to fill as many cells as needed to display the text. This is similar to the way Excel extends cell text across sibling empty cells:

![DoLaunch](./img/rvl_editor_comment_line.png)

## Context Menu

![RVL Context Menu](./img/rvl_editor_context_menu.png){: width="215" }

*   **Find '`<object>`' in Object Tree** - This menu item is only available when you click on a cell in the **Object** column.
*   **Flash '`<object>`'** - Flashes the object.
*   **Show XPath/Location for '`<object>`'** - Shows the location string for the object.
*   **Rename '`<object>`'...** - Renames the object in the object repository and fixes all references in the current sheet.
*   **Play This Sheet** - Executes actions from the active sheet.
*   **Play Selection** - Executes only the selected range of actions. Useful for tweaking tricky actions and checking the result immediately.
*   **Play From Here** - Starts execution at the selected line and proceeds until the end. Useful to continue a script from the point where it stopped.
*   **Ins Row** - Inserts a new row before the active one.
*   **Del Row** - Deletes all selected rows.
*   **Cut**, **Copy**, **Paste** - Standard clipboard operations.
*   **Clear in Selection** - Clears cell values in the selected region.
*   **Select All Rows** - Selects the entire sheet.
*   **Insert Selected Rows Here** - Clones rows at the current location.
*   **Move Selected Rows Here** - Moves rows to the current location.
*   **Copy Selection as JavaScript** - Translates the selected range to the equivalent JavaScript and puts the text to the clipboard.
*   **Copy Selection as Text** - Puts the selected range as tab-separated text to the clipboard.
*   **Wrap Selection Into If** - Encloses the selected range into a [branch](../RVL/IfElse.md).
*   **Wrap Selection Into Loop** - Encloses the selected range into a [loop](../RVL/Loops.md).
*   **Extract Selection as new Sheet** - Creates a new sheet and moves the selected range into it.

## Sheet Tab Context Menu

![Tab Context Menu](./img/rvl_editor_tab_context_menu.png)

*   **Play this Sheet** - Executes the current sheet.
*   **Rename...** - Changes the sheet tab name.
*   **Remove Sheet '`<sheet name>`'** - Deletes the sheet from the workbook.
*   **Copy RVL DoPlaySheet** - Copies the call statement for the selected sheet for inserting into another RVL sheet in the same workbook.
*   **Copy RVL DoPlaySheet** - Copy call statement for the selected sheet for inserting into the other RVL workbook.
*   **Copy RVL.DoPlayScript(...)** - Copies JavaScript code to execute this sheet (call sheet from JavaScript).

## Functions Object

Suppose you have some functions defined in the `User.js` file:

![User functions](./img/rvl_editor_functions2.png)

Calling JavaScript from RVL is performed via the `Functions` Object. It is not available in the object repository and is only displayed in the RVL Objects dropdown:

![User functions](./img/rvl_editor_functions1.png)

Once selected, it displays all user-defined functions from the `User.js` file:

![User functions](./img/rvl_editor_functions3.png)

## File Extensions

RVL has the following file extensions:

*   `rvl.xlsx`
*   `rvl.xls`

RVL is designed to be a simple grid language and it can be edited in any spreadsheet editor that supports `.xls` or `.xlsx` files (e.g., Microsoft Excel).

## RVL Editor Shortcuts

*   ++shift+enter++ - Inserts an empty line after the selected cell.
*   ++ctrl+d++ - Deletes the line of the selected cell.
*   ++ctrl+p++ - Reveals optional parameters for an action in the current line, acting like a click on the `Params` button on the RVL Toolbar.

## RVL Toolbox

Since Rapise 6.7, you can use the RVL Toolbox to quickly find RVL snippets, KB articles, and documentation links. The toolbox is located on the right side of the RVL editor.

![RVL Toolbox](./img/rvl_toolbox.png)

The toolbox consists of three parts:

1.  Search field: Enter text here to filter the list of items.
2.  List of items: Select an item to preview. Some items can be dragged directly into the RVL area.
3.  Preview pane: Displays a description of the selected item. Click links to get more information.

![RVL Toolbox Controls](./img/rvl_toolbox_controls.png)

If you select an item in the toolbox and see a yellow box with text `Drag selected item to insert into RVL`, you can drag the item to the RVL area.

![RVL Toolbox DragDrop](./img/rvl_toolbox_dragdrop.png)

There is also an advanced way of using the toolbox:

1.  Start typing what you want to do in the **Actions** column (the line must be empty).
2.  Then hit ++enter++ and choose an item from the list using the arrow keys.
3.  Then hit ++enter++ again to insert the snippet into the RVL.

<iframe width="560" height="315" src="https://www.youtube.com/embed/rWgcl4eWyJ0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you want to keep the toolbox hidden, unpin it.

![Unpin RVL Toolbox](./img/rvl_toolbox_auto_hide.png)

Move the mouse over the Toolbox label to reveal the list of items.

![Reveal RVL Toolbox](./img/rvl_toolbox_reveal.png)

## Navigate to Definition (F12)

To quickly navigate to the location where a specific function or Page Object action is defined, follow these steps:

1.  Click on the function name or action.
2.  Press the F12 key.
3.  Rapise will attempt to locate and open the corresponding definition.

![f12 1](./img/rvl_editor_f12_1.png)

![f12 2](./img/rvl_editor_f12_2.png)

## Define a Map by Drag&Drop

When you drag and drop a spreadsheet (`.xlsx`) into the RVL, a [map](../RVL/Maps.md) is created. This map refers to the data file using an absolute path, starting from the framework root (represented by `%WORKDIR%`).

![Map, Absolute](./img/rvl_editor_drag.png)

However, if you hold the ++shift++ key while performing the same action, the map is created with a relative path instead. This relative path is based on the current `rvl.xlsx` file.

![Map, Relative](./img/rvl_editor_shift_drag.png)

## DoPlayTest via Drag&Drop

When you drag and drop a test case into the RVL, a `RVL.DoPlayTest` call is created. The call refers to the test case using an absolute path, starting from the framework root (represented by `%WORKDIR%`).

![TestCase Drag&Drop](./img/rvl_editor_testcase_drag.png)

However, if you hold the ++shift++ key while performing the same action, the call is created with the test alias name (short name) instead:

![TestCase Shift+Drag&Drop](./img/rvl_editor_testcase_shift_drag.png)

Short names are useful when all test cases have unique names. This usually entails longer naming conventions; for example, instead of `Invoices/Create`, a test case should be named `Invoices/Create new Invoice` to avoid collisions with other test cases like `Orders/Create`.

## Drag&Drop for DoPlayTest

When you drag and drop a [test case](./Frameworks/frameworks.md#test-cases) into the RVL, it generates a `RVL.DoPlayTest` call. This call references the test case using an absolute path starting from the framework root, represented by `%WORKDIR%`.

![Drag&Drop TestCase](./img/rvl_editor_testcase_drag.png)

However, if you hold the ++shift++ key while performing the same action, the same call is created with the test alias name (short name) instead:

![Shift+Drag&Drop TestCase](./img/rvl_editor_testcase_shift_drag.png)

Short names are particularly useful when each test case has a unique name. In such cases, longer naming conventions can be used to differentiate test cases; for example, using `Invoices/Create new Invoice` instead of `Invoices/Create` to avoid collisions with other test cases like `Orders/Create`.

## See Also

*   [About RVL](visual_language.md)
*   [Why RVL?](../RVL/Overview.md)
*   [KB 357](https://www.inflectra.com/Support/KnowledgeBase/KB357.aspx) Data-driven testing with spreadsheets and RVL
*   [KB 340](https://www.inflectra.com/Support/KnowledgeBase/KB340.aspx) How to Do a Nested Loop with Rapise Visual Language (RVL)
*   [KB 371](https://www.inflectra.com/Support/KnowledgeBase/KB371.aspx) Sample Spira-Friendly Framework with Multiple RVLs and Common Library