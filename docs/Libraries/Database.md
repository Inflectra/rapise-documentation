

# Database

Database object. Use it to read and write ADO data sources.







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
			  <a href="#DoAttach">DoAttach</a>
			</td>
			<td>
				Attaches to a Database with given ADO connection string and SQL query.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoMoveToRow">DoMoveToRow</a>
			</td>
			<td>
				Moves to a given row.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoRandom">DoRandom</a>
			</td>
			<td>
				Selects random row and column in the recordset.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSequential">DoSequential</a>
			</td>
			<td>
				Advances to the next row in the table.
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
			  <a href="#GetColumnName">GetColumnName</a>
			</td>
			<td>
				Gets column name.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetColumnNames">GetColumnNames</a>
			</td>
			<td>
				Gets column names.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetCurrentRowIndex">GetCurrentRowIndex</a>
			</td>
			<td>
				Get zero based current row index.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetRowCount">GetRowCount</a>
			</td>
			<td>
				Gets rows count.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetValue">GetValue</a>
			</td>
			<td>
				Gets value by column name, and, optionally, row number.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoAttach"></a>    
#### DoAttach(connection_string, sql)

Attaches to a Database with given ADO connection string and SQL query.

			
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
						<td>connection_string</td>
						<td>string</td>
						<td>
								ADO connection string.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>sql</td>
						<td></td>
						<td>
								SQL Query (i.e. 'select * from Customers')<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
true, if successfull
				
			
			
		
<a name="DoMoveToRow"></a>    
#### DoMoveToRow(rowInd)

Moves to a given row.

			
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
						<td>rowInd</td>
						<td>number</td>
						<td>
								Row index to set active.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="DoRandom"></a>    
#### DoRandom()

Selects random row and column in the recordset.

			
			
**Returns:**
				
'false' if the the DB is is not connected, 'true' - otherwise.
				
			
			
		
<a name="DoSequential"></a>    
#### DoSequential()

Advances to the next row in the table. When the end of the range is reached DoSequential returns 'false'.

			
			
**Returns:**
				
'false' if being called when active row is the last row or the recordset is not attached, 'true' - otherwise.
				
			
			
		
<a name="GetColumnCount"></a>    
#### GetColumnCount()

Gets columns count.

			
			
**Returns:**
				
Number of Columns in the result set.
				
			
			
		
<a name="GetColumnName"></a>    
#### GetColumnName(ind)

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
						<td>ind</td>
						<td>number</td>
						<td>
								Column index.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
Name of column in the spreadsheet.
				
			
			
		
<a name="GetColumnNames"></a>    
#### GetColumnNames()

Gets column names.

			
			
**Returns:**
				
Array of column names in the table.
				
			
			
		
<a name="GetCurrentRowIndex"></a>    
#### GetCurrentRowIndex()

Get zero based current row index.

			
			
			
		
<a name="GetRowCount"></a>    
#### GetRowCount()

Gets rows count.

			
			
**Returns:**
				
Number of rows in the result set.
				
			
			
		
<a name="GetValue"></a>    
#### GetValue(columnId, rowId)

Gets value by column name, and, optionally, row number. Returns current cell value after DoSequental or DoRandom if params not set.

			
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
						<td>Number | <br>String</td>
						<td>
								Column index or name. If not set 1st column is used.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>rowId</td>
						<td>number</td>
						<td>
								Row index. If not set current row is used.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
		


