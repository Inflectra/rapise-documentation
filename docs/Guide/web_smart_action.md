# SmartAction

## Purpose

SmartAction is a self-healing layer between test steps and Rapise object interactions. It enables tests to automatically recover when objects cannot be found using their original locators by leveraging AI-based visual recognition.

When an object is not found on the screen, SmartAction uses the object's description and intended action to locate a suitable element using AI. This makes tests more resilient to UI changes and reduces maintenance overhead.

## How It Works

SmartAction follows a multi-level recovery process:

1. **Standard Lookup**: First, attempts to find the object using the standard object repository.
2. **AI-Based Recovery (Level 1)**: If not found, uses AI to locate the object based on its description.
3. **Deep Inspection (Level 2)**: If still not found, performs a deeper AI analysis considering:
    - Whether the object might appear with a different presentation
    - Whether the page is still loading and we should wait
    - Whether the action is optional and can be skipped

### Recovery Resolutions

During deep inspection, the AI can determine one of four resolutions:

| Resolution | Description |
| ---------- | ----------- |
| `proceed` | Object was found (possibly with updated description) |
| `fail` | Object cannot be found and action cannot proceed |
| `wait` | Page is loading; wait and retry |
| `skip` | Action is optional and conditions for skipping are met |

## Usage

### Implicit Usage (RVL)

When using RVL with objects that have `smart_object_description` and `smart_actions` properties, SmartAction is invoked automatically when an object is not found:

=== "Transcript"
    | Flow | Type   | Object    | Action    | ParamName | ParamType | ParamValue |
    | ---- | ------ | --------- | --------- | --------- | --------- | ---------- |
    |      | Action | Username  | DoSetText | txt       | string    | librarian  |

If `Username` object has smart properties and is not found, RVL runtime automatically triggers SmartAction recovery.

### Direct Usage (JavaScript)

You can call SmartAction directly from JavaScript:

```javascript
SmartAction(
    "Username",           // object_id
    "DoSetText",          // action
    ["librarian"],        // params
    "The 'Username' input field located below the 'Login' header", // object_description
    "Enter the username for authentication"  // action_description
);
```

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| object_id | string | ID of the object in the repository |
| action | string | Action to perform (e.g., `DoClick`, `DoSetText`) |
| params | array | Parameters to pass to the action |
| object_description | string | Human-readable description of the object's appearance and location |
| action_description | string | Description of the intended action's purpose |

### Optional Actions

When an action is optional (e.g., closing a cookie consent dialog that may or may not appear), prefix the action description with "Optional":

```javascript
SmartAction(
    "ConsentButton",
    "DoClick",
    [],
    "The 'Accept' button in the cookie consent popup at the bottom of the page",
    "Optional. Click to accept cookies if the consent dialog is shown"
);
```

If the consent dialog is not present, SmartAction will skip the action without reporting an error.

## Supported Actions

SmartAction supports all standard object actions plus several special actions:

| Action | Description |
| ------ | ----------- |
| `DoClick`, `DoSetText`, etc. | Standard object actions |
| `Exists` | Verify that object exists on screen |
| `CheckExists` | Check existence without assertion |
| `DoWaitFor` | Wait for object to appear |
| `Verify` | Verify a property value equals expected |
| `VerifyContains` | Verify a property value contains expected substring |
| `Compare Images` | Compare object screenshot with reference image |
| `AI Compare Images` | Use AI to compare images semantically |

### Verify Action Example

```javascript
SmartAction(
    "TotalPrice",
    "Verify",
    ["Text", "$99.00"],  // [property_name, expected_value]
    "The total price label in the order summary",
    "Verify the total price matches expected value"
);
```

## Recording with SmartAction

SmartAction descriptions can be generated automatically during recording when the `airecorder` tag is enabled. The recording process:

1. Records interactions as usual
2. Post-processes each recorded object
3. Populates `smart_object_description` and `smart_actions` properties in the object repository

### Object Repository Structure

After recording with AI, objects in the repository contain additional properties:

```javascript
"Username": {
    // ... standard locator properties ...
    "smart_object_description": "The 'Username' input field with placeholder text, located in the login form",
    "smart_actions": {
        "DoSetText": "Enter user credentials for authentication",
        "DoClick": "Focus the username input field"
    }
}
```

## Self-Healing and Object Updates

When SmartAction successfully recovers an object using AI, it can update the object repository with the new locator information. This self-healing data is saved to a patch file (`Reports\Objects_<timestamp>.jspatch`) at the end of test execution.

The patch file contains JSON Patch operations that can be applied to update the original object files, ensuring future test runs can find objects without AI recovery.

### JSON Patch File Format

The `.jspatch` file is a JSON document organized by file path and object ID:

```json
{
    "%WORKDIR%\\Objects.js": {
        "Username": [
            { "op": "replace", "path": "/xpath", "value": "//input[@id='user']" },
            { "op": "add", "path": "/smart_object_description", "value": "Username input field" }
        ],
        "LoginButton": [
            { "op": "replace", "path": "/location", "value": "Login/Submit[1]" }
        ]
    }
}
```

Each patch operation follows the [JSON Patch](https://jsonpatch.com/) specification:

| Operation | Description |
| --------- | ----------- |
| `add` | Add a new property to the object |
| `replace` | Update an existing property value |
| `remove` | Remove a property from the object |

### Applying Patches with the JSON Patch Editor

When a test finishes with self-healing changes, Rapise opens the JSON Patch Editor - an interactive tool for reviewing and applying the proposed updates.

![JSON Patch Editor](./img/web_smart_action_jsonpatch_editor.png)

The editor displays:

- **File sections**: Groups patches by the object file they affect
- **Object sections**: Shows all patches for each object within a file
- **Patch status**: Indicates whether each change is `Pending` or `Applied`
- **Old vs New values**: Shows the current value (struck through) and the proposed new value

You can apply patches at different levels:

| Button | Scope |
| ------ | ----- |
| Apply | Apply a single patch operation |
| Apply All for Object | Apply all pending patches for one object |
| Apply Pending for File | Apply all pending patches in one file |
| Apply All Pending | Apply all pending patches across all files |

Once all patches are applied, click **All Done** to close the editor.

!!! tip
    Review patches carefully before applying. The AI may have found alternative locators that work but differ from your intended object identification strategy.

## See Also

- [Object Learning](./object_learning.md)
- [Object Locator](./object_locator.md)
- [Recording](./recording.md)
- [Playback](./playback.md)
- [RVL Actions](./../RVL/Actions.md)
