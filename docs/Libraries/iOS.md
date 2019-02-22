

# iOS

Global object. Use it to perform actions not related to a particular object. You do not need torecord or learn this object, it is always automatically available in any test.







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
			  <a href="#DoFlick">DoFlick</a>
			</td>
			<td>
				Flick action.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoGoToUrl">DoGoToUrl</a>
			</td>
			<td>
				Opens URL in active browser.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoScreenshot">DoScreenshot</a>
			</td>
			<td>
				Makes screenshot of a device.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoShake">DoShake</a>
			</td>
			<td>
				Shakes device.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSwipe">DoSwipe</a>
			</td>
			<td>
				Swipe action.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoTap">DoTap</a>
			</td>
			<td>
				Tap screen.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetCapability">GetCapability</a>
			</td>
			<td>
				Gets capability with specified name.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetContext">GetContext</a>
			</td>
			<td>
				Gets current context.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetDeviceOrientation">GetDeviceOrientation</a>
			</td>
			<td>
				Gets device orientation.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#SetContext">SetContext</a>
			</td>
			<td>
				Sets context.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#SetDeviceOrientation">SetDeviceOrientation</a>
			</td>
			<td>
				Sets device orientation.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoFlick"></a>    
#### DoFlick(endX, endY, startX, startY, touchCount)

Flick action.

			
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
						<td>endX</td>
						<td>number</td>
						<td>
								x coordinate where swipe ends (in pixels or relative units)
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>endY</td>
						<td>number</td>
						<td>
								y coordinate where swipe ends (in pixels or relative units)
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>startX</td>
						<td>number</td>
						<td>
								x coordinate where swipe begins (in pixels or relative units)<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>startY</td>
						<td>number</td>
						<td>
								y coordinate where swipe begins (in pixels or relative units)<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>touchCount</td>
						<td>number</td>
						<td>
								how many fingers to swipe with<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
'true' if successful, 'false' otherwise.
				
			
			
		
<a name="DoGoToUrl"></a>    
#### DoGoToUrl(url)

Opens URL in active browser.

			
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
						<td>url</td>
						<td>string</td>
						<td>
								
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
'true' if successful, 'false' otherwise.
				
			
			
		
<a name="DoScreenshot"></a>    
#### DoScreenshot()

Makes screenshot of a device.

			
			
**Returns:**
				
'true' if successful, 'false' otherwise.
				
			
			
		
<a name="DoShake"></a>    
#### DoShake()

Shakes device.

			
			
**Returns:**
				
'true' if successful, 'false' otherwise.
				
			
			
		
<a name="DoSwipe"></a>    
#### DoSwipe(endX, endY, startX, startY, duration, touchCount)

Swipe action.

			
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
						<td>endX</td>
						<td>number</td>
						<td>
								x coordinate where swipe ends (in pixels or relative units)
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>endY</td>
						<td>number</td>
						<td>
								y coordinate where swipe ends (in pixels or relative units)
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>startX</td>
						<td>number</td>
						<td>
								x coordinate where swipe begins (in pixels or relative units)<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>startY</td>
						<td>number</td>
						<td>
								y coordinate where swipe begins (in pixels or relative units)<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>duration</td>
						<td>number</td>
						<td>
								time (in seconds) to spend performing the swipe/drag<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>touchCount</td>
						<td>number</td>
						<td>
								how many fingers to swipe with<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
'true' if successful, 'false' otherwise.
				
			
			
		
<a name="DoTap"></a>    
#### DoTap(x, y, duration, tapCount, touchCount)

Tap screen.

			
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
						<td>x</td>
						<td>number</td>
						<td>
								x coordinate to tap (in pixels or relative units)<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>y</td>
						<td>number</td>
						<td>
								y coordinate to tap (in pixels or relative units)<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>duration</td>
						<td>number</td>
						<td>
								how long (in seconds) to tap<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>tapCount</td>
						<td>number</td>
						<td>
								how many times to tap<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>touchCount</td>
						<td>number</td>
						<td>
								how many fingers to tap with<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
'true' if successful, 'false' otherwise.
				
			
			
		
<a name="GetCapability"></a>    
#### GetCapability(name)

Gets capability with specified name.

			
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
								Name of a capability.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
Capability string.
				
			
			
		
<a name="GetContext"></a>    
#### GetContext()

Gets current context.

			
			
**Returns:**
				
Either NATIVE_APP or WEBVIEW_1.
				
			
			
		
<a name="GetDeviceOrientation"></a>    
#### GetDeviceOrientation()

Gets device orientation.

			
			
**Returns:**
				
Device orientation.
				
			
			
		
<a name="SetContext"></a>    
#### SetContext(name)

Sets context.

			
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
								Either NATIVE_APP or WEBVIEW_1.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="SetDeviceOrientation"></a>    
#### SetDeviceOrientation(orientation)

Sets device orientation.

			
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
						<td>orientation</td>
						<td>number</td>
						<td>
								ORIENTATION_PORTRAIT, ORIENTATION_LANDSCAPE
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
Device orientation.
				
			
			
		
		


