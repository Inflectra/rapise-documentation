Summary: This is a JavaScript wrapper for Cookies of Selenium .NET library.

# Cookies

This is a JavaScript wrapper for Cookies of Selenium .NET library.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[AddCookie](#addcookie) | Adds a cookie to the current page. |
|	[AllCookies](#allcookies) | Gets all cookies defined for the current page. |
|	[DeleteAllCookies](#deleteallcookies) | Deletes the cookie with the specified name from the page. |
|	[DeleteCookie](#deletecookie) | Deletes the specified cookie from the page. |
|	[DeleteCookieNamed](#deletecookienamed) | Deletes the cookie with the specified name from the page. |
|	[GetCookieNamed](#getcookienamed) | Gets a cookie with the specified name. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="AddCookie"></a>    
#### AddCookie

Adds a cookie to the current page.

```javascript
AddCookie(cookie) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cookie | Cookie |	Cookie object, e.g. {Name: "CookieName", Value: "CookieValue", Domain: "example.com", Path: "/", Expiry: "2018-12-28T13:15.00-05:00"}. |





<a name="see.also.cookies.addcookie"></a>

<a name="AllCookies"></a>    
#### AllCookies

Gets all cookies defined for the current page.

```javascript
AllCookies() 
```





<a name="see.also.cookies.allcookies"></a>

<a name="DeleteAllCookies"></a>    
#### DeleteAllCookies

Deletes the cookie with the specified name from the page.

```javascript
DeleteAllCookies() 
```





<a name="see.also.cookies.deleteallcookies"></a>

<a name="DeleteCookie"></a>    
#### DeleteCookie

Deletes the specified cookie from the page.

```javascript
DeleteCookie(cookie) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cookie | Cookie |	Cookie object, e.g. {Name: "CookieName", Value: "CookieValue", Domain: "example.com", Path: "/", Expiry: "2018-12-28T13:15.00-05:00"}. |





<a name="see.also.cookies.deletecookie"></a>

<a name="DeleteCookieNamed"></a>    
#### DeleteCookieNamed

Deletes the cookie with the specified name from the page.

```javascript
DeleteCookieNamed(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	The name of the cookie to be deleted. |





<a name="see.also.cookies.deletecookienamed"></a>

<a name="GetCookieNamed"></a>    
#### GetCookieNamed

Gets a cookie with the specified name.

```javascript
GetCookieNamed(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	The name of the cookie to retrieve. |





<a name="see.also.cookies.getcookienamed"></a>

	

