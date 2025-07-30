# Semi-Manual Testing

## Purpose

This technique is useful when you want a predominantly manual test (executed by a tester) to include some steps that are automated by Rapise. These steps could be initial setup tasks (e.g., logging in, starting the application) or simply tasks that are well-suited to automation.

## Usage

Create your manual test using either the [recorder](manual_testing_recording.md) or the [manual test editor](manual_test_editor.md). Alternatively, you can open a test already created in [Spira](spiratest_integration.md).

Next, within Rapise, create a [test scenario](scenarios.md) (function) for the automated steps. In this example, we will simply automate the launching of MS-Paint.

Create a function in the **User.js** file with the following code:

```javascript
function LaunchMsPaint()
{
    Global.DoLaunch('C:\\Windows\\system32\\mspaint.exe');
}
```

Now, navigate to the **Manual Steps** section of Rapise by clicking the `Tools > Manual Steps` menu.

For example, in the first test step, change the **Description** to the following:

```javascript
@LaunchMsPaint();
//User starts up the MS-Paint Application
```

This will be displayed within the test step itself:

![semi_manual_1](./img/semi_manual_testing1.png)

Now, when you execute the test (using the normal **Execute** button on the main [Test toolbar](menu_and_toolbars.md#main-toolbar) — ***not*** the Execute Manual icon on the [Manual Toolbar](menu_and_toolbars.md#manual-toolbar)), Rapise will execute the main `Test()` function, which contains:

```javascript
function Test(params)
{
	Global.DoPlayManual('ManualSteps.rmt');
}

g_load_libraries = ["UIAutomation"];
```

This instructs Rapise to use the [manual playback](manual_playback.md) system. However, when it reaches the first step, Rapise will recognize the at symbol (@), which indicates an automated scenario, and then call the following code:

```javascript
//User starts up the MS-Paint Application
LaunchMsPaint();
```

Once the scenario has completed, Rapise will return to the manual test playback.

## See Also

*   [Manual Playback](manual_testing_playback.md)
*   [Test Scenarios](scenarios.md)
*   [Inflectra Webinar: From Manual to Automated UI Testing With Rapise](https://www.youtube.com/watch?v=uT4bGyN9v6A)