

# JQueryMenu

Extends HTMLObject.

Extends SeSSimulatedObject.






**Behavior Pattern: JQueryMenuBehavior**


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
			  <a href="#DoFindChild">DoFindChild</a>
			</td>
			<td>
				Searches for specific item in the menu.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoMenu">DoMenu</a>
			</td>
			<td>
				Performs click on the menu item.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoFindChild"></a>    
#### DoFindChild(path, separator, pathType)

Searches for specific item in the menu.

			
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
						<td>path</td>
						<td>string</td>
						<td>
								Path of the node
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>separator</td>
						<td>string</td>
						<td>
								Separator character.<br>Optional, Default: ;.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>pathType</td>
						<td>string</td>
						<td>
								Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
HTMLObject: HTMLObject of the found node
				
			
			
		
<a name="DoMenu"></a>    
#### DoMenu(path, separator, pathType)

Performs click on the menu item.

			
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
						<td>path</td>
						<td>string</td>
						<td>
								Path of the node
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>separator</td>
						<td>string</td>
						<td>
								Separator character.<br>Optional, Default: ;.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>pathType</td>
						<td>string</td>
						<td>
								Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
HTMLObject: HTMLObject of the found node
				
			
			
		
		


