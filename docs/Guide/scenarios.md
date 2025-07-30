# Scenarios

## Purpose

> Note: As of Rapise 8.0, it is recommended to use [Test Cases](Frameworks/frameworks.md#test-cases) and [Modules / Page Objects](Frameworks/pageobjects.md) for creating scenarios and maintaining reusable building blocks, respectively.

Scenarios serve as reusable building blocks that can be incorporated into your test scripts. They provide a way to structure and organize your tests, making them more modular and maintainable. Scenarios can be included in both fully automated test scripts and predominantly [manual test scripts](semi_manual_testing.md).

Another valuable application of scenarios is in [Web Service](web_service_testing.md) test recording. When you record script steps for a Web Service test and click on [Create Script](tutorial_web_services_rest.md#3a-generating-rest-test-scripts), the recorded JavaScript steps are appended to the `Test()` function. At this point, you can wrap them into separate scenarios using the method described in this chapter.

## Creating Scenarios

For example, consider the following Rapise test, recorded from our sample library information web application:
<!-- /* cSpell:disable */ -->
```javascript
function Test()
{
    //Click on Log In
    SeS('Log_In').DoClick();        
    //Set Text librarian in Username:
    SeS('Username_').DoSetText("librarian");
    //Set Text librarian in Password:
    SeS('Password_').DoSetText("librarian");
    //Click on ctl00$MainContent$LoginUser$LoginButton
    SeS('ctl00$MainContent$LoginUser$Logi').DoClick();
    //Click on Book Management
    SeS('Book_Management').DoClick();
    //Click on (Create new book)
    SeS('_Create_new_book__').DoClick();
    //Set Name:
    SeS('Name_').DoSetText(g_book_name);
    //Select Author:
    SeS('Author_').DoSelect(g_book_author);
    //Select Genre:
    SeS('Genre_').DoSelect(g_book_genre);
    //Click on ctl00$MainContent$btnSubmit
    SeS('ctl00$MainContent$btnSubmit').DoClick();
    //Click on Log Out
    SeS('Log_Out').DoClick();
}
```
<!-- /* cSpell:enable */ -->
To break up this monolithic test into individual functions (scenarios), highlight the desired section (for example, the Login steps):

![scenarios_1](./img/scenarios1.png)

Then right-click on the section and choose **Extract User Scenario**:

![scenarios_2](./img/scenarios2.png)

In the dialog box that appears, give the scenario a name (e.g., 'Login'):

![scenarios\_3](./img/scenarios3.png)

This will extract the highlighted section into its own scenario.

The `Main.js` file will be updated as follows:

```javascript
function Test()
{
    //Call scenario Login
    Login();

    //Click on Book Management
    SeS('Book_Management').DoClick();
    //Click on (Create new book)
    SeS('_Create_new_book__').DoClick();
    //Set Name:
    SeS('Name_').DoSetText(g_book_name);
    //Select Author:
    SeS('Author_').DoSelect(g_book_author);
    //Select Genre:
    SeS('Genre_').DoSelect(g_book_genre);
    //Click on ctl00$MainContent$btnSubmit
    SeS('ctl00$MainContent$btnSubmit').DoClick();
    //Click on Log Out
    SeS('Log_Out').DoClick();
}
```

The `User.js` file will contain the following:
<!-- /* cSpell:disable */ -->
```javascript
/** @scenario Login */
function Login()
{
    //Click on Log In
    SeS('Log_In').DoClick();        
    //Set Text librarian in Username:
    SeS('Username_').DoSetText("librarian");
    //Set Text librarian in Password:
    SeS('Password_').DoSetText("librarian");
    //Click on ctl00$MainContent$LoginUser$LoginButton
    SeS('ctl00$MainContent$LoginUser$Logi').DoClick();
}
```
<!-- /* cSpell:enable */ -->
## Usage in Automated Tests

When you create a new test in Rapise, it includes a `Main.js` file for the main test code and a `User.js` file for user-defined functions (scenarios). For example, in the following test:

```javascript
function Test()
{
    Login();
    CreateBook(g_book_name, g_book_author, g_book_genre);
    Logout();
}
```

The test function calls three **scenarios** that comprise the main test. The scenarios themselves are JavaScript functions:
<!-- /* cSpell:disable */ -->
```javascript
/** @scenario Login */
function Login()
{
    //Click on Log In
    SeS('Log_In').DoClick();        
    //Set Text librarian in Username:
    SeS('Username_').DoSetText("librarian");
    //Set Text librarian in Password:
    SeS('Password_').DoSetText("librarian");
    //Click on ctl00$MainContent$LoginUser$LoginButton
    SeS('ctl00$MainContent$LoginUser$Logi').DoClick();
}

/** @scenario Logout */
function Logout()
{
    //Click on Log Out
    SeS('Log_Out').DoClick();
}

/** @scenario CreateBook */
function CreateBook(name, author, genre)
{
    //Click on Book Management
    SeS('Book_Management').DoClick();
    //Click on (Create new book)
    SeS('_Create_new_book__').DoClick();
    //Set Name:
    SeS('Name_').DoSetText(name);
    //Select Author:
    SeS('Author_').DoSelect(author);
    //Select Genre:
    SeS('Genre_').DoSelect(genre);
    //Click on ctl00$MainContent$btnSubmit
    SeS('ctl00$MainContent$btnSubmit').DoClick();

    //Verify that the Book is added to the grid
    //We need to xpath query the grid to see if any
    //added rows match the item added
    var tr = FindRowByName(name);
    Tester.Assert('Book was added successfully [TS:5]', tr.length != 0);
}
```
<!-- /* cSpell:enable */ -->
In the [Object Tree](object_tree.md), you will see these user functions/scenarios displayed:

![object\_tree\_user\_functions](./img/scenarios4.png)

You can then drag and drop them into the test script editor to include in the main test script.

## Usage in Manual Tests

When you create a new test in Rapise, it includes a `Main.js` file for the main test code and a `User.js` file for user-defined functions (scenarios). For example, you may have the following scenario defined in the `User.js` file:
<!-- /* cSpell:disable */ -->
```javascript
/** @scenario Login */
function Login()
{
    //Click on Log In
    SeS('Log_In').DoClick();        
    //Set Text librarian in Username:
    SeS('Username_').DoSetText("librarian");
    //Set Text librarian in Password:
    SeS('Password_').DoSetText("librarian");
    //Click on ctl00$MainContent$LoginUser$LoginButton
    SeS('ctl00$MainContent$LoginUser$Logi').DoClick();
}
```
<!-- /* cSpell:enable */ -->
You can now include it in a [manual test step](semi_manual_testing.md) by simply prefixing the test step description with an "@" symbol to denote that it is a scenario:

```javascript
@Login();
```

Then, when the manual test is executed, that step will be passed to the scripting engine for automated execution.

## Example

If you open the **CreateNewBook** sample (located at `C:\\Users\\Public\\Documents\\Rapise\\Samples\\CreateNewBook`), you will see a test that has multiple scenarios.

## See Also

- [Semi-Manual Testing](semi_manual_testing.md)
- [Object Tree](object_tree.md)