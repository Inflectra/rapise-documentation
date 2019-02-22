

# AndroidObject

Android Object.
 
Extends SeSSimulatedObject.






**Behavior Pattern: AndroidObjectGenericBehavior**


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
			Child object at index.
		</td>
		
		<td>
		  GetChildAt
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ChildCount">ChildCount</a>
		</td>
		<td>
			Number of child items.
		</td>
		
		<td>
		  GetChildCount
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Class">Class</a>
		</td>
		<td>
			Class name of the object.
		</td>
		
		<td>
		  GetClass
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
      <a href="#Name">Name</a>
		</td>
		<td>
			Name of the object.
		</td>
		
		<td>
		  GetName
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#ObjectType">ObjectType</a>
		</td>
		<td>
			Type of the object.
		</td>
		
		<td>
		  GetObjectType
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Property">Property</a>
		</td>
		<td>
			Value of a named property of the object.
		</td>
		
		<td>
		  GetProperty
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Text">Text</a>
		</td>
		<td>
			Text of the object, 'false' if text can not be read.
		</td>
		
		<td>
		  GetText
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
			  <a href="#DoAction">DoAction</a>
			</td>
			<td>
				Clicks in the middle of the control.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoClear">DoClear</a>
			</td>
			<td>
				Clears the text of the object.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoClick">DoClick</a>
			</td>
			<td>
				Clicks in the middle of the control.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoEnsureVisible">DoEnsureVisible</a>
			</td>
			<td>
				Ensure that a child item with the specified text is visible on screen.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSendKeys">DoSendKeys</a>
			</td>
			<td>
				Send a text to the object in character-by-character mode.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ChildAt"></a>
#### ChildAt


Child object at index.

			
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
		<td>index</td>
		<td>number</td>
		<td>
			Index of the object to get.
		</td>
	  </tr>
  
</table>

	
			
Type: string
			
			
Accessors: GetChildAt
			
		
<a name="ChildCount"></a>
#### ChildCount


Number of child items.

			
	
			
Type: number
			
			
Accessors: GetChildCount
			
		
<a name="Class"></a>
#### Class


Class name of the object.

			
	
			
Type: string
			
			
Accessors: GetClass
			
		
<a name="Height"></a>
#### Height


Height of the object.

			
	
			
Type: number
			
			
Accessors: GetHeight
			
		
<a name="Name"></a>
#### Name


Name of the object.

			
	
			
Type: string
			
			
Accessors: GetName
			
		
<a name="ObjectType"></a>
#### ObjectType


Type of the object.

			
	
			
Type: string
			
			
Accessors: GetObjectType
			
		
<a name="Property"></a>
#### Property


Value of a named property of the object.

			
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
		<td>name</td>
		<td>string</td>
		<td>
			Property name.
		</td>
	  </tr>
  
</table>

	
			
Type: string
			
			
Accessors: GetProperty
			
		
<a name="Text"></a>
#### Text


Text of the object, 'false' if text can not be read.

			
	
			
Type: string
			
			
Accessors: GetText
			
		
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
		
<a name="DoAction"></a>    
#### DoAction()

Clicks in the middle of the control.

			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoClear"></a>    
#### DoClear()

Clears the text of the object.

			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoClick"></a>    
#### DoClick()

Clicks in the middle of the control.

			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoEnsureVisible"></a>    
#### DoEnsureVisible(text)

Ensure that a child item with the specified text is visible on screen.

			
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
						<td>text</td>
						<td>string</td>
						<td>
								Text to search for.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
<a name="DoSendKeys"></a>    
#### DoSendKeys(keys)

Send a text to the object in character-by-character mode.

			
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
						<td>keys</td>
						<td>string</td>
						<td>
								Text to type into the object.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if success, 'false' otherwise.
				
			
			
		
		


