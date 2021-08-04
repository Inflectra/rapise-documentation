# Development Roadmap

!!! info "About"
    This roadmap document outlines the functionality planned for the future releases of the version 6 platform of Rapise. We are responsive to feedback so the contents of each individual release will be subject to change.

    Releases will also include lower level enhancements and bug fixes. We do not provide a public list of open bugs or enhancement requests at this time.
    
    If you have any feedback or suggestions regarding this roadmap, please email us at support@inflectra.com.

## Version 7.1 (September 2021)

- **Spira Dashboard 2.0**: Further development of the dashboard: 
    - CRUD operations for test case/test set parameters.
    - `Rerun test set if failed` option.
    - **Parallel run**: Parallel execution by RapiseLauncher. Should work with API tests, Web tests executed via WebDriver and Mobile tests.
- **Floating License Support**: Spira based license manager for Rapise to enable floating licenses.

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

- **Recorder Dialog 2.0**: Ability to fine tune captured steps during recording.
- **Simplified installation/upgrade**: Do not require to uninstall Rapise before upgrade.
- **Dark mode**: Someday, really :)

### Integrations

- **Reporter API**: Callbacks to plug in third-party reporting engines.
- **Jenkins plugin**: Plugin to simplify running Rapise tests from Jenkins.
- **Java 64-bit**: Recording and running tests on 64-bit JVM.
- **Visual Studio Code integration**: Code helper for Rapise objects/actions. Start recording/playback from VS Code.
- **Azure Test Plans integration**: Linking to a test case in an Azure Test Plan.





