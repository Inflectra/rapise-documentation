# Visual Studio

This section describes how to execute Rapise tests from within the Visual Studio Unit MS-Test unit testing framework. It also includes information on using with Visual Studio Test Explorer and Visual Studio Team Services (formerly known as Microsoft Team Foundation Server (TFS)).

## Unit Test Mapping

Rapise integrates with Visual Studio at [Unit Test](https://www.visualstudio.com/en-us/docs/test/developer-testing/getting-started/getting-started-with-developer-testing) level.

Create a Unit Test project in Visual Studio, add a unit test and a test method. In the References section add the DLL:

    c:\\Program Files (x86)\\Inflectra\\Rapise\\Extensions\\UnitTesting\\VSUnit\\SeSVSUnit\\Bin\\Release\\SeSVSUnit.dll

In a test method specify absolute path to a Rapise test and pass `TextContext` parameter to `Rapise.TestExecute` function:

```C#
namespace UnitTestProject1
{
    [TestClass] 
    public class UnitTest1
    {
        public TestContext TestContext { get; set; }

        [TestMethod, TestCategory("browser")]
        public void CreateNewBook()
        {
            Rapise.TestExecute(@"c:\\Demo\\Framework\\CreateNewBook\\CreateNewBook.sstest", TestContext);
        }
    }
}
```

## Parameters

To pass parameters to Rapise test create [.runsettings](https://msdn.microsoft.com/en-us/library/jj635153.aspx) file. Each parameter with name starting with `g_` will be passed to Rapise via command line.

Here is an example of selecting a browser to use for execution of cross-browser tests:

```xml
<?xml version="1.0" encoding="utf-8"?>
<RunSettings>
  <!-- Parameters used by tests at runtime -->
  <TestRunParameters>
    <Parameter name="g_browserLibrary" value="Chrome HTML" />
  </TestRunParameters>
</RunSettings>
```

## Visual Studio Test Explorer

Once Rapise tests are mapped to unit tests one can use Visual Studio Test Explorer to run tests and analyze results.

![TestExplorer](./img/visual_studio1.png)

Press Output link (highlighted) to view test run results.

![TestOutput](./img/visual_studio2.png)

- last.tap - is a test report in [Test Anything Protocol](https://testanything.org/) format (human readable). Click to open in any Text Viewer/Editor.
- last.trp - is a test report in Rapise format. Click to open in Rapise.

One can apply `.runsettings` file to use for execution:

![RunSettings](./img/visual_studio3.png)

## Visual Studio Team Services

In Visual Studio Team Services one can [run unit tests after making a build](https://www.visualstudio.com/en-us/docs/test/continuous-testing/test-build).

![BuildsVSTS](./img/visual_studio4.png)

Build definition contains predefined steps:

![BuildDefinition](./img/visual_studio5.png)

Here is an example configuration of the Test Assemblies step:

![TestAssembliesStep](./img/visual_studio6.png)

- **Test Assembly** field contains a wildcard mask that selects unit tests from matching DLLs only
- In **Test Filter criteria** one can select tests by TestCategory which is an attribute of a Test Method:

```C#
[TestMethod, TestCategory("browser")]
public void CreateNewBook() 
{
    Rapise.TestExecute(@"c:\\Demo\\Framework\\CreateNewBook\\CreateNewBook.sstest", TestContext); 
}
```

- **Run Settings File** is a link to [.runsettings](https://msdn.microsoft.com/en-us/library/jj635153.aspx) file.
- In **Override TestRun Parameters** one can override values of the parameters in `.runsettings` file.

## Windows Agent for Test Execution

VSTS can run tests in a hosted environment, but it does not contain Rapise. So most likely you will need to run tests inside your computer network. Download and connect [Windows Agent](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-windows).
One can configure several agent pools to run tests in different environments:

![AgentPools](./img/visual_studio7.png)

## See Also

- [Visual Studio Test Explorer](https://msdn.microsoft.com/en-us/library/hh270865.aspx)
- [Visual Studio Team Services](https://www.visualstudio.com/team-services/)
