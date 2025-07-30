# REST Definition Editor

![rest_definition_editor](./img/rest_definition_editor_overview.png)

## Purpose

The **REST Definition Editor** allows you to edit [REST web service](rest_web_service.md) definition files (`.rest`).

## How to Open

Use the [Add Web Service Dialog](dialog_add_web_service.md) to create a new REST definition (`.rest`) file. The definition file then opens in a **REST Editor** within the [Content View](content_view.md).

Alternatively, you can double-click an existing `.rest` file in the [Test Files View](test_files_dialog.md) explorer window. The definition file then opens in a **REST Editor** within the [Content View](content_view.md). The [REST Toolbar](toolbar_rest.md) also becomes visible at the top of the editor.

## Request

![REST Editor](./img/rest_definition_editor3.png)

The request form has several sections to populate:

*   **Method** - The type of HTTP request (GET, POST, PUT, DELETE, etc.).
*   **URL** - The URL of the web service request, with any included parameter tokens (e.g., {session_id} in the example above).
*   **Credentials** - Any HTTP Basic Authentication headers.
*   **Headers** - Any other HTTP headers (both standard and custom).
*   **Parameters** - Any parameters defined in the URL that are called from the Rapise test script.
*   **Body** - The body of the request (for POST and PUT requests). This can be in any text-serialized format such as XML or JSON.

## Response

The HTTP Response Headers are displayed:

![rest_definition_editor_headers](./img/rest_definition_editor4.png)

The HTTP Response in XML format is formatted and displayed:

![rest_definition_editor_xml](./img/rest_definition_editor5.png)

The HTTP Response in JSON format is formatted and displayed:

![rest_definition_editor_json](./img/rest_definition_editor6.png)

This displays the output from the last web service request. It has several tabs:

*   **Response Header** - Displays a list of the HTTP response headers (name and value). If the request received a `200 OK` code, it is displayed in green; if it receives an error code, it is displayed in red.
*   **Response Body**
    *   **Raw** - Displays the raw text of the HTTP response body received from the server.
    *   **XML** - If the received body content is identified as XML, this tab displays well-formatted XML that is easier to read than the raw response body.
    *   **JSON** - If the received body content is identified as JSON, this tab displays well-formatted, indented JSON that is easier to read than the raw response body.

## Operation Explorer

![rest_definition_editor_explorer](./img/rest_definition_editor7.png)

This section allows you to add, open, delete, and clone REST requests within the definition file.

*   `Add request` - Adds a new REST operation to the current `.rest` definition file.

    ![Add Request](./img/rest_definition_editor_addrequest.png)

*   `Clone request` - Creates a copy of the currently selected REST operation and allows you to give the copy a new name.

    ![Clone Request](./img/rest_definition_editor_clonerequest.png)

*   `Delete request` - Deletes the currently selected REST operation from the current REST definition file.

    ![Del Request](./img/rest_definition_editor_delrequest.png)

## Script Steps

![REST Create Script](./img/tutorial_web_services_rest32.png)

The **REST Script Steps** tab in the bottom view allows you to view the list of recorded REST operations and use them to create your [test script](scripting.md) in the main test file.

*   `Create Script` - Takes all recorded steps and automatically creates the matching JavaScript code in your test script.

*   `Remove Step` - Removes the recorded step from the script box.

*   `Clear` - Removes all recorded steps from the script box.

> Each step displayed in the script box contains the name of the REST operation and its HTTP method (GET, POST, PUT, DELETE, etc.). Steps displayed in **bold\*** and marked with an asterisk also have a [verification point](checkpoints.md) recorded. This means that when the script is generated, it includes a `Tester.Assert` function to verify the results.

## See Also

*   For more information on REST Web Services, see [REST Web Services](rest_web_service.md).
*   For a tutorial on creating a REST web service test, see the [Web Services REST Tutorial](tutorial_web_services_rest.md).