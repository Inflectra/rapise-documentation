# Capabilities

This is a JavaScript wrapper for DesiredCapabilities of Selenium .NET library.For code complete feature use class name CapabilitiesWrapper, e.g. <br><br><p style="margin-left: 30px;"><code>var /&#42;&#42;CapabilitiesWrapper&#42;/caps = WebDriver.CreateDesiredCapabilities();</code></p>






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[GetCapability](#GetCapability) | Gets a capability of the browser. |
|	[HasCapability](#HasCapability) | Gets a value indicating whether the browser has a given capability. |
|	[SetCapability](#SetCapability) | Sets a capability of the browser. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="GetCapability"></a>    
#### GetCapability(capability)

Gets a capability of the browser.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| capability | string |	The capability to get. |




**Returns:**

capability value.




<a name="HasCapability"></a>    
#### HasCapability(capability)

Gets a value indicating whether the browser has a given capability.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| capability | string |	The capability to get. |




**Returns:**

'true' if the capability is set, 'false' - otherwise.




<a name="SetCapability"></a>    
#### SetCapability(capability, capabilityValue)

Sets a capability of the browser.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| capability | string |	The capability to get. |
| capabilityValue | string |	The value for the capability. |






	

