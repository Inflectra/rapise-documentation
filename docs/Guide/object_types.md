# Recording and Learning

## Purpose
To understand what different objects might be found on a UI screen, and how to recognize them, record their characteristics and interact with them using Rapise.

## Value
A UI screen entity (object) may consist of many different parts and components.  Actions on these objects, and usage of these controls, must be captured in different ways, depending on the properties of the object.  Rapise provides five fundamental methods for capturing objects and corresponding user actions:

1.   **Recording** - Rapise is able to track user interactions with AUT and automatically capture affected objects and corresponding user actions.  See [Recording](recording.md) for more information.

2.   **Learning** - there are cases when it is not necessary or is not possible to track user interactions with AUT. In this case user can manually point to an object that should be captured by Rapise. See [Learning](object_learning.md) for more information.

3.   **Analog Recording (Absolute/Relative)** - this is for objects that are not standard in some important way, and so activity on them cannot be captured using recording or cannot be specified after learning. [Absolute Analog Recording](absolute_analog_learning.md) is used to track mouse usage (movement and clicks) and keyboard events.  For absolute analog recording, the positions these events are recorded relative to the top-left corner of the system screen.  (In contrast, in [Relative Analog Recording](relative_analog_learning.md), the events are recorded relative to the upper-left corner of the selected objects.)  The events are recorded in a file of type arf (Analog Recording File).
4.   **Simulated Object Recording** - a Rapise user can use simulated objects when some objects are not natively supported by Rapise (e.g. their internal structure, properties and actions are unknown).  In this case, what is recorded are mouse clicks and keyboard activity.  Compare  to Analog Recording when all mouse and keyboard actions are recorded, including mouse up/down, mouse move events. See [Simulated Objects](simulated_objects.md) for more information.
5.   **Manual Recording** - In addition to providing automated testing functionality, Rapise enables you to [create manual tests](manual_test_editor.md) (ones that will be [carried out by a human tester](manual_playback.md)) rapidly without having to laboriously enter in test steps and screenshots by hand. It does this by using the same recording mechanism used for automated testing to [create a manual test case](manual_testing_recording.md) that contains a list of the tester's interactions and screenshots of what was performed. This is useful for exploratory testing and is a huge time saver.

## Usage

Before an operation (press, enter text, select, click, etc.) can be performed on an object automatically, Rapise must be able to identify the object.  That identification must be able to locate the object definitively, and it must be able to duplicate the action or operation precisely.  This carries several implications.  Firstly, if the AUT is in a different position on the screen when it is started, Rapise must still be able to find the objects in the AUT window.  Secondly, if the positioning of objects on the AUT window is proportional or relative to the screen size of shape, Rapise must still be able to locate the object.

A secondary set of considerations relates to the fact that the AUT UI layout maybe sensitive to the context of the state of the application.  For example, consider the case of a word processor.  Pressing the "bold" button doesn't predict what the result will be unless it is known whether the text highlighted is currently bold or not.  A far more illustrative example is that of the Microsoft Paint utility.  The Microsoft Paint utility is the subject of a Inflectra sample, [Simulated Object](sample_tests.md).

The most instructive way to identify the objects to Rapise is to practice with the tool and different types of objects.  The best methodology to use is as follows:

1.   First, try to use Record/Learn to learn the object and record actions in a single step.

2.   If learning.recording fails to record actions in the grid, use the [Object Spy](object_spy.md) to observe the object carefully and discover what libraries and classes are being used by the AUT.

3.   Use Verify (++ctrl+1+) from the Recording Activity dialog to get summary information about the object.

4.   Use a more appropriate set of libraries when selecting the AUT prior to recording.

5.   Use Analog Recording with absolute positioning to identify and locate the object.

6.   Use Analog Recording with relative positioning to identify and locate the object.

7.   Use Simulated Object Recording to track the actions required and at the positions required.

8.   Look for [custom libraries](custom_libraries.md) that support the technology being used by the AUT.

9.   Build your own custom library to support the technology in use by the AUT.

10.   Finally if it will not be worth developing automated tests for this AUT, use the [manual recording feature](manual_testing_recording.md) to speed up your manual test writing.

## See Also:

* [KB 289](http://www.inflectra.com/Support/KnowledgeBase/KB289.aspx) How Object Recognition Works in Rapise