# UIAutomation Locators

## Overview

UIAutomation locators are used to identify and locate UI elements in Windows desktop applications that support Microsoft UI Automation. Rapise supports two types of UIAutomation locators that work together to provide robust element identification.

## Locator Types

### Path-based Locator (UIAutomation)

The primary locator type uses a hierarchical path to navigate from a top-level window to the target element. This is similar to XPath for web elements.

**Example path:**
```
MainWindow/ContentPane/NavigationPanel/TreeView/TreeItem[2]/Button
```

### Property-based Locator (UIAutomation2)

The secondary locator uses a combination of UI Automation properties (ControlType, Name, AutomationId) to find elements directly without navigating through the hierarchy.

## Path-based Locator Syntax

### Basic Path Navigation

A path consists of element names separated by forward slashes (`/`). Each element in the path represents a level in the UI hierarchy:

```
ParentElement/ChildElement/GrandchildElement
```

### Element Naming

Elements are identified using the following priority:

1. **AutomationId** - The unique automation identifier (if available and not dynamic)
2. **Name** - The element's name property
3. **ControlType** - The type of control (e.g., Button, TextBox, TreeItem)

### Sibling Index

When multiple elements have the same name at the same level, use square brackets with a zero-based index:

```
Panel/Button[0]    // First button
Panel/Button[1]    // Second button
Panel/Button[2]    // Third button
```

### Parent Navigation

Use `..` to navigate to the parent element:

```
CurrentElement/../SiblingElement
```

### Special Characters

To include literal forward slashes, square brackets, or backslashes in element names, escape them with a backslash:

| Character | Escaped Form |
|-----------|--------------|
| `/` | `\/` |
| `[` | `\[` |
| `]` | `\]` |
| `\` | `\\` |

### Regular Expressions

Element names support regular expressions with the `regex:` prefix:

```
regex:Button_\d+          // Matches Button_1, Button_2, etc.
regex:.*SearchResults.*   // Matches any element containing "SearchResults"
regex:.*                  // Matches any element (wildcard)
```

### Wildcard Matching

Use `*` to match any single element at that level:

```
MainWindow/*/Button    // Button inside any direct child of MainWindow
```

## Special Locator Modes

### ByName Locator

Search for an element by its Name property within a specified depth:

```
byname           // Search with default depth of 10
byname:5         // Search with depth of 5
byname:20        // Search with depth of 20
```

### ByText Locator

Search for an element by its text value within a specified depth:

```
bytext           // Search with default depth of 10
bytext:5         // Search with depth of 5
```

## Wildcard Locators (`**` prefix)

!!! note "Added in Rapise 9.1"

Wildcard locators allow you to skip intermediate elements in the hierarchy by searching for a uniquely identifiable element anywhere in the subtree.

### Basic Wildcard Syntax

Prefix the element identifier with `**` to search recursively:

```
**MainPage/ContentPanel/Button
```

This is equivalent to:
```
Root/SomeContainer/AnotherContainer/MainPage/ContentPanel/Button
```

The `**MainPage` part searches for an element named "MainPage" anywhere in the UI tree, then continues with the standard path navigation from there.

### Property-based Wildcard Matching

You can use property conditions in wildcard searches:

**Single property:**
```
**name=SearchButton
**id=btnSubmit
**type=Button
```

**Multiple properties (AND condition):**
```
**name=Submit;type=Button
**id=mainGrid;class=DataGridView
```

### Supported Property Aliases

| Alias | Full Property Name |
|-------|-------------------|
| `name` | AutomationElementIdentifiers.NameProperty |
| `id`, `automationid` | AutomationElementIdentifiers.AutomationIdProperty |
| `type`, `controltype` | AutomationElementIdentifiers.ControlTypeProperty |
| `class`, `classname` | AutomationElementIdentifiers.ClassNameProperty |
| `value` | ValuePatternIdentifiers.ValueProperty |
| `key`, `keyboardshortcut` | LegacyIAccessiblePatternIdentifiers.KeyboardShortcutProperty |

### Chained Wildcards

Multiple wildcard segments can be chained:

```
**MainPage/**SettingsPanel/SaveButton
```

This finds "MainPage" anywhere, then finds "SettingsPanel" anywhere within MainPage, then navigates to "SaveButton".

## Locator Shortcuts

!!! note "Added in Rapise 9.1"

Locator shortcuts allow you to define reusable path prefixes that are automatically replaced during locator resolution. This is useful for simplifying complex locators or handling application-specific patterns.

### Defining Shortcuts

Set the global `g_uiaLocatorShortcuts` variable in your test script or `User.js`:

```javascript
g_uiaLocatorShortcuts = {
    "MyApp/MyApp/MainWindow": "**MainWindow",
    "ComplexApp/Shell/Frame/ContentHost": "**ContentHost"
};
```

### How Shortcuts Work

When a locator path starts with a defined shortcut key, it is automatically replaced with the shortcut value:

**Original locator:**
```
MyApp/MyApp/MainWindow/Toolbar/SearchBox
```

**After shortcut replacement:**
```
**MainWindow/Toolbar/SearchBox
```

### Use Cases for Shortcuts

1. **Simplify repeated prefixes**: When all objects share a common path prefix
2. **Handle dynamic containers**: Replace unstable intermediate elements with wildcard searches
3. **Application versioning**: Adapt to UI changes without modifying all object definitions

## Window Matching

UIAutomation locators include window-level matching to identify the correct application window:

### Window Properties

- **window_name**: The window title (supports regex with `regex:` prefix)
- **window_class**: The window class name (supports regex)

### Dynamic Window Classes

Rapise automatically handles dynamic window class names common in WPF and Windows Forms applications:

- **WPF**: `HwndWrapper[AppName.exe;;guid]` → matched with `regex:HwndWrapper\[.+\]`
- **Windows Forms**: `WindowsForms10.Window.xxxxx.appname` → matched with pattern

## Global Configuration Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `g_uiaLocator1_PlaybackDisabled` | `false` | Disable path-based locator during playback |
| `g_uiaLocator2_PlaybackDisabled` | `false` | Disable property-based locator during playback |
| `g_uiaLocator1_RecordingDisabled` | `false` | Disable path-based locator during recording |
| `g_uiaLocator2_RecordingDisabled` | `false` | Disable property-based locator during recording |
| `g_uiaLocator2_RecordingTimeout` | `5000` | Timeout (ms) for property-based locator during recording |
| `g_uiaNameFromControlType` | `false` | Use ControlType instead of Name/AutomationId for element identification |
| `g_uiaLocatorShortcuts` | `{}` | Object defining locator path shortcuts |

## Examples

### Standard Path Locator

```javascript
// Object definition in Objects.js
var saved_script_objects = {
    "SaveButton": {
        "locations": [
            {
                "locator_name": "UIAutomation",
                "location": {
                    "location": "MainWindow/Toolbar/SaveButton",
                    "window_name": "My Application",
                    "window_class": "regex:HwndWrapper\\[.+\\]"
                }
            }
        ]
    }
};
```

### Using Sibling Index

```javascript
// Select the third tab in a tab control
"location": "MainWindow/TabControl/TabItem[2]"
```

### Using Wildcard Locator

```javascript
// Find Settings panel anywhere, then navigate to checkbox
"location": "**SettingsPanel/OptionsGroup/AutoSaveCheckBox"
```

### Using Property-based Wildcard

```javascript
// Find element by AutomationId anywhere in the tree
"location": "**id=btnExport"

// Find button with specific name and type
"location": "**name=Export;type=Button"
```

### Combining with Shortcuts

```javascript
// In User.js
g_uiaLocatorShortcuts = {
    "MyApp/MyApp/Shell/MainFrame": "**MainFrame"
};

// This locator:
"location": "MyApp/MyApp/Shell/MainFrame/Toolbar/Button"
// Becomes:
"location": "**MainFrame/Toolbar/Button"
```

## Troubleshooting

### Enable Verbose Logging

Set the verbosity level to see detailed locator resolution:

```javascript
g_verboseLevel = 3;  // Shows locator matching details
```

### Common Issues

1. **Element not found**: Check if the path has changed. Use the [UIAutomation Spy](object_spy_uiautomation.md) to verify the current element hierarchy.

2. **Wrong element selected**: Multiple elements may match. Add sibling index or use more specific properties.

3. **Slow performance**: Property-based locators (UIAutomation2) scan the entire tree. Consider using path-based locators for better performance.

4. **Dynamic IDs**: If AutomationId changes between sessions, use Name or ControlType matching instead, or use regex patterns.

## See Also

- [Desktop Testing](windows_applications.md)
- [UIAutomation Spy](object_spy_uiautomation.md)
- [Object Learning](object_learning.md)
- [Object Locator](object_locator.md)
