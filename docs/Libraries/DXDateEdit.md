

# DXDateEdit

DevXpress DateEdit.
 
Extends ManagedObject.

Extends SeSSimulatedObject.






**Behavior Pattern: DXDateEditBehavior**


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
      <a href="#Month">Month</a>
		</td>
		<td>
			Current month displayed by the date picker.
		</td>
		
		<td>
		  GetMonth
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
			  <a href="#DoNextMonth">DoNextMonth</a>
			</td>
			<td>
				Clicks on 'Next Month' selector.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoPrevMonth">DoPrevMonth</a>
			</td>
			<td>
				Clicks on 'Previous Month' selector.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSelectDate">DoSelectDate</a>
			</td>
			<td>
				Selects specific date in the date picker.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Month"></a>
#### Month


Current month displayed by the date picker.

			
	
			
Type: string|number
			
			
Accessors: GetMonth
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoNextMonth"></a>    
#### DoNextMonth()

Clicks on 'Next Month' selector.

			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise
				
			
			
		
<a name="DoPrevMonth"></a>    
#### DoPrevMonth()

Clicks on 'Previous Month' selector.

			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise
				
			
			
		
<a name="DoSelectDate"></a>    
#### DoSelectDate(day, month, year)

Selects specific date in the date picker.

			
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
						<td>day</td>
						<td>number</td>
						<td>
								Day to set
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>month</td>
						<td>number</td>
						<td>
								Month to set
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>year</td>
						<td>number</td>
						<td>
								Year to set
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise
				
			
			
		
		


