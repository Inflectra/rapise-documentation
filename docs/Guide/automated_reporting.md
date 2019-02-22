# Automated Reporting

## Purpose

Each time you playback a test, Rapise **automatically generates a report** detailing the steps of the test, the data values used, and the outcome of each step.

## Usage

Execute your test using the instructions [here](playback.md).  When the test is complete a report file (ending in **.trp**) will open in the [Content View](content_view.md).  It will look like this:

![report.zoom70](./img/automated_reporting1.png)

The first row (with a white background) is used for [Report Filtering](report_filtering.md).  The rows below that each represent a step in the test.  The rows with green text represent success; the rows with red text represent failure. You can reposition the columns by dragging and dropping the column names.

## The Columns

- **#**: For displaying icons.
- **Name**: The test name.
- **Start**: The time the test step began executing.
- **Type**: Can be one of the following values: Test; Assert; Message.
- **Comment**: Assertions and messages have associated comments. They are displayed here.
- **Status**: Whether the step passed, failed, or was merely informational.

Drag a column header here...

![report, drag a column here](./img/automated_reporting2.png)

Use to order by the values in the chosen column.  The result of dragging the **Status** column over looks like this:

![report, status dragged.zoom70](./img/automated_reporting3.png)

You can expand each item to see the corresponding report rows:

![report, status dragged, expanded.zoom70](./img/automated_reporting4.png)

Drag the **Status** icon back to undo the sort:

![report, status dragged back.zoom70](./img/automated_reporting5.png)

## See Also

- [Report Filtering](report_filtering.md)
- The report output file is specified in the [Settings Dialog](settings_dialog.md) (**Settings** > **ReportPath**).

