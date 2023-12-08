# RVL Object

Some common tasks related to script execution, such as calling scripts, executing separate sheets, returning, exiting and bailing out is served by RVL.

## Actions

## DoPlayScript

```javascript
DoPlayScript(/**string*/ scriptPath, /**string*/ sheetName)
```

Play RVL sheet `sheetName` from workbook `scriptPath` passing `[extraParams]` for variable values.

* `scriptPath`: Path to script
* `sheetName`: Excel sheet containing the script
* **[extraParams]**: default variable values see [RVL Extra Params](../RVL/RVL_DoPlay.md)

## DoPlaySheet

```javascript
DoPlaySheet(/**string*/ sheetName)
```

Play RVL sheet `sheetName` from current workbook passing `[extraParams]` for variable values.

* `sheetName`: Excel sheet containing the script
* **[extraParams]**: default variable values see [RVL Extra Params](../RVL/RVL_DoPlay.md)

## DoPlayTest

```javascript
DoPlayTest(/**string*/ sstestPath)
```

Executes specified test with passing of additional arguments specified as `extraParams`. It is an analog of [Global.DoInvokeTest](Global.md#DoInvokeTest)

* `sstestPath`: Path to test
* **[extraParams]**: Param values to be passed into test. May then be accessed via [Tester.GetParam](Tester.md#GetParam).

To pass sheet name use extra param name `sheetName`. The test at `sstestPath` should have `Test` function defined like this

```javascript
function Test(params)
{
    RVL.DoPlayScript("Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
}
```

## DoPlayTestParallel

```javascript
DoPlayTestParallel(/**string*/ sstestPath, /**objectId*/ threadsMap)
```

Executes specified test in parallel threads passing additional arguments specified by in `threadsMap` map. There are as many threads as there are rows in the map.

* `sstestPath`: Path to test
* `threadsMap`: The name of the map defining params. 1st column - Thread ID (alphanumeric, i.e. THREAD01), other columns - parameter variables, i.e. column name `g_browserLibrary`, values 'Selenium Chrome', 'Selenium Firefox', etc.
* **[extraParams]**: Global variable values common for all threads.

![DoPlayTestParallel](../RVL/img/RVL_DoPlayParallel.png)

### See Also

* [Rapise with Selenium Grid - Parallel Test Execution](https://youtu.be/L8xMZureYtI) (video)
* [Rapise with Selenium Grid - Nested Parallel Test Execution](https://youtu.be/5W3KyVH83wc) (video)

## DoRunTest

```javascript
DoRunTest(/**string*/ sstestPath)
```

Executes specified test using [Global.DoRunTest](Global.md#DoRunTest) but passing any extra parameters as 'params' object to invoked test. Requires Rapise 8.1+.
			
* `sstestPath`: Path to test
* **[extraParams]**: default variable values see [RVL Extra Params](../RVL/RVL_DoPlay.md)        

## Exit

```javascript
Exit(/**string*/ message, /**boolean*/ isError)
```

Break execution at the specified line

* `message`: Exit message
* `isError`: Specify 'false' if you want just exit without exit message

## GetDropdownValue

```javascript
GetDropdownValue(/**string*/ id, /**string*/ idList,
                 /**string*/ valList, /**string*/ xlsPath)
```

Remap dropdown value from one list to another

* `id`: Value to remap, the value should be from the column `idList`.
* `idList`: Column name of the list where `id` belongs to.
* `valList`: Column name of the list with values.
* `xlsPath`: Optional path to `Dropdowns.xlsx`. If not specified then `%WORKDIR%\Dropdowns.xlsx` is used.

Example. Suppose we have the following definitions of dropdowns:

![States Dropdown](../RVL/img/RVL_GetDropdownValue_states.png)

Then the call 

```javascript
var stateCode = RVL.GetDropdownValue(stateName,
                                     "Functions.SetState.stateName",
                                     "stateCode")
```

would return state code for state name. I.e. if `stateName="Colorado"` then returned value is "CO".

See also [RVL Editor Param Dropdowns](../Guide/rvl_editor.md#param-dropdowns)

## Return

```javascript
Return(/**string*/ message)
```

Return from specified line. This method should be called from within RVL.

* `message`: Return message

## SetLocatorOpts

```javascript
SetLocatorOpts(/**objectid*/ objectid, {optname:optvalue,...})
```

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

## FormatString

```javascript
FormatString(/**string*/fmtString, {optname:optvalue,...})
```

Format string according to the specified template. Template may contain placeholder values enclosed in curly braces, i.e.: `My name is {name}`.

*Flow*|*Type* |*Object*    |*Action*    | *ParamName* |*ParamType* |*ParamValue*
:--  |:--     |:--         |:--         |:--          |:--         |:--
     | Action | RVL     | FormatString    |  **fmtString**| **string** | `{first} plus {second} equals to {result}`
     | Param  |            |            |  **first**| **string**| `one`  
     | Param  |            |            |  **second**| **string**| `five`  
     | Param  |            |            |  **result**| **string**| `6`

This Action should put string value `one plus five equals to 6` into the variable LastResult.

## Properties

## CurrentScriptPath

```javascript
GetCurrentScriptPath()
```

Return path to currently executed `.rvl.xls` file.

## CurrentScriptSheet

```javascript
GetCurrentScriptSheet()
```

Return sheet name of the currently executed `.rvl.xls` file.
