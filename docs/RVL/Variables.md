# Variables

In RVL, variables are useful for storing intermediate results, as well as accessing and passing global values to external *JavaScript* functions.

Variables may be used in [Params](Params.md), [Conditions](Conditions.md), and [Actions](Actions.md).

## Declaring

This line declares a variable without a value. Its value may be assigned later:

| Flow | Type         | Object | Action | ParamName | ParamType | ParamValue |
| ---- | ------------ | ------ | ------ | --------- | --------- | ---------- |
|      | **Variable** |        |        | `MyVar1`  |           |            |

## Local Variables

By default, declared variables are assumed to be local. Local variables may be used only within the current RVL script and are not visible to other RVL scripts or *JavaScript* code.

## Global Variables

You may have a *JavaScript* variable defined in the user *Functions* file (`*.user.js`), for example:

```javascript
// Snippet from User.js
var globalVar = "Value";
```

Then, in RVL, you can declare `globalVar` as global and access it (read or assign values). Declaring a variable as global is simple:

| Flow | Type       | Object | Action     | ParamName   | ParamType | ParamValue |
| ---- | ---------- | ------ | ---------- | ----------- | --------- | ---------- |
|      | *Variable* |        | **Global** | `globalVar` |           |            |

Global variables are useful for sharing data between different RVL scripts or between *RVL* and *JavaScript*.

### Default Value for Global Variable

The special parameter `defaultValue` in a global variable definition allows you to set a default value. This is useful when you do not know if the variable was set before the script was called. The value will be assigned only if the variable is currently undefined. Otherwise, the variable keeps its existing value.

=== "Screenshot"
    ![defaultValue](./img/RVL_Variable_DefaultValue.png)
=== "Transcript"
    | Flow | Type     | Object | Action | ParamName    | ParamType | ParamValue |
    | ---- | -------- | ------ | ------ | ------------ | --------- | ---------- |
    |      | Variable | Global |        | g_loginName  |           |            |
    |      | Param    |        |        | defaultValue | string    | librarian  |
    |      |          |        |        |              |           |            |
    |      | Variable | Global |        | g_password   |           |            |
    |      | Param    |        |        | defaultValue | string    | librarian  |
    |      | Variable | Global |        | g_name       |           |            |
    |      | Param    |        |        | defaultValue | string    | librarian  |
    |      |          |        |        |              |           |            |

This helps make sheets that use global variables executable standalone. i.e., you can use [Play This Sheet](../Guide/rvl_editor.md#context-menu) in RVL and be sure that the global variable will have a value.

## Common Variables

In addition to local and global variables, RVL also supports **common variables**.  
These are variables declared in [Common Sheets](Sheets.md#common-sheets) or in [Common.rvl.xlsx](Sheets.md#commonrvlxlsx).

**Key points:**

- Common variables are declared just like local or global variables, but they live in a **common sheet** (a sheet whose name starts with `#`).
- They are automatically visible to **all sheets** in the same workbook.
- When defined in **Common.rvl.xlsx**, they become available across the **entire testing framework**.
- The value of a common variable can be updated in one sheet and then reused in another, providing an easy way to share state across test flows.
- If a sheet is played from outside (e.g., via `RVL.DoPlayScript`), common variables reset to their **default values** from the common sheet.

**Example (in `#Vars` common sheet):**

| Flow | Type     | Object | Action | ParamName | ParamType | ParamValue |
| ---- | -------- | ------ | ------ | --------- | --------- | ---------- |
|      | Variable |        |        | Age       | number    | 30         |

If a test sheet sets `Age = 38` and then calls another sheet, the new sheet will see `Age = 38`.  
When executed externally, `Age` resets back to the default value `30`.

See [Common Sheets](Sheets.md#common-sheets) and [Common.rvl.xlsx](Sheets.md#commonrvlxlsx) for more details.


## Assigning

### Assignment Expression

This line declares and assigns the value *5* to a variable `MyVar2`:

| Flow | Type         | Object | Action | ParamName | ParamType | ParamValue |
| ---- | ------------ | ------ | ------ | --------- | --------- | ---------- |
|      | **Variable** |        |        | `MyVar2`  | *number*  | *5*        |

If a variable has been previously declared, an assignment simply changes its value. If a variable has not been declared, an assignment acts as both a declaration and an assignment.

### Action Output

If an action returns a value, it can be assigned to a variable via `Output`.

| Flow | Type         | Object | Action       | ParamName   | ParamType | ParamValue |
| ---- | ------------ | ------ | ------------ | ----------- | --------- | ---------- |
|      | **Variable** |        |              | `OsVersion` |           |            |
|      | **Action**   | Global | GetOsVersion |             |           |            |
|      | **Output**   |        |              |             | variable  | OsVersion  |

### Auto Assignment

There are two auto-assigned variables in RVL: `LastResult` and `LastObject`. If an action returns a value, it is assigned to `LastResult`. `LastObject` is effectively an alias to the last used object in the **Object** column.

| Flow | Type       | Object | Action       | ParamName | ParamType | ParamValue     |
| ---- | ---------- | ------ | ------------ | --------- | --------- | -------------- |
|      | **Action** | Global | GetOsVersion |           |           |                |
|      | **Action** | Tester | Message      |           | variable  | **LastResult** |

This snippet prints the OS version to the report.

## Using

Any [Params](Params.md) value may accept a *variable*:

| Flow | Type  | Object | Action | ParamName | ParamType  | ParamValue |
| ---- | ----- | ------ | ------ | --------- | ---------- | ---------- |
| ...  | Param |        |        | text      | *variable* | `MyVar1`   |

Any [Params](Params.md) value may accept an *expression* using variables:

| Flow | Type  | Object | Action | ParamName | ParamType    | ParamValue   |
| ---- | ----- | ------ | ------ | --------- | ------------ | ------------ |
| ...  | Param |        |        | text      | *expression* | `MyVar2 + 4` |

Any [Action](Actions.md) may write its return value to a variable using the *Output* statement:

| Flow | Type   | Object | Action | ParamName | ParamType | ParamValue   |
| ---- | ------ | ------ | ------ | --------- | --------- | ------------ |
|      | Action | Global | DoTrim | str       | string    | text to trim |
|      | Output |        |        |           | variable  | `MyVar1`     |

The Output value may then be used as a parameter value in actions, conditions, assertions, and expressions.

## Variable Actions

You can use an expression to change the value of a variable. Here are several common operations for modifying variable values:

1. *Increment* is an operation where a numeric value is increased by `1` or any other specified value. The variable must have a numeric value. Otherwise, the result is `NaN`.

    If no parameter is specified for *Increment*, `1` is assumed:

      | Flow | Type       | Object | Action        | ParamName | ParamType | ParamValue |
      | ---- | ---------- | ------ | ------------- | --------- | --------- | ---------- |
      |      | *Variable* |        | **Increment** | `numVar`  |           |            |

      Otherwise, the increment is the specified *value*:

      | Flow | Type       | Object | Action        | ParamName | ParamType | ParamValue |
      | ---- | ---------- | ------ | ------------- | --------- | --------- | ---------- |
      |      | *Variable* |        | **Increment** | `numVar`  | `number`  | *value*    |

2. *Decrement* is similar to increment, but the value is subtracted from the variable.

3. *Append* adds the value as text to the specified variable. This operation is useful for constructing text messages:

      | Flow   | Type       | Object   | Action     | ParamName   | ParamType   | ParamValue   |
      | ------ | ---------- | -------- | ---------- | ----------- | ----------- | ------------ |
      |        | *Variable* |          | **Append** | `textVar`   | `string`    | Final value: |
      |        | *Variable* |          | **Append** | `textVar`   | `variable`  | `numVar`     |

      In this example, if `textVar` was empty and `numVar` had the value `5`, then the final value of `textVar` is the following text:
      `Final value: 5`

## Variables as Objects

A variable in Rapise can hold an object from the repository. Such a variable can have actions that can be executed.

When declaring a variable with the `objectid` *ParamType*, you indicate to the RVL editor that its type is one of the following:

1. The type of the object from the object repository whose ID matches the `objectid`.
2. A well-known object type whose name matches the `objectid`. You can find object names in the documentation for each library. For example, the topic [Java Objects](../Libraries/ses_lib_java.md) lists all known object types for the Java library.

    === "Screenshot"
        ![Object Rules](./img/Variables_object_rules.png)
    === "Transcript"
        **Documentation Navigation**
        
        - `#`
        - `User's Guide`
        - `RVL`
        - `Libraries`
        - `Manuals`
        - `KB`
        - `Education`
        - `Release Notes`
        
        **Libraries Section**
        
        - `ActiveXC1 >`
        - `ActiveXSft >`
        - `FarPoint >`
        - `VSFlexGrid >`
        - `Java >`
            - **Java Objects**
                - `JavaButton`
                - `JavaCheckBox`
                - `JavaChoice`
                - `JavaLabel`
                - `JavaList`
                - `JavaObject`
                - `JavaSwingButton`
        
        (*Note: The image also includes a navigation flow marked with a dotted line, connecting the 'Java' section with 'JavaButton', then leading to a list of Java components including 'JavaCheckBox', 'JavaChoice', 'JavaLabel', 'JavaList', 'JavaObject', and 'JavaSwingButton'.*)

    Additionally, you can use the type specified in the object's definition properties. For example, most web objects have the type [HTMLObject](../Libraries/HTMLObject.md), as shown in the object properties:

    === "Screenshot"
        ![Object Type](./img/Variables_object_type_properties.png)
    === "Transcript"
        Test Management Interface
        
        **Test Cases Section**
        
        - `Test Cases`
          - `Author Management`
            - `![Full - Author Management](link-to-green-check-icon) Full - Author Management`
            - `![Check](link-to-check-icon) Check Author Summary`
            - `![Create](link-to-plus-icon) Create a New Author`
            - `[Objects]`
              - `[Inflectra | Library Information System]`
                - `> Add`
                - `> Age`
                - `> Name`
              - `[Library Information System | Author]`
              - `[Library Information System | Book M]`
              - `[RVL]`
            - `![Edit](link-to-pencil-icon) Edit Existing Author`
        
        **Object Tree Tab**
        
        - `Object Tree`
        - `Files`
        
        **Properties Panel**
        
        - `Properties`
            - `Class: Selenium`
            - `Flavor: Button`
            - `Ignore Object Name: True`
            - `Library: Selenium`
            - `Name: Add`
            - `Role:`
            - `Text:`
            - `Type: ![HTML Object](link-to-red-circled-icon) HTMLObject`
            - `Window:`
            - `ID:`
            - `Type: HTMLObject`
        
        (*Note: The image indicates a software interface with a navigation tree at the top and the properties of a selected object at the bottom. The selected object is `Add`. The properties are for an object of class 'Selenium' and type 'HTMLObject'. *)

The RVL editor knows how to handle such a variable and provides hints to help you choose an action for it:

=== "Screenshot"
    ![Variable Action](./img/Variables_variable_action.png)
=== "Transcript"
    | Flow | Type     | Object     | Action         | ParamName  | ParamType | ParamValue                                 |
    | ---- | -------- | ---------- | -------------- | ---------- | --------- | ------------------------------------------ |
    |      | Variable |            |                | EditAuthor | objectid  | HTMLObject                                 |
    |      | Action   | Navigator  | DOMFindByXpath | xpath      | string    | //td[normalize-space(.)='Charles Dickens'] |
    |      | Action   | EditAuthor | DoClick        |            |           |                                            |

## Examples

Variables may be declared as *Local* or *Global*. A declaration may or may not contain an initial value.

=== "Screenshot"
    ![Variable Declarations](./img/Variables_Declaration.png)
=== "Transcript"
    | Flow | Type                                                                        | Object | Action | ParamName  | ParamType | ParamValue |
    | ---- | --------------------------------------------------------------------------- | ------ | ------ | ---------- | --------- | ---------- |
    | #    | Declare a global variable. If it was assigned earlier, it keeps its value   |        |        |            |           |            |
    |      | Variable                                                                    |        | Global | g_bookName |           |            |
    | #    | Declare a global variable and assign its value                              |        |        |            |           |            |
    |      | Variable                                                                    |        | Global | g_genre    | string    | NonFiction |
    | #    | Declare a local variable without a value, using the explicit Local keyword  |        |        |            |           |            |
    |      | Variable                                                                    |        | Local  | Osversion  |           |            |
    | #    | Declare local variables and assign initial values, using the explicit local keyword |        |        |            |           |            |
    |      | Variable                                                                    |        | Local  | StringVar  | string    | some text  |
    |      | Variable                                                                    |        | Local  | NumVar     | number    | 35         |
    |      | Variable                                                                    |        | Local  | BoolVar    | boolean   | false      |
    | #    | Declare a local variable without a value                                    |        |        |            |           |            |
    |      | Variable                                                                    |        |        | Osversion  |           |            |
    | #    | Declare and assign local variables                                          |        |        |            |           |            |
    |      | Variable                                                                    |        |        | StringVar  | string    | some text  |
    |      | Variable                                                                    |        |        | NumVar     | number    | 35         |
    |      | Variable                                                                    |        |        | BoolVar    | boolean   | false      |

Variables can accept the output from an *Action*:

=== "Screenshot"
    ![Variable Output](./img/Variables_Output.png)
=== "Transcript"
    | Flow | Type     | Object | Action       | ParamName | ParamType | ParamValue |
    | ---- | -------- | ------ | ------------ | --------- | --------- | ---------- |
    |      | Variable |        | Local        | OsVersion |           |            |
    |      | Action   | Global | GetOsVersion | Output    |           |            |
    |      | Output   |        |              |           | variable  | OsVersion  |
    |      |          |        |              |           |           |            |

Variables can be used as input for an *Action*:

=== "Screenshot"
    ![Variable AsParam](./img/Variables_AsParam.png)
=== "Transcript"
    | Flow | Type                        | Object | Action  | ParamName | ParamType | ParamValue |
    | ---- | --------------------------- | ------ | ------- | --------- | --------- | ---------- |
    | #    | Use a variable as a parameter |        |         |           |           |            |
    |      | Action                      | Tester | Message | message   | variable  | OsVersion  |