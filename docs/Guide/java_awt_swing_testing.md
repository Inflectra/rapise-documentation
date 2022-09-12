# Java AWT/Swing Testing

## Purpose

Rapise supports the testing of Java applications using either the Abstract Window Toolkit (AWT) or Swing graphic user interface toolkits. For maximum flexibility, Rapise can connect to your choice of JVM.

## Supported Java Versions

The Rapise Java Bridge is currently compatible with any version of the JRE, from Java 3 to Java 18.

For Java 9 and above, Rapise Java Bridge works in Windows Enterprise and non-Enterprise editions if the application is running with Java JDK. For applications running with Java JRE, Rapise Java Bridge works only in Windows editions other than Enterprise.

## Java Bridge Installation

The most flexible way to run a Java application with automation is to modify the command line. This can be done with a `.bat` file containing the necessary changes to the command line or to the environment variables.

For versions of Java 8 or less it is also possible to automatically install Rapise Java Bridge as an extension. Installing the extension affects all applications launched by this Java instance.

### Manual Installation (all Java versions)

#### Changing the Command Line

If you application is executed explicitly, i.e.:

```cmd
java -cp . org.sample.MyButton
```

Then what you need is to add the following values:

```cmd
set RAPISE_PATH=c:\Program Files (x86)\Inflectra\Rapise
set EXT_PATH=%RAPISE_PATH%\Extensions\JavaWrapper
set EXT_JARS=%EXT_PATH%\json.jar;%EXT_PATH%\jaccess.jar;%EXT_PATH%\smartestudio-bridge.jar
set EXT_OPTS=-Djavax.accessibility.assistive_technologies=com.smartesoft.smartestudio.accessibility.AccessBridge

java.exe "%EXT_OPTS%" -cp "%EXT_JARS%";. org.sample.MyButton
```

If your application is executed using the JAR file, i.e.:

```cmd
java -jar applet.jar
```

Then you need to figure out `applet.jar`'s main class and pass it explicitly to the application while the JAR should be a part of the classpath i.e.:

```cmd
set RAPISE_PATH=c:\Program Files (x86)\Inflectra\Rapise
set EXT_PATH=%RAPISE_PATH%\Extensions\JavaWrapper
set EXT_JARS=%EXT_PATH%\json.jar;%EXT_PATH%\jaccess.jar;%EXT_PATH%\smartestudio-bridge.jar
set EXT_OPTS=-Djavax.accessibility.assistive_technologies=com.smartesoft.smartestudio.accessibility.AccessBridge

java.exe "%EXT_OPTS%" -cp "%EXT_JARS%";applet.jar com.smartesoft.java.aut.AwtFrame
```

Note, that we removed the `-jar` switch and added `applet.jar` to the `-cp` input key.

If have a `.jar` file and need to figure out main class then you may run `cmd.exe` in a folder with `.jar` and use a command like that (just replace `applet.jar` appropriately):

```cmd
jar xf applet.jar META-INF/MANIFEST.MF & type .\META-INF\MANIFEST.MF & del /s/f/q META-INF & rmdir META-INF
```

The output should contain Main-class (marked as yellow):

![java_awt_swing_testing_jarcmd.png](./img/java_awt_swing_testing_jarcmd.png)

so you may copy it and use in the modified application launcher. 

> **Note:** Sample [Java](sample_tests.md#java) shipped with Rapise contains `x86run.cmd` that is launching the `applet.jar` with Rapise Java Bridge enabled. You may use it as a reference.

### Automatic Installation (Java 3-8)

In order to use a particular Java Virtual Machine (JVM) with Rapise you need to install Java Bridge into it. Installation process consists of several simple steps:

1. Click on the `Settings > Java` button. This will launch the Java Bridge installation dialog:

    ![options_dialog_install_java_bridge](./img/java_awt_swing_testing1.png)

2. Choose target JVM in the list of available Java machines and press Install button

3. Verify that the installation is successful

To verify that the bridge installed correctly, check that the following files have been installed inside your Java VM (typically found at `C:\Program Files (x86)\Java\jre1.x.x_xxx`):

* `lib\accessibility.properties`
* `lib\ext\jaccess.jar`
* `lib\ext\smartestudio-bridge.jar`
* `lib\ext\json.jar`

If you don't see **all three of these files** then it means the bridge was not installed correctly.

## Troubleshooting the Configuration

<!-- /* cSpell:disable */ -->
To help you make sure that your environment is correctly setup and also to help you try out Rapise, we have a sample application called AUTJava (AUT = <b>A</b>pplication <b>U</b>nder <b>T</b>est) that can be found in the folder:
<!-- /* cSpell:enable */ -->

`C:\Users\Public\Documents\Rapise\Samples\Java\AUTJAVA`

To run the application, right-click on the x86run.cmd file and choose **Run as Administrator**.

![AUTJava](./img/autjava.png)

If the application doesn't appear correctly then you may need to set the `JAVA_HOME` environment variable.

To do this, open up the Windows control panel and choose `System > Advanced System Settings`:

![EnvVariables](./img/java_awt_swing_testing3.png)

Click on the **Environment Variables** button:

![EnvVariables 2](./img/java_awt_swing_testing4.png)

Click on the option to add a **System Variable** and then add the following:

* Variable = JAVA_HOME
* Value = C:\Program Files (x86)\Java\jre1.x.x_xxx

*(you will need to match the location of your actual Java VM)*

Now you should be able to launch the AUTJava sample application.
![AUTJava](./img/autjava.png)

To verify that Rapise is configured correctly, click on the SPY menu in Rapise and choose **Java**.

Then click on the main **Spy** icon and the Java Spy will start up:
![Spy1](./img/java_awt_swing_testing5.png)

Click the ++ctrl+g++ button combination to start tracking and then move the mouse over one of the buttons in the sample application and click ++ctrl+g++ again.
You should see the following:

![Spy2-Good](./img/java_awt_swing_testing6.png)

Which shows that Rapise is able to see the AWT button (in this example) and its properties. However if you see the following instead:

![Spy2-Bad](./img/java_awt_swing_testing7.png)

it means that you didn't run the sample application using **"Run as Administrator**", close the application and try again using **"Run as Administrator"** and you will see:

![Spy2-Good](./img/java_awt_swing_testing6.png)

You are now ready to start testing your real application. Make sure to also start it using **"Run as Administrator**".

## Analyzing the Java Application using the Java Spy

With Spy you can walk along the tree of Java objects in your application.

![JavaSpy1](./img/java_awt_swing_testing8.png)

## Save to File

You can save the Spy data for a particular node and all its descendants to a text file.

![JavaSpy2](./img/java_awt_swing_testing9.png)

![JavaSpy3](./img/java_awt_swing_testing10.png)

## Reflection Information

You can save reflection information for a java class used to implement a GUI control.

![JavaSpy4](./img/java_awt_swing_testing11.png)

![JavaSpy5](./img/java_awt_swing_testing12.png)

