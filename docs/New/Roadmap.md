# Development Roadmap

!!! info "About"
    This roadmap document outlines the functionality planned for the future releases of Rapise. We are responsive to feedback so the contents of each individual release will be subject to change.

    Releases will also include lower level enhancements and bug fixes. We do not provide a public list of open bugs or enhancement requests at this time.
    
    If you have any feedback or suggestions regarding this roadmap, please email us at support@inflectra.com.


## Version 8.4 (Q2 2025)

- Dynamic Test Sets support
- Support for Google Gemini models
- AI-based failure/report analysis

## 2025

We will continue to work on deep integration between Rapise, Spira and Git. The focus is on simplicity of building test frameworks and execution of tests. Also as usual we will keep up-to-date our support for selected CRM/ERP systems: Microsoft Dynamics family of products, Salesforce, Oracle and SAP.

We are also going to continue our AI research and enhance Rapise with more AI-based features. These features will help in areas such as manual to automated test case conversion, augmented recording and framework management.

## Backlog

### Smart Features (AI-based)

### Agentic Workflow Support

Ability to chat with Spira and Rapise and perform high level tasks like data export/import, perform data analysis and do complex user-based scenarios.

#### Computer Vision-Based Element Locator

This locator should be capable of identifying an element's bounding rectangle using a page screenshot and a text prompt. It can be used during test step generation and for automatic locator self-healing.

**Examples:**

- Locate the "Username" text field.
- Locate the "Edit" button for the book *The Adventures of Tom Sawyer*.

#### AI Technology

- Improve token spending by leveraging more optimal RAG and prompt tuning methods.
- Improve automatic error correction efficiency by automatic try & fix loops.

### SpiraTest Integration Enhancements

- **Flaky tests support**: Auto detect that a test is flaky and mark the test case and test run details.

### Object Repository Management

- **Remove unused objects**: Option to remove objects that are not used explicitly in RVL or JavaScript modules.

### Run Tests on Linux/macOS

- **NodeJS based Mobile execution**: Run mobile tests on Non-Windows hosts.
- **NodeJS based RapiseLauncher**: Connect to Spira from Non-Windows hosts and execute tests.

### UX Enhancements

- **Recorder Dialog 2.0**: Ability to fine tune captured steps during recording.
- **Simplified installation/upgrade**: Do not require to uninstall Rapise before upgrade.
- **Dark mode**: Someday, really :)
- Custom **Start Page**. Allow test framework or test to have custom start page that may interact with test (re-build test structure, display graph, modify test) and show some application-specific information regarding test.
- Mobile: mirror device screen during recording/playback.

### Integrations

- **GitHub Actions** - run Rapise tests as a step of GitHub CI/CD workflow.
- **Proxy setting for JMeter Configuration** - make it easier to record Rapise API tests with JMeter.
- **Jenkins plugin**: Plugin to simplify running Rapise tests from Jenkins.
- **Visual Studio Code integration**: Code helper for Rapise objects/actions. Start recording/playback from VS Code.
- **Azure Test Plans integration**: Linking to a test case in an Azure Test Plan.

### Features

- **FileCompare** - add FileCompare UI to assist with adding file checkpoints on recording, updating checkpoints and analyzing differences after execution for files (txt, PDF, doc, JSON, csv) and text fields of runtime objects (Window text, Object Value).

#### Chat with Rapise

Interact with the opened testing framework to ask questions and create test cases or page objects from a text prompt.

##### Prompt Examples

1. How many test cases do I have?
2. How many draft test cases are in my framework?
3. How many test cases are currently in a failed status?
4. Are there any failed test cases?
5. Create a new test case: "View Authors" in the "Author Management" folder.
6. Generate an RVL module named "LoginPage" with actions: DoLogin, DoLogout.

##### Chat Example 

Generate test case templates for a framework based on the description of the application under test (AUT):

- Generate 20 test case templates for a Library Information System website that manages a list of books and authors.
- Organize the generated test case names into logical groups based on the functional areas of the application.
- Create test case folders and templates for each group.

### Technologies

- **SAP desktop** GUI support
- **Flutter** framework support
