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

## Summary

Auto-Waiting improves the robustness of web tests by ensuring elements are interactable before executing actions. Its default settings and configurability make it a powerful tool for handling dynamic web applications. Adjusting Auto-Wait settings or disabling it when necessary can help tailor the testing process to your specific requirements.
