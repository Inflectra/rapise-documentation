# RVL Object

Some common tasks related to script execution, such as calling scripts, executing separate sheets, returning, exiting and bailing out is served by RVL.

## Actions

### DoPlayScript

`DoPlayScript(/**String*/scriptPath, /**String*/sheetName)`

Play RVL sheet `sheetName` from workbook `scriptPath` passing [extraParams] for variable values.

* `scriptPath` {`/**string*/`}: Path to script

* `sheetName` {`/**string*/`}: Excel sheet containing the script

* **[extraParams]**: default variable values see [RVL Extra Params](../RVL/RVL_DoPlay.md)

### DoPlaySheet

`DoPlaySheet(/**String*/sheetName)`

Play RVL sheet `sheetName` from current workbook passing [extraParams] for variable values.

* `sheetName` {`/**string*/`}: Excel sheet containing the script
* **[extraParams]**: default variable values see [RVL Extra Params](../RVL/RVL_DoPlay.md)

### DoPlayTest

`DoPlayTest(/**String*/sstestPath)`

Executes specified test passing additional arguments specified as `extraParams`. It is an analog of [Global.DoInvokeTest](Global.md#DoInvokeTest)
* `sstestPath` {`/**string*/`}: Path to test
* **[extraParams]**: Param values to be passed into test. May then be accessed via [Tester.GetParam](Tester.md#GetParam).

### DoPlayTestParallel

`DoPlayTestParallel(/**String*/sstestPath, /**objectId*/threadsMap)`

Executes specified test in parallel threads passing additional arguments specified by in `threadsMap` map. There are as many threads as there are rows in the map.,
* `sstestPath` {`/**string*/`}: Path to test
* `threadsMap` {`/**Map*/`}: The name of the map defining params. 1st column - Thread ID (alphanumeric, i.e. THREAD01), other columns - parameter variables, i.e. column name `g_browserLibrary`, values 'Selenium Chrome', 'Selenium Firefox' etc
* **[extraParams]**: Global variable values common for all threads.

![DoPlayTestParallel](../RVL/img/RVL_DoPlayParallel.png)

### Exit

`Exit(/**String*/ message, /**Boolean*/isError)`

Break execution at the specified line

* `message` {`/**string*/`}: Exit message

* `isError` {`/**boolean*/`}: Specify 'false' if you want just exit without exit message

### GetDropdownValue

Remap dropdown value from one list to another

`GetDropdownValue(/**string*/id, /**string*/idList, /**string*/valList, /**string*/xlsPath)`

* `id` {`string`}: Value to remap, the value should be from the column `idList`.
* `idList` {`string`}: Column name of the list where `id` belongs to.
* `valList` {`string`}: Column name of the list with values.
* `xlsPath` {`string`}: Optional path to `Dropdowns.xlsx`. If not specified then `%WORKDIR%\Dropdowns.xlsx` is used.

Example. Suppose we have the following definitions of dropdowns:

![States Dropdown](../RVL/img/RVL_GetDropdownValue_states.png)

Then the call `var stateCode = RVL.GetDropdownValue(stateName, "Functions.SetState.stateName", "stateCode")` would return state code for state name. I.e. if `stateName="Colorado"` then returned value is "CO".

See also [RVL Editor Param Dropdowns](../Guide/rvl_editor.md#param-dropdowns)

### Return

`Return(/**String*/ message)`

Return from specified line. This method should be called from within RVL

* `message` {`/**string*/`}: Return message

### SetLocatorOpts

`SetLocatorOpts(/**objectid*/objectid, {optname:optvalue,...})`

Set additional locator options for specified object. This is a way to modify various script parameters such as `locator`, `xpath`, `url` and thus find different objects.

* `objectid` {`/**objectid*/`}: Object ID

Example:

*Flow*|*Type* |*Object*    |*Action*    | *ParamName* |*ParamType* |*ParamValue*
:--  |:--     |:--         |:--         |:--          |:--         |:--
     | Action | RVL     | SetLocatorOpts    |  **objectid**| **objectid** | MyButton 
     | Param  |            |            |  **locator_param1**| **string**| **new value1**  
     | Param  |            |            |  **locator_param2**| **string**| **new value2**  

All params going after `objectid` are optional and depend on specified object's locator.

If you want to reset all values to default value call this method with just `objectid` and no additional parameters.

### FormatString

`FormatString(/**string*/fmtString, {optname:optvalue,...})`

Format string according to the specified template. Template may contain placeholder values enclosed in curly braces, i.e.: `My name is {name}`.

*Flow*|*Type* |*Object*    |*Action*    | *ParamName* |*ParamType* |*ParamValue*
:--  |:--     |:--         |:--         |:--          |:--         |:--
     | Action | RVL     | FormatString    |  **fmtString**| **string** | `{first} plus {second} equals to {result}`
     | Param  |            |            |  **first**| **string**| `one`  
     | Param  |            |            |  **second**| **string**| `five`  
     | Param  |            |            |  **result**| **string**| `6`

This Action should put string value `one plus five equals to 6` into the variable LastResult.

## Properties

### CurrentScriptPath

`GetCurrentScriptPath()`

Return path to currently executed .rvl.xls file

### CurrentScriptSheet

`GetCurrentScriptSheet()`

Return sheet name of the currently executed .rvl.xls file
