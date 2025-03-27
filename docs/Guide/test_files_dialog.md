# Test Files View

![Overview](./img/test_files_dialog_overview.png)

## Purpose

The **Test Files** dialog allows you to navigate and alter the Test hierarchy, including the following:

* The main JavaScript script files (`*.js`)
* RVL Files (`*.rvl.xlsx`)
* The report files (`*.trp`)
* Images captured during execution using [Checkpoints](checkpoints.md)
* REST web services (`*.rest`)
* SOAP web services (`*.soap`)
* Analog recording files (`*.arf`)
* Excel spreadsheets (`*.xls` and `*.xlsx`)
* Applications to launch (`*.exe` or `*.bat`)
* Other data files (`*.txt`)

## How to Open

Click `View > Show > Test Files` menu.

## Root Node

Framework root (for [framework](./Frameworks/frameworks.md) mode) or test root (for single test mode).

### Show Files and Folders

Root node features special button that facilitates adding files from disk:

![Show Files Button](./img/test_files_dialog_show_files.png)

See [Adding Files for Test Folder](#adding-files-from-test-folder).

### Root Context Menu

![Root Menu](./img/test_files_dialog_context_root.png)

* **Reload**: Refreshes objects and test cases.
* ... same as context menu for [Folder Node](#folder-context-menu)
* **Rebuild Framework Metadata...**: Forces the regeneration of metadata for the entire framework.

## Filtering

Object Tree has build in filtering and display mode switches.

![Filter](img/test_files_dialog_filter.png){width="241px"}

- *Filter* - quick filter to narrow down range displayed in the object tree. Updates the tree while you type. If you want to cancel the filtering then simply remove everything from this input box or press `X` icon or press ++esc++ on your keyboard.

## Folder Node

Shows contents of the [Folder or Filter Group](#folders-and-filter-groups).

### Folder Context Menu

Right click on a folder to see:

![Folder Menu](img/test_files_dialog_context_folder.png)

* **Reload**: Refresh group contents. Use it for [filter groups](../test_files_dialog/#filtergroup)  ('IsFilterGroup' is set to 'True' in group properties), e.g. for Report group.
* **Add File(s)**: Add an existing file to the test.
* **Create**
    * **Text File**: Create `.txt` file and add it to the test.
    * **JavaScript File**: Create `.js` file and add it to the test.
    * **JSON File**: Create `.json` file and add it to the test.
    * **Spreadsheet**: Create new `.xlsx` or `.xls` file and add it to the test.
    * **File**: Aks for name and extension and create an empty file.
    * **WebAppProfile.json**: Add new `WebAppProfile.json` to this test project.
    * **User Lib**: Create shared user library for this test and sub-tests.
* **New Group**:  Create a logical grouping of files in the test. This will **not** add a folder to the file system.
* **New Folder**:  Create a real folder in the test. This will add a folder to the file system.
* **New Sub-Test**: Launch Create Sub-Test dialog.
* **Add All Files**: In [Show Files and Folders](#show-files-and-folders) mode, you may add all external files at once using this menu items.
* **Remove from Test**: Remove the selected grouping from the test.  This does **not** delete included files from your hard disk.
* **Remove All from Disk**: Remove all files included into the selected grouping from your hard disk.

## File Node

Shows all files actually added to the test / framework.

### Context Menu (File)

Right click on a file to see:

![File Menu](./img/test_files_dialog_context_file.png)

* **Open**: Open the file in Rapise.
* **Open as Spreadsheet**: Open this file using built in [Spreadsheet editor](./spreadsheet_editor.md). May be used to open `.rvl.xlsx` in spreadsheet editor if you, for example, need to add columns.
* **Open as Text**: Open this file using built in [Text Editor](source_editor.md). May be used to open `.csv` in source editor if you, for example, need to add columns.
* **Open Externally**: Open the file using associated program. E.g. if a Notepad is registered in Windows to open TXT files, then TXT file will be opened by Notepad.
* **Reveal in Explorer**: Open Windows File Explorer and show this file in it.
* **Remove from Test**: Remove the file from your test.  This does **not** delete the file from your hard disk.
* **Remove from Disk**: Remove the file from your test and hard drive.
* **Create Data Object**: Only available for `.xls` and `.xlsx` files. Create Spreadsheet Data Object in the object tree.

## RVL Sheet

`rvl.xlsx` file node automatically expands to show available sheets and their contents.

### Context Menu for RVL Sheet

![RVL Sheet Menu](./img/test_files_dialog_context_rvl_sheet.png)

* **Play this Sheet**: execute given RVL sheet.

## Sub-Test Node

Sub-test nodes represent various types of sub-tests such as Test Cases, Page Objects, and other supplementary sub-tests.

### Context Menu for Sub-Test

Right click on a sub-test to see:

![Sub-Test Menu](./img/test_files_dialog_context_subtest.png)

See [menu item descriptions](tests_and_sub_tests.md#sub-test-context-menu)

## Folders and Filter Groups

A **Group** is a virtual folder that may or may not have a physical representation on disk. **Filter groups** retrieve their contents from disk based on a specified path and wildcard. A **RealFolder** is an actual folder that has the same name as the group and its path matches the **FilterPath** of the group.

### Folder Properties

You can configure a filter group or real folder by editing the group properties:

![Folder Properties](./img/test_files_dialog_folder_properties.png)

* **FilterPath**: The root path used to locate files based on the wildcard (only valid if **IsFilterGroup** is `True` or if it is a **RealFolder**).
* **FilterWildcard**: The wildcard filter used to match files (only valid if **IsFilterGroup** is `True`).
* **IsFilterGroup**: Set to `True` if the directory should display a list of files that match the **FilterWildcard** within the **FilterPath**, or if it is a **RealFolder**.
* **Name**: The name of the group/folder.
* **RealFolder**: Represents a physical folder that actually exists on the disk.


## Adding Files from Test Folder

![Filter Group](./img/test_files_dialog5.png)

1. **Show files in folder**: This option enables a combined view where you can see both the files and folders inside the test folder, including those that have already been added to the test project and those that have not yet been added.

2. If a folder has not been added to the project, a `+` icon is displayed. Clicking on it adds a filter group for that folder.

3. If a file has not been added to the project, a `+` icon is displayed. Clicking on it adds the file to the test project.

## See Also

* [Data Driven Testing](data_driven_testing.md)
* [KB 371](https://www.inflectra.com/support/knowledgebase/kb371.aspx) Sample Spira-Friendly Framework with Multiple RVLs and Common Library.
* [KB 363](https://www.inflectra.com/Support/KnowledgeBase/KB363.aspx) How to define a profile for Web Application in Rapise.
