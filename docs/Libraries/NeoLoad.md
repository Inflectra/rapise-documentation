

# NeoLoad

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
			  <a href="#CaptureBrowserPerformance">CaptureBrowserPerformance</a>
			</td>
			<td>
				Captures duration of loading a page and resources.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#CaptureHostPerformance">CaptureHostPerformance</a>
			</td>
			<td>
				Sends host performance metrics to NeoLoad: CPU, Memory, Network, Battery.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#CapturePerformanceValue">CapturePerformanceValue</a>
			</td>
			<td>
				Sends performance value to NeoLoad.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#CreateClient">CreateClient</a>
			</td>
			<td>
				Connects to NeoLoad.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#EndTransaction">EndTransaction</a>
			</td>
			<td>
				Marks end of a transaction and sends performance metrics to NeoLoad.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetNetworkInterfaceNames">GetNetworkInterfaceNames</a>
			</td>
			<td>
				Gets names of network interfaces.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#SetBaseContainer">SetBaseContainer</a>
			</td>
			<td>
				Sets current step (Init, Actions, End) during test conversion
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#SetContainer">SetContainer</a>
			</td>
			<td>
				Sets current container/business transaction during test conversion
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#StartTransaction">StartTransaction</a>
			</td>
			<td>
				Marks start of a transaction.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="CaptureBrowserPerformance"></a>    
#### CaptureBrowserPerformance(url)

Captures duration of loading a page and resources.

			
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
						<td></td>
						<td>
								Node name for NeoLoad entry tree.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="CaptureHostPerformance"></a>    
#### CaptureHostPerformance()

Sends host performance metrics to NeoLoad: CPU, Memory, Network, Battery.

			
			
			
		
<a name="CapturePerformanceValue"></a>    
#### CapturePerformanceValue(entry, path, units, value)

Sends performance value to NeoLoad.

			
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
						<td>entry</td>
						<td></td>
						<td>
								Name of a group of performance metrics. Can be a transaction name.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>path</td>
						<td></td>
						<td>
								Name of a metric to capture.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>units</td>
						<td></td>
						<td>
								Units of measure.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>value</td>
						<td></td>
						<td>
								Current value of the metric.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="CreateClient"></a>    
#### CreateClient(hardware, location, networkInterface)

Connects to NeoLoad.

			
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
						<td>hardware</td>
						<td>string</td>
						<td>
								Hardware details (Apple MacBook Pro, Sony Vaio, etc.)
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>location</td>
						<td>string</td>
						<td>
								Location information.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>networkInterface</td>
						<td>string</td>
						<td>
								Name of network interface to monitor. Names of available interfaces can be obtained using GetNetworkInterfaceNames.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="EndTransaction"></a>    
#### EndTransaction(name)

Marks end of a transaction and sends performance metrics to NeoLoad.

			
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
								Name of a transaction.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="GetNetworkInterfaceNames"></a>    
#### GetNetworkInterfaceNames()

Gets names of network interfaces. Use one of them to CreateClient.

			
			
			
		
<a name="SetBaseContainer"></a>    
#### SetBaseContainer(name)

Sets current step (Init, Actions, End) during test conversion

			
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
								Name of a step.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="SetContainer"></a>    
#### SetContainer(name)

Sets current container/business transaction during test conversion

			
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
								Name of a container/transaction.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="StartTransaction"></a>    
#### StartTransaction(name)

Marks start of a transaction.

			
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
								Name of a transaction.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
		


