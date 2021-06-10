# NeoLoad

!!! important
    NeoLoad integration has been removed in Rapise 7.0.

Global object. Use it to perform actions not related to a particular object. You do not need to
record or learn this object, it is always automatically available in any test.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[CaptureBrowserPerformance](#capturebrowserperformance) | Captures duration of loading a page and resources. |
|	[CaptureHostPerformance](#capturehostperformance) | Sends host performance metrics to NeoLoad: CPU, Memory, Network, Battery. |
|	[CapturePerformanceValue](#captureperformancevalue) | Sends performance value to NeoLoad. |
|	[CreateClient](#createclient) | Connects to NeoLoad. |
|	[EndTransaction](#endtransaction) | Marks end of a transaction and sends performance metrics to NeoLoad. |
|	[GetNetworkInterfaceNames](#getnetworkinterfacenames) | Gets names of network interfaces. |
|	[SetBaseContainer](#setbasecontainer) | Sets current step (Init, Actions, End) during test conversion |
|	[SetContainer](#setcontainer) | Sets current container/business transaction during test conversion |
|	[StartTransaction](#starttransaction) | Marks start of a transaction. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="CaptureBrowserPerformance"></a>    
#### CaptureBrowserPerformance

Captures duration of loading a page and resources.

```javascript
CaptureBrowserPerformance(url) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url |  |	Node name for NeoLoad entry tree. |





<a name="see.also.neoload.capturebrowserperformance"></a>

<a name="CaptureHostPerformance"></a>    
#### CaptureHostPerformance

Sends host performance metrics to NeoLoad: CPU, Memory, Network, Battery.

```javascript
CaptureHostPerformance() 
```





<a name="see.also.neoload.capturehostperformance"></a>

<a name="CapturePerformanceValue"></a>    
#### CapturePerformanceValue

Sends performance value to NeoLoad.

```javascript
CapturePerformanceValue(entry, path, units, value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| entry |  |	Name of a group of performance metrics. Can be a transaction name. |
| path |  |	Name of a metric to capture. |
| units |  |	Units of measure. |
| value |  |	Current value of the metric. |





<a name="see.also.neoload.captureperformancevalue"></a>

<a name="CreateClient"></a>    
#### CreateClient

Connects to NeoLoad.

```javascript
CreateClient(hardware, location, networkInterface) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| hardware | string |	Hardware details (Apple MacBook Pro, Sony Vaio, etc.) |
| location | string |	Location information. |
| networkInterface | string |	Name of network interface to monitor. Names of available interfaces can be obtained using GetNetworkInterfaceNames. |





<a name="see.also.neoload.createclient"></a>

<a name="EndTransaction"></a>    
#### EndTransaction

Marks end of a transaction and sends performance metrics to NeoLoad.

```javascript
EndTransaction(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of a transaction. |





<a name="see.also.neoload.endtransaction"></a>

<a name="GetNetworkInterfaceNames"></a>    
#### GetNetworkInterfaceNames

Gets names of network interfaces. Use one of them to CreateClient.

```javascript
GetNetworkInterfaceNames() 
```





<a name="see.also.neoload.getnetworkinterfacenames"></a>

<a name="SetBaseContainer"></a>    
#### SetBaseContainer

Sets current step (Init, Actions, End) during test conversion

```javascript
SetBaseContainer(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of a step. |





<a name="see.also.neoload.setbasecontainer"></a>

<a name="SetContainer"></a>    
#### SetContainer

Sets current container/business transaction during test conversion

```javascript
SetContainer(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of a container/transaction. |





<a name="see.also.neoload.setcontainer"></a>

<a name="StartTransaction"></a>    
#### StartTransaction

Marks start of a transaction.

```javascript
StartTransaction(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Name of a transaction. |





<a name="see.also.neoload.starttransaction"></a>

	

