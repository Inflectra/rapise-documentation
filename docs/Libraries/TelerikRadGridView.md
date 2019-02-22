

# TelerikRadGridView

Telerik RadGridView.
 
Extends ManagedDataGridView.

Extends SeSSimulatedObject.






**Behavior Pattern: TelerikGridViewBehavior**


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
      <a href="#SelectedCell">SelectedCell</a>
		</td>
		<td>
			Selected Cell
		</td>
		
		<td>
		  GetSelectedCell
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
			
		
<a name="SelectedCell"></a>
#### SelectedCell


Selected Cell

			
	
			
Type: object
			
			
Accessors: GetSelectedCell
			
		
<a name="Text"></a>
#### Text


Text of the currently focused cell.

			
	
			
Type: string
			
			
Accessors: GetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickCell"></a>    
#### DoClickCell(row, col)

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
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if successful, 'false' otherwise
				
			
			
		
		


