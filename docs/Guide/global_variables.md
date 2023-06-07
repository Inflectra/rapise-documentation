# Global Variables

## Purpose

**Global variables** are variables that can be accessed anywhere in the script.

A global variable may be declared one or more times. For example, you may declare it in [RVL](../RVL/Variables.md#global-variables) and in *JavaScript* to share the same value.

Usually, global variables are defined in the [RVL Sheet](/RVL/Sheets), `Common.js`, or in one of the `User.js` files.

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

`Common.js`:
```javascript
// Global variable lazy declaration:
var g_myGlobalVar = 5;
```

### Using SeSOnTestInit
> **Note:** This is an older way of defining local variables. Since Rapise 3 new way is preferred.

Define your global variables in [SeSOnTestInit()](understanding_the_script.md#sesontestinig). Because Rapise uses JavaScript, you can initialize global variables inside of functions. See the sample `SeSOnTestInit()` below.

```javascript
SeSOnTestInit(function () {
    global.number_of_visited_links = 0; // This variable becomes global
    var local_var = 5; // This variable is local for TestInit function
});
```

The keyword **var** gives variables local scope. A variable initialized `global.varname=...` automatically becomes a global.

## See Also

- See [Making Multiple Recordings](multiple_recordings.md) for details on what effect the script recorder will have on your test script.
- For details on the structure of the test script, see [Understanding the Script](understanding_the_script.md).
