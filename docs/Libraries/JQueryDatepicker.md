

# JQueryDatepicker

Extends HTMLObject.

Extends SeSSimulatedObject.






**Behavior Pattern: JQueryDatepickerBehavior**


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
			Gets the currently selected month
		</td>
		
		<td>
		  GetMonth
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Year">Year</a>
		</td>
		<td>
			Gets the currently selected year
		</td>
		
		<td>
		  GetYear
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
				Changes to the next month.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoPrevMonth">DoPrevMonth</a>
			</td>
			<td>
				Changes to the previous month.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSelectDate">DoSelectDate</a>
			</td>
			<td>
				Selects a specific day in the current month.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Month"></a>
#### Month


Gets the currently selected month

			
	
			
Type: number
			
			
Accessors: GetMonth
			
		
<a name="Year"></a>
#### Year


Gets the currently selected year

			
	
			
Type: number
			
			
Accessors: GetYear
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoNextMonth"></a>    
#### DoNextMonth()

Changes to the next month.

			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoPrevMonth"></a>    
#### DoPrevMonth()

Changes to the previous month.

			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoSelectDate"></a>    
#### DoSelectDate(dateValue)

Selects a specific day in the current month.

			
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
						<td>dateValue</td>
						<td>number</td>
						<td>
								The day of the month to choose
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
		


