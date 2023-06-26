# Tutorial: Manual Testing

## Purpose

**Exploratory manual testing** is used for situations where you have a **new or changing application** and the user interface is still evolving. Traditional manual testing, where you create a test case ahead of time, define the prescriptive test steps and then assign it to the tester does not make sense in such cases. The solution is to perform **exploratory testing**, where you explore using the application at the same time as creating the test script. The created test script can then be published to your test management system (i.e. [SpiraTest](spiratest_integration.md)) for future regression testing.

Rapise can help **accelerate and optimize** exploratory manual testing. Rapise lets you walk through the application, capturing your interactions as you use it, recording screenshots of the objects and screens you interact with. From this, Rapise will create a fully formed test script ready to use.

## Step 1 - Creating a New Test

To start manual testing, simply create your test as normal using the [New Test](create_a_new_test.md) dialog box and choose **Manual** methodology: 

![Manual Methodology](./img/manual_testing_methodology.png)

Then once the test has been created, click on the `Tools > Manual Steps` menu item and then you will be taken to the [Manual Editor](manual_test_editor.md) with the [Manual Toolbar](menu_and_toolbars.md#manual-toolbar) visible.

The test step list will initially be empty:

![Manual Steps](./img/manual_testing_recording1.png)

## Step 2 - Recording Some Steps

Now you should open up the application you want to record from. In this example we shall be testing the built-in **Microsoft Paint** application. This is a good candidate for manual testing as a lot of the functionality is hard to test automatically since there is a simple drawing canvas rather than discrete buttons and data elements to test.

To make sure that we have screenshots recorded, whilst keeping the size of the screenshots reasonable, use the following recording options:

![manual_recording_2](./img/manual_testing_recording3.png)

Now click the **Record Manual** button (or menu `Test > Record Manual`) and choose MS-Paint from the list of running applications in [Select Application to Record](select_an_application_to_record_dialog.md) dialog and then click **'Select'** to start recording.

As you click through the application, the recording will display the list of steps and actions being captured:

![manual_recording_3](./img/manual_testing_recording4.png)

In this example, we created a new canvas, chose the Pencil tool, created a drawing using the pencil, entered some text and then made it bold:

![manual_recording_3b](./img/manual_testing_recording5.png)

When you click **Finish** to complete the recording, Rapise will display the list of populated manual test steps with the embedded screen captures:

![manual_recording_4](./img/manual_testing_recording6.png)

Notice that each recorded test step already has a `Description` and an `Expected Result` with a screenshot of what the user was doing. In addition, the `Sample Data` contains the equivalent of Rapise automation code for reference. This can be useful later if you will decide to automate this test.

## Step 3 - Editing the Steps

Typically you may want to **add some additional steps** (e.g. we added a line to describe the process of starting up MS Paint), **delete any duplicate/unnecessary steps** and **reword them** so that they make the most sense to the tester. In our example we used the [manual editing](manual_test_editor.md) screen to update the steps as follows:

![manual_recording_5](./img/manual_testing_recording7.png)

Click **Save** to make sure the updates are all saved locally. Now before you can [execute these tests](manual_testing_playback.md), you will need to Save them to [Spira](spiratest_integration.md) (our web-based test management system).

## Step 4 - Saving to Spira

Click on the option to **Save to Spira**, you will be asked to confirm the creation of the document folder in Spira that will hold the test files:

![manual_recording_6](./img/manual_testing_recording8.png)

Click on **Create** and then click **OK** in the `Synchronize Files` dialog. The manual test will be saved to Spira. You will see that this process adds the unique Spira test step IDs to each step. They are displayed using the format [TS:xxx]. This special token [TS:xxx] can be used in `Tester.Assert` commands to relate specific [verification points](checkpoints.md) with test steps during automated testing.

![manual_recording_7](./img/manual_testing_recording9.png)

Now that the test has been saved in Spira, you can click on the **View Manual Test in Spira** toolbar button to see how the test steps look inside Spira.

![view manual in spira](./img/manual_testing_recording_view_manual_in_spira.png)

![manual_recording_8](./img/manual_testing_recording10.png)

Now that we have finished the recording, we can now play back this manual test.

## Step 5 - Executing the Manual Test

Choose the Release from the list of those available in the project:

![manual\_playback\_1](./img/manual_testing_playback2.png){width="232px"}

Then click on the **Execute** icon to start manual test execution. That will bring up the [manual playback](manual_playback.md) screen:

![manual\_playback\_2](./img/manual_testing_playback3.png)

On this screen, we shall follow through the steps listed in the test case. This involves opening up MS Paint, creating a new canvas, adding some lines using the pencil and then adding some text using the text tool. As you perform these steps, click on the `Pass` button to indicate that each step has passed. You can also minimize the manual playback screen by clicking the `>|` button.

Once you get to Step 6, we shall pretend that MS Paint failed to display the text correctly. Enter in the Actual Result a message to that effect:

![manual\_playback\_3](./img/manual_testing_playback4.png)

Next we shall attach a screenshot of what actually happened and log a test failure.

## Step 6 - Capturing and Annotating a Screenshot

Click on the **Image icon** in the rich text editor associated with the **Actual Result** text box. That will bring up the [Drawing Tools](image_capture.md) screen that asks you to draw a rectangle to select a portion of the current screen to capture:

![manual\_playback\_4](./img/manual_testing_playback5.png)

If the MS Paint application is not in the foreground, just click ++esc++ on your keyboard to abort, rearrange your windows and then try again.
Once you have selected the rectangle, the drawing tools will display your selected image in the image editor:

![manual\_playback\_5](./img/manual_testing_playback6.png){width="540px"}

You can now use the annotation tools to add labels, text and other items to explain the issue that you found:

![manual\_playback\_6](./img/manual_testing_playback7.png){width="540px"}

In the example above, we added a red ellipse, arrow and text to mark the issue that was seen in MS-Paint. Once you are happy with your image, click **Accept** and the image will be included in the test Actual Result:

![manual\_playback\_7](./img/manual_testing_playback8.png)

Finally, **Fail** the Step 6 and click on the **Finish** button.

![Fail Step](./img/manual_testing_playback_fail_step.png){width="453px"}

The results will be posted to [Spira](spiratest_integration.md).

## Step 7 - Viewing the Results

Now to view the results in Spira, click on the [View > View Manual Test in Spira](spira_dashboard.md) menu. That will bring up the test case in Spira. Now click on the `Failed` hyperlink in Spira and the new test run will be displayed:

![manual\_playback\_10](./img/manual_testing_playback11.png){width="752px"}

If you scroll down, you can see the individual test steps that were executed, with the associated actual result (including the captured screenshot):

![manual\_playback\_11](./img/manual_testing_playback12.png)

Congratulations! You have now successfully executed a manual test using Rapise.

## See Also

- [Manual Testing](manual_testing.md)
- [Manual Recording](manual_testing_recording.md)
- [Manual Playback](manual_testing_playback.md)
