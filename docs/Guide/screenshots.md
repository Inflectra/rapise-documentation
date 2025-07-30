# Taking Screenshots

Taking screenshots during test playback can serve several purposes:

1.  To provide clues for test failure analysis.
2.  To document test execution, which may be required by company policy.
3.  To generate test documentation and even user guides.

Rapise can take screenshots automatically after every action or on-demand at specific points during test execution.

## Automatic Screenshots

To enable automatic screenshots after every action, use the [Screen Capture](settings_dialog.md#screen-capture) test settings.

> **Note:** Automatic screenshots are supported for Desktop and Web applications, and are not supported for Mobile.

## Screenshots in Framework Mode

The simplest way to enable screenshots is to use the `Parameters...` section in the `Choose Test Case` dialog:

![Parameters](./img/screenshots_choose_test_case.png)

Then, choose `Capture Execution`:

![Capture Execution](./img/screenshots_capture_execution.png)

Press OK, and set a value:

![Capture Execution Value](./img/screenshots_capture_execution_value.png)

## Taking a Screenshot when a Test Fails

By default, the option to take a screenshot whenever a test fails is enabled:

![Screenshot on Failure](./img/screenshots_screenshot_on_failure.png)

## Playback

If you set the following in [Screen Capture](settings_dialog.md#screen-capture) before execution:

-   `Capture Cursor = True`
-   `Capture Execution = True`
-   `Widget Only = True`

then, after playback, Rapise will generate the screen flow document.

![execution html in file tree](./img/screenshots_execution_file_tree.png)

A link to the document is also available in the report:

![execution html in report](./img/screenshots_execution_report.png)

The content of the document looks like this:

![execution html](./img/screenshots_execution_html.png)

> **Note:** If an object is not available on screen after an action is performed on it, Rapise takes a screenshot of the entire desktop window. You can see this in step #5 above; the login button disappeared after it was clicked.

> **Note:** Rapise also always takes an additional screenshot of the entire desktop window at the end of test execution, even if the test was terminated due to a failed assertion. See step #7 below.

![execution finished](./img/screenshots_execution_finished.png)

## Embed Screenshots Into Report

The execution screenshots described above are stored in the local file system. If a test report is uploaded to [SpiraTest](spiratest_integration.md), these screenshots are not uploaded.

To embed screenshots into execution reports and make them available in [SpiraTest](spiratest_integration.md), set the following:

-   `Include in Report = True`

in [Screen Capture](settings_dialog.md#screen-capture) settings.

In Rapise, screenshots are embedded before each action:

![embedded rapise](./img/screenshots_embedded_rapise.png)

Screenshots in SpiraTest:

![embedded spiratest](./img/screenshots_embedded_spiratest.png)

## Suppressing Screenshots

Sometimes, it makes sense to temporarily disable screenshot capturing. Learn how to do this:

-   [KB291: How to Enable/Disable Screenshots During Script Execution](https://www.inflectra.com/Support/KnowledgeBase/KB291.aspx)

## On-Demand Screenshots

It is also possible to take screenshots at specific points during test execution. The method for doing this depends on the test target.

## Desktop

This method works for both desktop and web applications running on the same machine as Rapise.

Use the global [Tester](../Libraries/Tester.md) object and its actions to take a screenshot of an object, a specific window, or the entire desktop.

-   [Tester.CaptureObjectImage](../Libraries/Tester.md#CaptureObjectImage)
-   [Tester.CaptureWindowImage](../Libraries/Tester.md#CaptureWindowImage)
-   [Tester.CaptureDesktopImage](../Libraries/Tester.md#CaptureDesktopImage)

## Web

This method works well if you plan to run a web test on remote machines via [Selenium WebDriver](selenium_webdriver.md).

Use the global [Navigator](../Libraries/Navigator.md) object and its [Navigator.DoScreenshot](../Libraries/Navigator.md#DoScreenshot) action.

## Mobile

To take a screenshot on a Mobile target, use:

-   [Android.DoScreenshot](../Libraries/Android.md#DoScreenshot)
-   [iOS.DoScreenshot](../Libraries/iOS.md#DoScreenshot)

## Recording

If, before a recording session, you set the following in [Screen Capture](settings_dialog.md#screen-capture):

-   `Capture Cursor = True`
-   `Capture Recording = True`
-   `Widget Only = True`

then, after recording, Rapise will generate the screen flow HTML document.

![recording html in file tree](./img/screenshots_recording_file_tree.png)

with content like this:

![recording html in browser](./img/screenshots_recording_html.png)

> **Note:** We recorded the `Login/Logout` scenario on the [Library Information System](http://libraryinformationsystem.org/) sample application. See the [web testing tutorial](tutorial_record_and_playback.md) for more details.

## See Also

-   [KB291: How to Enable/Disable Screenshots During Script Execution](https://www.inflectra.com/Support/KnowledgeBase/KB291.aspx)