# Tutorial: Qt Framework (RVL)

Rapise includes support for testing applications written using the Qt Framework and QWidget controls.

To ensure Rapise can access UI elements and properties in your Qt application, [MSAA (Microsoft Active Accessibility) support must be enabled](qt_framework_testing.md). This provides additional information on Qt UI elements to automation software like Rapise and can be accomplished by distributing and loading the "Accessible Plug-in" (included in the Qt SDK) with the Qt application under test.

This tutorial illustrates Rapise's ability to test such Qt applications using a sample application that already includes MSAA support.

This tutorial uses the **Rapise Visual Language (RVL) (scriptless)** mode. If you're interested in the [JavaScript version](tutorial_qt_using_javascript.md), see our separate tutorial.

## Testing the Sample Qt Application

In Rapise, on the [Start Page](start_page.md), click the **Fetch Samples** button to ensure you have the latest samples available.

Then, navigate to:

    C:\Users\Public\Documents\Rapise\Samples\QtFramework

and double-click on the `QtWidgetApp.exe` file to start the sample application.

If you have everything configured correctly, you will see:

![Qt_sample_application](./img/tutorial_qt_framework1.png)

Once the application is started, open Rapise and click the `File > New Test` menu option:

![create new test dialog](./img/tutorial_qt_framework2.png)

Enter **Qt Sample Test** as the name, and choose **Basic: Windows Desktop Application** as the methodology. On the next page, choose **Rapise Visual Language (RVL)** as the scripting language:

![clip0138](./img/scripting_language_rvl.png)

Once the test is created, you will see:

![clip0139](./img/tutorial_qt_framework4.png)

Click the **Record** button to display the ["Select an Application to Record"](select_an_application_to_record_dialog.md) dialog:

![sar_dialog_qt](./img/tutorial_qt_framework5.png)

Choose the **Sample QtWidget Application** from the list of running applications, change the library selection from `Auto` to `Qt Framework`, and click `Select`.

Now, in the sample application, click on some of the Qt controls. Rapise will record the actions:

![rad_qt](./img/tutorial_qt_framework6.png)

When you click **Finish**, Rapise will prompt you to confirm where you want the recorded test steps to be placed:

![clip0140](./img/tutorial_qt_framework7.png)

Select the first row in the test grid and click **Insert Here**. You will see the recorded test script and learned objects in Rapise:

![clip0141](./img/tutorial_qt_framework8.png)

When you click **Play**, Rapise will play back your test script against the application:

![report_qt_sample](./img/tutorial_qt_framework9.png)

Sometimes you need to learn objects that are not visible or are obscured by other objects. To assist with this, Rapise provides the Object Spy tool.

The Spy tool allows you to view the objects in the application within a learnable hierarchy.

During recording, click the **Spy** button, and Rapise will display the [Accessible Spy](object_spy_accessible.md):

![sample_qt_spy](./img/tutorial_qt_framework10.png)

You can then use the [Accessible Spy](object_spy_accessible.md) to track and find objects in the application hierarchy. You can navigate to parent objects by right-clicking on them and choosing **Parent**. Once you have found the desired object, click **Learn Object** in the Spy toolbar, and Rapise will add the selected object to the list of learned objects for testing.

## See Also

- [Testing Qt Framework Applications](qt_framework_testing.md)