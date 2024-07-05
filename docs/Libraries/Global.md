Summary: Global object. Use it to perform actions not related to a particular object. You do not need to

# Global

Global object. Use it to perform actions not related to a particular object. You do not need torecord or learn this object, it is always automatically available in any test.






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [_DoLoadObjects](#_doloadobjects) |  |
|  [DoAnalogPlay](#doanalogplay) | Performs Analog Playback of events recorded in a file. |
|  [DoAppActivate](#doappactivate) | Activates window with the specified title. |
|  [DoClick](#doclick) | Performs mouse click at the current position. |
|  [DoCmd](#docmd) | Executes a BAT/CMD file specified in cmdLine. |
|  [DoCompareJsObjects](#docomparejsobjects) | Compares two JavaScript objects and prints differences to the report. |
|  [DoDecrypt](#dodecrypt) | Decrypts a piece of text. |
|  [DoEncrypt](#doencrypt) | Encrypts a piece of text. |
|  [DoFindProcess](#dofindprocess) | Finds a process by executable path and, maybe, part of command line. |
|  [DoHorizontalScroll](#dohorizontalscroll) | Simulates mouse horizontal wheel scroll gesture. |
|  [DoInvokeTest](#doinvoketest) | Invokes another test (aka subtest). |
|  [DoInvokeTestParallel](#doinvoketestparallel) | Executes specified test in few parallel threads. |
|  [DoKillByName](#dokillbyname) | Terminates a given process. |
|  [DoKillByPid](#dokillbypid) | Terminates a given process or the last process created by DoLaunch if 'pid' is not specified. |
|  [DoLaunch](#dolaunch) | Executes a command specified by the cmdLine parameter. |
|  [DoLoadObjects](#doloadobjects) | Loads objects from external .objects.js file. |
|  [DoMaximizeWindow](#domaximizewindow) | Maximizes window that matches given title and class name. |
|  [DoMessageBox](#domessagebox) | Shows message box (popup message) to a user. |
|  [DoMinimizeWindow](#dominimizewindow) | Minimizes window that matches given title and class name. |
|  [DoMouseMove](#domousemove) | Moves mouse to the specified position. |
|  [DoPlayManual](#doplaymanual) | Executes a manual test. |
|  [DoRestoreWindow](#dorestorewindow) | Restores window that matches given title and class name. |
|  [DoRunTest](#doruntest) | Executes a given test in isolated environment (new process is created). |
|  [DoRunTestSet](#doruntestset) | Executes a test set. |
|  [DoSendKeys](#dosendkeys) | Sends series of keystrokes to a currently focused application. |
|  [DoSendText](#dosendtext) | Sends text to the active application as is (while SendKeys also supports sending special keys). |
|  [DoSetScreenResolution](#dosetscreenresolution) | Sets screen resolution. |
|  [DoSleep](#dosleep) | Delays/pauses execution for a given number of milliseconds (1000 = 1 second). |
|  [DoTrim](#dotrim) | Strips leading and trailing white-space from a string, replaces sequences of whitespace characters by a single space, and returns the resulting string. |
|  [DoTypePassword](#dotypepassword) | Types encrypted password into a control which has a focus. |
|  [DoVerticalScroll](#doverticalscroll) | Simulates mouse vertical wheel scroll gesture. |
|  [DoWaitFor](#dowaitfor) | Waits for object specified by objectId to become available. |
|  [DoWaitForProperty](#dowaitforproperty) | Waits for specified value of object's property. |
|  [DoWaitForWindow](#dowaitforwindow) | Waits for window specified by title/class name to become available. |
|  [GetClipboardText](#getclipboardtext) | Reads text stored in the windows clipboard. |
|  [GetCurrentDir](#getcurrentdir) | Gets current directory path. |
|  [GetFileAsByteArray](#getfileasbytearray) | Reads file and returns its content as array of bytes. |
|  [GetFirstDayOfWeek](#getfirstdayofweek) | Returns first day of week for current user. |
|  [GetFullPath](#getfullpath) | Constructs an absolute file name using working directory (WORKDIR) of the test. |
|  [GetOsOwner](#getosowner) | Reads OS registered owner from the registry. |
|  [GetOsPath](#getospath) | Returns OS root path. |
|  [GetOsType](#getostype) | Reads OS type from the registry. |
|  [GetOsVersion](#getosversion) | Reads OS service pack version from the registry. |
|  [GetProperty](#getproperty) | Reads property value from file 'optConfig' if set, or from %WORKDIR%\Config.json otherwise. |
|  [GetRapiseVersion](#getrapiseversion) | Reads Rapise version. |
|  [GetSpecialFolderPath](#getspecialfolderpath) | Returns path to a special folder specified by one of possible values. |
|  [GetTestCasePath](#gettestcasepath) | Finds full path to a Test Case. |
|  [SetClipboardText](#setclipboardtext) | Updates clipboard text |
|  [SetConfigPath](#setconfigpath) | Set default path for config file instead of default %WORKDIR%\Config.json. |
|  [SetFileAsByteArray](#setfileasbytearray) | Creates or rewrites file and fills with contents of the provided byte array. |
|  [SetProperty](#setproperty) | Sets property value to file 'optConfig' if set, or to %WORKDIR%\Config.json otherwise. |
|  [SetWindowPosition](#setwindowposition) | Change position of the window with the specified title (and class, if specified). |
|  [SetWindowSize](#setwindowsize) | Change size of the window with the specified title (and class, if specified). |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="_DoLoadObjects"></a>    
#### _DoLoadObjects



```javascript
Global._DoLoadObjects(objectsFilePath, checkDuplicates, addToMap)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| objectsFilePath | string |   |
| checkDuplicates | bool |   |
| addToMap | bool |   |





<a name="see.also.global._doloadobjects"></a>

<a name="DoAnalogPlay"></a>    
#### DoAnalogPlay

Performs Analog Playback of events recorded in a file.

```javascript
Global.DoAnalogPlay(path, left, top)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  This is a path to a file with recorded analog events. |
| left | number |  X-coordinate of top-left corner of the analog area. |
| top | number |  Y-coordinate of the top-left corner of the analog area. |





<a name="see.also.global.doanalogplay"></a>

<a name="DoAppActivate"></a>    
#### DoAppActivate

Activates window with the specified title. I.e. Global.DoAppActivate("Calculator")
will bring running instance (if any) of Windows Calculator to the foreground.

```javascript
Global.DoAppActivate(title)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| title | string |  Title of an application window. |





See:

<a displaytype="text" defaultstyle="true" type="weblink" href="http://msdn.microsoft.com/en-us/library/wzcddbek%28VS.85%29.aspx" target="_blank" styleclass="Normal" translate="true">MSDN Article for AppActivate</a>


<a name="see.also.global.doappactivate"></a>

<a name="DoClick"></a>    
#### DoClick

Performs mouse click at the current position.

```javascript
Global.DoClick(clickType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| clickType | string |  Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |





<a name="see.also.global.doclick"></a>

<a name="DoCmd"></a>    
#### DoCmd

Executes a BAT/CMD file specified in cmdLine. Optionally one may specify working dir. Requires Rapise 6.4+

```javascript
Global.DoCmd(cmdLine, wrkDir, wait, show)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cmdLine | string |  Command line to execute. Contains path to a batch file and parameters. |
| wrkDir | string |  Working directory. By default it is a directory of the test.<br>Optional, Default: ".". |
| wait | boolean |  If `true` - Wait until batch process exit. If `false` - immediately proceed to the next test steps.<br>Optional, Default: "true". |
| show | boolean |  If `true` - maximize the command line window. If `false` - minimize the command line window.<br>Optional, Default: "true". |




**Returns:**

number: Error code returned by the batch process. 0 - indicates success if `wait` is `true`.



<a name="see.also.global.docmd"></a>

<a name="DoCompareJsObjects"></a>    
#### DoCompareJsObjects

Compares two JavaScript objects and prints differences to the report.

```javascript
Global.DoCompareJsObjects(msg, obj1, obj2)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| msg | string |  Message to write into report. |
| obj1 | object |  First object. |
| obj2 | object |  Second object. |




**Returns:**

boolean: 'true' if two objects are equal, 'false' otherwise.



<a name="see.also.global.docomparejsobjects"></a>

<a name="DoDecrypt"></a>    
#### DoDecrypt

Decrypts a piece of text.

```javascript
Global.DoDecrypt(encryptedText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| encryptedText | string |  Text to decrypt. |




**Returns:**

string: Decrypted text.



<a name="see.also.global.dodecrypt"></a>

<a name="DoEncrypt"></a>    
#### DoEncrypt

Encrypts a piece of text.

```javascript
Global.DoEncrypt(plainText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| plainText | string |  Text to encrypt. |




**Returns:**

string: Encrypted text.



<a name="see.also.global.doencrypt"></a>

<a name="DoFindProcess"></a>    
#### DoFindProcess

Finds a process by executable path and, maybe, part of command line. Requires Rapise 8.1.29.39+

```javascript
Global.DoFindProcess(exeName, partOfCmd)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| exeName | string |  Command line to an executable with parameters. |
| partOfCmd | string |  Command line (or regular expression)<br>Optional, Default: "". |




**Returns:**

number: ID of the new process (positive number) or an error code (negative number)



<a name="see.also.global.dofindprocess"></a>

<a name="DoHorizontalScroll"></a>    
#### DoHorizontalScroll

Simulates mouse horizontal wheel scroll gesture. Requires Rapise 6.5+

```javascript
Global.DoHorizontalScroll(scrollAmountInClicks)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| scrollAmountInClicks | number |  The amount to scroll in clicks. A positive value indicates that the wheel was rotated to the right; a negative value indicates that the wheel was rotated to the left. |





<a name="see.also.global.dohorizontalscroll"></a>

<a name="DoInvokeTest"></a>    
#### DoInvokeTest

Invokes another test (aka subtest). The subtest should have the
set of libraries as calling test. Otherwise it may lead to a conflict.

```javascript
Global.DoInvokeTest(pathToTest, optionalParams)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| pathToTest | string |  Path to .sstest file. |
| optionalParams | object |  Parameters to pass into entry point Test() function of the subtest. I.e. it is called as Test(optionalParams).<br>Optional, Default: "[object Object]". |




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
			g_browserLibrary: 'Selenium - Chrome'
		},
		"THR02": {
			g_browserLibrary: 'Selenium - Edge'
		}
	}
);
```

```javascript
Global.DoInvokeTestParallel(testPath, threads, commonParams)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| testPath | string |  Path to .sstest to execute. |
| threads | object |  Structure, defining parallel threads to execute. |
| commonParams | object |  Object containing {name:'value',...} pairs to be passed as parameters to all tests.<br>Optional. |




**Returns:**

boolean: true, if execution finished with exit code 0 (all tests executed successfully)



<a name="see.also.global.doinvoketestparallel"></a>

<a name="DoKillByName"></a>    
#### DoKillByName

Terminates a given process.

```javascript
Global.DoKillByName(processName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| processName | string |  Executable name to kill (such as 'iexplore.exe'). |




**Returns:**

boolean: 'true' if the process was terminated, 'false' otherwise.



<a name="see.also.global.dokillbyname"></a>

<a name="DoKillByPid"></a>    
#### DoKillByPid

Terminates a given process or the last process created by DoLaunch if 'pid' is not specified.

```javascript
Global.DoKillByPid(pid)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| pid | number |  ID of the process.<br>Optional. |




**Returns:**

boolean: 'true' if the process was terminated, 'false' otherwise.



<a name="see.also.global.dokillbypid"></a>

<a name="DoLaunch"></a>    
#### DoLaunch

Executes a command specified by the cmdLine parameter. Use to start external desktop apllications. Optionally specify the working dir and window name
to attach if the application is already running. Example: `Global.DoLaunch("calc.exe")`

```javascript
Global.DoLaunch(cmdLine, wrkDir, attachIfExists, attachToWindow, wait, parentProcess)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cmdLine | string |  Command line with the executable file name/path and parameters. |
| wrkDir | string |  Working directory. By default it is a directory of the test.<br>Optional, Default: ".". |
| attachIfExists | boolean |  Try to find a process with the same executable path instead of launching it.<br>Optional, Default: "false". |
| attachToWindow | string |  When attachIfExists is 'true' this parameter may be used to specify top window name to find a process to attach to.<br>Optional, Default: "". |
| wait | bool |  Try to find a process with the same executable path instead of launching it. Requires Rapise 8.1.29.39+<br>Optional, Default: "false". |
| parentProcess | number \| string |  Optional parent process. By default parent process will be a current script's process. May be ID or executable path to the process. Requires Rapise 8.1.29.39+<br>Optional, Default: "0". |




**Returns:**

number: ID of the new process (positive number) or an error code (negative number)



<a name="see.also.global.dolaunch"></a>

<a name="DoLoadObjects"></a>    
#### DoLoadObjects

Loads objects from external .objects.js file.

```javascript
Global.DoLoadObjects(objectsFilePath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| objectsFilePath | string |  Path to *.objects.js file. |




**Returns:**

object: saved_script_objects or null if the load was unsuccessful.



<a name="see.also.global.doloadobjects"></a>

<a name="DoMaximizeWindow"></a>    
#### DoMaximizeWindow

Maximizes window that matches given title and class name. Requires Rapise 7.2+

```javascript
Global.DoMaximizeWindow(title, className)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| title | string |  Title of a window to search for. Use exact value or `regex:` expression. |
| className | string |  Class name of a window to search for. Use exact value or `regex:` expression. Empty or null value matches any class name.<br>Optional, Default: "". |




**Returns:**

boolean: `true` if window was found, otherwise `false`.



<a name="see.also.global.domaximizewindow"></a>

<a name="DoMessageBox"></a>    
#### DoMessageBox

Shows message box (popup message) to a user.

`buttons` is a value or a sum of values that specifies the number and type of buttons to display, the icon
style to use, the identity of the default button, and the modality of the message box. Default value is 0.

```
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
```

We can divide the buttons values into four groups: The first group  (0–5) describes the buttons to be displayed in the
message box, the second group (16, 32, 48, 64) describes the icon style, the third group (0, 256, 512, 768) indicates
which button is the default; and the fourth group (0, 4096) determines the modality of the message box. When adding
numbers to create a final value for the buttons parameter, use only one number from each group.

The function returns a number representation of a button pressed by user:
	
```
	vbOK = 1 - OK button was clicked. 
	vbCancel = 2 - Cancel button was clicked. 
	vbAbort = 3 - Abort button was clicked. 
	vbRetry = 4 - Retry button was clicked. 
	vbIgnore = 5 - Ignore button was clicked. 
	vbYes = 6 - Yes button was clicked. 
	vbNo = 7 - No button was clicked. 
```

```javascript
Global.DoMessageBox(prompt, buttons)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| prompt | string |  Message to display. |
| buttons | number |  Buttons to show. Possible values: 0, 1, 2, 3, 4, 5, 16, 32, 48, 64, 0, 256, 512, 768, 0, 4096<br>Optional, Default: "0". |




**Returns:**

number: A number representation of a button pressed by user.



<a name="see.also.global.domessagebox"></a>

<a name="DoMinimizeWindow"></a>    
#### DoMinimizeWindow

Minimizes window that matches given title and class name. Requires Rapise 7.2+

```javascript
Global.DoMinimizeWindow(title, className)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| title | string |  Title of a window to search for. Use exact value or `regex:` expression. |
| className | string |  Class name of a window to search for. Use exact value or `regex:` expression. Empty or null value matches any class name.<br>Optional, Default: "". |




**Returns:**

boolean: `true` if window was found, otherwise `false`.



<a name="see.also.global.dominimizewindow"></a>

<a name="DoMouseMove"></a>    
#### DoMouseMove

Moves mouse to the specified position.

```javascript
Global.DoMouseMove(x, y, duration)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  Absolute X-coordinate of the target mouse position. |
| y | number |  Absolute Y-coordinate of the target mouse position. |
| duration | number |  Mouse move duration (milliseconds). If 0 - do immediate move.<br>Optional, Default: "0". |





<a name="see.also.global.domousemove"></a>

<a name="DoPlayManual"></a>    
#### DoPlayManual

Executes a manual test. Results are shown in the report of the calling test.

```javascript
Global.DoPlayManual(rmtFilePath, rmtParams)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rmtFilePath | string |  Path to manual test (.rmt) file. |
| rmtParams | object |  Additional parameters to pass to the manual test executor.<br>Optional. |




**Returns:**

boolean: 'true' if the manual test passed, 'false' otherwise.



<a name="see.also.global.doplaymanual"></a>

<a name="DoRestoreWindow"></a>    
#### DoRestoreWindow

Restores window that matches given title and class name. Requires Rapise 7.2+

```javascript
Global.DoRestoreWindow(title, className)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| title | string |  Title of a window to search for. Use exact value or `regex:` expression. |
| className | string |  Class name of a window to search for. Use exact value or `regex:` expression. Empty or null value matches any class name.<br>Optional, Default: "". |




**Returns:**

boolean: `true` if window was found, otherwise `false`.



<a name="see.also.global.dorestorewindow"></a>

<a name="DoRunTest"></a>    
#### DoRunTest

Executes a given test in isolated environment (new process is created). Requires Rapise 8.1+.

```javascript
Global.DoRunTest(testPath, optionalParams)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| testPath | string |  Path to .sstest to execute. |
| optionalParams | object |  Object containing {name:'value',...} pairs to be passed as parameters to the test.<br>Optional. |





<a name="see.also.global.doruntest"></a>

<a name="DoRunTestSet"></a>    
#### DoRunTestSet

Executes a test set. Results are shown in the report of the calling test.

```javascript
Global.DoRunTestSet(testSetFilePath, testSetParams)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| testSetFilePath | string |  Path to a test set file. |
| testSetParams | object |  Additional parameters to pass for each test in the test set.<br>Optional. |





<a name="see.also.global.doruntestset"></a>

<a name="DoSendKeys"></a>    
#### DoSendKeys

Sends series of keystrokes to a currently focused application.

```javascript
Global.DoSendKeys(keys)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| keys | string |  Keystrokes, including special characters and control symbols. |





<a name="see.also.global.dosendkeys"></a>

<a name="DoSendText"></a>    
#### DoSendText

Sends text to the active application as is (while SendKeys also supports sending special keys). Requires Rapise 6.5+

```javascript
Global.DoSendText(text)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| text | string |  Text to input. |





<a name="see.also.global.dosendtext"></a>

<a name="DoSetScreenResolution"></a>    
#### DoSetScreenResolution

Sets screen resolution. Use to run UI tests in unattended RDP sessions.

```javascript
Global.DoSetScreenResolution(width, height)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| width | number |  Screen width in pixels |
| height | number |  Screen height in pixels |





<a name="see.also.global.dosetscreenresolution"></a>

<a name="DoSleep"></a>    
#### DoSleep

Delays/pauses execution for a given number of milliseconds (1000 = 1 second). Use to wait given amount of time and then continue running the test.

```javascript
Global.DoSleep(millis)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| millis | number |  Number of milliseconds to wait/sleep. |





<a name="see.also.global.dosleep"></a>

<a name="DoTrim"></a>    
#### DoTrim

Strips leading and trailing white-space from a string, replaces sequences of whitespace characters by a single space, and returns the resulting string. 
Whitespace characters are [\\f\\n\\r\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff].

```javascript
Global.DoTrim(str, global, trimChars)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |  String to trim. |
| global | boolean |  If 'true' then global trim is performed (whitespaces in the middle are substituted with a single space). If 'false' only ends are trimmed.<br>Optional, Default: "false". |
| trimChars | string |  String with each char to be subject for trim.<br>Optional. |




**Returns:**

string: Trimmed string.



<a name="see.also.global.dotrim"></a>

<a name="DoTypePassword"></a>    
#### DoTypePassword

Types encrypted password into a control which has a focus.

```javascript
Global.DoTypePassword(encryptedPassword)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| encryptedPassword | string |  Password to type. Encrypted. |




**Returns:**

string: 'true'



<a name="see.also.global.dotypepassword"></a>

<a name="DoVerticalScroll"></a>    
#### DoVerticalScroll

Simulates mouse vertical wheel scroll gesture. Requires Rapise 6.5+

```javascript
Global.DoVerticalScroll(scrollAmountInClicks)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| scrollAmountInClicks | number |  The amount to scroll in clicks. A positive value indicates that the wheel was rotated forward, away from the user; a negative value indicates that the wheel was rotated backward, toward the user. |





<a name="see.also.global.doverticalscroll"></a>

<a name="DoWaitFor"></a>    
#### DoWaitFor

Waits for object specified by objectId to become available. Function returns if object
was found or timeout.

```javascript
Global.DoWaitFor(objectId, timeout, sleepTimeIfFound)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| objectId | objectid |  Id of an object to wait for. |
| timeout | number |  Maximum time to wait (milliseconds).<br>Optional, Default: "10000". |
| sleepTimeIfFound | number |  Wait time (milliseconds) after object is found.<br>Optional, Default: "0". |




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
Global.DoWaitForProperty(obj, getterName, propValue, timeout, params)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| obj | objectid \| SeSObject |  Id of an object to wait for or object itself. |
| getterName | string |  Property getter function name. |
| propValue | string \| number \| boolean \| function |  Desired property value or callback function (see description). |
| timeout | number |  Maximum time to wait (milliseconds).<br>Optional, Default: "10000". |
| params | array \| string \| number \| boolean |  Parameters for property getter function.<br>Optional. |




**Returns:**

SeSObject | <br>boolean: Found object or 'false'.



<a name="see.also.global.dowaitforproperty"></a>

<a name="DoWaitForWindow"></a>    
#### DoWaitForWindow

Waits for window specified by title/class name to become available. Function returns if window
was found or timeout. Requires Rapise 7.2+

```javascript
Global.DoWaitForWindow(title, className, timeout)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| title | string |  Title of a window to wait for. Use exact value or `regex:` expression. |
| className | string |  Class name of a window to wait for. Use exact value or `regex:` expression. Empty or null value matches any class name.<br>Optional, Default: "". |
| timeout | number |  Maximum time to wait (milliseconds).<br>Optional, Default: "10000". |




**Returns:**

boolean: `true` if window was found, otherwise `false`.



<a name="see.also.global.dowaitforwindow"></a>

<a name="GetClipboardText"></a>    
#### GetClipboardText

Reads text stored in the windows clipboard.

```javascript
Global.GetClipboardText()
```




**Returns:**

string: Clipboard text



<a name="see.also.global.getclipboardtext"></a>

<a name="GetCurrentDir"></a>    
#### GetCurrentDir

Gets current directory path.

```javascript
Global.GetCurrentDir()
```




**Returns:**

string: Path of the current directory.



<a name="see.also.global.getcurrentdir"></a>

<a name="GetFileAsByteArray"></a>    
#### GetFileAsByteArray

Reads file and returns its content as array of bytes. May be useful for binary files and for passing data to web services.

```javascript
Global.GetFileAsByteArray(fileName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |  Filename to read (recommended to use absolute file name). |




**Returns:**

object: Array of bytes.



<a name="see.also.global.getfileasbytearray"></a>

<a name="GetFirstDayOfWeek"></a>    
#### GetFirstDayOfWeek

Returns first day of week for current user.

```javascript
Global.GetFirstDayOfWeek()
```




**Returns:**

number: 0 - Sunday, 1 - Monday.



<a name="see.also.global.getfirstdayofweek"></a>

<a name="GetFullPath"></a>    
#### GetFullPath

Constructs an absolute file name using working directory (WORKDIR) of the test.

```javascript
Global.GetFullPath(fileName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |  Name of a file. |




**Returns:**

string: Absolute file name.



<a name="see.also.global.getfullpath"></a>

<a name="GetOsOwner"></a>    
#### GetOsOwner

Reads OS registered owner from the registry.

```javascript
Global.GetOsOwner()
```




**Returns:**

string: OS registered owner.



<a name="see.also.global.getosowner"></a>

<a name="GetOsPath"></a>    
#### GetOsPath

Returns OS root path.

```javascript
Global.GetOsPath()
```




**Returns:**

string: OS root path without the trailing backslash, e.g. 'C:\Windows'.



<a name="see.also.global.getospath"></a>

<a name="GetOsType"></a>    
#### GetOsType

Reads OS type from the registry.

```javascript
Global.GetOsType()
```




**Returns:**

string: OS type string.



<a name="see.also.global.getostype"></a>

<a name="GetOsVersion"></a>    
#### GetOsVersion

Reads OS service pack version from the registry.

```javascript
Global.GetOsVersion()
```




**Returns:**

string: Service pack version.



<a name="see.also.global.getosversion"></a>

<a name="GetProperty"></a>    
#### GetProperty

Reads property value from file 'optConfig' if set, or from %WORKDIR%\Config.json otherwise.

```javascript
Global.GetProperty(name, defValue, configPath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Name of a property |
| defValue | string \| number \| boolean |  Default value to return if property does not exist<br>Optional. |
| configPath | string |  Path to options file (.json, .xlsx).<br>Optional. |




**Returns:**

string | <br>number | <br>boolean: Property value. If a property does not exist then defValue is returned. If defValue is not set then null is returned.



<a name="see.also.global.getproperty"></a>

<a name="GetRapiseVersion"></a>    
#### GetRapiseVersion

Reads Rapise version. If 'optMinVersion' is specified, then returns true/false depending on 'optMinVersion' less than actual Rapise version.

```javascript
Global.GetRapiseVersion(optMinVersion)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| optMinVersion | string |  Minimum version to check<br>Optional. |




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
Global.GetSpecialFolderPath(folder)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| folder | string |  Folder Id. Possible values: "ApplicationData", "CommonApplicationData", "CommonProgramFiles", "Cookies", "Desktop", "DesktopDirectory", "Favorites", "History", "InternetCache", "LocalApplicationData", "MyComputer", "MyDocuments", "MyMusic", "ProgramFiles", "Programs", "Recent", "SendTo", "StartMenu", "Startup", "System", "Templates" |




**Returns:**

string: System specified folder path without the trailing backslash, e.g. 'C:\Program Files'.



<a name="see.also.global.getspecialfolderpath"></a>

<a name="GetTestCasePath"></a>    
#### GetTestCasePath

Finds full path to a Test Case.
The Path is resolved for file path or for TC alias name.

```javascript
Global.GetTestCasePath(pathToTest)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| pathToTest | string |  Path to .sstest file or Test Case alias name. |




**Returns:**

string: path to .sstest



<a name="see.also.global.gettestcasepath"></a>

<a name="SetClipboardText"></a>    
#### SetClipboardText

Updates clipboard text

```javascript
Global.SetClipboardText(txt)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| txt | string |  Text to store into clipboard. |




**Returns:**

boolean: 'true' when clipboard is set.



<a name="see.also.global.setclipboardtext"></a>

<a name="SetConfigPath"></a>    
#### SetConfigPath

Set default path for config file instead of default %WORKDIR%\Config.json. Supports .xlsx and .json file format. This path is used by default for further calls to Global.GetProperty and Global.SetProperty

```javascript
Global.SetConfigPath(defPath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| defPath | string |  New config path, i.e. %WORKDIR%\Config.xlsx |




**Returns:**

string: Previous config path



<a name="see.also.global.setconfigpath"></a>

<a name="SetFileAsByteArray"></a>    
#### SetFileAsByteArray

Creates or rewrites file and fills with contents of the provided byte array.

```javascript
Global.SetFileAsByteArray(fileName, bytes)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |  Filename to write (recommended to use absolute file name). |
| bytes | array |  Array of bytes to write. |




**Returns:**

number: Number of bytes written.



<a name="see.also.global.setfileasbytearray"></a>

<a name="SetProperty"></a>    
#### SetProperty

Sets property value to file 'optConfig' if set, or to %WORKDIR%\Config.json otherwise. If the file does not exist it will be created.

```javascript
Global.SetProperty(name, value, configPath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Name of a property. |
| value | string \| number \| boolean |  Value to set. |
| configPath | string |  Path to options file (.json, .xlsx).<br>Optional. |




**Returns:**

boolean: 'true' if property value set successfully, 'false' otherwise.



<a name="see.also.global.setproperty"></a>

<a name="SetWindowPosition"></a>    
#### SetWindowPosition

Change position of the window with the specified title (and class, if specified).

```javascript
Global.SetWindowPosition(x, y, windowTitle, windowClass)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  Position left offset in pixels. |
| y | number |  Position top offset in pixels. |
| windowTitle | string |  String or regular expression to match window title. |
| windowClass | string |  String or regular expression to match window class.<br>Optional, Default: "regex:.*". |





<a name="see.also.global.setwindowposition"></a>

<a name="SetWindowSize"></a>    
#### SetWindowSize

Change size of the window with the specified title (and class, if specified).

```javascript
Global.SetWindowSize(width, height, windowTitle, windowClass)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| width | number |  New width in pixels. |
| height | number |  New height in pixels. |
| windowTitle | string |  String or regular expression to match window title. |
| windowClass | string |  String or regular expression to match window class.<br>Optional, Default: "regex:.*". |





<a name="see.also.global.setwindowsize"></a>

  

