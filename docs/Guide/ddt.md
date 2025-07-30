# Data-Driven Testing

Many test automation scenarios require performing the same steps with different data. For example, you might need to log into an application with various user credentials, or enter several lines of a sales order into a table. This approach is known as data-driven testing. In this article, you will learn how to accomplish this in Rapise Visual Language (RVL) and JavaScript modes. You will also learn how to define data within a test and in an external spreadsheet.

## DDT in RVL

Let's begin with [RVL mode](visual_language.md). With RVL, you can delegate low-level, complex automation tasks to a development team and focus on testing scenarios and the data used to fill forms and tables.

## Embedded Data

First, define the data schema. In the Flow column of the RVL spreadsheet, choose Map.

<img src="/Guide/img/ddt_data_map.png" width="190" />

Then, press ++tab++ on the keyboard, and Rapise will generate a template for the data table.

<img src="/Guide/img/ddt_data_map_template.png" width="579" />

Give this new map a name and define its columns and an initial set of rows with values.

<img src="/Guide/img/ddt_data_map_values.png" width="453" />

In our example, the map is named `Data` and has three columns: `FirstName`, `LastName`, and `Company`. It also includes two rows with data values.

Now, in our test, we can simply use the map and refer to its columns by name.

<img src="/Guide/img/ddt_data_map_message.png" width="845" />

Data becomes one of the parameter types.

<img src="/Guide/img/ddt_data_map_type.png" width="153" />

And when Data is selected as a parameter type, the column names are available in the drop-down list.

<img src="/Guide/img/ddt_data_map_columns.png" width="309" />

Our RVL now looks like this.

<img src="/Guide/img/ddt_data_map_rvl.png" width="885" />

Executing the test produces the report. The test simply prints the first line of the data table.

<img src="/Guide/img/ddt_data_map_report.png" width="742" />

The data table we just created is an object in the Rapise object repository and has actions. With these actions, one can manipulate the active row and column index and read arbitrary data from the table.

<img src="/Guide/img/ddt_data_map_object.png" width="526" />

For a detailed description of actions that can be performed on data tables, refer to the [Map Object](../Libraries/Map.md) reference.

Let's advance to the next row in our table before printing values.

<img src="/Guide/img/ddt_data_map_sequential.png" width="862" />

After execution, the report displays data from the second row.

<img src="/Guide/img/ddt_data_map_report2.png" width="620" />

## Excel Data

Now, we are ready to place data into an external spreadsheet. Let's create one. In the `Files` view, right-click the `Scripts` folder and choose `Create > Spreadsheet...`

<img src="/Guide/img/ddt_spreadsheet.png" width="360" />

We will proceed with the default options.

<img src="/Guide/img/ddt_spreadsheet_create.png" width="603" />

Rapise has a built-in spreadsheet editor, so you do not need Excel to be installed on the machine.

<img src="/Guide/img/ddt_spreadsheet_editor.png" width="492" />

Let's bind to this spreadsheet in RVL. Insert a line below the `Data` map we created in the previous section. In the `Flow` column, choose `Map` and then set the map type to `Range`.

<img src="/Guide/img/ddt_spreadsheet_range.png" width="430" />

Give the map the same name, `Data`, and ensure that it references `Data.xlsx`, which we just created.

<img src="/Guide/img/ddt_spreadsheet_binding.png" width="862" />

When the test is run, data is now sourced from `Data.xlsx`. Notice that in `Data.xlsx`, we named the columns in the same way as in the previous section.

<img src="/Guide/img/ddt_spreadsheet_report.png" width="632" />

If we perform a [loop](../RVL/Loops.md) with the Data map, Rapise will iterate through all lines during execution.

<img src="/Guide/img/ddt_spreadsheet_loop.png" width="870" />

<img src="/Guide/img/ddt_spreadsheet_report2.png" width="623" />

## DDT in JavaScript

Data can also be read from a spreadsheet in JavaScript mode. A global `Spreadsheet` object is available in every test. Here is an example of `Spreadsheet` API usage.

```javascript
Spreadsheet.DoAttach('Calc.xls', 'Calc Data');
while(Spreadsheet.DoSequential())
{
    EnterNumber(Spreadsheet.GetCell("Item1"));
    Operation(Spreadsheet.GetCell("Operation"));
    EnterNumber(Spreadsheet.GetCell("Item2"));
    
    SeS('ResultButton').DoAction();
    
    Tester.Assert( '' + Spreadsheet.GetCell("Item1") + 
                   Spreadsheet.GetCell("Operation") + 
                   Spreadsheet.GetCell("Item2") + '=' +
                   Spreadsheet.GetCell("Result"),
                   CheckResult(Spreadsheet.GetCell("Result")));
}
```

A description of all `Spreadsheet` actions and properties is available [here](../Libraries/Spreadsheet.md).

Open the `UsingSpreadsheet` sample test from the start page to see a working example (scroll down the list of samples).

<img src="/Guide/img/ddt_sampletest.png" width="1177" />

## See Also

- [Data-Driven Testing (webinar)](https://youtu.be/gh8pop9LIb0?t=222)
- How To: Easily Attach an RVL Script to an External Spreadsheet in Rapise ([watch video](https://youtu.be/iuWCXmzZsow))
- [KB432](https://www.inflectra.com/Support/KnowledgeBase/KB432.aspx) Writing data to an Excel spreadsheet
- [KB27](https://www.inflectra.com/support/knowledgebase/kb27.aspx) Using Rapise to extract test data from an Excel sheet 
- [Blog: ](https://www.inflectra.com/Ideas/Entry/rapise--data-driven-testing-using-the-spreadsheet--288.aspx) Data-Driven Testing using the `Spreadsheet` object (JavaScript)
- [Data-driven testing tutorial (JavaScript)](data_driven_testing.md)
- [Parameters and Configurations](./Frameworks/parameters.md)