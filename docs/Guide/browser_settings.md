# Browser Settings Dialog

## Purpose

This dialog box displays the list of native (not using [Selenium](selenium_settings_dialog.md)) web browsers that have been configured for use by Rapise and lets you create a new browser profile, modify a profile or make a new profile based on an existing one.

This feature is useful if you have several different versions of a web browser on the same machine (e.g. Firefox Latest vs. Firefox ESR, or different versions of Chrome portable) or if you want to be able to run a browser with different command-line options (e.g. Chrome normal, Chrome incognito mode, Chrome with specific screen size)

![browser_settings](./img/browser_settings1.png)

## How to Open

You can open this dialog box using main menu `Settings > Browser` or by pressing `...` button in the top right corner of Rapise window.

![browser_settings_button](./img/browser_settings2.png)

## Toolbar Controls

This dialog box has the following toolbar controls:

- **Select Profile** - This dropdown list lets you select a different web browser profile to be displayed in the dialog.
- **Test** - This button will test the connection from Rapise to the specified browser
- **Duplicate** - This button will create a new browser profile based on the currently viewed one.
- **Create** - This button will create a new empty browser profile that you can edit.
- **Rename** - This button will change the name of the current browser profile being edited.
- **Delete** - This button will delete the currently displayed browser profile. There is no undo, so be careful!

## Profile Options

This section has various settings, each of which are described below:

- **Browser Library** - The type of browser being used, currently can be:
    - Internet Explorer HTML
    - Chrome HTML
    - Firefox HTML
- **Browser Path** - The path to the location of the web browser executable (e.g. chrome.exe, iexplore.exe, firefox.exe) on the computer
- **CMD Line Parameters** - Any command-line parameters to pass to the web browser (e.g. -extoff for IE safe mode)
- **Default Click Mode** -Species the default 'click mode' for tests using this web browser profile
    - auto - This tries to locate an element on the screen, moves the mouse over it and then sends the appropriate DOM 'click' event (the default)
    - event - Just sends the DOM click event to the element with no prior mouse-move
    - click - Simulates an actual click on the element rather than sending a DOM click event
