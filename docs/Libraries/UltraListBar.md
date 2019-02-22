

# UltraListBar

Infragistics UltraListBar.
 
Extends ManagedObject.

Extends SeSSimulatedObject.






**Behavior Pattern: UltraListBarControlBehavior**


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
      <a href="#Item">Item</a>
		</td>
		<td>
			Caption of the item specified by index
		</td>
		
		<td>
		  GetItem
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ItemCount">ItemCount</a>
		</td>
		<td>
			Number of items in this navigation bar.
		</td>
		
		<td>
		  GetItemCount
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
				Performs click on the navigation item
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoExpandGroup">DoExpandGroup</a>
			</td>
			<td>
				Expand (or make active) the navigation group
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Item"></a>
#### Item


Caption of the item specified by index

			
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
		<td>ind</td>
		<td>number</td>
		<td>
			Index of an item to get caption
		</td>
	  </tr>
  
</table>

	
			
Type: string
			
			
Accessors: GetItem
			
		
<a name="ItemCount"></a>
#### ItemCount


Number of items in this navigation bar. All items may then be acccessed by SeS(<navbar>).GetItem(ind)

			
	
			
Type: 
			
			
Accessors: GetItemCount
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickItem"></a>    
#### DoClickItem(nameCaptionIndex)

Performs click on the navigation item

			
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
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if successful, 'false' otherwise.
				
			
			
		
<a name="DoExpandGroup"></a>    
#### DoExpandGroup(nameCaptionIndex)

Expand (or make active) the navigation group

			
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
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if successful, 'false' otherwise.
				
			
			
		
		


