Summary: Session object for SOAP and REST services.

# Session

Session object for SOAP and REST services.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoRemoveParameter](#doremoveparameter) | Remove one pre-defined parameter. |
|	[DoRemoveRequestHeader](#doremoverequestheader) | Remove one pre-defined request header by name. |
|	[GetCredential](#getcredential) | Returns HTTP Basic Authentication credentials (if any). |
|	[GetNewRequest](#getnewrequest) | Create new `RESTService` object with 'GET' method and specified `url`. |
|	[GetParameters](#getparameters) | Return common request parameters (array of `[{'Name':somename,'Value':somevalue},. |
|	[GetProxyHost](#getproxyhost) | Returns proxy host. |
|	[GetProxyPort](#getproxyport) | Returns proxy port. |
|	[GetProxyPwd](#getproxypwd) | Returns proxy password. |
|	[GetProxyUser](#getproxyuser) | Returns proxy user name. |
|	[GetRequestHeaders](#getrequestheaders) | Return common HTTP Headers applied to each REST or SOAP request (array of `[{'Name':somename,'Value':somevalue},. |
|	[GetRESTRequest](#getrestrequest) | Create new `RESTService` object with 'GET' method and specified `url`. |
|	[SetBaseUrl](#setbaseurl) | Enable URL replacement for all further requests. |
|	[SetCredential](#setcredential) | Sets HTTP Basic Authentication Credentials. |
|	[SetIgnoreStatus](#setignorestatus) | Set to `true` to prevent REST requests with non 200 status code from failing the test. |
|	[SetParameter](#setparameter) | Sets common request parameter. |
|	[SetParameters](#setparameters) | Sets common request parameters. |
|	[SetProxy](#setproxy) | Sets proxy settings for the Session. |
|	[SetProxyHost](#setproxyhost) | Sets proxy host. |
|	[SetProxyPort](#setproxyport) | Sets proxy port. |
|	[SetProxyPwd](#setproxypwd) | Sets proxy password. |
|	[SetProxyUser](#setproxyuser) | Sets proxy user name. |
|	[SetRequestHeader](#setrequestheader) | Sets common request header. |
|	[SetRequestHeaders](#setrequestheaders) | Sets common HTTP Headers applied to each REST or SOAP request. |
|	[SetUrl](#seturl) | Deprecated. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoRemoveParameter"></a>    
#### DoRemoveParameter

Remove one pre-defined parameter. Requires Rapise 6.6+

```javascript
DoRemoveParameter(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Parameter name |





<a name="see.also.session.doremoveparameter"></a>

<a name="DoRemoveRequestHeader"></a>    
#### DoRemoveRequestHeader

Remove one pre-defined request header by name. Requires Rapise 6.6+

```javascript
DoRemoveRequestHeader(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Header name |





<a name="see.also.session.doremoverequestheader"></a>

<a name="GetCredential"></a>    
#### GetCredential

Returns HTTP Basic Authentication credentials (if any).

```javascript
GetCredential() 
```





<a name="see.also.session.getcredential"></a>

<a name="GetNewRequest"></a>    
#### GetNewRequest

Create new `RESTService` object with 'GET' method and specified `url`.

```javascript
GetNewRequest(url, name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |	Request URL |
| name | string |	Request name used to display in the report<br>Optional. |





<a name="see.also.session.getnewrequest"></a>

<a name="GetParameters"></a>    
#### GetParameters

Return common request parameters (array of `[{'Name':somename,'Value':somevalue},...]`)

```javascript
GetParameters() 
```





<a name="see.also.session.getparameters"></a>

<a name="GetProxyHost"></a>    
#### GetProxyHost

Returns proxy host. Requires Rapise 8.1+.

```javascript
GetProxyHost() 
```





<a name="see.also.session.getproxyhost"></a>

<a name="GetProxyPort"></a>    
#### GetProxyPort

Returns proxy port. Requires Rapise 8.1+.

```javascript
GetProxyPort() 
```





<a name="see.also.session.getproxyport"></a>

<a name="GetProxyPwd"></a>    
#### GetProxyPwd

Returns proxy password. Requires Rapise 8.1+.

```javascript
GetProxyPwd() 
```





<a name="see.also.session.getproxypwd"></a>

<a name="GetProxyUser"></a>    
#### GetProxyUser

Returns proxy user name. Requires Rapise 8.1+.

```javascript
GetProxyUser() 
```





<a name="see.also.session.getproxyuser"></a>

<a name="GetRequestHeaders"></a>    
#### GetRequestHeaders

Return common HTTP Headers applied to each REST or SOAP request (array of `[{'Name':somename,'Value':somevalue},...]`)

```javascript
GetRequestHeaders() 
```





<a name="see.also.session.getrequestheaders"></a>

<a name="GetRESTRequest"></a>    
#### GetRESTRequest

Create new `RESTService` object with 'GET' method and specified `url`.

```javascript
GetRESTRequest(defNameOrPath, id) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| defNameOrPath | string |	Path to the .rest definition file |
| id | string |	Name of the request (as specified in the .rest definition file) |





<a name="see.also.session.getrestrequest"></a>

<a name="SetBaseUrl"></a>    
#### SetBaseUrl

Enable URL replacement for all further requests. If request URL starts with oldUrl then replace the beginning with newUrl. Requires Rapise 6.6+

```javascript
SetBaseUrl(oldUrl, newUrl) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| oldUrl | string |	URL to find |
| newUrl | string |	new URL to use instead of oldUrl |





<a name="see.also.session.setbaseurl"></a>

<a name="SetCredential"></a>    
#### SetCredential

Sets HTTP Basic Authentication Credentials. Sample code:

```javascript
var credential = {};
credential.UserName = "fredbloggs";
credential.Password = "MyPassword";
SeS("Operation_Name").SetCredential(credential);
``` 

Another way is to pass user name and password as first and second parameter respectively, e.g. `SeS("Operation_Name").SetCredential("fredbloggs", "MyPassword");`

```javascript
SetCredential(value, value2) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string \| object |	User name or full object with credentials. |
| value2 | string |	Password string. Do not set this parameter if you pass object as the first one. |





<a name="see.also.session.setcredential"></a>

<a name="SetIgnoreStatus"></a>    
#### SetIgnoreStatus

Set to `true` to prevent REST requests with non 200 status code from failing the test. It would `<req>.DoExecute()` will just return `true`/`false` but the line in report will always be marked as `Passed`.

```javascript
SetIgnoreStatus(ignore) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| ignore | boolean |	`true` to ignore status code |





<a name="see.also.session.setignorestatus"></a>

<a name="SetParameter"></a>    
#### SetParameter

Sets common request parameter. This parameter will be applied to all further REST and SOAP requests.

```javascript
SetParameter(name, value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Parameter name |
| value | string |	Parameter value |





<a name="see.also.session.setparameter"></a>

<a name="SetParameters"></a>    
#### SetParameters

Sets common request parameters. These parameters will be applied to all further REST and SOAP requests. Accepts one of:

- Full array of parameters: `[{'Name':somename,'Value':somevalue},...]`
- Single parameter as object: `{'Name':somename,'Value':somevalue}`
- Single parameter as 2 input parameters: `Session.SetParameters(name,value)`.

```javascript
SetParameters(requestParam, optValueVal) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| requestParam | object |	Parameters or single parameter. |
| optValueVal | string |	Parameter value, when specified. If this value is set, then 'requestParam' should be a string and method signature will be `Session.SetParameters('name','value')`<br>Optional. |





<a name="see.also.session.setparameters"></a>

<a name="SetProxy"></a>    
#### SetProxy

Sets proxy settings for the Session. Requires Rapise 8.1+.

```javascript
SetProxy(host, port, user, pwd) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| host | string |	Proxy host name or IP address. |
| port | string |	Proxy port. |
| user | string |	Proxy user name. |
| pwd | string |	Proxy password. |





<a name="see.also.session.setproxy"></a>

<a name="SetProxyHost"></a>    
#### SetProxyHost

Sets proxy host. Requires Rapise 8.1+.

```javascript
SetProxyHost(value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	Host name or IP address. |





<a name="see.also.session.setproxyhost"></a>

<a name="SetProxyPort"></a>    
#### SetProxyPort

Sets proxy port. Requires Rapise 8.1+.

```javascript
SetProxyPort(value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	Port number. |





<a name="see.also.session.setproxyport"></a>

<a name="SetProxyPwd"></a>    
#### SetProxyPwd

Sets proxy password. Requires Rapise 8.1+.

```javascript
SetProxyPwd(value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	Proxy password. |





<a name="see.also.session.setproxypwd"></a>

<a name="SetProxyUser"></a>    
#### SetProxyUser

Sets proxy user name. Requires Rapise 8.1+.

```javascript
SetProxyUser(value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |	User name. |





<a name="see.also.session.setproxyuser"></a>

<a name="SetRequestHeader"></a>    
#### SetRequestHeader

Sets common request header. This header will be applied to all further REST and SOAP requests.

```javascript
SetRequestHeader(name, value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	HTTP header name |
| value | string |	HTTP header value |





<a name="see.also.session.setrequestheader"></a>

<a name="SetRequestHeaders"></a>    
#### SetRequestHeaders

Sets common HTTP Headers applied to each REST or SOAP request. Accepts one of:

- Full array of headers: `[{'Name':somename,'Value':somevalue},...]`
- Single header as object: `{'Name':somename,'Value':somevalue}`
- Single header as 2 input parameters: `Session.SetRequestHeaders(name, value)`

```javascript
SetRequestHeaders(requestParam, optValueVal) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| requestParam | object |	Header(s) object or single header name. |
| optValueVal | string |	Header value, when specified. If this value is set, then 'requestParam' should be a string and method signature will be `Session.SetRequestHeaders('name','value')`<br>Optional. |





<a name="see.also.session.setrequestheaders"></a>

<a name="SetUrl"></a>    
#### SetUrl

Deprecated. Same as `SetBaseUrl`.

```javascript
SetUrl(oldUrl, newUrl) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| oldUrl | string |	URL to find |
| newUrl | string |	new URL to use instead of oldUrl |





<a name="see.also.session.seturl"></a>

	

