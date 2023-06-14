# Object Tree View

![Object Tree View](img/object_tree_view.png)

## Purpose

The purpose of the Object Tree View varies depending on whether the current context is a standalone test or a [testing framework](/Guide/Frameworks/frameworks).

## How to Open

The Object Tree View is always visible by default, unless you have explicitly switched to a different view. If you want to display the Object Tree View again, go to `View > Show > Objects`.

The **Objects** dialog is a component of the [Default Layout](restoring_the_default_layout.md).

## Filtering

Object Tree has build in filtering and display mode switches.

![Filter](./img/object_tree_filter.png)

- *Filter* - quick filter to narrow down range displayed in the object tree. Updates the tree while you type. If you want to cancel the filtering then simply remove everything from this input box.
- Display modes switch:
    - `id` - show object IDs in the tree.
    - `n` - show object names in the tree.
    - `id[n]` - show each object in format `object_id [ object_name ]` in the tree.

## Testing Framework Mode

When a [Testing Framework](/Guide/Frameworks/frameworks) is currently open, the Tree View includes additional nodes.

### Test Cases Node

The node represents framework [test cases](/Guide/Frameworks/frameworks#test-cases).

#### Test Cases Root Context Menu

![Test Cases Root](img/object_tree_context_testcases.png)

- **Create Test Case** - Add new [test case](/Guide/Frameworks/frameworks#test-cases) to the root.
- **Import Test Case** - [Import Test Case](/Guide/Frameworks/frameworks#importing-test-cases) to the root.
- **Reload** - Reload all test cases (may be needed if test were synchronized with remote repository).

#### Test Cases Group Context Menu

![Test Cases Group](img/object_tree_context_testcasegroup.png)

- **Create Test Case** - Add new [test case](/Guide/Frameworks/frameworks#test-cases) to this group.
- **Import Test Case** - [Import Test Case](/Guide/Frameworks/frameworks#importing-test-cases) to this group.

#### Test Case Context Menu

![Test Case](img/object_tree_context_tc.png)

- **Play** - Execute this test case.
- **Record** - Start recorder for this test case.
- **Reload** - Re-read information about this test case.
- **Last Report** - Open last execution report for this test case (if any).
- **Clone** - Make a Clone of the test case
- **Move** - Move this Test Case into new or existing Folder (Re-Group)
- **Rename** - Change Alias name (folder name will stay the same)
- **Delete** - Remove a test case

#### Test Case Tags

When you right-click with the ++shift++ key pressed, the context menu will have two additional options:

![Test Case Tags](img/object_tree_tc_tags.png)

- **draft**: Toggles the `draft` state of the test case. This is useful for marking a test case as incomplete.
- **template**: Marks the test case as a template. Template test cases are not displayed in the [Spira Dashboard](/Guide/spira_dashboard_2). It is assumed that templates will be used to create test cases using the **Clone** functionality.

The `draft` and `template` states affect the display of the context menu:

Default:

![Test Case Default](img/object_tree_tc_default.png)

Draft:

![Test Case Draft](img/object_tree_tc_draft.png)

Template:

![Test Case Template](img/object_tree_tc_template.png)

#### Test Case Object Repository Context Menu

![Objects](img/object_tree_context_tc_objects.png)

- **Reload** - Re-read information from this Object Repository.
- **Object Manager** - Opens the [Object Manager](object_manager.md).

#### Test Case RVL Sheet Context Menu

![Sheet](img/object_tree_context_tc_sheet.png)

- **Play this Sheet** - Execute given RVL Sheet.

### User Functions and Variables

Rapise scans available shared JavaScript files and extracts information about global user defined [functions and variables](global_variables) into these nodes.

#### User Functions/Variables Context Menu

![Functions](img/object_tree_context_functions.png)

![Variables](img/object_tree_context_variables.png)

- **Reload** - Re-read information about known Functions/Variables.

### Shared Node

The node displays shared assets, including common JavaScript files (`*.js`), Object Repositories (`Objects.js`), Spreadsheets (`*.xlsx`, `*.xls`, `*.csv`), WebService definitions  (`*.rest`, `*.soap`) and other file types (`*.json`, `*.txt`, etc.).

#### Shared Node Context Menu

![Shared](img/object_tree_context_shared.png)

- **New JavaScript File...** - create and add a `.js` file.
- **New Spreadsheet...** - create and add a `.xlsx` file.
- **New JSON File...** - create and add a `.json` file.
- **New File...** - create and add other type of file.
- **Reload** - Update a shared files view.

### Modules / Page Objects Node

The node contains [Module / Page Objects](/Guide/Frameworks/pageobjects) defined in this testing framework.

#### Page Objects Context Menu

![Page Objects](img/object_tree_context_pageobjects.png)

- **Create Module / Page Object** - add new [Module / Page Object](/Guide/Frameworks/pageobjects).
- **Import Module / Page Object** - import existing [Module / Page Object](/Guide/Frameworks/pageobjects) from another testing framework.

![Page Object](img/object_tree_context_pageobject.png)

- **Reload** - refresh information about this module.
- **Delete** - remove this module.

![Page Object Action](img/object_tree_context_pageobject_action.png)

- **Invoke &lt;Some Action&gt;** - play this action alone.

## Single Test Mode

### Context Menu (root node)

Right click the **Object Tree** node to see:

![Object Tree Root](img/object_tree_context_singleroot.png)

- **Reload** - checks for new objects to display.
- **Object Manager** - run an [Object Manager](object_manager.md).

### Context Menu (window)

Right click the **Window** node to see:

![Object Window](img/object_tree_context_singlewindow.png)

- **Remove** remove window and all contained objects.

### Context Menu (object)

Right click on an object in the **Object Tree** dialog to see:

![object tree, context menu 2](img/object_tree_context_object.png)

- **Flash** opens the application/url where the object is located.  A frame will blink around the object to show you where it is on the page.
- **Re-Learn** will open up the [Recorder](recording.md), allowing you to re-learn the object. This is useful if the AUT has changed and the object definition will no longer correctly locate the object.
- **Rename** opens Rename dialog for the object.
- **Clone** makes a copy of the object definition and adds the cloned version into the tree. You can then make changes to the cloned copy.
- **Add Parameter** opens up a dialog box that lets you add a custom parameter to the learned object definition (stored in the `Objects.js` file).
- **Delete** simply removes the selected object from the tree.
