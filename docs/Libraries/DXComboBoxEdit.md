

# DXComboBoxEdit

DevXpress ComboBoxEdit.
 
Extends ManagedObject.

Extends SeSSimulatedObject.






**Behavior Pattern: DXComboBoxEditBehavior**


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

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedIndex">SelectedIndex</a>
		</td>
		<td>
			Index of the selected element of the object.
		</td>
		
		<td>
		  GetSelectedIndex
		</td>
		<td>
		  SetSelectedIndex
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedText">SelectedText</a>
		</td>
		<td>
			Text of the selected item in a single string.
		</td>
		
		<td>
		  GetSelectedText
		</td>
		<td>
		  SetSelectedText
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Text">Text</a>
		</td>
		<td>
			Text of the selected item in a single string.
		</td>
		
		<td>
		  GetText
		</td>
		<td>
		  SetText
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
			  <a href="#DoSelectItem">DoSelectItem</a>
			</td>
			<td>
				Selects an item of this object.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSetText">DoSetText</a>
			</td>
			<td>
				Sets text value of this object.
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
			
		
<a name="SelectedIndex"></a>
#### SelectedIndex


Index of the selected element of the object.

			
	
			
Type: number
			
			
Accessors: GetSelectedIndex, SetSelectedIndex
			
		
<a name="SelectedText"></a>
#### SelectedText


Text of the selected item in a single string.

			
	
			
Type: string
			
			
Accessors: GetSelectedText, SetSelectedText
			
		
<a name="Text"></a>
#### Text


Text of the selected item in a single string.

			
	
			
Type: string
			
			
Accessors: GetText, SetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectItem"></a>    
#### DoSelectItem(item)

Selects an item of this object.

			
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
								Item index or text value  to select.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoSetText"></a>    
#### DoSetText(val)

Sets text value of this object.

			
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
						<td>string</td>
						<td>
								Text value.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
		


