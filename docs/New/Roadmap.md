# Development Roadmap

!!! info "About"
    This roadmap document outlines the functionality planned for the future releases of Rapise. We are responsive to feedback so the contents of each individual release will be subject to change.

    Releases will also include lower level enhancements and bug fixes. We do not provide a public list of open bugs or enhancement requests at this time.
    
    If you have any feedback or suggestions regarding this roadmap, please email us at support@inflectra.com.


## Version 8.2 (Q2 2024)

- **AI**: Generate data to use for Data-Driven Testing.
    - Example: generate 10 fake company names
    - Example: generate more data lines for this spreadsheet
- **AI**: AI(text) command in RVL to perform actions based on high level text description.
    - Example: log into the system with username `librarian` and password `librarian`
    - Example: open Books section
- **Appium 2.0** support
- Enhance **CSS** selectors to pierce open **Shadow DOM**

## 2024

We will continue to work on deep integration between Rapise, Spira and Git. The focus is on simplicity of building test frameworks and execution of tests. Also as usual we will keep up-to-date our support for selected CRM/ERP systems: Microsoft Dynamics family of products, Salesforce, Oracle and SAP.

We are also going to expand our AI research and equip Rapise with AI-based features. These features will help in areas such as test data generation, test case creation, code generation, manual test conversion, UI element recognition and framework management.

## Backlog

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
- **Reporter API**: Callbacks to plug in third-party reporting engines.
- **Jenkins plugin**: Plugin to simplify running Rapise tests from Jenkins.
- **Visual Studio Code integration**: Code helper for Rapise objects/actions. Start recording/playback from VS Code.
- **Azure Test Plans integration**: Linking to a test case in an Azure Test Plan.

### Features

- **FileCompare** - add FileCompare UI to assist with adding file checkpoints on recording, updating checkpoints and analyzing differences after execution for files (txt, PDF, doc, JSON, csv) and text fields of runtime objects (Window text, Object Value).

### Smart Features (AI-based)

- Generate a Page Object/Module based on text description.
- Generate test cases for a framework based on AUT description.
- Generate RVL/JavaScript code and object repository from text description.
- Built-in assistant to perform certain actions based on text prompts.
- Add OCR capabilities.
- Element locator based on computer vision.
- Visual checkpoints.

### Technologies

- **SAP desktop** GUI support
- **Flutter** framework support
