# Global Variables

## Purpose

**Global variables** are variables that can be accessed anywhere in the script. There are restrictions (specific to Rapise) as to where they may be placed in the test script. These restrictions do not apply to any additional script files you write and then call from your test script.

## Usage

Define your global variables in **TestInit()**. Because Rapise uses JavaScript, you can initialize global variables inside of functions. See the sample `TestInit()` below.

```javascript
function TestInit()
{
    number_of_visited_links = 0; // This variable becomes global
    var local_var = 5; // This variable is local for TestInit function
}
```

The keyword **var** gives variables local scope. A variable initialized without the keyword var will have global scope.

The **Script Recorder** knows about the following functions: **Test(), TestInit(), TestPrepare()**, and **TestFinish()**. Do not declare global variables outside of one of the preceding four functions. The Script Recorder alters the script each time it is run, and may erase your changes.

## See Also

- See [Making Multiple Recordings](multiple_recordings.md) for details on what effect the script recorder will have on your test script.
- For details on the structure of the test script, see [Understanding the Script](understanding_the_script.md).
