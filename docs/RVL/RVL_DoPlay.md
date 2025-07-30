# RVL.DoPlaySheet and RVL.DoPlayScript

```javascript
DoPlayScript(/**string*/ scriptPath, /**string*/ sheetName)
```

Plays an RVL sheet `sheetName` from the workbook `scriptPath`.

*   `scriptPath`: The path to the script.
*   `sheetName`: The name of the Excel sheet containing the script.
*   **[extraParams]**: Default values for local variables.

```javascript
DoPlaySheet(/**string*/ sheetName)
```

Plays an RVL sheet `sheetName` from the current workbook.

*   `sheetName`: The name of the Excel sheet containing the script.
*   **[extraParams]**: Default values for local variables.

## Passing Input Parameters

The [extra parameters](../RVL/Params.md#extra-parameters) (**[extraParams]**) used in these calls provide initial values for **local** variables defined in the destination script.

For example, the following call:

=== "Screenshot"
    ![Extra Params Call](./img/RVL_DoPlay_ExtraParams.png)
=== "Transcript"
    Sheet name: RVL
    
    | Flow | Type   | Object | Action      | ParamName    | ParamType | ParamValue      |
    | ---- | ------ | ------ | ----------- | ------------ | --------- | --------------- |
    |      |        |        |             |              |           |                 |
    |      | Action | RVL    | DoPlaySheet | sheetName    | string    | SheetWithParams |
    |      | Param  |        |             | User         | string    | ExtUser         |
    |      | Param  |        |             | Password     | string    | ExtPassword     |
    |      | Param  |        |             | OtherVarName | string    | somevalue       |
    |      |        |        |             |              |           |                 |
    

passes `User=ExtUser`, `Password=ExtPassword`, and `OtherVarName=somevalue` to the destination script. The destination script can then use these values as follows:

=== "Screenshot"
    ![Extra Param Values](./img/RVL_DoPlay_ExtraParams_Values.png)
=== "Transcript"
    Sheet name: SheetWithParams
    
    | Flow | Type     | Object | Action  | ParamName | ParamType | ParamValue     |
    | ---- | -------- | ------ | ------- | --------- | --------- | -------------- |
    |      | Variable |        |         | User      | string    | DefUser        |
    |      | Variable |        |         | Password  | string    | DefPassword    |
    |      |          |        |         |           |           |                |
    |      | Action   | Tester | Message | message   | string    | Logging In as: |
    |      | Param    |        |         | message   | variable  | User           |
    |      | Param    |        |         | message   | string    | /              |
    |      | Param    |        |         | message   | variable  | Password       |

In this case, the **local** variable `User` is assigned the value `ExtUser` from the calling script. However, if you play this sheet directly using `Play Sheet`, the variable will be assigned its default value of `DefUser`.

This mechanism makes sheets more versatile, allowing them to be executed standalone or called from another script with parameters.