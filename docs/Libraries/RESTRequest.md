Summary: This is a JavaScript wrapper for RESTRequest

# RESTRequest

This is a JavaScript wrapper for RESTRequest






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoRemoveParameter](#doremoveparameter) | Remove one pre-defined parameter. |
|  [DoRemoveRequestHeader](#doremoverequestheader) | Remove one pre-defined request header by name. |
|  [GetCredential](#getcredential) | The HTTP Basic Authentication Credentials (if any). |
|  [GetHeader](#getheader) | HTTP header |
|  [GetMethod](#getmethod) | The HTTP Method being used for the request (GET, POST, etc. |
|  [GetName](#getname) | The name of the request operation |
|  [GetParameter](#getparameter) | Access request parameters. |
|  [GetRequestBodyText](#getrequestbodytext) | The body of the HTTP request in raw text format |
|  [GetUrl](#geturl) | The URL being used to access the web service |
|  [SetCredential](#setcredential) | The HTTP Basic Authentication Credentials (if any). |
|  [SetHeader](#setheader) | HTTP header |
|  [SetMethod](#setmethod) | The HTTP Method being used for the request (GET, POST, etc. |
|  [SetParameter](#setparameter) | Access request parameters. |
|  [SetRequestBodyText](#setrequestbodytext) | The body of the HTTP request in raw text format |
|  [SetUrl](#seturl) | The URL being used to access the web service |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoRemoveParameter"></a>    
#### DoRemoveParameter

Remove one pre-defined parameter.

```javascript
RESTRequest.DoRemoveParameter(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Parameter name |





<a name="see.also.restrequest.doremoveparameter"></a>

<a name="DoRemoveRequestHeader"></a>    
#### DoRemoveRequestHeader

Remove one pre-defined request header by name.

```javascript
RESTRequest.DoRemoveRequestHeader(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Header name |





<a name="see.also.restrequest.doremoverequestheader"></a>

<a name="GetCredential"></a>    
#### GetCredential

The HTTP Basic Authentication Credentials (if any).
Sample code:

```javascript
var credential = {};
credential.UserName = "fredbloggs";
credential.Password = "MyPassword";
SeS("Operation_Name").SetCredential(credential);
``` 

Another way is to pass user name and password as first and second parameter respectively, e.g. `SeS("Operation_Name").SetCredential("fredbloggs", "MyPassword");`

```javascript
RESTRequest.GetCredential()
```





<a name="see.also.restrequest.getcredential"></a>

<a name="GetHeader"></a>    
#### GetHeader

HTTP header

```javascript
RESTRequest.GetHeader(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Header Name |





<a name="see.also.restrequest.getheader"></a>

<a name="GetMethod"></a>    
#### GetMethod

The HTTP Method being used for the request (GET, POST, etc.)

```javascript
RESTRequest.GetMethod()
```





<a name="see.also.restrequest.getmethod"></a>

<a name="GetName"></a>    
#### GetName

The name of the request operation

```javascript
RESTRequest.GetName()
```





<a name="see.also.restrequest.getname"></a>

<a name="GetParameter"></a>    
#### GetParameter

Access request parameters. Request Body, Headers and Url is then pre-processed by replacing each {paramName} entry with paramName's value.

```javascript
RESTRequest.GetParameter(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Name of a parameter. |





<a name="see.also.restrequest.getparameter"></a>

<a name="GetRequestBodyText"></a>    
#### GetRequestBodyText

The body of the HTTP request in raw text format

```javascript
RESTRequest.GetRequestBodyText()
```





<a name="see.also.restrequest.getrequestbodytext"></a>

<a name="GetUrl"></a>    
#### GetUrl

The URL being used to access the web service

```javascript
RESTRequest.GetUrl()
```





<a name="see.also.restrequest.geturl"></a>

<a name="SetCredential"></a>    
#### SetCredential

The HTTP Basic Authentication Credentials (if any).
Sample code:

```javascript
var credential = {};
credential.UserName = "fredbloggs";
credential.Password = "MyPassword";
SeS("Operation_Name").SetCredential(credential);
``` 

Another way is to pass user name and password as first and second parameter respectively, e.g. `SeS("Operation_Name").SetCredential("fredbloggs", "MyPassword");`

```javascript
RESTRequest.SetCredential(value, value2)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string \| object |  User name or full object with credentials. |
| value2 | string |  Password string. Do not set this parameter if you pass object as the first one. |





<a name="see.also.restrequest.setcredential"></a>

<a name="SetHeader"></a>    
#### SetHeader

HTTP header

```javascript
RESTRequest.SetHeader(name, value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Header Name |
| value | string |  Header Value |





<a name="see.also.restrequest.setheader"></a>

<a name="SetMethod"></a>    
#### SetMethod

The HTTP Method being used for the request (GET, POST, etc.)

```javascript
RESTRequest.SetMethod(method)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| method | string |  New request method (if you ever need it!) |





<a name="see.also.restrequest.setmethod"></a>

<a name="SetParameter"></a>    
#### SetParameter

Access request parameters. Request Body, Headers and Url is then pre-processed by replacing each {paramName} entry with paramName's value.

```javascript
RESTRequest.SetParameter(name, value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Name of a parameter. |
| value | string |  Value of a parameter |





<a name="see.also.restrequest.setparameter"></a>

<a name="SetRequestBodyText"></a>    
#### SetRequestBodyText

The body of the HTTP request in raw text format

```javascript
RESTRequest.SetRequestBodyText(body)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| body | string |  New version of request data |





<a name="see.also.restrequest.setrequestbodytext"></a>

<a name="SetUrl"></a>    
#### SetUrl

The URL being used to access the web service

```javascript
RESTRequest.SetUrl(url)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| url | string |  New Url |





<a name="see.also.restrequest.seturl"></a>

  

