

# YUISplitButton

Standard YUI SplitButton.
 
Extends HTMLObject.

Extends SeSSimulatedObject.






**Behavior Pattern: YUISplitButtonBehavior**


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
      <a href="#Active">Active</a>
		</td>
		<td>
			Active state of the button.
		</td>
		
		<td>
		  GetActive
		</td>
		<td>
		  
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
			  <a href="#DoClick">DoClick</a>
			</td>
			<td>
				Clicks the button.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoMenu">DoMenu</a>
			</td>
			<td>
				Clicks menu of the split button.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Active"></a>
#### Active


Active state of the button. If the button is active it is highlightedin YUI. Usually to make an object Active user needs to move mouseover the object.

			
	
			
Type: Boolean
			
			
Accessors: GetActive
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClick"></a>    
#### DoClick(x, y)

Clicks the button.

			
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
								x coordinate to click<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>y</td>
						<td>number</td>
						<td>
								y coordinate to click<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if successful, 'false' otherwise
				
			
			
		
<a name="DoMenu"></a>    
#### DoMenu()

Clicks menu of the split button.

			
			
**Returns:**
				
boolean: 'true' if successful, 'false' otherwise
				
			
			
		
		


