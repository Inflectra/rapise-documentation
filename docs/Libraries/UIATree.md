

# UIATree

Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="UIAObject" styleclass="Normal" translate="true">UIAObject</link>.

Extends SeSSimulatedObject.






**Behavior Pattern: UIAutomationTreeBehavior**


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
      <a href="#ChildAt">ChildAt</a>
		</td>
		<td>
			Child at index of the selected node or a node specified by the input parameters.
		</td>
		
		<td>
		  GetChildAt
		</td>
		<td>
		  
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
      <a href="#NodeText">NodeText</a>
		</td>
		<td>
			Text of the selected node or a node specified by the input parameters.
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
			
			
Accessors: GetChecked, SetChecked
			
		
<a name="ChildAt"></a>
#### ChildAt


Child at index of the selected node or a node specified by the input parameters.

			
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
		<td>index</td>
		<td>number</td>
		<td>
			
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
			
			
Accessors: GetChildAt
			
		
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
  
</table>

	
			
Type: string|boolean
			
			
Accessors: GetNodeText
			
		
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
				
			
			
		
<a name="DoSelectItem"></a>    
#### DoSelectItem(path, separator, pathType)

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
				
boolean: 'true' if successful, 'false' otherwise.
				
			
			
		
		


