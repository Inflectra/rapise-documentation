# Development Roadmap

!!! info "About"
    This roadmap document outlines the functionality planned for the future releases of Rapise. We are responsive to feedback so the contents of each individual release will be subject to change.

    Releases will also include lower level enhancements and bug fixes. We do not provide a public list of open bugs or enhancement requests at this time.
    
    If you have any feedback or suggestions regarding this roadmap, please email us at support@inflectra.com.


## Version 8.1 (Q4 2023)

- Run multiple test cases from Rapise (e.g. play all from a folder or play selected test cases).
- Incorporate Chrome for Testing into Web Testing workflow.
- Enable JS Formatter/Beautifier for JS Editor to simplify code formatting.
- Folder hierarchy for Web Services (REST/SOAP) requests.

## Version 8.2 (Q2 2024)

- **GutHub Actions** - run Rapise tests as a step of GitHub CI/CD workflow.
- **FileCompare** - add FileCompare UI to assist with adding file checkpoints on recording, updating checkpoints and analyzing differences after execution for files (txt, PDF, doc, JSON, csv) and text fields of runtime objects (Window text, Object Value).
- *Proxy setting for JMeter Configuration* - make it easier to record Rapise API tests with JMeter.

## 2024

We will continue to work on deep integration between Rapise, Spira and Git. The focus is on simplicity of building test frameworks and execution of tests. Also as usual we will keep up-to-date our support for selected CRM/ERP systems: Microsoft Dynamics family of products, Salesforce, Oracle and SAP.

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

- **Reporter API**: Callbacks to plug in third-party reporting engines.
- **Jenkins plugin**: Plugin to simplify running Rapise tests from Jenkins.
- **Visual Studio Code integration**: Code helper for Rapise objects/actions. Start recording/playback from VS Code.
- **Azure Test Plans integration**: Linking to a test case in an Azure Test Plan.

### Smart Features

- Enhance Rapise Toolbox to suggest Page Object actions and RVL code (AI).
- RVL Code Analyzer: find duplicates, suggest refactoring and optimizations. 
- Test Reports analysis: anomaly detection.

### Technologies

- **SAP desktop** GUI support
- **Flutter** framework support
- Connect to embedded mobile browser controls for test recording/playback, e.g. to effectively work with Ionic framework applications.
