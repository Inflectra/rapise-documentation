# Mobile Settings Dialog

## Mobile Profiles

Use Mobile Settings Dialog to configure `Mobile Profiles`. A mobile profile specifies how to connect to a simulator or device via [Appium](http://appium.io/). You may configure as many profiles as you need to run your tests on different devices.

Mobile Settings Dialog box displays the list of mobile profiles that have been configured for use by Rapise and lets you create a new profile, modify a profile or make a new profile based on an existing one.

![mobile settings dialog](./img/mobile_settings_dialog1.png)

Global profiles are stored inside `c:\ProgramData\Inflectra\Rapise\MobileProfiles` folder.

## How to Open

You can open this dialog box from two places:

- From the [main Rapise menu](menu_and_toolbars.md#settings) `Settings > Mobile`.
- From the [Mobile Spy](object_spy_mobile.md) tool when you click on the `Edit Profiles` toolbar button.
- Using ellipsis button in the top right corner of Rapise window:
    
    ![](./img/mobile_settings_dialog_open_profiles_ellipsis.png){width="217px"}

## Menu Options

This dialog box has the following menu options:

- **Select Profile** - this dropdown list lets you select a different mobile profile to be displayed in the dialog.
- **Save** - this button will save the changes to the current mobile profile.
- **Test URL** - this button will test the Connection (URL) from Rapise to [Appium](http://appium.io/) (which is used to manage the devices).
- **Duplicate** - this button will create a new mobile profile based on the currently viewed one.
- **Create** - this button will create a new empty mobile profile that you can edit.
- **Rename** - this button will change the name of the current mobile profile being edited.
- **Delete** - this button will delete the currently displayed mobile profile. There is no undo, so be careful!

## Local Mobile Profiles

Rapise version 6.3+ enables creation of profiles local to a test. It allows storing profiles together with tests (inside SpiraTest or Git repository) and eliminates the need to configure profiles manually on each execution host.

To create a local profile just press `Duplicate` for one of global profiles and set `Local` checkbox before clicking `OK` button. Global and Local profile may have same name, in this case Local profile is used for execution.

![Creating Local Mobile Profile](./img/create_local_profile_mobile.png)

If a test contains local mobile profiles they can be seen in the dropdowns.

![Profile List for Playback](./img/select_local_profile_mobile.png){width="218px"}

![Profile List for Configuration](./img/profile_list_local_global_mobile.png){width="322px"}

Local profiles are stored inside `<Test Root>\Profiles\MobileProfiles` folder.

## Profile Options

### Connection

This section lets you enter the URL used to connect to the Appium server which hosts the mobile devices being tested. It is typically of the form:

```
http://server:4723/wd/hub
```

Where the port number used by Appium is 4723 by default and the /ed/hub suffix is added.

### Shared

This section contains common capabilities.

### Platform Specific

In this section set platform specific options (iOS and Android).

### Device Cloud

In addition, there are some settings, unique to running Appium mobile device tests using different device clouds.

#### BrowserStack

- **browserstack.appium_version** - use this capability to set the Appium version in your test scripts.
- **browserstack.key** - this needs to be populated with your Browserstack cloud access key.
- **browserstack.user** - this needs to be populated with your Browserstack username.
- **device** - specifies a particular mobile device for the test environment.
- **os_version** - use this capability to specify the OS version of the device.
- **realMobile** - use this flag to test on a physical mobile device.

#### Kobiton

- **accessKey** - this needs to be populated with your Kobiton cloud access key.
- **captureScreenshots** - this can be set to determine if you want to capture screenshots or not.
- **deviceGroup** - the default value is group device belonged to. Group device value could be either: ORGANIZATION or KOBITON. System will filter device in any existing group if you set deviceGroup is empty.
- **sessionDescription** - the description of the session (e.g. "This is an example for iOS web").
- **sessionName** - the name of the session being performed (e.g. "Automation test session on second device").
- **username** - this needs to be populated with your Kobiton username.

#### SeeTest

- **appBuildVersion** - used only when installing a cloud application. Specifies the application build version for installation.
- **applicationClearData** - clears the application data. When one of noReset or fullReset or both is set true, then applicationClearData will have no effect. 
- **appReleaseVersion** - used only when installing a cloud application. Specifies the application release version for installation.
- **deviceQuery** - it is a special type of capability which describes one or more capabilities in a single query like input.
- **dontGoHomeOnQuit** - the device  will remain in last left state even after ending the test.
- **installOnlyForUpdate** - install the application only if the desired version is different from the application version on the device (or if the app does not exist on the device). Otherwise, keep the application on the device.
- **instrumentApp** - instrument the application.
- **testName** - name of the test.

## See Also

- For details check out [Appium Desired Capabilities](http://appium.io/docs/en/writing-running-appium/caps/) page.