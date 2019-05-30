# Data-Driven Testing

Many test automation scenarios require performing same steps with different data. For example, login into application with different user credentials, or enter several lines of a sales order into a table. This is data-driven testing. From this article you will learn how to do this in Rapise Visual Language (RVL) and JavaScript modes.  You will also learn how to define data within a test and in an external spreadsheet.

## DDT in RVL

Let's start from [RVL mode](visual_language.md) first. With RVL you can delegate low-level complex automation tasks to a developer team and focus on testing scenarios and data used to fill forms and tables.

## Embedded Data

First, define data schema. In the Flow column of RVL spreadsheet choose Map.

<img src="/Guide/img/ddt_data_map.png" width="190" />

Then hit `TAB` on the keyboard and Rapise will generate a template for the data table.

<img src="/Guide/img/ddt_data_map_template.png" width="579" />

Give this new map a name and define columns and initial set of rows with values.

<img src="/Guide/img/ddt_data_map_values.png" width="453" />

In our example the map has name `Data` and it has three columns: `FirstName`, `LastName` and `Company`. It also has two rows with data values.

Now in our test we can just use the map and refer to it's columns by name.

<img src="/Guide/img/ddt_data_map_message.png" width="845" />

Data becomes one of parameter types.

<img src="/Guide/img/ddt_data_map_type.png" width="153" />

And when Data is selected as a parameter type then column names are available in the drop down.

<img src="/Guide/img/ddt_data_map_columns.png" width="309" />

Now our RVL looks like this.

<img src="/Guide/img/ddt_data_map_rvl.png" width="885" />

Execution of the test produces the report. The test simply prints first line of the data table.

<img src="/Guide/img/ddt_data_map_report.png" width="742" />

The data table we just created is an object in Rapise object repository and it has actions. With actions one can manipulate active row and column index and read arbitrary data from the table.

<img src="/Guide/img/ddt_data_map_object.png" width="526" />

For the detailed description of actions one can do upon data tables refer to [Map Object](/Libraries/Map/) reference.

Let's advance to next row in our table before printing values.

<img src="/Guide/img/ddt_data_map_sequential.png" width="862" />

After execution the report displays data from the second row.

<img src="/Guide/img/ddt_data_map_report2.png" width="620" />

## Excel Data

Now we are ready to put data into external spreadsheet. Let's create one. In the `Files` view right click `Scripts` folder and choose `Create > Spreadsheet...`

<img src="/Guide/img/ddt_spreadsheet.png" width="360" />

We'll go with default options.

<img src="/Guide/img/ddt_spreadsheet_create.png" width="603" />

Rapise has built-in spreadsheet editor and you do not need Excel to be installed on the machine.

<img src="/Guide/img/ddt_spreadsheet_editor.png" width="492" />

Let's bind to this spreadsheet in RVL. Insert a line below `Data` map we created in previous section. In the `Flow` column choose `Map` and then set map type to `Range`.

<img src="/Guide/img/ddt_spreadsheet_range.png" width="430" />

Give the map same name Data and make sure that it references Data.xlsx which we just created.

<img src="/Guide/img/ddt_spreadsheet_binding.png" width="862" />

Running the test. Now data is taken from the `Data.xlsx`. Notice that in `Data.xlsx` we named columns same way as in the previous section.

<img src="/Guide/img/ddt_spreadsheet_report.png" width="632" />

If we'll do a [loop](/RVL/Loops/) with Data map Rapise will iterate through all lines on execution.

<img src="/Guide/img/ddt_spreadsheet_loop.png" width="870" />

<img src="/Guide/img/ddt_spreadsheet_report2.png" width="623" />

## DDT in JavaScript

One can read data from a spreadsheet in JavaScript mode as well.  There is a global Spreadsheet object that is available in every test. Here is an example of Spreadhseet API usage.

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

Description of all Spreadsheet actions and properties is available [here](/Libraries/Spreadsheet/).

Open `UsingSpreadsheet` sample test from the start page to see a working example (scroll the list of samples down).

<img src="/Guide/img/ddt_sampletest.png" width="1121" />

## See Also

- Data-Driven Software Testing with Rapise ([watch video](https://youtu.be/eWcoN_xNXgQ))
- How To: Easily Attaching RVL Script to an External Spreadsheet in Rapise ([watch video](https://youtu.be/iuWCXmzZsow))
- [KB432](https://www.inflectra.com/Support/KnowledgeBase/KB432.aspx) Writing data to an Excel spreadsheet
- [KB27](https://www.inflectra.com/support/knowledgebase/kb27.aspx) Using Rapise to extract test data from an Excelsheet 
- [Blog: ](https://www.inflectra.com/Ideas/Entry/rapise--data-driven-testing-using-the-spreadsheet--288.aspx) Data Driven Testing using the Spreadsheet object (JavaScript)
- [Data-driven testing tutorial (JavaScript)](data_driven_testing.md)