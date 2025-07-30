# Relative Analog Recording

## Purpose

Relative analog recording is used to track mouse usage (movement and clicks) and keyboard events. In relative analog recording, events are recorded relative to the top-left corner of the application's window. The events are recorded in a file with the .arf (Analog Recording File) extension.

![analog\_recording\_relative](./img/relative_analog_learning1.png)

## Value

Not all applications can be recorded through object identification and learning. A good example of this is freehand drawing in an application such as Microsoft Paint (`Start Menu > Accessories > Paint`). There are several reasons why this application cannot be recorded using object tracking, learning, and recording. The most important reason is that when the mouse is moved freehand, it operates on the same object the entire time: the blank "canvas." Another reason is that the application's behavior and the canvas's position change depending on the canvas size and the positions of floating toolbars.

Relative analog recording is provided by Rapise to make it possible to design and implement tests for these types of applications.

## See Also

- [Do Relative Analog Recording](do_relative_analog_recording.md)
- [Absolute Analog Recording](absolute_analog_learning.md)