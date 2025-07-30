# How to Build a Test Framework with Rapise

!!! info
    In different parts of the documentation and in knowledge base articles, we use the term **Single Test mode** to refer to this type of framework with a parent test and nested sub-tests.

Need to call one test from another? Need to run many tests? Have a test plan? It's time to build a testing framework. Learn how to do it with Rapise.

## How Framework Tests Are Structured

A Framework in Rapise is a regular test (**Framework Root**) containing a number of [Sub-Tests](../Guide/tests_and_sub_tests.md) (**Test Cases** and **Common Features**).

![Framework](../Guide/img/framework_overview.png)

**Test Cases** are the final test scenarios, and **Common Features** are reusable parts shared between the test cases.

When working with a framework, the `[%WORKDIR%`](../Guide/tests_and_sub_tests.md#workdir-and-frameworks) variable always points to the root test. This helps locate all common assets and files. For example, you can always call `Common Feature1.sstest` using the path `%WORKDIR%\Common Feature1\Common Feature1.sstest`. You can call it from any other test case, another common feature, a library, and so on.

The same is true for accessing common [config](../Libraries/Global.md#SetConfigPath) and data files. For example:

```javascript
Tester.SetConfigPath('%WORKDIR%\\Config.xlsx')
```

### Saving a Framework into Spira

The value of a framework is in its consistency. There is one important rule to follow when saving a framework to Spira:

> The framework root must be saved first. You need to save it at least once before saving any sub-tests. This ensures that the correct directory structure is defined in Spira.

Once you have saved a root test to Spira, all its sub-tests are always saved with it, whether you perform the save from the root test or from any of the sub-tests. Right after saving the root test, you have a framework and can start expanding it.

### Saving a Framework into Git

If you plan to maintain your framework using **Git** for [source control](../Guide/git_integration.md), make sure to initialize the Git repository at the framework root level or higher. This allows Rapise to detect it.

### Framework Navigation: Root Test, Parent Test, Sub-Tests

There are a number of features to help you switch between tests and sub-tests.

The `Files` [view](../Guide/test_files_dialog.md) shows all nested sub-tests. You can open any of them by double-clicking on its `.sstest` node:

![Files View](../Guide/img/framework_filesview.png)

The test opens in the current Rapise instance. You can also open it in a new window using the **Open in New Rapise Window...** command from the [context menu](../Guide/tests_and_sub_tests.md#sub-test-context-menu).

You can then switch back to the parent test or framework root using the **Test/Open Root...** and **Test/Open Parent...** [menu items](../Guide/menu_and_toolbars.md#test).

### Template Test Case and Clone

A common practice when using a Framework is to use the [Clone](../Guide/tests_and_sub_tests.md#sub-test-context-menu) feature to create new sub-tests. A template test is created and pre-configured (to contain the right libraries, functions, and file references) and then replicated for each new test case.

![Clone](../Guide/img/framework_template_clone.png)

### Calling Other Tests

There are a number of ways to call one sub-test from another. Usually, a test representing a scenario calls another test representing a common routine or shared step. It is possible to pass parameters to the called sub-test.

> In most cases, you can use drag-and-drop from the [Files](../Guide/test_files_dialog.md) view into the text or RVL editor to generate a call statement.

#### Executing Full Test

From RVL:
[RVL.DoPlayTest](../Libraries/RVL.md#doplaytest)

From JS:
[Global.DoInvokeTest](../Libraries/Global.md#DoInvokeTest)

#### Execute One RVL Sheet from Current or Another Test in the Framework

From either RVL or JS:

[RVL.DoPlayScript](../Libraries/RVL.md#doplayscript)

[RVL.DoPlaySheet](../Libraries/RVL.md#doplaysheet)

#### Parallel Test Execution

From RVL:
[RVL.DoPlayTestParallel](../Libraries/RVL.md#doplaytestparallel)

From JS:
[Global.DoInvokeTestParallel](../Libraries/Global.md#doinvoketestparallel)

### Dropdowns.xlsx

Shared Libraries and Shared Functions are more powerful with pre-defined [dropdowns](../Guide/rvl_editor.md#param-dropdowns). For example, you may have a `NavigateToModule` function used across your framework to switch to an application module. Since the app has a fixed number of modules (it may be a large number, but it is still fixed), you can define a dropdown list. This makes it easier for the test creator to select a module, reducing the risk of typos and saving time searching for the correct name.

![Param Dropdown](../Guide/img/framework_dropdowns.png)

#### Dropdowns for Page Objects

In Rapise 8.3, we’ve introduced support for a local Dropdowns.xlsx file for [Page Objects](../Guide/Frameworks/pageobjects.md). This is particularly useful because Page Objects created in [Framework Mode](../Guide/Frameworks/frameworks.md) can be shared across multiple frameworks, and there can also be [Public Page Objects](../Guide/Frameworks/pageobjects.md#public-page-objects).

### Config.xlsx

There is a [Config](../Libraries/Global.md#SetConfigPath) file that can be used with [Global.GetProperty](../Libraries/Global.md#getproperty) and [Global.SetProperty](../Libraries/Global.md#setproperty). This is an easy way to read and store various input configuration data, such as logins and URLs, as well as output data (e.g., an Internal Invoice ID used in subsequent test cases).

It is also explained in [this](https://youtu.be/GDbRA2WyQfQ?list=PL1GncVUgF5nsawBrTNYbBY-eUnccO5YZj&t=534) video.

### Data.xlsx

It is typical to implement some test cases as [data-driven](../Intro/ddt.md). A framework is a great place for storing shared data files, which are usually `.xlsx` spreadsheets. Rapise has built-in capabilities for [creating](../Guide/test_files_dialog.md#context-menu-folder) and [editing](../Guide/spreadsheet_editor.md) these spreadsheets.

### Global Objects

It is useful to have one or more application-specific [global objects](../Guide/global_objects.md) that share functionality needed by the majority of test cases in your framework. They can do anything, from login and navigation to string formatting or text validation.

![Global Object](../Guide/img/framework_global_object.png)

### Libraries

You can define a [custom library](../Guide/custom_libraries.md) containing common functions, global objects, or even rules for [test playback](../Guide/playback.md), [object learning](../Guide/object_learning.md), and [test recording](../Guide/recording.md).

### Sharing JS Files

A simple way to have common shared logic is to have a `User.js` [file](../Guide/defining_functions.md#in-userjs) that defines common functions.

For more complex cases, you can have additional `.js` files and [include](https://www.inflectra.com/Support/KnowledgeBase/KB308.aspx) them in your tests.

### Profiles

Local [Web](../Guide/browser_settings.md#local-browser-profiles) or [Mobile](../Guide/mobile_settings_dialog.md#local-mobile-profiles) Profiles make it easier to configure the browsers for the entire framework.

### WebAppProfile.json

For web tests, the [WebAppProfile](../Guide/web_app_profile.md) can greatly improve the speed and quality of recording. The profile can be defined on the framework root, making it effective when working on all its sub-tests.

## See Also

- [Framework for Testing Web Applications with Rapise (video)](https://youtu.be/zROIrQs8tP0)
- [Tests and Sub-Tests](../Guide/tests_and_sub_tests.md)
- [Passing Sub-Test Parameters (KB)](https://www.inflectra.com/Support/KnowledgeBase/KB501.aspx)
- [Framework Example (GitHub)](https://github.com/Inflectra/rapise-framework-examples/tree/master/SpiraFriendlyWithRvlAndUserLib)
- [More Framework Examples (GitHub)](https://github.com/Inflectra/rapise-framework-examples)
- [Defining Global Objects](../Guide/global_objects.md)
- [RVL Parameter Dropdowns](../Guide/rvl_editor.md#param-dropdowns)