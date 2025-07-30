# Client Performance Monitoring

!!! important
    NeoLoad integration has been removed in Rapise 7.0.

## Concept and Architecture

The purpose of this integration is to address the following use case:

> The tester wants to measure the speed of the user interface that a user would experience while performing a protocol-level load test:
>
> - How long does each transaction take while 1000 VUs are hitting the same system?
> - The user interface could be web, mobile, or a thick client (e.g., an ERP system).

The following describes the technical architecture required:

![clip0065](./img/client_performance_monitoring1.png)

The process flow for the above architecture is as follows:

1.  A user schedules the performance test in SpiraTest.
2.  RemoteLaunch, connected to the NeoLoad controller and SpiraTest, initiates the start of the testing.
3.  The NeoLoad controller sends commands to the NeoLoad load generators to start the performance scenario.
4.  During the performance scenario, NeoLoad calls Rapise via its command line to start a specific test.
5.  At specific points in the Rapise function test (which is grouped into transactions), timing code in the Rapise script (see next section) calls the NeoLoad REST API to report the timing for the transaction block.
    - The NeoLoad controller correlates each block with the appropriate transaction in the performance scenario.
6.  At the end of the performance test, RemoteLaunch reads the entire performance test and sends the results back to SpiraTest.

## NeoLoad Global Object

Rapise includes a global object named `NeoLoad` that can send client performance metrics to the NeoLoad controller.

![clip0058](./img/client_performance_monitoring2.png)

NeoLoad displays the received data in both tree and graph views.

## NeoLoad Tree View

![clip0059](./img/client_performance_monitoring3.png)

The root of the tree is the name of the script executed by Rapise. The first level contains three groups:

-   LG Performance – This folder contains essential load generator metrics captured by Rapise: CPU, Memory, and Network Sent/Received bytes.
-   Page Load – This folder contains nodes for each page and nested resource. Duration values are obtained using the `Window.performance` structure. See also [http://www.w3.org/TR/navigation-timing/#processing-model](http://www.w3.org/TR/navigation-timing/#processing-model)
-   Transactions – This folder contains counters for transactions defined by a script.

## Graph View

Each leaf node can be dragged to the graph view for visualization:

![clip0060](./img/client_performance_monitoring4.png)

## Performance Filters

Performance results obtained from different runs can be filtered using the results filter on the toolbar.

![clip0061](./img/client_performance_monitoring5.png)

You can open the Results Filter dialog by pressing the `…` button.

![clip0062](./img/client_performance_monitoring6.png)

-   Platform – a combination of hardware and OS. Hardware is passed by a user script; OS is determined automatically by Rapise. E.g., `hardware1 – Microsoft Windows 8.1 Pro`.
-   Client Software – Rapise.
-   Location – supplied by a script. E.g., `location1`.
-   Script – a combination of script name and timestamp. E.g.,
-   
![clip0063](./img/client_performance_monitoring7.png)

## NeoLoad Object API Reference

The methods of the global `NeoLoad` object are described [on this page](/Libraries/NeoLoad/).

## How to Use

To send performance metrics to NeoLoad, you need to add a sequence of calls to your script.

First, connect to NeoLoad. When this call is executed, NeoLoad must be running a script; otherwise, an error will be returned.

```javascript
NeoLoad.CreateClient("hardware1", "location1", "Broadcom 802.11ac Network Adapter _2");
```

Consider the following code block:

```javascript
NeoLoad.CaptureHostPerformance();
NeoLoad.StartTransaction('T Home');
NeoLoad.CaptureBrowserPerformance(SeS('Log_In').GetPageURL());
//Click on Log In
SeS('Log_In').DoClick();
NeoLoad.CaptureBrowserPerformance(SeS('Username_').GetPageURL());
NeoLoad.EndTransaction('T Home');
```

-   `CaptureHostPerformance` sends immediate values of CPU, memory, and network load to the NeoLoad controller.
-   `StartTransaction`/`EndTransaction` calls define a transaction named `T Home`. Upon the `EndTransaction` call, its duration is sent to the NeoLoad controller.
-   `CaptureBrowserPerformance` sends page load performance metrics to the NeoLoad controller.

There is also a general call that can send any user-defined metric to the NeoLoad controller:

```javascript
NeoLoad.CapturePerformanceValue("First Level Folder", "Transaction1|Duration", "milliseconds", 120);
```

Components of the second parameter can be separated by `|`. This allows you to add more levels to the tree.