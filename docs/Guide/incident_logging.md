# Incident Logging

## Screenshot

![incident\_logging](./img/incident_logging1.png)

## Purpose

The **New Incident** dialog box allows you to log a new incident (also known as a bug or defect) into a connected [SpiraTest](spiratest_integration.md) instance. If you log the new incident during a [manual test execution](manual_playback.md), it will be linked to the current test run.

## How to Open

You can open the **New Incident** dialog box using the `Tools > New Incident` menu, or by clicking the `Log Incident` button within the [Manual Playback](manual_playback.md) dialog box.

## Details / Description

![incident\_logging\_details](./img/incident_logging2.png)

The **Details/Description** section allows you to enter a short name and a long description for the new incident, along with the following fields:

*   **Type** - The type of incident (e.g., bug).
*   **Detected By** - The user who detected the bug (typically your current user).
*   **Priority** - The importance level of the bug.
*   **Severity** - The criticality level of the bug.
*   **Owned By** - The user to whom the bug should be assigned (or left unassigned).
*   **Detected Release** - The version of the system in which the bug was found.
*   **Resolved Release** - The version of the system in which the bug should be fixed.
*   **Verified Release** - The version of the system in which the bug was retested.
*   **Custom Fields** - Any custom fields created in your Spira instance will also be displayed.

## Comments

![incident\_logging\_comments](./img/incident_logging3.png)

The **Comments** section allows you to enter a comment that will be logged with the new incident. This is a rich text field that can contain formatted text.

## Schedule

![incident\_logging\_schedule](./img/incident_logging4.png)

The **Schedule** section allows you to enter schedule and effort-related information for the new incident:

*   **Start Date** - The planned start date for the new incident.
*   **End Date** - The planned completion date for the new incident.
*   **Estimated Effort** - The number of hours the incident is expected to take.
*   **Actual Effort** - The number of hours actually expended.
*   **Remaining Effort** - The number of hours remaining to fix the incident.
Additionally, the following calculated fields will be displayed:
*   **Percent Complete** - A measure of how much of the incident has been completed. It is calculated as: 100% - (Remaining Effort / Estimated Effort).
*   **Projected Effort** - The current measure of how long the incident is expected to take, based on current information. It is calculated as: (Actual Effort + Remaining Effort).

## Attachments

![incident\_logging\_attachments](./img/incident_logging5.png)

This section displays a list of attachments associated with the new incident. Since Rapise has a built-in [screenshot capture](image_capture.md) utility, this section is typically not used.