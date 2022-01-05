# Development Roadmap

!!! info "About"
    This roadmap document outlines the functionality planned for the future releases of the version 6 platform of Rapise. We are responsive to feedback so the contents of each individual release will be subject to change.

    Releases will also include lower level enhancements and bug fixes. We do not provide a public list of open bugs or enhancement requests at this time.
    
    If you have any feedback or suggestions regarding this roadmap, please email us at support@inflectra.com.

## Version 7.2 (February 2022)

- **Spira Global Object** to communicate with Spira from Rapise tests (to create an incident, to run a test set, to support complex execution flows).
- **Generator Global Object** to generate sequences of values usable across test runs (e.g. unique incremented value for every test run).
- **Spira Dashboard** enhancements: Test Matrix, Test Set Status graph, create Test Set from Dashboard page.

## Version 7.3 (April 2022)

- **PageObject** pattern support. Allow sub-test to export global object, re-usable across other sub-tests.

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

- **FileCompare** - add FileCompare UI to assist with adding file checkpoints on recording, updating checkpoints and analyzing differences after execution for files (txt, PDF, doc, JSON, csv) and text fields of runtime objects (Window text, Object Value).
- **Recorder Dialog 2.0**: Ability to fine tune captured steps during recording.
- **Simplified installation/upgrade**: Do not require to uninstall Rapise before upgrade.
- **Dark mode**: Someday, really :)
- Custom **Start Page**. Allow test framework or test to have custom start page that may interact with test (re-build test structure, display graph, modify test) and show some application-specific information regarding test.

### Integrations

- **Chrome Manifest V3** support.
- **Reporter API**: Callbacks to plug in third-party reporting engines.
- **Jenkins plugin**: Plugin to simplify running Rapise tests from Jenkins.
- **Java 64-bit**: Recording and running tests on 64-bit JVM.
- **Visual Studio Code integration**: Code helper for Rapise objects/actions. Start recording/playback from VS Code.
- **Azure Test Plans integration**: Linking to a test case in an Azure Test Plan.

