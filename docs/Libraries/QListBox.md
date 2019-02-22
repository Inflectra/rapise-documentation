

# QListBox

This is the Qt list box. Use DoSelectItem to select a particular item.
 
Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="QWidget" styleclass="Normal" translate="true">QWidget</link>.

Extends SeSSimulatedObject.






**Behavior Pattern: QtListBoxBehavior**


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
      <a href="#Value">Value</a>
		</td>
		<td>
			Gets the value of the selected item.
		</td>
		
		<td>
		  GetValue
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
			  <a href="#DoSelectItem">DoSelectItem</a>
			</td>
			<td>
				Selects an item of this object.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Value"></a>
#### Value


Gets the value of the selected item. This is usually equivalent to the name of the item being selected.

			
	
			
Type: string
			
			
Accessors: GetValue
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectItem"></a>    
#### DoSelectItem(itemName)

Selects an item of this object.

			
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
						<td>itemName</td>
						<td>string</td>
						<td>
								Item name to select.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
		


