# Global Variables

## Purpose

**Global variables** are variables that can be accessed anywhere in the script. 

There are restrictions (specific to Rapise) as to where they may be placed in the test script. These restrictions do not apply to any additional script files you write and then call from your test script.

Global variable may declared one or more times. For example, you may declare it in [RVL](../RVL/Variables.md#global-variables) and in *JavaScript* to share the value.

You should not place variables in the `Main.js`. Use RVL Sheet, `User.js` or any other `Common` file for that.

## Usage

### Using RVL

See [Global Variables in RVL](../RVL/Variables.md#global-variables).

### Using User.js

Any variable defined in the `User.js` is assumed to be a global variable.

```javascript
// Note, the variable should be declared outside the scope of any function to be global
var g_myGlobalVar = 5;

function SomeFunction()
{
}
...

```

### Using Common.js

You may want to have a common file with global variable re-used across different tests. In this case you need to include the `Common.js` in the root of the `User.js` (it is not recommended to do include from within the `Test()` function).

`User.js`:
```
// Include Common.js
eval(File.Include(`%WORKDIR%/Common.js`))

...
```

The variable re-used across tests should be declared using the lazy initalization mode as follows

`Common.js`:
```javascript
// Global variable lazy declaration:
if(typeof(g_myGlobalVar)=='undefined') g_myGlobalVar = 5;

```

### Using TestInit
> **Note:** This is an older way of defining local variables. Since Rapise 3 new way is preferred.

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
