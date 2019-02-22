# Naming Conventions

## Purpose

The Rapise engine and API follow some simple naming conventions.

## Usage

You will find descriptions of the naming conventions below.  Note: italicized text represents placeholders.

- SeS*&lt;...&gt;* - public functions for user
- Do*&lt;Action&gt;* - action implementations
- \_*&lt;somevar&gt;* and \_*&lt;somename&gt;* - private functions and objects
- g\_*&lt;varname&gt;* - system global variable.

## Examples

Here are some examples to clarify the above conventions:

```javascript
SeS("object") // gets the object named "object"
DoClick()     // public action function to click on something
_mydata       // private variable called mydata
g_publicdata  // global variable called publicdata
```
