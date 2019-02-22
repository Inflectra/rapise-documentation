

# MSComList

Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="ActiveXObject" styleclass="Normal" translate="true">ActiveXObject</link>.

Extends SeSSimulatedObject.






**Behavior Pattern: MSComCtlListView20Behavior**


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
      <a href="#ItemChecked">ItemChecked</a>
		</td>
		<td>
			Check if item is checked.
		</td>
		
		<td>
		  GetItemChecked
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ItemCount">ItemCount</a>
		</td>
		<td>
			Number of items.
		</td>
		
		<td>
		  GetItemCount
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ItemSelected">ItemSelected</a>
		</td>
		<td>
			Check if item is selected.
		</td>
		
		<td>
		  GetItemSelected
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
			  <a href="#DoCheckItem">DoCheckItem</a>
			</td>
			<td>
				Checks items of this object.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoClickItem">DoClickItem</a>
			</td>
			<td>
				Clicks the specified item
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSelectItem">DoSelectItem</a>
			</td>
			<td>
				Selects items of this object.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemChecked"></a>
#### ItemChecked


Check if item is checked.

			
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
		<td>string | <br>number</td>
		<td>
			index, name or caption of the item.
		</td>
	  </tr>
  
</table>

	
			
Type: boolean
			
			
Accessors: GetItemChecked
			
		
<a name="ItemCount"></a>
#### ItemCount


Number of items.

			
	
			
Type: number
			
			
Accessors: GetItemCount
			
		
<a name="ItemSelected"></a>
#### ItemSelected


Check if item is selected.

			
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
		<td>string | <br>number</td>
		<td>
			index, name or caption of the item.
		</td>
	  </tr>
  
</table>

	
			
Type: boolean
			
			
Accessors: GetItemSelected
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoCheckItem"></a>    
#### DoCheckItem(nameCaptionIndex, bCheck)

Checks items of this object.

			
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
								index, name or caption of the item.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>bCheck</td>
						<td>boolean</td>
						<td>
								Desired check state for the item.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoClickItem"></a>    
#### DoClickItem(nameCaptionIndex, clickType, xOffset, yOffset)

Clicks the specified item

			
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
								index, name or caption of the item.
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
				
boolean: 'true' if successful, 'false' otherwise
				
			
			
		
<a name="DoSelectItem"></a>    
#### DoSelectItem(nameCaptionIndex, bSelect)

Selects items of this object. First it clears existing selection.

			
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
								index, name or caption of the item.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>bSelect</td>
						<td>boolean</td>
						<td>
								Desired selected state for the item.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
		


