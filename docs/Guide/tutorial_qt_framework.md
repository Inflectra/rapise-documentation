# Tutorial: Qt Framework (RVL)

Rapise includes support for testing applications written using the Qt Framework and QWidget controls.

To ensure that Rapise can access the UI elements and properties in the Qt application being tested, [MSAA (Microsoft Active Accessibility) support for your Qt application must be enabled](qt_framework_testing.md). This provides additional information on Qt UI elements to automation software like Rapise and can be accomplished by shipping and loading the "Accessible Plug-in" included in the Qt SDK (Software Development Kit) with the Qt application under test (see below).

This tutorial illustrates the ability of Rapise to test such Qt applications using a sample application that already has the MSAA support added.

This version of the tutorial uses the **Rapise Visual Language (RVL) scriptless** mode. If you're interested in the [JavaScript version](tutorial_qt_using_javascript.md), we have a separate tutorial.

## Testing the Sample Qt Application

On the [Start Page](start_page.md) of Rapise, click on the **Fetch Samples** button to make sure you have all of the latest samples available.

Then go to
    
    C:\Users\Public\Documents\Rapise\Samples\QtFramework
    
and double-click on the `QtWidgetApp.exe` file to start the sample application.

If you have everything configured correctly, you will see:

![Qt_sample_application](./img/tutorial_qt_framework1.png)

Once the application is started, open up Rapise and click menu `File > New Test`:

![create new test dialog](./img/tutorial_qt_framework2.png)

Enter the name **Qt Sample Test** as the name and choose **Basic: Windows Desktop Application** as the methodology. On the next page, choose **Rapise Visual Language (RVL)** as the choice of Scripting language:

![clip0138](./img/scripting_language_rvl.png)

Once the test is created, you will see:

![clip0139](./img/tutorial_qt_framework4.png)

Click on the **Record** button to display the ["Select an Application to Record"](select_an_application_to_record_dialog.md) dialog:

![sar_dialog_qt](./img/tutorial_qt_framework5.png)

Choose the **Sample QtWidget Application** from the list of running applications, change the library selection from Auto to **Qt Framework** and click `Select`.

Now in the sample application click on some of the Qt controls. Rapise will record the actions:

![rad_qt](./img/tutorial_qt_framework6.png)

When you click **Finish**, Rapise will prompt you to confirm where you want the recorded test steps to be placed:

![clip0140](./img/tutorial_qt_framework7.png)

Select the first row in the test grid and click **Insert Here**. You will see the recorded test script and learned objects in Rapise:

![clip0141](./img/tutorial_qt_framework8.png)

When you click **Play**, Rapise will play back your test script against the application:

![report_qt_sample](./img/tutorial_qt_framework9.png)

Sometimes you need to learn objects that are not visible or are obscured by other objects. To help with this, Rapise has the Object Spy tool.

The Spy tool lets you see the objects in the application in a hierarchy that you can learn.

When you are in the middle of recording, click on the **Spy** button and Rapise will display the [Accessible Spy](object_spy_accessible.md):

![sample_qt_spy](./img/tutorial_qt_framework10.png)

You can then use the [Accessible Spy](object_spy_accessible.md) to track and find objects in the application hierarchy. You can navigate to parent objects by right-clicking on them and choosing **Parent**. Once you have found the desired object, click on the **Learn Object** in the Spy toolbar and Rapise will add the object in the Spy to the list of learned objects that you can test against.

## See Also

- [Testing Qt Framework Applications](qt_framework_testing.md)
