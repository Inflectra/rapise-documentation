

# VSFlexGrid

This behavior pattern implements standard behavior for Grid control.
 
Extends ActiveXObject.

Extends SeSSimulatedObject.






**Behavior Pattern: VSFlexGridBehavior**


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
      <a href="#Cell">Cell</a>
		</td>
		<td>
			Text of the specified cell.
		</td>
		
		<td>
		  GetCell
		</td>
		<td>
		  SetCell
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ColumnCount">ColumnCount</a>
		</td>
		<td>
			Number of columns in the grid.
		</td>
		
		<td>
		  GetColumnCount
		</td>
		<td>
		  SetColumnCount
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ColumnName">ColumnName</a>
		</td>
		<td>
			Caption of a column.
		</td>
		
		<td>
		  GetColumnName
		</td>
		<td>
		  SetColumnName
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Height">Height</a>
		</td>
		<td>
			Height of the object.
		</td>
		
		<td>
		  GetHeight
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#RowCount">RowCount</a>
		</td>
		<td>
			Number of rows in the grid.
		</td>
		
		<td>
		  GetRowCount
		</td>
		<td>
		  SetRowCount
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedRow">SelectedRow</a>
		</td>
		<td>
			Checked state of the selected node or a node specified by the input parameters.
		</td>
		
		<td>
		  GetSelectedRow
		</td>
		<td>
		  SetSelectedRow
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedRowCount">SelectedRowCount</a>
		</td>
		<td>
			Number of selected rows.
		</td>
		
		<td>
		  GetSelectedRowCount
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedRows">SelectedRows</a>
		</td>
		<td>
			Selected rows.
		</td>
		
		<td>
		  GetSelectedRows
		</td>
		<td>
		  SetSelectedRows
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Text">Text</a>
		</td>
		<td>
			Text of the currently focused cell.
		</td>
		
		<td>
		  GetText
		</td>
		<td>
		  SetText
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Width">Width</a>
		</td>
		<td>
			Width of the object.
		</td>
		
		<td>
		  GetWidth
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#X">X</a>
		</td>
		<td>
			X-coordinate of the top left corner of the object.
		</td>
		
		<td>
		  GetX
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Y">Y</a>
		</td>
		<td>
			Y-coordinate of the top left corner of the object.
		</td>
		
		<td>
		  GetY
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
			  <a href="#DoClickCell">DoClickCell</a>
			</td>
			<td>
				Clicks the specified cell.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoClickText">DoClickText</a>
			</td>
			<td>
				Clicks on a specific text inside the grid.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoFullText">DoFullText</a>
			</td>
			<td>
				Returns text representation of the grid.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Cell"></a>
#### Cell


Text of the specified cell.

			
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
		<td>rowIndex</td>
		<td>number</td>
		<td>
			Zero-based index of the column.
		</td>
	  </tr>
  
	  <tr style="vertical-align:top">
		<td>columnIndex</td>
		<td>number</td>
		<td>
			Zero-based index if the row.
		</td>
	  </tr>
  
</table>

	
			
Type: string
			
			
Accessors: GetCell, SetCell
			
		
<a name="ColumnCount"></a>
#### ColumnCount


Number of columns in the grid.

			
	
			
Type: number
			
			
Accessors: GetColumnCount, SetColumnCount
			
		
<a name="ColumnName"></a>
#### ColumnName


Caption of a column.

			
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
		<td>columnIndex</td>
		<td>number</td>
		<td>
			Zero-based index of the column.
		</td>
	  </tr>
  
</table>

	
			
Type: string
			
			
Accessors: GetColumnName, SetColumnName
			
		
<a name="Height"></a>
#### Height


Height of the object.

			
	
			
Type: number
			
			
Accessors: GetHeight
			
		
<a name="RowCount"></a>
#### RowCount


Number of rows in the grid.

			
	
			
Type: number
			
			
Accessors: GetRowCount, SetRowCount
			
		
<a name="SelectedRow"></a>
#### SelectedRow


Checked state of the selected node or a node specified by the input parameters.

			
	
			
Type: boolean
			
			
Accessors: GetSelectedRow, SetSelectedRow
			
		
<a name="SelectedRowCount"></a>
#### SelectedRowCount


Number of selected rows.

			
	
			
Type: number
			
			
Accessors: GetSelectedRowCount
			
		
<a name="SelectedRows"></a>
#### SelectedRows


Selected rows.

			
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
		<td>asArray</td>
		<td>boolean</td>
		<td>
			If set to true, function returns an array.
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

	
			
Type: array|string
			
			
Accessors: GetSelectedRows, SetSelectedRows
			
		
<a name="Text"></a>
#### Text


Text of the currently focused cell.

			
	
			
Type: string
			
			
Accessors: GetText, SetText
			
		
<a name="Width"></a>
#### Width


Width of the object.

			
	
			
Type: number
			
			
Accessors: GetWidth
			
		
<a name="X"></a>
#### X


X-coordinate of the top left corner of the object.

			
	
			
Type: number
			
			
Accessors: GetX
			
		
<a name="Y"></a>
#### Y


Y-coordinate of the top left corner of the object.

			
	
			
Type: number
			
			
Accessors: GetY
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickCell"></a>    
#### DoClickCell(row, col, clickType)

Clicks the specified cell.

			
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
						<td>row</td>
						<td>number | <br>string</td>
						<td>
								Zero-based index if the row or text of a cell in the specified column.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>col</td>
						<td>string | <br>number</td>
						<td>
								Zero-based index of the column or column name.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>clickType</td>
						<td>string</td>
						<td>
								Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if successful, 'false' otherwise
				
			
			
		
<a name="DoClickText"></a>    
#### DoClickText()

Clicks on a specific text inside the grid.

			
			
**Returns:**
				
'true' if successful, 'false' otherwise
				
			
			
		
<a name="DoFullText"></a>    
#### DoFullText(path, fmt)

Returns text representation of the grid.

			
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
								Name of a file that should hold text representation of the grid.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>fmt</td>
						<td>number</td>
						<td>
								function () {
}<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
string: Path to a file with grid text when 'path' param is defined. Otherwise return Grid text.
				
			
			
		
		


