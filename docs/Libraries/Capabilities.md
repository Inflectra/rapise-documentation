Summary: This is a JavaScript wrapper for DesiredCapabilities of Selenium .NET library.

# Capabilities

This is a JavaScript wrapper for DesiredCapabilities of Selenium .NET library.For code complete feature use class name CapabilitiesWrapper, e.g. <br><br><p style="margin-left: 30px;"><code>var /&#42;&#42;CapabilitiesWrapper&#42;/caps = WebDriver.CreateDesiredCapabilities();</code></p>






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[GetCapability](#getcapability) | Gets a capability of the browser. |
|	[HasCapability](#hascapability) | Gets a value indicating whether the browser has a given capability. |
|	[SetCapability](#setcapability) | Sets a capability of the browser. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="GetCapability"></a>    
#### GetCapability

Gets a capability of the browser.

```javascript
GetCapability(capability) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| capability | string |	The capability to get. |




**Returns:**

capability value.



<a name="see.also.capabilities.getcapability"></a>

<a name="HasCapability"></a>    
#### HasCapability

Gets a value indicating whether the browser has a given capability.

```javascript
HasCapability(capability) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| capability | string |	The capability to get. |




**Returns:**

'true' if the capability is set, 'false' - otherwise.



<a name="see.also.capabilities.hascapability"></a>

<a name="SetCapability"></a>    
#### SetCapability

Sets a capability of the browser.

```javascript
SetCapability(capability, capabilityValue) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| capability | string |	The capability to get. |
| capabilityValue | string |	The value for the capability. |





<a name="see.also.capabilities.setcapability"></a>

	

