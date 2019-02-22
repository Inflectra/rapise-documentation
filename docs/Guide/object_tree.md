# Object Tree Dialog

## Screenshot

![object tree dialog](./img/object_tree1.png)

## Purpose

Display learned objects.

## How to Open

The **Objects** dialog is part of the [Default Layout](restoring_the_default_layout.md).

## Context Menu (root node)

Right click the **Object Tree** node to see:

![object tree dialog, context menu](./img/object_tree2.png)

* **Refresh** checks for new objects to display.
* **Collapse all** collapses the entire object tree.
* **Expand all** expands the entire object tree.

## Context Menu (window)

Right click the **Window** node to see:

![object tree dialog, context menu](./img/object_tree4.png)

* **Flash** opens the application/url where the object is located.  A frame will blink around the window.
* **Remove** remove window and all contained objects.

## Context Menu (object)

Right click on an object in the **Object Tree** dialog to see:

![object tree dialog, context menu 2](./img/object_tree3.png)

* **Flash** opens the application/url where the object is located.  A frame will blink around the object to show you where it is on the page.
* **Re-Learn** will open up the [Recorder](recording.md), allowing you to re-learn the object. This is useful if the AUT has changed and the object definition will no longer correctly locate the object.
* **Remove** simply removes the selected object from the tree.
* **Clone** makes a copy of the object definition and adds the cloned version into the tree. You can then make changes to the cloned copy.
* **Add Parameter** opens up a dialog box that lets you add a custom parameter to the learned object definition (stored in the `Objects.js` file).
