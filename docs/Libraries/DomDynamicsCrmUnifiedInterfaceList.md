

# DomDynamicsCrmUnifiedInterfaceList

This behavior pattern implements standard behavior for List control.
 
Extends HTMLObject.

Extends SeSSimulatedObject.






**Behavior Pattern: DomDynamicsCrmUnifiedInterfaceListBehavior**


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
      <a href="#ItemNameByIndex">ItemNameByIndex</a>
		</td>
		<td>
			Returns item name by its index.
		</td>
		
		<td>
		  GetItemNameByIndex
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
				Performs click on the item
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemCount"></a>
#### ItemCount


Number of items.

			
	
			
Type: number
			
			
Accessors: GetItemCount
			
		
<a name="ItemNameByIndex"></a>
#### ItemNameByIndex


Returns item name by its index.'false' if name is not found.

			
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
		<td>index</td>
		<td>number</td>
		<td>
			Index of the item
		</td>
	  </tr>
  
</table>

	
			
Type: string|boolean
			
			
Accessors: GetItemNameByIndex
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickItem"></a>    
#### DoClickItem(item, xOffset, yOffset)

Performs click on the item

			
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
						<td>item</td>
						<td>string | <br>number</td>
						<td>
								Index or name  of the item to be selected.
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
				
boolean: 'true' if successful, 'false' otherwise.
				
			
			
		
		


