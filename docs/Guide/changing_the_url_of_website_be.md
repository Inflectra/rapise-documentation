# Changing the URL of the Website Under Test

## Question

We are adding a new testing server and want to run automation scripts against it. Is there a documented process for converting scripts and objects to point to a different web address?

## Recommended Solution

You do not need to convert scripts and objects. You can keep the script as is and add the following code at the start of the test:

```javascript
Navigator.Open('http://www.website.com');
```

or using a variable:

```javascript
g_webSiteBaseUrl = 'http://www.website.com';
Navigator.Open(g_webSiteBaseUrl);
```

The variable can be defined by an external execution engine, such as [SpiraTest](spiratest_integration.md).

## See Also

- [How-Tos](howtos.md)