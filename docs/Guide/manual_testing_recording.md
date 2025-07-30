# Manual Testing: Recording

## Purpose

As described in the main [Manual Testing](manual_testing.md) topic, sometimes it is not possible to automate the testing of a specific application; however, Rapise is also a powerful manual test generation system that can help you **create test cases 5x faster** than simply creating test cases manually, step by step.

This section describes how you can automatically record a set of steps by **simply using the application being tested**. Unlike an automated test, however, Rapise stores a human-readable description of the actions performed, along with a [screenshot](image_capture.md), rather than actual computer code that can be played back.

## Step 1 - Creating a New Test

To start manual testing, create your test as normal using the [New Test](create_a_new_test.md) dialog box. Once the test has been created, click `Tools > Manual Steps`. This will take you to the [Manual Editor](manual_test_editor.md) with the [Manual Test Toolbar](menu_and_toolbars.md#manual-toolbar) visible:

![Manual Toolbar](./img/manual_testing_recording1.png)

The test step list will initially be empty.

## Step 2 - Recording Some Steps

Now, open the application you want to record. In this example, we will be testing the built-in **Microsoft Paint** application. This is a good candidate for manual testing, as much of its functionality is difficult to test automatically due to its simple drawing canvas rather than discrete buttons and data elements.

To ensure that screenshots are recorded while keeping their size reasonable, use the following recording options:

![manual_recording_2](./img/manual_testing_recording3.png)

Now click the **Record Manual** button and choose MS-Paint from the list of running applications in the [Select Application to Record](select_an_application_to_record_dialog.md) dialog, then click **'Select'** to begin recording.

As you interact with the application, the recording displays the captured steps and actions:

![manual_recording_3](./img/manual_testing_recording4.png)

In this example, we created a new canvas, chose the Pencil tool, created a drawing using the pencil, entered some text, and then made it bold:

![manual_recording_3b](./img/manual_testing_recording5.png)

When you click **Finish** to complete the recording, Rapise displays the populated list of manual test steps with the embedded screen captures:

![manual_recording_4](./img/manual_testing_recording6.png)

Notice that each recorded test step already has a `Description` and an `Expected Result`, along with a screenshot of the user's actions. In addition, the `Sample Data` contains the equivalent of Rapise automation code for reference. This can be useful later if you decide to automate this test.

## Step 3 - Editing the Steps

Typically, you may want to **add additional steps** (e.g., we added a step to describe the process of starting MS Paint), **delete any duplicate or unnecessary steps**, and **reword them** to make the most sense to the tester. In our example, we used the [manual editing](manual_test_editor.md) screen to update the steps as follows:

![manual_recording_5](./img/manual_testing_recording7.png)

Click **Save** to ensure all updates are saved locally. Before you can [execute these tests](manual_testing_playback.md), you will need to save them to [Spira](spiratest_integration.md), our web-based test management system.

## Step 4 - Saving to Spira

Click the **Save to Spira** option. You will be asked to confirm the creation of the document folder in Spira where the test files will be stored:

![manual_recording_6](./img/manual_testing_recording8.png)

Click **Create**, then click **OK** in the `Synchronize Files` dialog. The manual test will be saved to Spira. This process adds unique Spira test step IDs to each step. They are displayed in the format [TS:xxx]. This special token, [TS:xxx], can be used in `Tester.Assert` commands to relate specific [verification points](checkpoints.md) with test steps during automated testing.

![manual_recording_7](./img/manual_testing_recording9.png)

Now that the test has been saved in Spira, you can click the **View Manual Test in Spira** toolbar button to view the test steps in Spira.

![view manual in spira](./img/manual_testing_recording_view_manual_in_spira.png)

![manual_recording_8](./img/manual_testing_recording10.png)

Now this test case is ready for [manual playback](manual_playback.md).

## See Also
* [Manual Testing](manual_testing.md)
* [Manual Playback](manual_testing_playback.md)