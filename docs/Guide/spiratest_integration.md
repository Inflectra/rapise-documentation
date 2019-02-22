# SpiraTest Integration

For more details on using SpiraTest with Rapise, please refer to the separate [Using SpiraTest with Rapise](https://www.inflectra.com/Documents/Using%20Rapise%20with%20SpiraTest%20Guide.pdf) guide.

## Overview

**SpiraTest** is a web-based quality assurance and **test management system** with integrated release scheduling and defect tracking. SpiraTest includes the ability to execute manual tests, record the results and log any associated defects. 

> *Note: **SpiraTeam** is an integrated **ALM Suite** that includes SpiraTest as part of its functionality, so wherever you see references to SpiraTest in this section, it applies equally to SpiraTeam.*

When you use SpiraTest with Rapise you get the ability to store your Rapise automated tests inside the central SpiraTest repository with full version control and test scheduling capabilities:

![Architecture](./img/spiratest_integration1.png)

You can record and create your test cases using Rapise, upload them to SpiraTest and then schedule the tests to be executed on multiple remote computers to execute the tests immediately or according to a predefined schedule. The results are then reported back to SpiraTest where they are archived as part of the project. Also the test results can be used to update requirements' **test coverage** and other key metrics in real-time.

## Connecting to SpiraTest

The first thing you need to do is to configure the connection to SpiraTest. To do this, `Settings > SpiraTest` menu:

![spira_tools_options](./img/spiratest_integration2.png)

This brings up the dialog box that lets you configure the connection to SpiraTest:

![spira_connection_settings](./img/spiratest_integration3.png)

Enter the URL, login and password that you use to connect to SpiraTest and then click the `Test` button to verify that the connection information is correct.

* The "**Default Repository Path**" is a folder that used to store local copies of the non-absolute repositories.

* The **Token** is the identifier of the current machine that Rapise is installed on. It needs to match the 'Token' name of the corresponding 'Automation Host' in SpiraTest.

> *You need to be running SpiraTest / SpiraTeam v4.0 or later to use the integration with Rapise.*

## Creating a Rapise test from a SpiraTest test case

To create a new Rapise test based on the manual test steps already defined in a SpiraTest test case, go to `File > New Test`. This will bring up the following dialog box:

![create_new_test_from_spira1](./img/spiratest_integration5.png)

1. Select the project that has our new test case. The list of test case folders will be displayed.

2. You can create a new folder by clicking the `New Folder` button

3. Expand the folders until you can see the desired test case:

    ![create_new_test_from_spira2](./img/spiratest_integration6.png)

Now either create a new test case by using the `New Test Case` button or simply click on a test case that you previously created in Spira. In either case you will see its test steps displayed underneath (if there are any):

![create_new_test_from_spira3](./img/spiratest_integration7.png)

Once you are satisfied that this is the correct test case, choose the desired **methodology** (Basic, Manual-only, Mobile or Web) and then click the **Create from Spira** button. Rapise will now create a local test folder and files based on this Spira test case.

## Saving a Test to SpiraTest

To save the a Rapise test into SpiraTest you need to make sure that the following has been setup first:

1. You have a project created in SpiraTest to store the Rapise tests in. The Rapise tests will be stored in a repository located inside the **Planning > Documents** section of the project.

2. The user you will be connecting to SpiraTest with has the permissions to **create new document folders**.

3. You have created the Test Case in SpiraTest that the Rapise test will be associated with. This is important because without being associated to a SpiraTest Test Case, you will not be able to schedule and execute the tests using SpiraTest and RapiseLauncher.

4. You have created an AutomationEngine in SpiraTest that has the token name "Rapise". This will be used to identify Rapise automation scripts inside SpiraTest.

Once you have setup SpiraTest accordingly, click `File > Save to Spira`.

That will bring up the Save to SpiraTest dialog box:

![spira_save_test2](./img/spiratest_integration9.png)


The first thing you will need to do is choose the SpiraTest project from the dropdown list. This will then update the list of test case folders displayed in the top pane of the dialog box.

Once you have chosen the desired project, you need to expand the test case folders in SpiraTest and choose the existing Test Case that you want to attach the Rapise test to:

![spira_save_test3](./img/spiratest_integration10.png)

When you expand the folders to display the list of contained test cases, it will display the name and ID of the test case together with an icon that indicates the type of test case:

1. ![ManualTest-WithSteps](./img/spiratest_integration11.png) - Manual test case that has no automation script attached. (Repository Path will also be blank)
2. ![RapiseTest-WithSteps](./img/spiratest_integration12.png) - Test case that has an existing Rapise test attached.
3. ![AutoTest-WithSteps](./img/spiratest_integration13.png) - Test case that has a non-Rapise automation script attached.

If you are adding a new Rapise test, choose a test case that has icon (1) and doesn't have an associated Repository path. If you are updating an existing test, choose a test case that has icon (2) and the matching Repository path.

*Note: test cases with icon type (3) cannot be used with Rapise for adding or updating scripts.*

Once you have chosen the appropriate test case, click the `Save/Synchronize` button. That will bring up the **Create New Repository in Spira** dialog box:

![spira_save_create_repository](./img/spiratest_integration14.png)

This dialog box will let you know where the Rapise script will be stored in SpiraTest and also the location of the repository local directory used to store the 'working copy' of the Rapise test. Click `Create` to confirm.

![spira_save_test4](./img/spiratest_integration15.png)

A dialog box will be displayed that lists all the files in the local working directory and shows which ones will be checked-in to SpiraTest. The system will filter out result and report files that shouldn't be uploaded. You can change which files are filtered out and also selectively include/exclude files. Once you are happy with the list of files being checked-in, click the \[OK\] button:

The system will display the message that it's saving the files to the server:

![spira_save_test5](./img/spiratest_integration16.png)


If an error occurs during the save, a message box will be displayed, otherwise the dialog box will simply close.

## Opening a Test from SpiraTest

To open a Rapise test from SpiraTest you need to make sure that the following has been setup first:

1. You have already configured the connection to the SpiraTest service (see the instructions at the top of this page).
2. The user you will be connecting to SpiraTest with has the permission to view the project that the tests are being stored in.

Once you have setup SpiraTest accordingly, click on the `File > Open Test from Spira` menu.

That will bring up the Open Test from SpiraTest dialog box:

![spira_open_test2](./img/spiratest_integration18.png)

The first thing you will need to do is choose the SpiraTest project from the dropdown list. Once you have done that, the system will display the list of test case folders in this project.

Once you have chosen the project, you need to expand the test case folders in SpiraTest and choose the existing Test Case that you want to open:

![spira_open_test3](./img/spiratest_integration19.png)

When you expand the folders to display the list of contained test cases, it will display the name of the associated Rapise test script associated with it (to the right). Choose a test case that has the matching Rapise test case listed to the right of it (in the Repository Path column).

*Note: Only test cases that have an attached Rapise test script will be displayed in this view.*

Once you have chosen the appropriate test case, click the \[Load/Synchronize\] button to load the test case:

![spira_open_test4](./img/spiratest_integration20.png)

A dialog box will be displayed that lists all the files on the server which will be downloaded from SpiraTest. You can change which files are to be downloaded. Once you are happy with the list of files being checked-out, click the \[OK\] button:

The system will display the message that it's downloading the files from the server. If an error occurs during the download, a message box will be displayed, otherwise the dialog box will simply close.

## Viewing the SpiraTest Properties of a Test

To see which SpiraTest **project** and **test case**  the current Rapise test is associated with, chose `Test > Spira Properties` menu item. This will bring up the Spira Properties dialog box:

![spira_properties](./img/spiratest_integration21.png)

This will display the name of the current Rapise test together with the name of the SpiraTest project, test folder and test case that this test is associated with.

If you would to save the current Rapise test into a new SpiraTest project or if you want to save it against a new test case in the same project, you must first unlink the test. To do this click on the `Unlink from Test Case` button. This will tell Rapise to remove the stored SpiraTest information from the `.sstest` file so that it can be associated with a new project and/or test case in SpiraTest.

*Warning: This operation cannot be undone so please make sure you really want to unlink the current test.*

## Using the Spira Dashboard

In addition to using the menu options described in this page, you can interact with SpiraTest using the [Spira Dashboard](spira_dashboard.md) that is available from the `View > Spira Dashboard` menu. This provides a convenient way of interacting with SpiraTest, allowing you to quickly create, save and open test cases from SpiraTest.

## Using RapiseLauncher

**RapiseLauncher** is a separate application that installs with Rapise. It allows you to remotely schedule the automated tests in SpiraTest and have RapiseLauncher automatically invoke the tests according to the schedule. Details on using SpiraTest with RapiseLauncher to remotely schedule and execute tests is described in the separate **"Using SpiraTest with Rapise"** guide. This guide can be found in the Rapise program files folder. Click on **Start > Programs > Inflectra > Rapise** in Windows and you will see the shortcut for the guide.
