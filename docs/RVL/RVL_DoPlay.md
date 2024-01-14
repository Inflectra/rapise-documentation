# RVL.DoPlaySheet and RVL.DoPlayScript

```javascript
DoPlayScript(/**string*/ scriptPath, /**string*/ sheetName)
```

Play RVL sheet `sheetName` from workbook `scriptPath`.

* `scriptPath`: Path to script
* `sheetName`: Excel sheet containing the script
* **[extraParams]**: default variable values

```javascript
DoPlaySheet(/**string*/ sheetName)
```

Play RVL sheet `sheetName` from current workbook.

* `sheetName`: Excel sheet containing the script
* **[extraParams]**: default variable values

## Passing Input Parameters

[Extra parameters](../RVL/Params.md#extra-parameters) **[extraParams]** used in these calls are default values for **local** variables defined in the destination scripts.

So the following call:

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
    

passes `User=ExtUser`, `Password=ExtPassword`, `OtherVarName=somevalue` to the destination script. It may now be used as follows:

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

So **local** variable `User` is assigned to value `ExtUser` when called. However, if you play this sheet using `Play Sheet` then this variable would have value `DefUser`.

This helps to make sheets more universal: it should be possible to execute the sheet or any statement in a sheet alone as well as call it from outside and pass parameters.