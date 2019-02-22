# Extracting Test Data From an Excel Spreadsheet

## Overview

Often you want to be able to parameterize your Rapise tests to have a common set of test functions that can use different combinations of test data. You can use a MS-Excel spreadsheet to store the test data and use Rapise to read out the matching values. This articles provides a sample for doing this.

## Recommended Solution

In this example we have a spreadsheet that contains some lookup data:

|**Test** |  **Test Data** |
|-------- | -------------- |
| Test1   | valuetest1     |
| Test2   | valuetest2     |
| Test3   | valuetest3     |
| Test4   | valuetest4     |
| Test5   | valuetest5     |

We want to dynamically query this Excel sheet and find the test data associated with a specific case. For example if we query for `Test2` we want to return back the test data `valuetest2`.

The function that will do this uses the built-in [Spreadsheet](/Libraries/Spreadsheet/) object:

```javascript
function FindValueFromFile(filename, valueToFind)
{
    //Open the spreadsheet
    var success = Spreadsheet.DoAttach(filename, 'Sheet1');
    Tester.Assert('Open Spreadsheet', success);
    //Now loop through and see if we can find that value
    var rowCount = Spreadsheet.GetRowCount();
    Spreadsheet.SetRange(2, rowCount + 1, 1, 2);
    //Loop through all the rows and find the match
    var data = '';
    while(Spreadsheet.DoSequential())
    {
        if (Spreadsheet.GetCell(0) == valueToFind)
        {
            data = Spreadsheet.GetCell(1);
        }
    }
    return data;
}
```