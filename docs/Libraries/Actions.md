

# Actions

This is a JavaScript wrapper for Actions of Selenium .NET library.







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
			  <a href="#Build">Build</a>
			</td>
			<td>
				Builds the sequence of actions.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Click">Click</a>
			</td>
			<td>
				Clicks the mouse on the specified element.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#ClickAndHold">ClickAndHold</a>
			</td>
			<td>
				Clicks and holds the mouse button down on the specified element.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#ContextClick">ContextClick</a>
			</td>
			<td>
				Right-clicks the mouse on the specified element.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoubleClick">DoubleClick</a>
			</td>
			<td>
				Double-clicks the mouse on the specified element.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DragAndDrop">DragAndDrop</a>
			</td>
			<td>
				Performs a drag-and-drop operation from one element to another.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DragAndDropToOffset">DragAndDropToOffset</a>
			</td>
			<td>
				Performs a drag-and-drop operation on one element to a specified offset.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#KeyDown">KeyDown</a>
			</td>
			<td>
				Sends a modifier key down message to the specified element in the browser.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#KeyUp">KeyUp</a>
			</td>
			<td>
				Sends a modifier key up message to the specified element in the browser.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#MoveByOffset">MoveByOffset</a>
			</td>
			<td>
				Moves the mouse to the specified offset of the last known mouse coordinates.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#MoveToElement">MoveToElement</a>
			</td>
			<td>
				Moves the mouse to the specified offset of the top-left corner of the specified element.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Perform">Perform</a>
			</td>
			<td>
				Performs the currently built action.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Release">Release</a>
			</td>
			<td>
				Releases the mouse button on the specified element.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#SendKeys">SendKeys</a>
			</td>
			<td>
				Sends a sequence of keystrokes to the specified element in the browser.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="Build"></a>    
#### Build()

Builds the sequence of actions.

			
			
**Returns:**
				
A self-reference.
				
			
			
		
<a name="Click"></a>    
#### Click(el)

Clicks the mouse on the specified element. If no element is specified clicks the mouse at the last known mouse coordinates.

			
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
						<td>el</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="WebElement" styleclass="Normal" translate="true">WebElement</link></td>
						<td>
								The element on which to click.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
A self-reference.
				
			
			
		
<a name="ClickAndHold"></a>    
#### ClickAndHold(el)

Clicks and holds the mouse button down on the specified element.If no element is specified clicks and holds the mouse button at the last known mouse coordinates.

			
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
						<td>el</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="WebElement" styleclass="Normal" translate="true">WebElement</link></td>
						<td>
								The element on which to click and hold.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
A self-reference.
				
			
			
		
<a name="ContextClick"></a>    
#### ContextClick(el)

Right-clicks the mouse on the specified element.If no element is specified right-clicks the mouse at the last known mouse coordinates.

			
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
						<td>el</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="WebElement" styleclass="Normal" translate="true">WebElement</link></td>
						<td>
								The element on which to right-click.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
A self-reference.
				
			
			
		
<a name="DoubleClick"></a>    
#### DoubleClick(el)

Double-clicks the mouse on the specified element.If no element is specified double-clicks the mouse at the last known mouse coordinates.

			
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
						<td>el</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="WebElement" styleclass="Normal" translate="true">WebElement</link></td>
						<td>
								The element on which to double-click.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
A self-reference.
				
			
			
		
<a name="DragAndDrop"></a>    
#### DragAndDrop(source, target)

Performs a drag-and-drop operation from one element to another.

			
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
						<td>source</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="WebElement" styleclass="Normal" translate="true">WebElement</link></td>
						<td>
								The element on which the drag operation is started.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>target</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="WebElement" styleclass="Normal" translate="true">WebElement</link></td>
						<td>
								The element on which the drop is performed.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
A self-reference.
				
			
			
		
<a name="DragAndDropToOffset"></a>    
#### DragAndDropToOffset(source, offsetX, offsetY)

Performs a drag-and-drop operation on one element to a specified offset.

			
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
						<td>source</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="WebElement" styleclass="Normal" translate="true">WebElement</link></td>
						<td>
								The element on which the drag operation is started.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>offsetX</td>
						<td>number</td>
						<td>
								The horizontal offset to which to move the mouse.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>offsetY</td>
						<td>number</td>
						<td>
								The vertical offset to which to move the mouse.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
A self-reference.
				
			
			
		
<a name="KeyDown"></a>    
#### KeyDown(theKey, el)

Sends a modifier key down message to the specified element in the browser.If no element is specified sends a modifier key down message to the browser.

			
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
						<td>theKey</td>
						<td>string</td>
						<td>
								The key to be sent. Accepts "Shift", "Control" and "Alt".
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>el</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="WebElement" styleclass="Normal" translate="true">WebElement</link></td>
						<td>
								The element to which to send the key command.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
A self-reference.
				
			
			
		
<a name="KeyUp"></a>    
#### KeyUp(theKey, el)

Sends a modifier key up message to the specified element in the browser.If no element is specified sends a modifier key up message to the browser.

			
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
						<td>theKey</td>
						<td>string</td>
						<td>
								The key to be sent. Accepts "Shift", "Control" and "Alt".
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>el</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="WebElement" styleclass="Normal" translate="true">WebElement</link></td>
						<td>
								The element to which to send the key command.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
A self-reference.
				
			
			
		
<a name="MoveByOffset"></a>    
#### MoveByOffset(offsetX, offsetY)

Moves the mouse to the specified offset of the last known mouse coordinates.

			
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
						<td>offsetX</td>
						<td>number</td>
						<td>
								The horizontal offset to which to move the mouse.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>offsetY</td>
						<td>number</td>
						<td>
								The vertical offset to which to move the mouse.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
A self-reference.
				
			
			
		
<a name="MoveToElement"></a>    
#### MoveToElement(el, offsetX, offsetY)

Moves the mouse to the specified offset of the top-left corner of the specified element.If offset is not specified moves the mouse to the specified element.

			
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
						<td>el</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="WebElement" styleclass="Normal" translate="true">WebElement</link></td>
						<td>
								The element to which to move the mouse.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>offsetX</td>
						<td>number</td>
						<td>
								The horizontal offset to which to move the mouse.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>offsetY</td>
						<td>number</td>
						<td>
								The vertical offset to which to move the mouse.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
A self-reference.
				
			
			
		
<a name="Perform"></a>    
#### Perform()

Performs the currently built action.

			
			
			
		
<a name="Release"></a>    
#### Release(el)

Releases the mouse button on the specified element.If no element is specified releases the mouse button at the last known mouse coordinates.

			
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
						<td>el</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="WebElement" styleclass="Normal" translate="true">WebElement</link></td>
						<td>
								The element on which to release the button.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
A self-reference.
				
			
			
		
<a name="SendKeys"></a>    
#### SendKeys(keysToSend, el)

Sends a sequence of keystrokes to the specified element in the browser.If no element is specified sends a sequence of keystrokes to the browser.

			
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
						<td>keysToSend</td>
						<td>string</td>
						<td>
								The keystrokes to send to the browser.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>el</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="WebElement" styleclass="Normal" translate="true">WebElement</link></td>
						<td>
								The element to which to send the keystrokes.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
A self-reference.
				
			
			
		
		


