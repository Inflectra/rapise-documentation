Summary: This behavior pattern implements SOAP service client.

# SOAPService

This behavior pattern implements SOAP service client.
 
Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: SOAPServiceBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Credential](#Credential) | The HTTP Basic Authentication Credentials (if any). | GetCredential | SetCredential |
| [Name](#Name) | The name of the request operation | GetName |  |
| [ResponseBodyObject](#ResponseBodyObject) | The body of the HTTP response deserialized from SOAP into a JavaScript object. | GetResponseBodyObject |  |
| [ResponseBodyText](#ResponseBodyText) | The body of the HTTP response in raw text format. | GetResponseBodyText |  |
| [ResponseHeaders](#ResponseHeaders) | Returns the list of HTTP headers returned with the HTTP response. | GetResponseHeaders |  |
| [ResponseIsErrorStatus](#ResponseIsErrorStatus) | Returns 'true 'if an HTTP error code came back from the web service. | GetResponseIsErrorStatus |  |
| [Url](#Url) | The URL being used to access the web service. | GetUrl | SetUrl |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoExecute](#DoExecute) | Executes a SOAP service operation, substituting any of the provided parameter values if necessary. |
|	[DoExecuteRaw](#DoExecuteRaw) | Sends a SOAP request as is. |
|	[DoVerify](#DoVerify) | Checks that a given part of response equals the expected value. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Credential"></a>
#### Credential


The HTTP Basic Authentication Credentials (if any).<br><text styleclass="Normal" style="font-weight:bold;" translate="true">Sample code:</text><br><table styleclass="Default" rowcount="1" colcount="1" style="width:100%; background-color:#ffffbb;"><tr style="vertical-align:top"><td><para styleclass="Code Example"><text styleclass="Code Example" translate="true">var credential = {};</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">credential.UserName = "fredbloggs";</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">credential.Password = "MyPassword";</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">SeS("Operation_Name").SetCredential(credential);</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true"> </text></para></td></tr></table>

			
	
			
Type: object
			
			
Accessors: GetCredential, SetCredential
			
		
<a name="Name"></a>
#### Name


The name of the request operation

			
	
			
Type: string
			
			
Accessors: GetName
			
		
<a name="ResponseBodyObject"></a>
#### ResponseBodyObject


The body of the HTTP response deserialized from SOAP into a JavaScript object.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| jsonPath | string | Path to a sub-object within response object. E.g. 'Body.Connection_AuthenticateResult'.<br>Optional, Default: Body. |
| info | object | Empty object that will receive error information if any. Access as info.error in a calling function.<br>Optional. |


	
			
Type: object
			
			
Accessors: GetResponseBodyObject
			
		
<a name="ResponseBodyText"></a>
#### ResponseBodyText


The body of the HTTP response in raw text format.

			
	
			
Type: string
			
			
Accessors: GetResponseBodyText
			
		
<a name="ResponseHeaders"></a>
#### ResponseHeaders


Returns the list of HTTP headers returned with the HTTP response.<br><text styleclass="Normal" style="font-weight:bold;" translate="true">Sample code:</text><br><table styleclass="Default" rowcount="1" colcount="1" style="width:100%; background-color:#ffffbb;"><tr style="vertical-align:top"><td><para styleclass="Code Example"><text styleclass="Code Example" translate="true">var headers = SeS("Operation_Name").GetResponseHeaders();</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">for (var i = 0; i < headers.length; i++)</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">{</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">    var name = headers[i].Name;</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">    var value = headers[i].Value;</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">}</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true"> </text></para></td></tr></table>

			
	
			
Type: object
			
			
Accessors: GetResponseHeaders
			
		
<a name="ResponseIsErrorStatus"></a>
#### ResponseIsErrorStatus


Returns 'true 'if an HTTP error code came back from the web service.

			
	
			
Type: boolean
			
			
Accessors: GetResponseIsErrorStatus
			
		
<a name="Url"></a>
#### Url


The URL being used to access the web service.

			
	
			
Type: string
			
			
Accessors: GetUrl, SetUrl
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoExecute"></a>    
#### DoExecute(method, params, headers)

Executes a SOAP service operation, substituting any of the provided parameter values if necessary.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| method | string |	Name of a SOAP method. |
| params | object |	JavaScript object {"name1": "value1", "name2": "value2" }. Parameter values that should be passed to the web service operation. |
| headers | object |	Array of header name/value pairs. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.soapservice.doexecute"></a>

<a name="DoExecuteRaw"></a>    
#### DoExecuteRaw(method, body, params)

Sends a SOAP request as is.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| method | string |	Name of a SOAP method. |
| body | string |	SOAP xml string. |
| params | object |	JavaScript object {"name1": "value1", "name2": "value2" }. Parameter values that should be passed to the web service operation. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.soapservice.doexecuteraw"></a>

<a name="DoVerify"></a>    
#### DoVerify(msg, jsonPath, expectedValue)

Checks that a given part of response equals the expected value.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| msg | string |	Message to write into the report. |
| jsonPath | string |	Path to the given node in the response object to use as a root for comparison with the expected value. |
| expectedValue | object |	Expected value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.soapservice.doverify"></a>

	

