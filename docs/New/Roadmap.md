# Development Roadmap

!!! info "About"
    This roadmap outlines the functionality planned for future releases of Rapise. We are responsive to feedback, so the contents of each release are subject to change.

    Releases will also include low-level enhancements and bug fixes. We do not provide a public list of open bugs or enhancement requests at this time.
    
    If you have any feedback or suggestions regarding this roadmap, please email us at support@inflectra.com.


## Version 8.4 (Q2 2025)

- Dynamic Test Sets support
- Support for Google Gemini models
- AI-based failure/report analysis

## 2025

We will continue to work on a deep integration between Rapise, Spira, and Git. The focus is on simplifying the process of building test frameworks and executing tests. As usual, we will keep our support for selected CRM/ERP systems up-to-date: the Microsoft Dynamics family of products, Salesforce, Oracle, and SAP.

We will also continue our AI research and enhance Rapise with more AI-based features. These features will help in areas such as manual to automated test case conversion, augmented recording, and framework management.

## Backlog

### Smart Features (AI-based)

#### Agentic Workflow Support

Ability to chat with Spira and Rapise to perform high-level tasks like exporting/importing data, performing data analysis, and executing complex user-based scenarios.

#### Computer Vision-Based Element Locator

This locator will be capable of identifying an element's bounding rectangle using a page screenshot and a text prompt. It can be used during test step generation and for automatic locator self-healing.

**Examples:**

- Locate the "Username" text field.
- Locate the "Edit" button for the book *The Adventures of Tom Sawyer*.

#### AI Technology

- Improve token spending by leveraging more optimal RAG and prompt tuning methods.
- Improve automatic error correction efficiency through automatic try-and-fix loops.

### SpiraTest Integration Enhancements

- **Flaky tests support**: Automatically detect when a test is flaky and mark the test case and test run details accordingly.

### Object Repository Management

- **Remove unused objects**: An option to remove objects that are not used explicitly in RVL or JavaScript modules.

### Run Tests on Linux/macOS

- **Node.js-based Mobile execution**: Run mobile tests on non-Windows hosts.
- **Node.js-based RapiseLauncher**: Connect to Spira from non-Windows hosts and execute tests.

### UX Enhancements

- **Recorder Dialog 2.0**: Ability to fine-tune captured steps during recording.
- **Simplified installation/upgrade**: Removes the need to uninstall Rapise before an upgrade.
- **Dark mode**: Someday, really :)
- Custom **Start Page**. Allows a test framework or test to have a custom start page that can interact with the test (e.g., rebuild the test structure, display a graph, modify the test) and show application-specific information about the test.
- Mobile: Mirror the device screen during recording/playback.

### Integrations

- **GitHub Actions** - Run Rapise tests as a step in a GitHub CI/CD workflow.
- **Proxy settings for JMeter Configuration** - Makes it easier to record Rapise API tests with JMeter.
- **Jenkins plugin**: A plugin to simplify running Rapise tests from Jenkins.
- **Visual Studio Code integration**: A code helper for Rapise objects/actions. Start recording/playback from VS Code.
- **Azure Test Plans integration**: Linking to a test case in an Azure Test Plan.

### Features

- **FileCompare** - Adds a FileCompare UI to assist with adding file checkpoints during recording, updating checkpoints, and analyzing differences after execution for files (txt, PDF, doc, JSON, csv) and text fields of runtime objects (e.g., Window text, Object Value).

#### Chat with Rapise

Interact with the open testing framework to ask questions and create test cases or page objects from a text prompt.

##### Prompt Examples

1. How many test cases do I have?
2. How many draft test cases are in my framework?
3. How many test cases currently have a failed status?
4. Are there any failed test cases?
5. Create a new test case: "View Authors" in the "Author Management" folder.
6. Generate an RVL module named "LoginPage" with the actions: DoLogin, DoLogout.

##### Chat Example 

Generate test case templates for a framework based on a description of the application under test (AUT):

- Generate 20 test case templates for a Library Information System website that manages a list of books and authors.
- Organize the generated test case names into logical groups based on the functional areas of the application.
- Create test case folders and templates for each group.

### Technologies

- **SAP desktop** GUI support
- **Flutter** framework support