# TAP Results

## Purpose

Rapise supports the [**Test Anything Protocol**](https://testanything.org/) (TAP). TAP defines the communication between unit tests and testing frameworks, such as [Visual Studio MS-Test](visual_studio.md) or [NUnit](nunit.md).

## Usage

The results of a Rapise test are saved to a TAP file in the same directory as the test. TAP files have a **.tap** extension.

TAP’s general format is:

    1..N
    ok 1 Description # Directive
    # Diagnostic
    ....
    ok 47 Description
    ok 48 Description
    more tests....

For example, a test file’s output might look like:

    1..4
    ok 1 - Input file opened
    not ok 2 - First line of the input valid
    ok 3 - Read the rest of the file
    not ok 4 - Summarized correctly # TODO Not written yet

## Example

An example Rapise TAP file looks like the following:

    # Simple IE Popup Example
    # Starting scenario: Test
    ok 1 - Open popup.DoClick([])
    ok 2 - Click me.DoClick([])
    ok 3 - Close me.DoClick([])
    ok 4 - Simple IE Popup Example

## See Also

- More information about TAP is available on the TAP wiki: [www.testanything.org](http://www.testanything.org)
- [Visual Studio Unit Testing (MS-Test)](visual_studio.md)
- [NUnit](nunit.md)