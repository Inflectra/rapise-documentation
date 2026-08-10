# Java Locators

## Overview

Java locators are used to identify and locate UI elements in Java AWT/Swing applications. Rapise uses the Java Access Bridge to communicate with Java applications and provides a hierarchical path-based locator system similar to XPath.

## Path-based Locator Syntax

### Basic Path Navigation

A Java locator path consists of element names separated by forward slashes (`/`). Each element in the path represents a level in the component hierarchy:

```
RootPane/ContentPane/NavigationPanel/JTree
```

### Element Naming

Elements are identified by their accessible name. The name is typically set by the application developer using `setName()` or derived from component properties.

### Sibling Index

When multiple elements have the same name at the same level, use square brackets with a zero-based index:

```
JPanel/JButton[0]    // First button
JPanel/JButton[1]    // Second button
JPanel/JButton[2]    // Third button
```

If an element is unique (only one sibling with that name), the index is omitted:

```
JPanel/JButton       // Only button at this level
```

### Type Matching with `@` Prefix

Use the `@` prefix to match elements by their Java class type instead of name:

```
@JRootPane/@JPanel/@JButton
```

This matches any element of the specified type. The type can be:

- **Short name**: `@JButton`, `@JTextField`, `@JTable`
- **Full class name**: `@javax.swing.JButton`

### Special Characters

To include literal forward slashes, square brackets, or backslashes in element names, escape them with a backslash:

| Character | Escaped Form |
|-----------|--------------|
| `/` | `\/` |
| `[` | `\[` |
| `]` | `\]` |
| `\` | `\\` |

## Special Locator Modes

### ByName Locator

Search for an element by its accessible name anywhere within the specified search depth:

```
byname           // Search with default depth of 10
byname:5         // Search with depth of 5
byname:20        // Search with depth of 20
```

The `byname` locator uses the `object_name` property from the object definition to find the element.

**Example object definition:**
```javascript
"MyButton": {
    "locations": [
        {
            "locator_name": "Java",
            "location": {
                "location": "byname:10",
                "window_name": "My Java App"
            }
        }
    ],
    "object_name": "Submit Button"
}
```

### ByText Locator

Search for an element by its text content within a specified depth:

```
bytext           // Search with default depth of 10
bytext:5         // Search with depth of 5
```

The `bytext` locator uses the `object_text` property from the object definition.

### ByLabel Locator

Search for an element by an associated label within a specified depth:

```
bylabel          // Search with default depth of 10
bylabel:15       // Search with depth of 15
```

This is useful for form fields that have associated `JLabel` components.

## Window Matching

Java locators include window-level matching to identify the correct application window:

### Window Properties

- **window_name**: The window title (frame title)
- **window_class**: The window class name (e.g., `SunAwtFrame`, `javax.swing.JFrame`)

### Window Hierarchy

For Java applications with multiple frames or dialogs, Rapise searches:

1. First, for a top-level window matching `window_name` and `window_class`
2. Then, within that window, locates the Java component tree
3. Finally, navigates the locator path from the root component

## Examples

### Standard Path Locator

```javascript
// Object definition in Objects.js
var saved_script_objects = {
    "LoginButton": {
        "locations": [
            {
                "locator_name": "Java",
                "location": {
                    "location": "RootPane/LayeredPane/ContentPane/LoginPanel/JButton",
                    "window_name": "Login",
                    "window_class": "SunAwtFrame"
                }
            }
        ]
    }
};
```

### Using Sibling Index

```javascript
// Select the second text field in a form
"location": "FormPanel/JTextField[1]"
```

### Using Type Matching

```javascript
// Match by component type instead of name
"location": "ContentPane/@JScrollPane/@JTable"
```

### Using ByName Locator

```javascript
// Find element by name anywhere in the tree
"location": "byname:15",
"object_name": "Save Document"
```

### Using ByLabel Locator

```javascript
// Find field by its associated label
"location": "bylabel",
"object_name": "Username:"
```

## Troubleshooting

### Enable Verbose Logging

Set the verbosity level to see detailed locator resolution:

```javascript
g_verboseLevel = 3;  // Shows locator matching details
```

### Common Issues

1. **Element not found**: Check if the component hierarchy has changed. Use the [Java Spy](object_spy_java.md) to verify the current structure.

2. **Multiple matches**: If multiple components have the same name, add sibling index (`[0]`, `[1]`, etc.) to specify which one.

3. **Dynamic names**: If component names change between sessions, use type matching (`@JButton`) or `bytext` locator.

4. **Java Access Bridge not enabled**: Ensure the Rapise Java Bridge is installed and enabled. See [Java AWT/Swing Testing](java_awt_swing_testing.md#java-bridge-installation) for setup instructions.

5. **Wrong window selected**: If your application has multiple windows/dialogs, verify `window_name` and `window_class` match the correct window.

### Rapise Java Bridge Verification

To verify the Rapise Java Bridge is working:

1. Ensure the bridge is installed (see [Java Bridge Installation](java_awt_swing_testing.md#java-bridge-installation))
2. Launch your Java application with the bridge enabled
3. Use the [Java Spy](object_spy_java.md) to inspect elements

## See Also

- [Java AWT/Swing Testing](java_awt_swing_testing.md)
- [Java Spy](object_spy_java.md)
- [Object Learning](object_learning.md)
- [Object Locator](object_locator.md)
