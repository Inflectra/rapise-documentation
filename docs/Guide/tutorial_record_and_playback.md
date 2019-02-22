# Tutorial: Web Testing (RVL)

In this section, you will learn how to record and execute a Rapise script against a web application.  We will be using a demo application
called **Library Information System**.  Our test will be simple.  It will log on to the library catalog, navigate to the main menu, and click on all of the menu options to make sure the links are working.

## Open Rapise and Create New Test

Go to **Start** &gt; **All Programs** &gt; **Inflectra** &gt; **Rapise**.  The following window should appear.

![Rapise main window](./img/tutorial_record_and_playback1.png)

Select `File > New Test` in the main menu.

![New Test menu](./img/tutorial_record_and_playback2.png)

If this is your first time using Rapise on this computer, you may see the following dialog box:

![SpiraTest connection dialog](./img/tutorial_record_and_playback3.png)

If you see this, it means that Rapise is trying to [connect to a SpiraTest server](spiratest_integration.md). **SpiraTest** is our web based [test management system](spiratest_integration.md). It is a powerful tool that can store your Rapise tests and deploy them onto remote machines for automated regression testing. However, for now just click on the **\[Cancel\]** button and you will see the [new test dialog](create_new_test_dialog.md):

![New Test dialog](./img/tutorial_record_and_playback4.png)

Now enter the name of your new test **‘Web Testing 1’**, and click **Web: Cross-Browser Testing Support**. Since you chose a web test, you will now need to choose the initial [web browser profile](browser_settings.md) (don’t worry you can easily change it later):

![Browser profile dropdown](./img/tutorial_record_and_playback5.png)

Choose **‘Internet Explorer HTML’** from the list of options.

Next you will be asked if you want to create your tests using the scriptless **Rapise Visual Language (RVL)** technology or using JavaScript. For this example we will use the RVL scriptless approach. If you’re interested in creating the test using JavaScript instead, please refer to the section - [Tutorial: Web Testing (JavaScript)](tutorial_web_using_javascript.md).

![Scripting language dialog](./img/scripting_language_rvl.png)

Rapise will create the new test and you will see the empty recording grid:

![RVL spreadsheet](./img/tutorial_record_and_playback7.png)

You are now ready to record your first test.

## Open the Application Under Test

Open up Internet Explorer.  You will find it in **Start** &gt; **All Programs** &gt; **Internet Explorer**. In Internet Explorer, navigate to: <http://www.libraryinformationsystem.org>:

![tutorial, demo, app](./img/tutorial_record_and_playback8.png)

## Record Test Steps

In the Rapise window, press the **Record** button on the toolbar.

![ribbon, test, record-learn](./img/tutorial_record_and_playback9.png)

The [Recording Activity Dialog](recording_activity_dialog.md) (RA dialog) will appear:

![recording activity dialog](./img/tutorial_record_and_playback10.png)

The **RA dialog** has a grid.  As you interact with the sample Library Information System program, the grid will automatically populate with your actions.

Let's begin creating the test.  On the library information system login page, click on the **Log In** link in the top-right of the screen.

![tutorial_demo_login](./img/tutorial_record_and_playback11.png)

In the **Username** text box, type *librarian*

Click on the **Password** text box next.  You'll notice that the **RA dialog** has changed.  Your actions, clicking Log-In and entering a username, are listed in the grid:

![tutorial, username in ra dialog](./img/tutorial_record_and_playback12.png)

The password for user librarian is also *librarian*.  Type the password in and then press the **Log-In** button.

Two more rows should appear in the **RA dialog**: one to represent the password entry, and one to represent the button click:

![tutorial, three steps recorded in ra dialog](./img/tutorial_record_and_playback13.png)

You should now be on the main menu of the Library Information System with the user's name listed in the top-right:

![tutorial, demo, main menu](./img/tutorial_record_and_playback14.png)

Hover the mouse over the “Welcome **librarian**” username label on the top-right and press `CTRL+1` to bring up the Verify dialog box:

![verify object properties dialog](./img/tutorial_record_and_playback15.png)

This box lets you add a checkpoint to verify the properties of an object on the screen.

Select the `Inner Text` option and click `OK` button to close the dialog. That will add the verification check to your list of recorded actions:

![RA dialog with Verify step](./img/tutorial_record_and_playback16.png)

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

At this point, there should be 11 rows in the **RA dialog** grid.

You are now back on the Main Menu.  Click **Log Out** (top-right).

![tutorial, demo, main menu, logout-highlighted](./img/tutorial_record_and_playback25.png)

To end the recording session either press `CTRL+3` or click `Finish` button on the **RA dialog**.

Rapise will ask you whether you want to use this recording or discard it:

![insert recorded steps](./img/tutorial_record_and_playback26.png)

Click on the `Append to End` button and Rapise will insert the recorded steps into the test grid:

![clip0090](./img/tutorial_record_and_playback27.png)

Let's save our test.  Press the `Save` button at the top left of the Rapise window.

![save, test, file](./img/tutorial_record_and_playback28.png)

## Playback

Let's execute the test we just created.  First, close Internet explorer. Rapise will open a new instance of Internet Explorer to the correct url (www.libraryinformationsystem.org) when the test begins.

To execute the script, press the Play button on the toolbar.

![play icon](./img/tutorial_record_and_playback29.png)

After execution, a screen like the one below will appear.  Each row represents a step in the test. The rows with green text are steps which passed, whereas the rows with red text are the steps which failed.

![report](./img/tutorial_record_and_playback30.png)

For more information on the report, see [Automated Reporting](automated_reporting.md).

## Playback in Other Browsers

Now that we have recorded our test in Internet Explorer, we want to play the same script back in other browsers. That is very easy to do. Find **web browser dropdown** in the top right corner of the Rapise window and select a different browser (e.g. Firefox, Chrome, Selenium - *, etc.) and click the `Play` button.

![browser dropdown](./img/tutorial_record_and_playback31.png)

Before the playback in other browsers will work correctly, you will need to make sure you have [configured the web browsers](setting_up_web_browsers.md) appropriately. In the case of the Selenium options, you will need to make sure you have installed the [Selenium WebDriver binaries](setting_up_selenium.md) correctly.

## Track and Learn Object Using the Web Spy

This section will demonstrate how you can use Rapise to inspect the objects in a web page and Learn them for testing. This is useful in cases where you have more complex applications to test and you need to
pick specific objects. For example you may want to select one of the books in the grid based on its name rather than its row number (which may change if you add books).

On the toolbar expand the dropdown list for the **Spy** tool and make sure that `Web` is selected:

![spy types](./img/tutorial_record_and_playback32.png)

Now, click on the main `Spy` tool icon and Rapise will start the [Web Spy](web_spy.md):

![web spy](./img/tutorial_record_and_playback33.png)

Go back to the web page and login to the **library information system** with the same **login/password (librarian/librarian)** and click on the `Book Management` menu item so that the list of books is displayed:

![book management](./img/tutorial_record_and_playback34.png)

Now back in the [Web Spy](web_spy.md), click on the `Get Snapshot` button to refresh the Web Spy and display
the HTML elements (called the DOM tree) that make up this page:

![web spy with snapshot](./img/tutorial_record_and_playback35.png)

Once it has loaded the DOM tree, you can expand/collapse the elements to see how the web page is constructed. This is useful when testing an application since many of the HTML elements on a page may be used for layout purposes and will not be visible in the browser. In the example page, we have expanded some of the nodes to display the main section of the page and the table that contains the list of books.

In addition, you can use the `Track (Ctrl+T)` tool to select an item in the web page and then have it be highlighted in the DOM tree. For example if we want to find the cell that contains the book title
“Amsterdam”, simply press `CTRL+T` on the keyboard, move the mouse over the cell in the webpage**, wait until the red highlighting rectangle appears** and then click `CTRL+T` again. Rapise will now highlight that
item in the DOM Tree automatically:

![web spy tracking](./img/tutorial_record_and_playback36.png)

You can see all of the properties of this HTML element displayed on the right, specifically:

- **tagName** of the element (td),
- **text** of the element (Amsterdam),
- HTML attributes in the **Properties** section,
- CSS and XPath expressions for locating this element in **Selectors** section.

If you want to use this object in a Rapise test script, you can simply click the `Learn` button and the HTML element will be added to the Recording Activity Dialog:

![element learn ra dialog](./img/tutorial_record_and_playback37.png)

Click `Finish` and the object will have been added to your test’s Object Tree:

![object tree](./img/tutorial_record_and_playback38.png)

To use this new object in our test script, we can simply use the test editor to add the appropriate command. For example, if you wanted to get the textual value of the cell in your test, you should click on the row in the grid after the **Book Management – DoClick**:

![select row](./img/tutorial_record_and_playback39.png)

Now click on the `Insert Row Before` button in the main Test ribbon to add a new row:

![insert row before](./img/tutorial_record_and_playback40.png)

This will insert a new row into the test. In this new row, left-click on each of the cells (as illustrated below) and pick the following values from the dropdown lists:

![select dropdown values](./img/tutorial_record_and_playback41.png)

Then choose the following:

- **Type** = Action
- **Object** = Amsterdam
- **Action** = GetInnerText

You should now have the following:

![amsterdam getinnertext](./img/tutorial_record_and_playback42.png)

## Test XPATH and Learn Object Using the Web Spy

In addition to letting Rapise automatically learn the object from the Web Spy, you can manually enter in **XPATH** or **CSS** queries to find matching elements on the page and then learn those for use in your test.

For example, suppose we want to dynamically find the row that has the cell containing Amsterdam and then click on its **Edit** hyperlink.

Open up the Web Spy as before:

![web spy](./img/tutorial_record_and_playback35.png)

One the toolbar enter in the following to locate the table:

    //table[@id='MainContent_grdBooks']

![clip0038](./img/tutorial_record_and_playback43.png)

Now click on the `Test` button to display the matching results:

![test results](./img/tutorial_record_and_playback44.png)

Now that we have matched the table, we need to add dynamic XPath to find any row that has the cell containing 'Amsterdam' and find the edit link. You can expand the table and see the rows and cells visually and that will help us create the XPATH:

    //table[@id='MainContent_grdBooks']//tr/td[text()='Amsterdam']/../td[5]/a

This XPath consists of the following elements:

1. Find the table with the specified ID.
2. Find any row inside that table that contains a cell with the text 'Amsterdam'.
3. For any matching cell, get its parent row and inside the fifth cell, get any hyperlink.

In this case that will correctly locate the Edit link for the book 'Amsterdam'. Now that we have the correct item identified, click on the `Learn` button to the right of the `Test` button. That will now learn a new object that corresponds to the `Edit Amsterdam` object:

![object learned](./img/tutorial_record_and_playback45.png)

Click `Finish` and the object will have been added to the Object Tree of the current test:

![onject tree](./img/tutorial_record_and_playback46.png)

## Modify the Test

To click on this object, simply click on the row in the grid where you want this action to occur and choose “**Insert Row Before**” from the toolbar:

![blank line](./img/tutorial_record_and_playback47.png)

In this new row, right-click on each of the cells, and pick the following values from the dropdown lists:

- **Type** = Action
- **Object** = Edit
- **Action** = DoClick

So your test will now look like:

![Edit.DoClick](./img/tutorial_record_and_playback48.png)

Since clicking on the Edit link will take you to a different page than where the ‘Create New Book’ link is available, we need to add another row and add:

- **Type** = Action
- **Object** = Book_Management
- **Action** = DoClick

so that Rapise goes back to the main book list page before executing the Create New Book step. If we did not do this, the test would have failed.

This means the test will now look like:

![Book_Management.DoClick](./img/tutorial_record_and_playback49.png)

Now the line:

![Amsterdam.DoClick](./img/tutorial_record_and_playback50.png)

by itself does not do anything, it just gets the text.

So, to make the test more useful, we can use the **Assert** command to turn this into a test for the correct value. To make the change, simply delete this entire row using the **Delete Current Row** option on the toolbar and add a new blank row in its place.

Now choose the Type as **Assert** and press **TAB** on the keyboard. You will now have the following:

![clip0100](./img/tutorial_record_and_playback51.png)

This is a generic placeholder for any type of assertion. We need to first change the value of the message “TBD” to something meaningful (e.g. “Check that the name matches”):

![clip0101](./img/tutorial_record_and_playback52.png)

This is the message that will be displayed in the report.

Now we need to replace the first parameter with the output from the result of the 'Amsterdam' checking. To do this, change the **Condition** on the second row from: **param1 == param2** to **output1 == param2** and press **TAB** to move away from the condition cell:

![clip0102](./img/tutorial_record_and_playback53.png)

Notice how Rapise automatically changed the second row from **Param** to **Action**.

Now in the TBD cell next to the Action type, choose the **Amsterdam** object name and the **GetInnerText** action from the dropdown lists. Finally change the **param2** string from TBD to the expected value
“Amsterdam”.

You will now have:

![clip0103](./img/tutorial_record_and_playback54.png)

Now click **Play** to playback the new test:

![clip0104](./img/tutorial_record_and_playback55.png)

The test should now pass successfully.
