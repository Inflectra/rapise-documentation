# Reconnect WebDriver Session

As of **version 6.2**, Rapise can reconnect WebDriver sessions. This enables many usage scenarios which save a significant amount of time by eliminating the need to relaunch the browser and perform manual steps to reach the desired application state.

This feature is especially handy when [used with mobile browsers](https://www.inflectra.com/Support/KnowledgeBase/KB278.aspx).

## Maintenance Scenario

1.  You run a test, and it fails at some point because an object is not found on the screen.
2.  You use the [Web Spy](web_spy.md) to reconnect to the application and analyze the cause of the failure.
3.  You use the Web Spy to re-learn the object.
4.  You run the test from the exact step where it stopped working to confirm the fix.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XwFwj6ihzq4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Reusing Session to Run Multiple Tests

Since application launch is a time-consuming operation in mobile testing, you can run multiple tests on the same browser instance.

1.  You run a test, and it leaves the browser running.
2.  You run the next test, and so on.

This approach has its pros and cons. We do not recommend using it for completely independent test cases. It makes sense, however, to use it to break down a long test into separate modules and run them sequentially.

## How it Works

!!! important
    Rapise 7.0 handles browser sessions automatically. Until `Navigator.Close()` is called, the session is kept alive and Rapise can reconnect to it.

### Rapise 6.x

To leave the application running and save session information, use the [WebDriver.SaveSession](../Libraries/WebDriver.md#SaveSession) call within the [TestFinish](understanding_the_script.md) block of your test.

```javascript
function TestFinish()
{
    WebDriver.SaveSession();
}
```

To reconnect to the running application, use the [WebDriver.ReconnectSession](../Libraries/WebDriver.md#ReconnectSession) call within the [TestPrepare](understanding_the_script.md) block of your test.

```javascript
function TestPrepare()
{
    WebDriver.ReconnectSession();
}
```

If you want Rapise to launch a new browser session if no session is saved, pass `true` to the [WebDriver.ReconnectSession](../Libraries/WebDriver.md#ReconnectSession) call.

```javascript
function TestPrepare()
{
    WebDriver.ReconnectSession(true);
}
```

> Note: The [TestPrepare](understanding_the_script.md) block is executed when recording or executing a test. It is also executed during selective execution of RVL ([Play Selection, Play From Here, etc.](rvl_editor.md#context-menu)).

## See Also

- [Selenium WebDriver](selenium_webdriver.md), for an overview of Selenium-based testing in Rapise.
- [Web Spy](web_spy.md), for information on how to inspect the state of an application loaded into a browser.