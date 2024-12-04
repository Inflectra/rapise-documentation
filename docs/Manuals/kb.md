# Knowledge Base

!!! note ""
    We update this list regularly. For the most recent list of KBs please navigate to [Inflectra Knowledge Base](https://www.inflectra.com/Support/KnowledgeBase/rapise/List.aspx)

### <a onclick="return RegisterKbClick('KB883', 'AiTester Public Page Object')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB883.aspx">KB883</a> AiTester Public Page Object

Rapise 8.3 introduces AI-powered capabilities for executing test cases. To leverage this feature, integrate the AiTester public page object into your framework. With AiTester, you can send text and image-augmented queries to AI models hosted by  OpenAI, Azure OpenAI, and Amazon Bedrock. Example applications include generating data, performing image-based verifications (e.g., detecting discrepancies or counting visual elements), and more.

### <a onclick="return RegisterKbClick('KB881', 'Importing Manual Test Cases from Spira to Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB881.aspx">KB881</a> Importing Manual Test Cases from Spira to Rapise

If you have manual tests saved in Spira and want to automate some of them, you can import these tests into a Rapise Framework. From there, you can automate the steps using the record-and-edit features or leverage AI tools for automation.

### <a onclick="return RegisterKbClick('KB880', 'Run Playwright code with Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB880.aspx">KB880</a> Run Playwright code with Rapise

If you already have Playwright tests and want to execute them using Rapise, or if you need Playwright's advanced features for complex scenarios, you can now run Playwright code directly within Rapise tests. Requires Rapise 8.3+.

### <a onclick="return RegisterKbClick('KB879', 'Using Appium Windows Driver with Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB879.aspx">KB879</a> Using Appium Windows Driver with Rapise

If you need to migrate your existing Windows UI tests built for Appium Windows Driver to Rapise, here is how you can do it. Requires Rapise 8.3+.

### <a onclick="return RegisterKbClick('KB875', 'Downloading a file using Rapise API')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB875.aspx">KB875</a> Downloading a file using Rapise API

If we need to download a binary file for which you have an URL, then here is the snippet.

### <a onclick="return RegisterKbClick('KB866', 'Comparing strings with wildcard in RVL')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB866.aspx">KB866</a> Comparing strings with wildcard in RVL

Sometimes you need to check if string is matching specific pattern (i.e. has variable part like date, time etc). This topic covers the way to compare it in RVL.

### <a onclick="return RegisterKbClick('KB865', 'Enable Camera Access for Chrome and Edge')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB865.aspx">KB865</a> Enable Camera Access for Chrome and Edge

Some web applications interact with camera. Each time browser requests camera access browser shows the prompt that blocks the page. Here we show how to bypass this prompt.

### <a onclick="return RegisterKbClick('KB861', 'Integration with ExtentReports')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB861.aspx">KB861</a> Integration with ExtentReports

ExtentReports is a popular logger-style reporting library for automated tests. Since Rapise 8.2 there is a simple way of using it for custom reporting.

### <a onclick="return RegisterKbClick('KB860', 'ChromeDriver update: onbeforeunload is not fired any more since 126.0.6465.0')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB860.aspx">KB860</a> ChromeDriver update: onbeforeunload is not fired any more since 126.0.6465.0

Since version 126.0.6465.0 ChromeDriver behaves according to W3C standard. Specifically: Whenever active sessions is a list containing exactly one item, and that item is a HTTP session, but is not a BiDi session, then in the steps to fire beforeunload, implementations must act as if showing an unload prompt is likely to be annoying, deceptive, or pointless. This means that beforeunload prompts are never shown when there's an active HTTP-only session.

### <a onclick="return RegisterKbClick('KB858', 'Rapise failed to install. How to resolve?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB858.aspx">KB858</a> Rapise failed to install. How to resolve?

If you are facing issues installing Rapise, here are some common causes and resolutions that may help.

### <a onclick="return RegisterKbClick('KB851', 'Generating OTP Passwords')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB851.aspx">KB851</a> Generating OTP Passwords

Many applications require users to enter one-time passwords to login. In this article we describe how to implement OTP generator in Rapise.

### <a onclick="return RegisterKbClick('KB844', 'How to specify additional arguments to Chrome embedded into Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB844.aspx">KB844</a> How to specify additional arguments to Chrome embedded into Rapise

Rapise hosts embedded Chrome controls to display Start Page and Spira Dashboard. In rare cases it is necessary to pass additional arguments to the browser. For example proxy settings. Requires Rapise 8.1.29.44+.

### <a onclick="return RegisterKbClick('KB834', 'Interrupting and customizing reporting messages')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB834.aspx">KB834</a> Interrupting and customizing reporting messages

Sometimes you need to have alternative reporting or to change/tweak some reporting messages to better fit your needs. It is possible via SeSOnReportMessage.

### <a onclick="return RegisterKbClick('KB833', 'How to use two different browser instances in one test')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB833.aspx">KB833</a> How to use two different browser instances in one test

Sometimes, an automation scenario may require performing steps in two separate browser sessions that don't share cookies and cache. In this article, we'll describe how to manage multiple browsers within the same test script and switch between them.

### <a onclick="return RegisterKbClick('KB828', 'Android Testing Hints (April 2024 version)')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB828.aspx">KB828</a> Android Testing Hints (April 2024 version)

Most complex part in Mobile testing is connecting to a simulator or device. In this article we describe steps necessary to configure the testing environment. Note: In brackets we specify versions of software components we used at the time of writing this article.

### <a onclick="return RegisterKbClick('KB827', 'Running Rapise GUI Tests with Jenkins (April 2024 version)')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB827.aspx">KB827</a> Running Rapise GUI Tests with Jenkins (April 2024 version)

The recommended approach is to use SpiraTest and RapiseLauncher for automated test execution. However, in some cases, this may not be an option. This article describes how to run Rapise tests using Jenkins.

### <a onclick="return RegisterKbClick('KB820', 'Date manipulation in JavaScript')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB820.aspx">KB820</a> Date manipulation in JavaScript

When testing applications, you might often need to work with dates obtained from the application. This article provides a couple of helpful templates to get you started with parsing and manipulating these dates.

### <a onclick="return RegisterKbClick('KB813', 'Drawing in Mobile Tests')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB813.aspx">KB813</a> Drawing in Mobile Tests

When testing mobile applications, you may need to draw graphics, such as a signature. This article provides a helper function that you can copy and customize for your tests.

### <a onclick="return RegisterKbClick('KB810', 'BrowserStack Camera Image Injection')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB810.aspx">KB810</a> BrowserStack Camera Image Injection

BrowserStack enables you to test image capture and QR/Bar code scanning from BrowserStack’s mobile device camera. If your mobile app has features, such as check scanning, profile image capture, and QR/Bar code scanning, you can use this feature to automate the testing of such a feature in your app.

### <a onclick="return RegisterKbClick('KB808', 'iOS Testing Hints (Personal Team)')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB808.aspx">KB808</a> iOS Testing Hints (Personal Team)

This is the second part of the iOS Testing Hints series. It describes how to configure real device testing if you dp not have a paid membership with Apple Developer.

### <a onclick="return RegisterKbClick('KB805', 'iOS Testing Hints (March 2024 version)')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB805.aspx">KB805</a> iOS Testing Hints (March 2024 version)

Most complex part in Mobile testing is connecting to a simulator or device. In this article we describe steps necessary to configure the testing environment. Note: In brackets we specify versions of software components we used at the time of writing this article.

### <a onclick="return RegisterKbClick('KB803', 'Invoking async/Promise from Rapise Script')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB803.aspx">KB803</a> Invoking async/Promise from Rapise Script

Rapise Scripts are sequential. Sometimes you need to call a library that only has async API (i.e. OpenAI) and thus need to do it sequentially.

### <a onclick="return RegisterKbClick('KB798', 'Testing mobile applications built with Ionic framework')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB798.aspx">KB798</a> Testing mobile applications built with Ionic framework

Ionic is an open source UI toolkit for building performant, high-quality mobile apps using web technologies — HTML, CSS, and JavaScript. This means that being mobile, Ionic applications are web applications by nature. And it is much more convenient to test them via WebDriver rather than Appium. Requires Rapise 8.1+.

### <a onclick="return RegisterKbClick('KB796', 'Useful Page Objects')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB796.aspx">KB796</a> Useful Page Objects

Sample framework including general purpose page objects that you may find useful in your test cases (KeyboardHelper, ListChecker, ManagedHelper, StringChecker, TableHandler). Help pressing special keys, comparing lists, accessing managed popup windows, checking unique strings and string formatting, working with standard web table.

### <a onclick="return RegisterKbClick('KB790', 'How to resign a third-party .ipa file to run it on a real iOS device')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB790.aspx">KB790</a> How to resign a third-party .ipa file to run it on a real iOS device

You may receive an .ipa file from a development team or download one published by a third-party vendor. In order to create and run automation scripts using a real iOS device you need to resign the .ipa file with your provisioning profile and development certificate. Learn how to do it from this article.

### <a onclick="return RegisterKbClick('KB780', 'Chrome for Testing')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB780.aspx">KB780</a> Chrome for Testing

This is the mirror of https://googlechromelabs.github.io/chrome-for-testing/known-good-versions-with-downloads.json Using links from this JSON file you may download specific versions of Chrome that do not auto-update.

### <a onclick="return RegisterKbClick('KB776', 'How to run a sub-test in isolated mode')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB776.aspx">KB776</a> How to run a sub-test in isolated mode

Sometimes there is a need to execute another test (sub-test) from a Rapise test. Doing so with Global.DoInvokeTest or RVL.DoPlayTest will run the sub-test in the context of the calling test, it will reuse same browser profile or mobile profile, it will use same loaded libraries. Such mode of execution may produce different results compared with running the sub-test standalone. To run the sub-test in isolated mode use Global.DoInvokeTestParallel and RVL.DoPlayTestParallel.

### <a onclick="return RegisterKbClick('KB775', 'Where to find Rapise installation logs')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB775.aspx">KB775</a> Where to find Rapise installation logs

In rare cases Rapise installation fails. There may be different reasons for this including AV software, security configuration or corrupted Windows system. To help Rapise team to find out the root cause you may zip and share Rapise installation logs.

### <a onclick="return RegisterKbClick('KB774', 'How to automate testing of Flutter Web applications')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB774.aspx">KB774</a> How to automate testing of Flutter Web applications

In most cases Flutter Web applications are built with CanvasKit renderer (flutter build web --web-renderer canvaskit). It means that by default UI elements of an application are not visible to test automation tools. They see just the big pane that covers all browser window. So does Rapise. However, there is a simple workaround that can be applied to solve this problem.

### <a onclick="return RegisterKbClick('KB772', 'If you have Rapise version lower than 8.0.28.45 and Chrome 115+')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB772.aspx">KB772</a> If you have Rapise version lower than 8.0.28.45 and Chrome 115+

Since version 115 of Chrome the central storage of chromedriver executables has changed. If you have Rapise version older than 8.0.28.45 than you need to take special steps to continue testing on Chrome 115 and above.

### <a onclick="return RegisterKbClick('KB771', 'How to generate an HTML report using own template and convert it to PDF')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB771.aspx">KB771</a> How to generate an HTML report using own template and convert it to PDF

Rapise can export an execution report in HTML format, it even allows to choose from a few predefined templates. However you may want to create own template or customize existing one and export the report automatically at the end of test execution. Also you may want to convert generated HTML report to PDF format. Learn how from this article.

### <a onclick="return RegisterKbClick('KB767', 'Rapise 8.0: how to use Rapise with Git and Spira')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB767.aspx">KB767</a> Rapise 8.0: how to use Rapise with Git and Spira

If your team has only one or two test automation engineers, the best option for storing files of a testing framework is within SpiraTest. This approach is straightforward to implement and does not require specific configuration of test sets. However, if your testing framework is expected to grow significantly and you have multiple automation engineers, it is recommended to incorporate Git into your set of tools. Using Git offers several important benefits: Improved file loading speed: By integrating Git with RapiseLauncher, the process of loading files from a repository is significantly faster. This can save valuable time, especially when dealing with larger frameworks or complex test suites. Comprehensive source control features: Git provides a wide range of source control capabilities, including branching and merging. These features are essential for managing changes and collaborating effectively when multiple team members are working on the same codebase. It allows for better organization, tracking, and merging of code changes, ensuring a streamlined development process. Enhanced teamwork: Git simplifies collaboration in a team environment. It allows team members to work on different branches or even different features concurrently, while providing mechanisms to merge and synchronize their work seamlessly. This enables better coordination and reduces the risk of conflicts when integrating changes made by multiple developers. By incorporating Git into your testing workflow, you can optimize file loading speed, leverage powerful source control features, and foster a more efficient and collaborative team environment.

### <a onclick="return RegisterKbClick('KB765', 'Rapise 8.0: how to use Page Objects/Modules')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB765.aspx">KB765</a> Rapise 8.0: how to use Page Objects/Modules

When writing automated tests, it is often necessary to create shared modules that can be used by multiple test cases. These modules serve various purposes, such as handling authentication for applications with a login page, performing necessary actions after test case completion, or working with custom controls within the application, such as dropdown menus, form fields, or grid/table controls. In Rapise 8.0, you have the ability to address all these requirements. Rapise supports two types of modules: RVL (Rapise Visual Language) and JavaScript-based modules. These modules provide a flexible and powerful approach to handle common functionalities across your test cases. By using RVL modules, you can visually create reusable components that encapsulate specific actions or sequences of steps. For example, you can create an RVL module that handles the authentication process by entering credentials and clicking the login button. This module can then be easily reused across multiple test cases that require login functionality. Alternatively, you can leverage JavaScript-based modules in Rapise 8.0. JavaScript is a versatile programming language that allows you to create custom functions and logic to handle complex scenarios. With JavaScript-based modules, you can implement specific interactions with custom controls or perform actions that are not easily achievable through the visual interface of Rapise. Both RVL and JavaScript-based modules in Rapise provide a seamless way to organize and reuse common functionalities within your automated tests. They help improve maintainability, reduce duplication of code, and enhance overall test efficiency.

### <a onclick="return RegisterKbClick('KB764', 'How to switch between applications in a Mobile test')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB764.aspx">KB764</a> How to switch between applications in a Mobile test

Sometimes mobile testing scenarios involve interactions with built-in applications installed on a device. For example you may need to open Messages, locate SMS with a one-time code and use it in your application.

### <a onclick="return RegisterKbClick('KB760', 'Rapise 8.0: using multiselect and datacolumn parameters for comprehensive testing')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB760.aspx">KB760</a> Rapise 8.0: using multiselect and datacolumn parameters for comprehensive testing

The true strength of test automation lies in its capability to execute the same test cases with varying input parameters. In Rapise 8.0, you can achieve this by utilizing multiselect and datacolumn parameters. Let's now explore a specific example to illustrate this concept.

### <a onclick="return RegisterKbClick('KB756', 'Rapise 8.0: development flow for Test Automation Framework in Team Mode')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB756.aspx">KB756</a> Rapise 8.0: development flow for Test Automation Framework in Team Mode

When working as part of a team of automation engineers, the principles mentioned in the Single User Mode still apply. However, there are additional considerations to keep in mind, particularly when using a SpiraTest-based file repository.

### <a onclick="return RegisterKbClick('KB755', 'Rapise 8.0: development flow for Test Automation Framework in Single User Mode')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB755.aspx">KB755</a> Rapise 8.0: development flow for Test Automation Framework in Single User Mode

If you are the sole automation engineer working on test creation with Rapise, it is recommended to follow these basic principles when developing a test automation framework. These guidelines specifically apply to the new Framework mode introduced in Rapise 8.0.

### <a onclick="return RegisterKbClick('KB753', 'Rapise 8.0: how to make a copy of a test automation framework')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB753.aspx">KB753</a> Rapise 8.0: how to make a copy of a test automation framework

There are various situations where duplicating a test automation framework and linking it with another product in SpiraTest becomes necessary. For instance, you may want to create a copy to test the next major version of your application or start fresh with a clean product in SpiraTest. Another common scenario is when you need to transfer the test repository from SpiraTest to Git.

### <a onclick="return RegisterKbClick('KB752', 'Rapise 8.0: how to define and use test set configurations')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB752.aspx">KB752</a> Rapise 8.0: how to define and use test set configurations

Rapise 8.0 provides the simplified way of parameterizing test sets . With the ability to define parameters and create configurations, managing different test scenarios has never been easier. Each configuration automatically includes all the defined parameters, but you can override specific parameter values as needed. If a configuration does not explicitly assign a parameter value, the default value is utilized during test set execution.

### <a onclick="return RegisterKbClick('KB751', 'Rapise 8.0: what are the benefits of using the new Framework mode?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB751.aspx">KB751</a> Rapise 8.0: what are the benefits of using the new Framework mode?

The Framework mode was introduced in Rapise 8.0 to simplify test case and test set management, as well as the management of parameters, page objects/modules, object repositories, and shared code. The legacy Single Test mode required dealing with Sub-Tests and linking tests to SpiraTest on a per test case basis, whereas in the Framework mode, there is a single button labeled Sync with Spira that handles everything. When this button is pressed, test cases and test sets are automatically synchronized with SpiraTest, and files are uploaded/downloaded. In the Framework mode, team collaboration is streamlined because changes made by team members are automatically merged. In addition, it is possible to view diffs and resolve conflicts in complex cases.

### <a onclick="return RegisterKbClick('KB750', 'Rapise 8.0: how to run test cases on different browsers')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB750.aspx">KB750</a> Rapise 8.0: how to run test cases on different browsers

In this article, we will demonstrate how to configure multi-browser execution of test cases in Rapise to ensure compatibility of a web application across major web browsers. This method is specifically designed for the Framework mode, which was introduced in Rapise 8.0.

### <a onclick="return RegisterKbClick('KB749', 'Rapise 8.0: how to define and use parameters in test cases')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB749.aspx">KB749</a> Rapise 8.0: how to define and use parameters in test cases

In test automation projects, it is often necessary to parameterize test cases for various purposes. For instance, this could involve specifying different URLs for running tests in different environments (development, staging, production), or providing user credentials for logging into the system. Additionally, there might be a need to quickly modify playback speed, error handling, and screenshot settings for multiple test cases. In the Rapise 8.0 Framework mode, managing parameters is made simple and convenient, allowing easy creation and management of parameters, including the ability to run the same test case with different input data, such as filling a form with various values to create multiple records in a system database.

### <a onclick="return RegisterKbClick('KB748', 'Rapise 8.0: recommended way of executing code before and after each test case')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB748.aspx">KB748</a> Rapise 8.0: recommended way of executing code before and after each test case

Rapise 8.0 has introduced a new  feature called the Framework mode.  In  this mode a new framework is created with the Common.js file which contains event handlers such as SeSOnTestInit and SeSOnTestFinish that get executed for every test case.

### <a onclick="return RegisterKbClick('KB746', 'Dynamically Clicking on a Desktop App Button Sample (MS-Word)')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB746.aspx">KB746</a> Dynamically Clicking on a Desktop App Button Sample (MS-Word)

We had a customer request for a sample that demonstrates how to click on buttons in a desktop application (in this case a plugin for Microsoft Word) where instead of having to learn each of the buttons individually, you can learn the button container and then loop through the buttons using a Rapise RVL Map.

### <a onclick="return RegisterKbClick('KB745', 'Re-formatting strings and numbers')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB745.aspx">KB745</a> Re-formatting strings and numbers

Sometimes you need to change format of date, time or number to put it into some form or to compare it with known value. Here is a couple of functions.

### <a onclick="return RegisterKbClick('KB739', 'Loading Users into KronoDesk from Excel using Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB739.aspx">KB739</a> Loading Users into KronoDesk from Excel using Rapise

We had a customer that needed to load in a batch of customer users into our KronoDesk service desk platform. The built-in Excel add-on is only able to import help desk tickets, not users. So in this article we explain how you can use Rapise to bulk load in the data using the KronoDesk REST API.

### <a onclick="return RegisterKbClick('KB737', 'Waiting for Process to Start / Stop in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB737.aspx">KB737</a> Waiting for Process to Start / Stop in Rapise

Here is a couple of useful functions for the case you need to wait for a process.

### <a onclick="return RegisterKbClick('KB732', 'Run Rapise tests on Bitbar')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB732.aspx">KB732</a> Run Rapise tests on Bitbar

Bitbar is a browser and device farm that enables it's clients to run cross-browser and mobile tests remotely.

### <a onclick="return RegisterKbClick('KB728', 'Windows Defender: Trojan:JS/Mountsi.B!ml False Alarm about Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB728.aspx">KB728</a> Windows Defender: Trojan:JS/Mountsi.B!ml False Alarm about Rapise

Recently Rapise has problem working on some hosts with Windows Defender.  The problem occurs as a result of one of the key files being quarantined. Here we provide necessary workarounds.

### <a onclick="return RegisterKbClick('KB724', 'Check if File is in the Downloads Folder')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB724.aspx">KB724</a> Check if File is in the Downloads Folder

When you test scenario has some sort of download we may need to wait/verify for download to be done. Here we provide some functions designed to help in such cases.

### <a onclick="return RegisterKbClick('KB722', 'Play All Sheets in RVL')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB722.aspx">KB722</a> Play All Sheets in RVL

Use many sheets in RVL? Want to execute them all at once without calling one-by-one. Here is a simple solution.

### <a onclick="return RegisterKbClick('KB718', 'Sending Email With Test Report To Spira Users After Execution')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB718.aspx">KB718</a> Sending Email With Test Report To Spira Users After Execution

Sometimes you need to be notified of one test with some summary. And here we give you an example. With this approach, interested users can receive an email about the status of a test with a report.

### <a onclick="return RegisterKbClick('KB712', 'File Checkpoints in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB712.aspx">KB712</a> File Checkpoints in Rapise

Sometimes you need to compare files: documents, invoices, logs etc. Sometimes you need to use direct comparison or pattern comparison. You may need to compare text, PDF or binary files. Here we provide one of the solutions for Rapise.

### <a onclick="return RegisterKbClick('KB705', 'How to switch from `Chrome HTML` to `Selenium - Chrome` browser profile')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB705.aspx">KB705</a> How to switch from `Chrome HTML` to `Selenium - Chrome` browser profile

Chrome extension and Chrome HTML browser profile have been deprecated. Chrome extension and Chrome HTML browser profile have been deprecated. The reason is that Google is going to remove MV2 extensions from the store . At Inflectra we decided not to migrate to MV3 extension format because it is unlikely possible due to security changes (primary reason of appearance of MV3). To make Chrome based testing possible we implemented Selenium Based Recorder . So please consider switching to Selenium - Chrome browser profile.

### <a onclick="return RegisterKbClick('KB697', 'Modifying Date string')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB697.aspx">KB697</a> Modifying Date string

Sometimes you need to manipulate a date string: add year, find same date next month, add an hour to a meeting start time and so on. Here we have a function for doing increments and subtractions of that kind.

### <a onclick="return RegisterKbClick('KB692', 'How to load Chrome browser extensions via Selenium profile')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB692.aspx">KB692</a> How to load Chrome browser extensions via Selenium profile

If you need specific browser extensions for running web tests you may specify them in Selenium profile.

### <a onclick="return RegisterKbClick('KB689', 'How to find Rapise activation code that is used on a machine')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB689.aspx">KB689</a> How to find Rapise activation code that is used on a machine

In your Customer Area on Inflectra website you have a list of Rapise activation codes. To find out which code is used on a specific machine follow these simple steps.

### <a onclick="return RegisterKbClick('KB686', 'How to set permanent user profile for Selenium - Chrome/Edge profile')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB686.aspx">KB686</a> How to set permanent user profile for Selenium - Chrome/Edge profile

When you are recording/running a test via Selenium browser profiles in Rapise - by default a new user profile is created when new instance of a browser is launched. It means that new browser instance starts with empty cache, no cookies, etc. Sometimes it complicates testing. If you are testing a Web application that requires SMS/Email code to authorize a browser then you will have to do it every time. Automation of  input of SMS/Email codes may be really hard. It is much easier to authorize a browser manually once and then run tests for long period of time. To make it work you will need to configure a permanent user profile for the browser used for testing. Learn how to do it for Chrome/Edge from this article.

### <a onclick="return RegisterKbClick('KB685', 'How to send an email via Office 365 account with OAuth')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB685.aspx">KB685</a> How to send an email via Office 365 account with OAuth

In the past we could use basic authentication to send an email but today this method of authentication is considered insecure and is disabled in major email services like Office 365 and Gmail. Read this article to learn how to send an email via SMTP with OAuth using Office 365 account.

### <a onclick="return RegisterKbClick('KB683', 'How to set download folder for Selenium - Chrome profile')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB683.aspx">KB683</a> How to set download folder for Selenium - Chrome profile

If your Web testing scenario includes file downloading you may configure `Selenium - Chrome` profile and specify which folder to use to store downloaded files.

### <a onclick="return RegisterKbClick('KB682', 'Sample Excel File')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB682.aspx">KB682</a> Sample Excel File

This is a sample Excel file to download and use during demos.

### <a onclick="return RegisterKbClick('KB681', 'How to disable browser notifications for Selenium Chrome')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB681.aspx">KB681</a> How to disable browser notifications for Selenium Chrome

Some of the Web resources used for automated tests have a browser's push notifications active.However, push notifications creating unnecessary records in RVL table.

### <a onclick="return RegisterKbClick('KB675', 'How to wait for Web element to disappear from screen')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB675.aspx">KB675</a> How to wait for Web element to disappear from screen

Rapise has built-in function Navigator.DoWaitFor to wait for object to appear. If you need to do the opposite add the following function into your User.js.

### <a onclick="return RegisterKbClick('KB673', 'Uploading files to ftp/sftp')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB673.aspx">KB673</a> Uploading files to ftp/sftp

This article contains a function that may be used to upload file to FTP/SFTP.  This script uses WinSCP (https://winscp.net/eng/download.php) free tool to perform an upload.

### <a onclick="return RegisterKbClick('KB671', 'How to attach a file to a test run in Spira')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB671.aspx">KB671</a> How to attach a file to a test run in Spira

By default Rapise uploads all the screenshots to a test run in Spira but you may need to upload a specific file, e.g. text file or a spreadhseet.

### <a onclick="return RegisterKbClick('KB663', 'Scripting Drag&Drop for Web Tests')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB663.aspx">KB663</a> Scripting Drag&Drop for Web Tests

This function is useful for scripting DragNDrop for web tests.

### <a onclick="return RegisterKbClick('KB662', 'Check if Excel Sheet Exists')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB662.aspx">KB662</a> Check if Excel Sheet Exists

Function to check if a given Excel workbook contains a sheet with the given name.

### <a onclick="return RegisterKbClick('KB655', 'How to work with Shadow DOM via Native Selenium API in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB655.aspx">KB655</a> How to work with Shadow DOM via Native Selenium API in Rapise

If your scripting is style is writing JavaScript and using Native Selenium API and you wish to dig inside Shadow DOM - read this short article. Requires Rapise 7.3+

### <a onclick="return RegisterKbClick('KB654', 'Moving Rapise Tests Between Spira Products')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB654.aspx">KB654</a> Moving Rapise Tests Between Spira Products

Sometimes you want to move or clone tests. If tests have linked Rapise test cases, then you need to properly handle the move as described here.

### <a onclick="return RegisterKbClick('KB652', 'Resolving 'Connection to Chrome Failed'')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB652.aspx">KB652</a> Resolving 'Connection to Chrome Failed'

Recent change in MS Edge browser affects Edge and Chrome browser extensions for Rapise. Here we show the workaround.

### <a onclick="return RegisterKbClick('KB651', 'Running Rapise test sets without third-party tools')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB651.aspx">KB651</a> Running Rapise test sets without third-party tools

Recommended way of running Rapise tests on regular basis is using SpiraTest and RapiseLauncher. Other options include Azure DevOps and Jenkins. But there is also a way of running Rapise tests via command line. If this is what you are looking for then read this article.

### <a onclick="return RegisterKbClick('KB649', 'Query Data from SQLite file')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB649.aspx">KB649</a> Query Data from SQLite file

Some application store valuable information in sqlite format. This is a way to deal with it.

### <a onclick="return RegisterKbClick('KB648', 'Checking .zip file contents with Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB648.aspx">KB648</a> Checking .zip file contents with Rapise

Sometimes you need to check if some files are available in the .zip file. You may read the list of .zip file contents with Rapise.

### <a onclick="return RegisterKbClick('KB646', 'How to press special keys on Android keyboard')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB646.aspx">KB646</a> How to press special keys on Android keyboard

To enter characters one may use AndroidObject.DoSendKeys, but sometimes you need to send special characters like ENTER. Learn how from this article.

### <a onclick="return RegisterKbClick('KB645', 'How to Ask User for Input')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB645.aspx">KB645</a> How to Ask User for Input

For some automatic tests manual interaction is still required. For example, you may get authorization code to your phone and enter it to log into application. So you need to ask user for input to proceed execution.

### <a onclick="return RegisterKbClick('KB644', 'Reading DOM element runtime property')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB644.aspx">KB644</a> Reading DOM element runtime property

Sometimes we need to get runtime property for the element. For example, we need to get a background color to know that element is highlighted for a user. Anything configured via stylesheet is usually a property: color, font, margins, dimensions, visibility etc.

### <a onclick="return RegisterKbClick('KB639', 'Dismiss Safari popup on a Mobile device')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB639.aspx">KB639</a> Dismiss Safari popup on a Mobile device

If you are running a web test on a mobile device via Appium then you have three options of how to accept a popup window alert.

### <a onclick="return RegisterKbClick('KB636', 'Silent Installation of Rapise for CI/CD')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB636.aspx">KB636</a> Silent Installation of Rapise for CI/CD

Sometimes you need to perform unattended installation of Rapise for test execution only. It may be a part of automated test execution step executed by CI/CD pipeline. Here is the snippet.

### <a onclick="return RegisterKbClick('KB635', 'Create an incident in Spira from Rapise test')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB635.aspx">KB635</a> Create an incident in Spira from Rapise test

In some cases a test may automatically determine that it's failure is definitely caused by a bug in software under test.  In this case the test may create an incident in Spira using Spira.CreateIncident action. Requires Rapise 7.2+.

### <a onclick="return RegisterKbClick('KB634', 'Comparing Web Page to Text or Word File')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB634.aspx">KB634</a> Comparing Web Page to Text or Word File

Sometimes you need to validate the whole page text. This sample demonstrates usage of plain text or MSWord file for this purpose with some help of myers-diff npm module

### <a onclick="return RegisterKbClick('KB631', 'Reading DOM element style property')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB631.aspx">KB631</a> Reading DOM element style property

Sometimes we need to get runtime property for the element. For example, we need to get a background color to know that element is visually highlighted for a user. This topic shows how it may be done with Navigator.ExecJS.

### <a onclick="return RegisterKbClick('KB623', 'Fix DPI scaling for RDP connections to Windows VMs')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB623.aspx">KB623</a> Fix DPI scaling for RDP connections to Windows VMs

If you connect to a Windows VM via RDP and see that all fonts are very small and it is hard to read text on screen then this article is for you.  If you can access the VM without RDP then you may change scaling via Display Settings in Windows and thus make text larger. But if this VM is Azure or AWS hosted VM then you may see a message: the display settings can't be changed from a remote session.

### <a onclick="return RegisterKbClick('KB608', 'What Blocked status means for a Test Run')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB608.aspx">KB608</a> What Blocked status means for a Test Run

When you run a test with Spira (via RapiseLauncher) you may get a `Blocked` status for a test run. It is displayed in the Test Runs view and Test Sets view both in Spira and Spira Dashboard in Rapise.

### <a onclick="return RegisterKbClick('KB603', 'The 2021 release wave 2 for Dynamics 365 for Sales')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB603.aspx">KB603</a> The 2021 release wave 2 for Dynamics 365 for Sales

The 2021 release wave 2 for Dynamics 365 contains hundreds of new features across Dynamics 365 applications. If you are using Rapise to test a Dynamics 365 for Sales instance you may be affected by the coming changes. To help you update existing tests we summarized differences (important for UI automation) between old and new versions of Dynamics 365 for Sales.

### <a onclick="return RegisterKbClick('KB602', 'Auto start/stop Azure VM to run UI tests')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB602.aspx">KB602</a> Auto start/stop Azure VM to run UI tests

If you are using a Microsoft Azure VM to run UI tests  and do not want to keep the VM always running (to save budget) you may configure automatic start/stop and auto logon for the machine.

### <a onclick="return RegisterKbClick('KB600', 'Change the default Screenshot folder')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB600.aspx">KB600</a> Change the default Screenshot folder

If a test is configured to capture screenshots during playback - Rapise puts then into Reports folder in the working directory of the test. If you want to copy screenshots to a different location or instruct Rapise to put images into a different folder - check out this article.

### <a onclick="return RegisterKbClick('KB599', 'RVL Toolbox to boost productivity in writing tests')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB599.aspx">KB599</a> RVL Toolbox to boost productivity in writing tests

If you are new to Rapise or use it occasionally you may not know or remember all the cool objects and actions to use in your tests. With RVL Toolbox you can get access to required information by searching for it without leaving the RVL Editor.

### <a onclick="return RegisterKbClick('KB598', 'Using RVL Merge Utility')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB598.aspx">KB598</a> Using RVL Merge Utility

Sometimes we need to do Diff and Merge operations when working with external Source Control systems (git, svn, etc). This utility (ExcelMerge) will enable this functionality.

### <a onclick="return RegisterKbClick('KB597', 'Using Regular Expressions in Object Locators')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB597.aspx">KB597</a> Using Regular Expressions in Object Locators

Sometimes application components change and we need more flexibility when creating locators. You may use regex: prefix for locator components to make it more flexible. Very similar approach applies to Managed (DotNet Forms), Java and UI Automation locators.

### <a onclick="return RegisterKbClick('KB596', 'SoftAssert in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB596.aspx">KB596</a> SoftAssert in Rapise

Sometimes you need more control on whether to stop execution when an assertion fails. Assertion that does not stop execution is Soft Assertion.  With soft assertions you may force it to fail later when all expected errors are collected or keep running until the very end.

### <a onclick="return RegisterKbClick('KB594', 'Returning Values from RVL sheets')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB594.aspx">KB594</a> Returning Values from RVL sheets

Sometimes you need to return a value or a set of values from RVL.DoPlaySheet or RVL.DoPlayScript calls. This sample shows you how.

### <a onclick="return RegisterKbClick('KB588', 'Using SeeTest Instrumented Mode')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB588.aspx">KB588</a> Using SeeTest Instrumented Mode

If you are testing a native mobile application using  SeeTest you have an option to switch to NATIVE_APP_INSTRUMENTED context and record/playback tests in it.

### <a onclick="return RegisterKbClick('KB586', 'How to get AWS Secret from Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB586.aspx">KB586</a> How to get AWS Secret from Rapise

Learn how to query AWS Secret from Rapise. Requires Rapise 6.7+

### <a onclick="return RegisterKbClick('KB585', 'How to run cross-browser tests on AWS Device Farm')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB585.aspx">KB585</a> How to run cross-browser tests on AWS Device Farm

Learn how to configure Rapise to run cross-browser tests on AWS Device Farm. Requires Rapise 6.7+

### <a onclick="return RegisterKbClick('KB584', 'Rapise and Microsoft Defender Antivirus')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB584.aspx">KB584</a> Rapise and Microsoft Defender Antivirus

If you use Microsoft Defender Antivirus to protect your system then you may need to perform certain steps to use Rapise effectively.

### <a onclick="return RegisterKbClick('KB583', 'Rapise and Avast Antivirus')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB583.aspx">KB583</a> Rapise and Avast Antivirus

If you use Avast Antivirus to protect your system then you may need to perform certain steps to install and use Rapise.

### <a onclick="return RegisterKbClick('KB581', 'Rapise 6.6 Built In Help Fix')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB581.aspx">KB581</a> Rapise 6.6 Built In Help Fix

Rapise help system has been updated to latest template introducing new search and navigation capabilities. The side effect is that is it not compatible with default HTML-based viewer engine and may look corrupted.

### <a onclick="return RegisterKbClick('KB574', 'Advanced search for elements in desktop applications')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB574.aspx">KB574</a> Advanced search for elements in desktop applications

If a desktop application is dynamic and recorded locators do not work then there is a way to search for elements using UIAObject.DoFindElementByCondition and UIAObject.DoFindElementsByCondition.Requires Rapise 6.6+

### <a onclick="return RegisterKbClick('KB572', 'Specifying Timeout for REST Calls')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB572.aspx">KB572</a> Specifying Timeout for REST Calls

Rapise REST module uses 100 seconds timeout by default. Since Rapise 6.6 you may make it longer or shorter.

### <a onclick="return RegisterKbClick('KB570', 'Easy Way to Dump Sheet Variables')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB570.aspx">KB570</a> Easy Way to Dump Sheet Variables

We sometimes need to dump diagnostic information to the report. It may be values of some or all local variables.

### <a onclick="return RegisterKbClick('KB569', 'Making Negative API Tests')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB569.aspx">KB569</a> Making Negative API Tests

By default Rapise reports an error when REST service request fails. With the negative test the request should fail, so we want the reporting to behave differently.

### <a onclick="return RegisterKbClick('KB568', 'How to rename a Rapise test linked to a Spira Test Case')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB568.aspx">KB568</a> How to rename a Rapise test linked to a Spira Test Case

It is a 3 step process: 1. SaveAs or Clone the test with a new name 2. Save it to Spira 3. Delete old test copy from Documents module in Spira (optional)

### <a onclick="return RegisterKbClick('KB566', 'Merge Strings in RVL')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB566.aspx">KB566</a> Merge Strings in RVL

Here we show a few examples on how to combine strings in RVL.

### <a onclick="return RegisterKbClick('KB565', 'Customize Rapise Report Messages')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB565.aspx">KB565</a> Customize Rapise Report Messages

Sometimes we need to override the message written to the report when some action is performed.

### <a onclick="return RegisterKbClick('KB561', 'Using Free Apple Development account to test on mobile devices')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB561.aspx">KB561</a> Using Free Apple Development account to test on mobile devices

It is possible to use Free Apple Developer account for iOS testing. But it requires some knowledge and time to setup.

### <a onclick="return RegisterKbClick('KB558', 'Mobile testing with Experitest SeeTest')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB558.aspx">KB558</a> Mobile testing with Experitest SeeTest

Connecting to the mobile devices hosted by SeeTest is easy. Learn how from this article. Requires Rapise 6.5+.

### <a onclick="return RegisterKbClick('KB556', 'RapiseChromeExtension version 3')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB556.aspx">KB556</a> RapiseChromeExtension version 3

Along with Rapise 6.5 we are releasing an update to the RapiseChromeExtension.  The new version (v3) is back compatible. It means that older versions of Rapise should work with it without issues. Rapise 6.5+ will require you to update the extension if you have RapiseChromeExtension v2.

### <a onclick="return RegisterKbClick('KB555', 'Recording Web and Desktop actions into the same test')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB555.aspx">KB555</a> Recording Web and Desktop actions into the same test

Starting from Rapise 6.5 you may record both Web and Desktop actions into the same test.

### <a onclick="return RegisterKbClick('KB553', 'Basic authentication in Web tests')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB553.aspx">KB553</a> Basic authentication in Web tests

Legacy Web applications still may use basic authentication. So when you navigate to an application URL the browser shows a dialog with Username and Password fields to enter.  The content of this dialog is not a Web content so recording and playback in a Web test will not work.

### <a onclick="return RegisterKbClick('KB551', 'Searching for a Web element by text that contains non-breaking spaces')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB551.aspx">KB551</a> Searching for a Web element by text that contains non-breaking spaces

Are you writing XPath to find an element using its inner text but it does not work? Most likely the text contains non-breaking spaces. This situation is described in detail in our UI Test Automation Playground.

### <a onclick="return RegisterKbClick('KB545', 'How To Read Environment Variable in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB545.aspx">KB545</a> How To Read Environment Variable in Rapise

Here is a number of ways of doing it.

### <a onclick="return RegisterKbClick('KB543', 'Values passed from RapiseLauncher to Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB543.aspx">KB543</a> Values passed from RapiseLauncher to Rapise

When a test is executed by RapiseLauncher it may access key properties of the test run,  custom test set properties and test case parameters. Requires Rapise 6.4.19.16+

### <a onclick="return RegisterKbClick('KB541', 'Automating TinyMCE 2020')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB541.aspx">KB541</a> Automating TinyMCE 2020

The world moves forward and  our older KB articles related to TinyMCE became outdated. In this article we present a modern way (as of year 2020) of automating TinyMCE controls.

### <a onclick="return RegisterKbClick('KB540', 'Unified Service Desk with Chrome for Hosted Controls')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB540.aspx">KB540</a> Unified Service Desk with Chrome for Hosted Controls

If you want to use Unified Service Desk with Chrome and test it with Rapise you need to configure it properly.

### <a onclick="return RegisterKbClick('KB539', 'Working with Rapise AWS SaaS Images')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB539.aspx">KB539</a> Working with Rapise AWS SaaS Images

Rapise is available as a SaaS solution. Here we describe step-by-step guide how to make several Rapise cloud instances ready for test execution.

### <a onclick="return RegisterKbClick('KB538', 'Increasing the Size of Rapise Images in Spira Reports')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB538.aspx">KB538</a> Increasing the Size of Rapise Images in Spira Reports

When you run Rapise automated tests using RapiseLauncher the system will automatically embed the images from Rapise into the various test cases and test run reports. By default the report format has relatively small images so that they can fit easily into the tables of expected result and actual results. However some users have asked for ways to make the images bigger.

### <a onclick="return RegisterKbClick('KB537', 'Using Extra Columns in RVL to control screenshots')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB537.aspx">KB537</a> Using Extra Columns in RVL to control screenshots

Sometimes we need more fine-grained control over screenshots. Here we describe the way of using H column for defining which actions will have what kind of screenshot captured.

### <a onclick="return RegisterKbClick('KB533', 'Make screenshots on failure only')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB533.aspx">KB533</a> Make screenshots on failure only

Automatic screenshots on every test step may occupy too much space. Learn how to make  a screenshot on failure only.

### <a onclick="return RegisterKbClick('KB532', 'How to set path for local browser and mobile profiles')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB532.aspx">KB532</a> How to set path for local browser and mobile profiles

Since version 6.3 Rapise has support for local browser and mobile profiles. Using it you may package browser profiles along with tests. What if you want to reuse browser profiles between different projects? Or have sets of profiles for different situations? You may now set path to profile directory using a special global variable.  Supported in Rapise 6.4+

### <a onclick="return RegisterKbClick('KB531', 'Handling Grouped Data in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB531.aspx">KB531</a> Handling Grouped Data in Rapise

Sometimes we need to process data in groups or even in hierarchical way. Here we will show how to make it using plain table and loop in RVL.

### <a onclick="return RegisterKbClick('KB530', 'Why Does Rapise Use DoXXXX Naming for Methods')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB530.aspx">KB530</a> Why Does Rapise Use DoXXXX Naming for Methods

A customer asked us why Rapise uses Pascal Case names for the various operations, functions and properties, as well as the reason why operations are prefixed with a "Do" action name.

### <a onclick="return RegisterKbClick('KB529', 'Using Zoom/GoToMeeting for Support Session')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB529.aspx">KB529</a> Using Zoom/GoToMeeting for Support Session

Learn how to connect to a support session and how to enable Rapise Expert to remotely control your Rapise instance.

### <a onclick="return RegisterKbClick('KB528', 'Import JUnit XML Report into Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB528.aspx">KB528</a> Import JUnit XML Report into Rapise

Some unit testing tools produce reports in JUnit XML format. Here we show how to import it into Rapise test report.

### <a onclick="return RegisterKbClick('KB526', 'How to disable recording URLs')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB526.aspx">KB526</a> How to disable recording URLs

When you do recording of test steps for a Web application - Rapise by default captures page URLs and stores them in the object repository. Learn how to  disable URL recording from this article. Requires Rapise 6.4+

### <a onclick="return RegisterKbClick('KB522', 'Windows Calculator')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB522.aspx">KB522</a> Windows Calculator

For Rapise training purposes we may need a simple desktop application that can be executed on any Windows version. What can be simpler than Windows Calculator?

### <a onclick="return RegisterKbClick('KB519', 'Reading values from .properties files in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB519.aspx">KB519</a> Reading values from .properties files in Rapise

.properties is a file format mainly used in Java related technologies to store the configurable values. Here we show how to work with it in Rapise.

### <a onclick="return RegisterKbClick('KB518', 'JavaScript version used by Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB518.aspx">KB518</a> JavaScript version used by Rapise

Below we provide the information on JavaScript version used by Rapise.

### <a onclick="return RegisterKbClick('KB517', 'How to disable Google Chrome Software Reporter Tool')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB517.aspx">KB517</a> How to disable Google Chrome Software Reporter Tool

We've seen systems where Software Reporter Tool (which is a part of Google Chrome) may produce very high CPU load and make system  suspending/resuming processes randomly. Because of this Rapise may not be able to connect to Chrome for recording/playback. In fact many things may go wrong when CPU load is 100%.

### <a onclick="return RegisterKbClick('KB516', 'The pipe is being closed message from Rapise installer')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB516.aspx">KB516</a> The pipe is being closed message from Rapise installer

When you install Rapise on some systems you may get an error message: 0x800700e8 - The pipe is being closed

### <a onclick="return RegisterKbClick('KB515', 'Checking String Length in RVL')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB515.aspx">KB515</a> Checking String Length in RVL

If you need to get the size of the string, then here is a couple of possible ways for doing it.

### <a onclick="return RegisterKbClick('KB514', 'How to Press Alt, Shift, Ctrl or Win key Alone')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB514.aspx">KB514</a> How to Press Alt, Shift, Ctrl or Win key Alone

SendKeys is good for making key combinations, but this way does not work when you need to press special key. Here is a useful workaround.

### <a onclick="return RegisterKbClick('KB508', 'Compare Images in JavaScript')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB508.aspx">KB508</a> Compare Images in JavaScript

To compare images in JavaScript you may use Tester.AssertImage.

### <a onclick="return RegisterKbClick('KB507', 'UIAutomation2 Locator')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB507.aspx">KB507</a> UIAutomation2 Locator

Rapise 6.3 includes an experimental feature - new UIAutomation2 locator for UIAutomation based desktop testing. Rather than specifying a path from the element tree root to the element this locator relies on built-in ability of UIAutomation to search for elements based on property values.

### <a onclick="return RegisterKbClick('KB506', 'How to define and use a dynamic Web locator')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB506.aspx">KB506</a> How to define and use a dynamic Web locator

Imaging you have a table with dynamic data on the page. It is not possible to learn every cell. But it is possible to parameterize the locator of a cell and access cells you need during test playback.

### <a onclick="return RegisterKbClick('KB504', 'Referring Repository Objects from Maps')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB504.aspx">KB504</a> Referring Repository Objects from Maps

Sometimes you need to specify object and data for it in the map. Here we will show how to make it using Rapise built in maps and available APIs.

### <a onclick="return RegisterKbClick('KB503', 'Accessing svg elements via XPath or CSS')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB503.aspx">KB503</a> Accessing svg elements via XPath or CSS

By default straight forward XPath to SVG primitives will not work.  So XPath ending like .../svg[2]/path will fail. Here is a workaround.

### <a onclick="return RegisterKbClick('KB502', 'Passing Map as a Parameter into RVL Sheet')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB502.aspx">KB502</a> Passing Map as a Parameter into RVL Sheet

This topic covers more detailed description on how to pass map from one Sheet to another in RVL

### <a onclick="return RegisterKbClick('KB501', 'Passing Sub-Test Parameters')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB501.aspx">KB501</a> Passing Sub-Test Parameters

Here we will cover several ways of passing parameters and returning values from Sub-Tests.

### <a onclick="return RegisterKbClick('KB499', 'How to set size of a browser window')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB499.aspx">KB499</a> How to set size of a browser window

To ensure that web tests always run on a browser window of a specific size you may use different techniques.

### <a onclick="return RegisterKbClick('KB497', 'Connecting to PostgreSQL from Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB497.aspx">KB497</a> Connecting to PostgreSQL from Rapise

If you need to connect Database object to PostgreSQL database follow these simple steps.

### <a onclick="return RegisterKbClick('KB496', 'Connecting to MySQL from Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB496.aspx">KB496</a> Connecting to MySQL from Rapise

If you need to connect Database object to MySQL database follow these simple steps.

### <a onclick="return RegisterKbClick('KB493', 'Rapise Data Generator')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB493.aspx">KB493</a> Rapise Data Generator

Sometimes you need to feed your application with demo data that is human-readable but still random. Here is such a generator for Rapise.

### <a onclick="return RegisterKbClick('KB492', 'Calling NodeJS script from Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB492.aspx">KB492</a> Calling NodeJS script from Rapise

NodeJS provides a lot of unique features and plethora of features implemented in npm packages. Here we describe how to combine such a script with a Rapise test.

### <a onclick="return RegisterKbClick('KB489', 'Headless Firefox Testing')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB489.aspx">KB489</a> Headless Firefox Testing

Firefox 56+ supports headless mode on Windows.  You can use it to Run Rapise tests via Selenium integration.

### <a onclick="return RegisterKbClick('KB488', 'Rapise Objects and Files Metadata for Code Completion')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB488.aspx">KB488</a> Rapise Objects and Files Metadata for Code Completion

Rapise scripts and engine are mostly implemented in JS. Some people prefer to use 3rd party editors for scripting. This is helpful when integrating Rapise tests into bigger development pipeline together with other scripts and config files. Here we explain where information about objects and types is provided for Code Completion/Intellisense support in 3rd party editors.

### <a onclick="return RegisterKbClick('KB487', 'How to Do Mouse Wheel Scroll in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB487.aspx">KB487</a> How to Do Mouse Wheel Scroll in Rapise

Some controls require mouse wheel input. Here is how to do it.

### <a onclick="return RegisterKbClick('KB486', 'Automatic learning of objects in a Java application')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB486.aspx">KB486</a> Automatic learning of objects in a Java application

If you prefer writing test steps manually in JavaScript then it might be helpful to automatically learn all child objects of a Java application to make them available for scripting.

### <a onclick="return RegisterKbClick('KB485', 'How to Enable JRE Accessibility Only for Tests')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB485.aspx">KB485</a> How to Enable JRE Accessibility Only for Tests

By default Rapise is using Java Accessibility Bridge by changing some Java Runtime Environment (JRE)-wide configuration files. So all applications using same JRE will use the modified version. If your goal is to have Accessibility only for test runs, then there is another way of doing that.

### <a onclick="return RegisterKbClick('KB484', 'Comparing Parts of Images')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB484.aspx">KB484</a> Comparing Parts of Images

Sometimes compared images partially differ due to some dynamic part. Here we show how to do partial comparison in this case.

### <a onclick="return RegisterKbClick('KB483', 'Renaming Objects in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB483.aspx">KB483</a> Renaming Objects in Rapise

Good object naming is important for test script clarity and readability. Default names are detected during record/learn session and results sometimes are cumbersome, obscure or irrelevant. Here we show how to give proper names to objects.

### <a onclick="return RegisterKbClick('KB482', 'How to get contents of the HEAD element in a DOM')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB482.aspx">KB482</a> How to get contents of the HEAD element in a DOM

In this article we will get contents of the HEAD element to get the links to all referenced stylesheets. It may be useful if you plan to verify that a set of CSS did not change for a page.

### <a onclick="return RegisterKbClick('KB479', 'Rapise and Citrix/RDP')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB479.aspx">KB479</a> Rapise and Citrix/RDP

We are getting a lot of questions on how to use Rapise with Citrix and remotely accessed VMs . Here is the answer.

### <a onclick="return RegisterKbClick('KB477', 'Inspecting custom UI control with UI Automation Spy')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB477.aspx">KB477</a> Inspecting custom UI control with UI Automation Spy

UI Automation is a default technology for testing desktop applications on Windows. If your application is not .NET or Java then  Rapise will turn on UI Automation library during recording. If some elements in your application are not recognized or there are issues with playback of recorded steps then most likely your application is using custom UI controls. You may inspect those controls and send information to Rapise support team to get recommendations on how to proceed with testing.

### <a onclick="return RegisterKbClick('KB475', 'How to Get All Links on the Page with Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB475.aspx">KB475</a> How to Get All Links on the Page with Rapise

Sometimes you need to go through all links to check something. Here are two ways: JS and RVL of doing it with Rapise.

### <a onclick="return RegisterKbClick('KB473', 'Viewing Rapise logs in Spira')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB473.aspx">KB473</a> Viewing Rapise logs in Spira

When you execute Rapise tests via Rapise Launcher - test reports and logs are automatically uploaded to Spira. But verbose level is always set to Level 1 by Rapise Launcher. If you need more detailed log set verbose to 2 or 3 in test case properties.

### <a onclick="return RegisterKbClick('KB472', 'Read PDF Text with Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB472.aspx">KB472</a> Read PDF Text with Rapise

Sometimes you need to check that some text is available in the PDF document. Sometimes you need to extract some value from it. So you need access to plain text content of the document.  Here we explain how to do it with Rapise.

### <a onclick="return RegisterKbClick('KB470', 'How to run a PowerShell script in Rapise test')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB470.aspx">KB470</a> How to run a PowerShell script in Rapise test

To run a PowerShell script use Global.DoLaunch action.

### <a onclick="return RegisterKbClick('KB468', 'Using Rapise with Java Web Start Applications')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB468.aspx">KB468</a> Using Rapise with Java Web Start Applications

Rapise supports testing of Java applications. In the case that application is launched using Java Web Start (JWS) additional steps are needed to successfully test an application.

### <a onclick="return RegisterKbClick('KB466', 'How to deal with custom UI Automation controls')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB466.aspx">KB466</a> How to deal with custom UI Automation controls

This article is for those who test a desktop application via  UI Automation library.  Since desktop applications are frequently built using UI controls from different vendors  and the number of such controls available on the market is pretty big (> 1k)  - Rapise may not have out-of-the-box support for some controls in your application.  For such cases Rapise offers a low level API to navigate UI Automation tree of elements inside an application and read/write element properties. In this tutorial we'll show how to use this API and quickly add minimal support for a custom control.

### <a onclick="return RegisterKbClick('KB465', 'How to check if web element is really visible on screen')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB465.aspx">KB465</a> How to check if web element is really visible on screen

Checking if element is visible on screen may be a tricky task. It's usually not a problem in manual testing but there are nuances when you do test automation.

### <a onclick="return RegisterKbClick('KB462', 'How to check if a web dropdown element has specific option or not')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB462.aspx">KB462</a> How to check if a web dropdown element has specific option or not

If a test needs to verify existence or absence of a specific option in a dropdown you can do it via a simple function presented below.

### <a onclick="return RegisterKbClick('KB458', 'How to start Rapise Launcher on Windows Boot')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB458.aspx">KB458</a> How to start Rapise Launcher on Windows Boot

Windows may reboot because of various reasons. If you use a machine to run Rapise tests on regular basis than you want RapiseLauncher to be started automatically after system reboot.

### <a onclick="return RegisterKbClick('KB457', 'How to organize custom code in User.js')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB457.aspx">KB457</a> How to organize custom code in User.js

Every test has a User.js file and it is a place to put custom code and functions. This code must follow a few rules.

### <a onclick="return RegisterKbClick('KB453', 'Working Directory of a Test and Relative Paths')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB453.aspx">KB453</a> Working Directory of a Test and Relative Paths

When Rapise starts execution of a test, it sets working directory. If a test refers to a file using a relative path then the absolute path is calculated using the working directory.

### <a onclick="return RegisterKbClick('KB448', 'How to create a Rapise web object from XPath')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB448.aspx">KB448</a> How to create a Rapise web object from XPath

In some cases it may be convenient to construct Rapise Objects dynamically rather than capture in advance with record/learn. In Web tests you can do it via Navigator.Find and Navigator.SeSFind.

### <a onclick="return RegisterKbClick('KB446', 'Getting browser console logs')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB446.aspx">KB446</a> Getting browser console logs

In some cases it may be useful to analyze browser-side logs. For example, if you are using Navigator.ExecJS action.

### <a onclick="return RegisterKbClick('KB444', 'How to get title of a window')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB444.aspx">KB444</a> How to get title of a window

In this short topic we describe how to get the value of a window title. The way depends on the application type.

### <a onclick="return RegisterKbClick('KB443', 'Closing application under test from Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB443.aspx">KB443</a> Closing application under test from Rapise

There are different techniques one can use to close the application being tested from Rapise. The method to choose may depend on the application type.

### <a onclick="return RegisterKbClick('KB442', 'Troubleshooting Rapise Install')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB442.aspx">KB442</a> Troubleshooting Rapise Install

If you install Rapise on non-vanilla system, e.g. old workstation with a lot of other software, especially with anti-virus and development tools, it may end-up in a state when some components are not registered  successfully and some files are blocked.  In this article we describe symptoms and ways to cure.

### <a onclick="return RegisterKbClick('KB439', 'Troubleshooting Rapise Uninstall')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB439.aspx">KB439</a> Troubleshooting Rapise Uninstall

In the unlikely case of unsuccessful deinstallation of Rapise (e.g. if computer power switched off during deinstallation,  or Windows Installer process terminated) there is a way to manually fix the system and complete interrupted deinstallation process.. Automatic uninstall may no longer properly work and leave files in Program Files folder.

### <a onclick="return RegisterKbClick('KB436', 'Handling Toast Messages')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB436.aspx">KB436</a> Handling Toast Messages

The toast message is like an alert box that is only shown for a couple of seconds when something happens (i.e. when the user clicks on a button, submits a form, etc.). This article describes how to deal with toast messages in Rapise.

### <a onclick="return RegisterKbClick('KB434', 'How to Send Special Keys to Selenium Targets')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB434.aspx">KB434</a> How to Send Special Keys to Selenium Targets

Sometimes you need to press Tab, Return, Backspace to the web page. Here is how you may do it through WebDriver.

### <a onclick="return RegisterKbClick('KB433', 'Using Extra Columns in RVL to add Report Attributes')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB433.aspx">KB433</a> Using Extra Columns in RVL to add Report Attributes

You may use extra RVL columns for your own purposes. In the simple case for storing additional information (notes, links). In more advanced cases extra columns may affect script behavior: add report attributes, control screenshots, control custom actions, assign variable values etc. Here we provide live example of one of such use-cases.

### <a onclick="return RegisterKbClick('KB432', 'Writing data to an Excel spreadsheet')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB432.aspx">KB432</a> Writing data to an Excel spreadsheet

In this article we describe how to write data to an external Excel spreadsheet during test playback. Both RVL and JavaScript examples are given.

### <a onclick="return RegisterKbClick('KB431', 'Multiple Object Locators')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB431.aspx">KB431</a> Multiple Object Locators

Sometimes object location is unstable. The same object may be identified by different location path or XPath depending on application version or state.

### <a onclick="return RegisterKbClick('KB430', 'How To Pass Shift+Control+F12 or Shift+Control+F11 from Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB430.aspx">KB430</a> How To Pass Shift+Control+F12 or Shift+Control+F11 from Rapise

Global.DoSendKeys is a way to to that, but there is also a little trick required to make it happen.

### <a onclick="return RegisterKbClick('KB429', 'How to deal with dynamic window titles')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB429.aspx">KB429</a> How to deal with dynamic window titles

Desktop applications may use window titles to show important information to a user. In some cases the title contains subject of a displayed entity or time.  Since Rapise uses window title while searching for an object during playback - the search may fail. This complication may be resolved if you replace recorded windows title with a regular expression.

### <a onclick="return RegisterKbClick('KB428', 'How to relearn an object')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB428.aspx">KB428</a> How to relearn an object

If an object can not be found at playback and it is obvious that object location has changed because of application update (differs from the case when location is dynamic!) then the best way to fix the test is simply relearn the object.

### <a onclick="return RegisterKbClick('KB427', 'How to master a dynamic locator with RVL')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB427.aspx">KB427</a> How to master a dynamic locator with RVL

There are situations when object location attribute  depends on the object data and it is not possible to record/learn all such objects in advance.  In this case it may be convenient to calculate object location at playback time using FormatString and SetLocatorOpts actions of the RVL global object.

### <a onclick="return RegisterKbClick('KB422', 'How to save/load DOM tree in Web Spy')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB422.aspx">KB422</a> How to save/load DOM tree in Web Spy

Better to see something once than to hear about it a thousand times. If a Web element can not be found on the page using given XPATH expression and you do not know why - you have an option to save the DOM tree of the page and ask someone else with Rapise for assistance. Here is how.

### <a onclick="return RegisterKbClick('KB421', 'How to save type information for UI control in Rapise Spy')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB421.aspx">KB421</a> How to save type information for UI control in Rapise Spy

Rapise supports many standard UI controls out-of-the-box. And there are even more custom UI controls that are not supported. This is why Rapise has a well-defined way of adding extensions.  To add support for a custom control first it makes sense to Spy on it. If you are dealing with Managed or Java applications you can Save Type Information for the control and also save UI tree structure/properties to a file.  Send this information to Rapise team to get an advice on how to add support for the new control.

### <a onclick="return RegisterKbClick('KB420', 'Firefox 64 Compatibility')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB420.aspx">KB420</a> Firefox 64 Compatibility

Once you have your Firefox updated to version 64 Rapise may have problems connecting to it. Here is a quick workaround until new release of Rapise addressing the problem shows up.

### <a onclick="return RegisterKbClick('KB418', 'Is it Possible to Automate an iOS Web App using Rapise?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB418.aspx">KB418</a> Is it Possible to Automate an iOS Web App using Rapise?

Yes, in general, Rapise can automate most web applications using mobile Safari running on iOS (either on a real or simulated device). However there are some limitations. This article is obsolete. The recommended way of testing Web applications is to record tests on a desktop browser via Selenium-based profile and then execute using Mobile profiles. See How to run a cross-browser test on a mobile device for more details.

### <a onclick="return RegisterKbClick('KB417', 'How to manipulate browser cookies using Selenium API in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB417.aspx">KB417</a> How to manipulate browser cookies using Selenium API in Rapise

If you run Rapise tests via Selenium WeDriver you may need to manipulate browser cookies. Learn how from this post.

### <a onclick="return RegisterKbClick('KB416', 'WPF Calendar and DatePicker')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB416.aspx">KB416</a> WPF Calendar and DatePicker

It is tricky do deal with WPF calendar control. Here we introduce a number of supplementary functions to copy in your project and use to modify and read  Calendar and DatePicker data.

### <a onclick="return RegisterKbClick('KB415', 'Is it Possible to Automate an iOS App Store App using Rapise?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB415.aspx">KB415</a> Is it Possible to Automate an iOS App Store App using Rapise?

We often get asked this question: "We have Rapise and want to automate a native iOS app that is available on the application store", can we do it?

### <a onclick="return RegisterKbClick('KB412', 'How to ensure that a Fast Tab is expanded and scrolled into view in Dynamics AX')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB412.aspx">KB412</a> How to ensure that a Fast Tab is expanded and scrolled into view in Dynamics AX

Many views in Dynamics AX have several collapsible panes: General, Addresses, Contact information, etc. They are also known as Fast Tabs.  Learn how to ensure that a Fast Tab is expanded and scrolled into view before entering data into the fields in this tab. Requires Rapise 5.7+

### <a onclick="return RegisterKbClick('KB411', 'If recording of actions in Dynamics AX or Dynamics NAV does not work')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB411.aspx">KB411</a> If recording of actions in Dynamics AX or Dynamics NAV does not work

More and more computers are equipped with High DPI displays. Though high resolution looks beautiful it may bring some issues. One of them is broken recording in Rapise.

### <a onclick="return RegisterKbClick('KB408', 'How to upgrade Rapise to a newer version')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB408.aspx">KB408</a> How to upgrade Rapise to a newer version

Rapise is evolving product and we release new versions of it from time to time. If you plan to upgrade your copy of Rapise follow these simple steps.

### <a onclick="return RegisterKbClick('KB407', 'How to emulate keyboard and mouse via Selenium API in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB407.aspx">KB407</a> How to emulate keyboard and mouse via Selenium API in Rapise

Though Rapise can execute it's native recorded tests via WebDriver - some users prefer to write their tests in pure Selenium API. In this post we describe how to perform complex mouse and keyboard sequences via Selenium API in Rapise tests.

### <a onclick="return RegisterKbClick('KB406', 'Rapise Start Page Layout Does Not Display Correctly')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB406.aspx">KB406</a> Rapise Start Page Layout Does Not Display Correctly

Sometimes when you first install and open Rapise, the Start Page does not display correctly. This article explains the cause and solution to fix the issue.

### <a onclick="return RegisterKbClick('KB396', 'Mapping Spira Requirements to Test Steps in Bulk Using Excel and Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB396.aspx">KB396</a> Mapping Spira Requirements to Test Steps in Bulk Using Excel and Rapise

Of the unique needs of a requirements and test management system when working in the Defense industry, specifically when designing, building, and testing mission systems, is the ability to link individual test steps to the requirements. Since v5 of SpiraTest, this has been possible inside the Spira user interface, however many customers have been looking for a way to map test steps to requirements in bulk using Excel.

### <a onclick="return RegisterKbClick('KB395', 'How to configure Mobile Profile to automatically grant Android application permissions on install')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB395.aspx">KB395</a> How to configure Mobile Profile to automatically grant Android application permissions on install

When Appium installs an application at the beginning of a test session - Android may ask for permissions (e.g. access to media files, camera, etc.). Until such prompt is dismissed - Main activity is not launched. It prevents the test from proceeding.  Learn how to configure the Mobile Profile to automatically grant required permissions on install.

### <a onclick="return RegisterKbClick('KB394', 'How to use specific version of Chromedriver with Appium')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB394.aspx">KB394</a> How to use specific version of Chromedriver with Appium

In Mobile Spy of Rapise when switching from NATIVE_APP to WEBVIEW context you may see an error message: Chrome version must be >= 55.0.2883.0 From this article you will learn how to fix this.

### <a onclick="return RegisterKbClick('KB393', 'DoClick() vs DoClick(x,y)')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB393.aspx">KB393</a> DoClick() vs DoClick(x,y)

When doing mouse click from Rapise it is sometimes need to use offset coordinates. You will learn: 1. When explicit coordinates are needed 2. How to determine them

### <a onclick="return RegisterKbClick('KB391', 'Creating a Purchase Order in Dynamics AX')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB391.aspx">KB391</a> Creating a Purchase Order in Dynamics AX

Learn how to break down a long scenario into manageable pieces in RVL. Creating a purchase order in Dynamics AX takes many steps: start PO process, enter basic details, fill order lines, approve, receive, invoice. In RVL you can create separate sheets to implement stages of a complex test.

### <a onclick="return RegisterKbClick('KB387', 'Display Intellisense for ActiveX and .NET Objects')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB387.aspx">KB387</a> Display Intellisense for ActiveX and .NET Objects

Sometimes when you are using Rapise, you have to use external ActiveX or .NET objects to perform specific actions. You can get Rapise to display intellisense for those objects.

### <a onclick="return RegisterKbClick('KB383', 'RPA Features of Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB383.aspx">KB383</a> RPA Features of Rapise

Robotic Process Automation (RPA) is well suited for processes that are clearly defined, repeatable and rules based. With Rapise you can create software robots that can do boring repetitive tasks and free employee time for more creative work. Below you will find a brief description of RPA tasks that Rapise can do.

### <a onclick="return RegisterKbClick('KB382', 'Android Testing Hints')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB382.aspx">KB382</a> Android Testing Hints

Most complex part in Mobile testing is connecting to a simulator or device. In this article we describe steps necessary to configure the testing environment. Note: In brackets we specify versions of software components we used at the time of writing this article.

### <a onclick="return RegisterKbClick('KB381', 'iOS Testing Hints')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB381.aspx">KB381</a> iOS Testing Hints

Most complex part in Mobile testing is connecting to a simulator or device. In this article we describe steps necessary to configure the testing environment. Note: In brackets we specify versions of software components we used at the time of writing this article.

### <a onclick="return RegisterKbClick('KB380', 'How to insert an RVL step into Manual Test')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB380.aspx">KB380</a> How to insert an RVL step into Manual Test

Sometimes it makes sense to automate certain steps of a Manual Test. If you prefer to implement automatic steps in RVL then include the AUTO  helper function into your test.

### <a onclick="return RegisterKbClick('KB379', 'Processing registration Emails')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB379.aspx">KB379</a> Processing registration Emails

Common scenario: register a user and receive registration confirmation link by email. The most painless way for doing it.

### <a onclick="return RegisterKbClick('KB378', 'RPA - importing data into Dynamics AX')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB378.aspx">KB378</a> RPA - importing data into Dynamics AX

If anything can be automated - it will be automated. You can use Rapise to automate day-to-day processes within a company to free your employees for more creative and productive job. Imagine you have data from third-party system in Excel file and you want to import it into Dynamics AX instance. You have a choice either to develop a software program that does the import via Dynamics AX API or you can create an automation script in Rapise.

### <a onclick="return RegisterKbClick('KB377', 'How to find an object in the object tree')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB377.aspx">KB377</a> How to find an object in the object tree

A test may contain a lot of objects. If you want to locate an object in the object tree you may use the filter box.

### <a onclick="return RegisterKbClick('KB376', 'What is object Location?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB376.aspx">KB376</a> What is object Location?

When you record a test Rapise captures UI elements with which you interact and adds them as objects to the Object Tree of a test. Each object has a Type (Button, Text, Label, Tree, Grid, ...) and Location. Rapise uses Location attribute of an object to find it in the application during test execution.

### <a onclick="return RegisterKbClick('KB375', 'How to check that Rapise can find an object on screen')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB375.aspx">KB375</a> How to check that Rapise can find an object on screen

When you execute a recorded test, sometimes, Rapise may not find some object on screen and display Object is not found error message in the report. If you see that the object is visible you can check if Rapise can find it or not without running the test.

### <a onclick="return RegisterKbClick('KB374', 'RPA - importing data into Dynamics NAV')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB374.aspx">KB374</a> RPA - importing data into Dynamics NAV

If anything can be automated - it will be automated. You can use Rapise to automate day-to-day processes within a company to free your employees for more creative and productive job. Imagine you have data from third-party system in Excel file and you want to import it into Dynamics NAV instance. You have a choice either to develop a software program that does the import via Dynamics NAV API or you can create an automation script in Rapise.

### <a onclick="return RegisterKbClick('KB372', 'How to save content of a table/grid into a spreadsheet file')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB372.aspx">KB372</a> How to save content of a table/grid into a spreadsheet file

If you need to make a copy of data in a Table/Grid object - you may simply save it to Excel file with a single function call.

### <a onclick="return RegisterKbClick('KB371', 'Sample Spira-Friendly Framework with Multiple RVLs and Common Library')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB371.aspx">KB371</a> Sample Spira-Friendly Framework with Multiple RVLs and Common Library

Working example of test framework designed to maximize flexibility and get the most from Rapise productivity features.

### <a onclick="return RegisterKbClick('KB367', 'Storing Values Across Test Cases and Sessions in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB367.aspx">KB367</a> Storing Values Across Test Cases and Sessions in Rapise

Sometimes test set requires a value passing through the sequence of test cases. Good example is User ID assigned during sign-in and then used in subsequent test cases. Another use case is when test case requires some input value that should always be unique.

### <a onclick="return RegisterKbClick('KB366', 'How to ensure that a Fast Tab is expanded and scrolled into view in Dynamics NAV')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB366.aspx">KB366</a> How to ensure that a Fast Tab is expanded and scrolled into view in Dynamics NAV

Many views in Dynamics NAV have several collapsible panes: General, Lines, Invoice Details, etc. They are also known as Fast Tabs.  Learn how to ensure that a Fast Tab is expanded and scrolled into view before entering data into the fields in this tab. Requires Rapise 5.7+

### <a onclick="return RegisterKbClick('KB364', 'How to ensure that a web element is visible before interacting with it?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB364.aspx">KB364</a> How to ensure that a web element is visible before interacting with it?

Sometimes an element on a web page may be invisible because it is out of a viewport.  Real user scrolls a page vertically and horizontally to reach such an element. How to achieve same behavior with Rapise?

### <a onclick="return RegisterKbClick('KB363', 'How to define a profile for Web Application  in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB363.aspx">KB363</a> How to define a profile for Web Application  in Rapise

Each web application is unique in terms of assigning attributes to elements and this complicates the process of generating XPath locators. Some applications assign dynamic IDs to elements, some use ARIA attributes and some do not, some values of class attribute have meaning related to element position and some just used for styling . There are also cases when an app contains hidden DOM layers which stack on top of each other. So usage of same set of attributes for generating XPath is not efficient and may lead to weak locators that break after application reloading or slight modification. To cope with these problems Rapise introduces Web App Profile. It is a simple JSON file of a defined structure that instructs Rapise how to build XPath for elements in a particular application. From this article you will learn how to define a profile for your web application.

### <a onclick="return RegisterKbClick('KB362', 'How to automate testing of Unified Service Desk for Microsoft Dynamics 365')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB362.aspx">KB362</a> How to automate testing of Unified Service Desk for Microsoft Dynamics 365

Unified Service Desk (USD) is a hybrid application. It is a windows desktop application with embedded browser components. Follow this guide to setup a test automation framework for USD.

### <a onclick="return RegisterKbClick('KB361', 'Text Validation Does Not Always Fire on Angular4 Application')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB361.aspx">KB361</a> Text Validation Does Not Always Fire on Angular4 Application

Sometimes when you are testing an application written in Angular 4, the text box will not accept a value that is correct during playback (e.g. zip code is not in the right format) when you use DoSetText to set the value.

### <a onclick="return RegisterKbClick('KB360', 'Overriding Rapise Settings from SpiraTest')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB360.aspx">KB360</a> Overriding Rapise Settings from SpiraTest

Sometimes you want to override certain Rapise settings (e.g. the Command Interval) from within SpiraTest. For example you might to run one test set more slowly than other test sets because the environment is slower. This article explains how you can easily pass settings values from SpiraTest to Rapise.

### <a onclick="return RegisterKbClick('KB359', 'How to Install the Chrome and Firefox Extensions Offline')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB359.aspx">KB359</a> How to Install the Chrome and Firefox Extensions Offline

By default,  when you want to use Rapise to record and playback web tests using either Chrome or Firefox, you simply go to the appropriate web browser "store" and install the extension directly from the store. However sometimes you are testing web applications on a machine with no Internet Connectivity.

### <a onclick="return RegisterKbClick('KB358', 'How to disable "Chrome is being controlled by automated test software" message')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB358.aspx">KB358</a> How to disable "Chrome is being controlled by automated test software" message

When you run a test with Selenium - Chrome profile the browser is launched with a warning message below the address bar. It can be disabled.

### <a onclick="return RegisterKbClick('KB357', 'Data-driven testing with spreadsheets and RVL')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB357.aspx">KB357</a> Data-driven testing with spreadsheets and RVL

Many test automation scenarios require performing same steps with different data. For example, login into application with different user credentials, or enter several lines of a sales order into a table. This is data-driven testing. From this article you will learn how to do this in Rapise Visual Language (RVL) and JavaScript modes.  You will also learn how to define data within a test and in external spreadsheet.

### <a onclick="return RegisterKbClick('KB354', 'How to override an action for an object type')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB354.aspx">KB354</a> How to override an action for an object type

Rapise supports many types of objects in Web, Mobile and Desktop applications.  And each object has a set of actions that can be applied to it.  You may want to override behavior of existing action or add a new one. Learn how from this article.

### <a onclick="return RegisterKbClick('KB353', 'Rapise Doesn't Launch Because of Missing Windows Fonts')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB353.aspx">KB353</a> Rapise Doesn't Launch Because of Missing Windows Fonts

If you don't have some of the standard Window fonts installed (e.g. Courier New), when you try and launch Rapise, it will fail to open correctly. This article provides information on the problem and solution.

### <a onclick="return RegisterKbClick('KB352', 'Converting Recorded Steps into Functions/Scenarios')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB352.aspx">KB352</a> Converting Recorded Steps into Functions/Scenarios

You have recorded some basic test scripts in Rapise, and now you want to easily extract the steps into a reusable function that can be called from the main test script. This article explains how you can do this for both RVL and JavaScript based tests.

### <a onclick="return RegisterKbClick('KB351', 'How to automatically enter user credentials into Windows Security dialog on Windows 10')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB351.aspx">KB351</a> How to automatically enter user credentials into Windows Security dialog on Windows 10

Some test scenarios require running processes as different user or entering user credentials into Internet Explorer security prompt.  Rapise can enter user credentials into Windows Security dialog on Windows 10 automatically.

### <a onclick="return RegisterKbClick('KB349', 'Recording tips for Dynamics NAV 2017 Web Client and Dynamics 365 Business Central')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB349.aspx">KB349</a> Recording tips for Dynamics NAV 2017 Web Client and Dynamics 365 Business Central

Dynamics 365 Business Central is a successor of Dynamics NAV 2017 Web Client. Both solutions were built by Microsoft using same technology though they have a few differences. Rapise includes a library DomDynamicsNAV which makes test recording and playback of Dynamics NAV web clients a pleasant thing. From this post you will learn basics of recording a reliable test for these solutions as well as test playback troubleshooting methods. We'll use Dynamics 365 Business Central as system under test.

### <a onclick="return RegisterKbClick('KB347', 'How to record entering of data into Dynamics NAV tables')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB347.aspx">KB347</a> How to record entering of data into Dynamics NAV tables

Follow these simple rules to record entering of data into Dynamics NAV grids. For example, entering of new order lines into a Sales Order.

### <a onclick="return RegisterKbClick('KB344', 'Doing a SubString on a Database Value in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB344.aspx">KB344</a> Doing a SubString on a Database Value in Rapise

When you try and do a substring on a value returned from a database, you may get an error about the object not supporting the property.

### <a onclick="return RegisterKbClick('KB343', 'How to scroll Dynamics NAV table vertically and horizontally')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB343.aspx">KB343</a> How to scroll Dynamics NAV table vertically and horizontally

Rapise 5.7+ performs scrolling automatically before clicking on a cell. Also there is DoScroll action that does explicit scrolling. In Rapise 5.6 and below use this simple function to scroll your Dynamics NAV table left, right, up, bottom.

### <a onclick="return RegisterKbClick('KB341', 'Jumping to the Definition of a User Function')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB341.aspx">KB341</a> Jumping to the Definition of a User Function

When you have a user defined function in Rapise, you sometimes want to jump to it.

### <a onclick="return RegisterKbClick('KB340', 'How to Do a Nested Loop with Rapise Visual Language (RVL)')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB340.aspx">KB340</a> How to Do a Nested Loop with Rapise Visual Language (RVL)

Sometimes you want to have multiple nested loops to test a set of test data (for example loop over a list of users, and for each user, loop over a list of browsers). In JavaScript you can use standard nested loops, this article explains how you can do the same using RVL.

### <a onclick="return RegisterKbClick('KB339', 'Where does Rapise log errors?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB339.aspx">KB339</a> Where does Rapise log errors?

Sometimes when you are using Rapise, you see an error on the screen, or something doesn't work as expected. In that case, our support team will need a copy of the log file that is likely to contain the error message. This article explains how to get that log file.

### <a onclick="return RegisterKbClick('KB338', 'Dealing with Unexpected Popup Objects')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB338.aspx">KB338</a> Dealing with Unexpected Popup Objects

Some applications show unexpected popup windows. This could be feature announcements, update reminders, license expiration reminders, alerts, internal messengers and so on. Here we are going to show a solution for this problem.

### <a onclick="return RegisterKbClick('KB336', 'Ways to deal with flaky tests')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB336.aspx">KB336</a> Ways to deal with flaky tests

When you do UI test automation and create a big enough test coverage the probability of having certain portion of flaky tests increases. In many cases there is no reasonable way in terms of time and resources to mitigate all flakiness from the test coverage. In some cases even a flaky test may still be useful.

### <a onclick="return RegisterKbClick('KB335', 'What is UI Test Automation Framework?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB335.aspx">KB335</a> What is UI Test Automation Framework?

At Inflectra we think that UI Test Automation Framework is a set of tools with specific features that enables QA teams to develop and run tests, and effectively analyze test execution results.

### <a onclick="return RegisterKbClick('KB334', 'How to launch a browser in private mode?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB334.aspx">KB334</a> How to launch a browser in private mode?

In some cases it makes sense to launch a browser in private mode to ensure exact same conditions every time you run a test.  This helps to cope with such things as remembered accounts or pending sessions not disconnected by a previous test.  Learn how to properly adjust browser profiles from this article.

### <a onclick="return RegisterKbClick('KB333', 'Installing Rapise Browser Extensions without Internet Access')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB333.aspx">KB333</a> Installing Rapise Browser Extensions without Internet Access

Normally you can install the add-ons for Chrome and Firefox directly from the browser's app store (just search for Rapise). This is the easiest option, and avoids the need to run the browsers in developer mode.

### <a onclick="return RegisterKbClick('KB331', 'How to Check if Rapise Can Test My Delphi Application')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB331.aspx">KB331</a> How to Check if Rapise Can Test My Delphi Application

In order for Rapise to be able to test a thick-client desktop application written using Delphi, it needs to support Microsoft Active Accessibility (MSAA), as described in this article - http://edn.embarcadero.com/article/33642 This article demonstrates how to check your application to see if it supports MSAA.

### <a onclick="return RegisterKbClick('KB330', 'Compare two SpreadSheets in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB330.aspx">KB330</a> Compare two SpreadSheets in Rapise

Sometimes you need to compare two tables. Here we introduce a function to compare two spreadsheets.

### <a onclick="return RegisterKbClick('KB328', 'Using Rapise Mobile with Browserstack')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB328.aspx">KB328</a> Using Rapise Mobile with Browserstack

BrowserStack supports automated browser testing via Selenium and Appium on real iOS and Android devices.  Learn how to configure Rapise to connect to Browserstack via Appium.

### <a onclick="return RegisterKbClick('KB326', 'Windows Scripting Host Crashes When Playing Back Rapise RVL Script after Windows 10 Update')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB326.aspx">KB326</a> Windows Scripting Host Crashes When Playing Back Rapise RVL Script after Windows 10 Update

Unfortunately, Windows10 has a nasty habit of frequently updating itself and then breaking existing applications. We found that the February 14th, 2018 Windows10 update corrupted the Excel device driver that Rapise uses to access the RVL test script spreadsheet during playback.

### <a onclick="return RegisterKbClick('KB325', 'Running nightly tests with RapiseLauncher on VM with RDP')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB325.aspx">KB325</a> Running nightly tests with RapiseLauncher on VM with RDP

It is common to use UI tests with RDP connected to remote VM. By default this works only while RDP window is open and client is connected. On disconnect remote session gets locked and UI becomes unavailable for the test. This topic covers a workaround.

### <a onclick="return RegisterKbClick('KB324', 'List Files from Folder in RVL')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB324.aspx">KB324</a> List Files from Folder in RVL

Sometimes it is required to have list of files from some folder. Here we demonstrate how to get this list and how to iterate through it in RVL.

### <a onclick="return RegisterKbClick('KB323', 'How to launch a web browser in Rapise with a specific size')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB323.aspx">KB323</a> How to launch a web browser in Rapise with a specific size

Sometimes when recording a test against a mobile responsive web site, it is useful to be able to record on the local browser (before playing it back against a cloud service such as SauceLabs, Browserstack, etc.). However you want to always record using a specific browser window size.

### <a onclick="return RegisterKbClick('KB322', 'How to run cross-browser tests on BrowserStack')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB322.aspx">KB322</a> How to run cross-browser tests on BrowserStack

BrowserStack enables testing of your website for cross browser compatibility on real browsers. Instant access to multiple desktop and mobile browsers.  Learn how to configure Selenium  profiles in Rapise to enable connection to BrowserStack services. Requires Rapise 5.3+

### <a onclick="return RegisterKbClick('KB320', 'Using RVL Loop to generate sequence of file names')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB320.aspx">KB320</a> Using RVL Loop to generate sequence of file names

We show how to do data generation for test scenario using RVL Variable loop in Rapise. This sample shows how to produce a sequence of filenames: FILE1.txt, FILE2.txt, FILE3.txt and so on.

### <a onclick="return RegisterKbClick('KB318', 'Troubleshooting the "The Pipe is being Closed" Error during Rapise Installation')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB318.aspx">KB318</a> Troubleshooting the "The Pipe is being Closed" Error during Rapise Installation

Sometimes when you try and install Rapise, you will see the error message "The Pipe is Being Closed", this article provides some solutions for this message.

### <a onclick="return RegisterKbClick('KB317', 'Read external Excel spreadsheet in RVL')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB317.aspx">KB317</a> Read external Excel spreadsheet in RVL

Attaching to external .XLS spreadsheet in RVL may be easily done in RVL by use of Range type of the Map.

### <a onclick="return RegisterKbClick('KB314', 'How to start Dynamics NAV client')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB314.aspx">KB314</a> How to start Dynamics NAV client

Check that Dynamics NAV client is installed on a machine and launch it if it is not started yet with this simple function.

### <a onclick="return RegisterKbClick('KB313', 'Testing Visualforce components in Salesforce')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB313.aspx">KB313</a> Testing Visualforce components in Salesforce

Visualforce is the component-based user interface framework for the Force.com platform. Visualforce components can be tested with Rapise just like default Salesforce interface.

### <a onclick="return RegisterKbClick('KB312', 'Accessing DOM elements by Attributes in RVL')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB312.aspx">KB312</a> Accessing DOM elements by Attributes in RVL

It is possible to access such objects form RVL using one of the methods shown in this article.

### <a onclick="return RegisterKbClick('KB310', 'Custom Attributes  for XPath Generation in the Rapise Web Spy')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB310.aspx">KB310</a> Custom Attributes  for XPath Generation in the Rapise Web Spy

Sometimes web applications use custom DOM attributes for internal purposes. XPath locators containing those attributes are sometimes more stable and resilient. Rapise contains features intended to simplify utilization of such attributes.

### <a onclick="return RegisterKbClick('KB308', 'How to include file with common function in test')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB308.aspx">KB308</a> How to include file with common function in test

Sometimes it is useful to have common functionality and variables in a separate JavaScript source file. This topic explains the steps to do it.

### <a onclick="return RegisterKbClick('KB307', 'How to Check if Rapise can Test my Qt Application')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB307.aspx">KB307</a> How to Check if Rapise can Test my Qt Application

In order for Rapise to be able to test a thick-client desktop application written using Qt, it needs to support Microsoft Active Accessibility (MSAA), as described in this article - http://doc.qt.io/qt-5/accessible-qwidget.html This article demonstrates how to check your application to see if it supports MSAA.

### <a onclick="return RegisterKbClick('KB305', 'How to run a program as a different user')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB305.aspx">KB305</a> How to run a program as a different user

Sometimes a test needs to run a process as a different user (not the logged in user executing Rapise). It is not possible to use runas command for this purpose because it forces a user to type a password manually.  From this short article you will learn how to reach the goal.

### <a onclick="return RegisterKbClick('KB304', 'Using Global.DoEncrypt and Global.DoDecrypt to Hide Passwords')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB304.aspx">KB304</a> Using Global.DoEncrypt and Global.DoDecrypt to Hide Passwords

Sometimes passwords need to stay secure. Here are simple steps on how to hide some information in Rapise. Here we will demonstrate usage of Global.DoDecrypt and Global.DoEncrypt available since Rapise 5.4.

### <a onclick="return RegisterKbClick('KB303', 'How to run CMD shell commands')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB303.aspx">KB303</a> How to run CMD shell commands

In some cases a test needs to run a Windows shell command (e.g. dir, ipconfig, gpresult) and capture/parse output. Learn how to do this in Rapise from this short article.

### <a onclick="return RegisterKbClick('KB302', 'About Rapise ImageFinder')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB302.aspx">KB302</a> About Rapise ImageFinder

Sometimes the goal is to find specific image on the screen. It may be special symbol, map pointer or an icon. This topic contains ImageFinder and sample test demonstrating its capabilities.

### <a onclick="return RegisterKbClick('KB301', 'Ways to slow down test execution')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB301.aspx">KB301</a> Ways to slow down test execution

There are several types of delays one can use to slow down test execution. Implicit Explicit fixed Explicit with timeout

### <a onclick="return RegisterKbClick('KB300', 'Running Rapise GUI Tests with Jenkins')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB300.aspx">KB300</a> Running Rapise GUI Tests with Jenkins

Recommended approach is to use SpiraTest and RapiseLauncher designed for this task. In some cases it is not an option and we need to execute a test directly. Note: this manual is out of date. Please refer to the new one for Jenkins 2.440 instead.

### <a onclick="return RegisterKbClick('KB299', 'Installing Rapise on PC without Internet Access')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB299.aspx">KB299</a> Installing Rapise on PC without Internet Access

In general Rapise installs on disconnected PC without problems. However, if PC contains old version of windows without most recent root certificates then installer may fail due to inability to check application authenticode certificate. This topic explains a workaround.

### <a onclick="return RegisterKbClick('KB294', 'How to Measure Operation Performance in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB294.aspx">KB294</a> How to Measure Operation Performance in Rapise

Sometimes we need to track the time taken by an operation. This KB contains suggested approach for Rapise and working sample.

### <a onclick="return RegisterKbClick('KB293', 'How to store Rapise tests in Git and run them with SpiraTeam')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB293.aspx">KB293</a> How to store Rapise tests in Git and run them with SpiraTeam

In some cases it is convenient to store tests in the same Git repository where source code of an application under test is located. For example, if you are using Visual Studio Team Services.  From this article you will learn how to execute Rapise tests stored in a Git repository with SpiraTeam and leverage the power of SpiraTeam reporting and analysis features. This article is obsolete. There is much simpler approach with use of RapiseLauncher Extension for Azure DevOps.

### <a onclick="return RegisterKbClick('KB292', 'Dynamics NAV Support in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB292.aspx">KB292</a> Dynamics NAV Support in Rapise

In this guide we describe how to master tests for Dynamics NAV application using Rapise. Rapise provides a complete automated testing solution that can handle all of your technologies in one environment. With support for web, mobile and desktop applications and a wide variety of third-party component libraries. Microsoft Dynamics NAV is an enterprise resource planning (ERP) software suite for midsize organizations. The system offers specialized functionality for manufacturing, distribution, government, retail, and other industries.

### <a onclick="return RegisterKbClick('KB291', 'How to Enable/Disable screenshots during script execution')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB291.aspx">KB291</a> How to Enable/Disable screenshots during script execution

Sometimes we need to disable screenshots for a while (during some long loop) or when doing some specific operations. Here we show how to do it.

### <a onclick="return RegisterKbClick('KB290', 'How to create Spira-friendly Test Set with shared functions and files')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB290.aspx">KB290</a> How to create Spira-friendly Test Set with shared functions and files

The notion of the integrated test framework usually implies common functions and shared data between tests.  Here we provide sample configuration making sharing Spira-friendly. This article is obsolete. If you are on Rapise 8.0+ then we recommend to follow the new Framework Mode methodology and start with the Benefits of using the new Framework mode KB article.

### <a onclick="return RegisterKbClick('KB289', 'How Object Recognition Works in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB289.aspx">KB289</a> How Object Recognition Works in Rapise

This article contains of overview of object recognition by UI automation tools in general and its implementation in Rapise in particular.

### <a onclick="return RegisterKbClick('KB288', 'Search by Name, Text, XPath or Attribute on the Web Page')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB288.aspx">KB288</a> Search by Name, Text, XPath or Attribute on the Web Page

It is common task to search for an element by its text. In some cases it is the fastest way to find one. This approach works in web browsers and selenium targets.

### <a onclick="return RegisterKbClick('KB285', 'Using bytext and byname Locators in WinForms')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB285.aspx">KB285</a> Using bytext and byname Locators in WinForms

byname and bytext is an universal feature common for Web, UI Automation and WinForms (Managed) targets. Here we consider WinForms (.NET) desktop applications.

### <a onclick="return RegisterKbClick('KB284', 'Model-Based UI Testing')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB284.aspx">KB284</a> Model-Based UI Testing

Model-based testing is widely used for a long time for testing software systems. Typical application fields include telecommunication protocols, embedded software, server software, automotive and reactive systems. What about model-based testing of desktop, web and mobile GUI applications?

### <a onclick="return RegisterKbClick('KB283', 'Using bytext and byname locators in UI Automation')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB283.aspx">KB283</a> Using bytext and byname locators in UI Automation

byname and bytext simplify finding objects by text or by name.

### <a onclick="return RegisterKbClick('KB282', 'Elastic XPATH Expressions')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB282.aspx">KB282</a> Elastic XPATH Expressions

When working on UI test automation for a web application a test engineer has to deal with XPATH expressions. They are used to locate UI elements during test execution. It is very important to use such XPATH expressions that do not break when developers update the application. Good XPATH expressions which still find required elements after UI modification can be referred to as resilient or elastic. In this article we'll consider several examples of elastic XPATH expressions.

### <a onclick="return RegisterKbClick('KB281', 'How to get the most out of code complete feature in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB281.aspx">KB281</a> How to get the most out of code complete feature in Rapise

Writing JavaScript code in Rapise is fun and easy. It has full featured editor with folding, syntax highlighting and code complete. From this article you will learn how to enhance Rapise code complete with support for external types.

### <a onclick="return RegisterKbClick('KB280', 'How to specify Selenium or Appium capabilities which are not available through Rapise UI?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB280.aspx">KB280</a> How to specify Selenium or Appium capabilities which are not available through Rapise UI?

From this article you will learn how to pass additional parameters to Selenium or Appium target, even if they can not be specified in a profile.  This recipe can be also used to override parameters of a profile right from a test code. Requires Rapise 5.3+

### <a onclick="return RegisterKbClick('KB279', 'How to run cross-browser and mobile tests on Sauce Labs?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB279.aspx">KB279</a> How to run cross-browser and mobile tests on Sauce Labs?

Sauce Labs allows users to run tests in the cloud on different combinations of browser and OS versions as well as mobile devices and emulators. Learn how to configure Selenium and Mobile profiles in Rapise to enable connection to Sauce Labs services. Requires Rapise 5.3+

### <a onclick="return RegisterKbClick('KB278', 'How to run a cross-browser test on a mobile device?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB278.aspx">KB278</a> How to run a cross-browser test on a mobile device?

Let's assume you have a cross-browser test which was created on desktop and can be successfully executed on any desktop browser (Chrome, Firefox, Internet Explorer, Safari). You want to execute this test on your mobile devices or emulators. Learn how from this article. Requires Rapise 5.3+

### <a onclick="return RegisterKbClick('KB277', 'Tips & Tricks for Rapise and Dynamics 365 for Sales')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB277.aspx">KB277</a> Tips & Tricks for Rapise and Dynamics 365 for Sales

Essential information to get started with testing Dynamics 365 for Sales.

### <a onclick="return RegisterKbClick('KB276', 'How to upgrade Chrome browser on Android emulator')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB276.aspx">KB276</a> How to upgrade Chrome browser on Android emulator

Appium requires certain version of Chrome to work with. Even Android 7.0 is shipped with Chrome 51 and this is too old version. From this article you will learn how to upgrade Chrome on your Android emulator.

### <a onclick="return RegisterKbClick('KB275', 'JSON in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB275.aspx">KB275</a> JSON in Rapise

This topic describes how to read and write JSON data in Rapise.

### <a onclick="return RegisterKbClick('KB274', 'Using Rapise Mobile with a Cloud Device Farm')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB274.aspx">KB274</a> Using Rapise Mobile with a Cloud Device Farm

Rapise connects to mobile devices (iOS and Android) using the standard Appium mobile device testing API (similar to Selenium WebDriver for web browsers). This articles describes how you can use Rapise to connect to a mobile device farm using the Appium mobile device profiles inside Rapise. We use Kobiton as an example.

### <a onclick="return RegisterKbClick('KB273', 'Rapise Tips, Tricks & Workarounds when Testing Dynamics AX 2012')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB273.aspx">KB273</a> Rapise Tips, Tricks & Workarounds when Testing Dynamics AX 2012

During the evaluation of Rapise 5.2 for Microsoft Dynamics AX testing, a customer collected the following tips and tricks from our support team (thanks Maxime!).

### <a onclick="return RegisterKbClick('KB272', 'Microsoft Dynamics Solutions - Which One Do You Have?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB272.aspx">KB272</a> Microsoft Dynamics Solutions - Which One Do You Have?

As described in a recent article, Microsoft Dynamics has been going through major changes in the past year, there are now many different products that all bear the 'Microsoft Dynamics' brand, including older legacy tools such as Dynamics AX, NAV, GP, SL and CRM and the new Dynamics 365 platform which has different modules (Sales, Operations, etc.).  This article helps you know which tool you have when you need help from our Rapise support team.

### <a onclick="return RegisterKbClick('KB271', 'Headless Chrome Testing')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB271.aspx">KB271</a> Headless Chrome Testing

Headless Chrome on Windows  is introduced in version 60 . Learn how to configure Rapise to run cross-browser tests using non-GUI mode of Chrome.

### <a onclick="return RegisterKbClick('KB270', 'Using Object ID as RVL ParamValue')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB270.aspx">KB270</a> Using Object ID as RVL ParamValue

Sometimes Object ID used as a parameter to the function or object Action (such as Global.DoWaitFor(objId) ). RVL contains special feature intended to make pick-up of object from the list easier.

### <a onclick="return RegisterKbClick('KB269', 'Different Ways of Slowing Down Rapise to Handle Slow Applications')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB269.aspx">KB269</a> Different Ways of Slowing Down Rapise to Handle Slow Applications

We often get requests for ways to slow down the playback speed of Rapise so that the application under test (AUT) has time to respond. This article describes the different ways and provides suggestions as to when you should use each one.

### <a onclick="return RegisterKbClick('KB268', 'How to automate Drag and Drop from Windows Explorer into Google Drive')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB268.aspx">KB268</a> How to automate Drag and Drop from Windows Explorer into Google Drive

Modern technologies allow to drag&drop files into a browser window to upload them to a server. Such a feature works for example in Chrome browser in Google Drive and Photo applications. In this howto post we'll show how to automate drag&drop of files from Windows Explorer to Google Drive opened in Chrome.

### <a onclick="return RegisterKbClick('KB266', 'How to integrate Rapise and Elasticsearch')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB266.aspx">KB266</a> How to integrate Rapise and Elasticsearch

Rapise is a test automation platform for desktop, web and mobile applications. It is designed for building automated and manual end-to-end UI tests and fits any TestOps infrastructure. Elasticsearch is a distributed, RESTful search and analytics engine capable of solving a growing number of use cases. As the heart of the Elastic Stack, it centrally stores your data so you can discover the expected and uncover the unexpected. From this article you will learn how to integrate Rapise and Elasticsearch together.

### <a onclick="return RegisterKbClick('KB264', 'How to integrate Rapise with Jasmine BDD Framework')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB264.aspx">KB264</a> How to integrate Rapise with Jasmine BDD Framework

Jasmine is a behavior-driven development framework. If you want to test UI with Rapise in a behavior-driven way learn how to tie Rapise and Jasmine together.

### <a onclick="return RegisterKbClick('KB263', 'How to fix IE 11 recording/playback on Windows 64-bit')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB263.aspx">KB263</a> How to fix IE 11 recording/playback on Windows 64-bit

Symptoms: When new recording is started Rapise always opens new IE window Spy does not show DOM tree During playback no object is found

### <a onclick="return RegisterKbClick('KB262', 'Debugging Rapise DOM libraries in Chrome using VS Code')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB262.aspx">KB262</a> Debugging Rapise DOM libraries in Chrome using VS Code

Rapise can be extended with DOM libraries to add support for custom UI controls used in modern web applications.  Many of such applications work in Chrome browser. So there may be a need to debug Rapise code embedded into Chrome via Rapise Extension for Chrome. Most powerful and easy way to do this is to add VS Code into the equation.  From this article you will learn how to tie Rapise, Chrome and VS Code together.

### <a onclick="return RegisterKbClick('KB260', 'Handling Auth prompt in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB260.aspx">KB260</a> Handling Auth prompt in Rapise

Some web site show Auth prompt when entering some area. The prompt is rendered differently by different browser. Here we show how to bypass the prompt in automation scripts.

### <a onclick="return RegisterKbClick('KB259', 'How I added support for JPopupMenu automation in 1-hour')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB259.aspx">KB259</a> How I added support for JPopupMenu automation in 1-hour

Example of adding support for Java UI control in Rapise.

### <a onclick="return RegisterKbClick('KB257', 'Using Rapise Visual Language (RVL) 5.1 with Multiple Sheets')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB257.aspx">KB257</a> Using Rapise Visual Language (RVL) 5.1 with Multiple Sheets

With the release of the new Rapise Visual Language (RVL), there have been some questions about how to use it to organize tests, subtests and multiple sheets. For example: I see that I can create multiple sheets.  How does Rapise handle multiple sheets?  Does it run each in order or can they be run separately? Is it possible to call a test in RVL from another test in RVL?  In other worlds, how can I create subtests and scenarios using RVL?

### <a onclick="return RegisterKbClick('KB249', 'Resources for Learning JavaScript')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB249.aspx">KB249</a> Resources for Learning JavaScript

One of the most popular programming languages in the world is JavaScript. Initially conceived by Netscape as a web page scripting language, christened JavaScript to leverage the popularity of Java (which was fairly new and sexy at the time) and now used for servers (NodeJS), desktop apps (ReactNative) and for us at Inflectra, the core technology at the heart of our Rapise test automation system. This article provides some useful resources for those first learning the language.

### <a onclick="return RegisterKbClick('KB248', 'Rapise Recording/Playback Throw Error Due to ANSICON application conflict')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB248.aspx">KB248</a> Rapise Recording/Playback Throw Error Due to ANSICON application conflict

A customer of ours was using Rapise on a computer that was also running the ANSICON application. This changed some of the settings in the Windows registry that affected the Windows command-line parser. This article explains how to clean up the command-line to allow both applications to work correctly together.

### <a onclick="return RegisterKbClick('KB247', 'Formatting dates in JavaScript')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB247.aspx">KB247</a> Formatting dates in JavaScript

This is a short sample demonstrating how one can format a date.

### <a onclick="return RegisterKbClick('KB243', 'Changing REST Headers When Web Service Testing')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB243.aspx">KB243</a> Changing REST Headers When Web Service Testing

When performing web service testing using Rapise you may need to change the HTTP headers being sent with the request. This article provides suggestions on the different ways of doing this.

### <a onclick="return RegisterKbClick('KB242', 'How to execute a JavaScript function when its name as a string')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB242.aspx">KB242</a> How to execute a JavaScript function when its name as a string

Sometimes it is convenient to store function names in strings and use those strings to call actual functions. The article describes two ways of how you can do this in Rapise.

### <a onclick="return RegisterKbClick('KB235', 'Magic Tricks of the Triple Click')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB235.aspx">KB235</a> Magic Tricks of the Triple Click

This article shows how to select paragraph of text using various types of mouse activities. Also it demonstrates use of clipboard Global.DoTrim function. Working example is attached.

### <a onclick="return RegisterKbClick('KB233', 'Suppressing Text in Rapise Logs for Sensitive Data')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB233.aspx">KB233</a> Suppressing Text in Rapise Logs for Sensitive Data

A customer had a question - is there a way to suppress the DoSetText or DoSendkeys methods from sending their text to the logs. They didn't want users to see this text in the Rapise (and SpiraTest) logs because they contained sensitive information (e.g.  passwords).

### <a onclick="return RegisterKbClick('KB232', 'Rapise Tip - How to Handle a Webpage that Displays an Alert when You Navigate Away')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB232.aspx">KB232</a> Rapise Tip - How to Handle a Webpage that Displays an Alert when You Navigate Away

One of our users had a webpage with a form. When it was submitted partially filled, the page came back (after being processed on the backend) with some errors about incomplete form. If the user tried to navigate away from this page via a link (or close the page/browser tab) he was prompted with browser's standard "Are you sure you want to leave this page?" dialog. He needed a way for Rapise to handle this popup when recording and playing back the web test.

### <a onclick="return RegisterKbClick('KB231', 'Adobe Flash / Flex / AIR Support in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB231.aspx">KB231</a> Adobe Flash / Flex / AIR Support in Rapise

Rapise 4.0 supports the testing of Adobe AIR Flex applications using the Adobe Integrated Runtime (AIR). Rapise can test applications using a wide variety of different Flex controls and supports testing both Flex 3 and Flex 4 applications.Rapise 4.0 supports the testing of Adobe Flex applications that are executed by the Adobe Flash Player inside the Internet Explorer, Mozilla Firefox or Google Chrome web browsers. Rapise can test applications using a wide variety of different Flex controls and supports testing both Flex 3 and Flex 4 applications.[We have depreciated support for testing Adobe Flex/Flash applications in Rapise 5.0 and later, so this article is provided for use by existing customers]

### <a onclick="return RegisterKbClick('KB230', 'Unusual case where Rapise Cannot Click on Hyperlinks in IE')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB230.aspx">KB230</a> Unusual case where Rapise Cannot Click on Hyperlinks in IE

We have found an occasional situation where Rapise is not able to click on hyperlinks (<A> tags) when you playback a test on IE. The same test works fine on other computers and on other browsers on the same computer.

### <a onclick="return RegisterKbClick('KB228', 'Web Object Not Found in IE when Object has 0px Size')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB228.aspx">KB228</a> Web Object Not Found in IE when Object has 0px Size

We had a customer with a problem related to having <div> elements with complex display styles applied inside an HTML anchor tag <a>. The anchor tag was reporting back as having zero size (0px) in IE, so when Rapise tried to locate it to click on it, the browser was not able to find it.

### <a onclick="return RegisterKbClick('KB227', 'Executing a Windows .BAT Batch File from Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB227.aspx">KB227</a> Executing a Windows .BAT Batch File from Rapise

Sometimes you need to run a  Windows batch file (.BAT) from Rapise. Unlike an executable, you cannot simply use Global.DoLaunch() to execute it since it's not actually an application. This article provides the code you need to use.

### <a onclick="return RegisterKbClick('KB224', 'Testing Popup Windows using Internet Explorer')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB224.aspx">KB224</a> Testing Popup Windows using Internet Explorer

When you are testing a web application that has popup windows (where the popup is a whole new browser window) you will need to make a slight change to the test script to enable it to playback successfully in Internet Explorer (no change is needed for Chrome or Firefox).

### <a onclick="return RegisterKbClick('KB223', 'Troubleshooting Java Swing/AWT Testing')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB223.aspx">KB223</a> Troubleshooting Java Swing/AWT Testing

When you are testing a Java application using either Swing or AWT you may run into some issues due to the environment. This article collects some of these common cases and provides the recommended solutions.

### <a onclick="return RegisterKbClick('KB221', 'Where do I get the Microsoft Script Debugger')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB221.aspx">KB221</a> Where do I get the Microsoft Script Debugger

When you install Rapise onto a computer that does not have Visual Studio or the Microsoft Script Debugger installed you will get a message to install the debugger. This article provides the download link to the necessary debugger.

### <a onclick="return RegisterKbClick('KB218', 'Testing Adobe AIR Applications on Mobile Devices')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB218.aspx">KB218</a> Testing Adobe AIR Applications on Mobile Devices

We have had a couple of questions about whether Rapise can test Adobe AIR based applications running on mobile devices using platforms such as Android. This article provides some background and also describes the support Rapise has. [We have depreciated support for testing Adobe Flex/Flash applications in Rapise 5.0 and later, so this article is provided for use by existing customers]

### <a onclick="return RegisterKbClick('KB219', 'What to do When Rapise Doesn't Display the Web Page DOM?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB219.aspx">KB219</a> What to do When Rapise Doesn't Display the Web Page DOM?

Sometimes when testing certain web applications instead of the browser DOM tree appearing you will see strange results such as "Node0" appearing. This is caused by the application using nested frames with potentially different security origins. This article describes some of the common issues and describes the solution.

### <a onclick="return RegisterKbClick('KB217', 'Rapise - Cannot Find AllLibraries.json file during Recording/Playback')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB217.aspx">KB217</a> Rapise - Cannot Find AllLibraries.json file during Recording/Playback

When recording or playing back a test script on a new PC you may get an error message that Rapise cannot find the path to "AllLibraries.json".This article provides instructions on how to fix the issue.

### <a onclick="return RegisterKbClick('KB216', 'Testing Multiple Web Browser Tabs at Once in Chrome')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB216.aspx">KB216</a> Testing Multiple Web Browser Tabs at Once in Chrome

Sometimes you have a web test where you need to test the contents of two browser tabs at the same time in Google Chrome. For example you may have an application which opens up a second browser tab and you want to test that changes in the second tab show up correctly in the first tab. This article describes how to perform this kind of testing.

### <a onclick="return RegisterKbClick('KB215', 'Fixing the 'Method Not Found' error when using Appium for Mobile Testing in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB215.aspx">KB215</a> Fixing the 'Method Not Found' error when using Appium for Mobile Testing in Rapise

If you receive the following error message when performing Mobile device testing with Rapise, this article provides the necessary solution:Method not found:'OpenQA.Selenium.RemoteCommandInfoRepositoryOpenQA.Selenium.RemoteCommandInfoRepository.get_Instance()'. Note: related to Appium DLL version  1.3.0.1 and  Selenium WebDriver v2.48.0.

### <a onclick="return RegisterKbClick('KB209', 'Testing Web Applications that use SVG')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB209.aspx">KB209</a> Testing Web Applications that use SVG

One of the more challenging types of web application is that with uses of embedded SVG (Scalable Vector Graphics) in additional to HTML DOM elements. This article describes how to use Rapise to write automated testing scripts for such applications.

### <a onclick="return RegisterKbClick('KB205', 'Rapise 3.x / 4.0 Does not Connect to Chrome x64 Bit')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB205.aspx">KB205</a> Rapise 3.x / 4.0 Does not Connect to Chrome x64 Bit

When you try and connect to the 64-bit version of the Google Chrome web browser using Rapise 4.0 (or earlier) you may get the error 'Connection to Chrome Failed!'. This issue has been fixed in the Rapise 4.1 release, but for those customers using Rapise 4.0 or earlier, this article provides two solutions.

### <a onclick="return RegisterKbClick('KB204', 'Working with WPF and UIAutomation Structures')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB204.aspx">KB204</a> Working with WPF and UIAutomation Structures

It is a common situation that desktop applications written using Microsoft Windows Presentation Framework (WPF) will have complex layouts including tabs, splitters and panels having custom grids and tables inside. This article provides help in dealing with such situations, including how to dynamically find items.

### <a onclick="return RegisterKbClick('KB202', 'Reading the Details of Files on the Windows File System')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB202.aspx">KB202</a> Reading the Details of Files on the Windows File System

In the KB62 article - Accessing Files using Rapise we explain how to access the names, versions and locations of files on the Windows file system. One customer asked - can we verify any file details other than version. This article provides sample code for accessing other information. Note: if you have Rapise 5.5+ then you may simply use File.Info action.

### <a onclick="return RegisterKbClick('KB203', 'Accessing the Windows Registry using Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB203.aspx">KB203</a> Accessing the Windows Registry using Rapise

Sometimes when testing local/desktop applications you need to access the Windows registry to verify that keys exist or that keys have specific values. For example you may be testing that a DLL was successfully registered. This article provides information on the 'UsingRegistry' sample that comes with Rapise.

### <a onclick="return RegisterKbClick('KB201', 'Error attaching to Excel spreadsheet when using Rapise 4.0 with MS-Excel 64-bit')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB201.aspx">KB201</a> Error attaching to Excel spreadsheet when using Rapise 4.0 with MS-Excel 64-bit

When you are using the global Rapise Spreadsheet object on a system running the 64-bit version of MS-Office, you may get an error attaching to the spreadsheet. This article describes the cause of the issue and provides a solution and workaround.

### <a onclick="return RegisterKbClick('KB200', 'Testing MS-Word With Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB200.aspx">KB200</a> Testing MS-Word With Rapise

We had some customers that were looking to record some tests against Microsoft Word 2010. When testing against MS-Word 2010 there are actually two parts to the application: There is the application ribbon (the menus, navigation, etc.) There is the MS-Word text window where your content is actually displayed This article provides some strategies for dealing with both areas.

### <a onclick="return RegisterKbClick('KB194', 'When recording with Chrome, Rapise does not record actions within frames')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB194.aspx">KB194</a> When recording with Chrome, Rapise does not record actions within frames

When creating web tests with Chrome, objects within cross-frames are not recognized by the Rapise Web Spy and recorder. This article gives a solution.

### <a onclick="return RegisterKbClick('KB193', 'Using Rapise to test websites that contain frames')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB193.aspx">KB193</a> Using Rapise to test websites that contain frames

If the website under test contains frames, that presents some challenges to test automation. This article gives tips for success and explains the current limitations. This article is obsolete. Please use Selenium-based profiles for Web testing. Read about Rapise XPath extensions here.

### <a onclick="return RegisterKbClick('KB192', 'Different XPath Options in Rapise 4.0')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB192.aspx">KB192</a> Different XPath Options in Rapise 4.0

When testing complex data-driven web applications using Rapise, it is helpful to understand the different ways that Rapise can automatically learn the objects. Rapise can learn an object using either XPATH or CSS. In the case of XPATH there are several strategies that Rapise can use to make the testing more robust. This article describes these strategies and provides some suggestions about which one is the best to use for different scenarios.

### <a onclick="return RegisterKbClick('KB191', 'WebSpy Attribute Filtering')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB191.aspx">KB191</a> WebSpy Attribute Filtering

The v4.0 release of Rapise adds enhanced attribute filtering to the Web Spy as well as different options for creating XPath queries automatically. This article explains why you would want to use these features and how they can make the testing of complex data-driven web applications much easier.

### <a onclick="return RegisterKbClick('KB185', 'Using Global.DoLoadObjects to Use Rapise Objects from External File')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB185.aspx">KB185</a> Using Global.DoLoadObjects to Use Rapise Objects from External File

One of the challenges using an automated testing tool is to organize things in a way that it is logical enough to find something quickly, structured enough to avoid duplication and simple enough to maintain and upgrade. This statement is also true for Rapise objects. A common requirement is to deal with the same objects within a flow of different test cases. For instance, if an application has “Log In” functionality then many, many tests will require logging-in and logging-out. Each test will have this object in its own object tree. However this causes trouble if a change in the application affects the recognition of the Log In object. All of the test cases will need to be updated. In such situations it is much more convenient to have the “Log In” objects placed into their own file and re-used by other tests. This article is obsolete. In Rapise 8.0 and above the recommended approach is to use Page Objects / Modules.

### <a onclick="return RegisterKbClick('KB186', 'Global.DoWaitFor vs Global.DoWaitForProperty')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB186.aspx">KB186</a> Global.DoWaitFor vs Global.DoWaitForProperty

The most commonly used synchronization option to make Rapise wait until the application under test (AUT) is ready is the Global.DoSleep action. However having just a sleep may cause an unnecessary delay because we have to consider the maximum wait interval and it may be much less on average. Rapise includes some additional synchronization options for more fine grained control of the test case flow.

### <a onclick="return RegisterKbClick('KB187', 'Using CheckObjectExists(xpathOrObjId) to See if Web Object Exists on Page')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB187.aspx">KB187</a> Using CheckObjectExists(xpathOrObjId) to See if Web Object Exists on Page

This articles describes how you can use the Navigator.CheckObjectExists(...) action to see if an element exists on a web page and how it differs from the Global.DoWaitFor / DoWaitForProperty actions that are described in another article.

### <a onclick="return RegisterKbClick('KB184', 'What is the purpose of the Tester.EndTest() Function?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB184.aspx">KB184</a> What is the purpose of the Tester.EndTest() Function?

The Tester.EndTest() function in Rapise is described as: Marks end of a currently executed test. Calculates test results and performs finalization of test execution. We have found that some of our customers have been confused as what the purpose of this function is.

### <a onclick="return RegisterKbClick('KB183', 'Desktop Application Testing - Choosing the Right Library')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB183.aspx">KB183</a> Desktop Application Testing - Choosing the Right Library

Suppose we have a situation that a thick-client (desktop) application under test (AUT) is based on a technology that is too old or not completely supported by Rapise. Rapise has a number of libraries for different types of apps. Usually Rapise finds the correct libraries using its auto-detection, but sometimes an application is unusual and the auto-detection fails.

### <a onclick="return RegisterKbClick('KB182', 'How to automate the testing of TinyMCE Rich Text Boxes using Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB182.aspx">KB182</a> How to automate the testing of TinyMCE Rich Text Boxes using Rapise

DEPRECATED Method described in this article does not work any more because browser security has changed since 2015. Now it is not possible to directly access client side JavaScript model. We have a new article that explains how to automate TinyMCE https://www.inflectra.com/Support/KnowledgeBase/KB541.aspx When you have a rich text box in a web application, the process for recording a test and playing it back will be different to a standard HTML plain text box. When you are using the popular TinyMCE rich text box you have more options to automate it by using its special client-side JavaScript API.

### <a onclick="return RegisterKbClick('KB181', 'Dynamically constructing the .rest file URLs to test REST APIs')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB181.aspx">KB181</a> Dynamically constructing the .rest file URLs to test REST APIs

Sometimes when using Rapise to test REST web services, you want to be able to dynamically change the base URL of the web service yet still use the same URL template and method information. This article describes a process for achieving this.

### <a onclick="return RegisterKbClick('KB177', 'Web testing - Dynamically Switching the Browser in the Same Test')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB177.aspx">KB177</a> Web testing - Dynamically Switching the Browser in the Same Test

Sometimes you have a test that you want to run on Chrome, Firefox, and IE in the same script. Normally you write a browser-agnostic test and then have SpiraTest simply call Rapise with different browser names as a parameter and then you have the same test executed multiple times. However suppose you want to have a single test that by itself can run on all the necessary browsers. This article addresses this case.

### <a onclick="return RegisterKbClick('KB176', 'Measuring browser performance with Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB176.aspx">KB176</a> Measuring browser performance with Rapise

How do you get the exact time that Rapise takes to load a page? Now, the reports summary shows the overall execution time but if you have pause times between steps then these times are added to the total time of that a page took to display. Customers have asked if Rapise has some kind of function that will allow them to see only the transaction time between pages without the pause times. Does Rapise have something like that? This article provides a solution to these cases.

### <a onclick="return RegisterKbClick('KB175', 'Using Rapise to populate data in an Excel Spreadsheet')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB175.aspx">KB175</a> Using Rapise to populate data in an Excel Spreadsheet

The built-in Spreadsheet object in Rapise makes it easy to read data from an MS-Excel spreadsheet. What happens if you want to write data back to the Excel sheet?

### <a onclick="return RegisterKbClick('KB172', 'Dynamically changing object locators for Web applications')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB172.aspx">KB172</a> Dynamically changing object locators for Web applications

Sometimes you want to dynamically change the XPATH or CSS used in a specific object from within the test script itself. This article explains the process for doing this.

### <a onclick="return RegisterKbClick('KB168', 'Customizing the Rapise Reports')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB168.aspx">KB168</a> Customizing the Rapise Reports

By default, the reports displayed within Rapise report back each test activity and assert statement as a line in the report with all of the activities and events being displayed in a single flat list regardless of whether they happen inside the main Test() function or a sub-function. This articles explains how you can extend the reporting.

### <a onclick="return RegisterKbClick('KB166', 'Using Rapise 3.1 to test a web page with a multi-select list')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB166.aspx">KB166</a> Using Rapise 3.1 to test a web page with a multi-select list

When you have a multi-select list in a web application, you may need to check which items are selected, or to check whether or not a particular item is selected. This article illustrates how to do that.

### <a onclick="return RegisterKbClick('KB164', 'Calling Rapise DoX functions without reporting result')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB164.aspx">KB164</a> Calling Rapise DoX functions without reporting result

When you use a DoX command in Rapise to perform a specific command (e.g. DoDOMChildrenCount() to get a number of object's DOM children), in the report an extra step -- assert -- is created during test execution. Sometimes you want to be able to call a function 'quietly' without it affecting the report.

### <a onclick="return RegisterKbClick('KB163', 'Accessing the Computed Style Properties of an HTML DOM Object')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB163.aspx">KB163</a> Accessing the Computed Style Properties of an HTML DOM Object

A common question from our users is, is there a way to get object's style properties that are in effect at a certain point in time. (for example, it could have been inherited from higher level of hierarchy, or modified via JavaScript running on the page)? This article describes how to do this.

### <a onclick="return RegisterKbClick('KB161', 'Certain Hyperlinks won't click during playback with Internet Explorer (IE)')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB161.aspx">KB161</a> Certain Hyperlinks won't click during playback with Internet Explorer (IE)

Sometimes when you record a test script using IE and then play it back, some of the clicks on hyperlinks will not playback correctly. Rapise will list them as Passed, but the click won't actually be performed.

### <a onclick="return RegisterKbClick('KB160', 'Rapise cannot connect to Firefox immediately after Firefox updates')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB160.aspx">KB160</a> Rapise cannot connect to Firefox immediately after Firefox updates

If you try and connect to Firefox with Rapise immediately after Firefox has updated, you may see the following error message: Microsoft JScript runtime error: 'Navigator.GetBrowserHWND()' is null or not an object

### <a onclick="return RegisterKbClick('KB159', 'Fixing 'Unable to cast object of type 'System.DBNull' to type 'System.String'' errors in Spira v4.x')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB159.aspx">KB159</a> Fixing 'Unable to cast object of type 'System.DBNull' to type 'System.String'' errors in Spira v4.x

Sometimes when you are saving Rapise test scripts into some early versions of Spira v4.2.x.x (e.g. Spira v4.2.0.1 - v4.2.0.5) you can start getting these errors on the Test Case details page. You may also get the error for other reasons in earlier versions of Spira v4.x.

### <a onclick="return RegisterKbClick('KB158', 'Accessing the Spira v4.2 REST API to get test cases in a release')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB158.aspx">KB158</a> Accessing the Spira v4.2 REST API to get test cases in a release

This article describes the process and provides an example for accessing the Spira v4.2 REST API to get a filtered list of test cases in a release.

### <a onclick="return RegisterKbClick('KB146', 'How to Use Sub-Tests and Common Objects with REST Web Service Tests')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB146.aspx">KB146</a> How to Use Sub-Tests and Common Objects with REST Web Service Tests

It is often useful to have a common set of code libraries and objects that can be reused amongst multiple tests. With Rapise this can be done by creating a common test and then including it into the other actual tests. However due to the way REST web service tests are stored, there are some slight changes needed to handle REST services. This articles describes the process. Note: if you have Rapise 8.0+ there is a simpler way, just create a module for REST service calls.

### <a onclick="return RegisterKbClick('KB143', 'Rapise Won't Record Steps or Display Reports')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB143.aspx">KB143</a> Rapise Won't Record Steps or Display Reports

If you are running Rapise and you suddenly start to find that none of your recordings get saved and the reports are not displaying during execution it may be due to the fact that you have saved your Rapise test folder onto a Network Share.

### <a onclick="return RegisterKbClick('KB142', 'Scripts created with Rapise 2.1 or earlier no longer playing back correctly in Rapise 2.2 or later')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB142.aspx">KB142</a> Scripts created with Rapise 2.1 or earlier no longer playing back correctly in Rapise 2.2 or later

In Rapise 2.2, "DoClick" behavior was changed, so we don't do a click but rather just position the mouse over the control and do API-level "click" event. However we provided a way to enable backward compatibility. This article is obsolete.

### <a onclick="return RegisterKbClick('KB141', 'Testing Silverlight Applications')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB141.aspx">KB141</a> Testing Silverlight Applications

When testing Silverlight applications, you may find that Rapise fails to recognize the objects in the Silverlight app using the UIAutomation library. When using the Rapise Spy Tool, the  whole app is identified as a single window. The objects such as a dropdown, buttons etc. inside the silverlight app are not individually recognized.

### <a onclick="return RegisterKbClick('KB544', 'How to Use Rapise Cloud on AWS')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB544.aspx">KB544</a> How to Use Rapise Cloud on AWS

With our Rapise cloud edition, you can take your automated software testing to the cloud. With Rapise cloud edition you can start testing immediately, no hardware or test lab needed, just sign up for Amazon Web Services (AWS) and rent our Rapise cloud AMIs on-demand, with no minimum usage and no annoying monthly or annual fees, just pay for what you use.

### <a onclick="return RegisterKbClick('KB139', 'Disabling the generation of comments during Recording')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB139.aspx">KB139</a> Disabling the generation of comments during Recording

By default Rapise records user actions with a line commented out for each action. This articles describes how you can disable this behavior if you just want the script lines recorded on their own.

### <a onclick="return RegisterKbClick('KB138', 'My Actions are Not Recorded')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB138.aspx">KB138</a> My Actions are Not Recorded

By design Rapise tries to record user activity on the highest possible level. This makes recorded actions more readable and universal (often several lower-level user actions are combined)Rapise uses a heuristics to distinguish meaningful activity from low level actions. In some cases this leads to a result that some user activity is not automatically recorded (for example, a mouse click before entering  text in a box). There is a broad range of available UI platforms and libraries. The variety of graphical widgets makes user interface robust and beautiful. Rapise tries to recognize as much objects as possible. However this range is growing and there are always widgets that are not being recorded.

### <a onclick="return RegisterKbClick('KB137', 'Anti-Virus Software and Test Automation')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB137.aspx">KB137</a> Anti-Virus Software and Test Automation

Anti-virus software is very sensitive to test automation tools. This is normal, because test automation tools usually do API, keyboard and mouse hooking to be able to record and playback user actions.

### <a onclick="return RegisterKbClick('KB136', 'How are Global Functions stored and recalled?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB136.aspx">KB136</a> How are Global Functions stored and recalled?

Q: We need to call many common functions from a common library frequently.

### <a onclick="return RegisterKbClick('KB134', 'Why is My Flex application recorded as mouse clicks?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB134.aspx">KB134</a> Why is My Flex application recorded as mouse clicks?

A Flex application requires some instrumentation to be ready for testing. By default Flash player has security restrictions preventing Rapise from accessing the application contents. Please, check the this help topic to learn more about Adobe Flex testing. This article is obsolete. Flex support was removed from Rapise.

### <a onclick="return RegisterKbClick('KB133', 'The Recorder asks for a Library. Which should I choose?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB133.aspx">KB133</a> The Recorder asks for a Library. Which should I choose?

In most cases Auto is the best choice. Manual selection of libraries may be needed in more advanced scenarios and is intended for experienced users.

### <a onclick="return RegisterKbClick('KB132', 'Does Rapise work with Windows UAC?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB132.aspx">KB132</a> Does Rapise work with Windows UAC?

If you are using Rapise on Windows Vista or Windows 7 it is not necessary to disable the Windows User Account Control (UAC) to use Rapise. Unlike some other automated testing tools on market, you can use Rapise with UAC enabled.

### <a onclick="return RegisterKbClick('KB131', 'Executing Under a VM or Remote Desktop')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB131.aspx">KB131</a> Executing Under a VM or Remote Desktop

Sometimes you need to test an application running on a VM or remote computer using Remote Desktop (RDP) rather than a physical terminal. This guide explains how to ensure that Rapise is able to correctly fire events on the application under test.

### <a onclick="return RegisterKbClick('KB130', 'Waiting Until Application Ready')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB130.aspx">KB130</a> Waiting Until Application Ready

Sometimes you need to synchronize the test script so that it waits for a specific application event (change for status message or wait for some specific value). This guide explains how to ensure that Rapise waits for the appropriate condition.

### <a onclick="return RegisterKbClick('KB124', 'Reading an Object's State')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB124.aspx">KB124</a> Reading an Object's State

Sometimes it is necessary to examine the state of an object. For example, determine if Toggle Button is pressed or not, Radio/Check Button is checked or not, etc. This guide describes a couple of different ways of achieving this.

### <a onclick="return RegisterKbClick('KB123', 'About Highlighting (Flash Command) Rectangles')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB123.aspx">KB123</a> About Highlighting (Flash Command) Rectangles

Rapise has a choice of visual effects it can use when highlighting a control being learned during the recording process. This guide describes the different modes.

### <a onclick="return RegisterKbClick('KB121', 'Choosing Object Type Manually')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB121.aspx">KB121</a> Choosing Object Type Manually

Sometimes Rapise will incorrectly recognize a GUI component. This guide outlines how you can manually change the object type captured during recording.

### <a onclick="return RegisterKbClick('KB120', 'Capture Screenshots During Playback')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB120.aspx">KB120</a> Capture Screenshots During Playback

When playing back a test it is useful to be able to capture the screen as its current state so that the cause of any test failures can be more easily deduced.

### <a onclick="return RegisterKbClick('KB119', 'Working with Right-Click Context Menus')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB119.aspx">KB119</a> Working with Right-Click Context Menus

The context menu control is not natively supported by Rapise, but one can use a simple workaround.

### <a onclick="return RegisterKbClick('KB118', 'Working with Selectable Lists')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB118.aspx">KB118</a> Working with Selectable Lists

The behavior of list and combobox controls in GUI applications sometimes require additional attention. This guide explains the different types of combobox controls and best practices for testing them in Rapise.

### <a onclick="return RegisterKbClick('KB115', 'Recording Web Menus')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB115.aspx">KB115</a> Recording Web Menus

Many web sites have dynamic site menus. This guide outlines the best practices for recording events associated with such dynamic site menus.

### <a onclick="return RegisterKbClick('KB114', 'My Actions are Not Recorded')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB114.aspx">KB114</a> My Actions are Not Recorded

By design Rapise tries to record user activity on the highest possible level. This makes recorded actions more readable and universal. However that sometimes means that certain actions that a user performs won't be automatically picked up. This guide explains ways to handle situations when a specific user activity is not recorded.

### <a onclick="return RegisterKbClick('KB113', 'Recording Mouse Activity')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB113.aspx">KB113</a> Recording Mouse Activity

This guide describes the different types of mouse events and how they are recorded in Rapise.

### <a onclick="return RegisterKbClick('KB112', 'Re-Using Test Logic [obsolete]')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB112.aspx">KB112</a> Re-Using Test Logic [obsolete]

It is common for test scenarios to share similar pieces of functionality. A good example of such sharing is login logic. This guide outlines ways in which you can share such logic to avoid having repeated code in your tests. This article is obsolete. To find out about re-using test parts, modules and page objects please refer to Rapise 8.0: how to use Page Objects/Modules.

### <a onclick="return RegisterKbClick('KB116', 'Working with HTML XPath')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB116.aspx">KB116</a> Working with HTML XPath

When testing web applications you will often need to use XPath to query the browser DOM for elements based on the scenario under test. This guide explains how you can use XPath queries with Rapise to make your browser testing more flexible and adaptive to changes on the screen.

### <a onclick="return RegisterKbClick('KB117', 'Working with HTML Tables containing Dynamic Data')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB117.aspx">KB117</a> Working with HTML Tables containing Dynamic Data

Many web sites use HTML tables to display lists of tabular data. When testing such applications you will often need to dynamically search for items in the table to verify that the application under test performed correctly. This guide outlines best practices for accessing data held in HTML tables. This article is obsolete. For dealing with dynamic table data please refer to How to define and use a dynamic Web locator article.

### <a onclick="return RegisterKbClick('KB122', 'Change Object Value or Text')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB122.aspx">KB122</a> Change Object Value or Text

This guide describes the different ways that you can change the value of text label of an object.

### <a onclick="return RegisterKbClick('KB125', 'Analog Recording')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB125.aspx">KB125</a> Analog Recording

Sometimes the application under test doesn't contain any learnable objects. In that case you may need to use the fallback of Analog Recording. This guide describes how you perform analog recording.

### <a onclick="return RegisterKbClick('KB126', 'Simulated Objects')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB126.aspx">KB126</a> Simulated Objects

This guide describes what simulated objects are and when they should be used.

### <a onclick="return RegisterKbClick('KB127', 'Passing Test Parameters')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB127.aspx">KB127</a> Passing Test Parameters

There are many different ways of passing test parameters to Rapise from an external system. This guide describes the different ways of passing parameter values to Rapise.

### <a onclick="return RegisterKbClick('KB128', 'Creating a Set of Tests to Run in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB128.aspx">KB128</a> Creating a Set of Tests to Run in Rapise

This guide describes how you manage groups of Rapise tests together in situations where you are not  using SpiraTest test sets.

### <a onclick="return RegisterKbClick('KB129', 'Using Dynamic Linked Library (DLLs) in Test Scripts')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB129.aspx">KB129</a> Using Dynamic Linked Library (DLLs) in Test Scripts

Sometimes you need to call code libraries from your Rapise tests, for example when the built-in JavaScript scripting engine does not provide the necessary functionality. This guide explains how to call an external DLL from your Rapise test script.

### <a onclick="return RegisterKbClick('KB135', 'How does Rapise detect if a dialog is already open?')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB135.aspx">KB135</a> How does Rapise detect if a dialog is already open?

There are several ways to find if something is already on the screen, this article explains some of the options.

### <a onclick="return RegisterKbClick('KB111', 'Analog Testing when the Machine does not have the Break Key')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB111.aspx">KB111</a> Analog Testing when the Machine does not have the Break Key

When using Rapise for analog testing you need to use the key sequence CTRL+BREAK to start and stop the analog recorder. However some machines (particularly smaller laptops) do not have a BREAK or PAUSE (often the same function as BREAK) key. This article describes some solutions

### <a onclick="return RegisterKbClick('KB109', 'Using DoDOMChildrenCount and DoDOMQueryXPath to inspect child HTML elements')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB109.aspx">KB109</a> Using DoDOMChildrenCount and DoDOMQueryXPath to inspect child HTML elements

Often you want to be able to query for the child elements on a web page that are dynamically created and therefore not good candidates for LEARNing individually. This article explains how you can use the dynamic XPATH methods of Rapise to accomplish this task.

### <a onclick="return RegisterKbClick('KB105', 'After installing Windows Update KB3025390 Rapise No Longer Connects to IE')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB105.aspx">KB105</a> After installing Windows Update KB3025390 Rapise No Longer Connects to IE

An old (December 9th, 2014) security update for Microsoft Windows and Internet Explorer (KB3025390)  broke the support in IE for 'out-of-process' code execution. This effectively prevented an automated testing application such as Rapise from automating Internet Explorer (IE) applications. This was subsequently fixed by Microsoft on February 10th, 2015 with the KB 3021952 update.

### <a onclick="return RegisterKbClick('KB102', 'How to Get Rapise Trace Logging Information')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB102.aspx">KB102</a> How to Get Rapise Trace Logging Information

When using Rapise, it is often useful to see how Rapise is identifying objects in the Application Under Test (AUT) and if necessary find out why Rapise is not able to locate a specific object. This article outlines how to increase the logging level in Rapise. This article is obsolete. There is no ribbon in Rapise since version 6. If you have Rapise 6.0+ then follow these steps to change the verbose level.

### <a onclick="return RegisterKbClick('KB101', 'Automating HTML File Upload Boxes')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB101.aspx">KB101</a> Automating HTML File Upload Boxes

Sometimes you have to automate the uploading of files using an HTML file upload control. This article explains how to record and playback such a script.

### <a onclick="return RegisterKbClick('KB98', 'Code Completion of Native JavaScript Objects')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB98.aspx">KB98</a> Code Completion of Native JavaScript Objects

Rapise has built-in code completion logic that lets it suggest the available list of functions for a specific object. However since JavaScript is fundamentally an un-typed language, for the code completion to work, there are some tips and tricks that you can use.

### <a onclick="return RegisterKbClick('KB97', 'Recording Popup JavaScript Confirmation Boxes')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB97.aspx">KB97</a> Recording Popup JavaScript Confirmation Boxes

When you are recording a test against a Web application you may have to deal with a popup JavaScript confirm or alert box. This article describes the process for dealing with them.

### <a onclick="return RegisterKbClick('KB96', 'How to automate the testing of Rich Text Boxes using Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB96.aspx">KB96</a> How to automate the testing of Rich Text Boxes using Rapise

When you have a rich text box in a web application, the process for recording a test and playing it back will be different to a standard HTML plain text box. This is because the browser actually uses a separate IFRAME and HTML document for the editable rich text box. This article explains the process for recording/playing back such a test.

### <a onclick="return RegisterKbClick('KB89', 'Adding Support for Custom Flex Controls')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB89.aspx">KB89</a> Adding Support for Custom Flex Controls

By default the Rapise Flex library supports a wide variety of Flex controls which will be capable of testing the majority of application. However sometimes there will be an unknown objects which will be learnt as a generic object with FlexObject flavor. The article describes support for such custom Flex controls. This article is obsolete. Flex support was removed from Rapise since Flex is dead already for a long time.

### <a onclick="return RegisterKbClick('KB87', 'Using Rapise to Validate Display of Data Grid Data')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB87.aspx">KB87</a> Using Rapise to Validate Display of Data Grid Data

One common requirement is to run a query in an application being tested and verify that the data on the screen matches the data in the application. This article explains the recommended process for doing this.

### <a onclick="return RegisterKbClick('KB86', 'Choosing the Web Browser in Rapise from SpiraTest / SpiraTeam')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB86.aspx">KB86</a> Choosing the Web Browser in Rapise from SpiraTest / SpiraTeam

When writing a web test in Rapise you will often want to run the same test script in all three web browsers (IE, Firefox and Chrome). You will want to be able to choose the Test Script from within Rapise when debugging the test and then from a Test Set in SpiraTest when you move the test into production. This article explains the process. This article is obsolete. For modern way of running Rapise tests in multiple browsers please refer to Rapise 8.0: how to run test cases on different browsers.

### <a onclick="return RegisterKbClick('KB85', 'Sending Special Keys to the Current Application')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB85.aspx">KB85</a> Sending Special Keys to the Current Application

You can use the Global.DoSendKeys('...'); command in Rapise to send keypresses to the current application. Sometimes you will want to send special control keys to the application (e.g. Page Down, or CTRL + Key). This article explains the way to do this.

### <a onclick="return RegisterKbClick('KB83', 'Turning off Chrome and Firefox Auto-Updating')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB83.aspx">KB83</a> Turning off Chrome and Firefox Auto-Updating

When you are testing a web application against different environments, it can be useful disable to default browser auto-updating policies so that you have a stable testing environment. This articles describes how to disable the auto-updating policies of Google Chrome and Firefox.

### <a onclick="return RegisterKbClick('KB79', 'A DLL required for this install to complete could not be run')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB79.aspx">KB79</a> A DLL required for this install to complete could not be run

If you run one of our installation packages (.msi) and receive the following message: A DLL required for this install to complete could not be run

### <a onclick="return RegisterKbClick('KB78', 'Enabling Windows Installer (.msi) Trace Logging')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB78.aspx">KB78</a> Enabling Windows Installer (.msi) Trace Logging

Sometimes when installing our products you get error messages during the installation and it's necessary to provide Inflectra support personnel with detailed trace/logging information so that they can better support you. This article describes the steps necessary to enable Windows Installer (.msi) trace logging.

### <a onclick="return RegisterKbClick('KB77', 'How to resolve WScript.CreateObject: Could not connect object errors')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB77.aspx">KB77</a> How to resolve WScript.CreateObject: Could not connect object errors

Sometimes when you install Rapise on a computer that had a previous version of Rapise installed, when you try to record and/or playback a test you get the following error message: C:\Program Files (x86)\Inflectra\Rapise\Engine\Player.js WScript.CreateObject: Could not connect object. This article describes the steps to correct the error.

### <a onclick="return RegisterKbClick('KB68', 'Accessing Clipboard in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB68.aspx">KB68</a> Accessing Clipboard in Rapise

Sometimes when automating a test, you need to access the local Windows clipboard. This article describes how to access the Windows clipboard programmatically.

### <a onclick="return RegisterKbClick('KB65', 'Testing Win32 applications to verify that controls change display state')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB65.aspx">KB65</a> Testing Win32 applications to verify that controls change display state

Sometimes you may have a button (or other control) that  can have a different appearance depending on the different focus statuses.For example, the default status without focus is a grey image, whereas when the mouse hovering over it becomes blue. Then when the mouse left button is held down on the button (and not released), the image changes to a red image.Finally, when the button is activated using the tab key to tab into the button and the mouse is somewhere else, it has a fourth color. This article discusses solutions for how to test these kinds of situationю

### <a onclick="return RegisterKbClick('KB64', 'Using Navigator.ExecJS to execute JavaScript code inside a browser')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB64.aspx">KB64</a> Using Navigator.ExecJS to execute JavaScript code inside a browser

Sometimes you need to execute JavaScript code at a browser side and get the result. You can do this with Navigator.ExecJS.

### <a onclick="return RegisterKbClick('KB63', 'Getting the State of a Win32 object using Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB63.aspx">KB63</a> Getting the State of a Win32 object using Rapise

Sometimes you need to be able to test the state of a specific Win32 object in Rapise to see if it is enabled, disabled, is activated, etc. This sample illustrates how to get the numeric and textual value of the object's state.

### <a onclick="return RegisterKbClick('KB62', 'Accessing Files and I/O functions using Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB62.aspx">KB62</a> Accessing Files and I/O functions using Rapise

Sometimes using Rapise you need to access files on the Windows filesystem, either for testing purposes, or to object test data stored in a flat CSV, TSV or text file. This sample illustrates how you can access the File System using Rapise and the Windows FileSystemObject (http://msdn.microsoft.com/en-us/library/aa242706(v=vs.60).aspx). Alternatively you may also use File global object.

### <a onclick="return RegisterKbClick('KB59', 'Using Simulated Objects')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB59.aspx">KB59</a> Using Simulated Objects

Simulated objects are found by looking at the parameters of the object (x number of pixels from the top of the window, y number of pixels from the left of the window, etc).  One common question that has arisen is - during playback, does Rapise take into account screen resolution?  If the resolution on the computer you run it on is different from the one it records on the location of the object will change relative to the number of pixels.  So on the computer you record it on the top parameter might be 200 but on a different resolution it might be 180.  Would Rapise recognize that the resolution is different and adjust for that?

### <a onclick="return RegisterKbClick('KB58', 'Javascript .js not associated with Windows Scripting Host')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB58.aspx">KB58</a> Javascript .js not associated with Windows Scripting Host

Sometimes if you have installed a program that associates itself with the .js file extension, you will see the following error when you try and record/play a Rapise test: Microsoft (R) Windows Script Host Version 5.8 Copyright (C) Microsoft Corporation. All rights reserved. Input Error: There is no script engine for file extension ".js".

### <a onclick="return RegisterKbClick('KB57', 'Accessing Child Objects in a Java AWT/Swing application')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB57.aspx">KB57</a> Accessing Child Objects in a Java AWT/Swing application

This article describes how to access child objects of a Learned Java AWT/Swing object when using the Rapise Java library. Sometimes when you Learn a top-level object, you want to be able to programmatically query the object to locate the child objects that are visible in the Java Spy.

### <a onclick="return RegisterKbClick('KB56', 'Accessing child components of a WPF / Silverlight ListBox')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB56.aspx">KB56</a> Accessing child components of a WPF / Silverlight ListBox

When you have a WPF or Silverlight application that has a list box (or other control that supports templates such as a Tree) that has an item template that contains sub-controls, you may need to access the individual controls rather than just the entire list item. This article outlines the approach for doing this.

### <a onclick="return RegisterKbClick('KB50', 'Dynamically changing object locators for WPF/Silverlight applications')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB50.aspx">KB50</a> Dynamically changing object locators for WPF/Silverlight applications

Sometimes you will have controls in a WPF or Silverlight application which use dynamic lists. Depending on certain settings, the widgets in the list will appear in different places. This means that a learned Rapise object which works fine if its in the original ListBox[0] location position is not found during playback when it's displayed in another position, e.g.  ListBox[1] or [2]. Unlike the XPath option with web testing, Rapise doesn't currently allow regular expressions (Regex) in locators stored inside the Objects.js file. This article describes a way around the problem. This article is obsolete. Rapise supports regular expressions in UIAutomation locators since version 6. Read this article for more details.

### <a onclick="return RegisterKbClick('KB47', 'Executing a process and checking if it's still running')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB47.aspx">KB47</a> Executing a process and checking if it's still running

If you use the Global.DoLaunch(...) command to launch a Windows console application, it will return a process ID. This article provides some sample code for executing a console application and checking to make sure that the process is not still running.

### <a onclick="return RegisterKbClick('KB46', 'Executing JavaScript commands against Web Browser')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB46.aspx">KB46</a> Executing JavaScript commands against Web Browser

Sometimes you want to be able to open a browser window and execute JavaScript commands directly against the DOM objects rather than using the Rapise learned objects. This article explains the recommended way of doing this.

### <a onclick="return RegisterKbClick('KB40', 'Extending RapiseLauncher inactivity timeout')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB40.aspx">KB40</a> Extending RapiseLauncher inactivity timeout

When executing Rapise scripts from SpiraTest using RapiseLauncher there is a 10-minute inactivity timeout. If your scripts have periods of inactivity that last longer than 10 minutes, you may need to extend the default timeout. This article describes the steps for doing this. This article is obsolete.  Since Rapise 5 there is no default timeout anymore.

### <a onclick="return RegisterKbClick('KB39', 'Executing SQL Database Queries from Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB39.aspx">KB39</a> Executing SQL Database Queries from Rapise

Sometimes when you are running Rapise tests you need to run direct database queries to prepare the data in the test application, or you need to make queries against the database to verify that some user interactions left the data in a specific state. The sample script below illustrates how you can call database queries directly from the Rapise scripting editor:

### <a onclick="return RegisterKbClick('KB38', 'Selecting Browser for Test')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB38.aspx">KB38</a> Selecting Browser for Test

This article describes how to playback a test in a different browser from the one it was recorded in.

### <a onclick="return RegisterKbClick('KB32', 'Unable to record/play a Java applet using Rapise inside a web browser')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB32.aspx">KB32</a> Unable to record/play a Java applet using Rapise inside a web browser

Sometimes you have the situation where you can record/play a Java application using Rapise having correctly installed the Java bridge and set the JAVA_HOME environment variable correctly, but applets running inside a web browser do not work. This article provides some suggested solutions

### <a onclick="return RegisterKbClick('KB28', 'Detecting the presence of an object in Rapise')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB28.aspx">KB28</a> Detecting the presence of an object in Rapise

Often you need to be able to check for the presence of an object and then depending on whether the object is visible perform one of two possible sets of operations. This article explains the recommended way of doing this in Rapise 1.5.

### <a onclick="return RegisterKbClick('KB27', 'Using Rapise to extract test data from an Excel sheet')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB27.aspx">KB27</a> Using Rapise to extract test data from an Excel sheet

Often you want to be able to parameterize your Rapise tests to have a common set of test functions that can use different combinations of test data. You can use a MS-Excel spreadsheet to store the test data and use Rapise to read out the matching values. This articles provides a sample for doing this. This article is obsolete. For modern ways of making data-driven tests please refer to Data-Driven Testing documentation topic.

### <a onclick="return RegisterKbClick('KB26', 'Passing Parameters to a Rapise script through the command line')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB26.aspx">KB26</a> Passing Parameters to a Rapise script through the command line

This article describes the syntax for passing parameters from the Windows 32-bit command-line to a Rapise script. Note that you need to make sure that you're using the 32-bit command line on a 64-bit machine. I.e. follow the instructions in this KB article - https://www.inflectra.com/Support/KnowledgeBase/KB17.aspx

### <a onclick="return RegisterKbClick('KB25', 'Using Global.DoInvokeTest() to pass parameters between tests')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB25.aspx">KB25</a> Using Global.DoInvokeTest() to pass parameters between tests

Sometimes you want a test script to be able to call another sub-test as part of its operation. You can do this using the Global.DoInvokeTest('path to test', [parameters]); function. This articles provides a more detailed example for doing this. The high-level information can be found in the knowledge base at: KB127 - Passing Test Parameters.

### <a onclick="return RegisterKbClick('KB24', 'How to handle Windows/Objects that have names that change')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB24.aspx">KB24</a> How to handle Windows/Objects that have names that change

When using Rapise to record test scripts against Windows, Java, Flex, or other thick client applications that have windows or objects whose names may change in between test runs, you will usually need to make changes to either the test script or the learned objects so that they can match correctly. This article outlines some suggested techniques for recording/playing back scripts against such applications.

### <a onclick="return RegisterKbClick('KB18', 'How Do I Ensure No Other Browser Windows Open')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB18.aspx">KB18</a> How Do I Ensure No Other Browser Windows Open

When running a test you will often want to make sure there are no other browser windows open. This is commonly done either at the start or end of the test. This article describes how you do this. This article is obsolete. With Selenium-based connectors (default option since Rapise 7.3) opened browser windows are longer an issue. One may continue to use regular browsers. Rapise will use isolated browser profiles to run tests.

### <a onclick="return RegisterKbClick('KB19', 'How to successfully include and use common functions and objects')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB19.aspx">KB19</a> How to successfully include and use common functions and objects

It is often useful to have a common set of code libraries and objects that can be reused amongst multiple tests. With Rapise this can be done by creating a common test and then including it into the other actual tests. This article describes the process. This article is obsolete. To get information on how to use common  functions and objects across test cases please refer to Frameworks (recommended, requires Rapise 8.0+) or Legacy Frameworks (requires Rapise 7.0+) topics.

### <a onclick="return RegisterKbClick('KB17', 'Running a Rapise script from the command-line on a 64-bit machine')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB17.aspx">KB17</a> Running a Rapise script from the command-line on a 64-bit machine

If you try and run a Rapise script from the command-line on a 64-bit machine you may get an error message. Learn how to fix it from the article.

### <a onclick="return RegisterKbClick('KB13', 'Test-Scripts suddenly moving/clicking at false locations')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB13.aspx">KB13</a> Test-Scripts suddenly moving/clicking at false locations

If you have your browser zoom set to a value that is not 100% when recording or playing back scripts it will affect the playback reliability. Specifically Rapise may click/move at/to false locations in the test browser. You need to set your browser zoom to 100% before doing any playback/recording activities.

### <a onclick="return RegisterKbClick('KB11', 'How do I change the URL of the website being tested in Rapise.')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB11.aspx">KB11</a> How do I change the URL of the website being tested in Rapise.

We are in the process of adding a new testing server that we would like to be able to run automation scripts against. I just wanted to see if there is a process documented for converting scripts and objects to point to a different web address?

### <a onclick="return RegisterKbClick('KB8', 'Recording Infragistics Applications with Rapise Throws Error')" target="_blank"  href="https://www.inflectra.com/Support/KnowledgeBase/KB8.aspx">KB8</a> Recording Infragistics Applications with Rapise Throws Error

If you try and record a test script in Rapise using just the 'Infragistics' library you will get the following error message: C:\Program Files (x86)\Inflectra\Rapise\Engine\Recorder.js(285, 3) Microsoft JScript runtime error: 'ManagedObjectSelectableBehavior_OnMouseEvent' is undefined

