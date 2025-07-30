# Defining Functions

## Purpose

The Rapise test script is in JavaScript. You can define any number of JavaScript functions to call from your test script.

## Usage

There are three ways to define additional functions: (1) in `Common.js`, (2) inside your test script, and (3) in an external file.

## Inside your Test Script

### In Common.js

The preferred way is to use a [testing framework](Frameworks/frameworks.md#managing-common-data) with a shared file. Its default name is `Common.js`, although you may use other files marked with a `shared` tag. These files are automatically loaded during playback and displayed in the shared node.

![Common.js](./img/defining_functions_commonjs.png)

### In User.js

It is recommended to put test-case-specific functions into the `User.js` file. This file is available for any test from its creation (in most cases, `User.js` is not needed, and `Common.js` is preferred).

![User.js from toolbar](./img/defining_functions_userjs_toolbar.png)

This file is automatically attached to every script. All variables and functions defined in it can be used in the test. User-defined functions are also available under the **Functions** node in the Object Tree:

![Functions](./img/defining_functions_user_function.png)

You can also open `User.js` from the [Files Tree](test_files_dialog.md):

![User.js files](./img/defining_functions_files_userjs.png)

## In an External File

You can define your functions in another file and include them. However, it is more common to include external files in `Common.js` or `User.js`:
>  
For example:

```javascript

External.js:

// Withdraw is defined inside the "Test" function
function Withdraw(amount)
{
    Log("Start Withdraw of:"+amount);
    // Withdraw logic is here
}

Main.js:

function Test()
{

    eval(File.Include('External.js'));

    Withdraw(12.34);
    // Deposit is defined in "UtilityFunctions.js"
    Deposit(56.78);
}
```

## See Also

- To learn more about what the Script Recorder will change in your test script, see [Multiple Recordings](multiple_recordings.md).