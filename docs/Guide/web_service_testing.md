# Web Service Testing

## What is a Web Service?

A Web service is a unit of managed code that can be remotely invoked
using HTTP, that is, it can be activated using HTTP requests. So, Web
Services allows you to expose the functionality of your existing code
over the network. Once it is exposed on the network, other application
can use the functionality of your program.

Web Services allows different applications to talk to each other and
share data and services among themselves. Other applications can also
use the services of the web services. For example VB or .NET application
can talk to java web services and vice versa. So, Web services is used
to make the application platform and technology independent.

## What types of Web Service are There?

There are two broad classes of web service:

1. [**SOAP**](soap_web_services.md) - These web services make use of the Web Service Definition Language (WDSL) and communicate using HTTP POST requests. They are essentially a serialization of RPC object calls into XML that can then be passed to the web service. The XML passed to the SOAP web services needs to match the format specified in the WSDL. SOAP web services are fully self-descriptive, so most clients do not directly work with the SOAP XML language, but instead use a client-side proxy generator that creates client object representations of the web service (e.g. Java, .NET objects). The web service consumers interact with these language-specific representations of the SOAP web service.

2. [**REST**](rest_web_service.md) - A RESTful web API (also called a RESTful web service) is a web API implemented using HTTP and REST principles. Unlike SOAP-based web services, there is no "official" standard for RESTful web APIs. This is because REST is an architectural style, unlike SOAP, which is a protocol. Typically REST web services expose their operations as a series of unique "resources" which correspond to a specific URL. Each of the standard HTTP methods (POST, GET, PUT and DELETE) then maps into the four basic CRUD (Create, Read, Update and Delete) operations on each
resource. REST web services can use different data serialization methods (XML, JSON, RSS, etc.).

## Why do we Test Web Services?

The purpose of **Web Service Testing** is to verify that all of the Application Programming Interfaces (APIs) exposed by your application operate as expected. In some ways they are similar to [unit tests](unit_testing.md) in that they test specific pieces of code rather than user interface objects.

Unlike simple unit tests however, web services tests will normally need
to be developed for each of the supported versions of the API so that
when a new version of a product comes out, you can regression test the
latest version of the API and all previous versions. This ensures that
legacy clients using the older version of the API don't need to make any
changes.

Also, unlike unit tests, web services are being called across a network
using the HTTP/HTTPS protocol rather than simply calling code that is
resident on the same system as the test script. In that sense, they are
similar to testing web sites.

Finally, in situations where you have an AJAX web application, as well
as testing the front-end user interface using the appropriate UI
library, you may need to test the web service that is providing the data
to the user interface at the same time. In these situations you have a
hybrid, web user interface and web service test.

## Testing Web Services with Rapise

Rapise contains a built-in web service module that can currently test
the following types of web service:

1. [**REST Web Services**](rest_web_service.md) - Rapise contains a built-in [REST definition builder](rest_definition_editor.md) and object library that allows you to prototype out your REST web service requests, inspect the returned HTTP headers and HTTP response body and then covert into a parameterized set of Rapise objects that can be scripted against in the main Rapise [JavaScript editor](javascript_ide.md). It also includes built-in support for verifying the data returned as Rapise checkpoints.

2. [**SOAP Web Services**](soap_web_services.md) - Rapise contains a built-in [SOAP request tester](soap_definition_editor.md) and object library that allows you to prototype out your SOAP web service requests, inspect the returned HTTP headers and SOAP response body and then covert into a parameterized set of Rapise objects that can be scripted against in the main Rapise [JavaScript editor](javascript_ide.md). It also includes built-in support for verifying the data returned as Rapise checkpoints.

## Web Services and Testing Frameworks

Starting from Rapise 8, we introduced the framework mode. If API entry points are a part of your testing framework, it is convenient to include them in a [Page Object](/Guide/Frameworks/pageobjects) using JavaScript mode.

Also web service definition files (`*.rest` and `*.soap` as well) may be marked as [shared](/Guide/Frameworks/frameworks#shared-files-and-repositories).
