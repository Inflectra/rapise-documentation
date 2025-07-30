# Recording and Learning

## Purpose
To understand the types of objects found on a UI screen, and to learn how to recognize, record their characteristics, and interact with them using Rapise.

## Value
A UI screen entity (object) may consist of many different parts and components. Actions performed on these objects, and the usage of these controls, must be captured in different ways, depending on the object's properties. Rapise provides five fundamental methods for capturing objects and corresponding user actions:

1.  **Recording** - Rapise can track user interactions with an AUT and automatically capture the affected objects and corresponding user actions. See [Recording](recording.md) for more information.

2.  **Learning** - There are cases when it is not necessary or possible to track user interactions with an AUT. In such cases, a user can manually point to an object for Rapise to capture. See [Learning](object_learning.md) for more information.

3.  **Analog Recording (Absolute/Relative)** - This method is used for objects that are not standard in some important way, meaning activity on them cannot be captured using standard recording or specified after learning. [Absolute Analog Recording](absolute_analog_learning.md) tracks mouse usage (movement and clicks) and keyboard events. For absolute analog recording, the positions of these events are recorded relative to the top-left corner of the system screen. (In contrast, in [Relative Analog Recording](relative_analog_learning.md), events are recorded relative to the upper-left corner of the selected objects.) These events are recorded in a file of type .arf (Analog Recording File).
4.  **Simulated Object Recording** - Rapise users can employ simulated objects when certain objects are not natively supported by Rapise (e.g., their internal structure, properties, and actions are unknown). In this case, only mouse clicks and keyboard activity are recorded. This differs from Analog Recording, where all mouse and keyboard actions—including mouse up/down and mouse move events—are recorded. See [Simulated Objects](simulated_objects.md) for more information.
5.  **Manual Recording** - In addition to providing automated testing functionality, Rapise enables you to [create manual tests](manual_test_editor.md) (ones that will be [carried out by a human tester](manual_playback.md)) rapidly without having to laboriously enter test steps and screenshots by hand. It does this by leveraging the same recording mechanism used for automated testing to [create a manual test case](manual_testing_recording.md) that includes a list of the tester's interactions and screenshots of the actions performed. This feature is useful for exploratory testing and is a huge time-saver.

## Usage

Before an operation (e.g., press, enter text, select, click) can be automatically performed on an object, Rapise must be able to identify that object. This identification must definitively locate the object and precisely duplicate the action or operation. This has several implications. Firstly, if the AUT starts in a different screen position, Rapise must still be able to find the objects within the AUT window. Secondly, if object positioning within the AUT window is proportional or relative to the screen size or shape, Rapise must still be able to locate the object.

A secondary set of considerations relates to the fact that the AUT UI layout may be sensitive to the application's current state or context. For example, pressing the "bold" button in a word processor doesn't predict the outcome unless it's known whether the highlighted text is currently bold. A more illustrative example is the Microsoft Paint utility. The Microsoft Paint utility is the subject of an Inflectra sample, [Simulated Object](sample_tests.md).

The most instructive way to identify objects for Rapise is to practice with the tool and different object types. The best methodology to use is as follows:

1.  First, try to use Record/Learn to learn the object and record actions in a single step.

2.  If learning/recording fails to record actions in the grid, use the [Object Spy](object_spy.md) to observe the object carefully and discover which libraries and classes the AUT is using.

3.  Use Verify (++ctrl+1+) from the Recording Activity dialog to obtain summary information about the object.

4.  Use a more appropriate set of libraries when selecting the AUT prior to recording.

5.  Use Analog Recording with absolute positioning to identify and locate the object.

6.  Use Analog Recording with relative positioning to identify and locate the object.

7.  Use Simulated Object Recording to track the required actions at the required positions.

8.  Look for [custom libraries](custom_libraries.md) that support the technology employed by the AUT.

9.  Build your own custom library to support the technology in use by the AUT.

10. Finally, if developing automated tests for this AUT is not feasible, use the [manual recording feature](manual_testing_recording.md) to speed up manual test writing.

## See Also:

* [KB 289](http://www.inflectra.com/Support/KnowledgeBase/KB289.aspx) How Object Recognition Works in Rapise