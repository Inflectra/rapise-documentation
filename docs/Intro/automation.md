# How to Solve Typical Automation Issues

## Object is Not Found

!!! note ""
    Q: I recorded a test, started playback and got `Object Not Found` message. What should I do?
    
    A: Don't panic! There are several common reasons why an object is not found during playback.

### Reason #1 (most common)

You are testing a web application and elements in this application use dynamics IDs that change on every page load.

<iframe width="560" height="315" src="https://www.youtube.com/embed/1QBA7TunnOY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

!!! info "How to Fix"
    - [Object Not Found - How to Fix (schema)](/Guide/object_not_found/)
    - [Check that Rapise can find an object on screen](https://www.inflectra.com/Support/KnowledgeBase/KB375.aspx)
    - [Configure Web Recording with Web Application Profile](/Guide/web_app_profile/)
    - [Use WebSpy to build a better element Locator manually](/Guide/web_spy/)
    - [Turn On Self-Healing Locators](/Guide/web_self_healing/)

### Reason #2

You are testing a very slow application and the object is not yet available when it is needed.

!!! info "How to Fix"
    - [Ways to slow down test execution](https://www.inflectra.com/Support/KnowledgeBase/KB301.aspx)
    
## Execute Tests Fast And Reliable

Let's talk about how to adjust an automated test to make it run fast and reliable.

<iframe width="560" height="315" src="https://www.youtube.com/embed/nCV0u6s9W0E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Web Recorder Configuration

Rapise has a Web Recorder. When you start recording Rapise intercepts your keyboard and mouse and adds the UI elements you are interacting with to the Object Tree. For each such element Rapise generates an XPATH locator. Though it usually makes a great job generating XPATH locators for elements, default Web Recorder settings do not fit all Web Applications. For complex modern applications you may need to configure the Web Recorder to get the most out of it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/v8UmALPdJIU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

