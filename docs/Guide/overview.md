# Overview

## Why Use Rapise?

Rapise was created to make software testing easy and manageable without
being prohibitively expensive.

Rapise was made easy for software test professionals, developers and
professionals concerned with quality assurance to simply and quickly
write a test to cover an application, a web page, or a single bug to
prevent regression.

## Make Testing Fast and Repeatable

Consider for a moment what it is you do to test your software today.
Most likely it has some for of **user interface (UI)**, probably a
**graphic user interface (GUI)**.  So you will run the application ,
click around, perhaps in some way that gives you complete coverage of
all the features (but probably not if it's a large application or web).
Then you will login, if appropriate, and you will fetch some data and
modify some data, test some more controls - edit boxes, buttons,
drop-down lists, links, etc.  If you have just fixed a bug then you will
focus on the area of the application where the bug occurred.  You will
enter data that causes the bug, or go through the control sequence that
causes the bug.

Next time you come to fix a bug in this application, you will **do the
same thing again**..  Once again, you will focus on the area where the
bug was.

Rapise presents you with **two methods for capturing specific tests**,
and it will keep the test as a solo test or as part of a suite of tests
that help you to qualify the application for release or a more formal QA
process.  Rapise is designed to allow the developer or the test
professional to add new tests quickly and so to build up a library of
tests.

There are two methods for capturing tests:

1. [Record](recording.md) and
[playback](playback.md).  In this type of
test creation, you turn on the recorder and perform the actions needed
to execute the test.  Each test is saved to its own directory.  A test
consists of a javascript [test
script](../understanding_the_script/)
(**.js**), a meta-data file (**\*.sstest),** and any number of
additional supplementary scripts and data files.   The test script is
automatically generated after recording; simple modifications are
required to make the test [data
driven](../data_driven_testing/).
[Checkpoints](checkpoints.md) can be added
during recording, or manually into the script.\
2. [Object](object_locator.md)-driven
[learning](object_learning.md).   Rapise
considers each item on the page or within the application window to be
an object.  Examples are buttons, edit boxes, links, etc.  To create a
test using this technique, you have Rapise
"[learn](object_learning.md)" each
control, and it will keep a miniature
[database](object_tree.md) of all the
controls you "teach" it.  To create a test, you write a script to
instruct Rapise to perform a particular action on each object in the
prescribed order.  As any point along the way, the script you write can
instruct Rapise to look inside an object and read its data and compare
that value or content with what you expect it to be.

There are many methodologies with their own recommended approaches for
designing testing strategies to ensure that application coverage is
complete and meets the business requirements specification of the work
being accomplished.  Inflectra in general, recommends that you [create a
new test](../create_a_new_test/) for each
software requirement (to track progress) and for each issue in your
issue tracking system (to test for regressions).

## Choice of Scripting or Scriptless Rapise Visual Language (RVL)

Rapise gives you the choice of recording/writing your tests in a full
[scripting language](scripting.md) -
[JavaScript](javascript_ide.md), or the
[Rapise Visual Language
(RVL)](../visual_language/) which provides
a completely scriptless approach to writing tests (based on a simple
table-based format). The RVL option is simpler for users that are not
programmers but it has less flexibility than using JavaScript.

You can have the best of both worlds, putting the more sophisticated
steps into JavaScript
[scenarios](scenarios.md) and then
including in the main RVL file.

## Integration with Test Management

To help you manage the requirements and issue tracking processes and to
ensure that you have adequate **test coverage**, Inflectra recommend
that you use Rapise with a **test management system** such as
[SpiraTest](spiratest_integration.md).
That way you can maintain all your requirements, test cases and defects
in a single place.

Once you have created the test, you can
[playback](playback.md) your test from
within Rapise, run it from the
[command-line](command_line.md) or execute
it remotely using RapiseLauncher in conjunction with
[SpiraTest](spiratest_integration.md).  A
[report](automated_reporting.md) detailing
the outcome of each step of the test will be automatically generated.

[Recording](custom_libraries.md),
[playback](custom_libraries.md), the
[report](writing_to_the_report.md), and
the Rapise
[engine](customizable_engine.md) are all
customizable.
