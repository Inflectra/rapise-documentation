

# SftTree

Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="ActiveXObject" styleclass="Normal" translate="true">ActiveXObject</link>.

Extends SeSSimulatedObject.






**Behavior Pattern: ActiveXSftTreeBehavior**


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
			Number of children of the selected node or a node specified by the input parameters.
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
      <a href="#ItemsCount">ItemsCount</a>
		</td>
		<td>
			Number of rows in the table.
		</td>
		
		<td>
		  GetItemsCount
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Node">Node</a>
		</td>
		<td>
			Selected node or a node specified by the input parameters.
		</td>
		
		<td>
		  GetNode
		</td>
		<td>
		  
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

  <tr style="vertical-align:top">
		<td>
      <a href="#SiblingsAfter">SiblingsAfter</a>
		</td>
		<td>
			Number of siblings after the selected node or a node specified by the input parameters.
		</td>
		
		<td>
		  GetSiblingsAfter
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
			  <a href="#DoFullText">DoFullText</a>
			</td>
			<td>
				Returns text representation of the table.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
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
			
			
Accessors: GetChildrenCount
			
		
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
			
		
<a name="ItemsCount"></a>
#### ItemsCount


Number of rows in the table.

			
	
			
Type: number
			
			
Accessors: GetItemsCount
			
		
<a name="Node"></a>
#### Node


Selected node or a node specified by the input parameters.

			
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

	
			
Type: object
			
			
Accessors: GetNode
			
		
<a name="NodeText"></a>
#### NodeText


Text of the selected node or a node specified by the input parameters.

			
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
  
	  <tr style="vertical-align:top">
		<td>column</td>
		<td>number</td>
		<td>
			Zero-based index of a column.<br>Optional, Default: 0.
		</td>
	  </tr>
  
</table>

	
			
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
			
		
<a name="SiblingsAfter"></a>
#### SiblingsAfter


Number of siblings after the selected node or a node specified by the input parameters.

			
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
		<td></td>
		<td>
			
		</td>
	  </tr>
  
	  <tr style="vertical-align:top">
		<td>separator</td>
		<td></td>
		<td>
			
		</td>
	  </tr>
  
	  <tr style="vertical-align:top">
		<td>pathType</td>
		<td></td>
		<td>
			
		</td>
	  </tr>
  
</table>

	
			
Type: number
			
			
Accessors: GetSiblingsAfter
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickNode"></a>    
#### DoClickNode(path, separator, pathType, column, clickType, xOffset, yOffset)

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
				  
					  <tr style="vertical-align:top">
						<td>column</td>
						<td>number | <br>string</td>
						<td>
								Column index or column name. Default is 0<br>Optional.
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
				
			
			
		
<a name="DoFullText"></a>    
#### DoFullText(fileName)

Returns text representation of the table.

			
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
						<td>fileName</td>
						<td>string</td>
						<td>
								Name of a file that should hold text representation of the grid.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
string | <br>boolean: Text representation of the grid, 'true' if the file was successfully written, 'false' otherwise.
				
			
			
		
		


