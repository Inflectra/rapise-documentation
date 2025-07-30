# Analog Recording

## Concept

Sometimes, when automating the testing of an application, you may encounter controls or elements that Rapise cannot recognize as standard objects. For example, you may have a drawing canvas inside an application that allows you to annotate a diagram. You can use the standard Rapise libraries for the other controls, but the actual drawing events cannot be captured that way. Analog recording is available to 'fill in the gaps' in such scenarios.

During **Analog Recording**, Rapise records mouse movements, keyboard inputs, and clicks, storing them in a special .ARF (Analog Recording File) format:

![analog_recording_file](./img/analog_recording1.png)

There are two types of Analog Recording: **Absolute** and **Relative**.

- [**Absolute**](absolute_analog_learning.md): Mouse coordinates are recorded relative to the top-left corner of the screen.
- [**Relative**](relative_analog_learning.md): Mouse coordinates are recorded relative to the top-left corner of the object beneath the mouse cursor.

## Usage

When you are [recording your test](recording_activity_dialog.md) using the application, you may reach a point where you need to record user actions that don’t have any identifiable objects (for example, drawing a signature). You can click the 'Analog' button on the recorder to engage Analog mode:

![analog_recording_1](./img/do_absolute_analog_recording2.png)

Now, when you use the mouse and keyboard to test the application, Rapise stores the coordinates of your mouse clicks and keyboard events in a separate .ARF file that is part of your test project.

![analog_recording_2](./img/do_absolute_analog_recording3.png)

Once completed, the entire analog section is included as a single step within the complete test script, allowing you to include an analog sequence within a test script that contains other non-analog events. This provides the robustness of true object-based recording for 95% of your test and analog recording when you need it for the remaining 5%. This is the best of both worlds.

## See Also

- [Recording Activity Dialog](recording_activity_dialog.md)