

# JavaSwingMenuBar

Java Swing Menu Bar.
 
Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="JavaObject" styleclass="Normal" translate="true">JavaObject</link>.

Extends SeSSimulatedObject.






**Behavior Pattern: JavaSwingObjectMenuBarBehavior**


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
			  <a href="#DoFullText">DoFullText</a>
			</td>
			<td>
				Returns text representation of the menu or saves it to a file.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoGetSubmenuCount">DoGetSubmenuCount</a>
			</td>
			<td>
				Gets the number of submenu items for a given menu path.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoGetSubmenuProperty">DoGetSubmenuProperty</a>
			</td>
			<td>
				Gets submenu property.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoGetSubmenuText">DoGetSubmenuText</a>
			</td>
			<td>
				Gets submenu text.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoMenu">DoMenu</a>
			</td>
			<td>
				Performs click on the menu item.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoFullText"></a>    
#### DoFullText(separator, filePath, append, includeSeparators)

Returns text representation of the menu or saves it to a file.

			
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
						<td>separator</td>
						<td>string</td>
						<td>
								Separator character.<br>Optional, Default: ;.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>filePath</td>
						<td>string</td>
						<td>
								Name of a file that should hold text representation of the menu.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>append</td>
						<td>boolean</td>
						<td>
								If 'false' then file should be overwritten, if 'true' then data should be appended.<br>Optional, Default: false.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>includeSeparators</td>
						<td>boolean</td>
						<td>
								If 'true' then menu separators are included to the result.<br>Optional, Default: false.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
number | <br>boolean: Text representation of the menu, 'true' if the file was successfully written, 'false' otherwise.
				
			
			
		
<a name="DoGetSubmenuCount"></a>    
#### DoGetSubmenuCount(path, separator)

Gets the number of submenu items for a given menu path.

			
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
						<td>path</td>
						<td>string</td>
						<td>
								Path from the menu root to a leaf item with components delimited by separator parameter.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>separator</td>
						<td>string</td>
						<td>
								Separator character.<br>Optional, Default: ;.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
number | <br>boolean: Number of submenu items, 'false' otherwise.
				
			
			
		
<a name="DoGetSubmenuProperty"></a>    
#### DoGetSubmenuProperty(path, index, property, separator)

Gets submenu property.

			
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
						<td>path</td>
						<td>string</td>
						<td>
								Path from the menu root to a leaf item with components delimited by separator parameter.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>index</td>
						<td>number</td>
						<td>
								Index of the submenu.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>property</td>
						<td>string</td>
						<td>
								Name of a property. Available properties can be seen in Java Spy.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>separator</td>
						<td>string</td>
						<td>
								Separator character.<br>Optional, Default: ;.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
string | <br>boolean: Submenu property, 'false' otherwise.
				
			
			
		
<a name="DoGetSubmenuText"></a>    
#### DoGetSubmenuText(path, index, separator)

Gets submenu text.

			
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
						<td>path</td>
						<td>string</td>
						<td>
								Path from the menu root to a leaf item with components delimited by separator parameter.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>index</td>
						<td>number</td>
						<td>
								Index of the submenu.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>separator</td>
						<td>string</td>
						<td>
								Separator character.<br>Optional, Default: ;.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
string | <br>boolean: Submenu text, 'false' otherwise.
				
			
			
		
<a name="DoMenu"></a>    
#### DoMenu(path, separator)

Performs click on the menu item.

			
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
						<td>path</td>
						<td>string</td>
						<td>
								Path from the menu root to a leaf item with components delimited by separator parameter.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>separator</td>
						<td>string</td>
						<td>
								Separator character.<br>Optional, Default: ;.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
		


