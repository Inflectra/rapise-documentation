# Tutorial: Windows Testing (Using JavaScript)

This section outlines the usage of Rapise for testing a simple Windows Desktop [Application Under Test (AUT)](glossary.md). This version of the tutorial uses the JavaScript test editor option in Rapise. If you'd prefer to use the [Rapise Visual Language (RVL)](visual_language.md), please go to the main [Tutorial](twodialogs_sample.md) instead.

Please run the application now. You will find it in the samples directory where you installed Rapise. By default, that will be

`C:\\Users\\Public\\Documents\\Rapise\\Samples\\TwoDialogs\\TwoDialogs.exe`.

You will see the following:

![twodialogsempty](./img/twodialogs_sample1.png)

Please run the application a few times and observe its behaviour.  

- If you press the `OK` button with the first edit box empty, the application will complain and return you to the dialog box.
- If you put text in the first edit box but not the second, you will be shown a single line of text in a read-only edit box.
- If you enter text in the second edit box as well as the first, pressing OK will put two lines of summary information in the read-only edit box.

An adequate testing strategy for this over-simple application might be to:

1. Put data in the first text box but not the second, and verify that the summary information is correct.
2. Press the OK button with no data in either text box, and verify that a message box is displayed.
3. Verify that if the success "Thank You" message is displayed the edit box input fields are cleared (but not the summary information).

If at this point you do not understand what the application is supposed to do, or the application is not behaving as described here, please contact Support and clarify the details before proceeding.

Now, let's use Rapise to implement the first of these tests.

## Step 1. Run the Application

Run the TwoDialogs application and leave it in its default start state. Once you execute the TwoDialogs.exe application it will be displayed on the screen:

![twodialogsrecording](./img/twodialogs_sample2.png)

## Step 2. Start Rapise

Start Rapise and make the window a conveniently large size.  Click on the `File` menu (top left).  Choose the first option there, "New Test."

![createnewseleted](./img/twodialogs_sample4.png)

## Step 3. Create New Test

Navigate to the desired path using the `...` button on the **Create New Test** dialog. Enter the name of the new test script we're going to write (e.g. "TwoDialogsTest"). Click on the **Basic: Windows Desktop Application** methodology. This should always be used for testing Windows desktop applications:

![createnewdialog](./img/twodialogs_sample5.png)

The following dialog will be displayed:

![javascript](./img/tutorial_windows_using_javascript6.png)

Click on the **JavaScript (Advanced Users)** button. You will now see the following:

![newtestcreatedscreen](./img/tutorial_windows_using_javascript7.png)

## Step 4. Start Recording

Press the "**Record**" button on the toolbar.  It has an icon like this:

![recordlearnbutton](./img/twodialogs_sample8.png)

You will see an application selection dialog like the following.

![selectapptwodialogs](./img/twodialogs_sample9.png)

- Select the "Inflectra Rapise Two Dialogs Sample" entry.
- Leave the library selection as "Auto."
- Press the "Select" button at the bottom right.

## Step 5. Recording Guidelines

Rapise will pause while it starts the necessary background processes and hooks into the running AUT. Once those tasks are complete, you will see the following "Recording Activity" for "Inflectra Rapise Two Dialogs Sample" dialog:

![recordingactivityemptytwodialogs](./img/twodialogs_sample10.png)

The AUT will be brought to the foreground and Rapise will be minimized.

You will achieve best results in recording if you observe the following guidelines:

1. Work slowly while recording.  Perform one action and wait for the results to be recorded in the Recording Activity dialog as a new grid line-item before going to the next item.
2. Use the mouse to select controls and operate them.  Avoid using keyboard shortcuts and keyboard commands.

## Step 6. Record the Activity in the Application

- Click in the first edit box in the TwoDialogs application.
- Type a name in this first edit box.
- Place mouse over the Summary field with 'Thank you' text and press ++ctrl+1++

Rapise will open [Verify Object Properties](verify_object_properties.md) dialog.

![object properties](./img/twodialogs_verify.png)

Set checkbox on `Value` property and click `OK` button.

Watch the Recording activity dialog as you operate the AUT interface. As you press a button or fill a field, notice that the grid in the Recording activity has entries added to it.

![twodialogsrecording](./img/twodialogs_sample2.png)

As you take these actions, you will see the Recording Activity grid update accordingly:

![recordingactivitygridtwodialogs2](./img/twodialogs_sample11.png)

For a full explanation of the controls on this dialog, refer to the reference for [Recording Activity Dialog](recording_activity_dialog.md).

When you have finished recording the activity for the AUT, press the `Finish` button or ++ctrl+3++.

**Note**: Do not terminate the TwoDialogs application.

When you do this, the **Recording Activity** dialog will be closed and the AUT will lose focus.

Rapise will change the view to display the newly recorded script.  It will look something like the following:

![scriptcodetwodialogs](./img/tutorial_windows_using_javascript12.png)

Notice that the two steps of the test are automatically documented as Action commands in the test grid, and that they correspond precisely and in the same order as the way they appeared in the Recording Activity dialog during recording. In addition, the Verify checkpoint has been recorded as an Assert…Condition set of steps in the grid.

## Step 7: Execute The Test

Press the "Play" button on the ribbon or the toolbar.

![play icon](./img/twodialogs_sample14.png)

As the script runs, the Rapise window will be minimized to the taskbar and you will see the results of the script's activities on the TwoDialogs application window.

At the end of the script execution, the Rapise window will be restored and the view will be of the report for the test:

![runreporttwodialogs](./img/twodialogs_sample15.png)

## Step 8: A Refinement on the Launching of TwoDialogs.exe.

To date, we have operated on the assumption that the TwoDialogs sample program (application) is running.  If this situation remained, the test script would require that the AUT be running before the script started.  That would require that the person running the test remembered where it resided.  To overcome this, Rapise provides a way to have the script run the program (AUT) before beginning the test.

Rapise has an underlying scripting language based on JavaScript (see [Scripting](scripting.md)).  This help system covers available scripting objects in detail from a practical perspective.  For the moment, we want to simply take the shortest path to starting the application before attempting to run the test.

There are at least 3 ways of adding application launch code to your test.

**Way 1**: Drag The File from the Test Files view

First, switch to [Test Files](test_files_dialog.md) view. Right-click on `Test` folder and choose "Add File(s)..." menu item:

![twodialogsaddfilemenu](./img/tutorial_windows_using_javascript15.png)


And select the location of the TwoDialogs.exe. Normally, it is

```
C:\Program Files\Inflectra\Rapise\Samples\TwoDialogs\TwoDialogs.exe
```

![twodialogaddfilechooser](./img/tutorial_windows_using_javascript16.png)

Now you have the executable as a part of your test files set:

![twodialogsexeintestfiles](./img/tutorial_windows_using_javascript17.png)

If you wish to launch TwoDialogs.exe once then just double-click on it in the tree. If you wish it to be launched every time the test starts then simply drag it from the tree into the source code:

![twodialogsdragexe1](./img/tutorial_windows_using_javascript18.png)

The proper launch statement will be inserted:

![twodialogsdragexe2](./img/tutorial_windows_using_javascript19.png)

**Way 2**: Type the Code

The `Global` object contains methods that are available to all scripts. Select the `Main.js` file in the [Test Files](test_files_dialog.md) view of the Rapise main page. Double-click the file name to open it in the main (editing) window of Rapise.  You will see the generated script from the recording session from earlier steps in this sample.

Place the cursor in the main editing window and click on the first line after

```javascript
function Test()
{
```

Now type `Global`. As soon as you type the `.`, Rapise will give you a drop down list of all the available methods available in the `Global` object:

![globalmethodsdropdown](./img/tutorial_windows_using_javascript20.png)

Select the `DoLaunch(cmdLine, wrkD)` member and hit the `Enter` key.

Now your script contains the line:

```javascript
Global.DoLaunch('')
```

You need to correct the references to the command line:

```javascript
Global.DoLaunch('"C:\\Program Files\\Inflectra\\Rapise\\Samples\\TwoDialogs\\TwoDialogs.exe"');
```

**Way 3**: Drag the Action from the Objects Tree

You may drag the method template from the [Object Tree](object_tree.md) view. Expand the **Global** node and select the `DoLaunch` action in it. Drag the node into the proper position inside the script source:

![twodialogsdragdolaunch3](./img/tutorial_windows_using_javascript21.png)

Template call is inserted:

![twodialogsdragdolaunch2](./img/tutorial_windows_using_javascript22.png)

Now you need to correct the references to the command line:

```javascript
Global.DoLaunch('"C:\\Program Files\\Inflectra\\Rapise\\Samples\\TwoDialogs\\TwoDialogs.exe"');
```

## Advanced Testing using the Object Spy

Sometimes you need to learn objects that are not visible or are obscured by other objects. To help with this, Rapise has the Object Spy tool. The Spy tool lets you see the objects in the application in a hierarchy that you can learn.

When you are in the middle of recording, click on the **Spy** button and Rapise will display the [UIAutomation Spy](object_spy_uiautomation.md):

![twodialogs_spy1](./img/twodialogs_sample21.png)

Press ++ctrl+g++ on the keyboard to start tracking. Hover the mouse over one of the text boxes in the TwoDialogs application and press ++ctrl+g++ again to stop tracking:

![twodialogs_spy2](./img/twodialogs_sample22.png)

This shows you the object you selected, together with its various Windows attributes. If you want to see its place in the hierarchy of the application, right click on **Edit** in the top-left pane and choose **Parent**. That will display its parent objects:

![twodialogs_spy3](./img/twodialogs_sample23.png)

For example in this view you can see all text boxes, the labels and some of the Windows standard objects (the Window title bar, OK and Cancel buttons, etc.). Each of these can be expanded to show their children, and any of the objects can be Learned by clicking the **Learn Object** button in the top of the Spy. Once learned, you can use one of the options described above to write a test using it.
