

# SWTTree

Java SWT Tree.
 
Extends UIAObject.

Extends SeSSimulatedObject.






**Behavior Pattern: SWTTreeBehavior**


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
      <a href="#Checked">Checked</a>
		</td>
		<td>
			Checked state of the selected node or a node specified by the input parameters.
		</td>
		
		<td>
		  GetChecked
		</td>
		<td>
		  SetChecked
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ChildrenCount">ChildrenCount</a>
		</td>
		<td>
			Number of children of the selected node or a node specified by the input parameters.
		</td>
		
		<td>
		  GetChildrenCount
		</td>
		<td>
		  SetChildrenCount
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Expanded">Expanded</a>
		</td>
		<td>
			Expanded state of the selected node or a node specified by the input parameters.
		</td>
		
		<td>
		  GetExpanded
		</td>
		<td>
		  SetExpanded
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#NodeText">NodeText</a>
		</td>
		<td>
			Text of the selected node or a node specified by the input parameters.
		</td>
		
		<td>
		  GetNodeText
		</td>
		<td>
		  SetNodeText
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Selected">Selected</a>
		</td>
		<td>
			Selected state of the selected node or a node specified by the input parameters
		</td>
		
		<td>
		  GetSelected
		</td>
		<td>
		  SetSelected
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
				Collapses specific node in the tree.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoExpand">DoExpand</a>
			</td>
			<td>
				Expands a specific node in the tree.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSelectItem">DoSelectItem</a>
			</td>
			<td>
				Selects specified item in the tree.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Checked"></a>
#### Checked


Checked state of the selected node or a node specified by the input parameters.

			
	
			
Type: boolean
			
			
Accessors: GetChecked, SetChecked
			
		
<a name="ChildrenCount"></a>
#### ChildrenCount


Number of children of the selected node or a node specified by the input parameters.

			
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

	
			
Type: string|boolean
			
			
Accessors: GetChildrenCount, SetChildrenCount
			
		
<a name="Expanded"></a>
#### Expanded


Expanded state of the selected node or a node specified by the input parameters.

			
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

	
			
Type: boolean
			
			
Accessors: GetExpanded, SetExpanded
			
		
<a name="NodeText"></a>
#### NodeText


Text of the selected node or a node specified by the input parameters.

			
	
			
Type: string|boolean
			
			
Accessors: GetNodeText, SetNodeText
			
		
<a name="Selected"></a>
#### Selected


Selected state of the selected node or a node specified by the input parameters

			
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

	
			
Type: boolean
			
			
Accessors: GetSelected, SetSelected
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoCollapse"></a>    
#### DoCollapse(path, separator, pathType)

Collapses specific node in the tree.

			
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
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoExpand"></a>    
#### DoExpand(node)

Expands a specific node in the tree.

			
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
						<td>node</td>
						<td>string</td>
						<td>
								Name of the node
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if successful, 'false' otherwise.
				
			
			
		
<a name="DoSelectItem"></a>    
#### DoSelectItem(value)

Selects specified item in the tree.

			
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
						<td>value</td>
						<td>string</td>
						<td>
								Item to select
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if successful, 'false' otherwise.
				
			
			
		
		


