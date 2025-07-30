# Toolbar: REST

![REST Toolbar](./img/toolbar_rest1.png)

## Purpose

The **REST** toolbar is used for editing [REST web service](rest_web_service.md) definition files.

## How to Open

The **REST** toolbar is available whenever a REST definition file (`.rest`) is visible in the [Content View](content_view.md).

## Toolbar Buttons

*   `Save Requests` - Saves the current REST request definitions to the `.rest` file.

    ![ribbon\_rest\_file](./img/toolbar_rest_save.png)

*   `Update Object Tree` - Updates the main Rapise [Object Tree](object_tree.md) with the current REST definitions. This converts each REST request into a Rapise learned object that can be scripted against.

*   `Add Header` - Adds a standard or custom HTTP header to the current REST request.

    ![Add Header](./img/tutorial_web_services_rest9.png)

*   `Add Parameter` - Adds a parameter name and value to the current REST request. This is useful when your test script needs to pass different values (e.g., get book #1 vs. book #2).

    ![Add Parameter](./img/tutorial_web_services_rest16.png)

*   `Add Credentials` - Adds HTTP basic authentication credentials (username and password) to the request. This saves you from manually adding the header (which would require Base64-encoding the username and password).

    ![tutorial\_web\_services\_pic6](./img/tutorial_web_services_rest6.png)