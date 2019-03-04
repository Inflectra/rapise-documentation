# Params

The last 3 columns in the RVL table are used for passing parameters:

...     | *ParamName* |*ParamType* |*ParamValue*
--------|:--          |:--         |:--
...     |  text       | string     | John Smith           
...     |  x          | number     | 5           
...     |  y          | number     | 7           
...     |  forceEvent | boolean    | true



* 5th column - *ParamName* - name of the parameter. This column's intention is readability and it does not affect execution. However it names input parameters and makes it easier to understand each provided input option.
* 6th column - *ParamType* - value type. This may be a basic scalar type (`number`, `string`, `boolean`, `object`) as well as one of the following additionals 'special' types:
* * `expression` - any valid JavaScript expression that may involve global variables and functions and local variables.
* * `variable` - the parameter value is read from a variable.
* * `objectid` - ID of one of the learned Objects.
* 7th column - *ParamValue* - a value that is acceptable for the specified *ParamType*. For `boolean` it is `true` or `false`. For `number` is is any floating point number (i.e. `3.14`). For `string`, any text without quotes or escape signs.


## Param Rows
In RVL each parameter takes one row:

...|*Type*| ...| *ParamName* | *ParamType*|*ParamValue*
---|----  |----|:--          |:--         |:--
...|Param |    |  text       | string     | John Smith           
...|Param |    |  x          | number     | 5           
...|Param |    |  y          | number     | 7           
...|Param |    |  forceEvent | boolean    | true

## Param Arrays
Some methods accept arrays of values as input values. For example `Tester.Message` may take its 1st `message` parameter as an array and prints them combined. Making an array is easy, several consequent parameters having the same name are combined into an array, i.e.:

*Flow*|*Type* |*Object*    |*Action*    | *ParamName* |*ParamType* |*ParamValue*
:--  |:--     |:--         |:--         |:--          |:--         |:--
     | Action | Tester     | Message    |  **message**| **string** | MyVar1 value: 
     | Param  |            |            |  **message**| **variable**| **MyVar1**           
     | Param  |            |            |  **message**| **string**| MyVar2 value:
     | Param  |            |            |  **message**| **variable**| **MyVar2**           

Should report a message like:

    MyVar1 value: 25 MyVar2 value: 33


## Mixed Rows
In some cases it is convenient to mix parameter cells with an *Action* or *Condition*. 

For example, the 1st parameter of an *Action* may share the `Action` row:

*Flow*|*Type* |*Object*    |*Action*    | *ParamName* |*ParamType* |*ParamValue*
:--  |:--     |:--         |:--         |:--          |:--         |:--
     | Action | MyButton   | DoClick    |  **x**      | **number** | **5**           
     | Param  |            |            |  y          | number     | 7           

And this is equivalent to putting it in the next row:

*Flow*|*Type* |*Object*    |*Action*    | *ParamName* |*ParamType* |*ParamValue*
:--  |:--     |:--         |:--         |:--          |:--         |:--
     | Action | MyButton   | DoClick    |             |            |            
     | Param  |            |            |  **x**      | **number** | **5**           
     | Param  |            |            |  y          | number     | 7           



Or `param2` of the [condition](Conditions.md) may be on the same row:

... |*Type*      |*Object*    |*Action*    | *ParamName* |*ParamType* |*ParamValue*
:-  |:--         |:--         |:--         |:--          |:--         |:--
    | Param      |            |            |  param1     | string     | Text1           
    | Condition  |            | param1!=param2  |  **param2**     | **string**     | **Text2**  

Which is equivalent to:

... |*Type*      |*Object*    |*Action*    | *ParamName* |*ParamType* |*ParamValue*
:-  |:--         |:--         |:--         |:--          |:--         |:--
    | Param      |            |            |  param1     | string     | Text1           
    | Condition  |            | param1!=param2  |             |            |            
    | Param      |            |            |  **param2**     | **string**     | **Text2**       



This allows saving space while keeping same readability.

## Map Params

If map is defined in the script it may be used directly as a parameter. *ParamType* should be set to Map Name and *ParamValue* is a column (or row) name:

![Map Param](img/Params_MapValue.png)