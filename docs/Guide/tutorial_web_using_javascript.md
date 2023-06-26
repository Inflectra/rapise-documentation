# Tutorial: Web Testing (JavaScript)

This section will demonstrate how you can use Rapise to inspect the objects in a web page and Learn them for testing using the **JavaScript test script language** instead of the **Rapise Visual Language (RVL)** that was illustrated in the main [Tutorial: Web Testing (RVL)](tutorial_record_and_playback.md).

This is useful in cases where you have more complex applications to test and you want to be able to use the power of a full programming language such as JavaScript to process data, perform calculations and implement complex flow of control.

## Open Rapise and Create New Test

Go to **Start** &gt; **All Programs** &gt; **Inflectra** &gt; **Rapise**.  The following window should appear.

![Rapise main window](./img/tutorial_record_and_playback1.png)

Select `File > Create New > New Test` in the main menu.

![New Test menu](./img/tutorial_record_and_playback2.png){width="480px"}

If this is your first time using Rapise on this computer, you may see the following dialog box:

![SpiraTest connection dialog](./img/tutorial_record_and_playback3.png){width="508px"}

If you see this, it means that Rapise is trying to [connect to a SpiraTest server](spiratest_integration.md). **SpiraTest** is our web based [test management system](spiratest_integration.md). It is a powerful tool that can store your Rapise tests and deploy them onto remote machines for automated regression testing. However, for now just click on the `Cancel` button and you will see the [new test dialog](create_new_test_dialog.md):

![New Test dialog](./img/tutorial_record_and_playback4.png){width="633px"}

Now enter the name of your new test **‘Web Testing 1’**, and click **Web**. Since you chose a web test, you will now need to choose the initial [web browser profile](selenium_settings_dialog.md) (don’t worry you can easily change it later):

![Browser profile dropdown](./img/tutorial_record_and_playback5.png){width="469px"}

Choose **Selenium - Chrome** from the list of options.

Next you will be asked if you want to create your tests using the scriptless Rapise Visual Language (RVL) technology or using **JavaScript**. For this example we will use the JavaScript approach. If you’re interested in creating the test using RVL instead, please refer to the section - [Tutorial: Web Testing (RVL)](tutorial_record_and_playback.md).

![Scripting language dialog](./img/scripting_language_javascript.png)

Rapise will create the new test and you will see the main function of the test:

![test function](./img/tutorial_web_using_javascript21.png){width="588px"}

You are now ready to record your first test.

## Record Test Steps

In the Rapise window, press the **Record** button on the toolbar.

![ribbon, test, record-learn](./img/tutorial_record_and_playback9.png)

The `Browser URL` dialog will appear. Type in the initial URL <https://www.libraryinformationsystem.org> and click `OK`.

![Browser URL Dialog](./img/browser_url_dialog.png){width="696px"}

The browser will navigate to

![tutorial, demo, app](./img/tutorial_record_and_playback8.png){width="805px"}

The [Recording Activity Dialog](recording_activity_dialog.md) (RA dialog) will appear:

![recording activity dialog](./img/tutorial_record_and_playback10.png){width="572px"}

The **RA dialog** has a grid.  As you interact with the sample Library Information System program, the grid will automatically populate with your actions.

Let's begin creating the test.  On the library information system login page, click on the **Log In** link in the top-right of the screen.

![tutorial_demo_login](./img/tutorial_record_and_playback11.png)

In the **Username** text box, type *librarian*

Click on the **Password** text box next.  You'll notice that the **RA dialog** has changed.  Your actions, clicking Log-In and entering a username, are listed in the grid:

![tutorial, username in ra dialog](./img/tutorial_record_and_playback12.png){width="571px"}

The password for user librarian is also *librarian*.  Type the password in and then press the **Log-In** button.

Three more rows should appear in the **RA dialog**: two rows to represent click on the password field and the password entry, and one to represent the button click:

![tutorial, three steps recorded in ra dialog](./img/tutorial_record_and_playback13.png){width="639px"}

You should now be on the main menu of the `Library Information System` with the user's name listed in the top-right:

![tutorial, demo, main menu](./img/tutorial_record_and_playback14.png){width="956px"}

Hover the mouse over the "Welcome **librarian**" username label on the top-right and press ++ctrl+1++ to bring up the Verify dialog box:

![verify object properties dialog](./img/tutorial_record_and_playback15.png){width="498px"}

This box lets you add a checkpoint to verify the properties of an object on the screen.

Select the `Inner Text` option and click `OK` button to close the dialog. That will add the verification check to your list of recorded actions:

![RA dialog with Verify step](./img/tutorial_record_and_playback16.png){width="639px"}

Click the **Book Management** button.  It is highlighted in the next screenshot:

![tutorial, demo, menu items, deposit highlighted](./img/tutorial_record_and_playback17.png)

You should now be on the Book Management page (see the below image).

![tutorial, deposit page](./img/tutorial_record_and_playback18.png)

Click the **Create new book** link:

![tutorial, demo, menu items, balance highlighted](./img/tutorial_record_and_playback19.png)

You should now be on the Create New Book page (see image below).  Click the **HOME** button to go back to the main menu.

![tutorial, balance page](./img/tutorial_record_and_playback20.png)

Now, click the **Author Management** button:

![tutorial, demo, menu items, withdraw highlighted](./img/tutorial_record_and_playback21.png)

You should now be on the Author Management page (see image below):

![tutorial, withdrawal page](./img/tutorial_record_and_playback22.png)

Click the **Create New Author** link:

![tutorial, demo, menu items, transfer highlighted](./img/tutorial_record_and_playback23.png)

You should now be on the Create New Author page (see below). Click the **Home** button to go back to the main menu.

![tutorial, transfer page](./img/tutorial_record_and_playback24.png)

At this point, there should be 14 rows in the **RA dialog** grid.

You are now back on the Main Menu.  Click **Log Out** (top-right) and close the browser.

To end the recording session either press `CTRL+3` or click `Finish` button on the **RA dialog**.

Rapise will generate the code.

![generated code](./img/tutorial_web_using_javascript22.png){width="981px"}

Let's save our test.  Press the `Save` button at the top left of the Rapise window.

![save, test, file](./img/tutorial_record_and_playback28.png){width="346px"}

## Playback

To execute the script, press the `Play` button on the toolbar.

![play icon](./img/tutorial_record_and_playback29.png){width="346px"}

Rapise will open a new instance of Chrome to the correct url (<https://libraryinformationsystem.org>) when the test begins.

After execution, a screen like the one below will appear.  Each row represents a step in the test. The rows with green text are steps which passed, whereas the rows with red text are the steps which failed.

![](./img/tutorial_web_using_javascript_report_web_tutorial_javascript.png){width="929px"}

For more information on the report, see [Automated Reporting](automated_reporting.md).

## Playback in Other Browsers

Now that we have recorded our test in Chrome, we want to play the same script back in other browsers. That is very easy to do. Find **web browser dropdown** in the top right corner of the Rapise window and select a different browser (e.g. Selenium - Edge, Selenium - Firefox, etc.) and click the `Play` button.

![browser dropdown](./img/tutorial_record_and_playback31.png){width="233px"}

## Track and Learn Object Using the Web Spy

This section will demonstrate how you can use Rapise to inspect the objects in a web page and Learn them for testing. This is useful in cases where you have more complex applications to test and you need to pick specific objects. For example you may want to select one of the books in the grid based on its name rather than its row number (which may change if you add books).

On the toolbar expand the dropdown list for the **Spy** tool and make sure that `Web` is selected:

![spy types](./img/tutorial_record_and_playback32.png){width="218px"}

Now, click on the main `Spy` tool icon and Rapise will start the [Web Spy](web_spy.md):

![web spy](./img/tutorial_record_and_playback33.png){width="912px"}

Go back to the web page and login to the **library information system** with the same **login/password (librarian/librarian)** and click on the `Book Management` menu item so that the list of books is displayed:

![book management](./img/lis_book_management.png)

Now back in the [Web Spy](web_spy.md), click on the `Get Snapshot` button to refresh the Web Spy and display
the HTML elements (called the DOM tree) that make up this page:

![web spy with snapshot](./img/web_spy1.png){width="912px"}

Once it has loaded the DOM tree, you can expand/collapse the elements to see how the web page is constructed. This is useful when testing an application since many of the HTML elements on a page may be used for layout purposes and will not be visible in the browser. In the example page, we have expanded some of the nodes to display the main section of the page and the table that contains the list of books.

In addition, you can use the `Track (Ctrl+T)` tool to select an item in the web page and then have it be highlighted in the DOM tree. For example if we want to find the cell that contains the book title
`Amsterdam`, simply press ++ctrl+t++ on the keyboard, move the mouse over the cell in the webpage**, wait until the red highlighting rectangle appears** and then click ++ctrl+t++ again. Rapise will now highlight that item in the DOM Tree automatically:

![web spy tracking](./img/tutorial_record_and_playback36.png){width="910px"}

You can see all of the properties of this HTML element displayed on the right, specifically:

- **tagName** of the element (td),
- **text** of the element (Amsterdam),
- HTML attributes in the **Properties** section,
- CSS and XPath expressions for locating this element in **Selectors** section.

If you want to use this object in a Rapise test script, you can simply double click it in the DOM tree, this action will populate the edit field on the toolbar, then click the `Learn` button and the HTML element will be added to the Recording Activity Dialog:

![element learn ra dialog](./img/tutorial_record_and_playback37.png){width="572px"}

Click `Finish` and the object will have been added to your test’s Object Tree:

![object tree](./img/tutorial_record_and_playback38.png){width="349px"}

You can now expand this object and drag a test function to your test script. For example if you wanted to get the textual value of the cell in your test, drag the `GetInnerText` function into your test script:

![drag action](./img/tutorial_web_using_javascript8.png){width="970px"}

## Test XPATH and Learn Object Using the Web Spy

In addition to letting Rapise automatically learn the object from the Web Spy, you can manually enter in **XPATH** or **CSS** queries to find matching elements on the page and then learn those for use in your test.

For example, suppose we want to dynamically find the row that has the cell containing Amsterdam and then click on its **Edit** hyperlink.

Open up the Web Spy as before:

![web spy](./img/tutorial_record_and_playback35.png){width="912px"}

One the toolbar enter in the following to locate the table:

    //table[@id='MainContent_grdBooks']

![clip0038](./img/tutorial_record_and_playback43.png){width="718px"}

Now click on the `Test` button to display the matching results:

![test results](./img/tutorial_record_and_playback44.png){width="594px"}

Now that we have matched the table, we need to add dynamic XPath to find any row that has the cell containing `Amsterdam` and find the edit link. You can expand the table and see the rows and cells visually and that will help us create the XPATH:

    //table[@id='MainContent_grdBooks']//tr/td[text()='Amsterdam']/../td[5]/a

This XPath consists of the following elements:

1. Find the table with the specified ID.
2. Find any row inside that table that contains a cell with the text `Amsterdam`.
3. For any matching cell, get its parent row and inside the fifth cell, get any hyperlink.

In this case that will correctly locate the Edit link for the book `Amsterdam`. Now that we have the correct item identified, click on the `Learn` button to the right of the `Test` button. That will now learn a new object that corresponds to the `Edit Amsterdam` object:

![object learned](./img/tutorial_record_and_playback45.png){width="572px"}

Click `Finish` and the object will have been added to the Object Tree of the current test:

![object tree](./img/tutorial_record_and_playback46.png){width="341px"}

## Modify the Test

To click on this object, simply drag the `DoClick` function for the new object from the Object Tree into the test script. This will cause the book details page for Amsterdam to be displayed during test playback:

![Edit.DoClick](./img/tutorial_web_using_javascript13.png){width="970px"}

Since clicking on the Edit link will take you to a different page than where the **Create New Book** link is available, in the example we have added a second instance of the:

```javascript
SeS('Book_Management').DoClick();
```
command, so that Rapise goes back to the main book list page before executing the Create New Book step. If we did not do this, the test would have failed.

![BookManagement.DoClick](./img/tutorial_web_using_javascript23.png){width="564px"}

Now the line:

```javascript
SeS('Amsterdam').GetInnerText();
```

by itself does not do anything, it just gets the text.

So to make the test more useful, we can use the global **Tester** object to add a step to verify this value. Drag the `AssertEqual` function from the `Tester` object to your test script just above the `SeS(“Amsterdam”)` line:

![Tester.AssertEqual](./img/tutorial_web_using_javascript14.png){width="970px"}

Now we need to just consolidate these two lines into the actual test. Using the script editor, change the two lines from:

```javascript
Tester.AssertEqual('', null, null);
SeS('Amsterdam').GetInnerText();
```

to

```javascript
Tester.AssertEqual('The values match', 'Amsterdam', SeS('Amsterdam').GetInnerText());
```

Now click **Play** to playback the new test:

![execution report](./img/tutorial_web_using_javascript15.png){width="934px"}

The test should now pass successfully.

## See Also

- [Tutorial: Web Testing (RVL)](tutorial_record_and_playback.md)
- [Browser Profiles](selenium_settings_dialog.md)