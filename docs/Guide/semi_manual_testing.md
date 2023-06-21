# Semi-Manual Testing

## Purpose

This is a useful technique when you want to have a predominantly manual test (executed by a tester) that has some steps that are automated by Rapise. These could be some of the initial setup tasks (e.g. logging in, starting the application) or just tasks that are well suited to automation.


## Usage

Create your manual test either using the [recorder](manual_testing_recording.md) or the [manual test editor](manual_test_editor.md). You can also just open up a test already created in [Spira](spiratest_integration.md).

Next, inside Rapise, create a [test scenario](scenarios.md) (function) that contains the necessary login. In this example we shall simply automate the launching of MS-Paint.

Create a function in the **User.js** file with the following
code:

```javascript
function LaunchMsPaint()
{
    Global.DoLaunch('C:\\Windows\\system32\\mspaint.exe');
}
```

Now go to the **Manual Steps** section of Rapise by clicking on the `Tools > Manual Steps` menu.

Inside the first test step (for example), change the **Description** to the following:

```javascript
@LaunchMsPaint();
//User starts up the MS-Paint Application
```

This will be contained within the actual test step itself:

![semi_manual_1](./img/semi_manual_testing1.png)

Now, when you execute the test (using the normal **Execute** button on the main [Test toolbar](menu_and_toolbars.md#main-toolbar) (***not*** the Execute Manual icon on the [Manual Toolbar](menu_and_toolbars.md#manual-toolbar) ) what happens is that Rapise will execute the main `Test()` function that contains:

```javascript
function Test(params)
{
	Global.DoPlayManual('ManualSteps.rmt');
}

g_load_libraries = ["UIAutomation"];
```

this instructs Rapise to use the [manual
playback](manual_playback.md) system.
However when it gets to the first step, it will see the ampersand symbol
(@) that denotes that this is actually an automated scenario and then
call the following code:

```javascript
//User starts up the MS-Paint Application
LaunchMsPaint();
```

Once the scenario has completed, Rapise will then return back to the
manual test playback.


## See Also

* [Manual Playback](manual_testing_playback.md)
* [Test Scenarios](scenarios.md)
* [Inflectra Webinar: From Manual to Automated UI Testing With Rapise](https://www.youtube.com/watch?v=uT4bGyN9v6A)
