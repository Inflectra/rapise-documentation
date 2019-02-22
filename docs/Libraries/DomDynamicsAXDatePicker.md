

# DomDynamicsAXDatePicker

This behavior pattern implements standard behavior for DatePicker control.
 
Extends HTMLObject.

Extends SeSSimulatedObject.






**Behavior Pattern: DomDynamicsAXDatePickerBehavior**


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
      <a href="#Day">Day</a>
		</td>
		<td>
			Current day displayed by the date picker.
		</td>
		
		<td>
		  GetDay
		</td>
		<td>
		  
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

  <tr style="vertical-align:top">
		<td>
      <a href="#Year">Year</a>
		</td>
		<td>
			Current year displayed by the date picker.
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
		
<a name="Day"></a>
#### Day


Current day displayed by the date picker.

			
	
			
Type: string|number
			
			
Accessors: GetDay
			
		
<a name="Month"></a>
#### Month


Current month displayed by the date picker.

			
	
			
Type: string|number
			
			
Accessors: GetMonth
			
		
<a name="Year"></a>
#### Year


Current year displayed by the date picker.

			
	
			
Type: string|number
			
			
Accessors: GetYear
			
		
	
	
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
#### DoSelectDate(dateValue)

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
						<td>dateValue</td>
						<td>number</td>
						<td>
								New date to select
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise
				
			
			
		
		


