

# iOSPageIndicator

Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="iOSObject" styleclass="Normal" translate="true">iOSObject</link>.

Extends SeSSimulatedObject.






**Behavior Pattern: iOSObjectPageIndicatorBehavior**


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
      <a href="#ItemCount">ItemCount</a>
		</td>
		<td>
			Number of items.
		</td>
		
		<td>
		  GetItemCount
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#PageIndex">PageIndex</a>
		</td>
		<td>
			Selected page index.
		</td>
		
		<td>
		  GetPageIndex
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
			  <a href="#DoNextPage">DoNextPage</a>
			</td>
			<td>
				Navigates to next page.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoPrevPage">DoPrevPage</a>
			</td>
			<td>
				Navigates to previous page.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSelectPage">DoSelectPage</a>
			</td>
			<td>
				Selects a page at index.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemCount"></a>
#### ItemCount


Number of items.

			
	
			
Type: number
			
			
Accessors: GetItemCount
			
		
<a name="PageIndex"></a>
#### PageIndex


Selected page index.

			
	
			
Type: number
			
			
Accessors: GetPageIndex
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoNextPage"></a>    
#### DoNextPage()

Navigates to next page.

			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoPrevPage"></a>    
#### DoPrevPage()

Navigates to previous page.

			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoSelectPage"></a>    
#### DoSelectPage(index)

Selects a page at index.

			
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
								Index of the page.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
		


