# Manual Playback

![manual\_playback](./img/manual_playback1.png)

## Purpose

The **Manual Playback** dialog box allows you to execute a series of manual test cases (including those part of a test set) from within Rapise. Results from manual test execution are reported back to your connected [Spira](spiratest_integration.md) instance. During manual test execution, you can attach screenshots, files, and log incidents related to the test result.

## How to Open

You can open the **Manual Playback** dialog box by selecting `Test > Execute Manual` or by playing the entire test via `Test > Play`.

## Test Case Details & Test Step Selector

![manual\_playback\_step\_selector](./img/manual_playback2.png)

The top section of the Manual Playback screen allows you to view the test case name and description, **navigate between test steps**, and click a result button to indicate the behavior of the application under test:

*   **Pass** - The current test step was completed successfully, and the expected result was observed.
*   **Pass All** - All steps in the test case were completed successfully, and the expected results were observed for all steps.
*   **Blocked** - The current test step could not be performed because an external factor prevented its completion.
*   **Caution** - The current test step was performed, but the actual result only partially matched the expected result (indicating minor discrepancies).
*   **Fail** - The current test step was not performed successfully, or the observed actual result did not match the expected result.

## Test Step Expected & Actual Result

![manual\_playback\_step\_result](./img/manual_playback3.png)

This section displays the details of the current test step and allows you to enter the observed actual result:

*   **Description** - Displays the description of the action the tester should perform on the application under test.
*   **Expected Result** - Contains a description of the expected result if the application performs as expected.
*   **Sample Data** - This optional field contains any sample data to be used during testing.
*   **Actual Result** - This formatted text box is where the tester enters what actually happened during testing. It is required if the test step is marked as Fail, Block, or Caution, but it is optional for steps that Pass.
In addition, you can click the picture icon to [add a screenshot](image_capture.md), or use one of the two buttons below:
*   **Add Attachment** - Allows you to choose a file from your local system and attach it to the test result.
*   **Log Incident** - Allows you to log a bug or incident connected to the test step (e.g., if it failed), and displays the [New Incident](incident_logging.md) dialog box.

## Minimized Playback Dialog

![manual\_playback\_mini](./img/manual_playback4.png)

Sometimes, you may want to reduce the amount of space occupied by the testing dialog box to view the application and the test steps simultaneously on the same screen. To facilitate this, click the Minimize ( **<|** ) icon in the top-right corner of the dialog box; this will switch the manual playback dialog to the mini version shown above. Click the icon again to switch back to the standard player.