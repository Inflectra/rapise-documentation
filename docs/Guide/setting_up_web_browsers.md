# Setting Up Web Browsers

Before you can use Rapise with certain web browsers to perform web testing, you will need to install plugins to enable communication between Rapise and these browsers.

!!! important
    Since Rapise 7.3, it is recommended to use [Selenium WebDriver](selenium_webdriver.md)-based browser connectors for all web tests. Native Rapise plugins are considered outdated and should only be used for legacy tests and backward compatibility.

## Internet Explorer

Unlike other web browsers, Internet Explorer requires no configuration steps. Once Rapise is installed, it is ready to connect to Internet Explorer for recording, playback, and learning without any further configuration.

## Firefox

To test web applications using the Firefox web browser, you will need to install a Firefox extension that allows Rapise to interact with it:

1. Click the following link to open the extension page in a new tab: <a href="https://addons.mozilla.org/en-US/firefox/addon/rapisefirefox/" target="_blank">https://addons.mozilla.org/en-US/firefox/addon/rapisefirefox/</a>

2. Click the `Add to Firefox` button to install the extension into your Firefox instance.

    ![add to firefox](./img/setting_up_web_browsers2.png)

3. Once installation is complete, restart Firefox.

4. Firefox is then ready for automated testing with Rapise.

***Note:*** Rapise requires localhost port 4247 to be accessible for correct operation. Please ensure this port is unblocked in your firewall.

## Firefox For Rapise 6.5

For Rapise 6.5 and higher, you must update the RapiseFirefox extension. Simply click the link below to update the extension to the latest version.

<a href="https://addons.mozilla.org/en-US/firefox/addon/rapisefirefox/" target="_blank">https://addons.mozilla.org/en-US/firefox/addon/rapisefirefox/</a>

## Chrome

!!! important
    The Chrome extension and `Chrome HTML` browser profile have been deprecated. This is because [Google is going to remove MV2 extensions from the store <sup>:fontawesome-solid-external-link-alt:{.small-icon}</sup>](https://developer.chrome.com/docs/extensions/mv3/mv2-sunset/){target="_blank"}. At Inflectra, we decided not to migrate to the MV3 extension format because it is unlikely possible due to security changes (the primary reason for the appearance of MV3). To enable Chrome-based testing, we implemented a [Selenium-Based Recorder <sup>:fontawesome-solid-external-link-alt:{.small-icon}</sup>](https://www.inflectra.com/Ideas/Entry/spotlight-rapise-selenium-based-recording-chrome-1348.aspx){target="_blank"}. Therefore, please consider switching to the [Selenium - Chrome](/Guide/selenium_webdriver/#recording-using-selenium) browser profile.

To test web applications using the Google Chrome web browser, you will need to install a Chrome extension that allows Rapise to interact with it:

1. Click the following link to open the extension page in a new tab: <a href="https://chrome.google.com/webstore/detail/rapisechromeextension/ibngcigigdlhaekbaknfbpcbgilmhahc" target="_blank">https://chrome.google.com/webstore/detail/rapisechromeextension/ibngcigigdlhaekbaknfbpcbgilmhahc</a>

    ![add to chrome](./img/setting_up_web_browsers6.png)

2. Click the ‘Add to Chrome’ button to install the extension into your Chrome instance.

3. It is recommended to enable the **Allow access to file URLs** and **Allow in incognito** checkboxes to ensure Rapise can also access web pages opened from local folders (using the `file://` protocol) and in incognito Chrome windows when running automated browser tests. To do this, right-click this link <a href="chrome://extensions/?id=ibngcigigdlhaekbaknfbpcbgilmhahc" target="_blank">chrome://extensions/?id=ibngcigigdlhaekbaknfbpcbgilmhahc</a>, choose `Copy link address`, and then paste the value into a new Chrome tab:
  
    ![checkboxes](./img/setting_up_web_browsers7.png)

4. Once installation is complete, restart Chrome.

## Chrome For Rapise 6.5

For Rapise 6.5 and higher, you must update the RapiseChrome extension. Simply click the link below to update the extension to the latest version.

<a href="https://chrome.google.com/webstore/detail/rapisechromeextension/ibngcigigdlhaekbaknfbpcbgilmhahc" target="_blank">https://chrome.google.com/webstore/detail/rapisechromeextension/ibngcigigdlhaekbaknfbpcbgilmhahc</a>

## Chromium Applications

The procedure for installing the Rapise extension differs when testing Chromium applications. Follow these recommended steps to enable automation for such applications:

1. Refer to [http://www.chromium.org/administrators/pre-installed-extensions](http://www.chromium.org/administrators/pre-installed-extensions) for instructions on how to install an extension for a Chromium application. It is easy to obtain the ID of the current version of the Chrome Extension. Install it in a regular Chrome browser by following the instructions above, and then check the information in Chrome by navigating to this URL: [chrome://settings/extensionSettings](chrome://settings/extensionSettings).

2. In the Rapise **Select an Application for Record** dialog, choose the **Chrome HTML** library when recording tests, rather than **Auto**. Rapise's library auto-detection logic may fail because the executable name is not `chrome.exe`.

3. After modifying the Windows registry as described below, Rapise should be able to record and learn the application correctly.

    HKEY_LOCAL_MACHINE\SOFTWARE\Google\Chrome\Extensions\malnpehoofemabajdignefgdoppndaeb\path\
    
    TYPE: REG_SZ
    
    VALUE: "C:\path\to\your\RapiseChrome.crx"

    HKEY_LOCAL_MACHINE\SOFTWARE\Google\Chrome\Extensions\malnpehoofemabajdignefgdoppndaeb\version\
    
    TYPE: REG_SZ
    
    VALUE: "1.6.0"

4. For correct playback, you need to add the following line at the beginning of your `User.js` file:

```javascript
    g_browserExecutablePath='C:\\the\\path\\to\\chromium-based\\app.exe';
```

With this change, the recorded test should play correctly.

## Chrome Frame Applications

The following configuration enables Rapise to test Chrome Frame applications:

1. A 'packed' copy of the RapiseChrome.crx extension is provided with the Rapise installation. It can be found in the 
   
    `C:\\Program Files (x86)\\Inflectra\\Rapise\\Extensions\\Chrome`

    installation folder.

2. Add the following data to the Windows registry:

    [HKEY_CURRENT_USER\Software\Google\ChromeFrame]

    "EnableGCFProtocol"=dword:00000001

    "IsDefaultRenderer"=dword:00000001

    "AllowUnsafeURLs"=dword:00000001

    [HKEY_LOCAL_MACHINE\SOFTWARE\Google\Chrome\Extensions\malnpehoofemabajdignefgdoppndaeb]

    "path"="c:\\\\path\\\\to\\\\RapiseChrome.crx"

    "version"="1.6.0"

3. In the Rapise **Select Application to Record** dialog box, explicitly choose the **Chrome HTML** library instead of **Auto**.

4. Record the test script as you normally would. Note that no Chrome browser or Chrome applications should be running when Internet Explorer with Chrome Frame is started and recording is performed.

You will need to make some changes to the recorded test to ensure correct playback. Insert this line at the beginning of the `User.js` file:

```javascript
g_browserExecutablePath="iexplore.exe";
```

Ensure the Internet Explorer browser executable is available at the specified path on your PC, and correct it if necessary.

## Edge

To test web applications using the Microsoft Edge web browser, you will need to install an Edge extension that allows Rapise to interact with it:

1. Right-click the following URL and choose `Open link in new tab` to open the extension page: <a href="https://microsoftedge.microsoft.com/addons/detail/rapisemsedgeextension/ohghmiancfhdndeciiojhgalcfhllblh" target="_blank">https://microsoftedge.microsoft.com/addons/detail/rapisemsedgeextension/ohghmiancfhdndeciiojhgalcfhllblh</a>

2. Click the ‘Get’ button to install the extension into your Edge instance.

3. It is recommended to enable the **Allow in InPrivate** and **Allow access to file URLs** checkboxes to ensure Rapise can also access web pages opened from local folders (using the `file://` protocol) and in InPrivate Edge windows when running automated browser tests. To do this, right-click this link <a href="edge://extensions/?id=ohghmiancfhdndeciiojhgalcfhllblh" target="_blank">edge://extensions/?id=ohghmiancfhdndeciiojhgalcfhllblh</a>, choose `Copy link`, and then paste the value into a new Edge tab.

4. Once installation is complete, restart Edge.

## Using Other Browsers with Rapise

To test your applications using **other web browsers (such as Safari or Opera)**, you can use the [Selenium WebDriver](selenium_webdriver.md) libraries provided with Rapise. For instructions on how to [set up the Selenium web browser libraries](setting_up_selenium.md), please refer to [this topic](setting_up_selenium.md).