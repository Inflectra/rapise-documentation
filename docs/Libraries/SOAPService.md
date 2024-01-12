Summary: This behavior pattern implements SOAP service client.

# SOAPService

This behavior pattern implements SOAP service client.





**Behavior Pattern: SOAPServiceBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Credential](#credential) | The HTTP Basic Authentication Credentials (if any). | GetCredential | SetCredential |
| [Name](#name) | The name of the request operation | GetName |  |
| [ProxyHost](#proxyhost) | Proxy host name. | GetProxyHost | SetProxyHost |
| [ProxyPort](#proxyport) | Proxy port number. | GetProxyPort | SetProxyPort |
| [ProxyPwd](#proxypwd) | Proxy password. | GetProxyPwd | SetProxyPwd |
| [ProxyUser](#proxyuser) | Proxy user name. | GetProxyUser | SetProxyUser |
| [ResponseBodyObject](#responsebodyobject) | The body of the HTTP response deserialized from SOAP into a JavaScript object. | GetResponseBodyObject |  |
| [ResponseBodyText](#responsebodytext) | The body of the HTTP response in raw text format. | GetResponseBodyText |  |
| [ResponseHeaders](#responseheaders) | Returns the list of HTTP headers returned with the HTTP response. | GetResponseHeaders |  |
| [ResponseIsErrorStatus](#responseiserrorstatus) | Returns 'true 'if an HTTP error code came back from the web service. | GetResponseIsErrorStatus |  |
| [Url](#url) | The URL being used to access the web service. | GetUrl | SetUrl |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoExecute](#doexecute) | Executes a SOAP service operation, substituting any of the provided parameter values if necessary. |
|  [DoExecuteRaw](#doexecuteraw) | Sends a SOAP request as is. |
|  [DoRemoveParameter](#doremoveparameter) | Remove one pre-defined parameter. |
|  [DoRemoveRequestHeader](#doremoverequestheader) | Remove one pre-defined request header by name. |
|  [DoSetProxy](#dosetproxy) | Sets proxy for this request. |
|  [DoVerify](#doverify) | Checks that a given part of response equals the expected value. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="Credential"></a>
#### Credential


The HTTP Basic Authentication Credentials (if any).
Sample code:

```javascript
var credential = {};
credential.UserName = "fredbloggs";
credential.Password = "MyPassword";
SeS("Operation_Name").SetCredential(credential);
```

      
  
      
Type: object
      
      
Accessors: GetCredential, SetCredential
      
    
<a name="Name"></a>
#### Name


The name of the request operation

      
  
      
Type: string
      
      
Accessors: GetName
      
    
<a name="ProxyHost"></a>
#### ProxyHost


Proxy host name. Requires Rapise 8.1+.

      
  
      
Type: string
      
      
Accessors: GetProxyHost, SetProxyHost
      
    
<a name="ProxyPort"></a>
#### ProxyPort


Proxy port number. Requires Rapise 8.1+.

      
  
      
Type: string
      
      
Accessors: GetProxyPort, SetProxyPort
      
    
<a name="ProxyPwd"></a>
#### ProxyPwd


Proxy password. Requires Rapise 8.1+.

      
  
      
Type: string
      
      
Accessors: GetProxyPwd, SetProxyPwd
      
    
<a name="ProxyUser"></a>
#### ProxyUser


Proxy user name. Requires Rapise 8.1+.

      
  
      
Type: string
      
      
Accessors: GetProxyUser, SetProxyUser
      
    
<a name="ResponseBodyObject"></a>
#### ResponseBodyObject


The body of the HTTP response deserialized from SOAP into a JavaScript object.

      
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| jsonPath | string | Path to a sub-object within response object. E.g. 'Body.Connection_AuthenticateResult'.<br>Optional, Default: "Body". |
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


Returns the list of HTTP headers returned with the HTTP response.
Sample code:

```javascript
var headers = SeS("Operation_Name").GetResponseHeaders();
for (var i = 0; i < headers.length; i++)
{
    var name = headers[i].Name;
    var value = headers[i].Value;
}
```

      
  
      
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
#### DoExecute

Executes a SOAP service operation, substituting any of the provided parameter values if necessary.

```javascript
SeS('SomeSOAPService').DoExecute(method, params, headers)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| method | string |  Name of a SOAP method. |
| params | object |  JavaScript object `{"name1": "value1", "name2": "value2" }`. Parameter values that should be passed to the web service operation. |
| headers | object |  Array of header name/value pairs. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.soapservice.doexecute"></a>

<a name="DoExecuteRaw"></a>    
#### DoExecuteRaw

Sends a SOAP request as is.

```javascript
SeS('SomeSOAPService').DoExecuteRaw(method, body, params)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| method | string |  Name of a SOAP method. |
| body | string |  SOAP xml string. |
| params | object |  JavaScript object `{"name1": "value1", "name2": "value2" }`. Parameter values that should be passed to the web service operation. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.soapservice.doexecuteraw"></a>

<a name="DoRemoveParameter"></a>    
#### DoRemoveParameter

Remove one pre-defined parameter. Requires Rapise 6.6+

```javascript
SeS('SomeSOAPService').DoRemoveParameter(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Parameter name |





<a name="see.also.soapservice.doremoveparameter"></a>

<a name="DoRemoveRequestHeader"></a>    
#### DoRemoveRequestHeader

Remove one pre-defined request header by name. Requires Rapise 6.6+

```javascript
SeS('SomeSOAPService').DoRemoveRequestHeader(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Header name |





<a name="see.also.soapservice.doremoverequestheader"></a>

<a name="DoSetProxy"></a>    
#### DoSetProxy

Sets proxy for this request. Requires Rapise 8.1+.

```javascript
SeS('SomeSOAPService').DoSetProxy(host, port, user, pwd)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| host | string |  Proxy host name or IP address. |
| port | string |  Proxy port. |
| user | string |  Proxy user name.<br>Optional. |
| pwd | string |  Proxy password.<br>Optional. |





<a name="see.also.soapservice.dosetproxy"></a>

<a name="DoVerify"></a>    
#### DoVerify

Checks that a given part of response equals the expected value.

```javascript
SeS('SomeSOAPService').DoVerify(msg, jsonPath, expectedValue)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| msg | string |  Message to write into the report. |
| jsonPath | string |  Path to the given node in the response object to use as a root for comparison with the expected value. |
| expectedValue | object |  Expected value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.soapservice.doverify"></a>

  

