# Session

Session object.






<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** |
| ------------ | --------------- |
| [GetParameters](#GetParameters) | Return common request parameters (array of [{'Name':somename,'Value':somevalue},. |
| [GetRequestHeaders](#GetRequestHeaders) | Return common HTTP Headers applied to each REST or SOAP request (array of [{'Name':somename,'Value':somevalue},. |
| [SetParameter](#SetParameter) | Sets common request parameter. |
| [SetParameters](#SetParameters) | Sets common request parameters. |
| [SetRequestHeader](#SetRequestHeader) | Sets common request header. |
| [SetRequestHeaders](#SetRequestHeaders) | Sets common HTTP Headers applied to each REST or SOAP request. |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[SetUrl](#SetUrl) | Enable URL replacement for all further requests. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="GetParameters"></a>
#### GetParameters


Return common request parameters (array of [{'Name':somename,'Value':somevalue},...])

			
	
			
Type: 
			
			
		
<a name="GetRequestHeaders"></a>
#### GetRequestHeaders


Return common HTTP Headers applied to each REST or SOAP request (array of [{'Name':somename,'Value':somevalue},...])

			
	
			
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
#### SetUrl(oldUrl, newUrl)

Enable URL replacement for all further requests. If request URL starts with oldUrl then replace the beginning with newUrl


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| oldUrl |  |	URL to find |
| newUrl |  |	new URL to use instead of oldUrl |






	

