# Rapise Installation Guide

## Introduction

Rapise® is a next generation software test automation tool that leverages the power of open architecture to improve application quality and reduce time to market.

This installation guide outlines how to setup a working installation of Rapise including the installation of any dependencies and prerequisites. It also provides information on obtaining an evaluation or production license key from Inflectra so that you can use the software.

It assumes a basic understanding of how to setup and administer a Windows® workstation, and also assumes that you have access to a valid Administrator level account that can install software.

For information on how to use the features of Rapise please refer to either the [Rapise Quick Start Guide](/Guide/tutorial_record_and_playback/) or the [Rapise User's Guide](/Guide/overview/) instead.

## Installing Rapise

This section outlines how to prepare your system for installation of Rapise, and how to actually install the software using the provided
installation package.

The first sub-section will outline what hardware and software configurations are supported and the exact installation sequence for different versions of Microsoft® Windows®. The second sub-section will explain how to load the Rapise software onto the computer, and discuss common problems and solutions.

The minimum hardware and software requirements for running the Rapise are:

| **Requirement**       | **Minimum Specification**                      |
| --------------------- | ---------------------------------------------- |
| **Processor:**        | Intel® or AMD® x86 or x64 compatible processor |
| **Memory:**           | 2 GB, 4 GB recommended                         |
| **Disk Space:**       | 5 GB                                           |
| **Display:**          | HD (1280 x 720)                                |
| **Operating System:** | Microsoft Windows 8.1 (x86 and x64)            |
|                       | Microsoft Windows 10                           |
|                       | Microsoft Windows Server 2012 R1 / R2          |
|                       | Microsoft Windows Server 2016                  |
|                       | Microsoft Windows Server 2019                  |
| **Web Browsers:**     | Internet Explorer 8.0+                         |
|                       | Mozilla Firefox                                |
|                       | Google Chrome                                  |
|                       | Microsoft Edge                                 |
|                       | Apple Safari                                   |
| **Other Components:** | .NET Framework 4.7.2                           |

### System Prerequisites

Assuming that you have already installed the appropriate version of Microsoft Windows onto your computer (or that has been pre-installed for you), you need to then make sure that the various prerequisites have been correctly added to your installation before trying to install Rapise. The Rapise installer will check to ensure that the various prerequisites are in place, and will install any missing perquisites (apart from the Microsoft .NET Framework) automatically.

####  Microsoft .NET 4.7.2

On Windows 10 and Windows 2016 Server installations (with all latest updates) Microsoft .NET Framework meets minimum requirements, whereas on earlier operating systems, you might need to manually add the .NET 4.7.2 components to the factory configuration.

To install the .NET Framework, launch Internet Explorer and enter the URL: <https://dotnet.microsoft.com/en-us/download/dotnet-framework/net472>. From this page there will be links to download and install the appropriate version of the .NET Framework. 

### Remove any Previous Versions

Before installing the current version of Rapise, we recommend first uninstalling any previous versions of Rapise to ensure you have a clean installation. To do this, go to `Start > Control Panel > Programs and Features`:

![](./img/Rapise_Installation_Guide4.png)

The click the "Rapise" entry and confirm that you want to install the existing installed version.

### Installing the Software

Now that all the prerequisites have been correctly installed, you are now ready to install Rapise onto your system. To perform the
installation, you will need the installation package downloaded from the Inflectra® website.

To start the installation, double-click on the Rapise installation package (it will have a filename of the form Rapise-vX.X.X.X.exe), and the Windows Installer will display the following dialog box:

![](./img/Rapise_Installation_Guide5.png)

The first screen in the installation wizard outlines the Inflectra End User License Agreement (EULA). Please read this carefully as it describes the legal contract between you -- the user of the software -- and Inflectra® Corporation, the developer and publisher. Once you have read the agreement and understood your rights and obligations, select the checkbox marked "I agree to the license terms and conditions" and click the `Install` button.

This will begin the process of installing Rapise onto your system. If you are installing Rapise onto Windows Vista or newer, then you may be prompted by the Windows User Access Control (UAC) security system to confirm that you want to install a new piece of software:

![](./img/Rapise_Installation_Guide6.png)

Click the option that confirms you want to proceed with the install.

![](./img/Rapise_Installation_Guide5.png)

The installer will then display a progress bar that gradually fills as the installation proceeds. Once the installation is complete, the
following message will be displayed:

![](./img/Rapise_Installation_Guide7.png)

Congratulations! You have successfully installed Rapise onto your system.

You should now have a Rapise shortcut icon added to your Windows Desktop and if you click on **Start > Program Files > Inflectra > Rapise**, you should see the new Rapise program group:

![windows menu](./img/Rapise_Installation_Guide8.png)

## License

As we announced back in June 2021, there have been plans to provide our Rapise test automation platform with a new floating license option, in addition to the fixed licensing system that we've had since the launch of the product. Well the big day has arrived - we are pleased to announce that you can now purchase Rapise floating licenses as part of your existing Spira subscription, with both monthly and annual options.

### Floating License

#### How to Purchase

Unlike fixed licenses which are purchased from our website as a standalone purchase, Rapise uses our Spira test management platform to manage its floating licenses. So you will need to first login to [Customer Portal](https://www.inflectra.com/CustomerArea/) on our website. From here, you need to locate your SpiraTest, SpiraTeam or SpiraPlan cloud subscription and click the **Customize** button:

![subscriptions](./img/my_cloud_subscriptions.png)

(If you are not using the cloud version of Spira, then unfortunately at this time you cannot use floating licenses)

Once you click on the Customize button you can choose the number of Rapise floating licenses you want to purchase:

![purchase](./img/purchase_addons.png)

If you have a monthly Spira subscription, the Rapise floating licenses will also be charged monthly, whereas if you have an annual Spira subscription, then the Rapise floating licenses will similarly be part of the annual renewal. Once you have completed the purchase of the floating licenses, you will see a new Rapise subscription add-on in your Customer Area homepage:

![pending](./img/license_pending.png)

It will be initially in the `Pending` status while our cloud servers complete the task of updating your Spira instance with the number of Rapise licenses. Once that task is completed, you will get an email letting you know, and the status will change to `Active`.

![active](./img/license_active.png)

#### How to Manage

Once the subscription add-on has been provisioned, you will see a new menu entry in the [System Administration: Integration](https://spiradoc.inflectra.com/Spira-Administration-Guide/System-Integration/) section of your Spira instance:

![manage](./img/rapise_floating_licenses.png)

When you click on this link you will see how many Rapise floating licenses are available as well as how many are currently in use (initially the list will be empty):

![administration](./img/floating_license_administration.png)

You can now connect Rapise to your Spira instance to use the new floating licenses.

#### How to Configure

Now that you have floating licenses available, when you connect Rapise to Spira as you would normally to start writing tests:

![configuration](./img/spira_connection_settings.png)

Rapise automatically requests a floating license from Spira and will use that license until Rapise is closed or an administrator clicks the **End Session** button in Spira:

![end session](./img/end_session.png)

The advantage of the floating licenses is that you can have all your computers install Rapise and they will only use a license when Rapise is active, vs. having to purchase a fixed license for a machine regardless of whether that machine is actually using the license. In addition, it lets you purchase Rapise licenses monthly bundled with your existing Spira subscription.

### Fixed License

Once you have successfully installed Rapise, you will need to activate it with a license key (either a temporary evaluation key or a permanent production key). This section describes the process for activating your copy of Rapise as well as how to perform updates to the license key and potentially move it to another computer.

#### Getting Your Activation Code

When you first launch Rapise after installation, it will display the following dialog box:

![](./img/Rapise_Installation_Guide9.png)

You should now enter the alphanumeric activation code from the Customer Area of the Inflectra website (the same page that you downloaded the installation package from). It will be displayed in the "My Licenses" section of the webpage. An example page is shown below:

![](./img/Rapise_Installation_Guide10.png)

There are two kinds of activation code:

- Evaluation Activation Codes -- these start with the letters "DMO"
- Production Activation Codes -- these start with the letters "SDM"

You should enter the appropriate activation code into the Rapise activation wizard and choose the option to either activate online or
offline. If you are connected to the Internet, online activation is easier. If you are not connected to the Internet (e.g. working in a
secure environment), then you will need to use the offline activation option.

The following sections will explain how each of the options work:

#### Activating Online

To use online activation, make sure you are connected to the Internet, enter the activation code, choose "Activate Online" and click the
`Next` button:

![](./img/Rapise_Installation_Guide11.png)

The activation system will contact our activation server, process the activation code and activate the license. The application will start automatically and if you visit the Customer Area of our website, you will see that it is listed as activated, with a license key displayed:

![](./img/Rapise_Installation_Guide12.png)

#### Activating Offline

To use offline activation, enter the activation code, choose "Activate
Offline" and click the \<Next\> button:

![](./img/Rapise_Installation_Guide13.png)

This will bring up the Offline Activation screen:

![](./img/Rapise_Installation_Guide14.png)

Click on the `Save` button to save the Rapise.LIC file to your hard drive.

Copy across the Rapise.LIC file to a computer that has Internet access and open up the Customer Area of our website:

![](./img/Rapise_Installation_Guide10.png)

Click on the **Activate** link which will take you to the Offline Activation part of our website:

![](./img/Rapise_Installation_Guide15.png)

Click on the `Browse` button and navigate to the place where the Rapise.LIC file is stored. Then click on the \[Activate\] button to
begin the activation process. Assuming that the License file is valid, the website will activate the license and take you back to the Customer Area where the license key will be displayed:

![](./img/Rapise_Installation_Guide12.png)

Click on the License Key hyperlink and you will be prompted to save the Rapise.CDM file to your hard drive. Save this file and then copy it across to the computer that has Rapise installed. Now on the Offline Activation screen:

![](./img/Rapise_Installation_Guide14.png)

Click the Step 3 `Open` button and browse to the Rapise.CDM file. Once you have the file selected, click on the `Finish` button to complete the activation. Assuming that the Rapise.CDM file is valid, the application will start.

> **Note:** If you have any problems activating your installation, please go to <https://www.inflectra.com/Support> and contact Inflectra customer support and they will help you resolve your problem.

#### Upgrading from Demo License

If you have installed a demonstration license, when the expiration date is reached the software will stop working and prompt to you purchase a commercial license. To purchase the commercial license, go to <http://www.inflectra.com/Rapise> and click on the appropriate Purchase link to obtain a commercial production license.

Once you have purchased the license your Customer Area will display a new activation code. Simply start up Rapise, enter the new activation code and follow the process described in section 2.2 or 2.3.

If you want to upgrade your license **before** the demonstration license is expired, you need to click on the menu **Help > Activation**:

![help activation](./img/Rapise_Installation_Guide16.png)

This will bring up the Activation dialog box:

![activation dialog](./img/Rapise_Installation_Guide17.png)

Click on the `Enter Activation Code` button and then follow the steps in 2.3 or 2.4 to activate the product with the new production license.

#### Transferring to Another Computer

Sometimes you need to transfer your Rapise license from one computer to another, or the computer it's installed on needs to be rebuilt. In either case, it's important that you first deactivate the product from the current computer, otherwise you will be prevented from activating the product on the new / rebuilt computer.

To deactivate your current installation, you need to click on the **Activation** button in the Help section of the Rapise Test ribbon:

![](./img/Rapise_Installation_Guide16.png)

This will bring up the Activation dialog box:

![](./img/Rapise_Installation_Guide17.png)

Click on the `Deactivate` button and activation system will contact our activation server, process the deactivation code and deactivate the license. If you visit the Customer Area of our website, you will see that it is listed as deactivated, with the option to activate it now available:

![](./img/Rapise_Installation_Guide10.png)

> **Note:** If you have any problems deactivating your installation, please go to <https://www.inflectra.com/Support> and contact Inflectra customer support and they will help you resolve your problem.

## Legal Notices

This publication is provided as is without warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.

This publication could include technical inaccuracies or typographical errors. Changes are periodically added to the information contained herein; these changes will be incorporated in new editions of the publication. Inflectra® Corporation may make improvements and/or changes in the product(s) and/or program(s) and/or service(s) described in this publication at any time.

The sections in this guide that discuss internet web security are provided as suggestions and guidelines. Internet security is constantly evolving field, and our suggestions are no substitute for an up-to-date understanding of the vulnerabilities inherent in deploying internet or
web applications, and Inflectra^®^ cannot be held liable for any losses due to breaches of security, compromise of data or other cyber-attacks that may result from following our recommendations.

The section of the manual that describes modifying the Windows System Registry ("Registry") should only be attempted by experienced Windows administrators who are familiar with its organization and contents. Inflectra® cannot be held liable for any losses due to damage to the system registry made by inexperienced personnel.

SpiraTest®, SpiraTeam®, Rapise® and Inflectra® are either trademarks or registered trademarks of Inflectra Corporation in the United States of America and other countries. Microsoft®, Windows®, Explorer® and Microsoft Project® are registered trademarks of Microsoft Corporation.

All other trademarks and product names are property of their respective holders.

Please send comments and questions to:

    Technical Publications
    Inflectra Corporation
    8121 Georgia Ave
    Suite 504
    Silver Spring, MD 20910
    U.S.A.

[*support@inflectra.com*](mailto:support@inflectra.com)
