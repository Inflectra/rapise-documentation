# Managed (.NET) Spy

## Purpose

The **Managed Spy** is used to inspect Microsoft .NET applications that contain .NET framework objects (e.g. using Windows Forms).

![spy_dialog_managed_object](./img/object_spy_managed1.png)

## Features

The Managed Spy has the following features:

- The **Tree** pane lets you view the hierarchy of .NET objects available in the application
- The **Properties** pane lets you view the exposed properties of the highlighted .NET object
- The **Learn Object** option is displayed when you use the Spy during recording and lets you pick specific [objects to learn](learn_object.md).

## Commands

In addition to viewing the object hierarchy and object properties, you can perform the following tasks:

- **Parent** - This selects the parent object of the one displayed
- **Highlight** - This will attempt to Flash (highlight with a red rectangle) the object selected in the Spy.
- **Refresh** - this simply refreshes the Spy view to reflect any changes that might have occurred in the application.
- **Save to File** - this will save the properties of the currently selected object to a text file.
- **Save Type Information** - this will save object class type information to a text file.

![spy_dialog_managed_popup](./img/object_spy_managed2.png)

## See Also

- [Object Spy](object_spy.md)