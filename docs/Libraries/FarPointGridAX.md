

# FarPointGridAX

This behavior pattern implements standard behavior for Grid control.
 
Extends SeSSimulatedObject.






**Behavior Pattern: FarPointGridAXBehavior**


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
      <a href="#CellComboList">CellComboList</a>
		</td>
		<td>
			Get array of dropdown values for a given cell.
		</td>
		
		<td>
		  GetCellComboList
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#CellInfo">CellInfo</a>
		</td>
		<td>
			<p>Returns object with following fields.
		</td>
		
		<td>
		  GetCellInfo
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
      <a href="#ColumnHeaders">ColumnHeaders</a>
		</td>
		<td>
			Get array of column captions.
		</td>
		
		<td>
		  GetColumnHeaders
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ColumnIndex">ColumnIndex</a>
		</td>
		<td>
			Get column index by name.
		</td>
		
		<td>
		  GetColumnIndex
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ColumnInfo">ColumnInfo</a>
		</td>
		<td>
			<p>Returns object with following fields.
		</td>
		
		<td>
		  GetColumnInfo
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#GridInfo">GridInfo</a>
		</td>
		<td>
			<p>Returns object with following fields.
		</td>
		
		<td>
		  GetGridInfo
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
      <a href="#RowHeaders">RowHeaders</a>
		</td>
		<td>
			Get array of row captions.
		</td>
		
		<td>
		  GetRowHeaders
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#RowInfo">RowInfo</a>
		</td>
		<td>
			<p>Returns object with following fields.
		</td>
		
		<td>
		  GetRowInfo
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
		  SetSelectedColumn
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
		  SetSelectedRow
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedRowsCount">SelectedRowsCount</a>
		</td>
		<td>
			Get number of selected rows.
		</td>
		
		<td>
		  GetSelectedRowsCount
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Text">Text</a>
		</td>
		<td>
			Text of the specified cell.
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
			  <a href="#DoActivateCell">DoActivateCell</a>
			</td>
			<td>
				Make specified cell active
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoClearCell">DoClearCell</a>
			</td>
			<td>
				Clear specified cell range
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
			  <a href="#DoExportGrid">DoExportGrid</a>
			</td>
			<td>
				Save Grid data to file
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoFullText">DoFullText</a>
			</td>
			<td>
				Return whole grid as text
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="CellComboList"></a>
#### CellComboList


Get array of dropdown values for a given cell.

			
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
			Row index
		</td>
	  </tr>
  
	  <tr style="vertical-align:top">
		<td>col</td>
		<td>number</td>
		<td>
			Column index
		</td>
	  </tr>
  
</table>

	
			
Type: array
			
			
Accessors: GetCellComboList
			
		
<a name="CellInfo"></a>
#### CellInfo


<p>Returns object with following fields.</p>

<pre>
ActionOnEnter one of:
			0 None			(Default) Active cell does not change
			1 Up				Active cell moves up
			2 Down			Active cell moves down
			3 Left			Active cell moves left
			4 Right			Active cell moves right
			5 Next			Next cell becomes active cell
			6 Previous		Previous cell becomes active cell
			7 Same			Current cell remains active cell
			8 Next Row			Active cell moves to first column of next row


EditMode
Locked
MoveOnArrow    ArrowsExitEditMode;
NextCellOnTab  ProcessTab;

Type one of:
			0 Date			Creates date cell
			1 Edit			(Default) Creates edit cell
			4 PIC				Creates PIC cell
			5 Static Text		Creates static text cell
			6 Time			Creates time cell
			7 Button			Creates button cell
			8 Combo Box		Creates combo box cell
			9 Picture			Creates picture cell
			10 Check Box		Creates check box cell
			11 OwnerDrawn	Creates ownerdrawn cell
			12 Currency		Creates currency cell
			13 Number			Creates numeric cell
			14 Percent		Creates percent cell
			15 Scientific		Creates scientific cell
			16 Custom			Creates custom cell

Text
Value

Width
WidthTwips
Height
HeightTwips

Left
Right
Top
Bottom

Visible

row
col
</pre>

			
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
			Row index
		</td>
	  </tr>
  
	  <tr style="vertical-align:top">
		<td>col</td>
		<td>number</td>
		<td>
			Column index
		</td>
	  </tr>
  
</table>

	
			
Type: object
			
			
Accessors: GetCellInfo
			
		
<a name="ColumnCount"></a>
#### ColumnCount


Number of columns in the grid.

			
	
			
Type: number
			
			
Accessors: GetColumnCount
			
		
<a name="ColumnHeaders"></a>
#### ColumnHeaders


Get array of column captions.

			
	
			
Type: array
			
			
Accessors: GetColumnHeaders
			
		
<a name="ColumnIndex"></a>
#### ColumnIndex


Get column index by name.

			
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
		<td>colName</td>
		<td>string</td>
		<td>
			Column name
		</td>
	  </tr>
  
</table>

	
			
Type: number
			
			
Accessors: GetColumnIndex
			
		
<a name="ColumnInfo"></a>
#### ColumnInfo


<p>Returns object with following fields.</p>

<pre>
Header - Column caption, if any
Width - Width in pixels
WidthTwips - Width in TWIPs
Hidden
Index
Visible
</pre>

			
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
			Column index
		</td>
	  </tr>
  
</table>

	
			
Type: object
			
			
Accessors: GetColumnInfo
			
		
<a name="GridInfo"></a>
#### GridInfo


<p>Returns object with following fields.</p>

<pre>
ActiveCol
ActiveRow
ColCount
RowCount

Enabled
Visible

Top
Bottom
Height
Width

Rect [Top, Right, Bottom, Left]

Left
Right

hWnd

TopRow
LeftCol
</pre>

			
	
			
Type: object
			
			
Accessors: GetGridInfo
			
		
<a name="RowCount"></a>
#### RowCount


Number of rows in the table.

			
	
			
Type: number
			
			
Accessors: GetRowCount
			
		
<a name="RowHeaders"></a>
#### RowHeaders


Get array of row captions.

			
	
			
Type: array
			
			
Accessors: GetRowHeaders
			
		
<a name="RowInfo"></a>
#### RowInfo


<p>Returns object with following fields.</p>

<pre>
ActiveCol
ActiveRow
ColCount
RowCount

Enabled
Visible

Top
Bottom
Height
Width

Rect [Top, Right, Bottom, Left]

Left
Right

hWnd

TopRow
LeftCol
</pre>

			
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
			Row index
		</td>
	  </tr>
  
</table>

	
			
Type: object
			
			
Accessors: GetRowInfo
			
		
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
			
			
Accessors: GetSelectedColumn, SetSelectedColumn
			
		
<a name="SelectedRow"></a>
#### SelectedRow


Index of the selected row.

			
	
			
Type: number
			
			
Accessors: GetSelectedRow, SetSelectedRow
			
		
<a name="SelectedRowsCount"></a>
#### SelectedRowsCount


Get number of selected rows.

			
	
			
Type: number
			
			
Accessors: GetSelectedRowsCount
			
		
<a name="Text"></a>
#### Text


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
			
			
Accessors: GetText, SetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoActivateCell"></a>    
#### DoActivateCell(row, col)

Make specified cell active

			
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
								Column to use
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>col</td>
						<td>number</td>
						<td>
								Column to use
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="DoClearCell"></a>    
#### DoClearCell(col1, row1, col2, row2)

Clear specified cell range

			
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
						<td>col1</td>
						<td>number</td>
						<td>
								Column to use
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>row1</td>
						<td>number</td>
						<td>
								Column to use
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>col2</td>
						<td>number</td>
						<td>
								Column to use
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>row2</td>
						<td>number</td>
						<td>
								Column to use
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="DoClickCell"></a>    
#### DoClickCell(col, row, clickType, xOffset, yOffset)

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
						<td>col</td>
						<td>number</td>
						<td>
								Zero-based index of the column.
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
				
			
			
		
<a name="DoExportGrid"></a>    
#### DoExportGrid(fileName, type)

Save Grid data to file

			
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
								Path to destination file
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>type</td>
						<td>string</td>
						<td>
								Export file format (EXCEL, HTML, XML). Empty ("") for tab-separated text<br>Optional, Default: L.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="DoFullText"></a>    
#### DoFullText(saveToFile, fileName)

Return whole grid as text

			
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
						<td>saveToFile</td>
						<td>boolean</td>
						<td>
								'true' if you need to have copy of the text in the file
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>fileName</td>
						<td>string</td>
						<td>
								Path to destination file
						</td>
					  </tr>
				  
				</table>
			
			
			
		
		


