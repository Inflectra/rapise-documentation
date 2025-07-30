# Automated Reporting

## Purpose

Each time you play back a test, Rapise **automatically generates a report** detailing the test steps, the data values used, and the outcome of each step.

## Usage

Execute your test using the instructions [here](playback.md). When the test is complete, a report file (ending in **.trp**) will open in the [Content View](content_view.md). It will look like this:

![report.zoom70](./img/automated_reporting1.png)

The first row (with a white background) is used for [Report Filtering](report_filtering.md). The rows below that each represent a test step. The rows with green text represent success; the rows with red text represent failure. You can reposition the columns by dragging and dropping the column names.

## The Columns

- **#**: Displays icons.
- **Name**: The test name.
- **Start**: The time the test step began executing.
- **Type**: Can be one of the following values: Test, Assert, or Message.
- **Comment**: Assertions and messages have associated comments, which are displayed here.
- **Status**: Indicates whether the step passed, failed, or was merely informational.

See also [assertions](assertions.md) for more information about possible types of report comparisons.

## Spira Column Mapping

Whenever a test is executed using the [RapiseLauncher](spiratest_integration.md#using-rapiselauncher), its results are uploaded to [SpiraTest](spiratest_integration.md). The set of columns displayed by the [Test Run Details](https://spiradoc.inflectra.com/Spira-User-Manual/Test-Run-Management/#test-run-steps) view differs from the Rapise Report Viewer, so the following mapping is applied:

![Spira Column Mapping](./img/automated_reporting_spiracolumnmapping.png)

There is always a source `.trp` file attached to the test run; you may also find it in the test run's **Attachments** tab:

![TestRun Attachments](./img/automated_reporting_spiratrattachments.png)

So you may download it and open it using Rapise to see the full-featured automated test report.

### Custom Spira Column Mapping

You may have more fine-grained control over SpiraTest column display by applying the `tags` parameter to the [Tester.Assert](../Libraries/Tester.md#assert) function.

```javascript
	Tester.Assert(
		"Assertion Message",
		true,
		"Comment goes to ActualResult",
		{"expectedResult":"expected", "sampleData":"sampleData"}
    );
```
In this case, the [ReportViewer](report_viewer.md) shows two additional columns—**ExpectedResult** and **SampleData**—and uses them to fill corresponding columns in the Spira test report.

> Note: Assertion message, ActualResult, or SampleData may contain a reference to the Manual Test Step in the format `[TS:X]`, where `X` is the number representing the Test Step ID. This is useful when you are migrating manual test cases to automated scripts and want to maintain traceability to manual test steps in the report.

## Report Formats

When a test is run, the report will be stored in the following formats:

1. `.trp` - The default Rapise test report format. Contains all information, status, and images. Rapise displays it using its built-in [Report Viewer](report_viewer.md).
2. `.tap` - Pure text, **Test Anything Protocol**-formatted output. Usually saved as `last.tap`. It is the simplest way for integrating tests into external or custom execution pipelines.
3. `index.html` and `imageNNN.png` - Flow output. It is saved in the `<test folder>\Reports\<Date_Time>\` folder:
     ![Flow Index](./img/automated_reporting_flowindexhtml.png)

## Export Report

Reports can be exported as `.xls`, `.pdf`, `.xps`, or `.html` using the [Report](menu_and_toolbars.md#report) pop-up menu.

### Export as HTML Dialog

**HTML** export supports a number of templates. Therefore, if you select `Report/Export as HTML`, you will then need to specify the export format using the following dialog:

![Export To Html Dialog](./img/automated_reporting_exporthtml.png)

**Report File** – The source `.trp` file to be used for export.

**Report Type** – Choose one of the following export templates:

* Full Execution Report (images embedded in HTML) - A full report, combined into a single file.
* Full Execution Report (images saved as separate files) - The same as the previous option, but all images are saved alongside the main `.html` file.
* High-level report (only test status) - A short report containing only test-level status.

**Destination HTML** – The path to the target `.html` file.

### Exporting Report With JavaScript

This type of export can also be performed from **JavaScript** code.

```javascript
    var ldr = new ActiveXObject("Rapise.LogLoader");
    ldr.LoadTrp("Reports\\ReportAssertions_2020-11-04_15-20.trp");
    ldr.ExportAsHtml("C:\\Program Files (x86)\\Inflectra\\Rapise\\Extensions\\TrpExporter\\FullReportImgTpl.tt", "FullReport.html");
```

If you want to perform post-processing of the report for a specific test case, you can combine this code with the [SeSOnTestReportReady](understanding_the_script.md#sesontestreportready) event. This event allows you to execute custom code when the test report for a given test case is ready.

## Column Grouping

The Report Viewer enables grouping rows by column values. Just drag the column header to this section:

![report, drag a column here](./img/automated_reporting2.png)

This section allows you to group and order rows by the values in the chosen column. The result of dragging the **Status** column over looks like this:

![report, status dragged.zoom70](./img/automated_reporting3.png)

You can expand each item to see the corresponding report rows:

![report, status dragged, expanded.zoom70](./img/automated_reporting4.png)

Drag the **Status** icon back to undo the grouping:

![report, status dragged back.zoom70](./img/automated_reporting5.png)

## TODO Rows

Whenever a **Name** column value starts with `TODO`, the viewer automatically performs the following actions:

* If a report row's **Type** is **Info**, it is highlighted in yellow, and the TODO counter is incremented:

    ![TODO](./img/automated_reporting_todo.png)

* If a report row's **Type** is **Assert**, it remains green or red, but the TODO counter is still incremented.

If you hover over the last execution status in the Rapise main window, the tooltip will then contain the total number of TODO items found in the report (i.e., the TODO counter):

![TODO Counter](./img/automated_reporting_todo_counter.png)

## See Also

- [Report Filtering](report_filtering.md)
- The report output file is specified in the [Settings Dialog](settings_dialog.md) under **Settings** > **ReportPath**.