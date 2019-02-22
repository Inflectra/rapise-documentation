# Understanding the Script

## Purpose

When you [create a new test](create_a_new_test.md) in Rapise, four files are created:

- **&lt;TestName&gt;.sstest** - the test project file (e.g. MyTest.sstest)
- **Main.js** - the main test script file that contains the entry point of the test - `Test` function.
- **Objects.js** - the file that contains recorded objects.
- **User.js** - the file that contains user defined functions.

where ***&lt;TestName&gt;*** is the name of your Test.

You can have as many JavaScript files in your test directory as you like, but `Main.js` is the main test script (unless you specify otherwise in the [Settings Dialog)](settings_dialog.md). When you record, your interactions are written to `Main.js` and objects are written to `Objects.js` when you Playback the test, `Main.js` is the script that will run.  All Rapise test scripts must have the same basic structure.

## Usage

If you are going to modify the script, or create a test script from scratch, you will need to know the test script structure.

## Basic Script

**Main.js**

```javascript
// Default entry point of the test
function Test()
{
    //script logic
}

// List of loaded libraries. It is automatically populated by the recorder.
g_load_libraries=["Generic"]; // This script will load the Generic library
```

**User.js**

```javascript
//Put your custom functions and variables in this file

```

**Object.js**

```javascript
var saved_script_objects = 
{
   //array of objects used in this script.
};
```

## Full script

The following functions are also recognized by Rapise and may be present in the test script. Put these functions either in `Main.js` or `User.js`.

- **TestInit()** - This function is called once before script playback. It should be used to initialize script-wide data (counters, open datasets, etc).
- **TestFinish()** - This function is called once after test execution. It should be used to release resources (data sets, spreadsheets). TestFinish() is a good place to post-process Reports.  It may also be used as an integration point with external test management or bug tracking systems.
- **TestPrepare()** - For advanced users; TestPrepare() is called before recording and before playback. It may be used to properly initialize libraries.

## See Also

To specify a different test script, see the [Settings Dialog](settings_dialog.md). The test script is specified by **Settings** > **ScriptPath**.
