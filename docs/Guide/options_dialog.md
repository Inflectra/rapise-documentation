# Options Dialog

![options dialog, general tab](./img/options_dialog1.png)

## Purpose

Use the **Options** dialog to change the global Rapise settings. Your changes will apply to all tests.

## How to Open

User `Settings > Global` menu item.

## Misc

![options.dialog.misc](./img/options_dialog4.png)

* **SplashScreen**: A splash screen is the image that appears while a program initializes.  The Rapise splash screen looks like this:

![splashscreen](./img/options_dialog3.png)

Set **SplashScreen** to **False** to prevent the splash screen from appearing.

## Settings

![options.dialog.settings](./img/options_dialog5.png)

* **AutoReloadModifiedFiles**: If set to **True**, any files you modify outside of Rapise are automatically reloaded in Rapise.
* **Confirm Object Removal**: Ask when deleting object form the [Object Tree](object_tree.md).
* **Convert Tabs to Spaces**: **True** to force tabs to spaces conversion for the text editor.
* **DefaultFolder** specifies  where new tests are kept before you explicitly save them.  The location is relative to the Rapise executable.
* **Default Scripting Language**: JavaScript, RVL or Ask. 
* **LoadLastTestOnStartup**: If set to **True**, Rapise will open the last test you worked on and saved.  If set to **False**, Rapise will create a new test named MyTest<#> where <#> is an integer.  A folder for MyTest<#> is created in the folder specified by the **DefaultFolder** option.
* **NormalizeFileName**: If set to **True**, files are referred to (in the `*.sstest` file) using a a path relative to the `*.sstest` file.  Otherwise, their absolute path is used.
* **RecentTests**: The maximum number of recent files displayed in the **Recent Tests** list.  To see the Recent Tests list, open the Application Menu:

    ![options dialog, recent projects](./img/options_dialog8.png)

* **Remember Debugger Layout**: If **True**, Rapise will remember the window layout for debug mode separately. For example, this may be useful if you want to work full screen while authoring the Test and half-screen to debug. This way the AUT and the Rapise debugger fit on the screen.
* **ShowCommonFileAliases**: Legacy, not needed since Rapise 6.0.
* **Enable Execution Monitor**: specifies whether the execution monitor dialog box will be displayed during [playback](playback.md).
* **ShowDashboardOnStartUp**: If **True**, the [Spira Dashboard](spira_dashboard.md) will open automatically when Rapise is opened.
* **ShowStartPageOnStartUp**: If **True**, the [Start Page](start_page.md) will open automatically when Rapise is opened.
* **Spira Integration**: Enables all dialogs and menus for [SpiraTest Integration](spiratest_integration.md).
* **Temp Folder**:  default folder for temporary tests.
* **Test Auto Upgrade**: if set to **True** each opened `.sstest` file is automatically upgraded to the latest format.

## Recorder

* **FrameStyle**: Specifies which frame to draw around objects when you [Record](recording.md), [Learn](object_learning.md), and [Spy](object_spy.md).

    The **Basic** frame is on the left and the **Modern** frame is on the right:

    ![options dialog, framestyle basic](./img/options_dialog6.png) ![options dialog, framestyle modern](./img/options_dialog7.png)
* **DefaultSpy** specifies which of the various types of [Object Spy](object_spy.md) will be displayed by default.
* **GenerateComments**: **True** to automatically generate JavaScript or RVL comment for each recorded action.

## Utils

![options dialog, recent projects](./img/options_dialog9.png)

Utility functions

* Set of **Open** buttons:
  * **Open Web Profiles Folder**
  * **Open Selenium Profiles Folder**
  * **Open Mobile Profiles Folder**
  * **Open Samples Folder**
  * **Open User Libraries Folder**
  * **Open Application Log Folder**

* **Reset Layout** - Pressing the **Reset Layout** button restores the [default layout](restoring_the_default_layout.md).  Rapise will restart.
