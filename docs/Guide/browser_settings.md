# Browser Settings Dialog

## Web Browser Profile

!!! important
    Since Rapise 7.3 it is recommended to use [Selenium WebDriver](selenium_webdriver.md) based profiles for all web tests. Web browser profiles are considered outdated and should only be used for legacy tests and backward compatibility.

Use Browser Settings Dialog to configure `Web Browser Profiles`. A browser profile specifies

- type of a browser (**IE**, **Chrome**, **Firefox**),
- browser launch parameters
- and other profile options.
  
Rapise uses currently [active browser profile](cross_browser_testing.md) to do recording and playback.

!!! note
    You may want to create additional browser profiles if you have several different versions of a web browser on the same machine (e.g. Firefox Latest vs. Firefox ESR, or different versions of Chrome portable) or if you want to be able to run a browser with different command-line options (e.g. Chrome normal, Chrome incognito mode, Chrome with specific screen size).

Browser Settings Dialog box displays the list of native (not using [Selenium](selenium_settings_dialog.md)) web browsers that have been configured for use by Rapise and lets you create a new browser profile, modify a profile or make a new profile based on an existing one.

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

## Local Browser Profiles

Rapise version 6.3+ enables creation of profiles local to a test. It allows storing profiles together with tests (inside SpiraTest or Git repository) and eliminates the need to configure profiles manually on each execution host.

To create a local profile just press Duplicate for one of global profiles and set Local checkbox before clicking OK button. Global and Local profile may have same name, in this case Local profile is used for execution.

![Creating Local Browser Profile](./img/create_local_profile.png)

If a test contains local browser profiles they can be seen in the dropdowns.

![Profile List for Playback](./img/select_local_profile.png)

![Profile List for Configuration](./img/profile_list_local_global.png)

Local profiles are stored inside `<Test Root>\Profiles\BrowserProfiles` and `<Test Root>\Profiles\SeleniumProfiles` folders.

