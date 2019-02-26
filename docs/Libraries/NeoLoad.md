# NeoLoad

Global object. Use it to perform actions not related to a particular object. You do not need torecord or learn this object, it is always automatically available in any test.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[CaptureBrowserPerformance](#CaptureBrowserPerformance) | Captures duration of loading a page and resources. |
|	[CaptureHostPerformance](#CaptureHostPerformance) | Sends host performance metrics to NeoLoad: CPU, Memory, Network, Battery. |
|	[CapturePerformanceValue](#CapturePerformanceValue) | Sends performance value to NeoLoad. |
|	[CreateClient](#CreateClient) | Connects to NeoLoad. |
|	[EndTransaction](#EndTransaction) | Marks end of a transaction and sends performance metrics to NeoLoad. |
|	[GetNetworkInterfaceNames](#GetNetworkInterfaceNames) | Gets names of network interfaces. |
|	[SetBaseContainer](#SetBaseContainer) | Sets current step (Init, Actions, End) during test conversion |
|	[SetContainer](#SetContainer) | Sets current container/business transaction during test conversion |
|	[StartTransaction](#StartTransaction) | Marks start of a transaction. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="CaptureBrowserPerformance"></a>    
#### CaptureBrowserPerformance(url)

Captures duration of loading a page and resources.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url |  |	Node name for NeoLoad entry tree. |






<a name="CaptureHostPerformance"></a>    
#### CaptureHostPerformance()

Sends host performance metrics to NeoLoad: CPU, Memory, Network, Battery.






<a name="CapturePerformanceValue"></a>    
#### CapturePerformanceValue(entry, path, units, value)

Sends performance value to NeoLoad.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| entry |  |	Name of a group of performance metrics. Can be a transaction name. |
| path |  |	Name of a metric to capture. |
| units |  |	Units of measure. |
| value |  |	Current value of the metric. |






<a name="CreateClient"></a>    
#### CreateClient(hardware, location, networkInterface)

Connects to NeoLoad.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| hardware | string |	Hardware details (Apple MacBook Pro, Sony Vaio, etc.) |
| location | string |	Location information. |
| networkInterface | string |	Name of network interface to monitor. Names of available interfaces can be obtained using GetNetworkInterfaceNames. |






<a name="EndTransaction"></a>    
#### EndTransaction(name)

Marks end of a transaction and sends performance metrics to NeoLoad.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of a transaction. |






<a name="GetNetworkInterfaceNames"></a>    
#### GetNetworkInterfaceNames()

Gets names of network interfaces. Use one of them to CreateClient.






<a name="SetBaseContainer"></a>    
#### SetBaseContainer(name)

Sets current step (Init, Actions, End) during test conversion


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of a step. |






<a name="SetContainer"></a>    
#### SetContainer(name)

Sets current container/business transaction during test conversion


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of a container/transaction. |






<a name="StartTransaction"></a>    
#### StartTransaction(name)

Marks start of a transaction.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of a transaction. |






	

