# Toolbar: SOAP

![toolbar-soap](./img/toolbar_soap1.png)

## Purpose
<!-- /* cSpell:disable */ -->
The **SOAP** tab is used for editing [SOAP web service](soap_web_services.md) definition files, also known as **W**eb **S**ervice **D**efinition **L**anguage (WSDL) files.
<!-- /* cSpell:enable */ -->
## How to Open

The **SOAP** tab is available whenever a SOAP definition file (`.soap`) is visible in the [Content View](content_view.md).

You can also open it from the `View > SOAP` menu. This will open the first `.soap` file in the project (if any). Otherwise, it does nothing.

If there is no `.soap` file in the project yet, use the [Add Web Service Dialog](dialog_add_web_service.md).

## Toolbar Controls

* `Save` - Saves the current set of SOAP operations to the `.soap` file being edited.

    ![Save](./img/toolbar_soap_save.png)

* `Endpoint` - The Endpoint field allows you to enter the URL for the SOAP WSDL file that defines all SOAP operations exposed by the web service.

    Enter the URL in the top box, then click the `Get WSDL` button.

    ![toolbar-soap-endpoint](./img/toolbar_soap_endpoint.png)

* `Get WSDL` - Updates the service definition based on the current `Endpoint` value. 

* `Custom Endpoint` - Click this button to toggle the display of the custom endpoint text box. This allows you to override the default URL specified by the WSDL file and is useful for scenarios where you want to use the WSDL from one instance but invoke operations against a different instance.

    ![toolbar-soap-custom-endpoint](./img/toolbar_soap_custom_endpoint.png)

* `Add Credentials` - Allows you to add HTTP basic authentication credentials (username and password) to the SOAP operation. This is useful for SOAP operations that require HTTP basic authentication.
    
    ![Add Credentials](./img/toolbar_soap_add_credentials.png)
    
    ![Add Network Credentials Dialog](./img/tutorial_web_services_rest6.png)