In RVL, variables are useful for storing intermediate results as well as accessing and passing global values to external *JavaScript* functions.

Variables may be used in [Params](Params.md) to [Conditions](Conditions.md) and in [Actions](Actions.md).

## Declaring and Assigning

This line declares a variable without any values. Its value may be assigned later:

*Flow*| *Type*  | *Object*   | *Action*   | *ParamName* | *ParamType* | *ParamValue*
:--   |:--     |:--          |:--         |:--          |:--          |:--
      |**Variable**|         |            |   `MyVar1`   |             |            

This line declares and assigns value *5* to a variable `MyVar2`:

*Flow*| *Type*  | *Object*   | *Action*   | *ParamName* | *ParamType* | *ParamValue*
:--   |:--     |:--          |:--         |:--          |:--          |:--
      |**Variable**|         |            |   `MyVar2`   |   *number*  | *5*           

If the variable is declared earlier, then assignment just changes its value. If the variable is not yet declared, then assignment is actually a declaration with assignment.

## Using
Any [Params](Params.md) value may accept a *variable*:

...|*Type*| ...| *ParamName* | *ParamType*|*ParamValue*
---|----  |----|:--          |:--         | :--
...|Param |    |  text       | *variable* | `MyVar1`           

Any [Params](Params.md) value may accept an *expression* using variables:

...|*Type*| ...| *ParamName* | *ParamType*| *ParamValue*
---|----  |----|:--          |:--         |:--
...|Param |    |  text       |*expression*| `MyVar2 + 4`           

Any [Action](Actions.md) may write its return value to a variable using the *Output* statement:

*Flow*| *Type*| *Object*   | *Action*   | *ParamName* | *ParamType* | *ParamValue*
:--  |:--     |:--         |:--         |:--          |:--         |:--
     | Action | Global     | DoTrim     |  str        | string     |   text to trim              
     | Output |            |            |             | variable   | `MyVar1`          

The Output value may then be used as a param value in actions, conditions, assertions and expressions.

## Local Variables
By default declared variables are assumed to be local. Local variables may be used only within the current RVL script and not visible from other RVL scripts or *JavaScript* code.

## Global Variables
You may have a *JavaScript* variable defined in the user *Functions* file (`*.user.js`), i.e.:

```javascript
// Piece from MyTest1.user.js
var globalVar = "Value";
```

Then in the RVL you may declare `globalVar` as global and access it (read or assign values). Declaring a variable as global is simple:

*Flow*| *Type*  | *Object*   | *Action*   | *ParamName* | *ParamType* | *ParamValue*
:--   |:--     |:--          |:--         |:--          |:--          |:--
      |*Variable*|           |**Global**  |`globalVar`  |             | 

Global variables are useful for exchanging and/or sharing data between different RVL scripts or between *RVL* and *JavaScript*.

## Variable Actions
One may use an expression to change the value of a variable. Here are several common variable operations that may be used to modify variable values:

1. *Increment* is an operation where numeric value is increased by `1` or any other specified value. The variable must have a numeric value. Otherwise the result is `NaN`.

    If no param to *Increment* is specified then `1` is assumed:

*Flow*| *Type*  | *Object*   | *Action*   | *ParamName* | *ParamType* | *ParamValue*
:--   |:--     |:--          |:--         |:--          |:--          |:--
      |*Variable*|           |**Increment**  |`numVar`  |     |  

Otherwise it is any *value*:

*Flow*| *Type*  | *Object*   | *Action*   | *ParamName* | *ParamType* | *ParamValue*
:--   |:--     |:--          |:--         |:--          |:--          |:--
      |*Variable*|           |**Increment**  |`numVar`  | `number`   | *value* 

2. *Decrement* is the same as increment but the value is subtracted from the variable.

3. *Append* adds the value as text to the specified variable. This operation is useful for constructing text messages:

*Flow*| *Type*  | *Object*   | *Action*   | *ParamName* | *ParamType* | *ParamValue*
:--   |:--     |:--          |:--         |:--          |:--          |:--
      |*Variable*|           |**Append**  |`textVar`  | `string`   | Final value: 
      |*Variable*|           |**Append**  |`textVar`  | `variable`   | `numVar` 

In this example if `textVar` was empty and `numVar` had value `5` then the final value of `textVar` is the following text:
    `Final value: 5`


## Examples

Variables may be declared as *Local* or *Global*. Declaration may or may not contain initial value

![Variable Declarations](img/Variables_Declaration.png)

Variables may accept output from the *Action*:

![Variable Output](img/Variables_Output.png)

Variables may be used as input to the *Action*:

![Variable AsParam](img/Variables_AsParam.png)


