# Setting Up Selenium

This section describes the process for setting up Rapise to work with [Selenium](selenium_webdriver.md). Since Rapise is a Windows® application, you can use a single computer running Rapise to use the following web browsers:

- Google Chrome
- Microsoft Edge
- Internet Explorer
- Mozilla Firefox

However because Safari only runs on Apple Mac computers, you will need to use two computers (a Mac running Safari) and a PC running Rapise to test using the Apple Safari web browser:

![clip0002](./img/setting_up_selenium1.png)

## Configuring Selenium on a PC

Once you have installed Rapise on your local computer, you need to perform the following steps to configure each of the web browsers to use Selenium and Rapise:

### Rapise 7.3+

The process of configuring Rapise for interaction with browsers via Selenium WebDriver is now fully automatic.

Rapise downloads WebDriver executables (chromedriver.exe, geckodriver.exe, etc.) when needed, it automatically detects version of required driver executable both for standalone browsers and embedded ones (e.g. Chrome in Microsoft Teams, Skype, Microsoft Unified Service Desk, etc.). Every downloaded driver executable is saved with version information in its name. Rapise automatically switches executables based on the executed test.

Here is an example of

```
c:\ProgramData\Inflectra\Rapise\SeleniumDrivers 
```

folder on a machine with Rapise:

![SeleniumDrivers folder](./img/selenium_drivers_folder.png){width="474px"}
### Rapise 7.2

This method is applicable to all browsers except Safari.

1. Open [Selenium Settings Dialog](selenium_settings_dialog.md)
2. Select the profile you need
3. Configure profile settings
4. Press `Test` button on the toolbar

If Selenium driver for selected browser is not installed yet or it is not compatible with the current version of the browser then Rapise will ask you a question. If your answer is `Yes` then Rapise will download the driver executable and place it into

```
c:\ProgramData\Inflectra\Rapise\SeleniumDrivers 
```

This is the default folder where Rapise searches for Selenium drivers.

To run tests that use Selenium profiles on machines that do not have Selenium drivers downloaded you may add the following into `TestInit` function:

```javascript
WebDriver.DownloadDriver();
```

#### See Also

- [WebDriver.DownloadDriver](/Libraries/WebDriver/#downloaddriver)

### Legacy

#### Chrome

To use Selenium with Google Chrome, you will need to download the latest version of the Chrome Driver:

<http://chromedriver.storage.googleapis.com/index.html>

The list of versions at time of writing was:

![clip0007](./img/setting_up_selenium8.png)

When you click on the folder for the latest version you will see the various files that can be downloaded:

![clip0008](./img/setting_up_selenium9.png)

Download the **chromedriver\_win32.zip** to your local PC.

The file inside the zip archive is called **chromedriver.exe** and you need to copy it into the **C:\\Program Files
(x86)\\Inflectra\\Rapise\\Bin** folder (or wherever you installed Rapise).


#### Firefox

To use Selenium with Mozilla Firefox, you will need to download the latest version of the Gecko Driver:

<https://github.com/mozilla/geckodriver/releases>

Download **geckodriver-vx.xx.x-win32.zip**  to your local PC.

![Gecko](./img/setting_up_selenium_gecko.png)

The file inside the zip archive is called **geckodriver.exe** and you need to copy it into the **C:\\Program Files
(x86)\\Inflectra\\Rapise\\Bin** folder (or wherever you installed Rapise).

#### Microsoft Edge

To use Selenium with Microsoft Edge, you will need to download the latest version of the Edge Driver from the Microsoft website:

<https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/#downloads>

![selenium\_webdriver\_download\_edge](./img/setting_up_selenium4.png)

Create a new folder on your local PC called:

**C:\\Program Files (x86)\\Microsoft Web Driver**

Download the **MicrosoftWebDriver.exe** to this local folder you just created:

![selenium\_webdriver\_download\_edge2](./img/setting_up_selenium5.png)

#### Internet Explorer

To use Selenium with Internet Explorer, you will need to download the latest version of the Internet Explorer IE Driver:

<http://selenium-release.storage.googleapis.com/index.html>

The list of versions at time of writing was:

![clip0005](./img/setting_up_selenium6.png)

When you click on the folder for the latest version you will see the various files that can be downloaded:

![clip0006](./img/setting_up_selenium7.png)

Download the **IEDriverServer\_XXXX\_X.X.X.zip** to your local PC:

- IEDriverServer\_Win32\_X.X.X.zip (for 32-bit Internet Explorer)
- IEDriverServer\_x64\_X.X.X.zip (for 64-bit Internet Explorer)

The file inside the zip archive is called **IEDriverServer.exe** and you need to copy it into the **C:\\Program Files
(x86)\\Inflectra\\Rapise\\Bin** folder (or wherever you installed Rapise).

## Updating WebDriver DLLs in Rapise

If the version of WebDriver DLLs shipped with Rapise is not compatible with your browser you may update the corresponding DLLs. Just go to the main Selenium website: [http://www.seleniumhq.org/download/](http://www.seleniumhq.org/download/) and then download the **C# WebDriver Bindings**:

![clip0004](./img/setting_up_selenium3.png)

Download the **Selenium-dotnet-x.x.x.zip** file from the website. Proceed to unzip the archive and then look in the **net40** subfolder
and extract the following two files and copy into the **C:\\Program Files (x86)\\Inflectra\\Rapise\\Bin** folder (or wherever you installed Rapise):

- WebDriver.dll
- WebDriver.Support.dll

*Note: You will need to close Rapise before copying these files into the Bin folder.*

## Installing Selenium on a Mac

The reason for using Selenium running on a Mac is to be able to execute tests against the Safari web browser. So although you can also use the Mac to test with Firefox, Opera and Chrome, we do not recommend this as it adds needless complexity.

### Safari

The first thing you need to do is download the latest version of the Selenium server for Apple Mac computers:

<http://selenium-release.storage.googleapis.com/index.html>

The list of versions at time of writing was:

![clip0010](./img/setting_up_selenium6.png)

When you click on the folder for the latest version you will see the various files that can be downloaded:

![clip0011](./img/setting_up_selenium7.png)

Download the **selenium-server-standalone-X.XX.X.jar** to the Mac.

Run this Java application by double clicking the downloaded .JAR file in Finder. This will startup the Selenium server.

*Note: You will need to have the Java (ideally the latest version) installed on the Mac first.*

You are now ready to test web applications running on Safari. The final step is to tell Rapise where it can find that instance of Selenium. To do that, open up Rapise (on your PC) and click on `Settings > Selenium` and then choose **Safari** profile:

![clip0014](./img/setting_up_selenium14.png)

Now you need to change the **Uri** field to point to your Mac. The format of the URI will be:

- http://&lt;IP or DNS name of MAC computer&gt;:4444/wd/hub

(for example it could be `http://test-mac01.local:4444/wd/hub` or `http://192.168.0.52:4444/wd/hub`)

### See Also
- [Testing with WebDriver in Safari](https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari)