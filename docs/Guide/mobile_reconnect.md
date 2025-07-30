# Reconnect Mobile Session

Since **version 6.2**, Rapise supports reconnecting mobile sessions. This enables many time-saving usage scenarios, as it eliminates the need to relaunch the application and manually perform steps to reach a desired application state.

## Maintenance Scenario

1. You run a test, and it fails at some point because an object is not found on screen.
2. You use the [Mobile Spy](object_spy_mobile.md) to reconnect to the application and analyze the cause of the failure.
3. You use the Mobile Spy to re-learn the object.
4. You run the test starting exactly from the step where it failed to ensure the test is fixed.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aLAUAGLqluA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Multi Session Recording Scenario

1. You record the initial steps of a test case.
2. You run the test to make sure it works as expected (optional).
3. You start the next recording session and reconnect to the application. This saves time by eliminating the need to launch the application and manually perform steps to prepare it for recording.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xPB2dpXb91k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Reusing Session to Run Multiple Tests

Since launching an application is a time-consuming operation in mobile testing, you can run multiple tests on the same application instance.

1. You run a test, and it leaves the application running.
2. You run the next test, and so on.

This approach has both advantages and disadvantages. We do not recommend using it for completely independent test cases. However, it makes sense to use it to break down a long test into separate modules and run them sequentially.

## How it Works

To leave an application running and save session information, use the [AppiumDriver.SaveSession](/Libraries/AppiumDriver/#SaveSession) call within the [TestFinish](understanding_the_script.md) block of your test.

!!! information
    In Rapise 8.0+, explicitly calling `AppiumDriver.SaveSession()` is no longer required.

```javascript
function TestFinish()
{
    AppiumDriver.SaveSession();
}
```

To reconnect to the running application, use the [AppiumDriver.ReconnectSession](/Libraries/AppiumDriver/#ReconnectSession) call within the [TestPrepare](understanding_the_script.md) block of your test.

```javascript
function TestPrepare()
{
    AppiumDriver.ReconnectSession();
}
```

If you want Rapise to launch a new application session when no saved session exists, pass `true` to the [AppiumDriver.ReconnectSession](/Libraries/AppiumDriver/#ReconnectSession) call.

```javascript
function TestPrepare()
{
    AppiumDriver.ReconnectSession(true);
}
```

> Note: The [TestPrepare](understanding_the_script.md) block is executed when recording or executing a test. It is also executed during selective execution of RVL ([Play Selection, Play From Here, etc.](rvl_editor.md#context-menu)).

## Active Session

When you launch Mobile Spy from the main toolbar, it first checks if the Appium server has active sessions. If active sessions exist, the Spy connects to one of them. You can switch the session using the dropdown on the Spy toolbar.

<img src="/Guide/img/mobile_spy_active_sessions.png" width="780" />

## See Also

- [Mobile Testing](mobile_testing2.md) - for an overview of mobile testing, including its sub-sections.
- [Mobile Object Spy](object_spy_mobile.md) - for information on how Rapise connects to a device and allows you to view objects in the tested application.