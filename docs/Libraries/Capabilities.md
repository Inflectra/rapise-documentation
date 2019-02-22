

# Capabilities

This is a JavaScript wrapper for DesiredCapabilities of Selenium .NET library.For code complete feature use class name CapabilitiesWrapper, e.g. <br><br><p style="margin-left: 30px;"><code>var /&#42;&#42;CapabilitiesWrapper&#42;/caps = WebDriver.CreateDesiredCapabilities();</code></p>







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
			  <a href="#GetCapability">GetCapability</a>
			</td>
			<td>
				Gets a capability of the browser.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#HasCapability">HasCapability</a>
			</td>
			<td>
				Gets a value indicating whether the browser has a given capability.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#SetCapability">SetCapability</a>
			</td>
			<td>
				Sets a capability of the browser.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="GetCapability"></a>    
#### GetCapability(capability)

Gets a capability of the browser.

			
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
						<td>capability</td>
						<td>string</td>
						<td>
								The capability to get.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
capability value.
				
			
			
		
<a name="HasCapability"></a>    
#### HasCapability(capability)

Gets a value indicating whether the browser has a given capability.

			
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
						<td>capability</td>
						<td>string</td>
						<td>
								The capability to get.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
'true' if the capability is set, 'false' - otherwise.
				
			
			
		
<a name="SetCapability"></a>    
#### SetCapability(capability, capabilityValue)

Sets a capability of the browser.

			
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
						<td>capability</td>
						<td>string</td>
						<td>
								The capability to get.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>capabilityValue</td>
						<td>string</td>
						<td>
								The value for the capability.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
		


