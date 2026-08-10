# Library Parameters

!!! note "Added in Rapise 9.1"

Libraries can define configurable parameters that appear in the [Choose Parameters](test_param_chooser.md) dialog. This allows users to customize library behavior without modifying test scripts directly.

## Overview

When a library defines parameters, they automatically appear in the [Choose Parameters](test_param_chooser.md) dialog, grouped by category. Users can enable these parameters and set their values, which become available as global variables during test execution.

## Using Library Parameters

1. Open your framework in Rapise
2. Use `Test > Play` or press `Ctrl+F5` to open the [Choose Test Case](test_to_play_selector.md) dialog
3. Click the `Parameters...` button to open the Choose Parameters dialog
4. Find the library parameters grouped under categories like "Advanced - AI" or "Advanced - UIAutomation"
5. Check the parameters you want to enable
6. Set their values as needed
7. Click OK to save

The enabled parameters will be available as global variables (e.g., `g_saForceHealing`, `g_uiaNameFromControlType`) in your test scripts.

## Built-in Library Parameters

### AI Library Parameters

The AI library (`LibAI`) provides parameters for controlling self-healing and SmartAction behavior:

| Parameter | Variable | Default | Description |
|-----------|----------|---------|-------------|
| Force Self Healing | `g_saForceHealing` | `false` | Even if control is found by locator, use self-healing to find it |
| Skip When Not Found | `g_saSkipWhenNotFound` | `false` | Skip action when object is not found instead of reporting an error |
| Use Web AI Snapshot | `g_saUseWebAiSnapshot` | `true` | Use web page AI snapshot (DOM structure) for self-healing |
| Use Web AI Snapshot And Image | `g_saUseWebAiSnapshotAndImage` | `true` | Use web page AI snapshot combined with screenshot image for self-healing |
| Use AiRobot | `g_saUseRobot` | `false` | When all other self-healing methods fail, use AiRobot to find object and accomplish its action |

### UIAutomation Library Parameters

The UIAutomation library (`LibUIAutomation`) provides parameters for desktop application testing:

| Parameter | Variable | Default | Description |
|-----------|----------|---------|-------------|
| UIA control type as name | `g_uiaNameFromControlType` | `false` | Use UIAutomation control type as name. Useful when names are dynamic or derived from changing values |
| Disable Locator1 Recording | `g_uiaLocator1_RecordingDisabled` | `false` | Disable path-based locator during recording |
| Disable Locator2 Recording | `g_uiaLocator2_RecordingDisabled` | `false` | Disable condition-based locator during recording |
| Disable Locator1 Playback | `g_uiaLocator1_PlaybackDisabled` | `false` | Disable path-based locator during playback |
| Disable Locator2 Playback | `g_uiaLocator2_PlaybackDisabled` | `false` | Disable condition-based locator during playback |
| Locator2 Recording Timeout | `g_uiaLocator2_RecordingTimeout` | `5000` | Timeout in milliseconds for Locator2 search during recording |
| Disable Double Click Recording | `g_uiaDisableDoubleClickRecording` | `false` | Disable recording of double-click events |

## Defining Parameters in Custom Libraries

When creating [custom libraries](custom_libraries.md), you can define configurable parameters using the `globalvars` property in the `SeSRegisterLibrary` call:

```javascript
SeSRegisterLibrary(
    {
        name: 'MyCustomLibrary',
        description: 'My custom library with configurable parameters',
        include: 'Lib/MyCustomLibrary/MyCustomLibrary.js',
        autoload: false,
        libinit: function()
        {
            // Library initialization code
            return true;
        },
        globalvars:
        [
            {
                "name": "My Parameter",
                "scriptVariableName": "g_myParameter",
                "defaultValue": "default value",
                "description": "Description of what this parameter does.",
                "category": "My Library Settings",
                "type": "string"
            },
            {
                "name": "Enable Feature",
                "scriptVariableName": "g_enableFeature",
                "defaultValue": false,
                "description": "Enable or disable a specific feature.",
                "category": "My Library Settings",
                "type": "bool"
            },
            {
                "name": "Timeout",
                "scriptVariableName": "g_timeout",
                "defaultValue": 30000,
                "description": "Timeout value in milliseconds.",
                "category": "My Library Settings",
                "type": "number"
            },
            {
                "name": "Log Level",
                "scriptVariableName": "g_logLevel",
                "defaultValue": "Info",
                "description": "Select the logging level.",
                "category": "My Library Settings",
                "type": "select",
                "options": ["Debug", "Info", "Warning", "Error"]
            }
        ]
    }
);
```

### Parameter Properties

| Property | Required | Description |
|----------|----------|-------------|
| `name` | Yes | Display name shown in the Test Parameters dialog |
| `scriptVariableName` | Yes | Global variable name (typically prefixed with `g_`) |
| `defaultValue` | Yes | Default value when parameter is enabled |
| `description` | No | Help text describing the parameter |
| `category` | No | Group name for organizing parameters in the dialog |
| `type` | Yes | Data type: `string`, `bool`, `number`, `select`, or `password` |
| `options` | Only for `select` | Array of possible values for dropdown selection |

### Parameter Types

- **string** - Text input field
- **bool** - Checkbox (true/false)
- **number** - Numeric input field
- **select** - Dropdown with predefined options
- **password** - Password input field (value is masked)

## Page Object Parameters

Test cases and page objects can also define parameters that appear in the Test Parameters dialog. These are configured using the `Ask` checkbox when defining parameters in the test case or page object.

Parameters from multiple test cases or page objects are grouped under "Parameters For - [Name]" categories. If the same parameter is defined in multiple places, it appears under "Test Parameters" as a shared parameter.

## See Also

- [Custom Libraries](custom_libraries.md)
- [Framework Parameters](Frameworks/parameters.md)
- [Object Libraries](recording_library.md)
