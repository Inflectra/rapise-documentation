

# RESTService

This behavior pattern implements REST service client.
 
Extends SeSSimulatedObject.






**Behavior Pattern: RESTServiceBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

<table styleclass="Default" style="cell-padding:2px; border-width:0px; border-spacing:0px; border-collapse:collapse; cell-border-width:1px; border-color:#c0c0c0; border-style:solid;">
  <tr style="vertical-align:top">
    <td  style="width:200px; background-color:#c0c0c0;">
      Property
    </td>
    <td style="width:450px; background-color:#c0c0c0;">
      Description
    </td>

    <td style="width:150px; background-color:#c0c0c0;">
      Getter
    </td>
    <td style="width:150px; background-color:#c0c0c0;">
      Setter
    </td>

  </tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Credential">Credential</a>
		</td>
		<td>
			The HTTP Basic Authentication Credentials (if any).
		</td>
		
		<td>
		  GetCredential
		</td>
		<td>
		  SetCredential
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Method">Method</a>
		</td>
		<td>
			The HTTP Method being used for the request (GET, POST, etc.
		</td>
		
		<td>
		  GetMethod
		</td>
		<td>
		  SetMethod
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Name">Name</a>
		</td>
		<td>
			The name of the request operation
		</td>
		
		<td>
		  GetName
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Parameters">Parameters</a>
		</td>
		<td>
			The list of parameters available for this request url.
		</td>
		
		<td>
		  GetParameters
		</td>
		<td>
		  SetParameters
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#RequestBodyObject">RequestBodyObject</a>
		</td>
		<td>
			The body of the HTTP request as a JavaScript object.
		</td>
		
		<td>
		  GetRequestBodyObject
		</td>
		<td>
		  SetRequestBodyObject
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#RequestBodyText">RequestBodyText</a>
		</td>
		<td>
			The body of the HTTP request in raw text format
		</td>
		
		<td>
		  GetRequestBodyText
		</td>
		<td>
		  SetRequestBodyText
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#RequestHeaders">RequestHeaders</a>
		</td>
		<td>
			The list of HTTP headers that are part of this request.
		</td>
		
		<td>
		  GetRequestHeaders
		</td>
		<td>
		  SetRequestHeaders
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ResponseBodyObject">ResponseBodyObject</a>
		</td>
		<td>
			The body of the HTTP response deserialized from JSON into a JavaScript object.
		</td>
		
		<td>
		  GetResponseBodyObject
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ResponseBodyText">ResponseBodyText</a>
		</td>
		<td>
			The body of the HTTP response in raw text format
		</td>
		
		<td>
		  GetResponseBodyText
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ResponseHeaders">ResponseHeaders</a>
		</td>
		<td>
			Returns the list of HTTP headers returned from the HTTP response.
		</td>
		
		<td>
		  GetResponseHeaders
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ResponseIsErrorStatus">ResponseIsErrorStatus</a>
		</td>
		<td>
			Returns 'true 'if an HTTP error code came back from the web service
		</td>
		
		<td>
		  GetResponseIsErrorStatus
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Url">Url</a>
		</td>
		<td>
			The URL being used to access the web service
		</td>
		
		<td>
		  GetUrl
		</td>
		<td>
		  SetUrl
		</td>
		
	</tr>

</table>


	
<!-- ============================== action summary ========================== -->
	
	
	
### Action Summary

<table styleclass="Default" style="cell-padding:2px; border-width:0px; border-spacing:0px; border-collapse:collapse; cell-border-width:1px; border-color:#c0c0c0; border-style:solid;">
		  <tr style="vertical-align:top">
			<td  style="width:200px; background-color:#c0c0c0;">
			  Action
			</td>
			<td style="width:450px; background-color:#c0c0c0;">
			  Description
			</td>
		  </tr>
		 
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoExecute">DoExecute</a>
			</td>
			<td>
				Executes a REST service operation, substitutes any of the provided parameter values if necessary.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoVerify">DoVerify</a>
			</td>
			<td>
				Checks that a given part of response equals the expected value.
			</td>
		  </tr>
		
	   </table>
	
	

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

<table styleclass="Default" style="cell-padding:2px; border-width:0px; border-spacing:0px; border-collapse:collapse; cell-border-width:1px; border-color:#c0c0c0; border-style:solid;">
  <tr style="vertical-align:top">
	<td style="width:150px; background-color:#c0c0c0;">
	  Name
	</td>
	<td style="width:100px; background-color:#c0c0c0;">
	  Type
	</td>
	<td style="width:450px; background-color:#c0c0c0;">
	  Description
	</td>
  </tr>
  
	  <tr style="vertical-align:top">
		<td>jsonPath</td>
		<td>string</td>
		<td>
			Path to a sub-object within response object. E.g. 'Body.Connection_AuthenticateResult'.<br>Optional, Default: Body.
		</td>
	  </tr>
  
	  <tr style="vertical-align:top">
		<td>info</td>
		<td>object</td>
		<td>
			Empty object that will receive error information if any. Access as info.error in a calling function.<br>Optional.
		</td>
	  </tr>
  
</table>

	
			
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

<table styleclass="Default" style="cell-padding:2px; border-width:0px; border-spacing:0px; border-collapse:collapse; cell-border-width:1px; border-color:#c0c0c0; border-style:solid;">
  <tr style="vertical-align:top">
	<td style="width:150px; background-color:#c0c0c0;">
	  Name
	</td>
	<td style="width:100px; background-color:#c0c0c0;">
	  Type
	</td>
	<td style="width:450px; background-color:#c0c0c0;">
	  Description
	</td>
  </tr>
				  
					  <tr style="vertical-align:top">
						<td>params</td>
						<td>object</td>
						<td>
								JavaScript object {"name1": "value1", "name2": "value2" }. Parameter values that should be passed to the web service operation.<br><text styleclass="Normal" style="font-weight:bold;" translate="true">Sample code:</text><br><table styleclass="Default" rowcount="1" colcount="1" style="width:100%; background-color:#ffffbb;"><tr style="vertical-align:top"><td><para styleclass="Code Example"><text styleclass="Code Example" translate="true">SeS("LibraryInformationSystem_Get_BookById").DoExecute({"session_id":sessionId, "book_id":bookId});</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true">var book = SeS("LibraryInformationSystem_Get_BookById").GetResponseBodyObject();</text></para><para styleclass="Code Example"><text styleclass="Code Example" translate="true"> </text></para></td></tr></table>
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoVerify"></a>    
#### DoVerify(msg, jsonPath, expectedValue)

Checks that a given part of response equals the expected value.

			
**Parameters:**

<table styleclass="Default" style="cell-padding:2px; border-width:0px; border-spacing:0px; border-collapse:collapse; cell-border-width:1px; border-color:#c0c0c0; border-style:solid;">
  <tr style="vertical-align:top">
	<td style="width:150px; background-color:#c0c0c0;">
	  Name
	</td>
	<td style="width:100px; background-color:#c0c0c0;">
	  Type
	</td>
	<td style="width:450px; background-color:#c0c0c0;">
	  Description
	</td>
  </tr>
				  
					  <tr style="vertical-align:top">
						<td>msg</td>
						<td>string</td>
						<td>
								Message to write into the report.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>jsonPath</td>
						<td>string</td>
						<td>
								Path to the given node in the response object to use as a root for comparison with the expected value.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>expectedValue</td>
						<td>object</td>
						<td>
								Expected value.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
		


