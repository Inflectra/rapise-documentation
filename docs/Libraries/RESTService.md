Summary: This behavior pattern implements REST service client.

# RESTService

This behavior pattern implements REST service client.
 
Extends [SeSSimulatedObject](SeSSimulatedObject.md)





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
			
		
<a name="RequestBodyText"></a>
#### RequestBodyText


The body of the HTTP request in raw text format

			
	
			
Type: string
			
			
Accessors: GetRequestBodyText, SetRequestBodyText
			
		
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
			
		
<a name="ResponseBodyObject"></a>
#### ResponseBodyObject


The body of the HTTP response deserialized from JSON into a JavaScript object.
Sample code:

```javascript
SeS("LibraryInformationSystem_Get_BookById").DoExecute({"session_id":sessionId, "book_id":bookId});
var book = SeS("LibraryInformationSystem_Get_BookById").GetResponseBodyObject();
```

			
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

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| params | object |	JavaScript object {"name1": "value1", "name2": "value2" }. Parameter values that should be passed to the web service operation.
Sample code:

```javascript
SeS("LibraryInformationSystem_Get_BookById").DoExecute({"session_id":sessionId, "book_id":bookId});
var book = SeS("LibraryInformationSystem_Get_BookById").GetResponseBodyObject();
``` |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.restservice.doexecute"></a>

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



<a name="see.also.restservice.doverify"></a>

	

