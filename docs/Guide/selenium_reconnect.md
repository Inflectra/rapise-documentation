# Reconnect WebDriver Session

Since **version 6.2** Rapise is able to reconnect WebDriver sessions. It makes possible many usage scenarios that save a lot of time because you do not need to relaunch the browser and perform manual steps to reach desired application state.

This feature is especially handy when you [use it with mobile browsers](https://www.inflectra.com/Support/KnowledgeBase/KB278.aspx).

## Maintenance Scenario

1. You run a test and it fails at some point because some object is not found on screen.
2. You use the [Web Spy](web_spy.md) to reconnect to the application and analyze the cause of the failure.
3. You use the Web Spy to re-learn the object.
4. You run the test exactly from the step where it stopped working to make sure the test is fixed.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XwFwj6ihzq4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Reusing Session to Run Multiple Tests

Since application launch is time consuming operation in mobile testing you may run multiple tests on the same browser instance.

1. You run a test and it leaves the browser running.
2. You run next test and so on.

This approach has pros and cons. We do not recommend to use it for completely independent test cases. It makes sense, however, to use it to break down a long test into separate modules and run them sequentially.

## How it Works

!!! important
    Rapise 7.0 handles browser session automatically. Until you do `Navigator.Close()` the session is kept alive and Rapise can reconnect to it.


### Rapise 6.x

To leave application running and save session information use [WebDriver.SaveSession](/Libraries/WebDriver/#SaveSession) call in [TestFinish](understanding_the_script.md) block of your test.

```javascript
function TestFinish()
{
    WebDriver.SaveSession();
}
```

To reconnect to the running application use [WebDriver.ReconnectSession](/Libraries/WebDriver/#ReconnectSession) call in [TestPrepare](understanding_the_script.md) block of your test.

```javascript
function TestPrepare()
{
    WebDriver.ReconnectSession();
}
```

If you want Rapise to launch a new browser session if there is no saved one pass `true` to [WebDriver.ReconnectSession](/Libraries/WebDriver/#ReconnectSession) call.

```javascript
function TestPrepare()
{
    WebDriver.ReconnectSession(true);
}
```

> Note: [TestPrepare](understanding_the_script.md)  block is executed when you do recording or execution of a test. It is also executed if you do selective execution of RVL ([Play Selection, Play From Here, etc.](rvl_editor.md#context-menu)).

## See Also

- [Selenium WebDriver](selenium_webdriver.md), for an overview of Selenium based testing in Rapise.
- [Web Spy](web_spy.md), for information on how to inspect state of an application loaded into a browser.