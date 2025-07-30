# Customizable Engine

## Purpose

The source code for most of Rapise's implementation is available for you to read and modify. You may find it useful when creating a [library](custom_libraries.md) customized for your application.

## Usage

Unless otherwise specified, Rapise will be installed at

    C:\Program Files (x86)\Inflectra\Rapise\

The source code is in the **Engine** directory. The [recording](recording.md) and [learning](object_learning.md) libraries are located in **Engine\\Lib**. The core logic resides in four files: **SeSAction.js**, **SeSBehavior.js**, **SeSCommon.js**, and **SeSConfig.js**.

> **Note:** If you plan to make changes to the Rapise Engine, we recommend using a version control system capable of reconciling code conflicts, since user customizations are not officially supported. However, please let us know if you believe your customizations would be generally useful; if we decide to integrate them into Rapise, we will then support them.

To add the Engine to any of your tests, use the ++ctrl+shift+e++ shortcut.

![engine collapsed](./img/customizable_engine_collapsed.png)

![engine expanded](./img/customizable_engine_expanded.png)

## See Also

*   [Custom Libraries](custom_libraries.md)
*   [Scripting](scripting.md)