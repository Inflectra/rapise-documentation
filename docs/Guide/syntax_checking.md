# Syntax Checking

## Purpose

An editor performs **Syntax Checking** and notifies the user of syntax errors in their program/script.

## Usage

Rapise performs **Syntax Checking** as you type into the [Source Editor](source_editor.md). Syntax error messages can be found in the [Warning View](warning_view.md).

For example, you begin writing a function:

![syntax checking](./img/syntax_checking1.png)

There is a typo shown here: `}` was used instead of `)`. Once the error is corrected, the warning view clears automatically:

![syntax checking 2](./img/syntax_checking2.png)

## Custom JS Validation and Formatting

To enforce your own rules for JavaScript validation and formatting, you can utilize linters or JS beautifiers. This can be achieved by applying the [OnTextSaved](source_editor.md#ontextsavedcmd) callback for your framework or for the entire PC.

For an example of a customizable JS beautifier and formatter, you can refer to the resource available [here](https://github.com/Inflectra/rapise-powerpack/tree/master/JSValidateAndBeautify). It provides a starting point that can be further customized and configured according to your specific needs.

## See Also

- [Source Editor](source_editor.md)
- [JS Beautifier and Formatter](https://github.com/Inflectra/rapise-powerpack/tree/master/JSValidateAndBeautify)