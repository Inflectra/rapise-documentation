

# Ocr

Optical Character Resolution (OCR) object. Use it to recognize text on the screen.







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
			  <a href="#DoClickTextInObject">DoClickTextInObject</a>
			</td>
			<td>
				Does OCR for a given object, finds a given string and clicks on it.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoClickTextInWindow">DoClickTextInWindow</a>
			</td>
			<td>
				Does OCR for a window that contains a given object, finds a given string and clicks on it.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoExtractFromImage">DoExtractFromImage</a>
			</td>
			<td>
				Does OCR for 'img'.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoExtractFromObject">DoExtractFromObject</a>
			</td>
			<td>
				Does OCR for a given object.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoExtractFromScreen">DoExtractFromScreen</a>
			</td>
			<td>
				Does OCR for a given rectangle.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoExtractFromWindow">DoExtractFromWindow</a>
			</td>
			<td>
				Does OCR for a window that contains a given object.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSelectOcrEngine">DoSelectOcrEngine</a>
			</td>
			<td>
				Selects OCR engine by name.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickTextInObject"></a>    
#### DoClickTextInObject(objId, text, clickType)

Does OCR for a given object, finds a given string and clicks on it.

			
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
						<td>objId</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSObject" styleclass="Normal" translate="true">SeSObject</link> | <br>String</td>
						<td>
								ID of an object or SeSObject instance.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>text</td>
						<td>string</td>
						<td>
								Text to find.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>clickType</td>
						<td>string</td>
						<td>
								Type of a click to perform.<br>Optional, Default: "L".
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
'true' if the text was found, 'false' otherwise.
				
			
			
		
<a name="DoClickTextInWindow"></a>    
#### DoClickTextInWindow(objId, text, clickType)

Does OCR for a window that contains a given object, finds a given string and clicks on it.

			
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
						<td>objId</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSObject" styleclass="Normal" translate="true">SeSObject</link> | <br>String</td>
						<td>
								ID of an object or SeSObject instance.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>text</td>
						<td>string</td>
						<td>
								Text to find.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>clickType</td>
						<td>string</td>
						<td>
								Type of a click to perform.<br>Optional, Default: "L".
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
'true' if the text was found, 'false' otherwise.
				
			
			
		
<a name="DoExtractFromImage"></a>    
#### DoExtractFromImage(img)

Does OCR for 'img'.

			
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
						<td>img</td>
						<td>SeSWrappers.Utils.ImageWrapper | <br>String</td>
						<td>
								Image (ImageWrapper object or path to a file) to do OCR.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
Recognized text or empty string in the case of an error.
				
			
			
		
<a name="DoExtractFromObject"></a>    
#### DoExtractFromObject(objId)

Does OCR for a given object.

			
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
						<td>objId</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSObject" styleclass="Normal" translate="true">SeSObject</link> | <br>String</td>
						<td>
								ID of an object or SeSObject instance.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
Recognized text or empty string in the case of an error.
				
			
			
		
<a name="DoExtractFromScreen"></a>    
#### DoExtractFromScreen(left, top, right, bottom)

Does OCR for a given rectangle.

			
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
						<td>left</td>
						<td>number</td>
						<td>
								X-coordinate of the top left corner.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>top</td>
						<td>number</td>
						<td>
								Y-coordinate of the top left corner.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>right</td>
						<td>number</td>
						<td>
								X-coordinate of the bottom right corner.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>bottom</td>
						<td>number</td>
						<td>
								Y-coordinate of the bottomo right corner.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
Recognized text or empty string in the case of an error.
				
			
			
		
<a name="DoExtractFromWindow"></a>    
#### DoExtractFromWindow(objId)

Does OCR for a window that contains a given object.

			
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
						<td>objId</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSObject" styleclass="Normal" translate="true">SeSObject</link> | <br>String</td>
						<td>
								ID of an object or SeSObject instance.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
Recognized text or empty string in the case of an error.
				
			
			
		
<a name="DoSelectOcrEngine"></a>    
#### DoSelectOcrEngine(ocrName)

Selects OCR engine by name. The name should point to installed OCR engine.

			
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
						<td>ocrName</td>
						<td>string</td>
						<td>
								Name of an OCR engine available to SmarteStudio. For example, 'Textract' or 'Tesseract'.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
		


