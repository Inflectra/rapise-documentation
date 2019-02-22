

# Cookies

This is a JavaScript wrapper for Cookies of Selenium .NET library.







<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->
	
	
	
### Action Summary

<table styleclass="Default" style="cell-padding:2px; border-width:0px; border-spacing:0px; border-collapse:collapse; cell-border-width:1px; border-color:#c0c0c0; border-style:solid;">
		  <tr style="vertical-align:top">
			<td  style="width:200px; background-color:#c0c0c0;">
			  Action
			</td>
			<td style="width:450px; background-color:#c0c0c0;">
			  Description
			</td>
		  </tr>
		 
		  <tr style="vertical-align:top">
			<td>
			  <a href="#AddCookie">AddCookie</a>
			</td>
			<td>
				Adds a cookie to the current page.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#AllCookies">AllCookies</a>
			</td>
			<td>
				Gets all cookies defined for the current page.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DeleteAllCookies">DeleteAllCookies</a>
			</td>
			<td>
				Deletes the cookie with the specified name from the page.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DeleteCookie">DeleteCookie</a>
			</td>
			<td>
				Deletes the specified cookie from the page.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DeleteCookieNamed">DeleteCookieNamed</a>
			</td>
			<td>
				Deletes the cookie with the specified name from the page.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetCookieNamed">GetCookieNamed</a>
			</td>
			<td>
				Gets a cookie with the specified name.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="AddCookie"></a>    
#### AddCookie(cookie)

Adds a cookie to the current page.

			
**Parameters:**

<table styleclass="Default" style="cell-padding:2px; border-width:0px; border-spacing:0px; border-collapse:collapse; cell-border-width:1px; border-color:#c0c0c0; border-style:solid;">
  <tr style="vertical-align:top">
	<td style="width:150px; background-color:#c0c0c0;">
	  Name
	</td>
	<td style="width:100px; background-color:#c0c0c0;">
	  Type
	</td>
	<td style="width:450px; background-color:#c0c0c0;">
	  Description
	</td>
  </tr>
				  
					  <tr style="vertical-align:top">
						<td>cookie</td>
						<td>Cookie</td>
						<td>
								Cookie object, e.g. {Name: "CookieName", Value: "CookieValue", Domain: "example.com", Path: "/", Expiry: "2018-12-28T13:15.00-05:00"}.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
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

<table styleclass="Default" style="cell-padding:2px; border-width:0px; border-spacing:0px; border-collapse:collapse; cell-border-width:1px; border-color:#c0c0c0; border-style:solid;">
  <tr style="vertical-align:top">
	<td style="width:150px; background-color:#c0c0c0;">
	  Name
	</td>
	<td style="width:100px; background-color:#c0c0c0;">
	  Type
	</td>
	<td style="width:450px; background-color:#c0c0c0;">
	  Description
	</td>
  </tr>
				  
					  <tr style="vertical-align:top">
						<td>cookie</td>
						<td>Cookie</td>
						<td>
								Cookie object, e.g. {Name: "CookieName", Value: "CookieValue", Domain: "example.com", Path: "/", Expiry: "2018-12-28T13:15.00-05:00"}.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="DeleteCookieNamed"></a>    
#### DeleteCookieNamed(name)

Deletes the cookie with the specified name from the page.

			
**Parameters:**

<table styleclass="Default" style="cell-padding:2px; border-width:0px; border-spacing:0px; border-collapse:collapse; cell-border-width:1px; border-color:#c0c0c0; border-style:solid;">
  <tr style="vertical-align:top">
	<td style="width:150px; background-color:#c0c0c0;">
	  Name
	</td>
	<td style="width:100px; background-color:#c0c0c0;">
	  Type
	</td>
	<td style="width:450px; background-color:#c0c0c0;">
	  Description
	</td>
  </tr>
				  
					  <tr style="vertical-align:top">
						<td>name</td>
						<td>string</td>
						<td>
								The name of the cookie to be deleted.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="GetCookieNamed"></a>    
#### GetCookieNamed(name)

Gets a cookie with the specified name.

			
**Parameters:**

<table styleclass="Default" style="cell-padding:2px; border-width:0px; border-spacing:0px; border-collapse:collapse; cell-border-width:1px; border-color:#c0c0c0; border-style:solid;">
  <tr style="vertical-align:top">
	<td style="width:150px; background-color:#c0c0c0;">
	  Name
	</td>
	<td style="width:100px; background-color:#c0c0c0;">
	  Type
	</td>
	<td style="width:450px; background-color:#c0c0c0;">
	  Description
	</td>
  </tr>
				  
					  <tr style="vertical-align:top">
						<td>name</td>
						<td>string</td>
						<td>
								The name of the cookie to retrieve.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
		


