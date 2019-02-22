# Multiple Recordings

## Purpose

Every time you record, the script recorder updates your test script.  Be cautious about what changes you make to the test script; some changes could be lost if the recorder is re-run (see **Usage**).

## Usage

The test script path can be found in the title of Rapise window. Unless you specify otherwise, the test script is named `Main.js`.

Note that the Script Recorder only has knowledge of four functions and two data structures:

1. function `Test()`
2. function `TestInit()`
3. function `TestFinish()`
4. function `TestPrepare()`
5. array `g_load_libraries`
6. map `saved_script_objects`

You can make changes to the body of any of the above functions, and you can alter the initialization of `g_load_libraries` and `saved_script_objects`.  All other changes are unsafe.

During Recording, the Script Recorder:

1. Appends newly recorded actions to the `Test()` function
2. Appends newly encountered objects to the `saved_script_objects` array
3. Updates `g_load_libraries` to reflect the library selections you made in the [Select an Application to Record... Dialog](select_an_application_to_record_dialog.md)
4. Ignores (and leaves intact) the definitions of `TestInit()`, `TestFinish()`,  and `TestPrepare()`

For example, suppose that you have the following code inside your script file:

```javascript
//External comment  // UNSAFE: will be removed by recorder

/*Another comment*/ // UNSAFE

var external_var;   // UNSAFE

function Test()
{
  //comment --SAFE
  var external_var; //SAFE: defines a local variable for function “Test”
  global_var=value; //SAFE: updates (or defines) a global variable

  //SAFE everything inside this function will be kept intact after recording

}
```

The parts of code marked **UNSAFE** will be deleted by the script recorder.

## See Also

- [Settings Dialog](settings_dialog.md)      
- [Select an Application to Record... Dialog](select_an_application_to_record_dialog.md)
- [Recording](recording.md)
