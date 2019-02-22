

# GWTExtTabPanel

GWT-Ext Tab.
 
Extends HTMLObject.

Extends SeSSimulatedObject.






**Behavior Pattern: GWTExtTabPanelBehavior**


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
      <a href="#ItemsCount">ItemsCount</a>
		</td>
		<td>
			Number of tabs in the panel
		</td>
		
		<td>
		  GetItemsCount
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedIndex">SelectedIndex</a>
		</td>
		<td>
			Index of the selected tab
		</td>
		
		<td>
		  GetSelectedIndex
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#SelectedTab">SelectedTab</a>
		</td>
		<td>
			Text of the selected tab
		</td>
		
		<td>
		  GetSelectedTab
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
			  <a href="#DoSelectTab">DoSelectTab</a>
			</td>
			<td>
				Selects the tab by name.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemsCount"></a>
#### ItemsCount


Number of tabs in the panel

			
	
			
Type: number
			
			
Accessors: GetItemsCount
			
		
<a name="SelectedIndex"></a>
#### SelectedIndex


Index of the selected tab

			
	
			
Type: number
			
			
Accessors: GetSelectedIndex
			
		
<a name="SelectedTab"></a>
#### SelectedTab


Text of the selected tab

			
	
			
Type: string
			
			
Accessors: GetSelectedTab
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectTab"></a>    
#### DoSelectTab(name, x, y, forceEvent)

Selects the tab by name.

			
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
						<td>string | <br>number</td>
						<td>
								Tab name to select
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>x</td>
						<td>number</td>
						<td>
								X-coordinate of location relative to object's left border
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>y</td>
						<td>number</td>
						<td>
								Y-coordinate of location relative to object's top border
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>forceEvent</td>
						<td>boolean</td>
						<td>
								pass 'true' to force browser event without actual mouse click.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
		


