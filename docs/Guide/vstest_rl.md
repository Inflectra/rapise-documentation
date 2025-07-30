# RapiseLauncher Extension for Azure DevOps

This section explains how to execute Rapise test sets from [Azure DevOps pipelines](https://docs.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops) using the [RapiseLauncher](spiratest_integration.md#using-rapiselauncher).

## Azure DevOps

We assume that Rapise tests are stored in a [SpiraTeam](http://spiradoc.inflectra.com/). Here we plan to configure a build pipeline for executing a SpiraTeam [Test Set](http://spiradoc.inflectra.com/Spira-User-Manual/Test-Set-Management/#test-set-details) on a [Microsoft-hosted](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/hosted?view=azure-devops&tabs=yaml) agent.

The benefit of the Microsoft-hosted agent is its configuration: it has the latest versions of web browsers, with relevant versions of WebDriver connectors. Everything is configured for the test run (updates and pop-ups disabled, etc.). RapiseLauncher can be used to execute Desktop UI tests, API tests, mobile tests, and web tests. For web tests, it is possible to use Rapise's own Chrome extension, IE 11, or any [Selenium WebDriver](selenium_webdriver.md)-based target.

The same extension can be used for launching tests on [self-hosted](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-windows?view=azure-devops) Windows agents.

Although in a minimal configuration the **RapiseLauncher** step alone is sufficient, the pipeline definition may also include building, deploying, or downloading the AUT before test execution. The results of test execution are then stored in SpiraTeam.

Once configured and executed, the extension performs the following actions:

1.  Automatically downloads and installs the **RapiseLauncher**.
2.  Downloads test files from SpiraTeam.
3.  Executes the test set.
4.  Publishes execution results, videos, and logs back to SpiraTeam, where they are attached to the test run.

The entire configuration process involves the following steps:

1.  Add the Rapise extension to the organization using the Visual Studio Marketplace.
2.  Configure the **SpiraTeam** connection point for the project.
3.  Define a pipeline.
4.  Add the **RapiseLauncher** task to the pipeline.
5.  Configure the pipeline definition for executing tests via **RapiseLauncher**.

### Step 1: Install Marketplace Extension for the Organization

In Azure DevOps, go to **Organization settings**:

![vstest_rl_orgsettings.png](./img/vstest_rl_orgsettings.png)

Choose **Extensions** and then **Browse Marketplace**:

![vstest_rl_orgextensions.png](./img/vstest_rl_orgextensions.png)

Type `Rapise`, then choose the 'RapiseLauncher' extension:

![vstest_rl_orgextensions_rapise.png](./img/vstest_rl_orgextensions_rapise.png)

Get it:

![vstest_rl_orgextensions_rapise_get.png](./img/vstest_rl_orgextensions_rapise_get.png)

And install it:

![vstest_rl_orgextensions_rapise_install.png](./img/vstest_rl_orgextensions_rapise_install.png)

Finally, it shows up in the list of installed extensions:

![vstest_rl_orgextensions_rapise_installed.png](./img/vstest_rl_orgextensions_rapise_installed.png)

### Step 2: Connect Project to SpiraTeam

Now, define a service connection. This provides connection details for **SpiraTeam**, which are used later to gather test set information. So, we need to open **Project settings**:

![vstest_rl_projsettings.png](./img/vstest_rl_projsettings.png)

Go to **Service Connections**:

![vstest_rl_serviceconnections.png](./img/vstest_rl_serviceconnections.png)

And **Create service connection**:

![vstest_rl_serviceconnections_create.png](./img/vstest_rl_serviceconnections_create.png)

Choose the **Spira service connection** type (this type is added by the installed marketplace extension) and press **Next**:

![vstest_rl_serviceconnections_spira.png](./img/vstest_rl_serviceconnections_spira.png)

Now define the connection details: SpiraTeam **Server URL**, **Username**, and [API Key](http://spiradoc.inflectra.com/HowTo-Guides/Users-profile-management/#how-to-get-or-make-your-rss-token-or-api-key):

![vstest_rl_serviceconnections_verify.png](./img/vstest_rl_serviceconnections_verify.png)

Then **Verify** it and provide a **Service connection name**:

![vstest_rl_serviceconnections_verifyandsave.png](./img/vstest_rl_serviceconnections_verifyandsave.png)

Finally, the connection shows up in the list:

![vstest_rl_serviceconnections_ready.png](./img/vstest_rl_serviceconnections_ready.png)

### Step 3: Define a Pipeline

Defining a pipeline means telling Azure DevOps where to store the pipeline definition, where to get the tests, what VM to use for execution, and what parameters to pass.

#### Define a Repository

In cases where you don't have a repository, simply define one for the given project:
<!-- /* cSpell:disable */ -->
![vstest_rl_pipeline_create_0_preparerepo.png](./img/vstest_rl_pipeline_create_0_preparerepo.png)
<!-- /* cSpell:enable */ -->
If you have a repo, you may skip this step and use your repository connection in the next step.

#### Create a Pipeline Definition

Go to your project, expand **Pipelines**, and choose **Create Pipeline**:

![vstest_rl_pipeline_create.png](./img/vstest_rl_pipeline_create.png)

Select the GIT repository type:

![vstest_rl_pipeline_create_1_repo.png](./img/vstest_rl_pipeline_create_1_repo.png)

And the repository itself:

![vstest_rl_pipeline_create_2_selectrepo.png](./img/vstest_rl_pipeline_create_2_selectrepo.png)

Here we are creating a new pipeline. However, you may use an existing one and just add a test execution task to it.

![vstest_rl_pipeline_create_3_selectpipeline.png](./img/vstest_rl_pipeline_create_3_selectpipeline.png)

**RapiseLauncher** requires a **Windows** host. You may use a [Microsoft-hosted agent](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/hosted?view=azure-devops&tabs=yaml), or set up an agent on your own VM or physical Windows machine.

![vstest_rl_pipeline_create_4_vmimage.png](./img/vstest_rl_pipeline_create_4_vmimage.png)

### Step 4: Add RapiseLauncher Task

Then you may use the Assistant to configure the task.

![vstest_rl_pipeline_create_5_showassistant.png](./img/vstest_rl_pipeline_create_5_showassistant.png)

![vstest_rl_pipeline_create_6_showassistant.png](./img/vstest_rl_pipeline_create_6_showassistant.png)

And filter by the word 'Rapise'. We need the task **Run Rapise Test Set**:

![vstest_rl_pipeline_create_7_showassistant_rapise.png](./img/vstest_rl_pipeline_create_7_showassistant_rapise.png)

Now we need to configure the task execution parameters as follows:

*   **SpiraTeam** contains information for finding a test set
    *   **Spira service/server endpoint** - choose the Spira connection defined earlier from the dropdown.
        ![vstest_rl_pipeline_create_9_ext_spira_proj.png](./img/vstest_rl_pipeline_create_9_ext_spira_proj.png)
    *   **Spira Product**
    *   **Spira Test Set**
    *   **Automation Host**

*   **Execution Options**
    *   **Rapise Needs to Be Installed** - if your VM is spun up for each test execution (i.e., you use a *Microsoft-hosted Agent*), then the task can install it. You don't need to install Rapise if you use your own agent and install it in advance. Also, you may have more than one **Run Rapise Test Set** task in your pipeline. In this case, only the first one needs to install Rapise.
        *   **Rapise Version** - we recommend specifying the same version that you used to create the tests. I.e. ![Rapise Version](./img/vstest_rl_pipeline_create_12_rapiseversion.png)

*   **Advanced Execution Options**
    *   **Set Screen Resolution** - specify one of the standard screen resolutions for test execution. It should be one of the standard values (i.e., 1024x768, 1920x1080, etc., supported by the current execution host). A higher resolution results in more details on screenshots and video, but also consumes more space for recordings.
        *   **Width**
        *   **Height**

    *   **Record Video of Execution** - a `ScreenCapture.wmv` will be generated and saved as a [Test Run attachment](https://spiradoc.inflectra.com/Spira-User-Manual/Test-Run-Management/#attachments).
        *   **Video Recording Options** - a set of [options](spiratest_integration.md#record-playback-videos) for the `Microsoft.TestPlatform` video recorder.

    *   **Publish RapiseLauncher Log** - when enabled, the RapiseLauncher log is attached to the pipeline build log.

        ![Log](./img/vstest_rl_pipeline_create_12_executionlog.png)

    *   **GITROOT** is only needed if your tests are stored in Git and you check them out [earlier](git_integration.md#checkout-externally) in the pipeline or even before launching the pipeline.

![vstest_rl_pipeline_create_10_ext_adv_obj.png](./img/vstest_rl_pipeline_create_10_ext_adv_obj.png)

Finally, press **Add**. The task should appear in the `steps:` section of the YAML description:

![vstest_rl_pipeline_create_11_ext_yaml.png](./img/vstest_rl_pipeline_create_11_ext_yaml.png)

You can then tweak its configuration directly using the text editor.

```yaml
trigger:
- main

pool:
  vmImage: windows-latest

steps:
- task: RapiseLauncherTask@1
  inputs:
    spiraConnection: 'SpiraConnection'
    spiraProjectId: '93'
    spiraTestSetId: '145'
    spiraAutomationHost: 'AZURE'
    installRapise: true
    rapiseVersion: '6.7.22.25'
    setScreenSize: true
    screenWidth: 1920
    screenHeight: 1080
    recordVideo: true
```
And then execute.
![vstest_rl_pipeline_create_13_ext_run.png](./img/vstest_rl_pipeline_create_13_ext_run.png)
![vstest_rl_pipeline_create_14_ext_saverun.png](./img/vstest_rl_pipeline_create_14_ext_saverun.png)
![vstest_rl_pipeline_create_15_queue.png](./img/vstest_rl_pipeline_create_15_queue.png)

### Step 5: Pipeline Execution Results

You can see the history of pipeline job runs and test execution logs.

From the pipeline run history, you can select any run:

![vstest_rl_pipeline_runhistory_10](./img/vstest_rl_pipeline_runhistory_10.png)

And select the Job:

![vstest_rl_pipeline_runhistory_11](./img/vstest_rl_pipeline_runhistory_11.png)

The job run contains information about each pipeline step. **RapiseLauncher** is the step that performs Rapise installation and test set launch.

![vstest_rl_pipeline_runhistory_12](./img/vstest_rl_pipeline_runhistory_12.png)

Also, you can find testing reports and videos in **SpiraTeam**:

![vstest_rl_pipeline_runhistory_13](./img/vstest_rl_pipeline_runhistory_13.png)

Log files and videos are located in the Test Run **Attachments** tab:

![vstest_rl_pipeline_runhistory_14](./img/vstest_rl_pipeline_runhistory_14.png)

## See Also

-   [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/)
-   [RapiseLauncher Extension in VisualStudio Marketplace](https://marketplace.visualstudio.com/items?itemName=EvilDauphin.inflectra-rapise-azure)
-   [Rapise and Spira Integration](spiratest_integration.md)
-   [Rapise and Git Integration](git_integration.md)
-   [Rapise Test Adapter Task](vstest.md#rapise-test-adapter-task) for Azure DevOps.