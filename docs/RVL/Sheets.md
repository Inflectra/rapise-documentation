# RVL Sheets

An RVL script may contain one or more sheets distributed across one or more workbooks.

=== "Screenshot"
    ![Sheets](./img/Sheets.png)
=== "Transcript"
    Workbook with 4 sheets: RVL, Browsers, Users, Login
    
    Active Sheet: RVL

    | Flow | Type | Object | Action      | ParamName | ParamType | ParamValue |
    | ---- | ---- | ------ | ----------- | --------- | --------- | ---------- |
    |      | Action | RVL    | DoPlaySheet | sheetName | string    | Browsers   |

A sheet is an atomic building block for implementing test frameworks and sharing logic.

For example, there may be a sheet called `Login` that can be reused by **CreateNewBook**, **CreateExistingBook**, and other test scenarios that require **Login** logic.

The default sheet name is `RVL`. You can rename it and add more sheets.

An RVL sheet is executable when it has 7 predefined [Columns](Columns.md). A workbook may contain both executable and data sheets.

Besides regular executable and data sheets, RVL also supports **common sheets**.  
These sheets provide a way to centralize shared variables, maps, and repository definitions so they can be reused across multiple sheets.  
See [Common Sheets](#common-sheets) for details.

## Calling Sheets

You can make calls between scripts using [RVL.DoPlayScript](../Libraries/RVL.md#doplayscript) and [RVL.DoPlaySheet](../Libraries/RVL.md#doplaysheet).

## Passing Parameters

You can pass parameters between sheets. See [Passing Input Parameters](RVL_DoPlay.md#passing-input-parameters).

## Passing Maps

You can pass a [Map](Maps.md) between sheets as [input parameters](RVL_DoPlay.md#passing-input-parameters).

For example, here we pass a map `FullLoginData`:

=== "Screenshot"
    ![Pass Map](./img/RVL_Sheets_PassMaps1.png)
=== "Transcript"
    Sheet name: LoginAll
    
    | Flow | Type   | Object        | Action      | ParamName  | ParamType  | ParamValue    |
    | ---- | ------ | ------------- | ----------- | ---------- | ---------- | ------------- |
    | Map  | Rows   | FullLoginData |             |            |            |               |
    |      | User   | Password      |             |            |            |               |
    |      | user3  | password3     |             |            |            |               |
    |      | user4  | password4     |             |            |            |               |
    |      | user5  | password5     |             |            |            |               |
    | End  | of Map |               |             |            |            |               |
    |      | Action | RVL           | DoPlaySheet | sheetName  | string     | Login         |
    |      | Param  |               |             | UserLogins | expression | FullLoginData |

as a value to override the map `UserLogins` on the `Login` sheet:

=== "Screenshot"
    ![Pass Map](./img/RVL_Sheets_PassMaps2.png)
=== "Transcript"
    Sheet name: Login
    
    | Flow | Type      | Object     | Action  | ParamName | ParamType  | ParamValue |
    | ---- | --------- | ---------- | ------- | --------- | ---------- | ---------- |
    |      |           |            |         |           |            |            |
    | Map  | Rows      | UserLogins |         |           |            |            |
    |      | User      | Password   |         |           |            |            |
    |      | user1     | password1  |         |           |            |            |
    | End  | of Map    |            |         |           |            |            |
    |      |           |            |         |           |            |            |
    | Loop | Map       | UserLogins |         |           |            |            |
    | #    | Loop body |            |         |           |            |            |
    |      | Action    | Tester     | Message | message   | string     | User:      |
    |      | Param     |            |         | message   | UserLogins | User       |
    |      | Param     |            |         | message   | string     | /          |
    |      | Param     |            |         | message   | UserLogins | Password   |
    | End  | of Loop   |            |         |           |            |            |

## Preamble

Each RVL sheet may begin with a **preamble**—a section containing common data definitions such as variables, maps, and repository imports. The preamble is executed before any actions, assertions, loops, or conditions in the sheet. This ensures that all necessary data and objects are available for the main script logic.

The preamble ends at the first row containing an action, assertion, loop, or condition. For example:

| Flow | Type     | Object | Action      | ParamName  | ParamType | ParamValue      |
| ---- | -------- | ------ | ----------- | ---------- | --------- | --------------- |
|      | Variable |        | Login       | string     | librarian |                 |
|      | Variable | Global | g_password  | string     | librarian |                 |
|      | Map      | Rows   | MyMap1      |            |           |                 |
|      | Col      | Col1   | Col2        | Col3       |           |                 |
|      | r1       | r11    | r12         | r13        |           |                 |
| End  | of Map   |        |             |            |           |                 |
|      | Action   | Tester | Message     | message    | string    | Starting Script |

See [Sheet Preamble](Preamble.md) for more details.

## Variables in Sheets

Variables can be declared in the preamble or anywhere in the sheet. They are used to store intermediate results, pass data between actions, and share values with JavaScript code. Variables may be local (visible only within the sheet) or global (shared across sheets and scripts).

Example variable declaration:

| Flow | Type     | Object | Action | ParamName | ParamType | ParamValue |
| ---- | -------- | ------ | ------ | --------- | --------- | ---------- |
|      | Variable |        |        | MyVar1    |           |            |

Global variable with default value:

| Flow | Type     | Object | Action | ParamName    | ParamType | ParamValue |
| ---- | -------- | ------ | ------ | ------------ | --------- | ---------- |
|      | Variable | Global |        | g_loginName  |           |            |
|      | Param    |        |        | defaultValue | string    | librarian  |

See [Variables](Variables.md) for more information.

## Importing Repositories

To use objects from external repositories in a sheet, declare a **Repository** entry in the preamble. This imports objects and makes them available for use in actions.

Example:

| Flow | Type       | Object   | Action | ParamName | ParamType | ParamValue |
| ---- | ---------- | -------- | ------ | --------- | --------- | ---------- |
|      | Repository | Nav/     |        | %WORKDIR%\TestCases\Views\Nav\Objects.js | | |

Objects from the repository can then be referenced in the sheet using their prefixed names (e.g., "Nav/Authors").

See [Repository](Repository.md) for more details.

## RVL File

The default file format for RVL scripts is an Excel workbook, which makes it easier to combine data with script logic. Any RVL file has the `.rvl.xlsx` extension and can be opened directly in **MS Excel**.

## Common Sheets

A **common sheet** in RVL is a special sheet within an `.rvl.xlsx` workbook whose name starts with `#`, such as `#Common`, `#Vars`, or `#Maps`. Common sheets are used to define shared data—variables, maps, and repositories—that are accessible from all other sheets in the same workbook. So each time you are creating an RVL sheet whose name starts with `#` you are adding a **common sheet**.

**Key characteristics:**

- **Preamble only:** Common sheets may only contain preamble content (see [Preamble](Preamble.md)). This means you can define Variables, Maps, and Repositories, but you cannot include actions, assertions, loops, or conditions.

- **Global visibility:** Any variable, map, or repository defined in a common sheet is automatically visible and accessible in all other sheets within the same `.rvl.xlsx` file.

- **Local variable sharing:** The value of a local variable defined in a common sheet is shared between sequential script calls within the same workbook. For example, if the main sheet assigns a value to a local variable defined in `#Vars` and then calls another sheet, the new sheet will see the updated value.

- **Reset on external call:** If a sheet is played indirectly (e.g., from another RVL script or via JavaScript using `RVL.DoPlayScript`), all local variable values are reset to their defaults as defined in the common sheet.

- **Map state sharing:** If a map is defined in a common sheet and is used or iterated in one sheet, its state (such as the current row) is shared with other sheets called within the same script. This allows for coordinated data-driven flows across multiple sheets.

**Example:**
Suppose you have a `#Vars` sheet with the following content:

| Flow | Type     | Object | Action | ParamName | ParamType | ParamValue |
| ---- | -------- | ------ | ------ | --------- | --------- | ---------- |
|      | Variable |        |        | Age       | number    | 30         |

If the main sheet assigns `Age = 38` and then calls another sheet, the called sheet will see `Age = 38`. However, if the sheet is played from another script, `Age` will be reset to `30`.

Common sheets are a powerful way to centralize and share configuration, test data, and object repositories across multiple test flows in a single RVL workbook.

## Common.rvl.xlsx

The **Common.rvl.xlsx** file is a special workbook that extends the concept of common sheets to the entire testing framework.

1. There is typically **one Common.rvl.xlsx per testing framework**.
2. Once defined, it is automatically attached to every RVL sheet in the framework. All variables, maps, and repositories declared in it are therefore available globally.
3. Unlike per-workbook common sheets, **all sheet names inside Common.rvl.xlsx are treated as preambles** regardless of their actual names.
4. The logic is the same as with [Common Sheets](#common-sheets), but at the **framework level** instead of within a single `.rvl.xlsx`.
5. A Common.rvl.xlsx can be created directly from the **Object tree → Shared → New Common.rvl.xlsx** [context menu](../Guide/object_tree.md#shared-node-context-menu).

This makes Common.rvl.xlsx the central location for defining framework-wide defaults, shared test data, and reusable repositories, ensuring consistency across all RVL scripts.
