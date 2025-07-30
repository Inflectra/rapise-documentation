# SOAP Definition Editor

![soap_definition_editor](./img/soap_definition_editor1.png)

## Purpose

The **SOAP Definition Editor** allows you to edit [SOAP web service](soap_web_services.md) definition files (`.soap`) that contain definitions downloaded from WSDL (Web Service Definition Language) URLs.

## How to Open

Use the [Add Web Service Dialog](dialog_add_web_service.md) to create a new SOAP definition (`.soap`) file. The definition file will be opened in a **SOAP Editor** in the [Content View](content_view.md).

Alternatively, you can double-click on an existing `.soap` file in the [Test Files View](test_files_dialog.md) explorer window. The file will open in a **SOAP Editor** within the [Content View](content_view.md). The [SOAP Toolbar](toolbar_soap.md) will also open.

## Invoke

![soap_definition_editor_invoke](./img/soap_definition_editor3.png)

The Invoke tab allows you to visually select a specific SOAP operation and execute it. It has the following sections:

*   **Input** - You can expand the various SOAP operations and see the input headers and body parameters that must be sent to the function. Click on each parameter to supply a value in the right-hand pane.

*   **Output** - You can expand the various SOAP operations and see the output headers and results expected from the operation (if successful). Click on each header or the body to view the type of data returned.

*   `Invoke` - Once you have supplied the appropriate values, click the `Invoke` button to send the SOAP request and receive the response data.

*   `Record` - Clicking this button after a successful invocation of the operation will add it to the list of recorded test steps shown in the [SOAP Script Steps](#soap-script-steps) tab.

*   `Verify` - Clicking this button after clicking the `Record` button will add a `Tester.Assert(...)` [verification checkpoint](checkpoints.md) to the recorded test script. This ensures Rapise automatically verifies all returned values.

## Request / Response

This tab displays the raw SOAP XML request and response. When a SOAP operation fails, this is useful when debugging since it allows you to view the raw data exchanged with the web service:

![soap_definition_editor_request_response](./img/soap_definition_editor4.png)

Typically, you will want to view this information in either **Raw** or **XML** modes since SOAP does not support JSON as a serialization format.

![soap_definition_editor_request_response2](./img/soap_definition_editor5.png)

## Response

The HTTP response, formatted in SOAP XML, is displayed in the bottom section:

![soap_definition_editor_response_body](./img/soap_definition_editor7.png)

This displays the output from the last web service request. It has several tabs:

*   **Response Header**
*   **Response Body**
*   **SOAP Script Steps**

### Response Header

Displays a list of the HTTP response headers (name and value). If the request receives a `200 OK` code, it is displayed in green; if it receives an error code, it is displayed in red.

![soap_definition_editor_response_headers](./img/soap_definition_editor6.png)

### Response Body

*   **Raw** - Displays the raw text of the HTTP response body received from the server.

*   **XML** - If the received body content is identified as XML, this tab displays well-formatted XML, which is easier to read than the raw response body.

### SOAP Script Steps

![toolbar-soap-scriptsteps](./img/tutorial_soap_web_services11.png)

The Script Steps tab allows you to view the list of recorded SOAP operations and use them to generate a [test script](scripting.md) in the main test file.

*   **Create Script** - This takes all recorded steps and automatically generates the matching JavaScript code in your test script.

*   **Remove Step** - This removes the recorded step from the list.

*   **Clean** - This removes all recorded steps from the list.

Each step displayed in the list contains the name of the SOAP operation along with its specified parameters in JSON format. Steps displayed in **bold** with an asterisk indicate a [verification point](checkpoints.md) has been recorded. This means that when the script is generated, it will include `Tester.Assert` functions to verify the results.

## Operation Explorer

![soap_definition_editor_explorer](./img/soap_web_services3.png)

This section allows you to view all SOAP web service endpoints in the current WSDL file and the individual operations.

## See Also

*   For more information about SOAP Web Services, see [SOAP Web Services](soap_web_services.md).

*   For a tutorial on creating a SOAP web service test, see the [Web Services SOAP Tutorial](tutorial_soap_web_services.md).