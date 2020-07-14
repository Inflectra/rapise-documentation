# Know Your Way Around

## Basic Navigation

??? abstract "1 - Main Menu"
    Use [main menu](/Guide/menu_and_toolbars/) to create new tests, change [test settings](/Guide/settings_dialog/) and [global options](/Guide/options_dialog/).
    
    ![Menu](/Guide/img/know_your_way_menu.png)
    
??? abstract "2 - Main Toolbar"
    Use the [main toolbar](/Guide/menu_and_toolbars/#main-toolbar) to start [recording](/Guide/object_types/) and [playback](/Guide/playback/) and to quickly switch between test components.
    
    - **Test** opens `Main.js` - entry point of a test.
    - **User** opens `User.js` - place for custom JavaScript functions.
    - **RVL** opens [RVL](/Guide/visual_language/) spreadsheet.
    
    ![Menu](/Guide/img/know_your_way_toolbar.png)
    
??? abstract "3 - RVL Columns"
    Most used [RVL columns](/RVL/Columns/) are `Object`, `Action` and `ParamValue`. Use them to modify and create new test steps.
    
    ![Menu](/Guide/img/know_your_way_rvl_columns.png)   
    
??? abstract "4 - Object in the Object Tree"
    The [Object Tree](/Guide/object_tree/) contains [objects](/Libraries/libraries/) captured during [recording](/Guide/object_types/) of a test.
    
    ![Menu](/Guide/img/know_your_way_treeobj.png){: width="230px" }
    
??? abstract "5 - Object Tree and Files View"
    The [Object Tree](/Guide/object_tree/) displays the repository of objects. Switch to [Files View](/Guide/test_files_dialog/) to navigate through the files of the test.
    
    ![Menu](/Guide/img/know_your_way_objtree_and_files.png){: width="230px" }
    
??? abstract "6 - Object Properties"
    [This pane](/Guide/properties/) displays the properties of a selected object.

    ![Menu](/Guide/img/know_your_way_properties.png){: width="230px" }

??? abstract "7 - Output View"
    [Output view](/Guide/output_view/) is a collection of tabs to display test execution log, JavaScript warnings and errors and search results.
    
    ![Menu](/Guide/img/know_your_way_output_view.png)
    
??? abstract "8 - Profile Dropdown"
    The dropdown allows to switch [Browser](/Guide/browser_settings/), [Selenium](/Guide/selenium_settings_dialog/) or [Mobile](/Guide/mobile_settings_dialog/) profile.

    ![Menu](/Guide/img/know_your_way_profile_dropdown.png)
    
<img alt="Rapise Screenshot" src="/Guide/img/know_your_way_basic_navigation.png" width="1024"/>

    
## RVL Popup Menu

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

<img alt="RVL Popup Menu" src="/Guide/img/know_your_way_rvl_popup_menu.png" width="763"/>

## Object Popup Menu

The popup menu us most frequently used to [Flash](/Manuals/kb/#kb375-how-to-check-that-rapise-can-find-an-object-on-screen) and [Re-Learn](/Manuals/kb/#kb428-how-to-relearn-an-object) an object.

<img alt="RVL Popup Menu" src="/Guide/img/know_your_way_object_popup_menu.png" width="212"/>

See full list of menu items [here](/Guide/object_tree/#context-menu-object).