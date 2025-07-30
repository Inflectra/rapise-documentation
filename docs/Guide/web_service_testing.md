# Web Service Testing

## What Is a Web Service?

A web service is a unit of managed code that can be remotely invoked using HTTP; that is, it can be activated using HTTP requests. Web services allow you to expose the functionality of your existing code over the network. Once exposed on the network, other applications can use your program's functionality.

Web services allow different applications to communicate and share data and services. Other applications can also consume these web services. For example, VB or .NET applications can communicate with Java web services, and vice versa. Thus, web services are used to make applications platform and technology independent.

## What Types of Web Services Are There?

There are two broad classes of web services:

1.  [**SOAP**](soap_web_services.md) - These web services make use of the Web Services Description Language (WSDL) and communicate using HTTP POST requests. They are essentially a serialization of RPC object calls into XML that can then be passed to the web service. The XML passed to the SOAP web services needs to match the format specified in the WSDL. SOAP web services are fully self-descriptive, so most clients do not directly work with the SOAP XML language, but instead use a client-side proxy generator that creates client object representations of the web service (e.g., Java, .NET objects). The web service consumers interact with these language-specific representations of the SOAP web service.

2.  [**REST**](rest_web_service.md) - A RESTful web API (also called a RESTful web service) is a web API implemented using HTTP and REST principles. Unlike SOAP-based web services, there is no "official" standard for RESTful web APIs. This is because REST is an architectural style, unlike SOAP, which is a protocol. Typically, REST web services expose their operations as a series of unique "resources" that correspond to a specific URL. Each of the standard HTTP methods (POST, GET, PUT, and DELETE) then maps to the four basic CRUD (Create, Read, Update, and Delete) operations on each resource. REST web services can use different data serialization methods (XML, JSON, RSS, etc.).

## Why Do We Test Web Services?

The purpose of **Web Service Testing** is to verify that all of the Application Programming Interfaces (APIs) exposed by your application operate as expected. In some ways, they are similar to [unit tests](unit_testing.md) in that they test specific pieces of code rather than user interface objects.

Unlike simple unit tests, however, web services tests normally need to be developed for each of the supported API versions. This ensures that when a new product version is released, you can regression test the latest API version and all previous versions, so that legacy clients using older API versions do not need to make any changes.

Also, unlike unit tests, web services are called across a network using the HTTP/HTTPS protocol, rather than simply calling code that resides on the same system as the test script. In that sense, they are similar to testing websites.

Finally, in situations where you have an AJAX web application, in addition to testing the front-end user interface using the appropriate UI library, you may need to simultaneously test the web service that provides data to the user interface. In these situations, you have a hybrid web user interface and web service test.

## Testing Web Services with Rapise

Rapise contains a built-in web service module that can currently test the following types of web services:

1.  [**REST Web Services**](rest_web_service.md) - Rapise contains a built-in [REST definition builder](rest_definition_editor.md) and object library that allows you to prototype your REST web service requests, inspect the returned HTTP headers and HTTP response body, and then convert them into a parameterized set of Rapise objects that can be scripted against in the main Rapise [JavaScript editor](javascript_ide.md). It also includes built-in support for verifying the data returned as Rapise checkpoints.

2.  [**SOAP Web Services**](soap_web_services.md) - Rapise contains a built-in [SOAP request tester](soap_definition_editor.md) and object library that allows you to prototype your SOAP web service requests, inspect the returned HTTP headers and SOAP response body, and then convert them into a parameterized set of Rapise objects that can be scripted against in the main Rapise [JavaScript editor](javascript_ide.md). It also includes built-in support for verifying the data returned as Rapise checkpoints.

## Web Services and Testing Frameworks

Starting with Rapise 8, we introduced the framework mode. If API entry points are part of your testing framework, it is convenient to include them in a [Page Object](./Frameworks/pageobjects.md) using JavaScript mode.

Also, web service definition files (`*.rest` and `*.soap`) may be marked as [shared](./Frameworks/frameworks.md#shared-files-and-repositories).