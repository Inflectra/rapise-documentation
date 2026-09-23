Summary: Oracle E-Business Suite (EBS) helpers for Rapise.

# EBS

Oracle E-Business Suite (EBS) helpers for Rapise.Provides:- Login to and logout from an EBS instance- Navigation to a function through the tree of the Navigator page- Waiting for OAF pages to settle after a server round-trip- Label/title based access to OAF fields, combo boxes and buttonsAll of these act on the web part of EBS, the Oracle Application Framework (OAF) pagesrendered in the browser. EBS also has a Java part: opening a Forms based function makesthe browser download a `.jnlp` file, and the window that opens from it is a Javaapplication rather than a page, so none of the actions here reach into it.In EBS.DoLogin, any parameter left empty is resolved in this order: the `DOM OAF` libraryconfiguration parameter (`EBS URL`, `EBS User Name`, `EBS Password`, `EBS Language`),environment variable (`EBS_URL`, `EBS_USERNAME`, `EBS_PASSWORD`, `EBS_LANGUAGE`),test parameter, then `Shared\Config.xlsx` (keys `EbsUrl`, `EbsUserName`,`EbsPassword`, `EbsLanguage`). If URL, user name or password are still unknown,Rapise prompts for them and saves the answer into `Shared\Config.xlsx`. The languageis never prompted for.`EBS.DoRunJWS` is the handover point between the two. It launches that downloaded fileand waits for the Forms window to come up; from then on the window is driven through the`OracleForms` object of the `OracleForms` library, and the actions here continue to applyto the browser.Requires the `DomOAF` library to be loaded, plus `OracleForms` if the Java part is used.






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickButton](#doclickbutton) | Click a button identified by its `title` attribute or visible text. |
|  [DoClickSelectButton](#doclickselectbutton) | Click the `Select` button associated with a specific field label. |
|  [DoLogin](#dologin) | Open the Oracle E-Business Suite login page and sign in. |
|  [DoLogout](#dologout) | Log out from Oracle E-Business Suite and wait for the page that follows to load. |
|  [DoNavigate](#donavigate) | Navigate to an Oracle E-Business Suite function through the navigation tree of the
Navigator page. |
|  [DoRunJWS](#dorunjws) | Launch a downloaded Java Web Start file with `javaws.exe` and wait for the Oracle Forms
window it opens to become ready. |
|  [DoSetCombo](#dosetcombo) | Select an option in a combo box (`select` element) identified by its `title` attribute
or by the visible label text in the same row. |
|  [DoSetField](#dosetfield) | Set text in an input field identified by its `title` attribute. |
|  [Sync](#sync) | Wait for the OAF page to finish loading by monitoring the `OALoading` CSS class on the
`body` element. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClickButton"></a>    
#### DoClickButton

Click a button identified by its `title` attribute or visible text.

Examples:
```javascript
EBS.DoClickButton("Go");
```

```javascript
EBS.DoClickButton(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  The `title` attribute or visible text of the button. |




**Returns:**

boolean: true if the button was found and clicked, otherwise false.



<a name="see.also.ebs.doclickbutton"></a>

<a name="DoClickSelectButton"></a>    
#### DoClickSelectButton

Click the `Select` button associated with a specific field label. Such buttons open
a list of values (LOV) window for the field.

Examples:
```javascript
EBS.DoClickSelectButton("Customer");
```

```javascript
EBS.DoClickSelectButton(fieldName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fieldName | string |  Visible label text of the field the `Select` button belongs to. |




**Returns:**

boolean: true if the button was found and clicked, otherwise false.



<a name="see.also.ebs.doclickselectbutton"></a>

<a name="DoLogin"></a>    
#### DoLogin

Open the Oracle E-Business Suite login page and sign in. A browser is launched if
none is open yet, and the call returns once the OAF page that follows the login
has finished loading.

The URL may be given at any level of detail. A bare host, a context root or a
`/OA_HTML` path is completed to the login page `<root>/OA_HTML/AppsLogin`, while a
URL that already names a page below `OA_HTML` is used as is, query string included.

To land on a specific page instead, pass either its full URL or just the trailing
part of it - the function id alone, or the query string with or without its question
mark. Since the trailing part names no host, the instance URL is then taken from the
configuration as described above.

Credentials are typed with reporting suppressed, so they do not appear in the report.

Examples:
```javascript
// Take everything from the environment, test parameters or Shared\Config.xlsx
EBS.DoLogin();
// Derive URL from function id and use password from the environment
EBS.DoLogin("ASN_DASHBOARDPG", "OPERATIONS");
// Use relative URL and username
EBS.DoLogin("/OA_HTML/AppsLogin", "OPERATIONS");
// An OAFunc endpoint goes to OA.jsp instead
EBS.DoLogin("OAFunc=OANEWHOMEPAGE", "OPERATIONS", "welcome");
// Full version, with password and language selection
EBS.DoLogin("/OA_HTML/AppsLogin", "OPERATIONS", "welcome", "English");
```

```javascript
EBS.DoLogin(startUrl, userName, password, language)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| startUrl | string |  EBS URL or endpoint. As a URL it accepts a bare host (`apps.example.com:8000`), a context root, `.../OA_HTML` or a full page URL such as `.../OA_HTML/OA.jsp`; anything short of a page is completed to the login page `/OA_HTML/AppsLogin`. As an endpoint it accepts just the trailing part of such a URL - `ASN_DASHBOARDPG`, `function_id=ASN_DASHBOARDPG` or `?function_id=ASN_DASHBOARDPG` - and the host comes from the configuration. Leave empty to take the URL from `EBS_URL`, the `EBS URL` parameter or `Shared\Config.xlsx`.<br>Optional, Default: "http://apps.example.com:8000/OA_HTML/AppsLogin". |
| userName | string |  EBS user name. Leave empty to take it from `EBS_USERNAME`, the `EbsUserName` parameter or `Shared\Config.xlsx`.<br>Optional, Default: "OPERATIONS". |
| password | string |  EBS password. Leave empty to take it from `EBS_PASSWORD`, the `EbsPassword` parameter or `Shared\Config.xlsx`.<br>Optional, Default: "welcome". |
| language | string |  Language to choose in the login form language selector. Leave empty to keep the default.<br>Optional, Default: "English". |




**Returns:**

boolean: true if the login sequence completed, false if a setting was left unset or a login form element was not found.



<a name="see.also.ebs.dologin"></a>

<a name="DoLogout"></a>    
#### DoLogout

Log out from Oracle E-Business Suite and wait for the page that follows to load.

Examples:
```javascript
EBS.DoLogout();
```

```javascript
EBS.DoLogout()
```




**Returns:**

boolean: true if the logout was initiated, false if neither the logout link nor an OAF URL to derive the logout page from was found.



<a name="see.also.ebs.dologout"></a>

<a name="DoNavigate"></a>    
#### DoNavigate

Navigate to an Oracle E-Business Suite function through the navigation tree of the
Navigator page.

The `Home` global button is clicked first, so the call works from any OAF page and
does not need the Navigator page to be open already. The nodes along `path` are then
expanded one by one and the last one is clicked.

Examples:
```javascript
EBS.DoNavigate("Application Developer;Flexfield;Descriptive");
// A node label containing a semicolon needs a different separator
EBS.DoNavigate("Receivables, Vision Operations|Setup|Print", "|");
```

```javascript
EBS.DoNavigate(path, sep)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path to the node to click, starting at a top level node of the tree. The node labels are separated by `sep`, so `Application Developer;Other` means the `Other` node under `Application Developer`. |
| sep | string |  Separator between the node labels in `path`. Leave empty to use a semicolon.<br>Optional, Default: ";". |




**Returns:**

boolean: true if the node was found and clicked, otherwise false. The action fails with a message when the navigation tree is not on the screen.



<a name="see.also.ebs.donavigate"></a>

<a name="DoRunJWS"></a>    
#### DoRunJWS

Launch a downloaded Java Web Start file with `javaws.exe` and wait for the Oracle Forms
window it opens to become ready.

Opening a Forms based function in Oracle E-Business Suite makes the browser download a
`.jnlp` file instead of showing a page. Call this action right after that click: it
waits up to 5 seconds for the file to turn up on disk, hands it to Java Web Start and
then waits up to 10 seconds for the Forms window to appear and go idle.

Requires the `OracleForms` library to be loaded, and `javaws.exe` to be on the `PATH`.
Once the action succeeds, the Forms window is addressed with the `OracleForms` objects
and actions rather than with the `EBS` ones.

Examples:
```javascript
// Open a Forms based function and attach to the window it opens
EBS.DoNavigate("Application Developer;Other");
EBS.DoRunJWS();
// The browser is configured to download somewhere else
EBS.DoRunJWS("C:\\Temp\\frmservlet.jnlp");
```

```javascript
EBS.DoRunJWS(path)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path to the `.jnlp` file to launch. Leave empty to use `%USERPROFILE%\Downloads\frmservlet.jnlp`, where a browser downloading to its default folder puts it.<br>Optional, Default: "%USERPROFILE%\Downloads\frmservlet.jnlp". |




**Returns:**

boolean: true once the Oracle Forms window is open and idle. The action fails when the file does not appear within 5 seconds, and returns false when the Forms window does not become ready within 10 seconds of the launch.



<a name="see.also.ebs.dorunjws"></a>

<a name="DoSetCombo"></a>    
#### DoSetCombo

Select an option in a combo box (`select` element) identified by its `title` attribute
or by the visible label text in the same row.

Examples:
```javascript
EBS.DoSetCombo("Operating Unit", "Vision Operations");
```

```javascript
EBS.DoSetCombo(name, value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  The `title` attribute OR the visible label of the `select` element. |
| value | string |  Visible text of the option to select. |




**Returns:**

boolean: true if the combo box was found and the option was selected, otherwise false.



<a name="see.also.ebs.dosetcombo"></a>

<a name="DoSetField"></a>    
#### DoSetField

Set text in an input field identified by its `title` attribute.

Examples:
```javascript
EBS.DoSetField("Customer Name", "Vision Operations");
```

```javascript
EBS.DoSetField(name, value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  The `title` attribute of the input field (shown as a tooltip in the browser). |
| value | string |  Text to enter into the field. |




**Returns:**

boolean: true if the field was found and the text was set, otherwise false.



<a name="see.also.ebs.dosetfield"></a>

<a name="Sync"></a>    
#### Sync

Wait for the OAF page to finish loading by monitoring the `OALoading` CSS class on the
`body` element. After triggering any action that causes a server round-trip, call this
function to make sure the page has fully loaded before proceeding with further
interactions.

All other `EBS` actions call it implicitly, so it is only needed after a plain
Rapise action (`DoClick`, `DoSetText`, etc.) or after `Navigator.Open`.

Examples:
```javascript
EBS.DoClickButton("Go");
EBS.Sync();
```

```javascript
EBS.Sync()
```




**Returns:**

boolean: true if the page finished loading, false if the wait timed out (30 seconds).



<a name="see.also.ebs.sync"></a>

  

