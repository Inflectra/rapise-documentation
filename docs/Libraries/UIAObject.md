

# UIAObject

Extends SeSSimulatedObject.






**Behavior Pattern: UIAObjectGenericBehavior**


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
      <a href="#ChildAt">ChildAt</a>
		</td>
		<td>
			Object for nth child of this object's UI Automation node
		</td>
		
		<td>
		  GetChildAt
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ChildrenCount">ChildrenCount</a>
		</td>
		<td>
			Number of UI Automation nodes within current node
		</td>
		
		<td>
		  GetChildrenCount
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Height">Height</a>
		</td>
		<td>
			Height of the object.
		</td>
		
		<td>
		  GetHeight
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#IndexInParent">IndexInParent</a>
		</td>
		<td>
			Object's order index in parent UI Automation node
		</td>
		
		<td>
		  GetIndexInParent
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Name">Name</a>
		</td>
		<td>
			Name of of UI Automation object
		</td>
		
		<td>
		  GetName
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#NextSibling">NextSibling</a>
		</td>
		<td>
			Object for UI Automation next sibling node
		</td>
		
		<td>
		  GetNextSibling
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Parent">Parent</a>
		</td>
		<td>
			Object for UI Automation parent node
		</td>
		
		<td>
		  GetParent
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#PrevSibling">PrevSibling</a>
		</td>
		<td>
			Object for UI Automation previous sibling node
		</td>
		
		<td>
		  GetPrevSibling
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#TypeName">TypeName</a>
		</td>
		<td>
			Type name of UI Automation object
		</td>
		
		<td>
		  GetTypeName
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Value">Value</a>
		</td>
		<td>
			Value of the object.
		</td>
		
		<td>
		  GetValue
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Width">Width</a>
		</td>
		<td>
			Width of the object.
		</td>
		
		<td>
		  GetWidth
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#X">X</a>
		</td>
		<td>
			X-coordinate of the top left corner of the object.
		</td>
		
		<td>
		  GetX
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Y">Y</a>
		</td>
		<td>
			Y-coordinate of the top left corner of the object.
		</td>
		
		<td>
		  GetY
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
				Performs left click at the center of an object.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoDumpWidget">DoDumpWidget</a>
			</td>
			<td>
				Dumps Spy data for the object.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoFindByText">DoFindByText</a>
			</td>
			<td>
				Find nested element by its text (Value and Name of each element are compared with specified text or regular expression).
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoGetWidgetProperty">DoGetWidgetProperty</a>
			</td>
			<td>
				Returns the value of a property with a given name.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ChildAt"></a>
#### ChildAt


Object for nth child of this object's UI Automation node

			
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
		<td>ind=0</td>
		<td>number</td>
		<td>
			Zero-based index for a required child
		</td>
	  </tr>
  
</table>

	
			
Type: object
			
			
Accessors: GetChildAt
			
		
<a name="ChildrenCount"></a>
#### ChildrenCount


Number of UI Automation nodes within current node

			
	
			
Type: number
			
			
Accessors: GetChildrenCount
			
		
<a name="Height"></a>
#### Height


Height of the object.

			
	
			
Type: number
			
			
Accessors: GetHeight
			
		
<a name="IndexInParent"></a>
#### IndexInParent


Object's order index in parent UI Automation node

			
	
			
Type: number
			
			
Accessors: GetIndexInParent
			
		
<a name="Name"></a>
#### Name


Name of of UI Automation object

			
	
			
Type: string
			
			
Accessors: GetName
			
		
<a name="NextSibling"></a>
#### NextSibling


Object for UI Automation next sibling node

			
	
			
Type: object
			
			
Accessors: GetNextSibling
			
		
<a name="Parent"></a>
#### Parent


Object for UI Automation parent node

			
	
			
Type: object
			
			
Accessors: GetParent
			
		
<a name="PrevSibling"></a>
#### PrevSibling


Object for UI Automation previous sibling node

			
	
			
Type: object
			
			
Accessors: GetPrevSibling
			
		
<a name="TypeName"></a>
#### TypeName


Type name of UI Automation object

			
	
			
Type: String
			
			
Accessors: GetTypeName
			
		
<a name="Value"></a>
#### Value


Value of the object.

			
	
			
Type: number
			
			
Accessors: GetValue
			
		
<a name="Width"></a>
#### Width


Width of the object.

			
	
			
Type: number
			
			
Accessors: GetWidth
			
		
<a name="X"></a>
#### X


X-coordinate of the top left corner of the object.

			
	
			
Type: number
			
			
Accessors: GetX
			
		
<a name="Y"></a>
#### Y


Y-coordinate of the top left corner of the object.

			
	
			
Type: number
			
			
Accessors: GetY
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClick"></a>    
#### DoClick(x, y)

Performs left click at the center of an object. It is a customizable variant of LClick action.

			
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
						<td>x</td>
						<td>number</td>
						<td>
								X offset to click within object. Default is a center.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>y</td>
						<td>number</td>
						<td>
								Y offset to click within object. Default is a center.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="DoDumpWidget"></a>    
#### DoDumpWidget(dumpProperties, maxDepth, trimValue, indent, filePath, append, ignoreProps)

Dumps Spy data for the object.

			
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
						<td>dumpProperties</td>
						<td>boolean</td>
						<td>
								If 'true' then includes properties to the result.<br>Optional, Default: false.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>maxDepth</td>
						<td>number</td>
						<td>
								Determines max recursion depth. If '0' then dumps current object only, if '1' - dumps direct children as well, etc. If '-1' then dumps the whole subtree of objects.<br>Optional, Default: 0.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>trimValue</td>
						<td>number</td>
						<td>
								Determines maximum length of a proprty value. Excess characters are truncated.<br>Optional, Default: 256.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>indent</td>
						<td>string</td>
						<td>
								Indentation string for child objects and properties.<br>Optional, Default: \.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>filePath</td>
						<td>string</td>
						<td>
								If 'filePath' is set then outputs result to corresponding file.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>append</td>
						<td>boolean</td>
						<td>
								If 'true' then file should be overwritten, if 'false' then data should be appended.<br>Optional, Default: false.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>ignoreProps</td>
						<td>Array</td>
						<td>
								Contains the names of the properties which must be ignored when writing into a file.<br>Optional, Default: undefined.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
string | <br>boolean: Object data if 'filePath' is not set, 'true' if file write succeeded, 'false' - otherwise.
				
			
			
		
<a name="DoFindByText"></a>    
#### DoFindByText(textOrRegexp, depth)

Find nested element by its text (Value and Name of each element are compared with specified text or regular expression).

			
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
						<td>textOrRegexp</td>
						<td>string</td>
						<td>
								plain string or regexp:... expression to match
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>depth</td>
						<td>number</td>
						<td>
								depth level for search (default is 3)<br>Optional, Default: 3.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
object: UIAutomationObject containing text if found, null otherwise
				
			
			
		
<a name="DoGetWidgetProperty"></a>    
#### DoGetWidgetProperty(name)

Returns the value of a property with a given name. Names of available properties can be seen in Spy.

			
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
						<td>string</td>
						<td>
								Property name.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
string: Property value if successful, an empty string if the property can not be found.
				
			
			
		
		


