# Writing to the Report

## Purpose

You can write to individual columns, create columns, and add data to the [report](automated_reporting.md).

## Usage

## Writing to and Creating a Column

Use **Tester.PushReportAttribute** or **Tester.SetReportAttribute** to set values in specific rows. **Tester.PopReportAttribute** reverses the effect of Tester.PushReportAttribute:

**PushReportAttribute**

```javascript
Tester.PushReportAttribute("columnName", "value");

// ...some test steps...       //the rows corresponding to these steps will have
                               //value in their columnName column

Tester.PushReportAttribute("columnName", "value2");

// ...some test steps...       //the rows corresponding to these steps will have
                               //value2 in their columnName column

Tester.PopReportAttribute("columnName"); //test steps proceeding this will be back to value
```

If columnName does not exist, it will be added to the report.

**SetReportAttribute**

```javascript
Tester.SetReportAttribute("columnName", "value");
```

If `columnName` does not exist, it will be added to the report.  Column `columnName` will be populated with `value` for rows created after this function call (unless specified otherwise).

## Adding Data

Data must be associated with an **Assert** row or a **Message** row.

```javascript
Tester.Assert("description", "expression", "data", "columnValuePairs");
Tester.Message("description", "data", "columnValuePairs");
```

- **description** is a string.
- **expression** is the boolean expression that the assertion tests.
- **data** is an array of data objects.  Each data element is written to its own row below the assert/message row with which it is associated.  Data can be text, a link, or an image.  The following is an array with text, link, and image data.
- **columnValuePairs** is an object with key/value pairs.  Column names are the keys.  If the specified column does not exist, it will be created. Example: `{requirement: "Req1.2.3", paragraph: "12.5"}`

Example of **data** array:

```javascript
[
    new SeSReportText("text"),
    new SeSReportLink("urlString", "linkText"),
    new SeSReportImage("ImageWrapperObject", "imageDescription")
]
```

## See Also

- [Automated Reporting](automated_reporting.md)
- The [test samples](sample_tests.md) include a sample about reporting (Reporting.sstest)
