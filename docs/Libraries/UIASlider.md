

# UIASlider

Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="UIAObject" styleclass="Normal" translate="true">UIAObject</link>.

Extends SeSSimulatedObject.






**Behavior Pattern: UIAutomationProgressBarBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

<table styleclass="Default" style="cell-padding:2px; border-width:0px; border-spacing:0px; border-collapse:collapse; cell-border-width:1px; border-color:#c0c0c0; border-style:solid;">
  <tr style="vertical-align:top">
    <td  style="width:200px; background-color:#c0c0c0;">
      Property
    </td>
    <td style="width:450px; background-color:#c0c0c0;">
      Description
    </td>

    <td style="width:150px; background-color:#c0c0c0;">
      Getter
    </td>
    <td style="width:150px; background-color:#c0c0c0;">
      Setter
    </td>

  </tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#MaxValue">MaxValue</a>
		</td>
		<td>
			Maximum value of the object or 'false' if value can't be read.
		</td>
		
		<td>
		  GetMaxValue
		</td>
		<td>
		  SetMaxValue
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#MinValue">MinValue</a>
		</td>
		<td>
			Minimum value of the object or 'false' if value can't be read.
		</td>
		
		<td>
		  GetMinValue
		</td>
		<td>
		  SetMinValue
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Value">Value</a>
		</td>
		<td>
			Value of the object.
		</td>
		
		<td>
		  GetValue
		</td>
		<td>
		  SetValue
		</td>
		
	</tr>

</table>


	
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
			  <a href="#DoSetValue">DoSetValue</a>
			</td>
			<td>
				Sets the value of current object.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="MaxValue"></a>
#### MaxValue


Maximum value of the object or 'false' if value can't be read.

			
	
			
Type: number|boolean
			
			
Accessors: GetMaxValue, SetMaxValue
			
		
<a name="MinValue"></a>
#### MinValue


Minimum value of the object or 'false' if value can't be read.

			
	
			
Type: number|boolean
			
			
Accessors: GetMinValue, SetMinValue
			
		
<a name="Value"></a>
#### Value


Value of the object.

			
	
			
Type: number
			
			
Accessors: GetValue, SetValue
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSetValue"></a>    
#### DoSetValue(val)

Sets the value of current object.

			
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
						<td>val</td>
						<td>number</td>
						<td>
								Value to set
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if successul, 'false' otherwise
				
			
			
		
		


