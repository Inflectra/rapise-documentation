# Including other Files

## Purpose

The **eval** keyword lets you use external functions and data structures in your test script; `eval` is a JavaScript reserved word.

## Usage

See the example below:

```javascript
eval(File.Include("myfunctions.js"));

function Test()
{
    // Use something from myfunction.js
}
```

You may add an include statement by dragging a `.js` file from the [Test Files](test_files_dialog.md) tree and dropping it into `.js` script.

It is recommended to put common functions and variables into [Common.js](Frameworks/frameworks.md#managing-common-data) file in your framework. However, if you have another .js file or files, you can add an include statement(s) directly into `Common.js`.

Additionally, you have the option to tag your external `.js` file as `shared`, which will automatically load it for each test run. This eliminates the need for an include statement.

![Tag as Shared](./img/including_other_files_tag_as_shared.png)

## See Also

- [Understanding the Script](understanding_the_script.md)
