# Test Framework Parameters

In test automation projects, it is often necessary to parameterize test cases for various purposes. For instance, this could involve specifying different URLs for running tests in different environments (development, staging, production), or providing user credentials for logging into the system. Additionally, there might be a need to quickly modify playback speed, error handling, and screenshot settings for multiple test cases. In the Rapise 8.0 Framework mode, managing parameters is made simple and convenient, allowing easy creation and management of parameters, including the ability to run the same test case with different input data, such as filling a form with various values to create multiple records in a system database.

In the upcoming sections, you will gain valuable insights into the process of defining parameters and configurations, as well as their application in test cases and test sets. If you're looking for concrete examples of parameter creation and usage, we highly recommend exploring [this knowledge base article](https://www.inflectra.com/Support/KnowledgeBase/KB749.aspx).

## Defining Framework Parameters

To manage framework level parameters and configurations navigate to the Spira Dashboard using main menu `View > Spira Dashboard`. Then switch to `Parameters` page in the dashboard.

![Parameters Page](img/parameters_parameters_tab.png)

!!! note
    If you do not see `Parameters` link then the test opened in Rapise is not a Framework.

The `Parameters` page contains two tables. One for parameters and another one for configurations. To add a parameter click `Add Parameter` button. It will bring up `Add Parameter` dialog.

![Add Parameter Dialog](img/parameters_add_parameter_dialog.png)

Specify parameter name, type, default value and click `Create`. 

### Supported Parameter Types

- **boolean** - simple boolean value, true or false.
- **number** - numeric value, integer or float.
- **string** - string value, e.g. URL or user name. 
- **password** - masked (******) password string.
- **select** - dropdown with predefined choices.
- **browser** - the list of [global and local browser profiles](../selenium_settings_dialog.md#local-selenium-profiles).
- **mobile** - the list of [global and local mobile profiles](../mobile_settings_dialog.md#local-mobile-profiles).
- **datacolumn** - parameter to bind to a column in the data file.

#### Single Select Parameter

If parameter type is set to `select` define the list of options. For this purpose use the popup menu.

![Single Select Parameter](img/parameters_add_single_select_parameter.png)

You may add a new option, remove existing one or set specific option as a default one. Also using hamburger icon you may reorder the options.

To make a choice for `Single Select Parameter` double click it in the `Parameters` table and click on the option you need.

![Choose Single Select Option](img/parameters_choose_single_select_option.png)

#### Multiselect Parameter

To turn `Single Select Parameter` into a `Multi Select Parameter` just set `Multiselect` checkbox.

![Multiselect Parameter](img/parameters_add_multiselect_parameter.png)

To make choices for `Multiselect Parameter` double click it in the `Parameters` table, select options you need and click `Save` button.

![Choose Multiselect Options](img/parameters_choose_multiselect_options.png)

## Configurations

TBD

## Defining Test Case Parameters

TBD

## Passing Parameters

TBD

### Passing Parameters for Test Run

TBD

### Passing Parameters Between Tests

TBD
