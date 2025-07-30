# Assertions

*Assert* is an essential operation for testing and validation. RVL provides a special structure for it to make it more readable.

An assertion has two parts: the first row is Assert, which contains the assertion message, followed by the [Condition](Conditions.md):

| Flow | Type      | Object | Action                | ParamName | ParamType | ParamValue |
| ---- | --------- | ------ | --------------------- | --------- | --------- | ---------- |
|      | Assert    |        |                       | message   | string    |            |
|      | Param     |        |                       | param1    |           |            |
|      | Condition |        | *condition statement* |           |           |            |
|      | Param     |        |                       | param2    |           |            |


The first line of an assertion is always the same, except for the *Param Value*.

In RVL, Action always refers to an operation performed on an object.

| Flow | Type      | Object | Action         | ParamName | ParamType | ParamValue                                   |
| ---- | --------- | ------ | -------------- | --------- | --------- | -------------------------------------------- |
|      | Assert    |        |                | message   | string    | Assertion text to be displayed in the report |
|      | Param     |        |                | param1    | string    | Text1                                        |
|      | Condition |        | param1!=param2 |           |           |                                              |
|      | Param     |        |                | param2    | string    | Text2                                        |


## Examples

Compare an object's *InnerText* property with an expected value:

=== "Screenshot"
    ![Assertion](./img/Assertion_GetInnerTextCompare.png)
=== "Transcript"
    | Flow | Type      | Object        | Action            | ParamName | ParamType | ParamValue                           |
    | ---- | --------- | ------------- | ----------------- | --------- | --------- | ------------------------------------ |
    |      | Assert    |               |                   | message   | string    | Verify that: InnerText=Sister Carrie |
    |      | Action    | Sister_Carrie | GetInnerText      |           |           |                                      |
    |      | Condition |               | output1 == param2 |           |           |                                      |
    |      | Param     |               |                   | param2    | string    | Sister Carrie                        |

Check if an object exists on the screen:

=== "Screenshot"
    ![Assertion object exists](./img/Assertion_ObjectExists.png)
=== "Transcript"
    
    | Flow | Type                                     | Object | Action        | ParamName | ParamType | ParamValue                               |
    | ---- | ---------------------------------------- | ------ | ------------- | --------- | --------- | ---------------------------------------- |
    | #    | Check that object 'Sister_Carrie' exists |        |               |           |           |                                          |
    |      | Assert                                   |        |               | message   | string    | Check that object 'Sister_Carrie' exists |
    |      | Action                                   | Global | DoWaitFor     | objectId  | objectid  | Sister_Carrie                            |
    |      | Condition                                |        | output1 IsSet |           |           |                                          |
    

Check if the variable `Age` has the value '74':

=== "Screenshot"
    ![Assertion check variable value](./img/Assertion_CheckVariableValue.png)
=== "Transcript"
    | Flow | Type                                        | Object | Action           | ParamName | ParamType | ParamValue        |
    | ---- | ------------------------------------------- | ------ | ---------------- | --------- | --------- | ----------------- |
    | #    | Check that variable 'Age' contains value 74 |        |                  |           |           |                   |
    |      | Assert                                      |        |                  | message   | string    | Check that Age=74 |
    |      | Param                                       |        |                  | param1    | variable  | Age               |
    |      | Condition                                   |        | param1 == param2 |           |           |                   |
    |      | Param                                       |        |                  | param2    | string    | 74                |