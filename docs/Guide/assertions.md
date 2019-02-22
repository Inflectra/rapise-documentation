# Assertions

## Purpose

An **assert statement** is a special Boolean condition that represents an assumption about program state at a particular point in test execution.  When an assert is encountered, the condition is evaluated.  A value of **False** indicates a program error.  In some languages, execution will halt if an assertion evaluates to **False**.  In Rapise, the result is logged to the report with failed status, and execution continues or not depending on `StopOnError` test option.

## Create a Checkpoint

To create a [checkpoint](checkpoints.md) using an assertion, you will have to manually alter the test script (another way is to use the [Verify Object Properties](verify_object_properties.md) dialog during [Recording](recording.md)):

1. **Select a location** in your script.
2. **Query for the application state**. For object properties use Get&lt;..&gt; methods.  For example:

        var xx = SeS("OkButton").GetX(); // X position of the object
        var image = SeS('Customer').GetBitmap(); // Image of the object

3. **Save the state (optional)**.  If you are creating an image checkpoint, you may want to save the image to a file.  If you are looking at text data, you could use a database, spreadsheet or text file.  The [**Spreadsheet**](/Libraries/Spreadsheet/) object gives you access to Excel spreadsheets.
4. **Compare**. Use the **ImageWrapper** class to compare images; use [Spreadsheet](/Libraries/Spreadsheet/) to read and compare spreadsheet data.
5. **Write an Assert Statement**. Make an appropriate call to one of **Tester.Assert** methods. Besides a Boolean condition, pass additional data to be placed in the [Report](writing_to_the_report.md). Read about [Tester.Assert syntax](/Libraries/Tester/#Assert) in the Libraries documentation part.

## Example: Simple Property Checkpoint

**JavaScript**

```javascript
Tester.AssertEqual("Verify that: ColumnCount=11", SeS('DataGridView').GetColumnCount(), 11);
```

**RVL**

![property rvl](./img/assertion_property_rvl.png)

**Failure Representation in Report**

![property fail](./img/assertion_property_fail.png)

## Example: Bitmap Checkpoint

**JavaScript**

```javascript
Tester.AssertImage("Compare Customer bitmap to Images\\Checkpoint0001.png",
	SeS('Customer').GetBitmap(), Global.GetFullPath("Images\\Checkpoint0001.png"));
```

**RVL**

![bitmap rvl](./img/assertion_bitmap_rvl.png)

**Failure Representation in Report**

![bitmap fail](./img/assertion_bitmap_fail.png)

## See Also

- [KB330](https://www.inflectra.com/Support/KnowledgeBase/KB330.aspx) Compare two SpreadSheets in Rapise
- The [test samples](sample_tests.md) include a **UsingImageCheckpoint** test
- [Verifying Object Properties](verify_object_properties.md)
- [Writing to the Report](writing_to_the_report.md)
