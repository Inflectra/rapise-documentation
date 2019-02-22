# Playback

## Purpose

When you record a test, Rapise translates your actions into a script.  When you **playback** the test, the script is executed.

## Usage
You can either run your script from the [Command Line](command_line.md), or you can play it back while Rapise is open (described below):

1.   You will first need to [open your test](open_a_test.md).  There is no need to have the AUT (Application Under Test) open. Rapise will open the AUT before it begins execution of the test.

2.   Now, press the play button at the top of the Rapise toolbar.
![play icon](./img/playback1.png)

3.   During test execution, Rapise displays an execution monitor dialog box that lets the user see the progress of testing playback. The dialog is only shown during test execution and can be turned off in the [Options](options_dialog.md) dialog.  The following is a screenshot of the test execution monitor.

    ![playback\_execution\_monitor](./img/playback2.png)

    The user can pause or stop the test execution by clicking either the `Pause` or `Stop` button.

4.   When Rapise is done executing the test, results will be displayed in a table.  The rows with green text are steps that passed; the rows with red text are steps that failed.  The following is a screenshot of test results where every step passed:

    ![test results.zoom70](./img/playback3.png)

## See Also
*   For more information about the report, see [Automated Reporting](automated_reporting.md).
*   For information about recording a test, see [Recording](recording.md).
*   For instructions on using the **Command Line**, look [HERE](command_line.md).
