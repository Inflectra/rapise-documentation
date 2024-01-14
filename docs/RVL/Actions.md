# Actions

In RVL Action always refers to an operation performed with object.

| Flow | Type   | Object   | Action  | ParamName | ParamType | ParamValue |
| ---- | ------ | -------- | ------- | --------- | --------- | ---------- |
|      | Action | MyButton | DoClick | x         | number    | 5          |
|      | Param  |          |         | y         | number    | 7          |

If row type is `Action` then there must be *Object* and *Action* cells defined.

**Note**: In this example we call an operation that would look in JavaScript as follows:

```javascript
SeS('MyButton').DoClick(5,7);
```

## Object Actions

`Object` is an ID of learned or Global object. Available objects may be found in the `Object Tree`:

=== "Screenshot"
    ![Object Tree](./img/Actions_ObjectTree.png)
=== "Transcript"
    1. **Calculator**
         * \_1 [1]
         * \_2 [2]
         * Add [Add]
         * Equals [Equals]
         * Result [Result]
    2. **Global**
         * Android [Android]
         * Database [Database]
         * File [File]
         * Global [Global]
         * iOS [iOS]
         * Navigator [Navigator]
         * NeoLoad [NeoLoad]
         * Ocr [Ocr]
         * Session [Session]
         * Spreadsheet [Spreadsheet]
         * Tester [Tester]
         * WebDriver [WebDriver]
    
    3. **User Functions**
    
    4. **User Variables**

*Object tree* contains list of available objects, including:

1. *Local objects* (1) learned recorded or learned from the application under test.

2. *Global object*. Always available set of objects containing most common utility functions and operations.

3. *Functions*. Represent global JavaScript functions. Each time you define a global function in .user.js file it becomes available for calling from RVL with special object ID Functions.

=== "Screenshot"
    ![Functions](./img/Actions_Functions.png)
=== "Transcript"
    | Flow | Type   | Object    | Action     | ParamName | ParamType | ParamValue |
    | ---- | ------ | --------- | ---------- | --------- | --------- | ---------- |
    |      | Action | Functions | MyFunction | str1      | string    | Some Test  |
    |      | Param  |           |            | b2        | boolean   | false      |
    |      | Param  |           |            | n3        | number    | 0          |

Each Object has its own set of actions. You may also see them in the object tree:

=== "Screenshot"
    ![Object Tree](./img/Actions_ObjectTree_Actions.png)
=== "Transcript"
    | Object | Action          |
    | ------ | --------------- |
    | [Add]  | DoAction        |
    |        | DoAnalogPlay    |
    |        | DoClick         |
    |        | DoDumpWidget    |
    |        | DoEnsureVisible |
    |        | DoButtonDown    |
    |        | DoButtonUp      |
    |        | DoDClick        |

An *Action* may have any number of parameters. See [Params](Params.md) for more info.

## Conditional Actions

Actions with a "?" in the `Flow` cell are considered conditional. This means that the **Action** is only executed if the object is found.

For example, if the `AcceptCookies` object is found, it is clicked on:

| Flow | Type   | Object        | Action  | ParamName | ParamType | ParamValue |
| ---- | ------ | ------------- | ------- | --------- | --------- | ---------- |
| ?    | Action | AcceptCookies | DoClick |           |           |            |

If the object is not found, the conditional action simply moves on without leaving any trace in the report.

## Editing Action

An Action may have both mandatory and optional params. When action is selected from the dropdown its params are displayed:

=== "Screenshot"
    ![DoLaunch parameters](./img/Actions_ActionParams.png)
=== "Transcript"
    
    | Flow | Type   | Object | Action   | ParamName      | ParamType | ParamValue |
    | ---- | ------ | ------ | -------- | -------------- | --------- | ---------- |
    |      | Action | Global | DoLaunch | cmdLine        | string    |            |
    |      |        |        |          | wrkDir         | string    |            |
    |      |        |        |          | attachIfExists | boolean   |            |
    |      |        |        |          |                |           |            |
    |      |        |        |          |                |           |            |
    |      |        |        |          |                |           |            |
    

By default RVL editor pre-fills only mandatory params for you when you select an action from the dropdown. In this example `DoLaunch` has one mandatory parameter `cmdLine` so here is what you get when you select it:

=== "Screenshot"
    ![DoLaunch parameters](./img/Actions_ActionParams_Mandatory.png)
=== "Transcript"
    | Flow | Type   | Object | Action   | ParamName | ParamType | ParamValue |
    | ---- | ------ | ------ | -------- | --------- | --------- | ---------- |
    |      | Action | Global | DoLaunch | cmdLine   | string    |            |
    

However the situation is differs if you hold the ++shift++ key while choosing an Action from the dropdown:

=== "Screenshot"
    ![DoLaunch parameters](./img/Actions_ActionParams_Optional.png)
=== "Transcript"
    | Flow | Type   | Object | Action   | ParamName      | ParamType | ParamValue |
    | ---- | ------ | ------ | -------- | -------------- | --------- | ---------- |
    |      | Action | Global | DoLaunch | cmdLine        | string    |            |
    |      | Param  |        |          | wrkDir         | string    | .          |
    |      | Param  |        |          | attachIfExists | boolean   | false      |
    |      | Param  |        |          | attachToWindow | string    | null       |

You may see that all parameters are applied in this case.

- ***Note:*** if you you already have have the same action and select it with ++shift++ key again, no optional params are applied. You need to clean the *Action* cell and re-select it with ++shift++ if you want to achieve the desired effect.

## Examples

Action without parameters
=== "Screenshot"
    ![Action without parameters](./img/Actions_ActionParams_NoParams.png)
=== "Transcript"
    | Flow | Type          | Object | Action  | ParamName | ParamType | ParamValue |
    | ---- | ------------- | ------ | ------- | --------- | --------- | ---------- |
    | #    | Click on Home |        |         |           |           |            |
    |      | Action        | A Home | DoClick |           |           |            |
    

Action with single parameter. In RVL each parameter takes one line with *Action*=`Param`. However for the 1st param there is an exception. It may occupy the same line as `Action` itself:
=== "Screenshot"
    ![Action with single parameter](./img/Actions_ActionParams_SingleParam.png)
=== "Transcript"
    | Flow | Type                               | Object    | Action    | ParamName | ParamType | ParamValue |
    | ---- | ---------------------------------- | --------- | --------- | --------- | --------- | ---------- |
    | #    | Set test 'librarian' in  Username_ |           |           |           |           |            |
    |      | Action                             | Username_ | DoSetText | txt       | string    | librarian  |
    

Action with many parameters:
=== "Screenshot"
    ![Many parameters](./img/Actions_ActionParams_Optional.png)
=== "Transcript"
    | Flow | Type   | Object | Action   | ParamName      | ParamType | ParamValue |
    | ---- | ------ | ------ | -------- | -------------- | --------- | ---------- |
    |      | Action | Global | DoLaunch | cmdLine        | string    |            |
    |      | Param  |        |          | wrkDir         | string    | .          |
    |      | Param  |        |          | attachIfExists | boolean   | false      |
    |      | Param  |        |          | attachToWindow | string    | null       |
