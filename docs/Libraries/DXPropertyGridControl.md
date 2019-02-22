

# DXPropertyGridControl

Extends ManagedObject.

Extends SeSSimulatedObject.






**Behavior Pattern: DXPropertyGridControlBehavior**


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
			  <a href="#DoGetRowCaption">DoGetRowCaption</a>
			</td>
			<td>
				Gets caption of the row with index.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoGetRowColor">DoGetRowColor</a>
			</td>
			<td>
				Gets color of the row with index.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoGetRowRect">DoGetRowRect</a>
			</td>
			<td>
				Gets rectangle of the row with index.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoGetRowValue">DoGetRowValue</a>
			</td>
			<td>
				Gets value of the row with index.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSetRowValue">DoSetRowValue</a>
			</td>
			<td>
				Sets value of the row with index.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="RowCount"></a>
#### RowCount


Number of rows in the table.

			
	
			
Type: number
			
			
Accessors: GetRowCount
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoGetRowCaption"></a>    
#### DoGetRowCaption(rowIndex)

Gets caption of the row with index.

			
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
								Row index
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
string: Row caption
				
			
			
		
<a name="DoGetRowColor"></a>    
#### DoGetRowColor(rowIndex)

Gets color of the row with index.

			
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
								Row index
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
string: Row color
				
			
			
		
<a name="DoGetRowRect"></a>    
#### DoGetRowRect(rowIndex)

Gets rectangle of the row with index.

			
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
								Row index
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
Object: Row rectangle {x, y, w, h}.
				
			
			
		
<a name="DoGetRowValue"></a>    
#### DoGetRowValue(rowIndex)

Gets value of the row with index.

			
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
								Row index
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
Object: Row value
				
			
			
		
<a name="DoSetRowValue"></a>    
#### DoSetRowValue(rowIndex, value)

Sets value of the row with index.

			
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
								Row index
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>value</td>
						<td>string</td>
						<td>
								Value to set
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
Boolean: 'true' if successfull
				
			
			
		
		


