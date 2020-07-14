Summary: Session object for SOAP and REST services.

# Session

Session object for SOAP and REST services.






<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** |
| ------------ | --------------- |
| [GetCredential](#getcredential) |  |
| [GetParameters](#getparameters) | Return common request parameters (array of [{'Name':somename,'Value':somevalue},. |
| [GetRequestHeaders](#getrequestheaders) | Return common HTTP Headers applied to each REST or SOAP request (array of [{'Name':somename,'Value':somevalue},. |
| [SetCredential](#setcredential) |  |
| [SetParameter](#setparameter) | Sets common request parameter. |
| [SetParameters](#setparameters) | Sets common request parameters. |
| [SetRequestHeader](#setrequestheader) | Sets common request header. |
| [SetRequestHeaders](#setrequestheaders) | Sets common HTTP Headers applied to each REST or SOAP request. |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[SetUrl](#seturl) | Enable URL replacement for all further requests. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="GetCredential"></a>
#### GetCredential




			
	
			
Type: 
			
			
		
<a name="GetParameters"></a>
#### GetParameters


Return common request parameters (array of [{'Name':somename,'Value':somevalue},...])

			
	
			
Type: 
			
			
		
<a name="GetRequestHeaders"></a>
#### GetRequestHeaders


Return common HTTP Headers applied to each REST or SOAP request (array of [{'Name':somename,'Value':somevalue},...])

			
	
			
Type: 
			
			
		
<a name="SetCredential"></a>
#### SetCredential




			
	
			
Type: 
			
			
		
<a name="SetParameter"></a>
#### SetParameter


Sets common request parameter. This parameter will be applied to all further REST and SOAP requests.

			
	
			
Type: 
			
			
		
<a name="SetParameters"></a>
#### SetParameters


Sets common request parameters. These parameters will be applied to all further REST and SOAP requests.

			
	
			
Type: 
			
			
		
<a name="SetRequestHeader"></a>
#### SetRequestHeader


Sets common request header. This header will be applied to all further REST and SOAP requests.

			
	
			
Type: 
			
			
		
<a name="SetRequestHeaders"></a>
#### SetRequestHeaders


Sets common HTTP Headers applied to each REST or SOAP request.

			
	
			
Type: 
			
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="SetUrl"></a>    
#### SetUrl

Enable URL replacement for all further requests. If request URL starts with oldUrl then replace the beginning with newUrl

```javascript
SetUrl(oldUrl, newUrl) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| oldUrl |  |	URL to find |
| newUrl |  |	new URL to use instead of oldUrl |





<a name="see.also.session.seturl"></a>

	

