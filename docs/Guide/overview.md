# Overview

## Why Use Rapise?

Rapise was created to make software testing easy and manageable without being prohibitively expensive.

Rapise was designed to enable software test professionals, developers, and quality assurance professionals to quickly and easily write tests that cover an application, a web page, or a single bug, helping to prevent regressions.

## Make Testing Fast and Repeatable

Consider for a moment how you test your software today. Most likely, it has a **user interface (UI)**, probably a **graphical user interface (GUI)**. You will run the application, click around, perhaps in a way that attempts to give you complete coverage of all features (though probably not, if it's a large application or web application). Then you will log in, if appropriate, and fetch and modify data, testing various controls—edit boxes, buttons, drop-down lists, links, etc. If you have just fixed a bug, you will then focus on the area of the application where the bug occurred. You will enter data or go through the control sequence that causes the bug.

The next time you need to fix a bug in this application, you will **repeat the process**. Again, you will focus on the area where the bug was.

Rapise offers **two methods for capturing specific tests**. It can manage tests either individually or as part of a test suite, helping you to qualify the application for release or a more formal QA process. Rapise is designed to enable developers and test professionals to quickly add new tests and build up a comprehensive library.

There are two methods for capturing tests:

1.  [Record](recording.md) and [playback](playback.md). In this type of test creation, you turn on the recorder and perform the necessary actions to execute the test. Each test is saved to its own directory. A test consists of a JavaScript [test script](understanding_the_script.md) (**`.js`**), a metadata file (**`*.sstest`**), and any number of additional supplementary scripts and data files. The test script is automatically generated after recording; simple modifications are required to make the test [data driven](data_driven_testing.md). [Checkpoints](checkpoints.md) can be added during recording or manually into the script.
2.  [Object](object_locator.md)-driven [learning](object_learning.md). Rapise considers each item on the page or within an application window to be an object. Examples include buttons, edit boxes, and links. To create a test using this technique, you have Rapise "[learn](object_learning.md)" each control. Rapise then maintains a miniature [database](object_tree.md) of all the controls it "learns". To create a test, you write a script to instruct Rapise to perform a particular action on each object in the prescribed order. At any point along the way, the script you write can instruct Rapise to look inside an object, read its data, and compare that value or content with your expected result.

Many methodologies offer recommended approaches for designing testing strategies to ensure complete application coverage and meet business requirements. Inflectra generally recommends that you [create a new test](create_a_new_test.md) for each software requirement (to track progress) and for each issue in your issue tracking system (to test for regressions).

## Choice of Scripting or Scriptless Rapise Visual Language (RVL)

Rapise offers the choice of recording or writing your tests in a full [scripting language](scripting.md)—[JavaScript](javascript_ide.md)—or the [Rapise Visual Language (RVL)](visual_language.md), which provides a completely scriptless approach to writing tests (based on a simple table-based format). The RVL option is simpler for users who are not programmers, but it offers less flexibility than using JavaScript.

You can have the best of both worlds by putting the more sophisticated steps into JavaScript [scenarios](scenarios.md) and then including them in the main RVL file.

## Integration with Test Management

To help you manage requirements and issue tracking processes and ensure adequate **test coverage**, Inflectra recommends that you use Rapise with a **test management system** such as [SpiraTest](spiratest_integration.md). That way you can maintain all your requirements, test cases, and defects in a single place.

Once you have created a test, you can [play back](playback.md) your test from within Rapise, run it from the [command line](command_line.md), or execute it remotely using RapiseLauncher in conjunction with [SpiraTest](spiratest_integration.md). A [report](automated_reporting.md) detailing the outcome of each step of the test will be automatically generated.

[Recording](custom_libraries.md), [playback](custom_libraries.md), the [report](writing_to_the_report.md), and the Rapise [engine](customizable_engine.md) are all customizable.