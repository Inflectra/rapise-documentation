# Regular Expressions

## Purpose

A **regular expression** is a sequence of characters that describes how to construct a set of strings.  It is composed of character literals and [special characters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions). Each character literal represents one single character (such as "a", "b", "C", "1").  The special characters can represent a character, many characters, or a choice about how to select characters.

## Usage

In Rapise, you must prepend regular expressions with the string **regex:**.  So the regular expression describing all strings would be: **regex:.\***

There are three uses for regular expressions in Rapise: (1) in [Object Locators](object_locator.md), (2) in [action overriding code](actions.md), (3) in [Custom Libraries](custom_libraries.md).

## Examples

In [Object Locator](object_locator.md) to match a dynamic Window Title:

![window title](./img/regex1.png)

`regex:.*Microsoft Dynamics NAV` matches any Window Title ending with `Microsoft Dynamics NAV`, e.g.

    Posted Sales Shipments - Microsoft Dynamics NAV

or

    Sales Invoices - Microsoft Dynamics NAV
