

# Tester

Tester object. Use it to perform assertions during test playback and output relevant information to the report.You do not need to record or learn this object, it is always automatically available in any test.







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
      <a href="#Fail">Fail</a>
		</td>
		<td>
			Test status, test failed.
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Info">Info</a>
		</td>
		<td>
			Test status, test is neither passed nor failed.
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Pass">Pass</a>
		</td>
		<td>
			Test status, test passed.
		</td>
		
	</tr>

  <tr style="vertical-align:top">
		<td>
      <a href="#Unresolved">Unresolved</a>
		</td>
		<td>
			Test status, test status is unresolved, test terminated unexpectedly.
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
			  <a href="#Assert">Assert</a>
			</td>
			<td>
				Checks if condition is 'true' and saves corresponding Report entry.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#AssertEqual">AssertEqual</a>
			</td>
			<td>
				Checks if obj1 equals to obj2 and saves corresponding Report entry.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#AssertImage">AssertImage</a>
			</td>
			<td>
				Checks if 'img1' equals to image stored at 'path' and saves corresponding Report entry.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#BeginTest">BeginTest</a>
			</td>
			<td>
				Marks beginning of a test with a given name.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#CaptureDesktopImage">CaptureDesktopImage</a>
			</td>
			<td>
				Captures image of the desktop and adds it to the report.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#CaptureObjectImage">CaptureObjectImage</a>
			</td>
			<td>
				Captures image of an object and adds it to the report.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#CaptureWindowImage">CaptureWindowImage</a>
			</td>
			<td>
				Captures image of an application window matched by title and class and adds it to the report.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#EndTest">EndTest</a>
			</td>
			<td>
				Marks end of a currently executed test.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#FailTest">FailTest</a>
			</td>
			<td>
				Stops test execution and sets it's status to failed.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetReportAttribute">GetReportAttribute</a>
			</td>
			<td>
				Gets report attribute previously set by PushReportAttribute or SetReportAttribute.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#GetTestStatus">GetTestStatus</a>
			</td>
			<td>
				Gets status of currently executed test.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#IgnoreStatus">IgnoreStatus</a>
			</td>
			<td>
				<p>In IgnoreStatus mode the assertion status is always treated as "Info".
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Message">Message</a>
			</td>
			<td>
				Saves corresponding Report message.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#MessageBox">MessageBox</a>
			</td>
			<td>
				Shows message box to user.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#MessageBoxPrompt">MessageBoxPrompt</a>
			</td>
			<td>
				Shows message box with question to the user and checks if user presses "Yes" or "No".
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#PopReportAttribute">PopReportAttribute</a>
			</td>
			<td>
				Resets an attribute to its previous value.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#PushReportAttribute">PushReportAttribute</a>
			</td>
			<td>
				<p>Maintains "stacked" attributes.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#ResetReportAttribute">ResetReportAttribute</a>
			</td>
			<td>
				Removes report attribute previously set by SetReportAttribute.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#SetReportAttribute">SetReportAttribute</a>
			</td>
			<td>
				Set persistent attribute.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#SuppressReport">SuppressReport</a>
			</td>
			<td>
				<p>In SuppressReport mode all assertions are ignored.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Fail"></a>
#### Fail


Test status, test failed. Constant, equal to 0.

			
	
			
Type: number
			
			
		
<a name="Info"></a>
#### Info


Test status, test is neither passed nor failed. Constant, equal to -2.

			
	
			
Type: number
			
			
		
<a name="Pass"></a>
#### Pass


Test status, test passed. Constant, equal to 1.

			
	
			
Type: number
			
			
		
<a name="Unresolved"></a>
#### Unresolved


Test status, test status is unresolved, test terminated unexpectedly. Constant, equal to -1.

			
	
			
Type: number
			
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="Assert"></a>    
#### Assert(message, condition, data, tags)

Checks if condition is 'true' and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

			
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
						<td>message</td>
						<td>string</td>
						<td>
								Message to put in the report.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>condition</td>
						<td>boolean</td>
						<td>
								If 'true' - assertion is considered passed.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>data</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSReportLink" styleclass="Normal" translate="true">SeSReportLink</link> | <br><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSReportText" styleclass="Normal" translate="true">SeSReportText</link> | <br><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSReportImage" styleclass="Normal" translate="true">SeSReportImage</link> | <br>object[] | <br>string</td>
						<td>
								Additional information to put in the report. If 'string' is passed, then data is considered as additional comment atribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>tags</td>
						<td>object</td>
						<td>
								Hash of attributes to set for this particular log entry.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="AssertEqual"></a>    
#### AssertEqual(message, obj1, obj2, data, tags)

Checks if obj1 equals to obj2 and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

			
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
						<td>message</td>
						<td>string</td>
						<td>
								Message to put in the report.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>obj1</td>
						<td>object</td>
						<td>
								First object to compare.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>obj2</td>
						<td>object</td>
						<td>
								Second object to compare.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>data</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSReportLink" styleclass="Normal" translate="true">SeSReportLink</link> | <br><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSReportText" styleclass="Normal" translate="true">SeSReportText</link> | <br><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSReportImage" styleclass="Normal" translate="true">SeSReportImage</link> | <br>Object[]</td>
						<td>
								Additional information to put in the report. If 'string' is passed, then data is considered as additional comment atribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>tags</td>
						<td>object</td>
						<td>
								Hash of attributes to set for this particular log entry.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="AssertImage"></a>    
#### AssertImage(message, img1, path, data, tags)

Checks if 'img1' equals to image stored at 'path' and saves corresponding Report entry.
Assertion is an atomic piece of verification. Assertion may contain some 
additional data (links, images, comments) set via 'data' parameter.

			
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
						<td>message</td>
						<td>string</td>
						<td>
								Message to put in the report.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>img1</td>
						<td>object</td>
						<td>
								ImageWrapper object (1st image to compare).
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>path</td>
						<td>string</td>
						<td>
								Path to the second image to compare.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>data</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSReportLink" styleclass="Normal" translate="true">SeSReportLink</link> | <br><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSReportText" styleclass="Normal" translate="true">SeSReportText</link> | <br><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSReportImage" styleclass="Normal" translate="true">SeSReportImage</link> | <br>Object[]</td>
						<td>
								Additional information to put in the report. If 'string' is passed, then data is considered as additional comment atribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>tags</td>
						<td>object</td>
						<td>
								Hash of attributes to set for this particular log entry.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="BeginTest"></a>    
#### BeginTest(name, path)

Marks beginning of a test with a given name.

			
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
								Test name
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>path</td>
						<td>string</td>
						<td>
								Path to the test, that is executed. This string will be shown as a comment.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="CaptureDesktopImage"></a>    
#### CaptureDesktopImage(caption)

Captures image of the desktop and adds it to the report.

			
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
						<td>caption</td>
						<td>string</td>
						<td>
								Image title for the report.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="CaptureObjectImage"></a>    
#### CaptureObjectImage(caption, objId)

Captures image of an object and adds it to the report.

			
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
						<td>caption</td>
						<td>string</td>
						<td>
								Image title for the report.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>objId</td>
						<td>string | <br><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSObject" styleclass="Normal" translate="true">SeSObject</link></td>
						<td>
								Id of an object or SeSObject instance.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="CaptureWindowImage"></a>    
#### CaptureWindowImage(caption, windowTitle, windowClass, bringToFront)

Captures image of an application window matched by title and class and adds it to the report.

			
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
						<td>caption</td>
						<td>string</td>
						<td>
								Image title for the report.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>windowTitle</td>
						<td>string</td>
						<td>
								String or regular expression to match window title.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>windowClass</td>
						<td>string</td>
						<td>
								String or regular expression to match window class.<br>Optional, Default: regex:.*.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>bringToFront</td>
						<td>boolean</td>
						<td>
								Set to 'false' to not restore the window before making the image.<br>Optional, Default: true.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="EndTest"></a>    
#### EndTest()

Marks end of a currently executed test. Calculates test results and performs finalization of test execution.

			
			
			
		
<a name="FailTest"></a>    
#### FailTest(message)

Stops test execution and sets it's status to failed.

			
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
						<td>message</td>
						<td>string</td>
						<td>
								Failure description.<br>Optional, Default: Test stopped on error.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="GetReportAttribute"></a>    
#### GetReportAttribute(name)

Gets report attribute previously set by PushReportAttribute or SetReportAttribute.

			
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
								Attribute name.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="GetTestStatus"></a>    
#### GetTestStatus()

Gets status of currently executed test.

			
			
**Returns:**
				
One of: 
	Tester.Info - test is neither passed nor failed;
	Tester.Pass - test passed;
	Tester.Fail - test failed;
	Tester.Unresolved - test status is unresolved, test terminated unexpectedly.
				
			
			
		
<a name="IgnoreStatus"></a>    
#### IgnoreStatus(ignore)

<p>In IgnoreStatus mode the assertion status is always treated as "Info".
Real status is written to "realStatus" attribute in this case and used
just for information purposes (i.e. it does not affect final test status).</p>

<p>This function is used when the test case needs to set test status manually.</p>
<pre>
  Tester.IgnoreStatus(true);
  Tester.Assert("Ignored Assertion", false); // This assertion is failed. But its status is ignored.
  Tester.IgnoreStatus(false);
  Tester.Assert("Test passed", true);
  // The overall test is passed because failed assertion is ignored.
</pre>

			
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
						<td>ignore</td>
						<td>boolean</td>
						<td>
								Set to 'true' to report all messages but ignore the status (Pass/Fail)
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="Message"></a>    
#### Message(message, data, tags)

Saves corresponding Report message.
Message may contain some additional data (links, images, comments) set via 'data' parameter.

			
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
						<td>message</td>
						<td>string</td>
						<td>
								Message to put in the report
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>data</td>
						<td><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSReportLink" styleclass="Normal" translate="true">SeSReportLink</link> | <br><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSReportText" styleclass="Normal" translate="true">SeSReportText</link> | <br><link displaytype="text" defaultstyle="true" type="topiclink" href="SeSReportImage" styleclass="Normal" translate="true">SeSReportImage</link> | <br>Object[]</td>
						<td>
								Additional information to put in the report. If 'string' is passed, then data is considered as additional comment atribute. Or 'array' may be passed. Each entry in the array should be one of: SeSReportLink, SeSReportImage, SeSReportText.<br>Optional.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>tags</td>
						<td>object</td>
						<td>
								Hash of attributes to set for this particular log entry.<br>Optional.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="MessageBox"></a>    
#### MessageBox(message)

Shows message box to user. Use it for verbose and manual testing.

			
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
						<td>message</td>
						<td>string</td>
						<td>
								Message to display.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="MessageBoxPrompt"></a>    
#### MessageBoxPrompt(question)

Shows message box with question to the user and checks if user presses "Yes" or "No".
  "Yes" => "Pass" goes to the report with this message.
  "No" => "Fail" is reported.

			
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
						<td>question</td>
						<td>string</td>
						<td>
								Question to display.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="PopReportAttribute"></a>    
#### PopReportAttribute(name)

Resets an attribute to its previous value. See PushReportAttribute for more information.

			
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
								Attribute name to recall from stack.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
string: Previous value. Null if no such stacked attribute found.
				
			
			
		
<a name="PushReportAttribute"></a>    
#### PushReportAttribute(name, value)

<p>Maintains "stacked" attributes. Useful for nesting. </p>
<br>
<p>Example:</p>
<br>
<p>Main test sets scenario=Main. Then it calls
another scenario (scenario Login) and then continues its own test actions.</p>
<br>
<p>We want all assertions to be attributed with current scenario name.</p>
<pre>
 function Main()
 {
     Tester.PushReportAttribute("scenario", "Main");
     Login();
     ...
     Tester.Assert("Main test passed", mainStatus); // Saved with scenario=Main
 }

 function Login()
 {
     Tester.PushReportAttribute("scenario", "Login");
     ... // Do login logic
     Tester.Assert("Login Result", loginStatus);
     Tester.PopReportAttribute("scenario"); // Set scenario value back to caller
 }
</pre>

			
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
								Attribute name to recall from stack.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>value</td>
						<td>string</td>
						<td>
								New attribute value.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="ResetReportAttribute"></a>    
#### ResetReportAttribute(name)

Removes report attribute previously set by SetReportAttribute.

			
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
								Attribute name.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="SetReportAttribute"></a>    
#### SetReportAttribute(name, value)

Set persistent attribute. It will be set for all subsequent report items
(assertions, tests, requirements, and so on). It may be changed by calling
the ResetReportAttribute function.

			
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
								Attribute name to set.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>value</td>
						<td>string</td>
						<td>
								New attribute value.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="SuppressReport"></a>    
#### SuppressReport(suppress)

<p>In SuppressReport mode all assertions are ignored. That means no lines are added to report and all statuses are treated as "Info".
This mode is like IgnoreStatus mode but no status messages are added to report.</p>

<pre>
  Tester.SuppressReport(true);
  Tester.Assert("No assertion", false); // Status of this assertion will be ignored and no record will be added to report
  SeS('Obj1').DoClick(); // No line will be added to report and operation status will be ignored
  Tester.SuppressReport(false);
</pre>

			
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
						<td>suppress</td>
						<td>boolean</td>
						<td>
								Set to 'True' to suppress adding anything into the report.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
		


