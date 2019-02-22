# Samples Index

Rapise includes several sample tests that you are free to read, modify, copy and use.  They are located in: *RapiseDataDirectory\\*Samples.  Unless you specified otherwise, the *RapiseDataDirectory* will be:
*C:\\Users\\Public\\Documents\\Rapise*.

The sample tests are described below.

## ActiveX

These samples demonstrate the testing of Microsoft ActiveX / COM controls used in Visual Basic applications including the MSComCtl library. The samples include the [Microsoft FlexGrid Control](/Libraries/msflexgrid/), [MS Common Toolbar Control](/Libraries/mscomctltoolbar/), [Microsoft Tabbed Dialog Control](/Libraries/sstab/), [TabStrip](/Libraries/tabstrip20/), and Microsoft Windows Common Controls 6.0 [MSCOMCTL.OCX].

## AnalogRecorder

This sample demonstrates [Analog Recording](analog_recording.md).

## Dynamics AX

This sample demonstrates using Rapise to test an installation of [Microsoft Dynamics AX](dynamics_ax.md) 2013 to perform some basic ERP functions.

## Dynamics CRM

This sample demonstrates using Rapise to test an installation of [Microsoft Dynamics CRM](dynamics_crm.md) to perform some basic contact management functions.

## FarPoint

This sample script demonstrates using the [FarPoint library](/Libraries/farpointgrid/) to test the FarPoint SpreadSheet Control.

## HTML5

This sample tests a HTML5 application. This sample demonstrates the capabilities of the **HTML5** DOM browser library. The application under test contains various HTML5 specific controls, such as: color, date, datetime, email, range, progress, etc.
The sample is also available online at <http://www.libraryinformationsystem.org/Html5/AUTHTML5.htm>

## Java

This sample tests a Java AWT/SWING application. This sample demonstrates the capabilities of the **Java** library. The application under test contains various standard GUI controls, such as: button, edit, tree, combo box, menu, etc.

## Java SWT

This sample tests a Java SWT/RCP application. This sample demonstrates the capabilities of the **SWT** and **UIAutomation** libraries. The application under test contains various standard GUI controls, such as: button, edit, tree, combo box, menu, etc.

## jQuery-UI

This sample illustrates using the jQuery HTML DOM extension library that allows you to record/playback test scripts against web applications using widgets from the jQuery Javascript library framework.

## Library Information System

These tests can be used to test the sample library information system web application hosted at http://www.libraryinformationsystem.net. This is the same sample application used by [SpiraTest](spiratest_integration.md) and illustrates how you can use [SpiraTest](spiratest_integration.md) to manage and execute automated Rapise tests. A copy of these tests is also available in new installations of [SpiraTest](spiratest_integration.md) v3.2+.

## Managed

This sample tests a .NET 2.0 application. This sample demonstrates the capabilities of the **Managed** library. The application under test contains various standard GUI controls, such as: button, edit, tree, combo box, grid, listbox, listview, menu, etc.

## QtFramework

TThis sample tests a sample [QT Framework](qt_framework_testing.md) cross-platform application. This sample demonstrates the capabilities of the [QtFramework library](/Libraries/qwidget/). The application under test contains various standard Qt widgets, such as: button, edit, tree, combo box, etc.

## Silverlight

This sample tests a Silverlight web application. This sample demonstrates the capabilities of the **UIAutomation** library. The application under test contains various standard GUI controls, such as: button, edit, tree, combo box, menu, etc.

## SimulatedObject

This sample opens **MS Paint** and draws on its canvas. It uses [Simulated Objects](simulated_objects.md) and several related methods: **DoMouseMove**(X,Y), **DoLButtonDown**(), **DoLButtonUp**(), and **DoSendKeys**(text).

## SampleATM

This sample tests an **MFC** application. You will also learn how to organize your test script in modular form, how to launch the AUT from your test script and how to execute various actions on GUI controls.

## UsingCustomStrings

This sample demonstrates how to integrate Rapise tests with other tools using Custom Custom Strings. **TestFinish**() is used to analyze and save test results.

## UsingDatabase

This example shows how you can use a relational (SQL) **database** to create [Data-Driven](data_driven_testing.md) tests.  This script reads test case data from a spreadsheet ADO datasource to test **Calculator**.

## UsingDLLHandlerManaged

This sample shows how to [unit test managed DLLs](dll_testing.md). You'll see how to use methods **CreateClassInstance**() and **InvokeMember**().

## UsingDLLHandlerUnManaged

This sample shows how to [unit test unmanaged DLL code](dll_testing.md). You'll learn how to register (**UserWrap.Register**) and execute (**UserWrap.ShellExecute**) a function.

## UsingImageCheckPoint

This example shows how to create image [checkpoints](checkpoints.md).

## UsingInclude

This sample demonstrates two ways to include external files/functions:

1.   **eval(g\_helper.Include(...))**: include a file with utility functions.
2.   **SeSRunJSScript(...)**: include and execute external function with its own object map.

## UsingMSAccess, UsingMSExcel, UsingMSWord

These samples demonstrate how you can work with **Microsoft Word**, **Excel**, and **Access** from scripts. You'll learn how to test applications that expose a [COM interface](com_testing_support.md).

## UsingMobile

These samples demonstrate how to do the [testing of mobile devices](mobile_testing2.md) running either [Apple iOS](mobile_testing_ios.md) or [Android](mobile_testing_android.md).

## UsingRegistry

This sample demonstrates usage of the windows registry.   The registry is queried to determine the OS (XP/2003/Vista, etc) and owner.

## UsingReporting

This sample illustrates various [reporting](automated_reporting.md) features:

1.   Regular reporting (**Tester.Assert, Tester.Message**)
2.   Custom attributes (**Tester.SetReportAttribute, Tester.ResetReportAttribute**)
3.   Stacked attributes (**Tester.PushReportAttribute, Tester.PopReportAttribute**)
4.   Nested Tests (**Tester.BeginTest, Tester.EndTest**)
5.   Inserting Links, Text and Images into the report (tags parameter, **SeSReportText, SeSReportLink, SeSReportImage**)

## UsingSelenium

This sample how you can use Rapise to write [Selenium WebDriver](selenium_webdriver.md) based web application tests using the raw Selenium WebDriver API.

## UsingSpreadSheet

This example shows how you can use **Excel** spreadsheets to create [Data-Driven](data_driven_testing.md) tests.  This script reads test case data from an XLS spreadsheet to test **Calculator**.

## UsingXML

This sample demonstrates how to read, modify and write XML files.

## WebServicesREST

This sample demonstrates how you can use the Rapise [Web-Services](web_service_testing.md) module to write and execute automated web service tests against an HTTP [RESTful web service](rest_web_service.md).

## WebServicesSOAP

This sample demonstrates how you can use the Rapise [Web-Services](web_service_testing.md) module to write and execute automated web service tests against an [SOAP web service](soap_web_services.md).
