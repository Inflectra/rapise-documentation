# Command Line

## Purpose

Rapise test scripts can be run from the **command line**.

## Usage

### Using play.bat

Simplest way to run a test directly is:

```cmd
"C:\Program Files (x86)\Inflectra\Rapise\Engine\play.bat" <path_to_sstest_file>
```

If you want to pass additional parameters as `JSON` then:

```cmd
"C:\Program Files (x86)\Inflectra\Rapise\Engine\play.bat" <path_to_sstest_file> -config:LastConfig.json.user
```

In this case, the `LastConfig.json.user` file contains values from the last execution by Rapise itself, stored in the framework root. It contains the framework [parameter](/Guide/Frameworks/parameters.md) values, such as:

```json
{
  "Browser": "Selenium - Chrome",
  "Mode": "Staging"
}
```

You may customize this `JSON` file and point to it, i.e.:

```cmd
"C:\Program Files (x86)\Inflectra\Rapise\Engine\play.bat" <path_to_sstest_file> -config:CustomParams.json
```

It is also possible to point to a test case folder rather than to `Test.sstest`, i.e.:

```cmd
"C:\Program Files (x86)\Inflectra\Rapise\Engine\play.bat" "TestCases\Author Management\Create New Author" -config:LastConfig.json.user
```

### Using SeSExecutor.js

The form of the command is:

`%windir%\syswow64\cscript.exe "C:\Program Files (x86)\Inflectra\Rapise\Engine\SeSExecutor.js" <path_to_sstest_file> [evals*]`

where

*path_to_sstest_file* is a path to sstest file, e.g.  "C:\\Program Files\\Inflectra\\Rapise\\Samples\\SmarteATM\\SmarteATM.sstest"

*evals* (optional) is a statement like this:

**-eval:***`varname1`*=*value1;`varname2`*=*value2;...*

*varname* is a global variable associated with an option in the [Settings Dialog](settings_dialog.md).  Global variables are prefixed with a **g_.** The global variables under the **Execution** and **Recording** headings can be found by clicking on the corresponding option in the Settings Dialog (see below):

![commandline evals](./img/command_line1.png)

Other variables include:

* `g_scriptPath`

* `g_reportPath`

* `g_objectsPath`

* `g_configPath`

* any global variable defined in the JavaScript or RVL.

Exit Code:
•   0 indicates a pass
•   1 indicates failure

## See Also

* [Settings Dialog](settings_dialog.md)

* [KB17](http://www.inflectra.com/Support/KnowledgeBase/KB17.aspx) Running a Rapise script from the command-line on a 64-bit machine
