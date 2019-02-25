# Cookies

This is a JavaScript wrapper for Cookies of Selenium .NET library.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[AddCookie](#AddCookie) | Adds a cookie to the current page. |
|	[AllCookies](#AllCookies) | Gets all cookies defined for the current page. |
|	[DeleteAllCookies](#DeleteAllCookies) | Deletes the cookie with the specified name from the page. |
|	[DeleteCookie](#DeleteCookie) | Deletes the specified cookie from the page. |
|	[DeleteCookieNamed](#DeleteCookieNamed) | Deletes the cookie with the specified name from the page. |
|	[GetCookieNamed](#GetCookieNamed) | Gets a cookie with the specified name. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="AddCookie"></a>    
#### AddCookie(cookie)

Adds a cookie to the current page.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cookie | Cookie |	Cookie object, e.g. {Name: "CookieName", Value: "CookieValue", Domain: "example.com", Path: "/", Expiry: "2018-12-28T13:15.00-05:00"}. |






<a name="AllCookies"></a>    
#### AllCookies()

Gets all cookies defined for the current page.






<a name="DeleteAllCookies"></a>    
#### DeleteAllCookies()

Deletes the cookie with the specified name from the page.






<a name="DeleteCookie"></a>    
#### DeleteCookie(cookie)

Deletes the specified cookie from the page.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cookie | Cookie |	Cookie object, e.g. {Name: "CookieName", Value: "CookieValue", Domain: "example.com", Path: "/", Expiry: "2018-12-28T13:15.00-05:00"}. |






<a name="DeleteCookieNamed"></a>    
#### DeleteCookieNamed(name)

Deletes the cookie with the specified name from the page.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	The name of the cookie to be deleted. |






<a name="GetCookieNamed"></a>    
#### GetCookieNamed(name)

Gets a cookie with the specified name.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	The name of the cookie to retrieve. |






	

