Summary: Global object. Use it to perform actions not related to a particular object. You do not need to

# Global

Global object. Use it to perform actions not related to a particular object. You do not need torecord or learn this object, it is always automatically available in any test.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoAnalogPlay](#doanalogplay) | Performs Analog Playback of events recorded in a file. |
|	[DoAppActivate](#doappactivate) | Activates window with the specified title. |
|	[DoClick](#doclick) | Performs mouse click at the current position. |
|	[DoCmd](#docmd) | Executes a BAT/CMD file specified in cmdLine. |
|	[DoCompareJsObjects](#docomparejsobjects) | Compares two JavaScript objects and prints differences to the report. |
|	[DoDecrypt](#dodecrypt) | Decrypts a piece of text. |
|	[DoEncrypt](#doencrypt) | Encrypts a piece of text. |
|	[DoHorizontalScroll](#dohorizontalscroll) | Simulates mouse horizontal wheel scroll gesture. |
|	[DoInvokeTest](#doinvoketest) | Invokes another test (aka subtest). |
|	[DoInvokeTestParallel](#doinvoketestparallel) | Executes specified test in few parallel threads. |
|	[DoKillByName](#dokillbyname) | Terminates a given process. |
|	[DoKillByPid](#dokillbypid) | Terminates a given process or the last process created by DoLaunch if 'pid' is not specified. |
|	[DoLaunch](#dolaunch) | Executes a command specified in cmdLine. |
|	[DoLoadObjects](#doloadobjects) | Loads objects from external .objects.js file. |
|	[DoMessageBox](#domessagebox) | <p>Shows message box (popup message) to a user. |
|	[DoMouseMove](#domousemove) | Moves mouse to the specified position. |
|	[DoPlayManual](#doplaymanual) | Executes a manual test. |
|	[DoRunTestSet](#doruntestset) | Executes a test set. |
|	[DoSendKeys](#dosendkeys) | Sends series of keystrokes to a currently focused application. |
|	[DoSendText](#dosendtext) | Sends text to the active application as is (while SendKeys also supports sending special keys). |
|	[DoSleep](#dosleep) | Pauses execution for given number of milliseconds (1000 = 1 second). |
|	[DoTrim](#dotrim) | Strips leading and trailing white-space from a string, replaces sequences of whitespace characters by a single space, and returns the resulting string. |
|	[DoTypePassword](#dotypepassword) | Types encrypted password into a control which has a focus. |
|	[DoVerticalScroll](#doverticalscroll) | Simulates mouse vertical wheel scroll gesture. |
|	[DoWaitFor](#dowaitfor) | Waits for object specified by objectId to become available. |
|	[DoWaitForProperty](#dowaitforproperty) | Waits for specified value of object's property. |
|	[GetClipboardText](#getclipboardtext) | Reads text stored in the windows clipboard. |
|	[GetCurrentDir](#getcurrentdir) | Gets current directory path. |
|	[GetFileAsByteArray](#getfileasbytearray) | Reads file and returns its content as array of bytes. |
|	[GetFirstDayOfWeek](#getfirstdayofweek) | Returns first day of week for current user. |
|	[GetFullPath](#getfullpath) | Constructs an absolute file name using working directory (WORKDIR) of the test. |
|	[GetOsOwner](#getosowner) | Reads OS registered owner from the registry. |
|	[GetOsPath](#getospath) | Returns OS root path. |
|	[GetOsType](#getostype) | Reads OS type from the registry. |
|	[GetOsVersion](#getosversion) | Reads OS service pack version from the registry. |
|	[GetProperty](#getproperty) | Reads property value from file 'optConfig' if set, or from %WORKDIR%\Config.json otherwise. |
|	[GetRapiseVersion](#getrapiseversion) | Reads Rapise version. |
|	[GetSpecialFolderPath](#getspecialfolderpath) | Returns path to a special folder specified by one of possible values. |
|	[SetClipboardText](#setclipboardtext) | Updates clipboard text |
|	[SetConfigPath](#setconfigpath) | Set default path for config file instead of default %WORKDIR%\Config.json. |
|	[SetFileAsByteArray](#setfileasbytearray) | Creates or rewrites file and fills with contents of the provided byte array. |
|	[SetProperty](#setproperty) | Sets property value to file 'optConfig' if set, or to %WORKDIR%\Config.json otherwise. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoAnalogPlay"></a>    
#### DoAnalogPlay

Performs Analog Playback of events recorded in a file.

```javascript
DoAnalogPlay(path, left, top) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	This is a path to a file with recorded analog events. |
| left | number |	X-coordinate of top-left corner of the analog area. |
| top | number |	Y-coordinate of the top-left corner of the analog area. |





<a name="see.also.global.doanalogplay"></a>

<a name="DoAppActivate"></a>    
#### DoAppActivate

Activates window with the specified title. I.e. Global.DoAppActivate("Calculator")
will bring running instance (if any) of Windows Calculator to the foreground.

```javascript
DoAppActivate(title) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| title | string |	Title of an application window. |





See:

<a displaytype="text" defaultstyle="true" type="weblink" href="http://msdn.microsoft.com/en-us/library/wzcddbek%28VS.85%29.aspx" target="_blank" styleclass="Normal" translate="true">MSDN Article for AppActivate</a>


<a name="see.also.global.doappactivate"></a>

<a name="DoClick"></a>    
#### DoClick

Performs mouse click at the current position.

```javascript
DoClick(clickType) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L. |





<a name="see.also.global.doclick"></a>

<a name="DoCmd"></a>    
#### DoCmd

Executes a BAT/CMD file specified in cmdLine. Optionally one may specify working dir. Requires Rapise 6.4+

```javascript
DoCmd(cmdLine, wrkDir, wait, show) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cmdLine | string |	Command line to execute. Contains path to a batch file and parameters. |
| wrkDir | string |	Working directory. By default it is a directory of the test.<br>Optional, Default: .. |
| wait | boolean |	If `true` - Wait until batch process exit. If `false` - immediately proceed to the next test steps.<br>Optional, Default: true. |
| show | boolean |	If `true` - maximize the command line window. If `false` - minimize the command line window.<br>Optional, Default: true. |




**Returns:**

number: Error code returned by the batch process. 0 - indicates success if `wait` is `true`.



<a name="see.also.global.docmd"></a>

<a name="DoCompareJsObjects"></a>    
#### DoCompareJsObjects

Compares two JavaScript objects and prints differences to the report.

```javascript
DoCompareJsObjects(msg, obj1, obj2) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| msg | string |	Message to write into report. |
| obj1 | object |	First object. |
| obj2 | object |	Second object. |




**Returns:**

boolean: 'true' if two objects are equal, 'false' otherwise.



<a name="see.also.global.docomparejsobjects"></a>

<a name="DoDecrypt"></a>    
#### DoDecrypt

Decrypts a piece of text.

```javascript
DoDecrypt(encryptedText) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| encryptedText | string |	Text to decrypt. |




**Returns:**

string: Decrypted text.



<a name="see.also.global.dodecrypt"></a>

<a name="DoEncrypt"></a>    
#### DoEncrypt

Encrypts a piece of text.

```javascript
DoEncrypt(plainText) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| plainText | string |	Text to encrypt. |




**Returns:**

string: Encrypted text.



<a name="see.also.global.doencrypt"></a>

<a name="DoHorizontalScroll"></a>    
#### DoHorizontalScroll

Simulates mouse horizontal wheel scroll gesture. Requires Rapise 6.5+

```javascript
DoHorizontalScroll(scrollAmountInClicks) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| scrollAmountInClicks | number |	The amount to scroll in clicks. A positive value indicates that the wheel was rotated to the right; a negative value indicates that the wheel was rotated to the left. |





<a name="see.also.global.dohorizontalscroll"></a>

<a name="DoInvokeTest"></a>    
#### DoInvokeTest

Invokes another test (aka subtest). The subtest should have the
set of libraries as calling test. Otherwise it may lead to a conflict.

```javascript
DoInvokeTest(pathToTest, optionalParams) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| pathToTest | string |	Path to .sstest file. |
| optionalParams | object |	Parameters to pass into entry point Test() function of the subtest. I.e. it is called as Test(optionalParams).<br>Optional, Default: [object Object]. |




**Returns:**

boolean: 'true' if the test passed, 'false' otherwise.



<a name="see.also.global.doinvoketest"></a>

<a name="DoInvokeTestParallel"></a>    
#### DoInvokeTestParallel

Executes specified test in few parallel threads. Pass additional arguments in 'threads' param

```javascript             
DoInvokeTestParallel(
	"t2/t2.sstest",
	{
		"THR01": {
			g_browserLibrary: 'Selenium Chrome'
		},
		"THR02": {
			g_browserLibrary: 'Selenium Firefox'
		}
	}
);
```

```javascript
DoInvokeTestParallel(testPath, threads, commonParams) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| testPath | string |	Path to .sstest to execute. |
| threads | object |	Structure, defining parallel threads to execute. |
| commonParams | object |	Object containing {name:'value',...} pairs to be passed as parameters to all tests.<br>Optional. |




**Returns:**

boolean: true, if execution finished with exit code 0 (all tests executed successfully)



<a name="see.also.global.doinvoketestparallel"></a>

<a name="DoKillByName"></a>    
#### DoKillByName

Terminates a given process.

```javascript
DoKillByName(processName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| processName | string |	Executable name to kill (such as 'iexplore.exe'). |




**Returns:**

boolean: 'true' if the process was terminated, 'false' otherwise.



<a name="see.also.global.dokillbyname"></a>

<a name="DoKillByPid"></a>    
#### DoKillByPid

Terminates a given process or the last process created by DoLaunch if 'pid' is not specified.

```javascript
DoKillByPid(pid) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| pid | number |	ID of the process.<br>Optional. |




**Returns:**

boolean: 'true' if the process was terminated, 'false' otherwise.



<a name="see.also.global.dokillbypid"></a>

<a name="DoLaunch"></a>    
#### DoLaunch

Executes a command specified in cmdLine. Optionally one may specify working dir, and window name
to attach if it is already launched.

```javascript
DoLaunch(cmdLine, wrkDir, attachIfExists, attachToWindow) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cmdLine | string |	Command line to an executable with parameters. |
| wrkDir | string |	Working directory. By default it is a directory of the test.<br>Optional, Default: .. |
| attachIfExists | boolean |	Try to find a process with the same executable path instead of launching it.<br>Optional, Default: false. |
| attachToWindow | string |	When attachIfExists is 'true' this parameter may be used to specify top window name to find a process to attach to.<br>Optional, Default: null. |




**Returns:**

number: ID of the new process (positive number) or an error code (negative number)



<a name="see.also.global.dolaunch"></a>

<a name="DoLoadObjects"></a>    
#### DoLoadObjects

Loads objects from external .objects.js file.

```javascript
DoLoadObjects(objectsFilePath) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| objectsFilePath | string |	Path to *.objects.js file. |




**Returns:**

object: saved_script_objects or null if the load was unsuccessful.



<a name="see.also.global.doloadobjects"></a>

<a name="DoMessageBox"></a>    
#### DoMessageBox

<p>Shows message box (popup message) to a user.</p><br>
<p>'buttons' is a value or a sum of values that specifies the number and type of buttons to display,
			   the icon style to use, the identity of the default button, and the modality of the message box. Default value is 0.</p>
				<pre>
	0 = vbOKOnly - OK button only
	1 = vbOKCancel - OK and Cancel buttons
	2 = vbAbortRetryIgnore - Abort, Retry, and Ignore buttons
	3 = vbYesNoCancel - Yes, No, and Cancel buttons
	4 = vbYesNo - Yes and No buttons
	5 = vbRetryCancel - Retry and Cancel buttons
	16 = vbCritical - Critical Message icon
	32 = vbQuestion - Warning Query icon
	48 = vbExclamation - Warning Message icon
	64 = vbInformation - Information Message icon
	0 = vbDefaultButton1 - First button is default
	256 = vbDefaultButton2 - Second button is default
	512 = vbDefaultButton3 - Third button is default
	768 = vbDefaultButton4 - Fourth button is default
	0 = vbApplicationModal - Application modal (the current application will not work until the user responds to the message box)
	4096 = vbSystemModal - System modal (all applications wont work until the user responds to the message box)
			    </pre>
				<p>We can divide the buttons values into four groups: The first group  (0–5) describes the buttons to be displayed in the
				message box, the second group (16, 32, 48, 64) describes the icon style, the third group (0, 256, 512, 768) indicates
				which button is the default; and the fourth group (0, 4096) determines the modality of the message box. When adding
				numbers to create a final value for the buttons parameter, use only one number from each group.</p><br>
			   <p>The function returns a number representation of a button pressed by user:</p>
			   <table>
				<tr><td width="70">vbOK</td><td width="50">1</td><td width="200">OK button was clicked.</td></tr> 
				<tr><td>vbCancel</td><td>2</td><td>Cancel button was clicked.</td></tr> 
				<tr><td>vbAbort</td><td>3</td><td>Abort button was clicked.</td></tr> 
				<tr><td>vbRetry</td><td>4</td><td>Retry button was clicked.</td></tr> 
				<tr><td>vbIgnore</td><td>5</td><td>Ignore button was clicked.</td></tr> 
				<tr><td>vbYes</td><td>6</td><td>Yes button was clicked.</td></tr> 
				<tr><td>vbNo</td><td>7</td><td>No button was clicked.</td></tr> 
			   </table>

```javascript
DoMessageBox(prompt, buttons) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| prompt | string |	Message to display. |
| buttons | number |	Buttons to show.<br>Optional, Default: 0. |




**Returns:**

number: A number representation of a button pressed by user.



<a name="see.also.global.domessagebox"></a>

<a name="DoMouseMove"></a>    
#### DoMouseMove

Moves mouse to the specified position.

```javascript
DoMouseMove(x, y, duration) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	Absolute X-coordinate of the target mouse position. |
| y | number |	Absolute Y-coordinate of the target mouse position. |
| duration | number |	Mouse move duration (milliseconds). If 0 - do immediate move.<br>Optional, Default: 0. |





<a name="see.also.global.domousemove"></a>

<a name="DoPlayManual"></a>    
#### DoPlayManual

Executes a manual test. Results are shown in the report of the calling test.

```javascript
DoPlayManual(rmtFilePath, rmtParams) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rmtFilePath | string |	Path to manual test (.rmt) file. |
| rmtParams | object |	Additional parameters to pass to the manual test executor.<br>Optional. |




**Returns:**

boolean: 'true' if the manual test passed, 'false' otherwise.



<a name="see.also.global.doplaymanual"></a>

<a name="DoRunTestSet"></a>    
#### DoRunTestSet

Executes a test set. Results are shown in the report of the calling test.

```javascript
DoRunTestSet(testSetFilePath, testSetParams) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| testSetFilePath | string |	Path to a test set file. |
| testSetParams | object |	Additional parameters to pass for each test in the test set.<br>Optional. |





<a name="see.also.global.doruntestset"></a>

<a name="DoSendKeys"></a>    
#### DoSendKeys

Sends series of keystrokes to a currently focused application.

```javascript
DoSendKeys(keys) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| keys | string |	Keystrokes, including special characters and control symbols. |





<a name="see.also.global.dosendkeys"></a>

<a name="DoSendText"></a>    
#### DoSendText

Sends text to the active application as is (while SendKeys also supports sending special keys). Requires Rapise 6.5+

```javascript
DoSendText(text) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| text | string |	Text to input. |





<a name="see.also.global.dosendtext"></a>

<a name="DoSleep"></a>    
#### DoSleep

Pauses execution for given number of milliseconds (1000 = 1 second).

```javascript
DoSleep(millis=1000) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| millis=1000 | number |	Number of milliseconds to sleep. |





<a name="see.also.global.dosleep"></a>

<a name="DoTrim"></a>    
#### DoTrim

Strips leading and trailing white-space from a string, replaces sequences of whitespace characters by a single space, and returns the resulting string. 
Whitespace characters are [\\f\\n\\r\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff].

```javascript
DoTrim(str, global, trimChars) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	String to trim. |
| global | boolean |	If 'true' then global trim is performed (whitespaces in the middle are substituted with a single space). If 'false' only ends are trimmed.<br>Optional, Default: false. |
| trimChars | string |	String with each char to be subject for trim.<br>Optional. |




**Returns:**

string: Trimmed string.



<a name="see.also.global.dotrim"></a>

<a name="DoTypePassword"></a>    
#### DoTypePassword

Types encrypted password into a control which has a focus.

```javascript
DoTypePassword(encryptedPassword) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| encryptedPassword | string |	Password to type. Encrypted. |




**Returns:**

string: 'true'



<a name="see.also.global.dotypepassword"></a>

<a name="DoVerticalScroll"></a>    
#### DoVerticalScroll

Simulates mouse vertical wheel scroll gesture. Requires Rapise 6.5+

```javascript
DoVerticalScroll(scrollAmountInClicks) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| scrollAmountInClicks | number |	The amount to scroll in clicks. A positive value indicates that the wheel was rotated forward, away from the user; a negative value indicates that the wheel was rotated backward, toward the user. |





<a name="see.also.global.doverticalscroll"></a>

<a name="DoWaitFor"></a>    
#### DoWaitFor

Waits for object specified by objectId to become available. Function returns if object
was found or timeout.

```javascript
DoWaitFor(objectId=, timeout, sleepTimeIfFound) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| objectId= | objectid |	Id of an object to wait for. |
| timeout | number |	Maximum time to wait (milliseconds).<br>Optional, Default: 10000. |
| sleepTimeIfFound | number |	Wait time (milliseconds) after object is found.<br>Optional, Default: 0. |




**Returns:**

SeSObject | <br>boolean: Found object or 'false'.



<a name="see.also.global.dowaitfor"></a>

<a name="DoWaitForProperty"></a>    
#### DoWaitForProperty

Waits for specified value of object's property. Function returns object handle
if object was found and specified property equals to desired value or 'false' 
in the case of timeout.

`propValue` may be a callback function:
```javascript
function(value)
{
	if (value != 'some text')
	{
		// if the condition is met
		return true;
	}
	return false;
}

```
Use the callback if you need to check more complex condition than equality.

```javascript
DoWaitForProperty(obj, getterName, propValue, timeout, params) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| obj | objectid \| SeSObject |	Id of an object to wait for or object itself. |
| getterName | string |	Property getter function name. |
| propValue | string \| number \| boolean \| function |	Desired property value or callback function (see description). |
| timeout | number |	Maximum time to wait (milliseconds).<br>Optional, Default: 10000. |
| params | array \| string \| number \| boolean |	Parameters for property getter function.<br>Optional. |




**Returns:**

SeSObject | <br>boolean: Found object or 'false'.



<a name="see.also.global.dowaitforproperty"></a>

<a name="GetClipboardText"></a>    
#### GetClipboardText

Reads text stored in the windows clipboard.

```javascript
GetClipboardText() 
```




**Returns:**

string: Clipboard text



<a name="see.also.global.getclipboardtext"></a>

<a name="GetCurrentDir"></a>    
#### GetCurrentDir

Gets current directory path.

```javascript
GetCurrentDir() 
```




**Returns:**

string: Path of the current directory.



<a name="see.also.global.getcurrentdir"></a>

<a name="GetFileAsByteArray"></a>    
#### GetFileAsByteArray

Reads file and returns its content as array of bytes. May be useful for binary files and for passing data to web services.

```javascript
GetFileAsByteArray(fileName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Filename to read (recommended to use absolute file name). |




**Returns:**

object: Array of bytes.



<a name="see.also.global.getfileasbytearray"></a>

<a name="GetFirstDayOfWeek"></a>    
#### GetFirstDayOfWeek

Returns first day of week for current user.

```javascript
GetFirstDayOfWeek() 
```




**Returns:**

number: 0 - Sunday, 1 - Monday.



<a name="see.also.global.getfirstdayofweek"></a>

<a name="GetFullPath"></a>    
#### GetFullPath

Constructs an absolute file name using working directory (WORKDIR) of the test.

```javascript
GetFullPath(fileName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of a file. |




**Returns:**

string: Absolute file name.



<a name="see.also.global.getfullpath"></a>

<a name="GetOsOwner"></a>    
#### GetOsOwner

Reads OS registered owner from the registry.

```javascript
GetOsOwner() 
```




**Returns:**

string: OS registered owner.



<a name="see.also.global.getosowner"></a>

<a name="GetOsPath"></a>    
#### GetOsPath

Returns OS root path.

```javascript
GetOsPath() 
```




**Returns:**

string: OS root path without the trailing backslash, e.g. 'C:\Windows'.



<a name="see.also.global.getospath"></a>

<a name="GetOsType"></a>    
#### GetOsType

Reads OS type from the registry.

```javascript
GetOsType() 
```




**Returns:**

string: OS type string.



<a name="see.also.global.getostype"></a>

<a name="GetOsVersion"></a>    
#### GetOsVersion

Reads OS service pack version from the registry.

```javascript
GetOsVersion() 
```




**Returns:**

string: Service pack version.



<a name="see.also.global.getosversion"></a>

<a name="GetProperty"></a>    
#### GetProperty

Reads property value from file 'optConfig' if set, or from %WORKDIR%\Config.json otherwise.

```javascript
GetProperty(name, defValue, configPath) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of a property |
| defValue | string \| number \| boolean |	Default value to return if property does not exist<br>Optional. |
| configPath | string |	Path to options file (.json, .xlsx).<br>Optional. |




**Returns:**

string | <br>number | <br>boolean: Propery value. If a property does not exist then defValue is returned. If defValue is not set then null is returned.



<a name="see.also.global.getproperty"></a>

<a name="GetRapiseVersion"></a>    
#### GetRapiseVersion

Reads Rapise version. If 'optMinVersion' is specified, then returns true/false depending on 'optMinVersion' less than actual Rapise version.

```javascript
GetRapiseVersion(optMinVersion) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| optMinVersion | string |	Minimum version to check<br>Optional. |




**Returns:**

string: Rapise Version (i.e. 6.3.18.5), 'true' if optMinVersion<Rapise version, 'false' if optMinVersion>Rapise version.



<a name="see.also.global.getrapiseversion"></a>

<a name="GetSpecialFolderPath"></a>    
#### GetSpecialFolderPath

Returns path to a special folder specified by one of possible values.
<br>
<table width="800" border="1" cellspacing="0" cellpadding="0">
				<tr><td colspan="2">Possible values:</td></tr>
				<tr><td width="160">ApplicationData</td><td width="640">The directory that serves as a common repository for application-specific data for the current roaming user.</td></tr> 
				<tr><td>CommonApplicationData</td><td>The directory that serves as a common repository for application-specific data that is used by all users.</td></tr> 
				<tr><td>CommonProgramFiles</td><td>The directory for components that are shared across applications.</td></tr> 
				<tr><td>Cookies</td><td>The directory that serves as a common repository for Internet cookies.</td></tr> 
				<tr><td>Desktop</td><td>The logical Desktop rather than the physical file system location.</td></tr> 
				<tr><td>DesktopDirectory</td><td>The directory used to physically store file objects on the desktop.</td></tr> 
				<tr><td>Favorites</td><td>The directory that serves as a common repository for the user's favorite items.</td></tr> 
				<tr><td>History</td><td>The directory that serves as a common repository for Internet history items.</td></tr> 
				<tr><td>InternetCache</td><td>The directory that serves as a common repository for temporary Internet files.</td></tr> 
				<tr><td>LocalApplicationData</td><td>The directory that serves as a common repository for application-specific data that is used by the current, non-roaming user.</td></tr> 
				<tr><td>MyComputer</td><td>The "My Computer" folder.</td></tr>  
				<tr><td>MyDocuments</td><td>The "My Documents" folder.</td></tr> 
				<tr><td>MyMusic</td><td>The "My Music" folder.</td></tr> 
				<tr><td>MyPictures</td><td>The "My Pictures" folder.</td></tr> 
				<tr><td>Personal</td><td>The directory that serves as a common repository for documents.</td></tr> 
				<tr><td>ProgramFiles</td><td>The program files directory.</td></tr> 
				<tr><td>Programs</td><td>The directory that contains the user's program groups.</td></tr> 
				<tr><td>Recent</td><td>The directory that contains the user's most recently used documents.</td></tr> 
				<tr><td>SendTo</td><td>The directory that contains the Send To menu items.</td></tr> 
				<tr><td>StartMenu</td><td>The directory that contains the Start menu items.</td></tr> 
				<tr><td>Startup</td><td>The directory that corresponds to the user's Startup program group.</td></tr> 
				<tr><td>System</td><td>The System directory.</td></tr> 
				<tr><td>Templates</td><td>The directory that serves as a common repository for document templates.</td></tr> 
</table>

```javascript
GetSpecialFolderPath(folder=MyDocuments) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| folder=MyDocuments | string |	Folder Id. |




**Returns:**

string: System specified folder path without the trailing backslash, e.g. 'C:\Program Files'.



<a name="see.also.global.getspecialfolderpath"></a>

<a name="SetClipboardText"></a>    
#### SetClipboardText

Updates clipboard text

```javascript
SetClipboardText(txt) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| txt | string |	Text to store into clipboard. |




**Returns:**

boolean: 'true' when clipboard is set.



<a name="see.also.global.setclipboardtext"></a>

<a name="SetConfigPath"></a>    
#### SetConfigPath

Set default path for config file instead of default %WORKDIR%\Config.json. Supports .xlsx and .json file format. This path is used by default for further calls to Global.GetProperty and Global.SetProperty

```javascript
SetConfigPath(defPath) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| defPath | string |	New config path, i.e. %WORKDIR%\Config.xlsx |




**Returns:**

string: Previous config path



<a name="see.also.global.setconfigpath"></a>

<a name="SetFileAsByteArray"></a>    
#### SetFileAsByteArray

Creates or rewrites file and fills with contents of the provided byte array.

```javascript
SetFileAsByteArray(fileName, bytes) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Filename to write (recommended to use absolute file name). |
| bytes | array |	Array of bytes to write. |




**Returns:**

number: Number of bytes written.



<a name="see.also.global.setfileasbytearray"></a>

<a name="SetProperty"></a>    
#### SetProperty

Sets property value to file 'optConfig' if set, or to %WORKDIR%\Config.json otherwise. If the file does not exist it will be created.

```javascript
SetProperty(name, value, configPath) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of a property. |
| value | string \| number \| boolean |	Value to set. |
| configPath | string |	Path to options file (.json, .xlsx).<br>Optional. |




**Returns:**

boolean: 'true' if property value set successfully, 'false' otherwise.



<a name="see.also.global.setproperty"></a>

	

