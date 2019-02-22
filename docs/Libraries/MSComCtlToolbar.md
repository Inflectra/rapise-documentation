

# MSComCtlToolbar

Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="ActiveXObject" styleclass="Normal" translate="true">ActiveXObject</link>.

Extends SeSSimulatedObject.






**Behavior Pattern: MSComCtlToobarBehavior**


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
      <a href="#ItemCaption">ItemCaption</a>
		</td>
		<td>
			The caption of the button on the toolbar
		</td>
		
		<td>
		  GetItemCaption
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ItemCount">ItemCount</a>
		</td>
		<td>
			The number of the items in the toolbar
		</td>
		
		<td>
		  GetItemCount
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ItemStyle">ItemStyle</a>
		</td>
		<td>
			The style of the button on the toolbar
		</td>
		
		<td>
		  GetItemStyle
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ItemValue">ItemValue</a>
		</td>
		<td>
			Returns 'true' if element with nameCaptionIndex has value
		</td>
		
		<td>
		  GetItemValue
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
			  <a href="#DoClickItem">DoClickItem</a>
			</td>
			<td>
				ClickItem
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSetCheck">DoSetCheck</a>
			</td>
			<td>
				SetCheck
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemCaption"></a>
#### ItemCaption


The caption of the button on the toolbar

			
**Getter Parameters:**

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
		<td>nameCaptionIndex</td>
		<td>number | <br>string</td>
		<td>
			Index, name or caption of the item.
		</td>
	  </tr>
  
</table>

	
			
Type: string
			
			
Accessors: GetItemCaption
			
		
<a name="ItemCount"></a>
#### ItemCount


The number of the items in the toolbar

			
	
			
Type: number
			
			
Accessors: GetItemCount
			
		
<a name="ItemStyle"></a>
#### ItemStyle


The style of the button on the toolbar

			
**Getter Parameters:**

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
		<td>nameCaptionIndex</td>
		<td>number | <br>string</td>
		<td>
			Index, name or caption of the item.
		</td>
	  </tr>
  
</table>

	
			
Type: number
			
			
Accessors: GetItemStyle
			
		
<a name="ItemValue"></a>
#### ItemValue


Returns 'true' if element with nameCaptionIndex has value

			
**Getter Parameters:**

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
		<td>nameCaptionIndex</td>
		<td>number | <br>string</td>
		<td>
			Index, name or caption of the item.
		</td>
	  </tr>
  
</table>

	
			
Type: boolean
			
			
Accessors: GetItemValue
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickItem"></a>    
#### DoClickItem(nameCaptionIndex, clickType, xOffset, yOffset)

ClickItem

			
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
						<td>nameCaptionIndex</td>
						<td>string | <br>number</td>
						<td>
								index, name or caption of the item to be selected.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>clickType</td>
						<td>string</td>
						<td>
								Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>xOffset</td>
						<td>number</td>
						<td>
								X offset to click within object. Default is a center.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>yOffset</td>
						<td>number</td>
						<td>
								Y offset to click within object. Default is a center.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoSetCheck"></a>    
#### DoSetCheck(bcheck, nameCaptionIndex)

SetCheck

			
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
						<td>bcheck</td>
						<td>boolean</td>
						<td>
								Check state to set
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>nameCaptionIndex</td>
						<td>string | <br>number</td>
						<td>
								index, name or caption of the item to be selected.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
		


