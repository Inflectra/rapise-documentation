

# JavaSwingTable

Java Swing Table.
 
Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="JavaObject" styleclass="Normal" translate="true">JavaObject</link>.

Extends SeSSimulatedObject.






**Behavior Pattern: JavaSwingObjectTableBehavior**


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
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ColumnCount">ColumnCount</a>
		</td>
		<td>
			Number of columns in the table.
		</td>
		
		<td>
		  GetColumnCount
		</td>
		<td>
		  
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
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#RowCount">RowCount</a>
		</td>
		<td>
			Number of rows in the table.
		</td>
		
		<td>
		  GetRowCount
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedCells">SelectedCells</a>
		</td>
		<td>
			Returns string of cell coordinates delimited by separators or an array of coordinate objects for selected cells.
		</td>
		
		<td>
		  GetSelectedCells
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedColumn">SelectedColumn</a>
		</td>
		<td>
			Index of the selected column.
		</td>
		
		<td>
		  GetSelectedColumn
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedColumnCount">SelectedColumnCount</a>
		</td>
		<td>
			Number of selected columns.
		</td>
		
		<td>
		  GetSelectedColumnCount
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedColumns">SelectedColumns</a>
		</td>
		<td>
			Returns string of indexes delimited by separator or array of indexes of selected columns.
		</td>
		
		<td>
		  GetSelectedColumns
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedRow">SelectedRow</a>
		</td>
		<td>
			Index of the selected row.
		</td>
		
		<td>
		  GetSelectedRow
		</td>
		<td>
		  
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
			Returns string of indexes delimited by separator or array of indexes of selected rows.
		</td>
		
		<td>
		  GetSelectedRows
		</td>
		<td>
		  
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
				Clicks the specified cell
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoFullText">DoFullText</a>
			</td>
			<td>
				Read and return full text contents of the table
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
		<td>row</td>
		<td>number</td>
		<td>
			Zero-based index if the row.
		</td>
	  </tr>
  
	  <tr style="vertical-align:top">
		<td>col</td>
		<td>number</td>
		<td>
			Zero-based index of the column.
		</td>
	  </tr>
  
</table>

	
			
Type: string
			
			
Accessors: GetCell
			
		
<a name="ColumnCount"></a>
#### ColumnCount


Number of columns in the table.

			
	
			
Type: number
			
			
Accessors: GetColumnCount
			
		
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
		<td>col</td>
		<td>number</td>
		<td>
			Zero-based index of the column.
		</td>
	  </tr>
  
</table>

	
			
Type: string
			
			
Accessors: GetColumnName
			
		
<a name="RowCount"></a>
#### RowCount


Number of rows in the table.

			
	
			
Type: number
			
			
Accessors: GetRowCount
			
		
<a name="SelectedCells"></a>
#### SelectedCells


Returns string of cell coordinates delimited by separators or an array of coordinate objects for selected cells.

			
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
		<td>rowcolSep</td>
		<td>string</td>
		<td>
			row separator<br>Optional.
		</td>
	  </tr>
  
	  <tr style="vertical-align:top">
		<td>cellSep</td>
		<td>string</td>
		<td>
			cell ceparator<br>Optional.
		</td>
	  </tr>
  
</table>

	
			
Type: string
			
			
Accessors: GetSelectedCells
			
		
<a name="SelectedColumn"></a>
#### SelectedColumn


Index of the selected column.

			
	
			
Type: number
			
			
Accessors: GetSelectedColumn
			
		
<a name="SelectedColumnCount"></a>
#### SelectedColumnCount


Number of selected columns.

			
	
			
Type: number
			
			
Accessors: GetSelectedColumnCount
			
		
<a name="SelectedColumns"></a>
#### SelectedColumns


Returns string of indexes delimited by separator or array of indexes of selected columns.

			
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
			
			
Accessors: GetSelectedColumns
			
		
<a name="SelectedRow"></a>
#### SelectedRow


Index of the selected row.

			
	
			
Type: number
			
			
Accessors: GetSelectedRow
			
		
<a name="SelectedRowCount"></a>
#### SelectedRowCount


Number of selected rows.

			
	
			
Type: number
			
			
Accessors: GetSelectedRowCount
			
		
<a name="SelectedRows"></a>
#### SelectedRows


Returns string of indexes delimited by separator or array of indexes of selected rows.

			
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
			
			
Accessors: GetSelectedRows
			
		
<a name="Text"></a>
#### Text


Text of the currently focused cell.

			
	
			
Type: string
			
			
Accessors: GetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickCell"></a>    
#### DoClickCell(row, col, clickType, xOffset, yOffset)

Clicks the specified cell

			
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
						<td>number</td>
						<td>
								Zero-based index if the row.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>col</td>
						<td>number</td>
						<td>
								Zero-based index of the column.
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
				
			
			
		
<a name="DoFullText"></a>    
#### DoFullText()

Read and return full text contents of the table

			
			
**Returns:**
				
string | <br>boolean: Full text of the table (may be very long!), 'false' otherwise
				
			
			
		
		


