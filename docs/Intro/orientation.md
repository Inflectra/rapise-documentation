# Know Your Way Around

## Basic Navigation

![Rapise Screenshot](img/orientation_navigation.png){: width="1024" }

??? abstract "1 - Main Menu"
    Use [main menu](/Guide/menu_and_toolbars/) to create new tests, change [test settings](/Guide/settings_dialog/) and [global options](/Guide/options_dialog/).
    ![Menu](img/orientation_menu.png)

??? abstract "2 - Main Toolbar"
    Use the [main toolbar](/Guide/menu_and_toolbars/#main-toolbar) to start [recording](/Guide/object_types/) and [playback](/Guide/playback/) and to quickly switch between test components.
    ![Toolbar](img/orientation_toolbar.png)

    - **Main** opens main entry point of a test (`Main.rvl.xlsx` or `Main.js`).
    - **User** opens `User.js` - place for custom JavaScript functions.
    - **RVL** opens [RVL](/Guide/visual_language/) spreadsheet.

??? abstract "3 - RVL Columns"
    Most used [RVL columns](/RVL/Columns/) are `Object`, `Action` and `ParamValue`. Use them to modify and create new test steps.
    ![RVL Columns](img/orientation_rvl_columns.png)

??? abstract "4 - Object in the Object Tree"
    The [Object Tree](/Guide/object_tree/) contains [objects](/Libraries/libraries/) captured during [recording](/Guide/object_types/) embedded into other assets making contents of the [Testing Framework](/Guide/Frameworks/frameworks).
    ![Object Tree](img/orientation_treeobj.png){: width="300" }

??? abstract "5 - Object Tree and Files View"
    The [Object Tree](/Guide/object_tree/) displays the [testing framework](../Guide/Frameworks/frameworks.md) objects. Switch to [Files View](/Guide/test_files_dialog/) to navigate through the files of the framework.
    ![Objects and Files](img/orientation_objtree_and_files.png){: width="300" }

??? abstract "6 - Object Properties"
    [This pane](/Guide/properties/) displays the properties of a selected object.
    ![Properties](img/orientation_properties.png){: width="300" }

??? abstract "7 - Output View"
    [Output view](/Guide/output_view/) is a collection of tabs to display test execution log, JavaScript warnings and errors and search results.
    ![Output View](img/orientation_output_view.png)

??? abstract "8 - Profile Dropdown"
    The dropdown allows to switch [Browser](/Guide/browser_settings/), [Selenium](/Guide/selenium_settings_dialog/) or [Mobile](/Guide/mobile_settings_dialog/) profile.
    ![Web Profiles Dropdown](img/orientation_profile_dropdown.png)

## RVL Popup Menu

![RVL Popup Menu](img/orientation_rvl_popup_menu.png)

The popup menu is most frequently used to

??? tip "Work with an object"
    - Find an object in the [Object Tree](/Guide/object_tree/)
    - [Flash](/Manuals/kb/#kb375-how-to-check-that-rapise-can-find-an-object-on-screen) the object - find and highlight it in the application.
    - Show locator property of the object. E.g. XPath for Web tests.
    - Rename the object and automatically update all references in RVL.

??? tip "Play specific steps of a test"
    - **Play This Sheet** - execute actions from the active sheet.
    - **Play Selection** - execute selected range of actions only. Useful for tweaking tricky actions and checking the result immediately.
    - **Play from Here** - start execution at selected line and proceed until the end. Useful to continue script from the point where it stopped.

??? tip "Edit Rows"
    - Insert/delete a row.
    - Copy/paste rows

See full list of menu items [here](/Guide/rvl_editor/#context-menu).

## Object Popup Menu

The popup menu us most frequently used to [Flash](/Manuals/kb/#kb375-how-to-check-that-rapise-can-find-an-object-on-screen) and [Re-Learn](/Manuals/kb/#kb428-how-to-relearn-an-object) an object.


![RVL Object Popup Menu](img/orientation_object_popup_menu.png){: width="300"}

See full list of menu items [here](/Guide/object_tree/#context-menu-object).

## See Also

- [Main Menu and Toolbars](/Guide/menu_and_toolbars/)