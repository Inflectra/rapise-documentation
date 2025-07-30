# Params

The last three columns in the RVL table are used for passing parameters:

| ... | ParamName  | ParamType | ParamValue |
| --- | ---------- | --------- | ---------- |
| ... | text       | string    | John Smith |
| ... | x          | number    | 5          |
| ... | y          | number    | 7          |
| ... | forceEvent | boolean   | true       |

*   The fifth column, *ParamName*, specifies the name of the parameter. While it does not affect execution, it is important for readability and for understanding the provided input options. The *ParamName* is significant in cases such as [RVL.DoPlayTest](/Libraries/RVL#doplaytest), [RVL.DoPlaySheet](/Libraries/RVL#doplaysheet), [RVL.SetLocatorOpt](/Libraries/RVL#setlocatoropts), and [RVL.FormatString](/Libraries/RVL#formatstring). See [Extra Parameters](#extra-parameters) for more information.
*   The sixth column, *ParamType*, specifies the value type. This may be a basic scalar type (`number`, `string`, `boolean`) or one of the following special types:
    *   `expression` - Any valid JavaScript expression that may involve global variables, functions, and local variables.
    *   `variable` - The parameter value is read from a variable.
    *   `objectid` - The ID of one of the learned Objects.
    *   `password` - Means the value is an encrypted string that is decrypted at runtime.
    *   `relpath` - Means a path relative to the location of the current RVL file. This parameter is automatically translated to a full path before being passed to the action/function.
    *   `testparam` - The value of the [parameter](/Guide/Frameworks/parameters) passed to the test.
    *   `<mapname>` - See [Map Params](#map-params).
*   The seventh column, *ParamValue*, specifies the value acceptable for the corresponding *ParamType*. For `boolean`, it can be either `true` or `false`. For `number`, it can be any floating-point number (e.g., `3.14`). For `string`, it can be any text without quotes or escape characters. For `relpath`, it should be a valid relative path, and for `testparam`, it is the name of the parameter (e.g., `Browser`).

## Param Rows

In RVL, each parameter takes one row:

| Flow | Type  | Object | Action | ParamName  | ParamType | ParamValue |
| ---- | ----- | ------ | ------ | ---------- | --------- | ---------- |
| ...  | Param |        |        | text       | string    | John Smith |
| ...  | Param |        |        | x          | number    | 5          |
| ...  | Param |        |        | y          | number    | 7          |
| ...  | Param |        |        | forceEvent | boolean   | true       |

## Param Arrays

Some methods accept arrays as input values. For example, `Tester.Message` may take its first `message` parameter as an array and print the combined elements. To create an array, combine several consecutive parameters that have the same name:

| Flow | Type   | Object | Action  | ParamName   | ParamType    | ParamValue    |
| ---- | ------ | ------ | ------- | ----------- | ------------ | ------------- |
|      | Action | Tester | Message | **message** | **string**   | MyVar1 value: |
|      | Param  |        |         | **message** | **variable** | **MyVar1**    |
|      | Param  |        |         | **message** | **string**   | MyVar2 value: |
|      | Param  |        |         | **message** | **variable** | **MyVar2**    |

This reports a message like:

    MyVar1 value: 25 MyVar2 value: 33

## Extra Parameters

Several functions of the [RVL Object](../Libraries/RVL.md) support extra parameters, including [`RVL.DoPlaySheet`](RVL_DoPlay.md), [`RVL.DoPlayScript`](RVL_DoPlay.md), [`RVL.SetLocatorOpts`](../Libraries/RVL.md#setlocatoropts), [`RVL.FormatString`](../Libraries/RVL.md#formatstring), [`RVL.DoPlayTest`](../Libraries/RVL.md#doplaytest), and [`RVL.DoPlayTestParallel`](../Libraries/RVL.md#doplaytestparallel).

Custom parameters are added manually by specifying the row type as `Param` and assigning a parameter name.

=== "Screenshot"
    ![Extra Parameters](./img/Params_ExtraParams.png)
=== "Transcript"
    | Flow | Type   | Object | Action       | ParamName    | ParamType | ParamValue              |
    | ---- | ------ | ------ | ------------ | ------------ | --------- | ----------------------- |
    |      |        |        |              |              |           |                         |
    |      | Action | RVL    | DoPlaySheet  | sheetName    | string    | SheetWithParams         |
    |      | Param  |        |              | User         | string    | ExtUser                 |
    |      | Param  |        |              | Password     | string    | ExtPassword             |
    |      | Param  |        |              | OtherVarName | string    | somevalue               |
    |      |        |        |              |              |           |                         |
    |      | Action | RVL    | DoPlayScript | scriptPath   | string    | %WORKDIR%\Main.rvl.xlsx |
    |      | Param  |        |              | sheetName    | string    | SheetWithParams         |
    |      | Param  |        |              | Password     | string    | OnlyPasswordChanged     |
    |      |        |        |              |              |           |                         |

There may be as many extra parameters as needed.

## Mixed Rows

In some cases, it is convenient to mix parameter cells with an *Action* or *Condition*.

For example, the first parameter of an *Action* can share the `Action` row:

| Flow | Type   | Object   | Action  | ParamName | ParamType  | ParamValue |
| ---- | ------ | -------- | ------- | --------- | ---------- | ---------- |
|      | Action | MyButton | DoClick | **x**     | **number** | **5**      |
|      | Param  |          |         | y         | number     | 7          |

This is equivalent to putting it on the next row:

| Flow | Type   | Object   | Action  | ParamName | ParamType  | ParamValue |
| ---- | ------ | -------- | ------- | --------- | ---------- | ---------- |
|      | Action | MyButton | DoClick |           |            |            |
|      | Param  |          |         | **x**     | **number** | **5**      |
|      | Param  |          |         | y         | number     | 7          |

Alternatively, `param2` of the [condition](Conditions.md) can be on the same row:

| Flow | Type      | Object | Action         | ParamName  | ParamType  | ParamValue |
| ---- | --------- | ------ | -------------- | ---------- | ---------- | ---------- |
|      | Param     |        |                | param1     | string     | Text1      |
|      | Condition |        | param1!=param2 | **param2** | **string** | **Text2**  |

This is equivalent to:

| Flow | Type      | Object | Action         | ParamName  | ParamType  | ParamValue |
| ---- | --------- | ------ | -------------- | ---------- | ---------- | ---------- |
|      | Param     |        |                | param1     | string     | Text1      |
|      | Condition |        | param1!=param2 |            |            |            |
|      | Param     |        |                | **param2** | **string** | **Text2**  |

This saves space while maintaining readability. See also [short condition syntax](Conditions.md#short-condition-syntax) for a real-life example of mixed row usage.

## Map Params

If a map is defined in the script, it can be used directly as a parameter. *ParamType* should be set to the map name, and *ParamValue* should be a column (or row) name:

=== "Screenshot"
    ![Map Param](./img/Params_MapValue.png)
=== "Transcript"
    | Flow | Type   | Object   | Action  | ParamName | ParamType | ParamValue |
    | ---- | ------ | -------- | ------- | --------- | --------- | ---------- |
    | Map  | Rows   | Logins   |         |           |           |            |
    |      | Login  | Password |         |           |           |            |
    |      | John   | pass1    |         |           |           |            |
    |      | Sarah  | pass2    |         |           |           |            |
    | End  | of Map |          |         |           |           |            |
    |      |        |          |         |           |           |            |
    |      | Action | Tester   | Message | message   | Logins    | Password   |