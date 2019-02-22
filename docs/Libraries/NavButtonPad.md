

# NavButtonPad

Extends ManagedObject.

Extends SeSSimulatedObject.






**Behavior Pattern: POSControlsButtonPadBehavior**


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
      <a href="#ButtonCaption">ButtonCaption</a>
		</td>
		<td>
			Caption of a button with specified index
		</td>
		
		<td>
		  GetButtonCaption
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ColumnCount">ColumnCount</a>
		</td>
		<td>
			Number of columns on a page
		</td>
		
		<td>
		  GetColumnCount
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#FullInfo">FullInfo</a>
		</td>
		<td>
			JSON-formatted info for all buttons
		</td>
		
		<td>
		  GetFullInfo
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#FullText">FullText</a>
		</td>
		<td>
			TAB-separated table with button captions
		</td>
		
		<td>
		  GetFullText
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#PageCount">PageCount</a>
		</td>
		<td>
			Number of pages
		</td>
		
		<td>
		  GetPageCount
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#RowCount">RowCount</a>
		</td>
		<td>
			Number of rows on a page
		</td>
		
		<td>
		  GetRowCount
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ToggleState">ToggleState</a>
		</td>
		<td>
			ToggleState of the button
		</td>
		
		<td>
		  GetToggleState
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
			  <a href="#DoClick">DoClick</a>
			</td>
			<td>
				Click button by caption or no (1-based index)
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ButtonCaption"></a>
#### ButtonCaption


Caption of a button with specified index

			
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
		<td>textOrId</td>
		<td>string | <br>number</td>
		<td>
			button 'no' (1-based index)
		</td>
	  </tr>
  
</table>

	
			
Type: string
			
			
Accessors: GetButtonCaption
			
		
<a name="ColumnCount"></a>
#### ColumnCount


Number of columns on a page

			
	
			
Type: number
			
			
Accessors: GetColumnCount
			
		
<a name="FullInfo"></a>
#### FullInfo


JSON-formatted info for all buttons

			
	
			
Type: string
			
			
Accessors: GetFullInfo
			
		
<a name="FullText"></a>
#### FullText


TAB-separated table with button captions

			
	
			
Type: string
			
			
Accessors: GetFullText
			
		
<a name="PageCount"></a>
#### PageCount


Number of pages

			
	
			
Type: number
			
			
Accessors: GetPageCount
			
		
<a name="RowCount"></a>
#### RowCount


Number of rows on a page

			
	
			
Type: number
			
			
Accessors: GetRowCount
			
		
<a name="ToggleState"></a>
#### ToggleState


ToggleState of the button

			
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
		<td>textOrId</td>
		<td>string | <br>number</td>
		<td>
			caption or 'no' (1-based index)
		</td>
	  </tr>
  
</table>

	
			
Type: boolean
			
			
Accessors: GetToggleState
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClick"></a>    
#### DoClick(textOrId, timeout)

Click button by caption or no (1-based index)

			
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
						<td>textOrId</td>
						<td>string | <br>number</td>
						<td>
								caption or 'no' (1-based index)
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>timeout</td>
						<td>number</td>
						<td>
								number of milliseconds to wait for a button to appear<br>Optional, Default: 5000.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
		


