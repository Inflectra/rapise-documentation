# Azure DevOps Integration v3

This section describes how to execute Rapise tests in [Azure DevOps pipelines](https://docs.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops) or locally with [Microsoft.TestPlatform](https://www.nuget.org/packages/Microsoft.TestPlatform).

## Azure DevOps

We assume that Rapise tests are stored in a Git repository and Azure DevOps pipeline is connected to it. You may run Rapise tests both on [self-hosted Windows Agents](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-windows) and [Microsoft-hosted Windows Agents](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/hosted?view=azure-devops&tabs=yaml).

In order to run Rapise tests on a Microsoft-hosted Windows Agent you need to configure Rapise Installation task. If you are running on a self-hosted Windows Agent you may install Rapise manually once and use it in every pipeline run.

### Rapise Installation Task

Download and place this PowerShell script to your Git repository:

[RapiseInstall.ps1](https://github.com/Inflectra/rapise-testadapter/blob/master/RapiseInstall.ps1)

This script downloads and installs Rapise. It also installs Rapise extension into Chrome browser. In your pipeline add a PowerShell task to execute this script. Pass Rapise version to install as a parameter.

??? example "Classic UI"
    ![Task Classic UI](./img/rapise_install_task_classic.png)

??? example "YAML"

    ```yaml
    steps:
    - task: PowerShell@2
    displayName: 'Install Rapise'
    inputs:
        targetType: filePath
        filePath: ./RapiseInstall.ps1
        arguments: '-RapiseVersion "6.5.20.21"'
    ```

### Rapise.TestAdapter

To run Rapise tests with a [Visual Studio Test](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/test/vstest?view=azure-devops) task install [Rapise.TestAdapter NuGet package](https://www.nuget.org/packages/Rapise.TestAdapter/).

#### NuGet Tool Installer

First you need to install NuGet itself. Add [NuGet tool installer](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/tool/nuget?view=azure-devops) task.

??? example "Classic UI"
    ![Task Classic UI](./img/nuget_tool_installer.png)

??? example "YAML"

    ```yaml
    steps:
    - task: NuGetToolInstaller@0
    displayName: 'Use NuGet'
    inputs:
        versionSpec: 4.4.1
    ```

#### Rapise.TestAdapter NuGet Package

 Then add [NuGet](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/package/nuget?view=azure-devops) task. Set **command** to `custom` and specify the command line:

```
install Rapise.TestAdapter -Version $(RapiseTestAdapterVersion)
```

??? example "Classic UI"
    ![Task Classic UI](./img/nuget_rapise_testadapter.png)

??? example "YAML"

    ```yaml
    steps:
    - task: NuGetCommand@2
      displayName: 'NuGet Install Rapise.TestAdapter'
      inputs:
        command: custom
        arguments: 'install Rapise.TestAdapter -Version $(RapiseTestAdapterVersion)'
    ```    

In the pipeline settings set **RapiseTestAdapterVersion** variable to the Rapise.TestAdapter version you want to install (e.g. 1.0.11).

![RapiseTestAdapterVersion Variable](./img/rapise_testadapter_version.png )

The task will install Rapise.TestAdapter into
    
```
$(Build.Repository.LocalPath)\Rapise.TestAdapter.$(RapiseTestAdapterVersion)\lib\net472
```    

### Visual Studio Test Task

To run tests you need [Visual Studio Test](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/test/vstest?view=azure-devops) task.

??? example "Classic UI"
    ![Task Classic UI](./img/visual_studio_test_task.png)

??? example "YAML"

    ```yaml
    steps:
    - task: VSTest@2
      displayName: 'VsTest - Run Rapise Tests'
      inputs:
        testAssemblyVer2: |
         $(Build.Repository.LocalPath)\Tests\*.sstest
         $(Build.Repository.LocalPath)\Tests\*\*.sstest
        runSettingsFile: '$(System.DefaultWorkingDirectory)\Pipeline\azure.runsettings'
        overrideTestrunParameters: '-g_baseURL $(Dynamics365CrmBaseURL) -g_password $(Dynamics365CrmPassword) -g_browserLibrary $(RapiseBrowserProfile)'
        pathtoCustomTestAdapters: '$(Build.Repository.LocalPath)\Rapise.TestAdapter.$(RapiseTestAdapterVersion)\lib\net472'
        platform: '$(BuildPlatform)'
        configuration: '$(BuildConfiguration)'
    ```

Make sure that path to custom test set adapters is set to

```
$(Build.Repository.LocalPath)\Rapise.TestAdapter.$(RapiseTestAdapterVersion)\lib\net472
```

Specify patterns to search for `*.sstest` files in the **test files** section (`testAssemblyVer2` in YAML).

!!! tip
    Rapise.TestAdapter also supports filtering, parameters and .runsettings files (specified via Visual Studio Test task options).
   
#### Test Filter Cirteria

Rapise.TestAdapter supports [filter criteria](https://github.com/Microsoft/vstest-docs/blob/master/docs/filter.md) based on FullyQualifiedName test property (equals to  *.sstest file name). To specify a filter set `testFiltercriteria` in YAML or `Test filter criteria` in the Classic UI task editor.

Example:

```
FullyQualifiedName~LIS
```

#### Parameters

Parameters can be set via

- .runsettings file,
- `overrideTestrunParameters` YAML option or
- **Override test run parameters** field in the Classic UI task editor.

!!! note
    Parameter names must be prefixed with **g_**.

Example:

```
-g_baseURL $(Dynamics365CrmBaseURL) -g_password $(Dynamics365CrmPassword) -g_browserLibrary $(RapiseBrowserProfile)
```

!!! note
    $(name) - references a pipeline variable

#### .runsettings

[.runsettings file](https://docs.microsoft.com/en-us/visualstudio/test/configure-unit-tests-by-using-a-dot-runsettings-file) is used to pass parameters and to enable [video recorder](https://docs.microsoft.com/en-us/visualstudio/test/configure-unit-tests-by-using-a-dot-runsettings-file?view=vs-2019#videorecorder-data-collector).

Example:

```xml
<?xml version="1.0" encoding="utf-8"?>
<RunSettings>
  <!-- Parameters used by tests at runtime -->
  <TestRunParameters>
    <Parameter name="g_browserLibrary" value="Chrome" />
  </TestRunParameters>

  <DataCollectionRunSettings>
    <DataCollectors>
      <DataCollector uri="datacollector://microsoft/VideoRecorder/1.0" assemblyQualifiedName="Microsoft.VisualStudio.TestTools.DataCollection.VideoRecorder.VideoRecorderDataCollector, Microsoft.VisualStudio.TestTools.DataCollection.VideoRecorder, Version=15.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a" friendlyName="video" enabled="True">
        <Configuration>
          <MediaRecorder sendRecordedMediaForPassedTestCase="true"  xmlns="">           
            <ScreenCaptureVideo bitRate="512" frameRate="2" quality="20" />
          </MediaRecorder>
        </Configuration>
      </DataCollector>
    </DataCollectors>
  </DataCollectionRunSettings>  
  
</RunSettings>
```

### Publish Test Results

To publish test results (for later review and downloading) use [Publish Build Artifacts](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/publish-build-artifacts?view=azure-devops) task. Execution results are copied to `$(Agent.TempDirectory)\TestResults`.

??? example "Classic UI"
    ![Task Classic UI](./img/publish_testresults.png)

??? example "YAML"
   
    ```yaml
    steps:
    - task: PublishBuildArtifacts@1
      displayName: 'Publish Artifact: TestResults'
      inputs:
        PathtoPublish: '$(Agent.TempDirectory)\TestResults'
        ArtifactName: TestResults
    ```

### Pipeline Example

As a result of pipeline configuration you may end up with something like this:

??? example "Classic UI"
    ![Pipeline Example](./img/azure_pipeline_example.png)

### Self-hosted Windows Agents

Azure DevOps can run tests in a hosted environment as well. If you plan to run tests inside your computer network download and connect [Self-hosted Windows Agent](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-windows).

### Logs and Reports

After every execution of the Visual Studio Test task you will get logs and reports.

??? example "Log"
    ![Azure Logs](./img/azure_pipeline_execution_log.png)

??? example "Summary"
    ![Azure Report](./img/azure_pipeline_execution_summary.png)

You can also see an individual report of a test (with attachments).

??? example "Attachments"
    ![Azure Details](./img/azure_pipeline_execution_test_attachments.png)

Attachments include reports in Test Anything Protocol (TAP) and Rapise (TRP) formats, output and error logs and video recording (if enabled in .runsettings).

## Run Tests with VSTest.Console.exe

It is also possible to run Rapise tests on a VM that has [VSTest.Console.exe](https://docs.microsoft.com/en-us/visualstudio/test/vstest-console-options?view=vs-2019) installed.

#### Setup Microsoft.TestPlatform on a VM

Let's assume that the working folder is `C:\Tools`.

1. Download and install [NuGet](https://www.nuget.org/downloads).
2. Install [Microsoft.TestPlatform](https://www.nuget.org/packages/Microsoft.TestPlatform) with a command
    ```
    nuget install Microsoft.TestPlatform
    ```
Find `VSTest.Console.exe` in `C:\Tools\Microsoft.TestPlatform.16.7.1\tools\net451\Common7\IDE\Extensions\TestPlatform`. Add this folder to the PATH environment variable.

3. Install Rapise.TestAdapter

    ```
    nuget install Rapise.TestAdapter
    ```
    
4. You may now create a .cmd file and put it near Rapise tests. E.g.

    ```
    vstest.console.exe /TestAdapterPath:C:\Tools\Rapise.TestAdapter.1.0.11\lib\net472 /Settings:local.runsettings /TestCaseFilter:FullyQualifiedName~LIS *\*.sstest
    ```

## See Also

- [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/)
- [Rapise.TestAdapter on GitHub](https://github.com/Inflectra/rapise-testadapter)
- [Rapise.TestAdapter NuGet package](https://www.nuget.org/packages/Rapise.TestAdapter/)