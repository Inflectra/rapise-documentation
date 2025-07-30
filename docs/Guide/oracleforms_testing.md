# Oracle Forms Support

## Overview
Rapise [Oracle Forms Library](../Libraries/ses_lib_oracleforms.md) enables recording, learning, and playback of various [Oracle Forms](https://www.oracle.com/application-development/technologies/forms/forms.html) controls.

![Oracle Forms Test Screen](./img/of_test.png)

## Supported Oracle Forms Versions
Rapise 7.1 supports **Oracle Forms** versions 10 and higher.

## Supported Java Versions

Integration works with Java versions 5 and higher.

## Preparing Environment

### 1. Java Support
Ensure you deploy the Rapise Java bridge as described [here](./java_awt_swing_testing.md#java-bridge-installation).

### 2. _JAVA_OPTIONS
You need to set the environment variable `_JAVA_OPTIONS`.

```
"-javaagent:C:\Program Files (x86)\Inflectra\Rapise\Extensions\JavaWrapper\Agents\PreMainAgent.jar" "-Djava.security.policy=C:\Program Files (x86)\Inflectra\Rapise\Extensions\JavaWrapper\Agents\file.policy"
```

![_JAVA_OPTIONS](./img/of_java_options.png)

It can be set through system or user environment variables. Alternatively, if your application is launched from a .bat file, you can set `_JAVA_OPTIONS` there:

```cmd
...
set _JAVA_OPTIONS="-javaagent:C:\Program Files (x86)\Inflectra\Rapise\Extensions\JavaWrapper\Agents\PreMainAgent.jar" "-Djava.security.policy=C:\Program Files (x86)\Inflectra\Rapise\Extensions\JavaWrapper\Agents\file.policy"
...
rem <launch of the application.jar>
```

Setting `_JAVA_OPTIONS` globally may affect other software or tools. Therefore, if you encounter any problems, you can remove this variable or rename it to another name.

### 3. Change the Launch URL
See [Launching Oracle Forms Application](#launching-oracle-forms-application) to learn more about the changes to the launch process that need to be made to enable testing.

## Launching Oracle Forms Application
There are two major ways your application can be started: using **Internet Explorer** or **Java Web Start** (`.jnlp` file).

In either case, you need to make sure that the application URL contains the following parameters:

### From Internet Explorer
You need to append the following parameter to the URL:
`...&record=names`

For **Internet Explorer**, this means the URL must contain this part:

![URL IE](./img/of_ie_url.png)

### From Java Web Start .jnlp File
`...&record=names`

![URL JNLP](./img/of_jnlp_url.png)

## Global Object
Rapise [Oracle Forms Library](../Libraries/ses_lib_oracleforms.md) includes the [OracleForms](../Libraries/OracleForms.md) global object. It is mostly used to deal with the main menu, notifications, and status bar.