# How to Solve Typical Automation Issues

## Object is Not Found

Q: I recorded a test, started playback and got `Object Not Found` message. What should I do?

A: Don't panic! There are several common reasons why an object is not found during playback.

### Reason #1 (most common)

You are testing a web application and elements in this application use dynamics IDs that change on every page load.

#### How to Fix

- [Check that Rapise can find an object on screen](https://www.inflectra.com/Support/KnowledgeBase/KB375.aspx)
- [Configure Web Recording with Web Application Profile](/Guide/web_app_profile/)
- [Use WebSpy to build a better element Locator manually](/Guide/web_spy/)
- [Turn On Self-Healing Locators](/Guide/web_self_healing/)

### Reason #2

You are testing a very slow application and the object is not yet available when it is needed.

#### How to Fix

- [Ways to slow down test execution](https://www.inflectra.com/Support/KnowledgeBase/KB301.aspx)