# Object Spy

## Purpose

The **Object Spy** allows you to inspect an object's properties and state.

Many controls on [User Interfaces](glossary.md) are compound objects or there may be many instances of a similar object.  To be sure to select precisely the correct object, or to select the correct object from a collection of similar objects, the object's properties can be used to further identify the correct instance.

## Usage

## Select Spy

To spy on an object choose the type of **Object Spy** that you want to use. This can be done by using the menu `Tools > Spy > ...` or by clicking the down-arrow next to the Spy icon in the [toolbar](menu_and_toolbars.md):

![spy_choose_spy](./img/object_spy1.png)

There are **6** types of Spy available:

1. [**Accessible**](object_spy_accessible.md) - This is used to inspect applications that expose their properties using the Microsoft Active Accessibility (MSAA) technology. This is typically used by applications written in MFC, ATL, Qt, C++ and Visual Basic.
2. [**Java**](object_spy_java.md) - This is used to inspect applications written using the Java AWT and Swing UI frameworks.
3. [**Managed**](object_spy_managed.md) - This is used to inspect applications written in .NET 1.1, .NET 2.0, .NET 4.0 using Microsoft Windows Forms.
4. [**Mobile**](object_spy_mobile.md) - This is used to inspect mobile applications running on iOS or Android devices as well as the iOS or Android simulator.
5. [**UIAutomation**](object_spy_uiautomation.md) - This is used to inspect applications that expose their properties using the Microsoft's newer UIAutomation technology. This is typically used by applications written in WPF, Silverlight and Java SWT.
6. [**Web**](web_spy.md) - This is used to inspect Web application running in browsers: Internet Explorer, Chrome, Firefox or any browser accessible via Selenium.

For more details on each Spy type, refer to specific topic above.

## Object Tracking

Open the **Spy Dialog**.  This can be done directly using the **Spy** button in the main Rapise [toolbar](menu_and_toolbars.md), or by pressing the **Spy** button in the [Recording Activity](recording_activity_dialog.md) dialog during recording or learning.

1. Click the **Start Tracking** button (or press `CTRL+G` (or `CTRL+T` in Web Spy).
2. As your mouse moves over different objects, you will see the contents of the Object Spy dialog change as it collects information about the object.
3. Mouse over the object you wish to spy on and press `CTRL+G`.  The reduced-size tracking dialog will be expanded into the the larger [Object Spy Dialog](ses_spy_dialog.md), presenting all the available information for the object.

## See Also

- See the [Object Spy Dialog](ses_spy_dialog.md) for more details.
