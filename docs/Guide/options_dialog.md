# Rapise Settings Dialog

![options dialog, general tab](./img/options_dialog1.png){width=640}

## Purpose

Use the **Rapise Settings** dialog to change global options. Your changes will apply to all tests.

## How to Open

Use the `Settings > Global` menu item.

## Global Settings

### API

![options.dialog.api](./img/options_dialog_api.png)

*   **API Callback Timeout**: Defaults to 10000. This is the number of milliseconds to wait when performing [Before-Request and After-Response REST Callbacks](rest_web_service.md#before-request-and-after-response-rest-callbacks). The timeout applies to each callback call individually.
*   **Generate Full Name**: If 'Record REST Objects' is `true`:
    *   `true`: Generates a long name for objects and variables, e.g., 'Libraryinformationsystem_Login'
    *   `false`: Generates a short name, e.g., 'Login'
*   **Generate Short REST Path**: If 'Record REST Objects' is `false`:
    *   `true`: Generates a short path, e.g., 'RESTDef.rest'
    *   `false`: Generates a full path, e.g., '%WORKDIR%/SubTest/RESTDef.rest'. This may be needed when you have `.rest` definition files with the same name in your framework.
*   **Record Failed REST Actions**: If `true`, then if a recorded REST action fails, `DoExecute(...,true)` is generated. This ignores the response code, allowing the generated test to pass.
*   **Record REST Objects**: Generates an object for each REST request.
    *   `true`: An object is added to the Object Repository for each request. It is then initialized using `var <request_object_id> = SeS(<request_object_id>)`.
    *   `false`: No object is added to the object tree. Each request is initialized as `var <request_object_id> = /**RESTRequest*/Session.GetRESTRequest('<definition>.rest', '<request_id>')`. This approach makes it easier to generate reusable functions for REST calls without needing to load objects. See [Session.GetRESTRequest](../Libraries/Session.md#getrestrequest).

#### API Proxy Settings

*   **Proxy Enabled**: Activates the proxy settings listed below. By default, it is `false`.
*   **Proxy Host**: The host name or IP address of a proxy server.
*   **Proxy Port**: The proxy port number.
*   **Proxy User Name**: The name of a user for logging into the proxy server.
*   **Proxy User Password**: The password for a user to log into the proxy server.

If no proxy is specified, Rapise uses the operating system's settings. Proxies can also be set at the [session](../Libraries/Session.md#setproxy), [REST](../Libraries/RESTService.md#dosetproxy), or [SOAP](../Libraries/SOAPService.md#dosetproxy) request level.

### Debugger

![Debugger Options](./img/options_dialog_debugger_node.png)

*   **Optimize Call Stack**: If `True`, redundant information is removed from the call stack view. See also [Call Stack View Optimization](variable_call_stack_view.md#call-stack-view-optimization).

*   **Remember Debugger Layout**: If `True`, Rapise remembers the window layout for debug mode separately. For example, this may be useful if you want to work full screen while authoring a test and half-screen when debugging. This allows the AUT and the Rapise debugger to fit on the screen.

### Directories

*   **Help Files**: Path to a folder with help files.
*   **Samples**: Path to a folder with application samples.
*   **User Libraries**: Path to folder containing user-defined libraries (*.jslib).
*   **User Scripts**: Path to folder used to search for include files.

### Execution

![execution](./img/options_dialog_execution.png)

*   **JSEngineType**: Sets the preferred [JavaScript Engine](jscript_language_reference.md) (one of **Default**, **Node**, **WScript**), where **Default** means **Node**.

### MCP Server

*   **MCP Server Port**: Starts the MCP server on http://localhost:<port>/mcp. If the port is set to 0, no MCP server is started.

### Misc

![options.dialog.misc](./img/options_dialog4.png)

*   **SplashScreen**: A splash screen is an image that appears while a program initializes. The Rapise splash screen looks like this:

    ![splashscreen](./img/options_dialog3.png){width=480}

    Set **SplashScreen** to **False** to prevent the splash screen from appearing.

### Playback

*   **Enable Execution Monitor**: Specifies whether the execution monitor dialog box is displayed during [playback](playback.md).

### Recorder

*   **FrameStyle**: Specifies which frame to draw around objects when you [Record](recording.md), [Learn](object_learning.md), and [Spy](object_spy.md).

    The **Basic** frame is on the left and the **Modern** frame is on the right:

    ![options dialog, framestyle basic](./img/options_dialog6.png) ![options dialog, framestyle modern](./img/options_dialog7.png)

*   **DefaultSpy**: Specifies which of the various types of [Object Spy](object_spy.md) is displayed by default.
*   **GenerateComments**: Set to **True** to automatically generate a JavaScript or RVL comment for each recorded action.

### RVL Editor

*   **AI Command Multiline Mode**: When set, pressing Enter while editing an AI command will add newline to the current command. Otherwise you need to explicitly enter multiline edit mode by pressing F2.

### Settings

![options.dialog.settings](./img/options_dialog5.png)

*   **Always use Test.sstest**: Defaults to **False**. If set to **True**, the test file name is `Test.sstest` rather than `<test folder name>.sstest`. This may be useful in rare cases when your testing framework has a deeply nested structure, you have very long file names, and need to fit within the 260-character Windows `MAX_PATH` limit.
*   **AutoReloadModifiedFiles**: If set to **True**, any files modified outside of Rapise are automatically reloaded within Rapise.
*   **Confirm Object Removal**: Prompts for confirmation when deleting an object from the [Object Tree](object_tree.md).
*   **DefaultFolder**: Specifies where new tests are stored before you explicitly save them. The location is relative to the Rapise executable.
*   **Default Scripting Language**: JavaScript, RVL, or Ask.
*   **LoadLastTestOnStartup**: If set to **True**, Rapise opens the last test you worked on and saved. If set to **False**, Rapise creates a new test named `MyTest<#>`, where `<#>` is an integer. A folder for `MyTest<#>` is created in the folder specified by the **DefaultFolder** option.
*   **NormalizeFileName**: If set to **True**, files are referred to (in the `*.sstest` file) using a path relative to the `*.sstest` file. Otherwise, their absolute path is used.
*   **RecentTests**: The maximum number of recent files to display in the **Recent Tests** list. To view the Recent Tests list, open the Application Menu:

    ![options dialog, recent projects](./img/options_dialog8.png)

*   **ShowCommonFileAliases**: This is a legacy setting, not needed since Rapise 6.0.
*   **ShowDashboardOnStartUp**: If **True**, the [Spira Dashboard](spira_dashboard_2.md) opens automatically when Rapise is opened.
*   **ShowStartPageOnStartUp**: If **True**, the [Start Page](start_page.md) opens automatically when Rapise is opened.
*   **Spira Integration**: Enables all dialogs and menus for [SpiraTest Integration](spiratest_integration.md).
*   **Temp Folder**: The default folder for temporary tests.
*   **Test Auto Upgrade**: If set to **True**, each opened `.sstest` file is automatically upgraded to the latest format.

### Text Editor

*   **Convert Tabs to Spaces**: Set to **True** to force tabs to spaces conversion in the text editor.
*   **Tab Size**: The tab size for the editor.

## Utilities

![options dialog, recent projects](./img/options_dialog9.png)

Utility Functions

*   A set of **Open** buttons:
    *   **Open Web Profiles Folder**
    *   **Open Selenium Profiles Folder**
    *   **Open Mobile Profiles Folder**
    *   **Open Samples Folder**
    *   **Open User Libraries Folder**
    *   **Open Application Log Folder**

*   **Reset Layout** - Pressing the **Reset Layout** button restores the [default layout](restoring_the_default_layout.md). Rapise will restart.