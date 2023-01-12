# Development Roadmap

!!! info "About"
    This roadmap document outlines the functionality planned for the future releases of the version 6 platform of Rapise. We are responsive to feedback so the contents of each individual release will be subject to change.

    Releases will also include lower level enhancements and bug fixes. We do not provide a public list of open bugs or enhancement requests at this time.
    
    If you have any feedback or suggestions regarding this roadmap, please email us at support@inflectra.com.


## Version 8.0 (Q2 2023)

- **Framework 2.0**
    - Improved framework structure with test cases, test case folders, shared modules/page objects and scripts
    - Import, rename, move test cases in Object Tree
    - Simplified way of defining parameters and configurations
    - Easy way of defining test sets
    - Put whole framework into Spira with a single button click: automatic creation of test cases and test sets
    - Fast way of storing framework files in Spira

## Backlog

### SpiraTest Integration Enhancements

- **Flaky tests support**: Auto detect that a test is flaky and mark the test case and test run details.

### Object Repository Management

- **Hierarchical Object Repository**: Multilevel object tree with ability to show objects from multiple tests and combine objects into user-defined groups.
- **Remove unused objects**: Option to remove objects that are not used explicitly in RVL or JavaScript modules.

### Run Tests on Linux/macOS

- **NodeJS based Mobile execution**: Run mobile tests on Non-Windows hosts.
- **NodeJS based RapiseLauncher**: Connect to Spira from Non-Windows hosts and execute tests.

### UX Enhancements

- **PageObject** pattern support. Allow sub-test to export global object, re-usable across other sub-tests.
- **FileCompare** - add FileCompare UI to assist with adding file checkpoints on recording, updating checkpoints and analyzing differences after execution for files (txt, PDF, doc, JSON, csv) and text fields of runtime objects (Window text, Object Value).
- **Recorder Dialog 2.0**: Ability to fine tune captured steps during recording.
- **Simplified installation/upgrade**: Do not require to uninstall Rapise before upgrade.
- **Dark mode**: Someday, really :)
- Custom **Start Page**. Allow test framework or test to have custom start page that may interact with test (re-build test structure, display graph, modify test) and show some application-specific information regarding test.

### Integrations

- **Reporter API**: Callbacks to plug in third-party reporting engines.
- **Jenkins plugin**: Plugin to simplify running Rapise tests from Jenkins.
- **Visual Studio Code integration**: Code helper for Rapise objects/actions. Start recording/playback from VS Code.
- **Azure Test Plans integration**: Linking to a test case in an Azure Test Plan.

