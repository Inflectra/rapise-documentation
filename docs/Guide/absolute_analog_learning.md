# Absolute Analog Recording

## Purpose

Absolute analog recording is used to track mouse usage (movement and clicks) and keyboard events. For absolute analog recording, these events are recorded relative to the top-left corner of the system screen. (In contrast, with relative analog recording, events are recorded relative to the upper-left corner of the selected objects.) The events are recorded in an .arf file (Analog Recording File).

![analog\_recording\_absolute](./img/absolute_analog_learning1.png)

## Value

Not all applications can be recorded by locating and learning objects. A good example of this is freehand drawing in applications such as Microsoft Paint (`Start Menu > Accessories > Paint`). There are several reasons why this application cannot be recorded using object tracking and learning. The most important reason is that when the mouse is moved freehand, it operates on the same object the entire time—the blank "canvas." Another reason is that the application's behavior changes, and the canvas's position shifts depending on its size and the positions of floating toolbars.

Absolute analog recording in Rapise makes it possible to design and implement tests for these types of applications.

## See Also

- [Do Absolute Analog Recording](do_absolute_analog_recording.md)
- [Relative Analog Recording](relative_analog_learning.md)