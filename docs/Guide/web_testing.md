# Web Testing

## Purpose

Rapise allows you to record and play back automated tests against web applications across a variety of web browsers, including **Google Chrome**, **Microsoft Edge**, **Mozilla Firefox**, **Internet Explorer**, and **Safari**. You can record or create tests against one browser and then play the same test back against all other browsers. This is known as **Cross-Browser Testing**.

![web_testing1](./img/web_testing1.png)

Rapise provides comprehensive support for testing web applications. It uses the web browser Document Object Model (DOM) to interact with the current web page. Web browsers on the market exhibit variations in their DOM implementation. In many cases, these differences are not significant, but sometimes they require special handling. Rapise aims to overcome these differences and make recorded scripts as universal as possible.

Additionally, you can gain more control over cross-browser execution using the available APIs and configuration variables. You can also run recordings in multiple browsers in succession, either by using a Rapise [sub-test](tests_and_sub_tests.md) or by simply executing the test from our [SpiraTest test management](spiratest_integration.md) system and passing different parameter values.

## DOM API

In addition to the standard [recording](recording.md), [learning](learn_object.md), and [playback](playback.md) functionalities, which are similar to testing other technologies (desktop, mobile, etc.), Rapise offers unique functions available for all recorded web objects. When you learn a web element in Rapise, you obtain an object of type [HTMLObject](../Libraries/HTMLObject.md). Each **HTMLObject** provides a set of functions to facilitate cross-browser access to web element parents and children.

- **DoDOMChildAt** - Returns the n-th child (zero-based).
- **DoDOMChildrenCount** - Returns the number of child elements.
- **DoDOMFindParentWithAttribute** - Returns the parent element with a given attribute matching a specified string or regex.
- **DoDOMGetAttribute** - Returns the specified attribute.
- **DoDOMNextSibling** - Returns the next sibling element.
- **DoDOMParent** - Returns the parent element of this element.
- **DoDOMPrevSibling** - Returns the previous sibling element.
- **DoDOMRoot** - Returns the root element of this element.

## See Also

- [Web Testing Tutorial](tutorial_record_and_playback.md) - A basic example of how to record, learn, and play back tests using our sample web application.
- [Web Spy](web_spy.md) - How to use the Web Spy to inspect web pages and dynamically query HTML elements.
- [Web Application Profile](web_app_profile.md) - How to improve the automatic generation of web element locators.
- [Self-healing Web Locators](web_self_healing.md) - How to enable and use advanced maintenance features for web testing.
- [XPath](xpath.md) - An explanation of the XPath language, how it can be used to dynamically query objects in web applications, and some examples.
- [CSS](css.md) - An explanation of how to use CSS selectors (common in frameworks such as jQuery) to dynamically query objects in web applications.
- [Selenium Profiles](selenium_settings_dialog.md) - How to configure Rapise to play back tests on different browsers.

- Legacy
    - [Web Browser Profiles](browser_settings.md) - How to configure browsers to record and play back tests via Rapise's native connectors.
    - [Setting up Web Browsers](setting_up_web_browsers.md) - Describes the steps needed to configure each of the web browsers to work with Rapise.