# Do Absolute Analog Recording

Let's once again use our trusty over-simplified **TwoDialogs** sample application to learn how to use absolute analog recording and use it to discover the value as well as the dangers associated with absolute analog recording.

## Run the TwoDialogs sample AUT

By default this will be located in the

    C:\Users\Public\Documents\Rapise\Samples\TwoDialogs\TwoDialogs.exe

location.

## Create New Test

Start Rapise and create a new test and call it **TwoDialogsAnalogAbsolute**.

## Start Recording

Press the `Record` button in the toolbar of Rapise.

## Select an Application to Record

When the **Select an Application to Record** dialog is displayed, choose the **TwoDialogs.exe** application and ignore the library list - we will not be using any library for analog recording.  Press the `Select` button.

## The Recording Activity Dialog

The Recording Activity Dialog will be displayed with an empty grid.

This recording session is going o be a little different from previous sessions.  Previously we could interrupt our object-related recording/learning with other activities and because Rapise was recording activity related only to the target application, our recording or object learning would be unaffected.  However, in analog recording, Rapise is monitoring the mouse and keyboard for the entire system - for all applications.  This means that if you answer an email in the middle of analog recording, or log in to a secure system, all the steps including mouse movement, keystrokes, etc., will all be recorded.  However, note also that screen contents are not recorded by Rapise.

## Bring the Application To Front

If the TwoDialogs UI has been occluded, bring it back to the front so you don't have to hunt for it when you start recording.

## Start Analog Recording

When you're ready to record the session, hit `Ctrl+4` on the Recording Activity dialog. You will need to click on the `Advanced` button to
display the `Analog` button.

![raforanalogabsolute](./img/do_absolute_analog_recording1.png)

> **Note:** Pressing the Analog button on the Recording Activity dialog starts a relative analog recording session.  Use the `Ctrl+4` key sequence to start the absolute analog recording session.

Rapise will begin recording all mouse and keyboard activity until you stop the recording.

> **Note** also that the prompt in the notification/status area of the Recording Activity dialog is different from that for relative analog. It tells you that _Your mouse and keyboard activity is now being recorded._

Recording Activity dialog now indicates that analog recording is in progress and allowing you to stop the recording.

![ananlogrecodingstopdialog](./img/do_absolute_analog_recording2.png)

## Do Analog Recording

Go to the TwoDialogs AUT and click anywhere in the application's window to start the analog recording.

> Click the mouse on the empty "Please enter your name" text box.
>
> Type a name in the text box.
>
> Hit the `TAB` key or click the left mouse button to advance the input position to the second text box.
>
> Type another name.
>
> Move the mouse to the OK button and press the mouse left button.

## Stop Analog Recording

When you have recorded enough, switch to the Analog Recording dialog box and press the close button or hit the keys `Ctrl+Break`.

> **Note:** If you use the `Close` button on the Analog Recording dialog, the movement of the mouse to the Analog Recording dialog, and the mouse-click on the `Close` button will be recorded as part of the analog recording output.  This might not be a desirable outcome at playback time because the Analog Recording dialog will not be present and the mouse click will be played in a potentially random place on the screen.  For this reason, `Ctrl+Break` is probably a better option to terminate analog recording.

> **Note:** The grid will have no entry added until you end the analog recording with the Close button in the Analog Recording dialog. When you do, it will add an entry to the grid.

![analogrecordingrelativecomplete](./img/do_absolute_analog_recording3.png)

## Optional Steps

- You can now record additional analog sessions, if you wish.
- You can record normal object activity before and/or after the analog recording. 

## Stop Recording
  
When you have finished all recording press the `Finish` button or hit `Ctrl+3`.  Notice that the Analog entry is added to the grid.

The Rapise screen will now be restored and will have placed focus in the editor pane of the Rapise with `TwoDialogsAnalogAbsolute.js` script displayed. You should see code something like the following:

```javascript
//Plays recorded events from "Analog\\Analog0003.arf" file
SeS('Simulated').DoAnalogPlay("Analog\\\\Analog0003.arf");
```

## Playback

Press the `Play` button on the Rapise toolbar to playback the recording you made. Be sure not to interfere with the mouse or keyboard
whilst the recording is playing back.

> **Note:** You will see all mouse and keyboard activity reproduced as the analog recording plays.  The recording will start from the point where you left-clicked the mouse to begin the recording and will end with clicking the close button in the Analog Recording dialog or at the last action before you pressed `Ctrl+Break`.

When the analog playback is complete, use the mouse to move the TwoDialogs AUT to a different location on the screen.  Play the recording again, and watch the operation unfold.  The most important thing to realize is that the absolute analog recording will playback the recording wherever the application is positioned on the screen wherever the AUT was positioned when you made the recording.  Absolute analog recording records relative to the top-left corner of the system screen. Try this for yourself, but be sure to minimize all applications before starting.
