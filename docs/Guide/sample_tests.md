# Samples Index

Rapise includes several sample tests that you can freely read, modify, copy, and use. You can open the tests from the [Start Page](start_page.md).

Sample tests are located in:

```nohighlight
RapiseDataDirectory\Samples
```

Unless otherwise specified, the **RapiseDataDirectory** will be:

```nohighlight
C:\Users\Public\Documents\Rapise
```

The sample tests are described below.

## ActiveX

These samples demonstrate the testing of Microsoft ActiveX/COM controls used in Visual Basic applications, including the MSComCtl library. The samples include the [Microsoft FlexGrid Control](/Libraries/MSFlexGrid/), [MS Common Toolbar Control](/Libraries/MSComCtlToolbar/), [Microsoft Tabbed Dialog Control](/Libraries/SSTab/), [TabStrip](/Libraries/TabStrip20/), and Microsoft Windows Common Controls 6.0 [MSCOMCTL.OCX].

## AnalogRecorder

This sample demonstrates [Analog Recording](analog_recording.md).

## CrossBrowser

This sample is a simple web test that can be [run on any browser](cross_browser_testing.md).

## Dynamics AX

This sample demonstrates using Rapise to test an installation of [Microsoft Dynamics AX](dynamics_ax.md) 2012 to perform basic ERP functions.

## Dynamics CRM

This sample demonstrates using Rapise to test an installation of [Microsoft Dynamics CRM](dynamics_crm.md) to perform basic contact management functions.

## FarPoint

This sample script demonstrates using the [FarPoint library](/Libraries/FarPointGrid/) to test the FarPoint Spreadsheet Control.

## Java

This sample tests a Java AWT/Swing application. This sample demonstrates the capabilities of the [Java library](/Libraries/ses_lib_java/). The application under test contains various standard GUI controls, such as: button, edit, tree, combo box, and menu.

## Java SWT

This sample tests a Java SWT/RCP application. This sample demonstrates the capabilities of the [SWT](/Libraries/ses_lib_swt/) and [UIAutomation](/Libraries/ses_lib_uiautomation/) libraries. The application under test contains various standard GUI controls, such as: button, edit, tree, combo box, and menu.

## jQuery-UI

This sample illustrates using the [jQuery HTML DOM extension library](/Libraries/ses_lib_jquery/) that allows you to record/playback test scripts against web applications using widgets from the jQuery JavaScript library framework.

## Library Information System

### CreateNewBook, EditExistingBook, CreateNewAuthor, EditExistingAuthor

These tests can be used to test the sample library information system web application, hosted at [http://www.libraryinformationsystem.org](http://www.libraryinformationsystem.org). This is the same sample application used by [SpiraTest](spiratest_integration.md); it illustrates how you can use [SpiraTest](spiratest_integration.md) to manage and execute automated Rapise tests. A copy of these tests is also available in new installations of [SpiraTest](spiratest_integration.md) v3.2 and later.

> To see these tests on the [Start Page](start_page.md) press the **Fetch** button at the top of the samples list.

## Managed

This sample tests a .NET 2.0 application. This sample demonstrates the capabilities of the [Managed library](/Libraries/ses_lib_managed/). The application under test contains various standard GUI controls, such as: button, edit, tree, combo box, grid, list box, list view, and menu.

## QtFramework

This sample tests a sample [Qt Framework](qt_framework_testing.md) cross-platform application. This sample demonstrates the capabilities of the [QtFramework library](/Libraries/QWidget/). The application under test contains various standard Qt widgets, such as: button, edit, tree, and combo box.

## Silverlight

This sample tests a Silverlight web application. This sample demonstrates the capabilities of the [UIAutomation library](/Libraries/ses_lib_uiautomation/). The application under test contains various standard GUI controls, such as: button, edit, tree, combo box, and menu.

## SimulatedObject

This sample opens **MS Paint** and draws on its canvas. It uses [Simulated Objects](simulated_objects.md) and several related methods: **DoMouseMove**(X, Y), **DoLButtonDown**(), **DoLButtonUp**(), and **DoSendKeys**(text).

## SampleATM

This sample tests an **MFC** application. You will also learn how to organize your test script in modular form, how to launch the AUT from your test script, and how to execute various actions on GUI controls.

## UsingDatabase

This example shows how you can use a relational (SQL) **database** to create [Data-Driven](data_driven_testing.md) tests. This script reads test case data from a spreadsheet ADO data source to test **Calculator**.

## UsingDLLHandlerManaged

This sample shows how to [unit test managed DLLs](dll_testing.md). You'll see how to use the methods **CreateClassInstance**() and **InvokeMember**().

## UsingDLLHandlerUnManaged

This sample shows how to [unit test unmanaged DLL code](dll_testing.md). You'll learn how to register (**UserWrap.Register**) and execute (**UserWrap.ShellExecute**) a function.

## UsingImageCheckPoint

This example shows how to create image [checkpoints](checkpoints.md).

## UsingInclude

This sample demonstrates two ways to include external files or functions:

1.  **eval(File.Include(...))**: includes a file with utility functions.
2.  **SeSRunJSScript(...)**: includes and executes an external function with its own object map.

## UsingMSAccess, UsingMSExcel, UsingMSWord

These samples demonstrate how you can work with **Microsoft Word**, **Excel**, and **Access** from scripts. You'll learn how to test applications that expose a [COM interface](com_testing_support.md).

## UsingMobile

These samples demonstrate how to [test mobile devices](mobile_testing2.md) running either [Apple iOS](mobile_testing_ios.md) or [Android](mobile_testing_android.md).

## UsingRegistry

This sample demonstrates the usage of the Windows Registry. The registry is queried to determine the OS (XP/2003/Vista) and owner.

## UsingReporting

This sample illustrates various [reporting](automated_reporting.md) features:

1.  Regular reporting ([Tester.Assert](/Libraries/Tester/#Assert), [Tester.Message](/Libraries/Tester/#Message))
2.  Custom attributes ([Tester.SetReportAttribute](/Libraries/Tester/#SetReportAttribute), [Tester.ResetReportAttribute](/Libraries/Tester/#ResetReportAttribute))
3.  Stacked attributes ([Tester.PushReportAttribute](/Libraries/Tester/#PushReportAttribute), [Tester.PopReportAttribute](/Libraries/Tester/#PopReportAttribute))
4.  Nested Tests ([Tester.BeginTest](/Libraries/Tester/#BeginTest), [Tester.EndTest](/Libraries/Tester/#EndTest))
5.  Inserting Links, Text, and Images into the report (tags parameter, [SeSReportText](/Libraries/SeSReportText/), [SeSReportLink](/Libraries/SeSReportLink/), [SeSReportImage](/Libraries/SeSReportImage/))

## UsingSelenium

This sample shows how you can use Rapise to write [Selenium WebDriver](selenium_webdriver.md)-based web application tests using the raw Selenium WebDriver API.

## UsingSpreadSheet

This example shows how you can use **Excel** spreadsheets to create [Data-Driven](data_driven_testing.md) tests. This script reads test case data from an XLS spreadsheet to test **Calculator**.

## UsingXML

This sample demonstrates how to read, modify, and write XML files.

## WebServicesREST

This sample demonstrates how you can use the Rapise [Web-Services](web_service_testing.md) module to write and execute automated web service tests against an HTTP [RESTful web service](rest_web_service.md).

## WebServicesSOAP

This sample demonstrates how you can use the Rapise [Web-Services](web_service_testing.md) module to write and execute automated web service tests against a [SOAP web service](soap_web_services.md).