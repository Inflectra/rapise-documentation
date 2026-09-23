Summary: Salesforce (Sfdc) helpers for Rapise.

# Sfdc

Salesforce (Sfdc) helpers for Rapise.Provides:- Login to and logout from a Salesforce instance- Opening applications via the App Launcher (Waffle menu)- Navigation to modules through the navigation bar- List view selection and table search- Form field interactions: text fields, checkboxes, comboboxes, lookup fields- Record detail verification and inline editing- Related list actions and card detail verification- Modal dialog handling and validation- File upload and attachment verification- Report filter management- Date formatting for Salesforce date fieldsAll of these act on the Salesforce Lightning Experience (LEX) web interface.The library handles both Lightning Web Components (LWC) and Aura-based UI patterns.Credentials and configuration are resolved from environment variables (SF_URL,SF_USERNAME, SF_PASSWORD), test parameters, or `Shared\Config.xlsx`.Requires the `DomSalesforce` library to be loaded.






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [AddReportFilter](#addreportfilter) | Add a filter to a report in the Report Builder. |
|  [ClickButton](#clickbutton) | Click a button by its name or title. |
|  [FormatDate](#formatdate) | Compute a date relative to today (or a given base) and return it formatted
for Salesforce date input fields. |
|  [InlineEdit](#inlineedit) | Click the inline edit pencil icon for a field on a record detail page. |
|  [Launch](#launch) | Launch Salesforce in a browser and log in. |
|  [NavigateModule](#navigatemodule) | Navigate to a module using the navigation bar. |
|  [OpenApp](#openapp) | Open a Salesforce application from the App Launcher (Waffle menu). |
|  [RelatedListAction](#relatedlistaction) | Click an action from a Related List's dropdown menu. |
|  [RelatedListItemAction](#relatedlistitemaction) | Click an action from a specific item's dropdown menu within a Related List. |
|  [SearchModalTable](#searchmodaltable) | Search and select an item in a modal table (e.g. |
|  [SearchTable](#searchtable) | Search data in a list view table. |
|  [SelectComboboxItem](#selectcomboboxitem) | Select an item from a combobox (picklist). |
|  [SelectInnerTab](#selectinnertab) | Select an inner tab on a record page. |
|  [SelectListView](#selectlistview) | Select a list view from the list view dropdown. |
|  [SelectLookupItem](#selectlookupitem) | Select an item from a lookup field. |
|  [SetCheckbox](#setcheckbox) | Set a checkbox on a form to the specified state. |
|  [SetPathStep](#setpathstep) | Set the active Path step on a record page. |
|  [SetTextField](#settextfield) | Set text into a form field. |
|  [UploadFile](#uploadfile) | Upload a file to a related list on the current record page. |
|  [VerifyAttachmentExists](#verifyattachmentexists) | Verify that an attachment with the given name exists in a related list. |
|  [VerifyCardDetail](#verifycarddetail) | Verify a field value displayed inside a related list card (preview card layout). |
|  [VerifyDetailsField](#verifydetailsfield) | Verify the value of a field on a record detail page. |
|  [VerifyFieldInvalid](#verifyfieldinvalid) | Verify that a form field is in an invalid state (has validation error). |
|  [VerifyModalTitle](#verifymodaltitle) | Verify the title of a modal dialog. |
|  [VerifyRecordTitle](#verifyrecordtitle) | Verify the record page header: entity type and record name. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="AddReportFilter"></a>    
#### AddReportFilter

Add a filter to a report in the Report Builder.

Opens the filter selector, chooses the field, selects the operator,
enters the value, and applies the filter.

Examples:
```javascript
Sfdc.AddReportFilter("Account Name", "contains", "Auto");
```

```javascript
Sfdc.AddReportFilter(filter, operator, value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| filter | string |  Name of the filter field (e.g. Account Name, Amount). |
| operator | string |  Filter operator (e.g. contains, equals, greater than). |
| value | string |  Value to filter by. |




**Returns:**

boolean: true if the filter was added successfully, false otherwise.



<a name="see.also.sfdc.addreportfilter"></a>

<a name="ClickButton"></a>    
#### ClickButton

Click a button by its name or title.

Searches for the button by its `name` attribute, `title` attribute, or visible text.
When inside a modal dialog, the button within the active modal is preferred.

Examples:
```javascript
Sfdc.ClickButton("Save");
```

```javascript
Sfdc.ClickButton(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Name, title, or visible text of the button to click. |




**Returns:**

boolean: true if the button was found and clicked, false otherwise.



<a name="see.also.sfdc.clickbutton"></a>

<a name="FormatDate"></a>    
#### FormatDate

Compute a date relative to today (or a given base) and return it formatted
for Salesforce date input fields.

The format is read from `Config.xlsx` key `DateFormat` (default: `M/d/yyyy` — US locale).
Supported tokens: `M`, `MM`, `d`, `dd`, `yyyy`, `yy`.

Examples:
```javascript
Sfdc.FormatDate(60);
```

```javascript
Sfdc.FormatDate(offsetDays, baseDate)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| offsetDays | number |  Number of days to add (can be negative). Default 0.<br>Optional, Default: "0". |
| baseDate | string |  Base date string (ISO format yyyy-MM-dd) or 'today'. Default 'today'.<br>Optional, Default: "today". |




**Returns:**

string: Formatted date string ready for SetTextField, or empty string on error.



<a name="see.also.sfdc.formatdate"></a>

<a name="InlineEdit"></a>    
#### InlineEdit

Click the inline edit pencil icon for a field on a record detail page.

Opens the field for inline editing by clicking its pencil icon.

Examples:
```javascript
Sfdc.InlineEdit("Website");
```

```javascript
Sfdc.InlineEdit(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Label of the field to edit. |




**Returns:**

boolean: true if the edit button was found and clicked, false otherwise.



<a name="see.also.sfdc.inlineedit"></a>

<a name="Launch"></a>    
#### Launch

Launch Salesforce in a browser and log in.

Credentials and the login URL are resolved in this order: environment variables
(`SF_URL`, `SF_USERNAME`, `SF_PASSWORD`), test parameters (`SfdcUrl`, `SfdcUserName`,
`SfdcPassword`), then `Shared\Config.xlsx`. If any value is still unknown, Rapise
prompts for it and saves the answer into `Shared\Config.xlsx`.

When two-factor authentication is enabled, the OTP secret is resolved similarly
(`SF_OTP` environment variable, `OTP Secret` test parameter, or `Secret` in
`Shared\Config.xlsx`). The `OTP` public module must be installed.

Examples:
```javascript
Sfdc.Launch();
```

```javascript
Sfdc.Launch()
```




**Returns:**

boolean: true if the login completed and the home page loaded, false if a required setting was not provided.



<a name="see.also.sfdc.launch"></a>

<a name="NavigateModule"></a>    
#### NavigateModule

Navigate to a module using the navigation bar.

Clicks the module link in the top navigation bar to open that module's list view.

Examples:
```javascript
Sfdc.NavigateModule("Leads");
```

```javascript
Sfdc.NavigateModule(module)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| module | string |  Name of the module to navigate to (e.g. Leads, Contacts, Opportunities, Accounts). |




**Returns:**

boolean: true if the module link was found and clicked, false otherwise.



<a name="see.also.sfdc.navigatemodule"></a>

<a name="OpenApp"></a>    
#### OpenApp

Open a Salesforce application from the App Launcher (Waffle menu).

Clicks the waffle icon, searches for the application by name, and clicks it.
If the app is not visible in the initial list, the "View All" button is clicked
to show the full app list.

Examples:
```javascript
Sfdc.OpenApp("Sales");
```

```javascript
Sfdc.OpenApp(app)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| app | string |  Name of the application to open (e.g. Sales, Service, Marketing). |




**Returns:**

boolean: true if the application was found and clicked, false otherwise.



<a name="see.also.sfdc.openapp"></a>

<a name="RelatedListAction"></a>    
#### RelatedListAction

Click an action from a Related List's dropdown menu.

Locates the related list by its aria-label, opens the dropdown trigger,
and selects the specified menu item.

Examples:
```javascript
Sfdc.RelatedListAction("Products", "Add Products");
```

```javascript
Sfdc.RelatedListAction(listName, actionName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| listName | string |  Name of the related list (e.g. Contact Roles, Products). |
| actionName | string |  Name of the action in the dropdown menu. |




**Returns:**

boolean: true if the action was found and clicked, false otherwise.



<a name="see.also.sfdc.relatedlistaction"></a>

<a name="RelatedListItemAction"></a>    
#### RelatedListItemAction

Click an action from a specific item's dropdown menu within a Related List.

Locates the item row by name within the related list, opens its dropdown,
and clicks the specified action.

Examples:
```javascript
Sfdc.RelatedListItemAction("Products", "AutoProduct Basic", "Edit");
```

```javascript
Sfdc.RelatedListItemAction(listName, itemName, actionName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| listName | string |  Name of the related list (e.g. Products, Contact Roles). |
| itemName | string |  Name/text of the item row. |
| actionName | string |  Name of the action in the row dropdown (e.g. Edit, Delete). |




**Returns:**

boolean: true if the action was found and clicked, false otherwise.



<a name="see.also.sfdc.relatedlistitemaction"></a>

<a name="SearchModalTable"></a>    
#### SearchModalTable

Search and select an item in a modal table (e.g. Add Products dialog).

Types the search value into the autocomplete input inside the modal,
waits for results, and presses Enter to select.

Examples:
```javascript
Sfdc.SearchModalTable("AutoProduct Basic");
```

```javascript
Sfdc.SearchModalTable(value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |  Text to search for in the modal table. |




**Returns:**

boolean: true if the search was performed, false if the input was not found.



<a name="see.also.sfdc.searchmodaltable"></a>

<a name="SearchTable"></a>    
#### SearchTable

Search data in a list view table.

Enters the search value into the table's search input and presses Enter.

Examples:
```javascript
Sfdc.SearchTable("Acme");
```

```javascript
Sfdc.SearchTable(value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |  Text to search for in the table. |




**Returns:**

boolean: true if the search input was found and the search was performed, false otherwise.



<a name="see.also.sfdc.searchtable"></a>

<a name="SelectComboboxItem"></a>    
#### SelectComboboxItem

Select an item from a combobox (picklist).

Supports Lightning combobox (`lightning-combobox`), classic Aura picklist
(`forceInputPicklist`), and native HTML select elements (`uiInputSelect`).

Examples:
```javascript
Sfdc.SelectComboboxItem("Lead Status", "Working - Contacted");
```

```javascript
Sfdc.SelectComboboxItem(name, item)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Label of the combobox field. |
| item | string |  Text of the item to select. |




**Returns:**

boolean: true if the item was found and selected, false otherwise.



<a name="see.also.sfdc.selectcomboboxitem"></a>

<a name="SelectInnerTab"></a>    
#### SelectInnerTab

Select an inner tab on a record page.

Clicks the tab link to switch to that tab's content.

Examples:
```javascript
Sfdc.SelectInnerTab("Details");
```

```javascript
Sfdc.SelectInnerTab(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Name of the tab to select (e.g. Details, Activity, Related). |




**Returns:**

boolean: true if the tab was found and clicked, false otherwise.



<a name="see.also.sfdc.selectinnertab"></a>

<a name="SelectListView"></a>    
#### SelectListView

Select a list view from the list view dropdown.

Opens the list view selector and clicks the specified view option.

Examples:
```javascript
Sfdc.SelectListView("Recently Viewed");
```

```javascript
Sfdc.SelectListView(view)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| view | string |  Name of the list view to select (e.g. Recently Viewed, All Open Leads). |




**Returns:**

boolean: true if the view was found and selected, false otherwise.



<a name="see.also.sfdc.selectlistview"></a>

<a name="SelectLookupItem"></a>    
#### SelectLookupItem

Select an item from a lookup field.

Types the item name into the lookup field, waits for search results,
and clicks the matching item.

Examples:
```javascript
Sfdc.SelectLookupItem("Account Name", "Acme Corp");
```

```javascript
Sfdc.SelectLookupItem(name, item)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Label of the lookup field. |
| item | string |  Name of the item to search for and select. |




**Returns:**

boolean: true if the item was found and selected, false otherwise.



<a name="see.also.sfdc.selectlookupitem"></a>

<a name="SetCheckbox"></a>    
#### SetCheckbox

Set a checkbox on a form to the specified state.

Finds the checkbox by its label text or `name` attribute and checks or unchecks it.
If the checkbox is already in the desired state, no action is taken.

Examples:
```javascript
Sfdc.SetCheckbox("Do Not Call", true);
```

```javascript
Sfdc.SetCheckbox(name, state)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Label or name of the checkbox field. |
| state | boolean |  Desired state: true to check, false to uncheck. |




**Returns:**

boolean: true if the checkbox was found and set to the desired state, false otherwise.



<a name="see.also.sfdc.setcheckbox"></a>

<a name="SetPathStep"></a>    
#### SetPathStep

Set the active Path step on a record page.

Clicks the specified step in the Path component to mark it as current.

Examples:
```javascript
Sfdc.SetPathStep("Qualification");
```

```javascript
Sfdc.SetPathStep(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Name of the Path step to set as active. |




**Returns:**

boolean: true if the step was found and set, false otherwise.



<a name="see.also.sfdc.setpathstep"></a>

<a name="SetTextField"></a>    
#### SetTextField

Set text into a form field.

Finds the input or textarea by its label text, `name` attribute, or `placeholder`
attribute, and enters the specified value.

Examples:
```javascript
Sfdc.SetTextField("Last Name", "Smith");
```

```javascript
Sfdc.SetTextField(name, value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Label, name, or placeholder of the input field. |
| value | string |  Text to enter into the field. |




**Returns:**

boolean: true if the field was found and the text was set, false otherwise.



<a name="see.also.sfdc.settextfield"></a>

<a name="UploadFile"></a>    
#### UploadFile

Upload a file to a related list on the current record page.

Finds the file input within the specified related list, uploads the file,
and clicks the Done button to confirm.

Examples:
```javascript
Sfdc.UploadFile("Notes & Attachments", "TestData\\document.pdf");
```

```javascript
Sfdc.UploadFile(relatedListName, fileName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| relatedListName | string |  Name of the related list (defaults to 'Notes & Attachments' if empty).<br>Optional, Default: "Notes & Attachments". |
| fileName | string |  Relative path to the file to upload. |




**Returns:**

boolean: true if the file was uploaded successfully, false otherwise.



<a name="see.also.sfdc.uploadfile"></a>

<a name="VerifyAttachmentExists"></a>    
#### VerifyAttachmentExists

Verify that an attachment with the given name exists in a related list.

Searches for the attachment item by its title within the related list.

Examples:
```javascript
Sfdc.VerifyAttachmentExists("Notes & Attachments", "document");
```

```javascript
Sfdc.VerifyAttachmentExists(relatedListName, name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| relatedListName | string |  Name of the related list (defaults to 'Notes & Attachments' if empty).<br>Optional, Default: "Notes & Attachments". |
| name | string |  Expected attachment file name (without extension). |




**Returns:**

boolean: true if the attachment is found, false otherwise.



<a name="see.also.sfdc.verifyattachmentexists"></a>

<a name="VerifyCardDetail"></a>    
#### VerifyCardDetail

Verify a field value displayed inside a related list card (preview card layout).

Locates the related list card by its aria-label, finds the specific item by name,
then reads and verifies the field value.

Examples:
```javascript
Sfdc.VerifyCardDetail("Products", "AutoProduct Basic", "Sales Price", "$100.00");
```

```javascript
Sfdc.VerifyCardDetail(cardName, itemName, fieldName, value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cardName | string |  Name of the related list card (matches aria-label, e.g. Products, Contact Roles). |
| itemName | string |  Name of the item within the card to scope the lookup. |
| fieldName | string |  Label of the field to verify (e.g. Sales Price, Quantity, Role). |
| value | string |  Expected value text. |




**Returns:**

boolean: true if the field value matches the expected value, false otherwise.



<a name="see.also.sfdc.verifycarddetail"></a>

<a name="VerifyDetailsField"></a>    
#### VerifyDetailsField

Verify the value of a field on a record detail page.

Finds the field by its label and compares the displayed value to the expected one.
Supports text fields, links, and checkbox fields.

Examples:
```javascript
Sfdc.VerifyDetailsField("Account Name", "Acme Corp");
```

```javascript
Sfdc.VerifyDetailsField(name, value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Label of the field to verify. |
| value | string |  Expected value of the field. |




**Returns:**

boolean: true if the field value matches the expected value, false otherwise.



<a name="see.also.sfdc.verifydetailsfield"></a>

<a name="VerifyFieldInvalid"></a>    
#### VerifyFieldInvalid

Verify that a form field is in an invalid state (has validation error).

Checks that the field has `aria-invalid="true"`, indicating a validation error.

Examples:
```javascript
Sfdc.VerifyFieldInvalid("Last Name");
```

```javascript
Sfdc.VerifyFieldInvalid(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Label of the field to check. |




**Returns:**

boolean: true if the field shows a validation error, false otherwise.



<a name="see.also.sfdc.verifyfieldinvalid"></a>

<a name="VerifyModalTitle"></a>    
#### VerifyModalTitle

Verify the title of a modal dialog.

Checks that the currently open modal has the expected title.

Examples:
```javascript
Sfdc.VerifyModalTitle("New Lead");
```

```javascript
Sfdc.VerifyModalTitle(title)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| title | string |  Expected modal title text. |




**Returns:**

boolean: true if the modal title matches, false otherwise.



<a name="see.also.sfdc.verifymodaltitle"></a>

<a name="VerifyRecordTitle"></a>    
#### VerifyRecordTitle

Verify the record page header: entity type and record name.

Checks that the page header shows the expected entity type (e.g. Account, Lead)
and record name.

Examples:
```javascript
Sfdc.VerifyRecordTitle("Account", "Acme Corp");
```

```javascript
Sfdc.VerifyRecordTitle(entityName, recordName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| entityName | string |  Expected entity label (e.g. Account, Lead, Opportunity). |
| recordName | string |  Expected record name. |




**Returns:**

boolean: true if both entity type and record name match, false otherwise.



<a name="see.also.sfdc.verifyrecordtitle"></a>

  

