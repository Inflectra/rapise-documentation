# Verify Object Properties Dialog

## Screenshot

![verify object properties dialog](./img/verify_object_properties1.png)

## Purpose

Use the **Verify Object Properties** dialog during [recording](recording.md) to add [checkpoints](checkpoints.md).

## How to Open

1. First, open the [Recording Activity Dialog](recording_activity_dialog.md).
2. Position the mouse over an object and press `Ctrl+1`, or
3. Press the `Verify` button and then click the target object with the mouse cursor.

## Create a Checkpoint

Your checkpoint will be associated with a particular object.  That object's properties will be listed in the **Verify Object Properties** dialog.  Check those properties that you wish to verify during [playback](playback.md).  Enter expected values for the selected properties in the **Value** column. 

> Note: The **Bitmap** and **BWBitmap** properties are images of the object.

![verify object property, height](./img/verify_object_properties2.png)

Press the `OK` button.  The **Verify Object Properties** dialog will close, and the [Recording Activity](recording_activity_dialog.md) dialog will contain a new **Verify** action:

![verify object properties recording activity](./img/verify_object_properties3.png)

The generated script will have a corresponding [assert statement](assertions.md):
![verify object properties, code](./img/verify_object_properties4.png)

Or, in JavaScript mode:

```javascript
   Tester.Assert("Verify that: InnerText=Log In", SeS('Log_In1').GetInnerText() == "Log In" );
```

## See Also

* [Recording](recording.md)
* [Assert Statements](assertions.md)
