Summary: This behavior pattern implements REST service client.

# RESTService

This behavior pattern implements REST service client.





**Behavior Pattern: RESTServiceBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Credential](#credential) | The HTTP Basic Authentication Credentials (if any). | GetCredential | SetCredential |
| [Method](#method) | The HTTP Method being used for the request (GET, POST, etc. | GetMethod | SetMethod |
| [Name](#name) | The name of the request operation | GetName |  |
| [Parameter](#parameter) | Get/Set single parameter by name. | GetParameter | SetParameter |
| [Parameters](#parameters) | The list of parameters available for this request url. | GetParameters | SetParameters |
| [ProxyHost](#proxyhost) | Proxy host name. | GetProxyHost | SetProxyHost |
| [ProxyPort](#proxyport) | Proxy port number. | GetProxyPort | SetProxyPort |
| [ProxyPwd](#proxypwd) | Proxy password. | GetProxyPwd | SetProxyPwd |
| [ProxyUser](#proxyuser) | Proxy user name. | GetProxyUser | SetProxyUser |
| [RequestBodyObject](#requestbodyobject) | The body of the HTTP request as a JavaScript object. | GetRequestBodyObject | SetRequestBodyObject |
| [RequestBodyText](#requestbodytext) | The body of the HTTP request in raw text format | GetRequestBodyText | SetRequestBodyText |
| [RequestHeader](#requestheader) | Get/Set Single HTTP header by name. | GetRequestHeader | SetRequestHeader |
| [RequestHeaders](#requestheaders) | The list of HTTP headers that are part of this request. | GetRequestHeaders | SetRequestHeaders |
| [ResponseBodyObject](#responsebodyobject) | The body of the HTTP response deserialized from JSON into a JavaScript object. | GetResponseBodyObject |  |
| [ResponseBodyText](#responsebodytext) | The body of the HTTP response in raw text format | GetResponseBodyText |  |
| [ResponseHeaders](#responseheaders) | Returns the list of HTTP headers returned from the HTTP response. | GetResponseHeaders |  |
| [ResponseIsErrorStatus](#responseiserrorstatus) | Returns 'true 'if an HTTP error code came back from the web service | GetResponseIsErrorStatus |  |
| [ResponseStatusCode](#responsestatuscode) | HTTP response code | GetResponseStatusCode |  |
| [ResponseStatusText](#responsestatustext) | Text version of the response code | GetResponseStatusText |  |
| [Url](#url) | The URL being used to access the web service | GetUrl | SetUrl |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoExecute](#doexecute) | Executes a REST service operation, substitutes any of the provided parameter values if necessary. |
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

Another way is to pass user name and password as first and second parameter respectively, e.g. `SeS("Operation_Name").SetCredential("fredbloggs", "MyPassword");`



Type: object


Accessors: GetCredential, SetCredential

```javascript
value = SeS('SomeRESTService').GetCredential()

SeS('SomeRESTService').SetCredential(value, value2)
```


<a name="Method"></a>
#### Method

The HTTP Method being used for the request (GET, POST, etc.)



Type: string


Accessors: GetMethod, SetMethod

```javascript
value = SeS('SomeRESTService').GetMethod()

SeS('SomeRESTService').SetMethod(value)
```


<a name="Name"></a>
#### Name

The name of the request operation



Type: string


Accessors: GetName

```javascript
value = SeS('SomeRESTService').GetName()
```


<a name="Parameter"></a>
#### Parameter

Get/Set single parameter by name.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| name | string | Name of a parameter. |




Type: object


Accessors: GetParameter, SetParameter

```javascript
value = SeS('SomeRESTService').GetParameter(/**string*/name)

SeS('SomeRESTService').SetParameter(/**string*/name, /**string*/value)
```


<a name="Parameters"></a>
#### Parameters

The list of parameters available for this request url.
Sample code:

```javascript
var parameters = SeS("Operation_Name").GetParameters();
for (var i = 0; i < parameters.length; i++)
{
    var name = parameters[i].Name;
    var token = parameters[i].TokenName;
    var value = parameters[i].Value;
}
```



Type: object


Accessors: GetParameters, SetParameters

```javascript
value = SeS('SomeRESTService').GetParameters()

SeS('SomeRESTService').SetParameters(name, value)
```


<a name="ProxyHost"></a>
#### ProxyHost

Proxy host name. Requires Rapise 8.1+.



Type: string


Accessors: GetProxyHost, SetProxyHost

```javascript
value = SeS('SomeRESTService').GetProxyHost()

SeS('SomeRESTService').SetProxyHost(value)
```


<a name="ProxyPort"></a>
#### ProxyPort

Proxy port number. Requires Rapise 8.1+.



Type: string


Accessors: GetProxyPort, SetProxyPort

```javascript
value = SeS('SomeRESTService').GetProxyPort()

SeS('SomeRESTService').SetProxyPort(value)
```


<a name="ProxyPwd"></a>
#### ProxyPwd

Proxy password. Requires Rapise 8.1+.



Type: string


Accessors: GetProxyPwd, SetProxyPwd

```javascript
value = SeS('SomeRESTService').GetProxyPwd()

SeS('SomeRESTService').SetProxyPwd(value)
```


<a name="ProxyUser"></a>
#### ProxyUser

Proxy user name. Requires Rapise 8.1+.



Type: string


Accessors: GetProxyUser, SetProxyUser

```javascript
value = SeS('SomeRESTService').GetProxyUser()

SeS('SomeRESTService').SetProxyUser(value)
```


<a name="RequestBodyObject"></a>
#### RequestBodyObject

The body of the HTTP request as a JavaScript object.
Sample code:

```javascript
var book = {};
book.Name = "A Christmas Carol";
book.AuthorId = 2;
book.GenreId = 3;
SeS("LibraryInformationSystem_Insert_Book").SetRequestBodyObject(book);
SeS("LibraryInformationSystem_Insert_Book").DoExecute({"session_id":sessionId});
```



Type: object


Accessors: GetRequestBodyObject, SetRequestBodyObject

```javascript
value = SeS('SomeRESTService').GetRequestBodyObject()

SeS('SomeRESTService').SetRequestBodyObject(value)
```


<a name="RequestBodyText"></a>
#### RequestBodyText

The body of the HTTP request in raw text format



Type: string


Accessors: GetRequestBodyText, SetRequestBodyText

```javascript
value = SeS('SomeRESTService').GetRequestBodyText()

SeS('SomeRESTService').SetRequestBodyText(value)
```


<a name="RequestHeader"></a>
#### RequestHeader

Get/Set Single HTTP header by name.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| name | string | HTTP Header name. |




Type: object


Accessors: GetRequestHeader, SetRequestHeader

```javascript
value = SeS('SomeRESTService').GetRequestHeader(/**string*/name)

SeS('SomeRESTService').SetRequestHeader(/**string*/name, /**string*/value)
```


<a name="RequestHeaders"></a>
#### RequestHeaders

The list of HTTP headers that are part of this request.
Sample code:

```javascript
var headers = SeS("Operation_Name").GetRequestHeaders();
for (var i = 0; i < headers.length; i++)
{
    var name = headers[i].Name;
    var value = headers[i].Value;
}
```



Type: object


Accessors: GetRequestHeaders, SetRequestHeaders

```javascript
value = SeS('SomeRESTService').GetRequestHeaders()

SeS('SomeRESTService').SetRequestHeaders(value, optValueVal)
```


<a name="ResponseBodyObject"></a>
#### ResponseBodyObject

The body of the HTTP response deserialized from JSON into a JavaScript object.
Sample code:

```javascript
SeS("LibraryInformationSystem_Get_BookById").DoExecute({"session_id":sessionId, "book_id":bookId});
var book = SeS("LibraryInformationSystem_Get_BookById").GetResponseBodyObject();
```



Type: object


Accessors: GetResponseBodyObject

```javascript
value = SeS('SomeRESTService').GetResponseBodyObject(jsonPath, info)
```


<a name="ResponseBodyText"></a>
#### ResponseBodyText

The body of the HTTP response in raw text format



Type: string


Accessors: GetResponseBodyText

```javascript
value = SeS('SomeRESTService').GetResponseBodyText()
```


<a name="ResponseHeaders"></a>
#### ResponseHeaders

Returns the list of HTTP headers returned from the HTTP response.
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

```javascript
value = SeS('SomeRESTService').GetResponseHeaders()
```


<a name="ResponseIsErrorStatus"></a>
#### ResponseIsErrorStatus

Returns 'true 'if an HTTP error code came back from the web service



Type: boolean


Accessors: GetResponseIsErrorStatus

```javascript
value = SeS('SomeRESTService').GetResponseIsErrorStatus()
```


<a name="ResponseStatusCode"></a>
#### ResponseStatusCode

HTTP response code



Type: number


Accessors: GetResponseStatusCode

```javascript
value = SeS('SomeRESTService').GetResponseStatusCode()
```


<a name="ResponseStatusText"></a>
#### ResponseStatusText

Text version of the response code



Type: string


Accessors: GetResponseStatusText

```javascript
value = SeS('SomeRESTService').GetResponseStatusText()
```


<a name="Url"></a>
#### Url

The URL being used to access the web service



Type: string


Accessors: GetUrl, SetUrl

```javascript
value = SeS('SomeRESTService').GetUrl()

SeS('SomeRESTService').SetUrl(value)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoExecute"></a>    
#### DoExecute

Executes a REST service operation, substitutes any of the provided parameter values if necessary.
Operation fails if HTTP status code is other than 200. If that is an intention, pass `ignoreStatus` as `true`.
Sample code:

```javascript
SeS("LibraryInformationSystem_Get_BookById").DoExecute({"session_id":sessionId, "book_id":bookId});
var book = SeS("LibraryInformationSystem_Get_BookById").GetResponseBodyObject();
```

```javascript
SeS('SomeRESTService').DoExecute(params, ignoreStatus)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| params | object |  JavaScript object `{"name1": "value1", "name2": "value2" }`. Parameter values that should be passed to the web service operation. |
| ignoreStatus | boolean |  Don't fail if operation status other than 200, just return the code<br>Optional, Default: "false". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.restservice.doexecute"></a>

<a name="DoRemoveParameter"></a>    
#### DoRemoveParameter

Remove one pre-defined parameter. Requires Rapise 6.6+

```javascript
SeS('SomeRESTService').DoRemoveParameter(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Parameter name |





<a name="see.also.restservice.doremoveparameter"></a>

<a name="DoRemoveRequestHeader"></a>    
#### DoRemoveRequestHeader

Remove one pre-defined request header by name. Requires Rapise 6.6+

```javascript
SeS('SomeRESTService').DoRemoveRequestHeader(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Header name |





<a name="see.also.restservice.doremoverequestheader"></a>

<a name="DoSetProxy"></a>    
#### DoSetProxy

Sets proxy for this request. Requires Rapise 8.1+.

```javascript
SeS('SomeRESTService').DoSetProxy(host, port, user, pwd)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| host | string |  Proxy host name or IP address. |
| port | string |  Proxy port. |
| user | string |  Proxy user name.<br>Optional. |
| pwd | string |  Proxy password.<br>Optional. |





<a name="see.also.restservice.dosetproxy"></a>

<a name="DoVerify"></a>    
#### DoVerify

Checks that a given part of response equals the expected value.

```javascript
SeS('SomeRESTService').DoVerify(msg, jsonPath, expectedValue)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| msg | string |  Message to write into the report. |
| jsonPath | string |  Path to the given node in the response object to use as a root for comparison with the expected value. |
| expectedValue | object |  Expected value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.restservice.doverify"></a>

  

