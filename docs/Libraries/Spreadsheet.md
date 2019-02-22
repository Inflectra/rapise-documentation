

# Spreadsheet

Spreadsheet object. Use it to read and write Excel and text spreadsheets.







<!-- ============================== property summary ========================== -->

	
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
			  <a href="#DoAddColumn">DoAddColumn</a>
			</td>
			<td>
				Appends a column with specified name.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoAddRow">DoAddRow</a>
			</td>
			<td>
				Appends a new row.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoAttach">DoAttach</a>
			</td>
			<td>
				Loads a sheet from Excel file (.xls, *.xlsx) or csv file (*.txt, *.csv).
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoCompare">DoCompare</a>
			</td>
			<td>
				Compares two spreadsheets.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoCreate">DoCreate</a>
			</td>
			<td>
				Creates a new spreadsheet file.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoInsertColumn">DoInsertColumn</a>
			</td>
			<td>
				Inserts a column at index.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoInsertRow">DoInsertRow</a>
			</td>
			<td>
				Inserts a new row at index.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoMoveToFirstRow">DoMoveToFirstRow</a>
			</td>
			<td>
				Moves to a first row in selected range.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoMoveToLastRow">DoMoveToLastRow</a>
			</td>
			<td>
				Moves to a last row in selected range.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoMoveToRow">DoMoveToRow</a>
			</td>
			<td>
				Sets active row index.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoRandom">DoRandom</a>
			</td>
			<td>
				Selects random row and column in the range.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoRemoveColumn">DoRemoveColumn</a>
			</td>
			<td>
				Removes a column at index.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoRemoveRow">DoRemoveRow</a>
			</td>
			<td>
				Removes a row at index.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSave">DoSave</a>
			</td>
			<td>
				Saves the spreadsheet.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSequential">DoSequential</a>
			</td>
			<td>
				Advances to the next row in the range.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetCell">GetCell</a>
			</td>
			<td>
				Cell value by its coordinates.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetColumnCount">GetColumnCount</a>
			</td>
			<td>
				Gets columns count.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetColumnIndexByName">GetColumnIndexByName</a>
			</td>
			<td>
				Gets column index by its name.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetColumnName">GetColumnName</a>
			</td>
			<td>
				Gets column name.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetCurrentRowIndex">GetCurrentRowIndex</a>
			</td>
			<td>
				Gets zero-based active row index.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetEOF">GetEOF</a>
			</td>
			<td>
				Gets EOF state.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetRange">GetRange</a>
			</td>
			<td>
				Cell range used in DoSequental and in DoRandom.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetRowCount">GetRowCount</a>
			</td>
			<td>
				Gets row count.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#SetCell">SetCell</a>
			</td>
			<td>
				Sets cell value by its coordinates.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#SetRange">SetRange</a>
			</td>
			<td>
				Cell range used in DoSequental and in DoRandom.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoAddColumn"></a>    
#### DoAddColumn(name)

Appends a column with specified name.

			
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
						<td>name</td>
						<td>string</td>
						<td>
								Name of a new column.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: true if successfull, false otherwise.
				
			
			
		
<a name="DoAddRow"></a>    
#### DoAddRow()

Appends a new row.

			
			
**Returns:**
				
boolean: true if successfull, false otherwise.
				
			
			
		
<a name="DoAttach"></a>    
#### DoAttach(fileName, sheetName, separator)

Loads a sheet from Excel file (.xls, *.xlsx) or csv file (*.txt, *.csv).

			
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
								Path to Excel or csv file.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>sheetName</td>
						<td>string</td>
						<td>
								Sheet name to load. If not specified - load the first sheet.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>separator</td>
						<td>string</td>
						<td>
								Separator for values in csv file.<br>Optional, Default: ,.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: true if successfull, false otherwise.
				
			
			
		
<a name="DoCompare"></a>    
#### DoCompare(spreadsheet1, spreadsheet2, strict, sheet1Name, sheet2Name)

Compares two spreadsheets. In strict mode number of columns and rows matter 
and all cell values must be equal. When strict mode is off then spreadsheet2 must contain spreadsheet1 to return 'true' as a result.

			
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
						<td>spreadsheet1</td>
						<td>string | <br><link displaytype="text" defaultstyle="true" type="topiclink" href="Spreadsheet" styleclass="Normal" translate="true">Spreadsheet</link></td>
						<td>
								Path to a spreadsheet file or Spreadsheet object loaded via DoAttach or DoCreate actions.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>spreadsheet2</td>
						<td>string | <br><link displaytype="text" defaultstyle="true" type="topiclink" href="Spreadsheet" styleclass="Normal" translate="true">Spreadsheet</link></td>
						<td>
								Path to a spreadsheet file or Spreadsheet object loaded via DoAttach or DoCreate actions.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>strict</td>
						<td>boolean</td>
						<td>
								If 'true' then number of columns and rows in both spreadsheets must be exactly the same. If 'false' then check that spreadsheet1 is contained in spreadsheet2.<br>Optional, Default: false.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>sheet1Name</td>
						<td>string</td>
						<td>
								Name of a sheet to compare. Specify this parameter when spreadsheet1 is a path to a file. By default first sheet is compared.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>sheet2Name</td>
						<td>string</td>
						<td>
								Name of a sheet to compare. Specify this parameter when spreadsheet2 is a path to a file. By default first sheet is compared.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: true if spreadsheets are equal, false otherwise.
				
			
			
		
<a name="DoCreate"></a>    
#### DoCreate(fileName, sheetName, columnNames, rowCount, separator)

Creates a new spreadsheet file.

			
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
								Path to a file. Extension defines file format. Supported extensions: .xls, .xlsx, *.csv, *.txt.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>sheetName</td>
						<td>string</td>
						<td>
								Name of the first sheet.<br>Optional, Default: Sheet1.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>columnNames</td>
						<td>array</td>
						<td>
								Array of column names.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>rowCount</td>
						<td>number</td>
						<td>
								Initial number of rows with values.<br>Optional, Default: 10.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>separator</td>
						<td>string</td>
						<td>
								Separator for values in csv files.<br>Optional, Default: ,.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: true if successfull, false otherwise.
				
			
			
		
<a name="DoInsertColumn"></a>    
#### DoInsertColumn(columnIndex, name)

Inserts a column at index.

			
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
						<td>columnIndex</td>
						<td>number</td>
						<td>
								Index of a new column. Zero-based.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>name</td>
						<td>string</td>
						<td>
								Name of a new column.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: true if successfull, false otherwise.
				
			
			
		
<a name="DoInsertRow"></a>    
#### DoInsertRow(rowIndex)

Inserts a new row at index.

			
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
						<td>rowIndex</td>
						<td>number</td>
						<td>
								Index of a new row. Zero-based.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: true if successfull, false otherwise.
				
			
			
		
<a name="DoMoveToFirstRow"></a>    
#### DoMoveToFirstRow()

Moves to a first row in selected range.

			
			
**Returns:**
				
boolean: true if successfull, false otherwise.
				
			
			
		
<a name="DoMoveToLastRow"></a>    
#### DoMoveToLastRow()

Moves to a last row in selected range.

			
			
**Returns:**
				
boolean: true if successfull, false otherwise.
				
			
			
		
<a name="DoMoveToRow"></a>    
#### DoMoveToRow(index)

Sets active row index.

			
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
						<td>index</td>
						<td>number</td>
						<td>
								Index to set. Zero-based.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: true if successfull, false otherwise.
				
			
			
		
<a name="DoRandom"></a>    
#### DoRandom()

Selects random row and column in the range. The range is either set by SetRange
or it is the default range that includes all rows (except first row 
which is considred to contain column names) and columns on the sheet.

			
			
**Returns:**
				
boolean: false if the spreadhseet is not attached, true otherwise.
				
			
			
		
<a name="DoRemoveColumn"></a>    
#### DoRemoveColumn(columnIndex)

Removes a column at index.

			
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
						<td>columnIndex</td>
						<td>number</td>
						<td>
								Index of a column to remove. Zero-based.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: true if successfull, false otherwise.
				
			
			
		
<a name="DoRemoveRow"></a>    
#### DoRemoveRow(rowIndex)

Removes a row at index.

			
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
						<td>rowIndex</td>
						<td>number</td>
						<td>
								Index of a row to remove. Zero-based.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: true if successfull, false otherwise.
				
			
			
		
<a name="DoSave"></a>    
#### DoSave(fileName)

Saves the spreadsheet.

			
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
								Path to a file where to save the spreadsheet.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: true if successfull, false otherwise.
				
			
			
		
<a name="DoSequential"></a>    
#### DoSequential()

Advances to the next row in the range. The range is either set by SetRange
or it is the default range that includes all rows on the sheet except first row 
which is considred to contain column names.
When the end of the range is reached DoSequential stays at the last
row in the range and returns 'false'.

			
			
**Returns:**
				
boolean: false if being called when active row is the last row or the spreadsheet is not attached, true otherwise.
				
			
			
		
<a name="GetCell"></a>    
#### GetCell(columnId, rowId)

Cell value by its coordinates. Refers to active cell value after DoSequental or DoRandom if params not set.

			
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
						<td>columnId</td>
						<td>number | <br>string</td>
						<td>
								Column index or name. If not set active column is used.<br>Optional, Default: 0.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>rowId</td>
						<td>number</td>
						<td>
								Row index. If not set ActiveRow is used.<br>Optional, Default: 0.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
string: Getter returns string with cell value and null in the case of error. Setter returns true if successfull, false otherwise.
				
			
			
		
<a name="GetColumnCount"></a>    
#### GetColumnCount()

Gets columns count.

			
			
**Returns:**
				
number: Number of columns in the spreadsheet. -1 if no spreadsheet is attached.
				
			
			
		
<a name="GetColumnIndexByName"></a>    
#### GetColumnIndexByName(name)

Gets column index by its name.

			
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
						<td>name</td>
						<td>string</td>
						<td>
								Name of the column to find.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
number: column index if found, or -1.
				
			
			
		
<a name="GetColumnName"></a>    
#### GetColumnName(index)

Gets column name.

			
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
						<td>index</td>
						<td>number</td>
						<td>
								Index of a column in the spreadsheet.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
string: Name of a column in the spreadsheet. Null in the case of error.
				
			
			
		
<a name="GetCurrentRowIndex"></a>    
#### GetCurrentRowIndex()

Gets zero-based active row index.

			
			
**Returns:**
				
number: Active row index.
				
			
			
		
<a name="GetEOF"></a>    
#### GetEOF()

Gets EOF state.

			
			
**Returns:**
				
boolean: false if spreadsheet is attached and active row and column point to existing cell, true otherwise.
				
			
			
		
<a name="GetRange"></a>    
#### GetRange()

Cell range used in DoSequental and in DoRandom.

			
			
**Returns:**
				
object: Spreadsheet state object: { startRow, endRow, startCol, endCol, activeRow, activeColumn }.
				
			
			
		
<a name="GetRowCount"></a>    
#### GetRowCount()

Gets row count.

			
			
**Returns:**
				
number: Number of rows in the spreadsheet including the row with column names. -1 if no spreadsheet is attached.
				
			
			
		
<a name="SetCell"></a>    
#### SetCell(value, columnId, rowId)

Sets cell value by its coordinates. Sets active cell value after DoSequental or DoRandom if params not set.

			
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
								Value to set.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>columnId</td>
						<td>number | <br>string</td>
						<td>
								Column index or name. If not set active column is used.<br>Optional, Default: 0.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>rowId</td>
						<td>number</td>
						<td>
								Row index. If not set active row is used.<br>Optional, Default: 0.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: true if successfull, false otherwise.
				
			
			
		
<a name="SetRange"></a>    
#### SetRange(startRow, endRow, startCol, endCol)

Cell range used in DoSequental and in DoRandom.

			
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
						<td>startRow</td>
						<td>number</td>
						<td>
								Start row index.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>endRow</td>
						<td>number</td>
						<td>
								Last row index.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>startCol</td>
						<td>number</td>
						<td>
								Start column index. If not set then it is the first column.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>endCol</td>
						<td>number</td>
						<td>
								Last column index. If not set then it is the last column.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: true if successfull, false otherwise.
				
			
			
		
		


