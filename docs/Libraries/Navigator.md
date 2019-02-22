

# Navigator

Navigator object. This is used to provide functions for manipulating the web browser when using the HTML libraries.







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

  </tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#AutoOpen">AutoOpen</a>
		</td>
		<td>
			During playback when Rapise connects to a browser for the first time and can not locatean object and AutoOpen is 'true' it launches a new browser instance.
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#EnsureVisibleHorizontalAlignment">EnsureVisibleHorizontalAlignment</a>
		</td>
		<td>
			One of "start", "center", "end", or "nearest".
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#EnsureVisibleVerticalAlignment">EnsureVisibleVerticalAlignment</a>
		</td>
		<td>
			One of "start", "center", "end", or "nearest".
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#QuitIfNotConnected">QuitIfNotConnected</a>
		</td>
		<td>
			If connection to browser fails - open plugin page and quit.
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
			  <a href="#CheckObjectExists">CheckObjectExists</a>
			</td>
			<td>
				Checks if object is found on the screen by its id or XPath.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Close">Close</a>
			</td>
			<td>
				Closes browser.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Detach">Detach</a>
			</td>
			<td>
				Disconnects from a browser.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoCheckAlert">DoCheckAlert</a>
			</td>
			<td>
				Waits until browser alert with a given text.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoCheckConfirmation">DoCheckConfirmation</a>
			</td>
			<td>
				Waits until browser confirmation with a given text.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoCheckPrompt">DoCheckPrompt</a>
			</td>
			<td>
				Waits until browser prompt with a given text.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DOMFindByAttributeValue">DOMFindByAttributeValue</a>
			</td>
			<td>
				Looks for a web element by specific attribute value through all frames.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DOMFindByName">DOMFindByName</a>
			</td>
			<td>
				Looks for a web element by its name through all frames.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DOMFindByText">DOMFindByText</a>
			</td>
			<td>
				Looks for a web element by its text contents through all frames.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DOMFindByXPath">DOMFindByXPath</a>
			</td>
			<td>
				Looks for a web element by specific local XPath value through all frames.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoScreenshot">DoScreenshot</a>
			</td>
			<td>
				Makes screenshot of the browser window.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSetExpectedConfirmResult">DoSetExpectedConfirmResult</a>
			</td>
			<td>
				Set boolean value to return as a result of next browser 'confirm' request.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DoSetExpectedPromptResult">DoSetExpectedPromptResult</a>
			</td>
			<td>
				Set text to return as a result of next browser 'prompt' request.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#ExecJS">ExecJS</a>
			</td>
			<td>
				Executes given JavaScript statement in a browser and returns results.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Find">Find</a>
			</td>
			<td>
				Returns HTMLObject wrapping DOM element for a given 'xpath'.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetPerformance">GetPerformance</a>
			</td>
			<td>
				Reads performance information from currently used browser.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Navigate">Navigate</a>
			</td>
			<td>
				Redirects browser to a specified URL.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Open">Open</a>
			</td>
			<td>
				Opens a browser.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#SelectBrowserProfile">SelectBrowserProfile</a>
			</td>
			<td>
				Selects browser profile to use for testing.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="AutoOpen"></a>
#### AutoOpen


During playback when Rapise connects to a browser for the first time and can not locatean object and AutoOpen is 'true' it launches a new browser instance. If AutoOpen is 'false' it does nothing. Default value is 'true'.Applicable to Chrome, Firefox and Internet Explorer. Selenium targets are not affected by this property.Use Navigator.GetAutoOpen() to read the value and Navigator.SetAutoOpen(true|false) to set the value.

			
	
			
Type: boolean
			
			
		
<a name="EnsureVisibleHorizontalAlignment"></a>
#### EnsureVisibleHorizontalAlignment


One of "start", "center", "end", or "nearest". Defaults to "nearest".

			
	
			
Type: string
			
			
		
<a name="EnsureVisibleVerticalAlignment"></a>
#### EnsureVisibleVerticalAlignment


One of "start", "center", "end", or "nearest". Defaults to "start".

			
	
			
Type: string
			
			
		
<a name="QuitIfNotConnected"></a>
#### QuitIfNotConnected


If connection to browser fails - open plugin page and quit. If set to 'false' - just return 'false' in Open call.

			
	
			
Type: boolean
			
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="CheckObjectExists"></a>    
#### CheckObjectExists(xpathOrObjId)

Checks if object is found on the screen by its id or XPath.

			
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
						<td>xpathOrObjId</td>
						<td>string</td>
						<td>
								XPath or ID. XPath is detected by leading "." or "/".
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
'true' if browser alert had occurred, 'false' otherwise.
				
			
			
		
<a name="Close"></a>    
#### Close(url)

Closes browser. Finishes session.

			
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
						<td>url</td>
						<td>string</td>
						<td>
								Not used - can leave empty
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="Detach"></a>    
#### Detach()

Disconnects from a browser. Make Navigator ready for a new browser instance connection.

			
			
			
		
<a name="DoCheckAlert"></a>    
#### DoCheckAlert(msg)

Waits until browser alert with a given text. Wait timeout is 10 seconds.

			
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
						<td>msg</td>
						<td>string</td>
						<td>
								alert text. Can be exact text or regular expression.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
'true' if browser alert had occurred, 'false' otherwise.
				
			
			
		
<a name="DoCheckConfirmation"></a>    
#### DoCheckConfirmation(msg, result)

Waits until browser confirmation with a given text.  Wait timeout is 10 seconds.

			
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
						<td>msg</td>
						<td>string</td>
						<td>
								confirmation text. Can be exact text or regular expression.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>result</td>
						<td>string</td>
						<td>
								Not used - can leave empty.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
'true' if browser confirmation popup is shown, 'false' otherwise.
				
			
			
		
<a name="DoCheckPrompt"></a>    
#### DoCheckPrompt(msg, result)

Waits until browser prompt with a given text.  Wait timeout is 10 seconds.

			
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
						<td>msg</td>
						<td>string</td>
						<td>
								prompt text. Can be exact text or regular expression.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>result</td>
						<td>string</td>
						<td>
								Not used - can leave empty.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
'true' if browser prompt popup is shown, 'false' otherwise.
				
			
			
		
<a name="DOMFindByAttributeValue"></a>    
#### DOMFindByAttributeValue(attrName, attrValue, findAll, timeout, timeout)

Looks for a web element by specific attribute value through all frames. [attrValue] is checked agains each element's [attrName] attribute.

			
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
						<td>attrName</td>
						<td>string</td>
						<td>
								name of the attribute to check. May be @attr or attr.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>attrValue</td>
						<td>string</td>
						<td>
								expected attribute value.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>findAll</td>
						<td>string</td>
						<td>
								optional, bool. Defines if we return just first element (false, default) or all found elements (true). Default is false.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>timeout</td>
						<td>boolean</td>
						<td>
								, number. Timeout in milliseconds to keep trying to find an element. Default behavior is just do single attempt.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>timeout</td>
						<td>number</td>
						<td>
								
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
array | <br>object: If [findAll] is set to false then just first found element or null is returned. Else search is done for all matching elements and array is returned (empty array if nothing found).
				
			
			
		
<a name="DOMFindByName"></a>    
#### DOMFindByName(name, tagName, findAll, timeout)

Looks for a web element by its name through all frames. Name is checked agains @name and @id attribute of each element

			
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
								expected element name to search for<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>tagName</td>
						<td>Sring</td>
						<td>
								optional tag name, default is * (any tag)<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>findAll</td>
						<td>boolean</td>
						<td>
								optional, bool. Defines if we return just first element (false, default) or all found elements (true). Default is false.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>timeout</td>
						<td>number</td>
						<td>
								, number. Timeout in milliseconds to keep trying to find an element. Default behavior is just do single attempt.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
array | <br>object: If [findAll] is set to false then just first found element or null is returned. Else search is done for all matching elements and array is returned (empty array if nothing found).
				
			
			
		
<a name="DOMFindByText"></a>    
#### DOMFindByText(text, tagName, findAll, timeout)

Looks for a web element by its text contents through all frames. [text] is checked agains each element text contents.

			
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
								expected text to search for<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>tagName</td>
						<td>string</td>
						<td>
								optional tag name, default is * (any tag)<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>findAll</td>
						<td>boolean</td>
						<td>
								optional, bool. Defines if we return just first element (false, default) or all found elements (true). Default is false.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>timeout</td>
						<td>number</td>
						<td>
								, number. Timeout in milliseconds to keep trying to find an element. Default behavior is just do single attempt.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
array | <br>object: If [findAll] is set to false then just first found element or null is returned. Else search is done for all matching elements and array is returned (empty array if nothing found).
				
			
			
		
<a name="DOMFindByXPath"></a>    
#### DOMFindByXPath(xpath, findAll, timeout)

Looks for a web element by specific local XPath value through all frames. If XPath is local (i.e. //img) then search will be performed for all images in all nested frames.

			
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
						<td>xpath</td>
						<td>string</td>
						<td>
								local XPath to execute for each frame.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>findAll</td>
						<td>boolean</td>
						<td>
								optional, bool. Defines if we return just first element (false, default) or all found elements (true). Default is false.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>timeout</td>
						<td>number</td>
						<td>
								, number. Timeout in milliseconds to keep trying to find an element. Default behavior is just do single attempt.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
array | <br>object: If [findAll] is set to false then just first found element or null is returned. Else search is done for all matching elements and array is returned (empty array if nothing found).
				
			
			
		
<a name="DoScreenshot"></a>    
#### DoScreenshot(fileName)

Makes screenshot of the browser window.

			
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
						<td>fileName</td>
						<td>string</td>
						<td>
								Save the screenshot to a file if name is specified. Otherwise - add to report.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="DoSetExpectedConfirmResult"></a>    
#### DoSetExpectedConfirmResult(expectedRes)

Set boolean value to return as a result of next browser 'confirm' request.

			
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
						<td>expectedRes</td>
						<td>string</td>
						<td>
								The text to be returned in the next request.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="DoSetExpectedPromptResult"></a>    
#### DoSetExpectedPromptResult(expectedRes)

Set text to return as a result of next browser 'prompt' request.

			
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
						<td>expectedRes</td>
						<td>string</td>
						<td>
								The text to be returned in the next request.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="ExecJS"></a>    
#### ExecJS(scriptText, obj)

Executes given JavaScript statement in a browser and returns results.

			
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
						<td>scriptText</td>
						<td>string</td>
						<td>
								JavaScript code.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>obj</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSObject" styleclass="Normal" translate="true">SeSObject</link></td>
						<td>
								
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				

				
			
			
		
<a name="Find"></a>    
#### Find(xpath, url, title, objInfo)

Returns HTMLObject wrapping DOM element for a given 'xpath'. HTMLObject is a {SeSObject} constructed by matching one of browser rules: IEHTMLObject, MozillaHTMLObject, etc.

			
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
						<td>xpath</td>
						<td>string</td>
						<td>
								location path of a DOM element.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>url</td>
						<td>string</td>
						<td>
								URL. If new navigator is launched, the URL is used.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>title</td>
						<td>string</td>
						<td>
								The title of the HTML document that is being searched.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>objInfo</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSObjectInfo" styleclass="Normal" translate="true">SeSObjectInfo</link></td>
						<td>
								A populated SeSObjectInfo object.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
HTMLObject wrapping DOM element for a given 'xpath', 'null' if 'xpath' is invalid.
				
			
			
		
<a name="GetPerformance"></a>    
#### GetPerformance(resources, dontWriteReport)

Reads performance information from currently used browser. Performance numbersare based on output from window.performance structure of the web page. See alsohttp://www.w3.org/TR/navigation-timing/#processing-model

			
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
						<td>resources</td>
						<td>boolean</td>
						<td>
								optional, bool. Set to true if you want to dump information about resource timing into the report<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>dontWriteReport</td>
						<td>boolean</td>
						<td>
								optional, Set to true if you want just return page load time and write nothing to report<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
number: page open time (in milliseconds)
				
			
			
		
<a name="Navigate"></a>    
#### Navigate(url)

Redirects browser to a specified URL.

			
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
						<td>url</td>
						<td>string</td>
						<td>
								The URL to navigate to.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="Open"></a>    
#### Open(url)

Opens a browser. If URL is specified, goes to URL.

			
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
						<td>url</td>
						<td>string</td>
						<td>
								start URL for opening browser. Can be 'null'.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="SelectBrowserProfile"></a>    
#### SelectBrowserProfile(profileName)

Selects browser profile to use for testing.

			
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
						<td>profileName</td>
						<td>string</td>
						<td>
								name of a browser profile.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
		


