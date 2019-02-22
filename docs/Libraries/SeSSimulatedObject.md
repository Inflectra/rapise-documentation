

# SeSSimulatedObject

This is a rule for simulated objects.






**Behavior Pattern: Win32Generic**


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
      <a href="#Bitmap">Bitmap</a>
		</td>
		<td>
			UI Image of the object.
		</td>
		
		<td>
		  GetBitmap
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#BWBitmap">BWBitmap</a>
		</td>
		<td>
			UI Image of the object in 1-bit format (black&white).
		</td>
		
		<td>
		  GetBWBitmap
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Class">Class</a>
		</td>
		<td>
			Class of the object.
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
			SeSMatcherRule type for this object.
		</td>
		
		<td>
		  GetObjectType
		</td>
		<td>
		  
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#State">State</a>
		</td>
		<td>
			State of the object.
		</td>
		
		<td>
		  GetState
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
		  SetValue
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
      <a href="#WindowText">WindowText</a>
		</td>
		<td>
			Window text of the object.
		</td>
		
		<td>
		  GetWindowText
		</td>
		<td>
		  SetWindowText
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
				Performs default action for an object.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoAnalogPlay">DoAnalogPlay</a>
			</td>
			<td>
				Plays analog recording using coordinates relative to this object.
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
			  <a href="#DoEnsureVisible">DoEnsureVisible</a>
			</td>
			<td>
				Makes sure specified element is visible on the screen.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoLButtonDown">DoLButtonDown</a>
			</td>
			<td>
				Performs left mouse button down.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoLButtonUp">DoLButtonUp</a>
			</td>
			<td>
				Performs left mouse button up.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoLClick">DoLClick</a>
			</td>
			<td>
				Performs a left click at the center of an object or at the specified location.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoLDClick">DoLDClick</a>
			</td>
			<td>
				Performs a left double click at the center of an object or at the specified location.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoMButtonDown">DoMButtonDown</a>
			</td>
			<td>
				Performs middle mouse button down.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoMButtonUp">DoMButtonUp</a>
			</td>
			<td>
				Performs middle mouse button up.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoMClick">DoMClick</a>
			</td>
			<td>
				Performs a middle click at the center of an object or at the specified location.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoMDClick">DoMDClick</a>
			</td>
			<td>
				Performs a middle double click at the center of an object or at the specified location.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoMouseMove">DoMouseMove</a>
			</td>
			<td>
				Moves mouse cursor to a location relative to this object position.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoRButtonDown">DoRButtonDown</a>
			</td>
			<td>
				Performs right mouse button down.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoRButtonUp">DoRButtonUp</a>
			</td>
			<td>
				Performs right mouse button up.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoRClick">DoRClick</a>
			</td>
			<td>
				Performs a right click at the center of an object or at the specified location.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoRDClick">DoRDClick</a>
			</td>
			<td>
				Performs a right double click at the center of an object or at the specified location.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSendKeys">DoSendKeys</a>
			</td>
			<td>
				Sends series of keystrokes to an object.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Bitmap"></a>
#### Bitmap


UI Image of the object.

			
	
			
Type: ImageWrapper
			
			
Accessors: GetBitmap
			
		
<a name="BWBitmap"></a>
#### BWBitmap


UI Image of the object in 1-bit format (black&white).

			
	
			
Type: ImageWrapper
			
			
Accessors: GetBWBitmap
			
		
<a name="Class"></a>
#### Class


Class of the object.

			
	
			
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


SeSMatcherRule type for this object.

			
	
			
Type: string
			
			
Accessors: GetObjectType
			
		
<a name="State"></a>
#### State


State of the object.

			
	
			
Type: string
			
			
Accessors: GetState
			
		
<a name="Value"></a>
#### Value


Value of the object.

			
	
			
Type: string
			
			
Accessors: GetValue, SetValue
			
		
<a name="Width"></a>
#### Width


Width of the object.

			
	
			
Type: number
			
			
Accessors: GetWidth
			
		
<a name="WindowText"></a>
#### WindowText


Window text of the object.

			
	
			
Type: string
			
			
Accessors: GetWindowText, SetWindowText
			
		
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

Performs default action for an object. If the object doesn't have default action then 'LClick' is performed.

			
			
			
		
<a name="DoAnalogPlay"></a>    
#### DoAnalogPlay(path, left, top)

Plays analog recording using coordinates relative to this object.

			
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
								Path to analog recording (usually an .arf file).
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>left</td>
						<td>number</td>
						<td>
								X-coordinate of top-left corner of the analog area, relative to object top-left corner<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>top</td>
						<td>number</td>
						<td>
								Y-coordinate of the top-left corner of the analog area, relative to object top-left corner.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="DoClick"></a>    
#### DoClick(clickType, xOffset, yOffset)

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
						<td>clickType</td>
						<td>string</td>
						<td>
								Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>xOffset</td>
						<td>number</td>
						<td>
								X offset to click within object. Default is a center.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>yOffset</td>
						<td>number</td>
						<td>
								Y offset to click within object. Default is a center.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if operation is successful, 'false' otherwise
				
			
			
		
<a name="DoEnsureVisible"></a>    
#### DoEnsureVisible()

Makes sure specified element is visible on the screen.

			
			
			
		
<a name="DoLButtonDown"></a>    
#### DoLButtonDown()

Performs left mouse button down. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: This action must be followed by 'DoLButtonUp', otherwise it may lock mouse cursor.

			
			
			
		
<a name="DoLButtonUp"></a>    
#### DoLButtonUp()

Performs left mouse button up. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: Use this action after 'DoLButtonDown', otherwise it will have no effect.

			
			
			
		
<a name="DoLClick"></a>    
#### DoLClick(x, y)

Performs a left click at the center of an object or at the specified location.

			
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
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if operation is successful, 'false' otherwise
				
			
			
		
<a name="DoLDClick"></a>    
#### DoLDClick(x, y)

Performs a left double click at the center of an object or at the specified location.

			
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
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if operation is successful, 'false' otherwise
				
			
			
		
<a name="DoMButtonDown"></a>    
#### DoMButtonDown()

Performs middle mouse button down. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: This action must be followed by 'DoMButtonUp', otherwise it may lock mouse cursor.

			
			
			
		
<a name="DoMButtonUp"></a>    
#### DoMButtonUp()

Performs middle mouse button up. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: Use this action after 'DoMButtonDown', otherwise it will have no effect.

			
			
			
		
<a name="DoMClick"></a>    
#### DoMClick(x, y)

Performs a middle click at the center of an object or at the specified location.

			
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
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if operation is successful, 'false' otherwise
				
			
			
		
<a name="DoMDClick"></a>    
#### DoMDClick(x, y)

Performs a middle double click at the center of an object or at the specified location.

			
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
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if operation is successful, 'false' otherwise
				
			
			
		
<a name="DoMouseMove"></a>    
#### DoMouseMove(x, y)

Moves mouse cursor to a location relative to this object position.

			
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
				  
				</table>
			
			
			
		
<a name="DoRButtonDown"></a>    
#### DoRButtonDown()

Performs right mouse button down. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: This action must be followed by 'DoRButtonUp', otherwise it may lock mouse cursor.

			
			
			
		
<a name="DoRButtonUp"></a>    
#### DoRButtonUp()

Performs right mouse button up. This method does not change cursor coordinates. Make sure that you use 'DoMouseMove' to position mouse cursor properly before calling this method. Note: Use this action after 'DoRButtonDown', otherwise it will have no effect.

			
			
			
		
<a name="DoRClick"></a>    
#### DoRClick(x, y)

Performs a right click at the center of an object or at the specified location.

			
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
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if operation is successful, 'false' otherwise
				
			
			
		
<a name="DoRDClick"></a>    
#### DoRDClick(x, y)

Performs a right double click at the center of an object or at the specified location.

			
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
				  
				</table>
			
			
**Returns:**
				
boolean: 'true' if operation is successful, 'false' otherwise
				
			
			
		
<a name="DoSendKeys"></a>    
#### DoSendKeys(keys)

Sends series of keystrokes to an object. For example: DoSendKeys('^F') - sends {CTRL} + {F}. See <link displaytype="text" defaultstyle="true" type="weblink" href="http://msdn.microsoft.com/en-us/library/system.windows.forms.sendkeys.aspx" target="_blank" styleclass="Normal" translate="true">MSDN Article for SendKeys</link>

			
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
								A sequence of keystrokes.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
		


