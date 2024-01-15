Summary: This is a JavaScript wrapper for RESTResponse

# RESTResponse

This is a JavaScript wrapper for RESTResponse






<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** |
| ------------ | --------------- |
| [GetResponseBodyObject](#getresponsebodyobject) | The body of the HTTP response as a JSON object |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [GetHeader](#getheader) | HTTP header |
|  [GetIsErrorStatus](#getiserrorstatus) | 'true' when there was an error |
|  [GetResponseBodyText](#getresponsebodytext) | The body of the HTTP response in raw text format |
|  [GetStatusCode](#getstatuscode) | HTTP response code |
|  [GetStatusText](#getstatustext) | Text version of the response code |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="GetResponseBodyObject"></a>
#### GetResponseBodyObject

The body of the HTTP response as a JSON object



Type: 





<!-- ============================== action detail ========================== -->

### Action Detail

<a name="GetHeader"></a>    
#### GetHeader

HTTP header

```javascript
RESTResponse.GetHeader(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Header Name |





<a name="see.also.restresponse.getheader"></a>

<a name="GetIsErrorStatus"></a>    
#### GetIsErrorStatus

'true' when there was an error

```javascript
RESTResponse.GetIsErrorStatus()
```





<a name="see.also.restresponse.getiserrorstatus"></a>

<a name="GetResponseBodyText"></a>    
#### GetResponseBodyText

The body of the HTTP response in raw text format

```javascript
RESTResponse.GetResponseBodyText()
```





<a name="see.also.restresponse.getresponsebodytext"></a>

<a name="GetStatusCode"></a>    
#### GetStatusCode

HTTP response code

```javascript
RESTResponse.GetStatusCode()
```





<a name="see.also.restresponse.getstatuscode"></a>

<a name="GetStatusText"></a>    
#### GetStatusText

Text version of the response code

```javascript
RESTResponse.GetStatusText()
```





<a name="see.also.restresponse.getstatustext"></a>

  

