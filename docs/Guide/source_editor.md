# Source Editor

![source editor](./img/source_editor1.png)

## Purpose

Displays and edits JavaScript files. The editor supports [Syntax Highlighting](syntax_highlighting.md), [Syntax Checking](syntax_checking.md), [Code Folding](code_folding.md), and [Code Completion](code_helper.md).

## How to Open

Use the [Test Files View](test_files_dialog.md) to open a JavaScript file. The JavaScript file opens in a **Source Editor** within the [Content View](content_view.md). The Main Menu's [Edit Popup](menu_and_toolbars.md) is also populated with text editor-specific options.

## Code Formatting

Beginning with Rapise 8.1, you can automatically format a JavaScript document:

1. Make the document active.
2. Use the `Edit > Format Document` menu option.

The formatting is performed via [js-beautify](https://beautifier.io/). The default configuration is based on the built-in file `C:\Program Files (x86)\Inflectra\Rapise\Engine\InstrumentJS\jsbeautify.config.json`.

You can apply custom formatting rules by saving a configuration to a file named `jsbeautify.config.json`. To override formatting rules, you can either store `jsbeautify.config.json` in the root folder of your testing framework and save it with your framework, or save it as `c:\Users\Public\Documents\Rapise\jsbeautify.config.json`. If saved in this location, it will apply to all formatted documents (unless a per-framework configuration exists).

## OnTextSaved.cmd

This feature enables post-processing of saved text files. This is achieved by defining an `OnTextSaved.cmd` file.

This file may be stored in one of two locations:

`c:\Users\Public\Documents\Rapise\OnTextSaved.cmd`

Or in the root of the current [test framework](../Intro/framework.md).

The `.cmd` file receives the following arguments:

* `%1` - file path (c:\Path\To\Test\File.js)
* `%2` - test working directory (c:\Path\To\Test)

Rapise also sets two environment variables:

* `%SHIFT_PRESSED%` is `yes` when the user presses **Shift** key
* `%CONTROL_PRESSED%` is `yes` when the user presses **Ctrl** key

You can find an example of a configured `OnTextSaved.cmd` file that beautifies a **JavaScript** file.

If the `.cmd` file modifies the text file, the Rapise editor immediately reloads it.

If the `.cmd` file produces any output, it is reflected in the Rapise [output view](output_view.md).

If the `.cmd` file produces any errors, these are reflected in the [warnings view](warning_view.md).

You can find a real-world example of the `OnTextSaved.cmd` file at https://github.com/Inflectra/rapise-powerpack/tree/master/JSBeautify.

```cmd
if "%SHIFT_PRESSED%"=="yes" (
    if "%~x1"==".js" (
        @call "%~dp0node_modules\.bin\js-beautify.cmd" -r --config "%~dp0jsbeautify.config.json" %1 >OnTextSaved.log 2>&1
    )
)
```

## OnSave.cmd

This file enables additional post-processing of saved text files. It follows the same rules as `OnTextSaved.cmd`. For example, you can use it to add new files to Git and commit changes on save:

```
git add * >>gitadd.log
git commit -a -m "Autosave" >>gitcommit.log
```