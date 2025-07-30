# Convert Functional to Load Test

## JMeter

This section explains how to transform an existing Rapise test script into a performance testing scenario within JMeter. Learn how to easily convert Rapise tests for HTTP/HTTPS applications into JMeter scripts. These scripts can then be executed by a large number of virtual users (VUs) to simulate a significant load on the tested application.

- Video: [Converting Rapise script into JMeter load scenario](https://youtu.be/LbCvrBvAPjA)

## NeoLoad

!!! important
    NeoLoad integration has been removed in Rapise 7.0.

This section describes how to seamlessly convert an existing Rapise test script into a performance scenario in NeoLoad. This feature allows you to convert Rapise tests for HTTP/HTTPS-based applications into protocol-based NeoLoad scripts. These scripts can then be executed by a large number of **virtual users (VUs)** to simulate a load on the application being tested.

### Prerequisites

To use the integration with NeoLoad, you must have the following:

- Rapise 5.0 or above
- NeoLoad 5.1 or above

Both tools must be installed on the same Windows host. NeoLoad must have a license with Recording API enabled. The default trial version does not have this capability. The Rapise test must target an application that uses HTTP/HTTPS or other NeoLoad-supported protocols.

### Steps for Converting a Rapise Test

#### Launch NeoLoad

Open NeoLoad via the Start menu or from the command line:

    c:\Program Files (x86)\NeoLoad 5.1\bin\NeoLoadGUI.exe

![neoload ui](./img/convert_functional_to_load_tes1.png)

#### Create or Open an Existing Load Project

Use menu `File > New` or `File > Open`.

![neoload project](./img/convert_functional_to_load_tes2.png)

#### Open a Rapise Test Script for Conversion

Inside Rapise, open the script you want to convert. Ensure the application being tested is web-based and uses HTTP/HTTPS protocols:

![rapise test](./img/convert_functional_to_load_tes3.png)

Ensure that the Internet Explorer HTML library is set in the test parameters.

![ie browser](./img/convert_functional_to_load_tes4.png)

#### Open Conversion Dialog

From the main menu select `Tools > Convert to NeoLoad`.

This will display the [NeoLoad converter dialog](neoload_convertor_dialog.md). In this dialog box, set the following parameters:

![neoload-conversion-dialog](./img/convert_functional_to_load_tes6.png)

**Virtual User**

In this field, enter the name of the virtual user to create in NeoLoad:

- The default value is "VirtualUser"
- If the name is already used, it is automatically renamed with an “_X” suffix, where X is an incremented integer.
- If the name contains invalid characters, they will be replaced with an underscore (_).

**Base Container**

This specifies the base container where recording should start (Init / Actions / End).

- The default value is Actions.

**Container/Business Transaction**

This specifies the current recording container in NeoLoad. It is limited to a single level. There is no way to specify a tree of containers.

- The default is "no container."
- If the name is already used, it will be made unique by adding `_1`, `_2`, etc.
- If the name is empty, no container will be used.

**Detect Dynamic Parameters**

When this box is checked, Rapise instructs NeoLoad to scan the protocol traffic to identify known dynamic parameters (e.g., Session IDs, ASP.NET ViewState) that change on each HTTP request. These parameters need to be parameterized by NeoLoad to ensure the performance scripts are robust and well-defined, instead of having a hardcoded Session ID.

In the NeoLoad tree, it appears as follows:

![neoload tree](./img/convert_functional_to_load_tes7.png)

#### Press Convert Button

After pressing the Convert button, Rapise will launch the test and NeoLoad will start capturing network traffic. When test playback is finished, the following dialog will appear:

![conversion completed](./img/convert_functional_to_load_tes8.png)

### Troubleshooting

During conversion, you might encounter a few error messages. This section provides a list of common messages and their solutions.

#### Unable to connect to the remote server

![clip0053](./img/convert_functional_to_load_tes9.png)

If you encounter this message, ensure that NeoLoad is running. Typically, this message indicates that NeoLoad is not running or another application is using port 7400, preventing NeoLoad from binding to it.

#### No project is open

![clip0054](./img/convert_functional_to_load_tes10.png)

If you encounter this message, ensure that a project is open in NeoLoad.

#### NeoLoad is not ready for recording

![clip0055](./img/convert_functional_to_load_tes11.png)

If you encounter this message, it indicates that NeoLoad is already in a recording state. To resolve the issue, stop the existing recording in NeoLoad.

### NeoLoad Integration Settings

There are a few global options for the Rapise-NeoLoad integration. To access them, use the menu `Settings > NeoLoad Integration`.

![clip0057](./img/convert_functional_to_load_tes13.png)

This is the [NeoLoad Settings](neoload_settings_dialog.md) dialog. Normally, there is no reason to change these settings, but for completeness, they are described below:

- **NeoLoad Data Exchange URL** - The URL for the NeoLoad data exchange API.
- **NeoLoad Proxy Address** - The IP address and port of the NeoLoad HTTP proxy.
- **NeoLoad REST Service URL** - The URL for the NeoLoad recording service REST API.