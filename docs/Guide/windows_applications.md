# Windows Applications

## Overview

Rapise provides comprehensive support for testing Microsoft Windows GUI applications, including applications written using **Win32, MFC, ATL**, Windows Forms, Visual Basic 6, Microsoft **.NET**, **ActiveX**, and Windows Presentation Framework (**WPF**).

Specifically, Rapise supports the following technologies used to build Windows applications:

- **Win32 Applications**
    - Microsoft Foundation Classes (MFC)
    - ActiveX Template Library (ATL)
    - Visual Basic 6
    - ActiveX / COM
- **Microsoft .NET Applications**
- **Windows Presentation Framework (WPF)**
    - Silverlight
    - XAML
- **Modern / Metro Apps**
- **Third Party Component Libraries**
    - Infragistics WinForm Controls
    - Telerik RadControls
    - DevExpress Controls
    - ComponentOne ActiveX Controls
    - SyncFusion Windows Form Controls
    - FarPoint Spreadsheet Control
- **Java Applications**
    - Swing
    - AWT
    - SWT
    - Oracle Forms
- **QT Applications**

## Choosing the Right Windows Library

Since applications are often built using a mixture of different Windows technologies and component frameworks, we recommend that you use the following approach when testing Windows desktop applications with Rapise:

1.  **First, try recording using the "Auto" option.** This will allow Rapise to inspect the application and use the most appropriate libraries. Rapise usually identifies the correct libraries using its auto-detection, but sometimes an application is unique, and auto-detection may fail. If auto-detection is not reliable for your application, move on to step 2.
2.  Select the "**UIAutomation Object"** Spy and try to inspect the application. If the Spy shows the real content of the application (i.e., you see object names and IDs), then it is worth trying to record a test with the corresponding library called "**UIAutomation**" [using the record application dialog box](select_an_application_to_record_dialog.md). This library is ideal for modern Windows applications.
3.  If the recording is not picked up or does not play back correctly, the next step is to try recording with the "**Generic**" library. This is designed for older Windows Win32 applications. There is also a Spy tool for this library called the **"Accessible Object"** Spy.
4.  If you have **third-party components** from Infragistics, Telerik, DevExpress, ComponentOne, SyncFusion, or FarPoint, you may also need to select those libraries in addition to **Generic**.
5.  If the recording is not sufficient, the last step is to try to record with the "**Advanced Accessibility**" library. This library contains definitions of accessible controls at a very basic level. It is not very sophisticated, but it is often sufficient for many cases and works across a wide range of applications.
6.  If none of the options above are satisfactory, it may be worth trying low-level recording (<https://www.inflectra.com/Support/KnowledgeBase/KB114.aspx>).
  
## Sample Applications

In the [Samples index](sample_tests.md) of this manual, we provide a full list of all the samples included with Rapise. However, for Windows applications, there are a couple of key ones worth exploring:

***a) Two Dialogs***

This is a simple Win32 MFC application that uses the **Generic** library and lets you try some basic testing scenarios.

![twodialogsempty](./img/windows_applications1.png)

***b) Sample ATM***

This is a more robust Win32 MFC application that simulates a banking ATM. You should use the **Generic** library with this application:

![sample\_atm\_desktop](./img/windows_applications2.png)

***c) WPF Sample Application***

This application is a good test of the **UIAutomation** library and serves as a simple test application demonstrating all the different types of controls available for testing:

![sample\_app\_wpf](./img/windows_applications3.png)