# Understanding the Script

## Purpose

When you [create a new test](create_a_new_test.md) in Rapise, four files are created:

- **&lt;TestName&gt;.sstest** – the test project file (e.g., MyTest.sstest)
- **Main.js** – the main test script file, containing the test's entry point: the `Test` function.
- **Objects.js** – the file containing recorded objects.
- **User.js** – the file containing user-defined functions.
- **Main.rvl.xlsx** – an [RVL](rvl_editor.md) file.

where ***&lt;TestName&gt;*** is the name of your test.

You can have as many JavaScript files in your test directory as needed, but `Main.js` is the main test script (unless specified otherwise in the [Settings Dialog)](settings_dialog.md)). When you record, your interactions are written to `Main.js`, and objects are written to `Objects.js`. When you play back the test, `Main.js` is the script that will run. All Rapise test scripts must have the same basic structure.

## Usage

To modify an existing script or create a test script from scratch, you need to understand the test script structure.

## Basic Script

### Main.js

`Main.js` always contains two elements: the `Test(param)` entry point function and the `g_load_libraries` array, which holds the libraries required for this test case.

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

`User.js` is where you place functions and variables specific to a given test case.

```javascript
//Put your custom functions and variables in this file

```

### Object.js

`Object.js` is an object repository. Consider it a `JSON` definition assigned to the `saved_script_objects` variable.

```javascript
var saved_script_objects = 
{
  // array of objects used in this script.
};
```

### Main.rvl.xlsx

See [RVL](visual_language.md)

## Full script

The following callback functions are also recognized by Rapise and may be present in the test script. These functions can be placed in either `Main.js` or `User.js`.

### SeSOnTestInit

This callback function is called once before script playback begins. It should be used to initialize script-wide data (e.g., counters, open datasets).

```javascript
SeSOnTestInit(function(){
    Log("Initializing...");
});
```

`SeSOnTestInit` may be used multiple times. For example, it can be used in a [custom library](custom_libraries.md) to launch an application or clean up logs, and then used in the test to perform test-specific actions.

Please note: `SeSOnTestInit` should not be placed within the `Test()` function, as `Test()` is invoked after initialization has completed.

> Deprecated: You may also define a global function `TestInit()` that works the same way as a callback. However, if multiple such functions are defined, only one will be executed.

### SeSOnTestFinish

This function defines a callback called once after test execution. It should be used to release resources (e.g., datasets, spreadsheets). It can also serve as an integration point for external test management or bug tracking systems.

```javascript
SeSOnTestFinish(function(){
    Log("Finalizing...");
});
```

`SeSOnTestFinish` may be used multiple times. For example, it can be used in the custom library to close an application.

> Deprecated: You may also define a global function `TestFinish()` that works the same way as a callback. However, if multiple such functions are defined, only one will be executed.

### SeSOnTestPrepare

For advanced users, the `SeSOnTestPrepare` callback is called before both recording and playback. It can be used to properly initialize libraries.

Please note that `SeSOnTestPrepare` can be placed into a `shared` file. In this case, it will be executed during playback but not during recording (because the recorder does not load shared files). However, if you place it in your library, it will be executed whenever the library is loaded.

```javascript
SeSOnTestPrepare(function(){
    Log("Preparing...");
});
```

`SeSOnTestPrepare` may be used multiple times. For example, it can be used in a custom library to configure the environment for an application, and then in the test to perform test-specific actions.

Please note: `SeSOnTestPrepare` should not be placed within the `Test()` function, as `Test()` is invoked after initialization.

> Deprecated: You may also define a global function `TestPrepare()` that works the same way as a callback. However, if multiple such functions are defined, only one will be executed.

### SeSOnTestFailed

Can be used to perform actions upon a test failure event.

```javascript
SeSOnTestFailed(function(status){
    Log("Test Failed");
});
```

The **status** parameter will always be `0` (Failed) or `-1` (Undefined).

### SeSOnTestReportReady

This final callback is invoked when the report is closed and ready for post-processing.

```javascript
SeSOnTestReportReady(function(){
    // Do not use anything that writes to the report at this point!
    // Only low-level operations and functions (e.g., File, WScript.Shell) should be used.
    Log("Test done with status: "+g_testPassed);
    Log("Report file: "+g_reportFileName);
})
```

### SeSOnObjectNotFound

This callback is invoked when an object is not found on the screen.

```javascript
SeSOnObjectNotFound(function (/**string*/ objectId, /**object*/params){
    // When 'Back' is not on the screen, use 'Home' instead.
    if(objectId=='Back') return SeS('Home', params);
});
```

**objectId** – the object ID; **params** – additional locator parameters (if any).

### SeSOnLocatorValue

Allows modification of the default object locator value. This is useful, for example, when you need to dynamically change object locators.

```javascript
SeSOnLocatorValue(function(/**string*/ value, /**object*/objInfo) {
    // We use '{home_xpath}' as a placeholder to replace with a different value here.
    // The ID is accessible via objInfo.object_id
    if(value=='{home_xpath}') return "//a[@href='Default.aspx']";
    return value;
});
```

**value** – the value to replace; **objInfo** – all locator values.

### SeSOnReportMessage

Allows intercepting `Tester._Report` messages to either change or inspect them. `Tester._Report` is called internally by all `Tester.*Assert` calls (whether executed by the user or other internal parts of Rapise). For example, each `Obj.DoAction` writes a line to the report.

```javascript
SeSOnReportMessage(function(/**string*/ type, /**string*/ message, /**number*/ status, /**SeSReportLink|SeSReportText|SeSReportImage|Object[]*/ data, /**object*/ tags) {
// return true – skip the message from being reported
// return false or undefined – proceed with this message
});
```

## See Also

To specify a different test script, see the [Settings Dialog](settings_dialog.md). The test script is specified by **Settings** > **ScriptPath**.