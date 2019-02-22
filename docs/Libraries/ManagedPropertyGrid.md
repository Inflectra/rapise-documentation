

# ManagedPropertyGrid

Managed PropertyGrid.
 
Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="ManagedObject" styleclass="Normal" translate="true">ManagedObject</link>.

Extends SeSSimulatedObject.






**Behavior Pattern: ManagedPropertyGridBehavior**


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
      <a href="#Expanded">Expanded</a>
		</td>
		<td>
			True if selected item is expanded
		</td>
		
		<td>
		  GetExpanded
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedItem">SelectedItem</a>
		</td>
		<td>
			Returns the structure with label, value, expanded fields
		</td>
		
		<td>
		  GetSelectedItem
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedLabel">SelectedLabel</a>
		</td>
		<td>
			Label of the selected item.
		</td>
		
		<td>
		  GetSelectedLabel
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedText">SelectedText</a>
		</td>
		<td>
			Text of the selected item.
		</td>
		
		<td>
		  GetSelectedText
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#VisibleRowCount">VisibleRowCount</a>
		</td>
		<td>
			Number of visible rows
		</td>
		
		<td>
		  GetVisibleRowCount
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
			  <a href="#DoCollapse">DoCollapse</a>
			</td>
			<td>
				Collapses an item of this object.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoExpand">DoExpand</a>
			</td>
			<td>
				Expands an item of this object.
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
			  <a href="#DoSetValue">DoSetValue</a>
			</td>
			<td>
				Sets value of an grid item of this object.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoShowDropDown">DoShowDropDown</a>
			</td>
			<td>
				Show dropdown (or custom dialog) for an item.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Expanded"></a>
#### Expanded


True if selected item is expanded

			
	
			
Type: boolean
			
			
Accessors: GetExpanded
			
		
<a name="SelectedItem"></a>
#### SelectedItem


Returns the structure with label, value, expanded fields

			
	
			
Type: string
			
			
Accessors: GetSelectedItem
			
		
<a name="SelectedLabel"></a>
#### SelectedLabel


Label of the selected item.

			
	
			
Type: string
			
			
Accessors: GetSelectedLabel
			
		
<a name="SelectedText"></a>
#### SelectedText


Text of the selected item.

			
	
			
Type: string
			
			
Accessors: GetSelectedText
			
		
<a name="VisibleRowCount"></a>
#### VisibleRowCount


Number of visible rows

			
	
			
Type: number
			
			
Accessors: GetVisibleRowCount
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoCollapse"></a>    
#### DoCollapse(val)

Collapses an item of this object.

			
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
						<td>string | <br>number</td>
						<td>
								name/index of the value to Collapse.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoExpand"></a>    
#### DoExpand(val)

Expands an item of this object.

			
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
						<td>string | <br>number</td>
						<td>
								name/index of the value to Expand.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoSelectItem"></a>    
#### DoSelectItem(indexLabel)

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
						<td>indexLabel</td>
						<td>string | <br>number</td>
						<td>
								name/index of the value to select.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoSetValue"></a>    
#### DoSetValue(label, val)

Sets value of an grid item of this object.

			
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
						<td>label</td>
						<td>string | <br>number</td>
						<td>
								Property grid row label or index
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>val</td>
						<td>string | <br>number</td>
						<td>
								value to set
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoShowDropDown"></a>    
#### DoShowDropDown(indexLabel)

Show dropdown (or custom dialog) for an item.

			
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
						<td>indexLabel</td>
						<td>string | <br>number</td>
						<td>
								name/index of the item to show dropdown for.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
		


