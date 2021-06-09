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
|	[AddImageToReport](#addimagetoreport) | Adds image to the report. |
|	[Assert](#assert) | Checks if condition is 'true' and saves corresponding Report entry. |
|	[AssertEqual](#assertequal) | Checks if obj1 equals to obj2 and saves corresponding Report entry. |
|	[AssertImage](#assertimage) | Checks if 'img1' equals to image stored at 'path' and saves corresponding Report entry. |
|	[BeginTest](#begintest) | Marks beginning of a test with a given name. |
|	[CaptureDesktopImage](#capturedesktopimage) | Captures screenshot of the desktop and adds it to the report. |
|	[CaptureObjectImage](#captureobjectimage) | Captures screenshot of an object and adds it to the report. |
|	[CaptureWindowImage](#capturewindowimage) | Captures screenshot of an application window matched by title and class and adds it to the report. |
|	[DumpCmdArgsJson](#dumpcmdargsjson) | Dump node.json with all arguments. |
|	[EndTest](#endtest) | Marks end of a currently executed test. |
|	[FailTest](#failtest) | Stops test execution and sets it's status to failed. |
|	[GetParam](#getparam) | Read parameter field passed into the Test function by field name. |
|	[GetReportAttribute](#getreportattribute) | Gets report attribute previously set by PushReportAttribute or SetReportAttribute. |
|	[GetTestName](#gettestname) | Returns name of the running test. |
|	[GetTestStatus](#getteststatus) | Gets status of currently executed test. |
|	[IgnoreStatus](#ignorestatus) | <p>In IgnoreStatus mode the assertion status is always treated as "Info". |
|	[Message](#message) | Saves corresponding Report message. |
|	[MessageBox](#messagebox) | Shows message box to user. |
|	[MessageBoxPrompt](#messageboxprompt) | Shows message box with question to the user and checks if user presses "Yes" or "No". |
|	[PopReportAttribute](#popreportattribute) | Resets an attribute to its previous value. |
|	[PushReportAttribute](#pushreportattribute) | <p>Maintains "stacked" attributes. |
|	[ResetReportAttribute](#resetreportattribute) | Removes report attribute previously set by SetReportAttribute. |
|	[SetReportAttribute](#setreportattribute) | Set persistent attribute. |
|	[SoftAssert](#softassert) | Is identical to Tester.Assert. |
|	[SoftAssertAll](#softassertall) | Fail test if there were any previous failures. |
|	[SuppressReport](#suppressreport) | In SuppressReport mode all assertions are ignored. |




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
AddImageToReport(path, caption) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path to an image |
| caption | string |	Caption for the entry added to the report |





<a name="see.also.tester.addimagetoreport"></a>

<a name="Assert"></a>    
#### Assert

Checks if condition is 'true' and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
Assert(message, condition, data, tags) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |	Message to put in the report. |
| condition | boolean |	If 'true' - assertion is considered passed. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| object[] \| string |	Additional information to put in the report. If 'string' is passed, then data is considered as additional comment atribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |	Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assert"></a>

<a name="AssertEqual"></a>    
#### AssertEqual

Checks if obj1 equals to obj2 and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
AssertEqual(message, obj1, obj2, data, tags) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |	Message to put in the report. |
| obj1 | object |	First object to compare. |
| obj2 | object |	Second object to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |	Additional information to put in the report. If 'string' is passed, then data is considered as additional comment atribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |	Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertequal"></a>

<a name="AssertImage"></a>    
#### AssertImage

Checks if 'img1' equals to image stored at 'path' and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

```javascript
AssertImage(message, img1, path, data, tags) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |	Message to put in the report. |
| img1 | object |	ImageWrapper object (1st image to compare). |
| path | string |	Path to the second image to compare. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |	Additional information to put in the report. If 'string' is passed, then data is considered as additional comment atribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |	Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.assertimage"></a>

<a name="BeginTest"></a>    
#### BeginTest

Marks beginning of a test with a given name.

```javascript
BeginTest(name, path, optionalParams) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Test name |
| path | string |	Path to the test, that is executed. This string will be shown as a comment.<br>Optional. |
| optionalParams | object |	Params to pass into Test(...) function.<br>Optional. |





<a name="see.also.tester.begintest"></a>

<a name="CaptureDesktopImage"></a>    
#### CaptureDesktopImage

Captures screenshot of the desktop and adds it to the report.

```javascript
CaptureDesktopImage(caption) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |	Image title for the report. |





<a name="see.also.tester.capturedesktopimage"></a>

<a name="CaptureObjectImage"></a>    
#### CaptureObjectImage

Captures screenshot of an object and adds it to the report.

```javascript
CaptureObjectImage(caption, objId) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |	Image title for the report. |
| objId | objectId |	Id of an object or SeSObject instance. |





<a name="see.also.tester.captureobjectimage"></a>

<a name="CaptureWindowImage"></a>    
#### CaptureWindowImage

Captures screenshot of an application window matched by title and class and adds it to the report.

```javascript
CaptureWindowImage(caption, windowTitle, windowClass, bringToFront) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |	Image title for the report. |
| windowTitle | string |	String or regular expression to match window title. |
| windowClass | string |	String or regular expression to match window class.<br>Optional, Default: "regex:.*". |
| bringToFront | boolean |	Set to 'false' to not restore the window before making the image.<br>Optional, Default: "true". |





<a name="see.also.tester.capturewindowimage"></a>

<a name="DumpCmdArgsJson"></a>    
#### DumpCmdArgsJson

Dump node.json with all arguments.

```javascript
DumpCmdArgsJson(optNodeJsonPath, mkPackageJson) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| optNodeJsonPath | string |	node.json path<br>Optional. |
| mkPackageJson | bool |	 |





<a name="see.also.tester.dumpcmdargsjson"></a>

<a name="EndTest"></a>    
#### EndTest

Marks end of a currently executed test. Calculates test results and performs finalization of test execution.

```javascript
EndTest() 
```





<a name="see.also.tester.endtest"></a>

<a name="FailTest"></a>    
#### FailTest

Stops test execution and sets it's status to failed.

```javascript
FailTest(message, internal) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |	Failure description.<br>Optional, Default: "Test stopped on error". |
| internal |  |	 |





<a name="see.also.tester.failtest"></a>

<a name="GetParam"></a>    
#### GetParam

Read parameter field passed into the Test function by field name.

```javascript
GetParam(paramName, defaultValue) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| paramName | string |	 |
| defaultValue | string |	Default value |





<a name="see.also.tester.getparam"></a>

<a name="GetReportAttribute"></a>    
#### GetReportAttribute

Gets report attribute previously set by PushReportAttribute or SetReportAttribute.

```javascript
GetReportAttribute(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Attribute name. |





<a name="see.also.tester.getreportattribute"></a>

<a name="GetTestName"></a>    
#### GetTestName

Returns name of the running test.

```javascript
GetTestName() 
```





<a name="see.also.tester.gettestname"></a>

<a name="GetTestStatus"></a>    
#### GetTestStatus

Gets status of currently executed test.

```javascript
GetTestStatus() 
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
IgnoreStatus(ignore) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| ignore | boolean |	Set to 'true' to report all messages but ignore the status (Pass/Fail) |





<a name="see.also.tester.ignorestatus"></a>

<a name="Message"></a>    
#### Message

Saves corresponding Report message.
Message may contain some additional data (links, images, comments) set via 'data' parameter.

```javascript
Message(message, data, tags) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |	Message to put in the report |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| Object[] |	Additional information to put in the report. If 'string' is passed, then data is considered as additional comment atribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |	Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.message"></a>

<a name="MessageBox"></a>    
#### MessageBox

Shows message box to user. Use it for verbose and manual testing.

```javascript
MessageBox(message) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |	Message to display. |





<a name="see.also.tester.messagebox"></a>

<a name="MessageBoxPrompt"></a>    
#### MessageBoxPrompt

Shows message box with question to the user and checks if user presses "Yes" or "No".
  "Yes" => "Pass" goes to the report with this message.
  "No" => "Fail" is reported.

```javascript
MessageBoxPrompt(question) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| question | string |	Question to display. |





<a name="see.also.tester.messageboxprompt"></a>

<a name="PopReportAttribute"></a>    
#### PopReportAttribute

Resets an attribute to its previous value. See PushReportAttribute for more information.

```javascript
PopReportAttribute(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Attribute name to recall from stack. |




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
PushReportAttribute(name, value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Attribute name to recall from stack. |
| value | string |	New attribute value. |





<a name="see.also.tester.pushreportattribute"></a>

<a name="ResetReportAttribute"></a>    
#### ResetReportAttribute

Removes report attribute previously set by SetReportAttribute.

```javascript
ResetReportAttribute(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Attribute name. |





<a name="see.also.tester.resetreportattribute"></a>

<a name="SetReportAttribute"></a>    
#### SetReportAttribute

Set persistent attribute. It will be set for all subsequent report items
(assertions, tests, requirements, and so on). It may be changed by calling
the ResetReportAttribute function.

```javascript
SetReportAttribute(name, value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Attribute name to set. |
| value | string |	New attribute value. |





<a name="see.also.tester.setreportattribute"></a>

<a name="SoftAssert"></a>    
#### SoftAssert

Is identical to Tester.Assert. But when an assertion fails, don't stop execution and just record the failure. Later you may call `Tester.SoftAssertAll(..)` that will stop execution if at least one assertion failed.

```javascript
SoftAssert(message, condition, data, tags) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |	Message to put in the report. |
| condition | boolean |	If 'true' - assertion is considered passed. |
| data | SeSReportLink \| SeSReportText \| SeSReportImage \| object[] \| string |	Additional information to put in the report. If 'string' is passed, then data is considered as additional comment atribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText, SeSReportFile.<br>Optional. |
| tags | object |	Hash of attributes to set for this particular log entry.<br>Optional. |





<a name="see.also.tester.softassert"></a>

<a name="SoftAssertAll"></a>    
#### SoftAssertAll

Fail test if there were any previous failures. This method is designed to be used after one or many calls to `Tester.SoftAssert(...)`.

```javascript
SoftAssertAll(message) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| message | string |	Message to put in the report. |





<a name="see.also.tester.softassertall"></a>

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
SuppressReport(suppress) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| suppress | boolean |	Set to 'True' to suppress adding anything into the report. |





<a name="see.also.tester.suppressreport"></a>

	

