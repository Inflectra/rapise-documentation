# Changing the URL of Website being Tested

## Question

We are in the process of adding a new testing server that we would like to be able to run automation scripts against. I just wanted to see if there is a process documented for converting scripts and objects to point to a different web address?

## Recommended Solution

You do not need to convert scripts and objects. You can keep the script the same and just add the following code at the start of the test:

```javascript
Navigator.Open('http://www.website.com');
```

or using a variable:

```javascript
g_webSiteBaseUrl = 'http://www.website.com';
Navigator.Open(g_webSiteBaseUrl);
```

The variable may be defined by external execution engine like [SpiraTest](spiratest_integration.md).
