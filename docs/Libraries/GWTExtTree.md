

# GWTExtTree

GWT-Ext Tree.
 
Extends HTMLObject.

Extends SeSSimulatedObject.






**Behavior Pattern: GWTExtTreeBehavior**


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
      <a href="#ChildrenCount">ChildrenCount</a>
		</td>
		<td>
			Children count of the current node in the tree.
		</td>
		
		<td>
		  GetChildrenCount
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Expanded">Expanded</a>
		</td>
		<td>
			Expanded state of the current node.
		</td>
		
		<td>
		  GetExpanded
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#NodeIndex">NodeIndex</a>
		</td>
		<td>
			Zero based index of the current node.
		</td>
		
		<td>
		  GetNodeIndex
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#NodeText">NodeText</a>
		</td>
		<td>
			Text of the current node.
		</td>
		
		<td>
		  GetNodeText
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Selected">Selected</a>
		</td>
		<td>
			Selected state of the current node.
		</td>
		
		<td>
		  GetSelected
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedNodeText">SelectedNodeText</a>
		</td>
		<td>
			Text of the selected node.
		</td>
		
		<td>
		  GetSelectedNodeText
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
			  <a href="#DoClickNode">DoClickNode</a>
			</td>
			<td>
				Clicks specific node in the tree.
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
				Expands specific node in the tree.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoFindChild">DoFindChild</a>
			</td>
			<td>
				Finds child node by its path from the current node and remembers it as the current node.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoFindNode">DoFindNode</a>
			</td>
			<td>
				Searches for specific node in the tree and remembers it as the current node.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoGetPath">DoGetPath</a>
			</td>
			<td>
				Returns path to the current node.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ChildrenCount"></a>
#### ChildrenCount


Children count of the current node in the tree.

			
	
			
Type: number
			
			
Accessors: GetChildrenCount
			
		
<a name="Expanded"></a>
#### Expanded


Expanded state of the current node. Use DoFindNode to set current node. 0 - if the node is collapsed, 1 - if the node is expanded, 2 - if the node is a leaf.

			
	
			
Type: number
			
			
Accessors: GetExpanded
			
		
<a name="NodeIndex"></a>
#### NodeIndex


Zero based index of the current node. Use DoFindNode to set current node.

			
	
			
Type: number
			
			
Accessors: GetNodeIndex
			
		
<a name="NodeText"></a>
#### NodeText


Text of the current node. Use DoFindNode to set current node.

			
	
			
Type: string
			
			
Accessors: GetNodeText
			
		
<a name="Selected"></a>
#### Selected


Selected state of the current node. Use DoFindNode to set current node. 'true' if the node is selected, 'false' otherwise.

			
	
			
Type: boolean
			
			
Accessors: GetSelected
			
		
<a name="SelectedNodeText"></a>
#### SelectedNodeText


Text of the selected node.

			
	
			
Type: string
			
			
Accessors: GetSelectedNodeText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickNode"></a>    
#### DoClickNode(path, separator, pathType)

Clicks specific node in the tree.

			
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
#### DoExpand(path, separator, pathType)

Expands specific node in the tree.

			
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
				
			
			
		
<a name="DoFindChild"></a>    
#### DoFindChild(path, separator, pathType, expand)

Finds child node by its path from the current node and remembers it as the current node. If current node is not set then Root node is used.

			
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
				  
					  <tr style="vertical-align:top">
						<td>expand</td>
						<td>boolean</td>
						<td>
								is set to true, then found node is expanded
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
HTMLObject: HTMLObject of the found node
				
			
			
		
<a name="DoFindNode"></a>    
#### DoFindNode(path, separator, pathType, expand)

Searches for specific node in the tree and remembers it as the current node.

			
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
				  
					  <tr style="vertical-align:top">
						<td>expand</td>
						<td>boolean</td>
						<td>
								is set to true, then found node is expanded
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
HTMLObject: HTMLObject of the found node
				
			
			
		
<a name="DoGetPath"></a>    
#### DoGetPath(pathType, separator)

Returns path to the current node.

			
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
						<td>pathType</td>
						<td>string</td>
						<td>
								Path type. Can be one of 'name', 'id' or 'index'.<br>Optional, Default: name.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>separator</td>
						<td>string</td>
						<td>
								Separator character.<br>Optional, Default: ;.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
string: Path to the current node
				
			
			
		
		


