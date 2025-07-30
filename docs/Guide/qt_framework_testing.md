# Qt Framework

## Purpose
Rapise supports testing applications built with the Qt Framework, specifically those using QWidget controls.

## Usage
Rapise fully supports the test automation of Qt-based applications. To ensure Rapise can access the UI elements and properties of the Qt application, MSAA (Microsoft Active Accessibility) support must be enabled. This provides additional information about Qt UI elements to automation software like Rapise. It can be accomplished by deploying and loading the "Accessible Plug-in," which is included in the Qt SDK (Software Development Kit), with the Qt application under test (see below).

**Loading the Accessible Plug-in for your Qt Application:**

1.  Copy the "**accessible**" directory (and all its contents) from the **Qt SDK** (used to build the application under test) installation directory to the automated application's installation directory (e.g., "**Program Files/Your-Application/plugins**"). If you do not have access to the Qt SDK used to develop the Qt application, please contact the application's developer and request the "accessible" directory from them.

2.  Create a file named "**qt.conf**" (or append to it if the file already exists) in the root directory of the automated application (e.g., "**Program Files/Your-Application**") with the following content (copy and paste the following two lines):

    ```
    [Paths]
    Plugins = plugins
    ```

## Sample

In the Samples section of the Rapise Start Page, you will find our sample Qt Framework AUT:

![Qt_sample_application](./img/qt_framework_testing1.png)

You can use this application with Rapise to explore its Qt Framework testing capabilities:

*   You should record tests using the dedicated **Qt Framework** library.

*   You should use the [Accessible Spy](object_spy_accessible.md) to inspect objects.