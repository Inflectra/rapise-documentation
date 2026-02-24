# Development Roadmap

!!! info "About"
    This roadmap outlines the functionality planned for future releases of Rapise. We are responsive to feedback, so the contents of each release are subject to change.

    Releases will also include low-level enhancements and bug fixes. We do not provide a public list of open bugs or enhancement requests at this time.
    
    If you have any feedback or suggestions regarding this roadmap, please email us at support@inflectra.com.


## Version 9.0 (Q1 2026)

- AI-based self-healing for Web tests

## 2026

We will continue our AI research and enhance Rapise with more AI-based features. These features will help in areas such as manual-to-automated test case conversion, augmented recording, and framework management.

We will also continue to work on deep integration between Rapise, Spira, and Git. The focus is on simplifying the process of building test frameworks and executing tests. As usual, we will keep our support for selected CRM/ERP systems up-to-date: the Microsoft Dynamics family of products, Salesforce, Oracle, and SAP.

## Backlog

### Smart Features (AI-based)

#### Enhance AiRobot

Use AiRobot to perform complex UI interactions when traditional automation is too complex or not possible.

#### Enhance Rapise MCP Server

Interact with the opened testing framework to ask questions and create test cases or page objects from a text prompt.

#### Support for Agentic Workflows 

Ability to chat with Spira and Rapise to perform high-level tasks like exporting/importing data, performing data analysis, and executing complex user-based scenarios, including code generation.

#### AI-based Manual-to-Automated Test Case Translation

Take a manual test case as input, execute it with an AI agent, and translate it into a sequence of automated steps.

#### AI-based Test Case Generation 

Generate test case templates for a framework based on a description of the application under test (AUT).

### SpiraTest Integration Enhancements

- **Importing manual tests**: Enhance and improve the process of importing manual test cases from Spira into Rapise.

### Object Repository Management

- **Remove unused objects**: An option to remove objects that are not used explicitly in RVL or JavaScript modules.

### Run Tests on Linux/macOS

- **Node.js-based mobile execution**: Run mobile tests on non-Windows hosts.

### UX Enhancements

- **Recorder Dialog 2.0**: Ability to fine-tune captured steps during recording.
- **Simplified installation/upgrade**: Removes the need to uninstall Rapise before an upgrade.
- **Custom Start Page**: Allows a test framework or test to have a custom start page that can interact with the test (e.g., rebuild the test structure, display a graph, modify the test) and show application-specific information about the test.
- **Mobile**: Mirror the device screen during recording/playback.

### Integrations

- **Jenkins plugin**: A plugin to simplify running Rapise tests from Jenkins.
- **Visual Studio Code integration**: A code helper for Rapise objects/actions. Start recording/playback from VS Code.
- **Azure Test Plans integration**: Linking to a test case in an Azure Test Plan.

### Features

- **FileCompare**: Adds a FileCompare UI to assist with adding file checkpoints during recording, updating checkpoints, and analyzing differences after execution for files (TXT, PDF, DOC, JSON, CSV) and text fields of runtime objects (e.g., Window text, Object Value).

### Technologies

- **Flutter on Mobile** framework support.