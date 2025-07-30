# Java SWT

## Overview
The **Java SWT** GUI library is an alternative to Swing, developed by the **Eclipse** foundation. It enables Java applications to access the **native GUI libraries** of the operating system using JNI (Java Native Interface), in a manner similar to programs written with operating-system-specific APIs. Programs that call SWT are portable, but the toolkit's implementation, even though parts of it are written in Java, is unique for each platform.

Rapise supports testing applications written with Java **Standard Widget Toolkit (SWT)** using its **JavaSWT** extensions library, which is based on the UI Automation technology in Windows.

Since SWT displays applications using native Windows controls, it does not require the Java Access Bridge to be installed (unlike Java AWT/Swing applications).

## Sample Application

In the Samples section of the Rapise Start Page, you should see our sample Java SWT AUT:

![JavaSWT\_sample\_application](./img/java_swt1.png)

You can use this application with Rapise to explore the Java SWT testing capabilities:

*   Record tests using the special **SWT** library.
*   Use the [UIAutomation Spy](object_spy_uiautomation.md) to inspect objects.