# Do Absolute Analog Recording

Let's once again use our trusty, over-simplified **TwoDialogs** sample application to learn how to use absolute analog recording and discover its value and associated dangers.

## Run the TwoDialogs sample AUT

By default, this will be located at:

    C:\Users\Public\Documents\Rapise\Samples\TwoDialogs\TwoDialogs.exe

## Create New Test

Start Rapise and create a new test and call it **TwoDialogsAnalogAbsolute**.

## Start Recording

Press the `Record` button in the Rapise toolbar.

## Select an Application to Record

When the **Select an Application to Record** dialog is displayed, choose the **TwoDialogs.exe** application and ignore the library list, as we will not be using any library for analog recording. Press the `Select` button.

## The Recording Activity Dialog

The Recording Activity Dialog will be displayed with an empty grid.

This recording session is going to be a little different from previous sessions. Previously, we could interrupt our object-related recording or learning with other activities without affecting the recording, because Rapise only recorded activity related to the target application. However, in analog recording, Rapise monitors the mouse and keyboard for the entire system—for all applications. This means that if you answer an email in the middle of analog recording or log in to a secure system, all steps, including mouse movements, keystrokes, etc., will be recorded. Note, however, that Rapise does not record screen contents.

## Bring the Application To Front

If the TwoDialogs UI has been occluded, bring it back to the front so you don't have to search for it when you start recording.

## Start Analog Recording

When you're ready to record the session, press ++ctrl+4++ in the Recording Activity dialog. You will need to click the `Advanced` button to display the `Analog` button.

![raforanalogabsolute](./img/do_absolute_analog_recording1.png)

> **Note:** Pressing the Analog button in the Recording Activity dialog starts a relative analog recording session. Use the ++ctrl+4++ key sequence to start the absolute analog recording session.

Rapise will begin recording all mouse and keyboard activity until you stop the recording.

> **Note also** that the prompt in the notification/status area of the Recording Activity dialog is different from the prompt for relative analog. It tells you that _Your mouse and keyboard activity is now being recorded._

The Recording Activity dialog now indicates that analog recording is in progress and allows you to stop the recording.

![ananlogrecodingstopdialog](./img/do_absolute_analog_recording2.png)

## Do Analog Recording

Go to the TwoDialogs AUT and click anywhere in the application's window to start the analog recording.

> Click the mouse in the "Please enter your name" text box.
>
> Type a name in the text box.
>
> Press the `TAB` key or click the left mouse button to advance the input focus to the second text box.
>
> Type another name.
>
> Move the mouse to the OK button and click it.

## Stop Analog Recording

When you have recorded sufficient activity, switch to the Analog Recording dialog and press the `Close` button or press ++ctrl+break++.

> **Note:** If you use the `Close` button in the Analog Recording dialog, the mouse movement to the Analog Recording dialog and the mouse click on the `Close` button will be recorded as part of the analog recording output. This might not be a desirable outcome during playback because the Analog Recording dialog will not be present, and the mouse click will be played back in a potentially random place on the screen. For this reason, ++ctrl+break++ is the preferred option to terminate analog recording.

> **Note:** The grid will have no entries until you end the analog recording by pressing the `Close` button in the Analog Recording dialog. When you do, an entry will be added to the grid.

![analogrecordingrelativecomplete](./img/do_absolute_analog_recording3.png)

## Optional Steps

*   You can now record additional analog sessions.
*   You can record normal object activity before and/or after the analog recording.

## Stop Recording

When you have finished recording, press the `Finish` button or press ++ctrl+3++. Notice that an Analog entry is added to the grid.

The Rapise screen will now be restored, and focus will be placed in the Rapise editor pane, with the `TwoDialogsAnalogAbsolute.js` script displayed. You should see code similar to the following:

```javascript
//Plays recorded events from "Analog\\Analog0003.arf" file
SeS('Simulated').DoAnalogPlay("Analog\\\\Analog0003.arf");
```

## Playback

Press the `Play` button on the Rapise toolbar to play back the recording. Be sure not to interfere with the mouse or keyboard while the recording is playing back.

> **Note:** You will see all mouse and keyboard activity reproduced as the analog recording plays back. The recording will start from the point where you left-clicked the mouse to begin the recording and will end when you click the `Close` button in the Analog Recording dialog, or at the last action before you pressed ++ctrl+break++.

When the analog play back is complete, use the mouse to move the TwoDialogs AUT to a different location on the screen. Play the recording again and watch the operation unfold. The most important thing to realize is that absolute analog recording will play back the recording exactly where the AUT was positioned on the screen when you made the recording, regardless of its current position. Absolute analog recording records mouse and keyboard activity relative to the top-left corner of the system screen. Try this for yourself, but be sure to minimize all other applications before starting.

## See Also

- [How-Tos](howtos.md)