# Extracting Test Data from an Excel Spreadsheet

## Overview

Often, you may want to parameterize your Rapise tests so that a common set of test functions can use different combinations of test data. You can use an MS Excel spreadsheet to store test data and use Rapise to read the corresponding values. This article provides a sample demonstrating this.

## Recommended Solution

### RVL

The simplest and most straightforward way to accomplish this is to use [RVL Maps](../RVL/Maps.md).

Also, if your goal is to store configuration data in an `.xlsx` file, we recommend simply using [Global.GetProperty](../Libraries/Global.md#getproperty).

### JavaScript

In this example, we have a spreadsheet that contains lookup data:

|**Test** |  **Test Data** |
|-------- | -------------- |
| Test1   | valuetest1     |
| Test2   | valuetest2     |
| Test3   | valuetest3     |
| Test4   | valuetest4     |
| Test5   | valuetest5     |

We want to dynamically query this Excel sheet to find the test data associated with a specific case. For example, if we query for `Test2`, we want to return the test data `valuetest2`.

The function that accomplishes this uses the built-in [Spreadsheet](/Libraries/Spreadsheet/) object:

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

## See Also

- [How-Tos](howtos.md)