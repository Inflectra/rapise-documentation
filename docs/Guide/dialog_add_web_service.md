# Add New Web Service Dialog

## Screenshot

![Add Web Service Dialog](./img/dialog_add_web_service1.png)

## Purpose

### Framework Mode

You have the option to add a REST or SOAP web service to the currently active Test Case or Module/Page Object in the editor. The term "current" refers to the item that is currently selected or being edited.

Here are the corresponding images:

![Current Test Case](img/dialog_add_web_service_current_test_case.png)

When you access *Tools / Web Services*, it will display the correct path:

![Web Service Name](img/dialog_add_web_service_service_test_name.png)

Once the service is created, it will be available under the Services node:

![Web Service Node](img/dialog_add_web_service_ws_node.png)

> Note: If there is no currently active Test Case or Page Object, the endpoint will be added to the root of the framework. In such cases, it is recommended to make it [shared](/Guide/Frameworks/frameworks#managing-common-data) for reusability.

### Single Test Mode

Adds a new REST or SOAP web service to your Rapise test. It adds the web service as a `.rest` or `.soap` file that is added to the **Services** folder of the **Files** section:

![Files Services](./img/dialog_add_web_service_files.png)

## How to Open

Click on the `Tools > Web Services` menu item.

![Tools > Web Services](img/dialog_add_web_service_menu.png)
