

# DynamicsNAVTable

Behavior patterm for Dynamics NAV grid/table.
 
Extends UIAObject.

Extends SeSSimulatedObject.






**Behavior Pattern: DynamicsNAVTableBehavior**


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
      <a href="#CellObject">CellObject</a>
		</td>
		<td>
			UIAObject for the specified cell.
		</td>
		
		<td>
		  GetCellObject
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#CellRowIndex">CellRowIndex</a>
		</td>
		<td>
			Index of a row with the specified cell.
		</td>
		
		<td>
		  GetCellRowIndex
		</td>
		<td>
		  
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
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ColumnIndex">ColumnIndex</a>
		</td>
		<td>
			Index of a column with given name.
		</td>
		
		<td>
		  GetColumnIndex
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
      <a href="#ColumnValues">ColumnValues</a>
		</td>
		<td>
			Values of cells in a column
		</td>
		
		<td>
		  GetColumnValues
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
			  <a href="#DoClickColumn">DoClickColumn</a>
			</td>
			<td>
				Clicks on column header
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoScrollTo">DoScrollTo</a>
			</td>
			<td>
				Scrolls to the specified cell
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
		<td>number | <br>string</td>
		<td>
			Zero-based index of a row or cell text.
		</td>
	  </tr>
  
	  <tr style="vertical-align:top">
		<td>col</td>
		<td>string | <br>number</td>
		<td>
			Name of a column or zero-based column index.
		</td>
	  </tr>
  
</table>

	
			
Type: string
			
			
Accessors: GetCell
			
		
<a name="CellObject"></a>
#### CellObject


UIAObject for the specified cell.

			
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
		<td>number | <br>string</td>
		<td>
			Zero-based index of a row or cell text.
		</td>
	  </tr>
  
	  <tr style="vertical-align:top">
		<td>col</td>
		<td>string | <br>number</td>
		<td>
			Name of a column or zero-based column index.
		</td>
	  </tr>
  
</table>

	
			
Type: object
			
			
Accessors: GetCellObject
			
		
<a name="CellRowIndex"></a>
#### CellRowIndex


Index of a row with the specified cell.

			
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
		<td>string</td>
		<td>
			Text in the cell to search for.
		</td>
	  </tr>
  
	  <tr style="vertical-align:top">
		<td>col</td>
		<td>string | <br>number</td>
		<td>
			Name of a column or zero-based column index.
		</td>
	  </tr>
  
</table>

	
			
Type: object
			
			
Accessors: GetCellRowIndex
			
		
<a name="ColumnCount"></a>
#### ColumnCount


Number of columns in the grid.

			
	
			
Type: number
			
			
Accessors: GetColumnCount
			
		
<a name="ColumnIndex"></a>
#### ColumnIndex


Index of a column with given name.

			
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
		<td>columnName</td>
		<td>string</td>
		<td>
			Column name.
		</td>
	  </tr>
  
</table>

	
			
Type: number
			
			
Accessors: GetColumnIndex
			
		
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
			
			
Accessors: GetColumnName
			
		
<a name="ColumnValues"></a>
#### ColumnValues


Values of cells in a column

			
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
  
	  <tr style="vertical-align:top">
		<td>maxCount</td>
		<td>number</td>
		<td>
			Maximum number of values to return. Zero means everything.
		</td>
	  </tr>
  
</table>

	
			
Type: Array
			
			
Accessors: GetColumnValues
			
		
<a name="RowCount"></a>
#### RowCount


Number of rows in the grid.

			
	
			
Type: number
			
			
Accessors: GetRowCount
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickCell"></a>    
#### DoClickCell(row, col, clickType, xOffset, yOffset)

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
				  
					  <tr style="vertical-align:top">
						<td>xOffset</td>
						<td>number</td>
						<td>
								X offset to click within node. Default is a center.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>yOffset</td>
						<td>number</td>
						<td>
								Y offset to click within node. Default is a center.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if successful, 'false' otherwise
				
			
			
		
<a name="DoClickColumn"></a>    
#### DoClickColumn(col, clickType, xOffset, yOffset)

Clicks on column header

			
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
						<td>col</td>
						<td>number | <br>string</td>
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
				  
					  <tr style="vertical-align:top">
						<td>xOffset</td>
						<td>number</td>
						<td>
								X offset to click within node. Default is a center.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>yOffset</td>
						<td>number</td>
						<td>
								Y offset to click within node. Default is a center.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="DoScrollTo"></a>    
#### DoScrollTo(row, col)

Scrolls to the specified cell

			
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
				  
				</table>
			
			
			
		
		


