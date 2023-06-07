# Understanding the Script

## Purpose

When you [create a new test](create_a_new_test.md) in Rapise, four files are created:

- **&lt;TestName&gt;.sstest** - the test project file (e.g. MyTest.sstest)
- **Main.js** - the main test script file that contains the entry point of the test - `Test` function.
- **Objects.js** - the file that contains recorded objects.
- **User.js** - the file that contains user defined functions.
- **Main.rvl.xslx** - an [RVL](rvl_editor.md) file for RVL-enabled tests.

where ***&lt;TestName&gt;*** is the name of your Test.

You can have as many JavaScript files in your test directory as you like, but `Main.js` is the main test script (unless you specify otherwise in the [Settings Dialog)](settings_dialog.md). When you record, your interactions are written to `Main.js` and objects are written to `Objects.js` when you Playback the test, `Main.js` is the script that will run.  All Rapise test scripts must have the same basic structure.

## Usage

If you are going to modify the script, or create a test script from scratch, you will need to know the test script structure.

## Basic Script

### Main.js

`Main.js` always contains two things: `Test(param)` entry point function and `g_load_libraries` array containing the libraries needed for this test case.

```javascript
// Default entry point of the test
function Test()
{
    //script logic
}

// List of loaded libraries. It is automatically populated by the recorder.
g_load_libraries=["Web"]; // This script will load the Web library
```

### User.js

`User.js` Is a place where to put functions and variables specific to a given test case.

```javascript
//Put your custom functions and variables in this file

```

### Object.js

`Object.js` is an object repository. You may consider it as a `JSON` definition assigned to a `saved_script_objects` variable.

```javascript
var saved_script_objects = 
{
   //array of objects used in this script.
};
```

### Main.rvl.xlsx

See [RVL](/Guide/visual_language)

## Full script

The following callback functions are also recognized by Rapise and may be present in the test script. Put these functions either in `Main.js` or `User.js`.

### SeSOnTestInit

This callback function is called once before script playback. It should be used to initialize script-wide data (counters, open datasets, etc).

```javascript
SeSOnTestInit(function(){
    Log("Initializing...");
});
```

`SeSOnTestInit` may be used multiple times. For example, one may use it in the [custom library](custom_libraries.md) to launch an application or clean up the logs and then use it in the test to do test-specific actions.

Please, note: `SeSOnTestInit` should be not be put into the `Test` because `Test` is invoked after initialization.

> Deprecated: You may also define a global function `TestInit()` that works the same way as a callback. However if there are many such functions, only one will actually work.

### SeSOnTestFinish

This function defines a callback that is called once after test execution. It should be used to release resources (data sets, spreadsheets). It may also be used as an integration point with external test management or bug tracking systems.

```javascript
SeSOnTestFinish(function(){
    Log("Finalizing...");
});
```

`SeSOnTestFinish` may be used multiple times. For example, one may use it in the custom library to close an application.

> Deprecated: You may also define a global function `TestFinish()` that works the same way as a callback. However if there are many such functions, only one will actually work.

### SeSOnTestPrepare

For advanced users; `SeSOnTestPrepare` callback is called before recording and before playback. It may be used to properly initialize libraries.

Please, note that `SeSOnTestPrepare` may be put into a `shared` file. In this case it will be executed for playback but not for recording (because recorder does not load shared files). But if you put it into your library, it will be executed in all cases when library is loaded.

```javascript
SeSOnTestPrepare(function(){
    Log("Preparing...");
});
```

`SeSOnTestPrepare` may be used multiple times. For example, one may use it in the custom library to configure environment for the application and then use it in the test to do test-specific actions.

Please, note: `SeSOnTestPrepare` should not be put into the `Test()` because `Test()` is invoked after initialization.

> Deprecated:  You may also define a global function `TestPrepare()` that works the same way as a callback. However if there are many such functions, only one will actually work.

### SeSOnTestFailed

May be used to do something on test failure event.

```javascript
SeSOnTestFailed(function(status){
    Log("Test Failed");
});
```

**status** parameter will always be 0 (Failed) or -1 (Undefined).

### SeSOnTestReportReady

Final point, called when report is closed and is ready for post-processing.

```javascript
SeSOnTestReportReady(function(){
    // Don't use anything that writes to the report at this point!
    // Only low level operations and functions: File, WScript.Shell etc.
    Log("Test done with status: "+g_testPassed);
    Log("Report file: "+g_reportFileName);
})
```

### SeSOnObjectNotFound

Final point, called when object is not found on the screen.

```javascript
SeSOnObjectNotFound(function (/**string*/ objectId, /**object*/params){
    // When 'Back' is not on the screen, use 'Home' instead.
    if(objectId=='Back') return SeS('Home', params);
});
```

**objectId** - object id; **params** - additional locator parameters (if any).

### SeSOnLocatorValue

A way to modify default object locator value. Useful when you, for example.

```javascript
SeSOnLocatorValue(function(/**string*/ value, /**object*/objInfo){
    // We use '{home_xpath}' as a placeholder to replace it with different value here.
    // ID is accessible as objInfo.object_id
    if(value=='{home_xpath}') return "//a[@href='Default.aspx']";
    return value;
});
```

**value** - value to replace; **objInfo** - all locator values.

## See Also

To specify a different test script, see the [Settings Dialog](settings_dialog.md). The test script is specified by **Settings** > **ScriptPath**.
