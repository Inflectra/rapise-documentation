# Reconnect Mobile Session

Since **version 6.2** Rapise is able to reconnect mobile sessions. It makes possible many usage scenarios that save a lot of time because you do not need to relaunch the application and perform manual steps to reach desired application state.

## Maintenance Scenario

1. You run a test and it fails at some point because some object is not found on screen.
2. You use the [Mobile Spy](object_spy_mobile.md) to reconnect to the application and analyze the cause of the failure.
3. You use the Mobile Spy to re-learn the object.
4. You run the test exactly from the step where it stopped working to make sure the test is fixed.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aLAUAGLqluA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Multi Session Recording Scenario

1. You record first steps of a test case.
2. You run the test to make sure it works as expected (optional).
3. You start next recording session and reconnect to the application. No time is wasted for launching the application and performing steps manually to prepare it for recording.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xPB2dpXb91k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Reusing Session to Run Multiple Tests

Since application launch is time consuming operation in mobile testing you may run multiple tests on the same application instance.

1. You run a test and it leaves the application running.
2. You run next test and so on.

This approach has pros and cons. We do not recommend to use it for completely independent test cases. It makes sense, however, to use it to break down a long test into separate modules and run them sequentially.

## How it Works

To leave application running and save session information use [AppiumDriver.SaveSession](/Libraries/AppiumDriver/#SaveSession) call in [TestFinish](understanding_the_script.md) block of your test.

!!! information
    In Rapise 8.0+ there is no need to explicitly call `AppiumDriver.SaveSession()`.

```javascript
function TestFinish()
{
    AppiumDriver.SaveSession();
}
```

To reconnect to the running application use [AppiumDriver.ReconnectSession](/Libraries/AppiumDriver/#ReconnectSession) call in [TestPrepare](understanding_the_script.md) block of your test.

```javascript
function TestPrepare()
{
    AppiumDriver.ReconnectSession();
}
```

If you want Rapise to launch a new application session if there is no saved one pass `true` to [AppiumDriver.ReconnectSession](/Libraries/AppiumDriver/#ReconnectSession) call.

```javascript
function TestPrepare()
{
    AppiumDriver.ReconnectSession(true);
}
```

> Note: [TestPrepare](understanding_the_script.md)  block is executed when you do recording or execution of a test. It is also executed if you do selective execution of RVL ([Play Selection, Play From Here, etc.](rvl_editor.md#context-menu)).

## Active Session

When you launch a Mobile Spy from the main toolbar it first checks if Appium server has active sessions. If there are active sessions then the Spy connects to one of them. You may switch the session using the dropdown on the spy toolbar.

<img src="/Guide/img/mobile_spy_active_sessions.png" width="780" />

## See Also

- [Mobile Testing](mobile_testing2.md), for an overview of mobile testing with sub-sections on testing.
- [Mobile Object Spy](object_spy_mobile.md) - for information on how Rapise connects to the device and lets you view the objects in the tested application.