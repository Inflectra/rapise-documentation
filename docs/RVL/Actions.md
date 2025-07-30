# Actions

In RVL, an `Action` always refers to an operation performed on an object.

| Flow | Type   | Object   | Action  | ParamName | ParamType | ParamValue |
| ---- | ------ | -------- | ------- | --------- | --------- | ---------- |
|      | Action | MyButton | DoClick | x         | number    | 5          |
|      | Param  |          |         | y         | number    | 7          |

If the row type is `Action`, then the *Object* and *Action* cells must be defined.

**Note**: In this example, we call an operation that would look like the following in JavaScript:

```javascript
SeS('MyButton').DoClick(5,7);
```

## Object Actions

An `Object` is an ID of a learned or Global object. Available objects can be found in the `Object Tree`:

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

The *Object Tree* contains a list of available objects, including:

1. *Local objects* (1): Objects recorded or learned from the application under test.

2. *Global objects*: A set of always-available objects containing common utility functions and operations.

3. *Functions*: Global JavaScript functions. Each time you define a global function in a `.user.js` file, it becomes available to be called from RVL with the special object ID `Functions`.

=== "Screenshot"
    ![Functions](./img/Actions_Functions.png)
=== "Transcript"
    | Flow | Type   | Object    | Action     | ParamName | ParamType | ParamValue |
    | ---- | ------ | --------- | ---------- | --------- | --------- | ---------- |
    |      | Action | Functions | MyFunction | str1      | string    | Some Test  |
    |      | Param  |           |            | b2        | boolean   | false      |
    |      | Param  |           |            | n3        | number    | 0          |

Each object has its own set of actions. You can also see them in the object tree:

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

An *Action* can have any number of parameters. See [Params](Params.md) for more information.

## Conditional Actions

Actions with a "?" in the `Flow` cell are considered conditional. This means that the **Action** is only executed if the object is found.

For example, if the `AcceptCookies` object is found, it is clicked:

| Flow | Type   | Object        | Action  | ParamName | ParamType | ParamValue |
| ---- | ------ | ------------- | ------- | --------- | --------- | ---------- |
| ?    | Action | AcceptCookies | DoClick |           |           |            |

If the object is not found, the conditional action is skipped, leaving no trace in the report.

## Editing an Action

An Action can have both mandatory and optional parameters. When an action is selected from the dropdown menu, its parameters are displayed:

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
    

By default, the RVL editor pre-fills only the mandatory parameters for you when you select an action from the dropdown menu. In this example, `DoLaunch` has one mandatory parameter, `cmdLine`, so this is what you get when you select it:

=== "Screenshot"
    ![DoLaunch parameters](./img/Actions_ActionParams_Mandatory.png)
=== "Transcript"
    | Flow | Type   | Object | Action   | ParamName | ParamType | ParamValue |
    | ---- | ------ | ------ | -------- | --------- | --------- | ---------- |
    |      | Action | Global | DoLaunch | cmdLine   | string    |            |
    

However, the situation is different if you hold the ++shift++ key while choosing an action from the dropdown menu:

=== "Screenshot"
    ![DoLaunch parameters](./img/Actions_ActionParams_Optional.png)
=== "Transcript"
    | Flow | Type   | Object | Action   | ParamName      | ParamType | ParamValue |
    | ---- | ------ | ------ | -------- | -------------- | --------- | ---------- |
    |      | Action | Global | DoLaunch | cmdLine        | string    |            |
    |      | Param  |        |          | wrkDir         | string    | .          |
    |      | Param  |        |          | attachIfExists | boolean   | false      |
    |      | Param  |        |          | attachToWindow | string    | null       |

You can see that all parameters are applied in this case.

- ***Note:*** If you already have the same action and select it with the ++shift++ key again, no optional parameters are applied. You need to clear the *Action* cell and re-select it with ++shift++ to achieve the desired effect.

## Examples

Action without parameters
=== "Screenshot"
    ![Action without parameters](./img/Actions_ActionParams_NoParams.png)
=== "Transcript"
    | Flow | Type          | Object | Action  | ParamName | ParamType | ParamValue |
    | ---- | ------------- | ------ | ------- | --------- | --------- | ---------- |
    | #    | Click on Home |        |         |           |           |            |
    |      | Action        | A Home | DoClick |           |           |            |
    

Action with a single parameter. In RVL, the first parameter can occupy the same line as the `Action` itself. Any subsequent parameters must each take a new line with the `Type` set to `Param`:
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