# Mobile Testing using iOS

## Purpose

Rapise allows you to record and play automated tests on real iOS devices (iPad and iPhone) as well as to test applications using the iOS simulator that ships with Xcode. No jailbreaking needed! With Rapise, you can record on one device and play back on multiple.

## Prerequisites

This section assumes that you have already installed and configured all of the necessary components. For details on this, see the [Preparing Environment for iOS Mobile Testing](../Manuals/Preparing_for_iOS_Testing.md) section.

## Configure the Mobile Profile

To begin mobile testing, [create a new test](create_a_new_test.md) using the `File > Create New > New Test` option in Rapise. Make sure you choose the **Mobile** methodology option:

![new test mobile ios](./img/mobile_testing_ios_new_test_mobile_ios.png){width="633px"}

Once you enter the name for the new test (with the mobile methodology selected), you will be asked to choose the mobile profile. Rapise ships with several default profiles. For now, select the one closest to the device you want to test (we recommend the **iOS App Simulator** generic profile):

![mobile\_choose\_profile\_iphone](./img/mobile_testing_ios4.png){width="469px"}

When you click the `OK` button, Rapise will ask you to choose the Scripting Language:

![Scripting Language](./img/tutorial_mobile_testing8.png){width="482px"}

Choose the **Rapise Visual Language (RVL).** Rapise will then create a new mobile test with the **iOS App Simulator** profile selected.

![](./img/mobile_testing_ios_ios_simulator_empty_rvl.png){width="884px"}

Now you need to modify the profile so that it matches the type of device you are testing and points to the **Appium** server used to host the mobile devices. Click the `...` button in the top right corner of the Rapise window:

![open mobile profile button](./img/open_mobile_profile_button_ios.png)

![mobile\_settings\_dialog\_ios](./img/mobile_testing_ios5.png)
The example screenshot above is for an iPhone X simulator running iOS 11.4. For any iOS device (real or simulated), you will need to provide the following details:

-   **Uri** - this is the URL to your Appium server. We shall discuss this shortly.
-   **app** - this must be the path (on the Mac running Appium) to the application being tested on the device (e.g., `/Users/user.name/Library/Developer/Xcode/DerivedData/AUTiOS-gvdyymxgyzrfgqdfvfylapawjoyd/Build/Products/Debug-iphonesimulator/AUTiOS.app`)
-   **deviceName** - this must match the name of the device being connected.
-   **platformName** - this must be set to **iOS**.
-   **platformVersion** - this must be set to the iOS version running on the device.

In addition, for physical devices only, you need to specify:

-   **udid** - the unique device identifier of the connected physical device (leave blank for simulated devices).

Once you have entered the information and saved the profile, make sure that Appium is running on the Mac and then click the `Test URL` button to verify the connection to Appium:

![mobile_settings_dialog_ios_success](./img/mobile_testing_ios6.png){width="254px"}

Now you can start testing your iOS mobile application.

## Using the Mobile Spy

The Mobile Spy allows you to view an application running on the mobile device, take a snapshot of its screen, and then interactively inspect the objects within the application under test. This is a useful first step to make sure that Rapise recognizes the application and has access to the objects in its user interface.

If you do not see Mobile Spy button ![mobile spy button](./img/mobile_spy_button.png) on the toolbar, choose Mobile Spy from the main menu: `Tools > Spy > Mobile`. Click the Mobile Spy button. Now click the `Get Snapshot` button to display the application specified in the [mobile profile](mobile_settings_dialog.md) on the screen:

![spy\_dialog\_mobile\_ios](./img/mobile_testing_ios7.png)

In the example above, the sample iOS application available in [AUTiOS Repository](https://github.com/Inflectra/AUTiOS) is displayed.

If you click on an object in the user interface, it will be highlighted in red and the tree hierarchy on the left expands to show the properties of that object:

![spy\_dialog\_mobile\_ios\_2](./img/mobile_testing_ios8.png)

If you want to view the contents of the Spy as a text file, click the `Spy > Page Source` menu, and the contents of the Spy properties window will be displayed as a text file.

If you want to perform an action on the application (e.g., click on the selected item), use the toolbar buttons.

![toolbar events](./img/mobile_testing_ios9.png)

Now click `Tap` and Rapise sends a tap event to the application, switching it to the next page:

![after tap screen](./img/mobile_testing_ios_next.png)

Assuming your application is visible in the Spy and its objects can be inspected (as shown above), you can now begin testing your mobile application. Click the `Spy > Disconnect` menu option to end your Spy session and close the Rapise Spy dialog. You will now be returned to your test script.

## Recording and Playing a Test

With the new Rapise mobile test script open, click the `Record` button on the toolbar to display the [recording activity dialog](recording_activity_dialog.md):

![recording activity dialog\_mobile](./img/tutorial_mobile_testing17.png){width="572px"}

Now click the `Spy` button, and in the Rapise Spy, click the `Get Snapshot` button on the toolbar:

![spy\_dialog\_mobile\_ios](./img/mobile_testing_ios7.png)

To record a click on one of the menu options, click the `Basic Controls` list item in the Mobile Spy screenshot:

![spy\_dialog\_mobile\_ios\_2](./img/mobile_testing_ios8.png)

Now click the `Tap` button to move the sample app to the next screen; Rapise automatically reloads the page in the Mobile Spy to get the updated screen. Now highlight the user name field, enter text into the edit field on the toolbar, and press the `Send Keys` button.

![spy\_dialog\_mobile\_ios\_5](./img/mobile_testing_ios13.png)

Repeat for the password field and record a `Tap` action on the `Login` and `Home (back arrow)` buttons. You will see the events in the recording activity dialog:

![recording activity dialog mobile ios](./img/mobile_testing_ios14.png){width="572px"}

Now click the `Finish` button and you will be returned to the test script. Click the `Append to End` button.

![append](./img/tutorial_mobile_testing_append.png){width="449px"}

You will see iOS objects and actions displayed on the RVL sheet:

![object\_tree\_ios\_recording](./img/mobile_testing_ios15.png)

To play back the test, click `Play` in the Rapise toolbar. The test will then play back in the **iOS Simulator**. This is the test execution report.

![report\_mobile\_ios](./img/mobile_testing_ios16.png)

## Sample Application and Tests

You can find the Android sample tests and sample application in [AUTiOS Repository](https://github.com/Inflectra/AUTiOS).

## See Also

-   [Mobile Testing](mobile_testing2.md), for an overview of mobile testing with subsections.
-   [Mobile Settings Dialog](mobile_settings_dialog.md) - for information on setting up mobile profiles for the devices you will be testing.
-   [Mobile Object Spy](object_spy_mobile.md) - for information on how Rapise connects to the device and allows you to view the objects within the tested application.
-   [KB381](https://www.inflectra.com/Support/KnowledgeBase/KB381.aspx) iOS Testing Hints
-   [KB280](https://www.inflectra.com/Support/KnowledgeBase/KB280.aspx) How to specify Selenium or Appium capabilities which are not available through Rapise UI?
-   [KB278](https://www.inflectra.com/Support/KnowledgeBase/KB278.aspx) How to run a cross-browser test on a mobile device?
-   [KB418](https://www.inflectra.com/Support/KnowledgeBase/KB418.aspx) Is it possible to automate an iOS Web App using Rapise?