

# SOAPService

This behavior pattern implements SOAP service client.
 
Extends SeSSimulatedObject.






**Behavior Pattern: SOAPServiceBehavior**


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
      <a href="#ResponseBodyObject">ResponseBodyObject</a>
		</td>
		<td>
			The body of the HTTP response deserialized from SOAP into a JavaScript object.
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
			The body of the HTTP response in raw text format.
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
			Returns the list of HTTP headers returned with the HTTP response.
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
			Returns 'true 'if an HTTP error code came back from the web service.
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
			The URL being used to access the web service.
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
				Executes a SOAP service operation, substituting any of the provided parameter values if necessary.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoExecuteRaw">DoExecuteRaw</a>
			</td>
			<td>
				Sends a SOAP request as is.
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
						<td>method</td>
						<td>string</td>
						<td>
								Name of a SOAP method.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>params</td>
						<td>object</td>
						<td>
								JavaScript object {"name1": "value1", "name2": "value2" }. Parameter values that should be passed to the web service operation.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>headers</td>
						<td>object</td>
						<td>
								Array of header name/value pairs.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoExecuteRaw"></a>    
#### DoExecuteRaw(method, body, params)

Sends a SOAP request as is.

			
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
						<td>method</td>
						<td>string</td>
						<td>
								Name of a SOAP method.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>body</td>
						<td>string</td>
						<td>
								SOAP xml string.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>params</td>
						<td>object</td>
						<td>
								JavaScript object {"name1": "value1", "name2": "value2" }. Parameter values that should be passed to the web service operation.
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
				
			
			
		
		


