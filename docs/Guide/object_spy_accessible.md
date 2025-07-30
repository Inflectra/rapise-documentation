# Accessible (MSAA) Spy

## Purpose

The **Accessible Spy** inspects applications that contain Microsoft Active Accessibility (MSAA) objects.

![accessible spy](./img/object_spy_accessible1.png)

## Features

The Accessible Spy has the following features:

- The **Tree** pane displays the hierarchy of MSAA objects available in the application.
- The **Properties** pane displays the exposed properties of the highlighted MSAA object.
- The **Learn Object** option, displayed when you use the Spy during recording, allows you to select specific [objects to learn](learn_object.md).

## Commands

In addition to viewing the object hierarchy and properties, you can perform the following tasks:

- **Parent** - Selects the parent object of the currently displayed item.
- **Highlight** - Attempts to flash (highlight with a red rectangle) the object selected in the Spy.
- **Refresh** - Refreshes the Spy view to reflect any changes that may have occurred in the application.
- **Default Action** - Performs the default action on the selected object in the Spy.
- **Mouse Click** - Performs a simple mouse click on the selected object in the Spy.
- **Save to File** - Saves the properties of the currently selected object to a text file.

![accessible spy, popup menu](./img/object_spy_accessible2.png)

## See Also

- [Object Spy](object_spy.md)
- [Microsoft Active Accessibility](http://msdn.microsoft.com/en-us/magazine/cc301312.aspx)
- [HWND](http://msdn.microsoft.com/en-us/library/aa979055.aspx)