Summary: Tester object. Use it to perform assertions during test playback and output relevant information to the report.

# Tester

Tester object. Use it to perform assertions during test playback and output relevant information to the report.You do not need to record or learn this object, it is always automatically available in any test.






<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** |
| ------------ | --------------- |
| [Fail](#fail) | Test status, test failed. |
| [Info](#info) | Test status, test is neither passed nor failed. |
| [Pass](#pass) | Test status, test passed. |
| [Unresolved](#unresolved) | Test status, test status is unresolved, test terminated unexpectedly. |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [AddImageToReport](#addimagetoreport) | Adds image to the report. |
|  [Assert](#assert) | Checks if condition is 'true' and saves corresponding Report entry. |
|  [AssertContains](#assertcontains) | Checks if `str` contains `substr` somewhere and saves corresponding Report entry. |
|  [AssertEndsWith](#assertendswith) | Checks that `str` has `substr` in the end and saves corresponding Report entry. |
|  [AssertEqual](#assertequal) | Checks if obj1 equals to obj2 and saves corresponding Report entry. |
|  [AssertFalse](#assertfalse) | Checks if `val` is `false` and saves corresponding Report entry. |
|  [AssertGreater](#assertgreater) | Checks if n1 greater than n2 and saves corresponding Report entry. |
|  [AssertGreaterOrEqual](#assertgreaterorequal) | Checks if n1 greater or equal than n2 and saves corresponding Report entry. |
|  [AssertImage](#assertimage) | Checks if 'img1' equals to image stored at 'path' and saves corresponding Report entry. |
|  [AssertLess](#assertless) | Checks if n1 is less than n2 and saves corresponding Report entry. |
|  [AssertLessOrEqual](#assertlessorequal) | Checks if n1 differs from n2 and saves corresponding Report entry. |
|  [AssertNotContains](#assertnotcontains) | Checks that `str` does not contain `substr` anywhere and saves corresponding Report entry. |
|  [AssertNotEqual](#assertnotequal) | Checks if obj1 differs from obj2 and saves corresponding Report entry. |
|  [AssertNotNull](#assertnotnull) | Checks if `val` is `NotNull` and saves corresponding Report entry. |
|  [AssertNotSet](#assertnotset) | Checks if `val` is not set (i.e. |
|  [AssertNull](#assertnull) | Checks if `val` is `null` and saves corresponding Report entry. |
|  [AssertSet](#assertset) | Checks if `val` is set (i.e. |
|  [AssertStartsWith](#assertstartswith) | Checks if `str` begins with `substr` and saves corresponding Report entry. |
|  [BeginTest](#begintest) | Marks beginning of a test with a given name. |
|  [BlockTest](#blocktest) | Stops test execution and exits with Blocked status. |
|  [CaptureDesktopImage](#capturedesktopimage) | Captures screenshot of the desktop and adds it to the report. |
|  [CaptureObjectImage](#captureobjectimage) | Captures screenshot of an object and adds it to the report. |
|  [CaptureWindowImage](#capturewindowimage) | Captures screenshot of an application window matched by title and class and adds it to the report. |
|  [DumpCmdArgsJson](#dumpcmdargsjson) | Dump node.json with all arguments. |
|  [EndTest](#endtest) | Marks end of a currently executed test. |
|  [ExpectFailure](#expectfailure) | Set Tester to expect a failed assertion with given message or data. |
|  [ExpectFailureDone](#expectfailuredone) | If `messageOrData` is set, checks that given assertion failed at least once. |
|  [FailTest](#failtest) | Stops test execution and sets it's status to failed. |
|  [GetEntryTestName](#getentrytestname) | Retrieves the name of the test that was run by the user. |
|  [GetParam](#getparam) | Read parameter field passed into the Test function by field name. |
|  [GetReportAttribute](#getreportattribute) | Gets report attribute previously set by PushReportAttribute or SetReportAttribute. |
|  [GetTestName](#gettestname) | Returns name of the running test. |
|  [GetTestStatus](#getteststatus) | Gets status of currently executed test. |
|  [IgnoreStatus](#ignorestatus) | <p>In IgnoreStatus mode the assertion status is always treated as "Info". |
|  [Message](#message) | Saves corresponding Report message. |
|  [MessageBox](#messagebox) | Shows message box to user. |
|  [MessageBoxPrompt](#messageboxprompt) | Shows message box with question to the user and checks if user presses "Yes" or "No". |
|  [PopReportAttribute](#popreportattribute) | Resets an attribute to its previous value. |
|  [PushReportAttribute](#pushreportattribute) | <p>Maintains "stacked" attributes. |
|  [ResetReportAttribute](#resetreportattribute) | Removes report attribute previously set by SetReportAttribute. |
|  [SetReportAttribute](#setreportattribute) | Set persistent attribute. |
|  [SoftAssert](#softassert) | Is identical to Tester.Assert. |
|  [SoftAssertAll](#softassertall) | Fail test if there were any previous failures. |
|  [SoftAssertContains](#softassertcontains) | Checks if `str` contains `substr` somewhere and saves corresponding Report entry. |
|  [SoftAssertEndsWith](#softassertendswith) | Checks that `str` has `substr` in the end and saves corresponding Report entry. |
|  [SoftAssertEqual](#softassertequal) | Checks if obj1 equals to obj2 and saves corresponding Report entry. |
|  [SoftAssertFalse](#softassertfalse) | Checks if `val` is `false` and saves corresponding Report entry. |
|  [SoftAssertGreater](#softassertgreater) | Checks if n1 greater than n2 and saves corresponding Report entry. |
|  [SoftAssertGreaterOrEqual](#softassertgreaterorequal) | Checks if n1 greater or equal than n2 and saves corresponding Report entry. |
|  [SoftAssertImage](#softassertimage) | Checks if 'img1' equals to image stored at 'path' and saves corresponding Report entry. |
|  [SoftAssertLess](#softassertless) | Checks if n1 is less than n2 and saves corresponding Report entry. |
|  [SoftAssertLessOrEqual](#softassertlessorequal) | Checks if n1 differs from n2 and saves corresponding Report entry. |
|  [SoftAssertNotContains](#softassertnotcontains) | Checks that `str` does not contain `substr` anywhere and saves corresponding Report entry. |
|  [SoftAssertNotEqual](#softassertnotequal) | Checks if obj1 differs from obj2 and saves corresponding Report entry. |
|  [SoftAssertNotNull](#softassertnotnull) | Checks if `val` is `NotNull` and saves corresponding Report entry. |
|  [SoftAssertNotSet](#softassertnotset) | Checks if `val` is not set (i.e. |
|  [SoftAssertNull](#softassertnull) | Checks if `val` is `null` and saves corresponding Report entry. |
|  [SoftAssertSet](#softassertset) | Checks if `val` is set (i.e. |
|  [SoftAssertStartsWith](#softassertstartswith) | Checks if `str` begins with `substr` and saves corresponding Report entry. |
|  [SuppressReport](#suppressreport) | In SuppressReport mode all assertions are ignored. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="Fail"></a>
#### Fail

Test status, test failed. Constant, equal to 0.



Type: number



<a name="Info"></a>
#### Info

Test status, test is neither passed nor failed. Constant, equal to -2.



Type: number



<a name="Pass"></a>
#### Pass

Test status, test passed. Constant, equal to 1.



Type: number



<a name="Unresolved"></a>
#### Unresolved

Test status, test status is unresolved, test terminated unexpectedly. Constant, equal to -1.



Type: number





<!-- ============================== action detail ========================== -->

### Action Detail

<a name="AddImageToReport"></a>    
#### AddImageToReport

Adds image to the report.

```javascript
Tester.AddImageToReport(path, caption)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path to an image |
| caption | string |  Caption for the entry added to the report |





<a name="see.also.tester.addimagetoreport"></a>

<a name="Assert"></a>    
#### Assert

Checks if condition is 'true' and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.Assert(message, condition, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| condition | boolean |  If 'true' - assertion is considered passed. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| object[] \| string |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assert"></a>

<a name="AssertContains"></a>    
#### AssertContains

Checks if `str` contains `substr` somewhere and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertContains(message, str, substr, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| str | string |  String to search in. |
| substr | string |  Substring to find. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertcontains"></a>

<a name="AssertEndsWith"></a>    
#### AssertEndsWith

Checks that `str` has `substr` in the end and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertEndsWith(message, str, substr, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| str | string |  String to search in. |
| substr | string |  Substring to find. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertendswith"></a>

<a name="AssertEqual"></a>    
#### AssertEqual

Checks if obj1 equals to obj2 and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertEqual(message, obj1, obj2, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| obj1 | object |  First object to compare. |
| obj2 | object |  Second object to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertequal"></a>

<a name="AssertFalse"></a>    
#### AssertFalse

Checks if `val` is `false` and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertFalse(message, val, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| val | object |  Value to check. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertfalse"></a>

<a name="AssertGreater"></a>    
#### AssertGreater

Checks if n1 greater than n2 and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertGreater(message, n1, n2, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| n1 | number |  First value to compare. |
| n2 | number |  Second value to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertgreater"></a>

<a name="AssertGreaterOrEqual"></a>    
#### AssertGreaterOrEqual

Checks if n1 greater or equal than n2 and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertGreaterOrEqual(message, n1, n2, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| n1 | number |  First value to compare. |
| n2 | number |  Second value to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertgreaterorequal"></a>

<a name="AssertImage"></a>    
#### AssertImage

Checks if 'img1' equals to image stored at 'path' and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertImage(message, img1, path, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| img1 | object |  ImageWrapper object (1st image to compare). |
| path | string |  Path to the second image to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertimage"></a>

<a name="AssertLess"></a>    
#### AssertLess

Checks if n1 is less than n2 and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertLess(message, n1, n2, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| n1 | number |  First value to compare. |
| n2 | number |  Second value to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertless"></a>

<a name="AssertLessOrEqual"></a>    
#### AssertLessOrEqual

Checks if n1 differs from n2 and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertLessOrEqual(message, n1, n2, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| n1 | object |  First value to compare. |
| n2 | object |  Second value to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertlessorequal"></a>

<a name="AssertNotContains"></a>    
#### AssertNotContains

Checks that `str` does not contain `substr` anywhere and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertNotContains(message, str, substr, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| str | string |  String to search in. |
| substr | string |  Substring to find. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertnotcontains"></a>

<a name="AssertNotEqual"></a>    
#### AssertNotEqual

Checks if obj1 differs from obj2 and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertNotEqual(message, obj1, obj2, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| obj1 | object |  First object to compare. |
| obj2 | object |  Second object to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertnotequal"></a>

<a name="AssertNotNull"></a>    
#### AssertNotNull

Checks if `val` is `NotNull` and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertNotNull(message, val, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| val | object |  Value to check. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertnotnull"></a>

<a name="AssertNotSet"></a>    
#### AssertNotSet

Checks if `val` is not set (i.e. it is null, 0, false or "") and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertNotSet(message, val, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| val | object |  Value to check. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertnotset"></a>

<a name="AssertNull"></a>    
#### AssertNull

Checks if `val` is `null` and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertNull(message, val, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| val | object |  Value to check. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertnull"></a>

<a name="AssertSet"></a>    
#### AssertSet

Checks if `val` is set (i.e. not false, not 0, not null, not "") and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertSet(message, val, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| val | object |  Value to check. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertset"></a>

<a name="AssertStartsWith"></a>    
#### AssertStartsWith

Checks if `str` begins with `substr` and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.AssertStartsWith(message, str, substr, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| str | string |  String to search in. |
| substr | string |  Substring to find. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertstartswith"></a>

<a name="BeginTest"></a>    
#### BeginTest

Marks beginning of a test with a given name.

```javascript
Tester.BeginTest(name, path, optionalParams, data)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Test name |
| path | string |  Path to the test, that is executed. This string will be shown as a comment.<br>Optional. |
| optionalParams | object |  Params to pass into Test(...) function.<br>Optional. |
| data | array |  Additional info to put into report (array of SeSReportText())<br>Optional. |





<a name="see.also.tester.begintest"></a>

<a name="BlockTest"></a>    
#### BlockTest

Stops test execution and exits with Blocked status.

```javascript
Tester.BlockTest(message)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Reason why the test is blocked.<br>Optional, Default: "Test execution blocked". |





<a name="see.also.tester.blocktest"></a>

<a name="CaptureDesktopImage"></a>    
#### CaptureDesktopImage

Captures screenshot of the desktop and adds it to the report.

```javascript
Tester.CaptureDesktopImage(caption)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |  Image title for the report. |





<a name="see.also.tester.capturedesktopimage"></a>

<a name="CaptureObjectImage"></a>    
#### CaptureObjectImage

Captures screenshot of an object and adds it to the report.

```javascript
Tester.CaptureObjectImage(caption, objId)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |  Image title for the report. |
| objId | objectId |  Id of an object or SeSObject instance. |





<a name="see.also.tester.captureobjectimage"></a>

<a name="CaptureWindowImage"></a>    
#### CaptureWindowImage

Captures screenshot of an application window matched by title and class and adds it to the report.

```javascript
Tester.CaptureWindowImage(caption, windowTitle, windowClass, bringToFront)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |  Image title for the report. |
| windowTitle | string |  String or regular expression to match window title. |
| windowClass | string |  String or regular expression to match window class.<br>Optional, Default: "regex:.*". |
| bringToFront | boolean |  Set to 'false' to not restore the window before making the image.<br>Optional, Default: "true". |





<a name="see.also.tester.capturewindowimage"></a>

<a name="DumpCmdArgsJson"></a>    
#### DumpCmdArgsJson

Dump node.json with all arguments.

```javascript
Tester.DumpCmdArgsJson(optNodeJsonPath, mkPackageJson)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| optNodeJsonPath | string |  node.json path<br>Optional. |
| mkPackageJson | string |  Generate package.json for the test<br>Optional. |





<a name="see.also.tester.dumpcmdargsjson"></a>

<a name="EndTest"></a>    
#### EndTest

Marks end of a currently executed test. Calculates test results and performs finalization of test execution.

```javascript
Tester.EndTest()
```





<a name="see.also.tester.endtest"></a>

<a name="ExpectFailure"></a>    
#### ExpectFailure

Set Tester to expect a failed assertion with given message or data. When 
such error happens, it is reported as an expected Passed assertion. Requires Rapise 8.0+.

When null is passed, all expectations are reset.

```javascript
Tester.ExpectFailure(messageOrData)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| messageOrData | string |  Text to match against assertion message & data. |





<a name="see.also.tester.expectfailure"></a>

<a name="ExpectFailureDone"></a>    
#### ExpectFailureDone

If `messageOrData` is set, checks that given assertion failed at least once.
If `messageOrData` is null or empty, checks that all expected failed assertions failed.
Requires Rapise 8.0+.

```javascript
Tester.ExpectFailureDone(messageOrData)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| messageOrData | string |  Text to match against assertion message & data.<br>Optional, Default: "null". |





<a name="see.also.tester.expectfailuredone"></a>

<a name="FailTest"></a>    
#### FailTest

Stops test execution and sets it's status to failed.

```javascript
Tester.FailTest(message, internal)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Failure description.<br>Optional, Default: "Test stopped on error". |
| internal |  |  For internal use<br>Optional, Default: "null". |





<a name="see.also.tester.failtest"></a>

<a name="GetEntryTestName"></a>    
#### GetEntryTestName

Retrieves the name of the test that was run by the user. Usually the 
value is the same as Tester.GetTestName. But in cases where one test
calls another test, Tester.GetEntryTestName will remain equal to
to the original test case, and GetTestName will change depending on the 
current test case being executed.

```javascript
Tester.GetEntryTestName()
```





<a name="see.also.tester.getentrytestname"></a>

<a name="GetParam"></a>    
#### GetParam

Read parameter field passed into the Test function by field name.

```javascript
Tester.GetParam(paramName, defaultValue)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| paramName | string |  Parameter name |
| defaultValue | string |  Default value |





<a name="see.also.tester.getparam"></a>

<a name="GetReportAttribute"></a>    
#### GetReportAttribute

Gets report attribute previously set by PushReportAttribute or SetReportAttribute.

```javascript
Tester.GetReportAttribute(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Attribute name. |





<a name="see.also.tester.getreportattribute"></a>

<a name="GetTestName"></a>    
#### GetTestName

Returns name of the running test.

```javascript
Tester.GetTestName()
```





<a name="see.also.tester.gettestname"></a>

<a name="GetTestStatus"></a>    
#### GetTestStatus

Gets status of currently executed test.

```javascript
Tester.GetTestStatus()
```




**Returns:**

One of: 
	Tester.Info - test is neither passed nor failed;
	1 - Tester.Pass - test passed;
	0 - Tester.Fail - test failed;
-1 - Tester.Unresolved - test status is unresolved, test terminated unexpectedly.



<a name="see.also.tester.getteststatus"></a>

<a name="IgnoreStatus"></a>    
#### IgnoreStatus

<p>In IgnoreStatus mode the assertion status is always treated as "Info".
Real status is written to "realStatus" attribute in this case and used
just for information purposes (i.e. it does not affect final test status).</p>

<p>This function is used when the test case needs to set test status manually.</p>
<pre>
  Tester.IgnoreStatus(true);
  Tester.Assert("Ignored Assertion", false); // This assertion is failed. But its status is ignored.
  Tester.IgnoreStatus(false);
  Tester.Assert("Test passed", true);
  // The overall test is passed because failed assertion is ignored.
</pre>

```javascript
Tester.IgnoreStatus(ignore)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| ignore | boolean |  Set to 'true' to report all messages but ignore the status (Pass/Fail) |





<a name="see.also.tester.ignorestatus"></a>

<a name="Message"></a>    
#### Message

Saves corresponding Report message.
Message may contain some additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.Message(message, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.message"></a>

<a name="MessageBox"></a>    
#### MessageBox

Shows message box to user. Use it for verbose and manual testing.

```javascript
Tester.MessageBox(message)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to display. |





<a name="see.also.tester.messagebox"></a>

<a name="MessageBoxPrompt"></a>    
#### MessageBoxPrompt

Shows message box with question to the user and checks if user presses "Yes" or "No".
  "Yes" => "Pass" goes to the report with this message.
  "No" => "Fail" is reported.

```javascript
Tester.MessageBoxPrompt(question)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| question | string |  Question to display. |





<a name="see.also.tester.messageboxprompt"></a>

<a name="PopReportAttribute"></a>    
#### PopReportAttribute

Resets an attribute to its previous value. See PushReportAttribute for more information.

```javascript
Tester.PopReportAttribute(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Attribute name to recall from stack. |




**Returns:**

string: Previous value. Null if no such stacked attribute found.



<a name="see.also.tester.popreportattribute"></a>

<a name="PushReportAttribute"></a>    
#### PushReportAttribute

<p>Maintains "stacked" attributes. Useful for nesting. </p>
<br>
<p>Example:</p>
<br>
<p>Main test sets scenario=Main. Then it calls
another scenario (scenario Login) and then continues its own test actions.</p>
<br>
<p>We want all assertions to be attributed with current scenario name.</p>
<pre>
 function Main()
 {
     Tester.PushReportAttribute("scenario", "Main");
     Login();
     ...
     Tester.Assert("Main test passed", mainStatus); // Saved with scenario=Main
 }

 function Login()
 {
     Tester.PushReportAttribute("scenario", "Login");
     ... // Do login logic
     Tester.Assert("Login Result", loginStatus);
     Tester.PopReportAttribute("scenario"); // Set scenario value back to caller
 }
</pre>

```javascript
Tester.PushReportAttribute(name, value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Attribute name to recall from stack. |
| value | string |  New attribute value. |





<a name="see.also.tester.pushreportattribute"></a>

<a name="ResetReportAttribute"></a>    
#### ResetReportAttribute

Removes report attribute previously set by SetReportAttribute.

```javascript
Tester.ResetReportAttribute(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Attribute name. |





<a name="see.also.tester.resetreportattribute"></a>

<a name="SetReportAttribute"></a>    
#### SetReportAttribute

Set persistent attribute. It will be set for all subsequent report items
(assertions, tests, requirements, and so on). It may be changed by calling
the ResetReportAttribute function.

```javascript
Tester.SetReportAttribute(name, value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Attribute name to set. |
| value | string |  New attribute value. |





<a name="see.also.tester.setreportattribute"></a>

<a name="SoftAssert"></a>    
#### SoftAssert

Is identical to Tester.Assert. But when an assertion fails, don't stop execution and just record the failure. Later you may call `Tester.SoftAssertAll(..)` that will stop execution if at least one assertion failed.

```javascript
Tester.SoftAssert(message, condition, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| condition | boolean |  If 'true' - assertion is considered passed. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| object[] \| string |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassert"></a>

<a name="SoftAssertAll"></a>    
#### SoftAssertAll

Fail test if there were any previous failures. This method is designed to be used after one or many calls to `Tester.SoftAssert(...)`.

```javascript
Tester.SoftAssertAll(message)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |





<a name="see.also.tester.softassertall"></a>

<a name="SoftAssertContains"></a>    
#### SoftAssertContains

Checks if `str` contains `substr` somewhere and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertContains(message, str, substr, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| str | string |  String to search in. |
| substr | string |  Substring to find. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertcontains"></a>

<a name="SoftAssertEndsWith"></a>    
#### SoftAssertEndsWith

Checks that `str` has `substr` in the end and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertEndsWith(message, str, substr, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| str | string |  String to search in. |
| substr | string |  Substring to find. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertendswith"></a>

<a name="SoftAssertEqual"></a>    
#### SoftAssertEqual

Checks if obj1 equals to obj2 and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertEqual(message, obj1, obj2, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| obj1 | object |  First object to compare. |
| obj2 | object |  Second object to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertequal"></a>

<a name="SoftAssertFalse"></a>    
#### SoftAssertFalse

Checks if `val` is `false` and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertFalse(message, val, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| val | object |  Value to check. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertfalse"></a>

<a name="SoftAssertGreater"></a>    
#### SoftAssertGreater

Checks if n1 greater than n2 and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertGreater(message, n1, n2, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| n1 | number |  First value to compare. |
| n2 | number |  Second value to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertgreater"></a>

<a name="SoftAssertGreaterOrEqual"></a>    
#### SoftAssertGreaterOrEqual

Checks if n1 greater or equal than n2 and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertGreaterOrEqual(message, n1, n2, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| n1 | number |  First value to compare. |
| n2 | number |  Second value to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertgreaterorequal"></a>

<a name="SoftAssertImage"></a>    
#### SoftAssertImage

Checks if 'img1' equals to image stored at 'path' and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertImage(message, img1, path, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| img1 | object |  ImageWrapper object (1st image to compare). |
| path | string |  Path to the second image to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertimage"></a>

<a name="SoftAssertLess"></a>    
#### SoftAssertLess

Checks if n1 is less than n2 and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertLess(message, n1, n2, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| n1 | number |  First value to compare. |
| n2 | number |  Second value to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertless"></a>

<a name="SoftAssertLessOrEqual"></a>    
#### SoftAssertLessOrEqual

Checks if n1 differs from n2 and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertLessOrEqual(message, n1, n2, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| n1 | object |  First value to compare. |
| n2 | object |  Second value to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertlessorequal"></a>

<a name="SoftAssertNotContains"></a>    
#### SoftAssertNotContains

Checks that `str` does not contain `substr` anywhere and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertNotContains(message, str, substr, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| str | string |  String to search in. |
| substr | string |  Substring to find. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertnotcontains"></a>

<a name="SoftAssertNotEqual"></a>    
#### SoftAssertNotEqual

Checks if obj1 differs from obj2 and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertNotEqual(message, obj1, obj2, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| obj1 | object |  First object to compare. |
| obj2 | object |  Second object to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertnotequal"></a>

<a name="SoftAssertNotNull"></a>    
#### SoftAssertNotNull

Checks if `val` is `NotNull` and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertNotNull(message, val, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| val | object |  Value to check. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertnotnull"></a>

<a name="SoftAssertNotSet"></a>    
#### SoftAssertNotSet

Checks if `val` is not set (i.e. it is null, 0, false or "") and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertNotSet(message, val, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| val | object |  Value to check. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertnotset"></a>

<a name="SoftAssertNull"></a>    
#### SoftAssertNull

Checks if `val` is `null` and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertNull(message, val, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| val | object |  Value to check. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertnull"></a>

<a name="SoftAssertSet"></a>    
#### SoftAssertSet

Checks if `val` is set (i.e. not false, not 0, not null, not "") and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertSet(message, val, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| val | object |  Value to check. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertset"></a>

<a name="SoftAssertStartsWith"></a>    
#### SoftAssertStartsWith

Checks if `str` begins with `substr` and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Tester.SoftAssertStartsWith(message, str, substr, data, tags)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |  Message to put in the report. |
| str | string |  String to search in. |
| substr | string |  Substring to find. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |  Additional information to put in the report. If 'string' is passed, then data is considered as additional comment attribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |  Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassertstartswith"></a>

<a name="SuppressReport"></a>    
#### SuppressReport

In SuppressReport mode all assertions are ignored. That means no lines are added to report and all statuses are treated as "Info".
This mode is like IgnoreStatus mode but no status messages are added to report.

```javascript
  Tester.SuppressReport(true);
  Tester.Assert("No assertion", false); // Status of this assertion will be ignored and no record will be added to report
  SeS('Obj1').DoClick(); // No line will be added to report and operation status will be ignored
  Tester.SuppressReport(false);
```

```javascript
Tester.SuppressReport(suppress)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| suppress | boolean |  Set to 'True' to suppress adding anything into the report. |





<a name="see.also.tester.suppressreport"></a>

  

