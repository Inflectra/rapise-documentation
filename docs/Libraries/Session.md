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
|	[GetParameters](#getparameters) | Return common request parameters (array of `[{'Name':somename,'Value':somevalue},. |
|	[GetRequestHeaders](#getrequestheaders) | Return common HTTP Headers applied to each REST or SOAP request (array of `[{'Name':somename,'Value':somevalue},. |
|	[SetBaseUrl](#setbaseurl) | Enable URL replacement for all further requests. |
|	[SetCredential](#setcredential) | Sets HTTP Basic Authentication Credentials. |
|	[SetParameter](#setparameter) | Sets common request parameter. |
|	[SetParameters](#setparameters) | Sets common request parameters. |
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

<a name="GetParameters"></a>    
#### GetParameters

Return common request parameters (array of `[{'Name':somename,'Value':somevalue},...]`)

```javascript
GetParameters() 
```





<a name="see.also.session.getparameters"></a>

<a name="GetRequestHeaders"></a>    
#### GetRequestHeaders

Return common HTTP Headers applied to each REST or SOAP request (array of `[{'Name':somename,'Value':somevalue},...]`)

```javascript
GetRequestHeaders() 
```





<a name="see.also.session.getrequestheaders"></a>

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
| value | object |	User name or full object with credentials. |
| value2 | string |	Password string. Do not set this parameter if you pass object as the first one. |





<a name="see.also.session.setcredential"></a>

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

	

