# Recording

## Purpose

Recording is the name given to having Rapise track your interactions with an application.

The actions you take in using the [AUT](glossary.md) are observed by Rapise and are transformed into a script ([RVL](/RVL/Overview/) or JavaScript), which you can execute using the `Play` button. The script can be extended and modified to suit special purposes.

## Usage

The **Recording Activity (RA) Dialog** is opened when you start recording using the `Record` toolbar button.  When the Recording Activity dialog appears, Rapise has connected to your AUT and is ready to monitor and record your interactions. You'll find instructions [here](recording_activity_dialog.md) or look at one of the examples:

- [Tutorial: Windows Testing](twodialogs_sample.md)
- [Tutorial: Web Testing](tutorial_record_and_playback.md)
- [Tutorial: Mobile Testing](mobile_testing2.md).

![recording activity dialog](./img/recording1.png)

You'll notice that the RA dialog has a grid. As you interact with the AUT, your actions will be listed in the grid.

If you record an incorrect action, you can right-click on the action and delete it.

To ensure you successfully record your interaction with the AUT, navigate slowly through the AUT.  Wait a second or two between each action to make sure Rapise has time to interpret and record your action. Once your interaction is updated in the RA dialog grid, you are free to continue with the next action.

When you are done recording, press the `Finish` button on the RA dialog or type ++ctrl+3++.  The RA dialog will disappear, and you will see an automatically generated script opened in Rapise.

For **Mobile Testing**, you will need to use the `Spy` button which then allows you to pick a specific object from the [Mobile Spy](../object_spy_mobile/):

![recording_activity_dialog_mobile_empty](./img/recording2.png)

## See also

- If you have already recorded a script and want to record additional interactions in the same test, be sure to read [Making Multiple Recordings](multiple_recordings.md).
- The RA dialog is described more thoroughly in [Recording Activity > Dialog](recording_activity_dialog.md).
- To learn how to run the script, see [Playback](playback.md). To learn how to modify the script, see [Scripting](scripting.md).
- For a detailed tutorial, see [Tutorial: Record and Playback](tutorial_record_and_playback.md) in the Getting Started section.
- For more information on the Spy capability, see [Object > Spy](../object_spy/).
