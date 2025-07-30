# Mobile Test Locator Dialog

## Purpose

This dialog box allows you to create a test locator for mobile applications using one of the supported methods (XPath, ID, etc.) and interactively view the results.

![mobile_test_locator](./img/mobile_test_locator_dialog1.png)

## How to Open

You open this dialog from the [Mobile Spy](object_spy.md) by clicking the **Test Locator** button.

## How to Use

To use this dialog, simply choose the type of locator you want to test (for example, XPath on an iOS device) and click the button. Properties discovered using this locator on the device are displayed in the right panel.
The following locator types are available:

-   **XPath** - Allows you to enter an XPath selector that uniquely identifies a specific element within the mobile object hierarchy.
-   **Id** - Allows you to enter an object's ID to test if it can be found.
-   **CSS** - For mobile website testing only, allows you to enter a CSS selector that uniquely identifies an object.
-   **Tag Name** - Allows you to find elements by their Tag Name field. For web testing, this is the name of the DOM element.
-   **Class Name** - Allows you to find elements by their UI Component Type.
-   **Name** - Allows you to find elements by their Name field.
-   **Android** - Allows you to enter a string for a recursive element search using the UiAutomator API (Android-only).
-   **iOS** - Allows you to enter a string for a recursive element search using the UIAutomation library (iOS-only).
-   **Accessibility** - Allows you to enter a string for a recursive element search using the ID/Name that native Accessibility options utilize.
-   **Link** - Based on the WebDriver standard, allows you to find hyperlinks using an *exact match* of the link anchor text.
-   **Partial Link** - Based on the WebDriver standard, allows you to find hyperlinks using a *partial match* of the link anchor text.
-   **Script** - For iOS testing, allows you to enter raw script that will be sent to the iOS device to locate the element.