# RESTService

This behavior pattern implements REST service client.
 
Extends SeSSimulatedObject.





**Behavior Pattern: RESTServiceBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Credential](#Credential) | The HTTP Basic Authentication Credentials (if any). | GetCredential | SetCredential |
| [Method](#Method) | The HTTP Method being used for the request (GET, POST, etc. | GetMethod | SetMethod |
| [Name](#Name) | The name of the request operation | GetName |  |
| [Parameters](#Parameters) | The list of parameters available for this request url. | GetParameters | SetParameters |
| [RequestBodyObject](#RequestBodyObject) | The body of the HTTP request as a JavaScript object. | GetRequestBodyObject | SetRequestBodyObject |
| [RequestBodyText](#RequestBodyText) | The body of the HTTP request in raw text format | GetRequestBodyText | SetRequestBodyText |
| [RequestHeaders](#RequestHeaders) | The list of HTTP headers that are part of this request. | GetRequestHeaders | SetRequestHeaders |
| [ResponseBodyObject](#ResponseBodyObject) | The body of the HTTP response deserialized from JSON into a JavaScript object. | GetResponseBodyObject |  |
| [ResponseBodyText](#ResponseBodyText) | The body of the HTTP response in raw text format | GetResponseBodyText |  |
| [ResponseHeaders](#ResponseHeaders) | Returns the list of HTTP headers returned from the HTTP response. | GetResponseHeaders |  |
| [ResponseIsErrorStatus](#ResponseIsErrorStatus) | Returns 'true 'if an HTTP error code came back from the web service | GetResponseIsErrorStatus |  |
| [Url](#Url) | The URL being used to access the web service | GetUrl | SetUrl |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoExecute](#DoExecute) | Executes a REST service operation, substitutes any of the provided parameter values if necessary. |
|	[DoVerify](#DoVerify) | Checks that a given part of response equals the expected value. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Credential"></a>
#### Credential


The HTTP Basic Authentication Credentials (if any).<br><text styleclass="Normal" style="font-weight:bold;" translate="true">Sample code:</text><br><table styleclass="Default" rowcount="1" colcount="1" style="width:100%; background-color:#ffffbb;"><tr style="vertical-align:top"><td><para styleclass="Code Example"><text styleclass="Code Example" translate="true">var credential = {};</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">credential.UserName = "fredbloggs";</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">credential.Password = "MyPassword";</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">SeS("Operation_Name").SetCredential(credential);</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true"> </text></para></td></tr></table><br><text styleclass="Normal">Another way is to pass user name and password as first and second parameter respectively, e.g. SeS("Operation_Name").SetCredential("fredbloggs", "MyPassword");</text>

			
	
			
Type: object
			
			
Accessors: GetCredential, SetCredential
			
		
<a name="Method"></a>
#### Method


The HTTP Method being used for the request (GET, POST, etc.)

			
	
			
Type: string
			
			
Accessors: GetMethod, SetMethod
			
		
<a name="Name"></a>
#### Name


The name of the request operation

			
	
			
Type: string
			
			
Accessors: GetName
			
		
<a name="Parameters"></a>
#### Parameters


The list of parameters available for this request url.<br><text styleclass="Normal" style="font-weight:bold;" translate="true">Sample code:</text><br><table styleclass="Default" rowcount="1" colcount="1" style="width:100%; background-color:#ffffbb;"><tr style="vertical-align:top"><td><para styleclass="Code Example"><text styleclass="Code Example" translate="true">var parameters = SeS("Operation_Name").GetParameters();</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">for (var i = 0; i < parameters.length; i++)</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">{</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">    var name = parameters[i].Name;</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">    var token = parameters[i].TokenName;</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">    var value = parameters[i].Value;</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">}</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true"> </text></para></td></tr></table>

			
	
			
Type: object
			
			
Accessors: GetParameters, SetParameters
			
		
<a name="RequestBodyObject"></a>
#### RequestBodyObject


The body of the HTTP request as a JavaScript object.<br><text styleclass="Normal" style="font-weight:bold;" translate="true">Sample code:</text><br><table styleclass="Default" rowcount="1" colcount="1" style="width:100%; background-color:#ffffbb;"><tr style="vertical-align:top"><td><para styleclass="Code Example"><text styleclass="Code Example" translate="true">var book = {};</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">book.Name = "A Christmas Carol";</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">book.AuthorId = 2;</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">book.GenreId = 3;</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">SeS("LibraryInformationSystem_Insert_Book").SetRequestBodyObject(book);</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">SeS("LibraryInformationSystem_Insert_Book").DoExecute({"session_id":sessionId});</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true"> </text></para></td></tr></table>

			
	
			
Type: object
			
			
Accessors: GetRequestBodyObject, SetRequestBodyObject
			
		
<a name="RequestBodyText"></a>
#### RequestBodyText


The body of the HTTP request in raw text format

			
	
			
Type: string
			
			
Accessors: GetRequestBodyText, SetRequestBodyText
			
		
<a name="RequestHeaders"></a>
#### RequestHeaders


The list of HTTP headers that are part of this request.<br><text styleclass="Normal" style="font-weight:bold;" translate="true">Sample code:</text><br><table styleclass="Default" rowcount="1" colcount="1" style="width:100%; background-color:#ffffbb;"><tr style="vertical-align:top"><td><para styleclass="Code Example"><text styleclass="Code Example" translate="true">var headers = SeS("Operation_Name").GetRequestHeaders();</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">for (var i = 0; i < headers.length; i++)</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">{</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">    var name = headers[i].Name;</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">    var value = headers[i].Value;</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">}</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true"> </text></para></td></tr></table>

			
	
			
Type: object
			
			
Accessors: GetRequestHeaders, SetRequestHeaders
			
		
<a name="ResponseBodyObject"></a>
#### ResponseBodyObject


The body of the HTTP response deserialized from JSON into a JavaScript object.<br><text styleclass="Normal" style="font-weight:bold;" translate="true">Sample code:</text><br><table styleclass="Default" rowcount="1" colcount="1" style="width:100%; background-color:#ffffbb;"><tr style="vertical-align:top"><td><para styleclass="Code Example"><text styleclass="Code Example" translate="true">SeS("LibraryInformationSystem_Get_BookById").DoExecute({"session_id":sessionId, "book_id":bookId});</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">var book = SeS("LibraryInformationSystem_Get_BookById").GetResponseBodyObject();</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true"> </text></para></td></tr></table>

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| jsonPath | string | Path to a sub-object within response object. E.g. 'Body.Connection_AuthenticateResult'.<br>Optional, Default: Body. |
| info | object | Empty object that will receive error information if any. Access as info.error in a calling function.<br>Optional. |


	
			
Type: object
			
			
Accessors: GetResponseBodyObject
			
		
<a name="ResponseBodyText"></a>
#### ResponseBodyText


The body of the HTTP response in raw text format

			
	
			
Type: string
			
			
Accessors: GetResponseBodyText
			
		
<a name="ResponseHeaders"></a>
#### ResponseHeaders


Returns the list of HTTP headers returned from the HTTP response.<br><text styleclass="Normal" style="font-weight:bold;" translate="true">Sample code:</text><br><table styleclass="Default" rowcount="1" colcount="1" style="width:100%; background-color:#ffffbb;"><tr style="vertical-align:top"><td><para styleclass="Code Example"><text styleclass="Code Example" translate="true">var headers = SeS("Operation_Name").GetResponseHeaders();</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">for (var i = 0; i < headers.length; i++)</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">{</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">    var name = headers[i].Name;</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">    var value = headers[i].Value;</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">}</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true"> </text></para></td></tr></table>

			
	
			
Type: object
			
			
Accessors: GetResponseHeaders
			
		
<a name="ResponseIsErrorStatus"></a>
#### ResponseIsErrorStatus


Returns 'true 'if an HTTP error code came back from the web service

			
	
			
Type: boolean
			
			
Accessors: GetResponseIsErrorStatus
			
		
<a name="Url"></a>
#### Url


The URL being used to access the web service

			
	
			
Type: string
			
			
Accessors: GetUrl, SetUrl
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoExecute"></a>    
#### DoExecute(params)

Executes a REST service operation, substitutes any of the provided parameter values if necessary.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| params | object |	JavaScript object {"name1": "value1", "name2": "value2" }. Parameter values that should be passed to the web service operation.<br><text styleclass="Normal" style="font-weight:bold;" translate="true">Sample code:</text><br><table styleclass="Default" rowcount="1" colcount="1" style="width:100%; background-color:#ffffbb;"><tr style="vertical-align:top"><td><para styleclass="Code Example"><text styleclass="Code Example" translate="true">SeS("LibraryInformationSystem_Get_BookById").DoExecute({"session_id":sessionId, "book_id":bookId});</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">var book = SeS("LibraryInformationSystem_Get_BookById").GetResponseBodyObject();</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true"> </text></para></td></tr></table> |




**Returns:**

boolean: 'true' if success, 'false' otherwise.




<a name="DoVerify"></a>    
#### DoVerify(msg, jsonPath, expectedValue)

Checks that a given part of response equals the expected value.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| msg | string |	Message to write into the report. |
| jsonPath | string |	Path to the given node in the response object to use as a root for comparison with the expected value. |
| expectedValue | object |	Expected value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.




	

