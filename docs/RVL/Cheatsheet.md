# RVL Quick Reference Guide

An RVL script is structured as a table with seven columns: Flow, Type, Object, Action, ParamName, ParamType, and ParamValue. Each RVL script comprises numerous RVL operations, which are stored within this table. An operation can be an Action, Comment, Variable, Loop, Map, an empty row, among others. Examples of these operations can be found in the subsequent section of this guide.

## Empty RVL

| Flow | Type                                              | Object | Action | ParamName | ParamType | ParamValue |
| ---- | ------------------------------------------------- | ------ | ------ | --------- | --------- | ---------- |
| #    | This is an empty RVL, containing only one comment |        |        |           |           |            |

JS Representation of this RVL:

```javascript
// This is an empty RVL, containing only one comment
```

## RVL Variable - local to current sheet

| Flow | Type     | Object | Action | ParamName | ParamType | ParamValue |
| ---- | -------- | ------ | ------ | --------- | --------- | ---------- |
|      | Variable |        |        | MyVar     | string    | TBD        |

JS Representation of this RVL:

```javascript
var MyVar = "TBD"
```

## RVL Global Variable - contains defaultValue. It is only used if variable were not yet initialized before

| Flow | Type     | Object | Action | ParamName    | ParamType | ParamValue |
| ---- | -------- | ------ | ------ | ------------ | --------- | ---------- |
|      | Variable |        | Global | MyVar        |           |            |
|      | Param    |        |        | defaultValue | string    | TBD        |

JS Representation of this RVL:

```javascript
if(typeof(MyVar)=='undefined') MyVar = "TBD"
```

## RVL Map with local data, contains 4 columns (Col,Col1, COl2, Col3)

| Flow | Type                    | Object | Action | ParamName | ParamType | ParamValue |
| ---- | ----------------------- | ------ | ------ | --------- | --------- | ---------- |
| Map  | Rows                    | MyMap1 |        |           |           |            |
|      | Col                     | Col1   | Col2   | Col3      |           |            |
|      | r1                      | r11    | r12    | r13       |           |            |
|      | r2                      | r21    | r22    | r23       |           |            |
| #    | Add more rows if needed |        |        |           |           |            |
| End  | of Map                  |        |        |           |           |            |

## RVL Map - read values from excel spreadsheet

| Flow | Type   | Object | Action | ParamName | ParamType | ParamValue          |
| ---- | ------ | ------ | ------ | --------- | --------- | ------------------- |
| Map  | Range  | MyMap1 |        | fileName  | string    | %WORKDIR%\Data.xlsx |
|      | Param  |        |        | sheetName | string    | Sheet1              |
| End  | of Map |        |        |           |           |                     |

JS Representation of this RVL:

```javascript
var MyMap1 = Spreadsheet.DoAttach("%WORKDIR%\\Data.xlsx","Sheet1")
```

## Assertion statement

| Flow | Type      | Object | Action           | ParamName | ParamType | ParamValue     |
| ---- | --------- | ------ | ---------------- | --------- | --------- | -------------- |
|      | Assert    |        |                  | message   | string    | Report message |
|      | Param     |        |                  | param1    | string    | Value 1        |
|      | Condition |        | param1 == param2 |           |           |                |
|      | Param     |        |                  | param2    | string    | Value 2        |

JS Representation of this RVL:

```javascript
Tester.Assert("Report message", "Value 1"=="Value 2")
```

## Action, Call DoLaunch for an object Global

| Flow | Type   | Object | Action   | ParamName | ParamType | ParamValue       |
| ---- | ------ | ------ | -------- | --------- | --------- | ---------------- |
|      | Action | Global | DoLaunch | cmdLine   | string    | c:\temp\calc.exe |
|      | Param  |        |          | wrkDir    | string    | c:\temp          |

JS Representation of this RVL:

```javascript
Global.DoLaunch("c:\\temp\\calc.exe", "c:\\temp")
```

## Conditional If statement

| Flow | Type       | Object | Action           | ParamName | ParamType | ParamValue |
| ---- | ---------- | ------ | ---------------- | --------- | --------- | ---------- |
| If   | Param      |        |                  | param1    | string    | TBD        |
|      | Condition  |        | param1 == param2 |           |           |            |
|      | Param      |        |                  | param2    | string    | TBD        |
| #    | If actions |        |                  |           |           |            |
|      |            |        |                  |           |           |            |
| End  | of If      |        |                  |           |           |            |

JS Representation of this RVL:

```javascript
if( "TBD" == "TBD" )
{
    // If actions
} // of If
```

## Conditional If-Else

| Flow | Type         | Object | Action           | ParamName | ParamType | ParamValue |
| ---- | ------------ | ------ | ---------------- | --------- | --------- | ---------- |
| If   | Param        |        |                  | param1    | string    | TBD        |
|      | Condition    |        | param1 == param2 |           |           |            |
|      | Param        |        |                  | param2    | string    | TBD        |
| #    | If actions   |        |                  |           |           |            |
|      |              |        |                  |           |           |            |
| Else |              |        |                  |           |           |            |
| #    | Else actions |        |                  |           |           |            |
|      |              |        |                  |           |           |            |
| End  | of Else      |        |                  |           |           |            |

JS Representation of this RVL:

```javascript
if( "TBD" == "TBD" )
{
    // If actions
} else {
    // Else actions
} // of Else
```

## Conditional if-elseif-else

| Flow   | Type           | Object | Action           | ParamName | ParamType | ParamValue |
| ------ | -------------- | ------ | ---------------- | --------- | --------- | ---------- |
| If     | Param          |        |                  | param1    | string    | TBD1       |
|        | Condition      |        | param1 == param2 |           |           |            |
|        | Param          |        |                  | param2    | string    | TBD2       |
| #      | If actions     |        |                  |           |           |            |
|        |                |        |                  |           |           |            |
| ElseIf | Param          |        |                  | param1    | string    | TBD3       |
|        | Condition      |        | param1 == param2 |           |           |            |
|        | Param          |        |                  | param2    | string    | TBD4       |
| #      | ElseIf actions |        |                  |           |           |            |
|        |                |        |                  |           |           |            |
| End    | of ElseIf      |        |                  |           |           |            |

JS Representation of this RVL:

```javascript
if( "TBD1" == "TBD2" )
{
    // If actions
} else if ( "TBD3" == "TBD4" ) {
    // ElseIf actions
} // of ElseIf
```

## Multiline comment

| Flow | Type                                 | Object | Action | ParamName | ParamType | ParamValue |
| ---- | ------------------------------------ | ------ | ------ | --------- | --------- | ---------- |
| /*   | This is a multi-line comment.        |        |        |           |           |            |
|      | It includes all lines from "/*"      |        |        |           |           |            |
|      | Up to final  "*/" in the flow column |        |        |           |           |            |
| */   |                                      |        |        |           |           |            |

JS Representation of this RVL:

```javascript
/*
This is a multi-line comment.
It includes all lines from "/*"
Up to final  "*\/" in the flow column
*/
```

## Loop through map

| Flow | Type      | Object | Action  | ParamName | ParamType | ParamValue |
| ---- | --------- | ------ | ------- | --------- | --------- | ---------- |
| Loop | Map       | MyMap1 |         |           |           |            |
| #    | Loop body |        |         |           |           |            |
|      | Action    | Tester | Message | message   | string    | Map cell:  |
|      | Param     |        |         | message   | MyMap1    | Col        |
| End  | of Loop   |        |         |           |           |            |

JS Representation of this RVL:

```javascript
while(MyMap1.DoSequential())
{
    Tester.Message("Map cell:", MyMap1.GetCell("Col"))
}
```

## Loop by variable i (similar to "for var i from 1 to 10" loop)

| Flow | Type      | Object | Action | ParamName | ParamType | ParamValue |
| ---- | --------- | ------ | ------ | --------- | --------- | ---------- |
| Loop | Variable  | i      |        | from      | number    | 1          |
|      | Param     |        |        | to        | number    | 10         |
| #    | Loop body |        |        |           |           |            |
|      |           |        |        |           |           |            |
| End  | of Loop   |        |        |           |           |            |

JS Representation of this RVL:

```javascript
for(var i=1;i<=10;i++)
{
    // Loop body
}
```

## Loop by condition (while loop)

| Flow | Type      | Object | Action           | ParamName | ParamType | ParamValue |
| ---- | --------- | ------ | ---------------- | --------- | --------- | ---------- |
| Loop | Param     |        |                  | param1    | number    | 1          |
|      | Condition |        | param1 == param2 |           |           |            |
|      | Param     |        |                  | param2    | number    | 2          |
| #    | Loop body |        |                  |           |           |            |
|      |           |        |                  |           |           |            |
| End  | of Loop   |        |                  |           |           |            |

JS Representation of this RVL:

```javascript
while(1==2)
{
    // Loop body
}
```
