# Auto-Waiting in Web Tests

The **Auto-Waiting** feature in Rapise enhances the reliability of web tests by ensuring that web elements are in the correct state before performing actions on them. This feature is available for **Selenium Profiles** and was introduced in **Rapise 8.3**.

## What is Auto-Waiting?

Auto-Waiting ensures that actions like clicks, typing, or selecting elements are only performed when the targeted web element is:

- **Visible** on the screen.
- **Enabled** and ready for interaction.
- **Editable** (for text input actions).
- **Not moving** and able to receive events.

Additionally, if an element is **partially visible**, Rapise will attempt to scroll it into full view before proceeding.

## Actions Supported by Auto-Waiting

The Auto-Waiting feature is applied to the following actions:

- [DoMouseMove](/Libraries/HTMLObject/#domousemove)  
- [DoClick](/Libraries/HTMLObject/#doclick)  
- [DoDblClick](/Libraries/HTMLObject/#dodblclick)  
- [DoRClick](/Libraries/HTMLObject/#dorclick)  
- [DoSendKeys](/Libraries/HTMLObject/#dosendkeys)  
- [DoSetText](/Libraries/HTMLObject/#dosettext)  
- [DoSelect](/Libraries/HTMLObject/#doselect)  
- [DoSetCheck](/Libraries/HTMLObject/#dosetcheck)  

### Mouse Move Action

This action waits for the element to:

   - Be visible.
   - Stop moving.
   - Be ready to receive events.

### Set Text Actions

These actions wait for the element to:

   - Be visible, enabled, and editable.
   - Stop moving.
   - Be ready to receive events.

### Click, Select, and Check Actions

These actions wait for the element to:

   - Be visible and enabled.
   - Stop moving.
   - Be ready to receive events.

## Configuration

### Enabling and Disabling Auto-Waiting

- **Enabled by default:** Auto-Waiting is automatically active for supported actions.
- **Disabling Auto-Waiting:** Set the global variable `WebDriver.autoWait=false` to turn off Auto-Waiting.

### Timing Configuration

The maximum wait time for Auto-Waiting is configured using the following global variables:

- `g_autoWaitAttempts`: The number of attempts Rapise will make to verify the element's state.
- `g_autoWaitAttemptInterval`: The interval (in milliseconds) between attempts.

By default, these variables are linked to the object lookup settings:

- `g_autoWaitAttempts = g_objectLookupAttempts`
- `g_autoWaitAttemptInterval = g_objectLookupAttemptInterval`

You can modify these settings to control both the default object lookup wait and the Auto-Wait timing.

### Max Auto-Wait Time Calculation

The max wait time is determined by:

```
Total Auto-Wait Time = g_autoWaitAttempts * g_autoWaitAttemptInterval
```

## Important Notes

1. **Action-Specific Feature:** Auto-Waiting is only invoked when performing actions such as `DoClick` or `DoSetText`. It does not apply to object search methods like [Navigator.Find](/Libraries/Navigator/#find), `SeS(id)`, or [Navigator.SeSFind](/Libraries/Navigator/#sesfind).

2. **Assumes Object Existence:** Auto-Waiting operates under the assumption that the target object exists. If you need to wait for an object to be created or appear in the DOM, use methods like `SeS(id)` or [Navigator.SeSFind](/Libraries/Navigator/#sesfind). These methods respect the global `Object Lookup Attempts` and `Object Lookup Attempt Interval` settings.

## Fine-Tuning Auto-Wait Logic

Auto-Wait relies on standard application UI behavior. However, some UI frameworks are designed in ways that require tweaking the default logic. For example, a framework might cover the entire screen with an invisible frame that captures all inputs and clicks, then forwards them to a specific element. From the Auto-Wait point of view, the target element is not interactable because it is covered by another element. In such cases, we may want to relax the default limitations.

There are two ways to fine-tune the logic. The first is to disable a specific check globally. The second, more powerful method, is to completely override the auto-wait checker logic with a custom function.

### Override Probing

For simple cases where a specific check consistently fails due to your application's design, you can disable it entirely. This is done by defining a `Navigator.autoWaitOverride` object. This object can have properties corresponding to the internal checks, and setting a property to `true` forces Auto-Wait to assume that check has passed.

The available properties are:

```javascript
Navigator.autoWaitOverride = {
    Visible: true,          // Assume the element is always visible on screen
    Stable: true,           // Assume the element has stopped moving
    ReceivesEvents: true,   // Assume the element is the top-most element at its coordinates
    Enabled: true,          // Assume the element is enabled for interaction
    Editable: true          // Assume the element is editable (for text input)
};
```

You only need to define the properties you want to override.

**Example: Always Assume Elements are Interactable**

If your application uses a global overlay that intercepts clicks, the `ReceivesEvents` check will always fail. To bypass this specific check for all actions, you can add this to your framework:

```javascript
// Common.js
SeSOnTestInit(function() {
   ...
   Navigator.autoWaitOverride = { ReceivesEvents: true };
   ...
});
```


**Caution:** Use this feature judiciously. Overriding a check removes a layer of protection and can lead to tests failing with less obvious errors if the element truly is not ready. It is best used for application-wide workarounds. For more targeted fixes, use the callback method described next.

### Define a SeSOnNavigatorAutoWait Callback

For the ultimate control over the auto-wait logic, you can define a callback function. This function is executed at each wait attempt and allows you to implement custom logic to decide if the element is ready for the specified action.

This approach is ideal for complex scenarios, such as:
- Applying special logic only to certain types of elements.
- Waiting for a custom "loading" attribute or class to disappear.
- Relaxing conditions after a few failed attempts.

To use it, you define the `SeSOnNavigatorAutoWait` callback function in your test script.

#### Callback Signature

```javascript
SeSOnNavigatorAutoWait(function(/**HTMLObject*/ obj, /**string*/ action, /**object*/ elInfo, /**number*/ xOffset, /**number*/ yOffset, /**number*/attempt) {
    // Your custom logic here
});
```

**Parameters:**

*   `obj` (`HTMLObject`): The Rapise test object representing the web element being targeted. You can use this to get its ID, XPath, or other properties.
*   `action` (`string`): The type of action being attempted. Possible values are:

    | Value     | Corresponds To                                                |
    | :-------- | :------------------------------------------------------------ |
    | `move`    | `DoMouseMove`                                                 |
    | `click`   | `DoClick`, `DoDblClick`, `DoRClick`, `DoSelect`, `DoSetCheck`   |
    | `settext` | `DoSetText`, `DoSendKeys`                                     |

*   `elInfo` (`object`): An object containing the results of the standard Rapise checks for this attempt. Its properties are `Visible`, `Stable`, `ReceivesEvents`, `Enabled`, and `Editable`.
*   `xOffset`, `yOffset` (`number`): The coordinates within the element where the action will occur.
*   `attempt` (`number`): The current attempt number (starts at 0).

**Return Values:**

Your callback function's return value determines the outcome of the wait attempt:

*   `return true;`: The condition is met. Auto-Waiting stops, and the action proceeds immediately.
*   `return false;`: Your custom condition was not met. Rapise will now proceed with its **default** built-in checks for the current action. This allows you to add a pre-check without replacing the standard logic.
*   `return null;`: Your custom condition was not met, and you want to **skip** the default Rapise checks for this attempt. The wait will fail for this attempt and proceed to the next one.

#### Practical Examples

**Example 1: Ignoring an Overlay for a Specific Button**

Imagine a "Submit" button is consistently covered by a transparent overlay, but other elements are not. A global override is too broad. We can use the callback to target just that button. You may define the callback within SeSOnTestInit for your testing framework.

```javascript

// Common.js
SeSOnTestInit(function() {
   SeSOnNavigatorAutoWait(function(/**HTMLObject*/obj, action, elInfo, xOffset, yOffset, attempt) {
      // If the action is a click on our specific 'Submit' button
      if (action == 'click' && obj.GetId() == 'submit_button') {
         // We only care if it's visible and enabled. We ignore if it receives events.
         if (elInfo.Visible && elInfo.Enabled) {
               return true; // It's ready, proceed with the click!
         }
      }
      
      // For all other elements and actions, use the default Rapise logic
      return false; 
   });
});
```

**Example 2: Waiting for a Spinner to Disappear**

Some elements show a "spinner" or have a "loading" CSS class while their content is being updated. The element might be visible and enabled, but not truly ready. We can use the callback to wait for this class to be removed.

```javascript

// Common.js
SeSOnTestInit(function() {
   SeSOnNavigatorAutoWait(function(/**HTMLObject*/obj, action, elInfo, xOffset, yOffset, attempt) {
      // Check for a 'loading' class on the element
      var className = obj.GetClass("class") || "";
      if (className.indexOf("loading") !== -1) {
         // If it has the 'loading' class, it's not ready. Skip default checks and try again.
         return null; 
      }
      
      // If no 'loading' class, fall back to the default Rapise checks
      return false; 
   });
});
```

**Example 3: Relaxing Conditions After Several Attempts**

Sometimes you want a strict check initially, but if the element is still not ready, you might want to relax the conditions. The `attempt` parameter is perfect for this.

```javascript

// Common.js or Main.js

SeSOnTestInit(function() {

   SeSOnNavigatorAutoWait(function(obj, action, elInfo, xOffset, yOffset, attempt) {
      if (action == 'click') {
         // For the first 5 attempts, require the element to receive events.
         if (attempt < 5) {
               return false; // Use default logic, which is strict.
         } else {
               // After 5 attempts, if it's still not ready, relax the rule.
               // As long as it's visible and enabled, let's try to click it anyway.
               if (elInfo.Visible && elInfo.Enabled) {
                  Log("AutoWait: Relaxing 'ReceivesEvents' check after " + attempt + " attempts.");
                  return true; // Force the click to proceed.
               }
         }
      }

      // For other actions, or for the first 5 click attempts, use default logic.
      return false;
   });
});
```

## Summary

Auto-Waiting improves the robustness of web tests by ensuring elements are interactable before executing actions. Its default settings and configurability make it a powerful tool for handling dynamic web applications. Adjusting Auto-Wait settings or disabling it when necessary can help tailor the testing process to your specific requirements.
