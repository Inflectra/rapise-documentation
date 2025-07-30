# Robotic Process Automation

Since version 6.3, Rapise has included the **RPA Monitor**.

<img src="/Manuals/img/rpa_monitor.png" width="729" />

The RPA Monitor runs agents based on a configuration specified in a JSON file (usually `rpa_config.json`). This file has the following structure:

```json
{
    "name": "Name of RPA Scenario",
    "agents": 
    [
        {
            "id": "unique id of the agent",
            "description": "purpose of the agent",
            "type": "RpaFolderMonitor|RpaQueue|RpaTimer",
            "options":
            {
                // Options specific for the agent type
            }
        }
        // other agents
    ]
}
```

The RPA Monitor supports different types of agents.

## Agent Types

### RpaQueue

Each scenario must have a queue to process commands triggered by other agents.

The queue specification is always the same:

```json
{
    "id": "rpa_queue",
    "description": "Queue for managing RPA communication",
    "type": "RpaQueue",
    "options":
    {
    }
}
```

The queue ensures that commands are processed sequentially and that no more than one Rapise test is executed at the same time.

### RpaFolderMonitor

This type of agent monitors a specific folder and triggers actions when items are created, changed, or deleted in it.

Example:

```json
{
    "id": "pdf_folder_monitor",
    "description": "Monitors folder for new PDF files",
    "type": "RpaFolderMonitor",
    "options":
    {
        "folder": "c:\\Demo\\RPA\\Invoices",
        "filter": "*.pdf",
        "events":
        [
            {
                "name": "created", 
                "command": "c:\\Demo\\RPA\\processinvoice.cmd",
                "args": "{file_name}"
            }
        ]
    }
}
```

Supported event names:

- created
- changed
- deleted

Placeholders for the triggered command's arguments:

- `{file_name}` - The full path of an item.

### RpaTimer

A timer agent triggers a command on a regular basis.

Example:

```json
{
    "id": "rpa_email_checker",
    "description": "Email checker",
    "type": "RpaTimer",
    "options":
    {
        "command": "c:\\Demo\\RPA\\checkemail.cmd",
        "args" : "",
        "interval": 20000
    }
}
```

The timer interval is specified in milliseconds.

## Launching RPA Monitor

### From Command Line

```nohighlight
"<Rapise Bin Folder>\RPAMonitor.exe" "<path to JSON file with configuration>"
```

Usually, `<Rapise Bin Folder>` is `C:\Program Files (x86)\Inflectra\Rapise\Bin`.

Example:

```nohighlight
"C:\Program Files (x86)\Inflectra\Rapise\Bin\RPAMonitor.exe" "c:\Demo\RPA\rpa_config.json"
```

### From Rapise Menu

Select `Tools > RPA Monitor`. Rapise searches for `rpa_config.json` in the current test folder and its parent folders. The most deeply nested `rpa_config.json` file is passed to the RPA Monitor.

## Running Spira Test Case

If you want to run a Rapise test linked to Spira (to collect execution results in Spira), you can trigger the Rapise Launcher in minimized mode by passing the project and test set IDs to it. The test set must contain the test case you want to run. The `-minimized` switch prevents the RapiseLauncher window from being displayed.

Example:

```nohighlight
"C:\Program Files (x86)\Inflectra\Rapise\Bin\RapiseLauncher.exe" -testset:37 -project:8 -minimized
```

## See Also

- [RPA Demo using Rapise and Dynamics NAV (video)](https://youtu.be/60MvOc76K5o)
- [Sample RPA Framework on GitHub](https://github.com/Inflectra/rapise-dynamics-samples/tree/master/RPAMonitorDemo)
- [RPA Whitepaper](https://www.inflectra.com/Rapise/Highlights/Robotic-Process-Automation.aspx)