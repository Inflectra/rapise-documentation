# Global Variables

## Purpose

**Global variables** are variables that can be accessed anywhere in the script.

A global variable can be declared multiple times. For example, you may declare it in [RVL](../RVL/Variables.md#global-variables) and in *JavaScript* to share the same value.

Usually, global variables are defined in the [RVL Sheet](../RVL/Sheets.md), `Common.js`, or in one of the `User.js` files.

## Usage

### Using RVL

See [Global Variables in RVL](../RVL/Variables.md#global-variables).

### Using User.js

Any variable defined in `User.js` is considered a global variable.

```javascript
// Note: The variable should be declared outside the scope of any function to be global
var g_myGlobalVar = 5;

function SomeFunction()
{
}
...

```

### Using Common.js

You may want to have a common file with global variables reused across different tests. In this case, you need to include `Common.js` in the root `User.js` file (it is not recommended to include it from within the `Test()` function).

`Common.js`:
```javascript
// Global variable lazy declaration:
var g_myGlobalVar = 5;
```

### Using SeSOnTestInit
> **Note:** This is an older way of defining local variables. Since Rapise 3, a new way is preferred.

Define your global variables in [SeSOnTestInit()](understanding_the_script.md#sesontestinig). Because Rapise uses JavaScript, you can initialize global variables inside of functions. See the sample `SeSOnTestInit()` below.

```javascript
SeSOnTestInit(function () {
    global.number_of_visited_links = 0; // This variable becomes global
    var local_var = 5; // This variable is local for TestInit function
});
```

The `var` keyword creates variables with local scope. A variable initialized with `global.varname=...` automatically becomes a global variable.

## See Also

- See [Making Multiple Recordings](multiple_recordings.md) for details on the effect the script recorder will have on your test script.
- For details on the structure of the test script, see [Understanding the Script](understanding_the_script.md).