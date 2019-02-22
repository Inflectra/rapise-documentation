

# File

File object. Use it to perform actions not related to a particular object. You do not need torecord or learn this object, it is always automatically available in any test.







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
			  <a href="#Append">Append</a>
			</td>
			<td>
				Appends text to a file.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#CreateFolder">CreateFolder</a>
			</td>
			<td>
				Creates a folder.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Delete">Delete</a>
			</td>
			<td>
				Deletes a file.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#DeleteFolder">DeleteFolder</a>
			</td>
			<td>
				Deletes a folder.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Exists">Exists</a>
			</td>
			<td>
				Checks if file exists or not.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Find">Find</a>
			</td>
			<td>
				<p>Find files in folder using wildcard pattern (including * and ?).
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#FolderExists">FolderExists</a>
			</td>
			<td>
				Checks if folder exists.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#FolderInfo">FolderInfo</a>
			</td>
			<td>
				Gets information about a folder.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Include">Include</a>
			</td>
			<td>
				Includes code from a file.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#IncludeOnce">IncludeOnce</a>
			</td>
			<td>
				Includes code from a file if it was not included earlier.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Info">Info</a>
			</td>
			<td>
				Gets information about a file.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Read">Read</a>
			</td>
			<td>
				Reads text file.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#ResolvePath">ResolvePath</a>
			</td>
			<td>
				Finds the file in test folders and calculates its absolute path.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Touch">Touch</a>
			</td>
			<td>
				Sets file modification time to current time.
			</td>
		  </tr>
		
		  <tr style="vertical-align:top">
			<td>
			  <a href="#Write">Write</a>
			</td>
			<td>
				Writes text file.
			</td>
		  </tr>
		
	   </table>
	
	

<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="Append"></a>    
#### Append(fileName, text)

Appends text to a file.

			
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
								Name of the file.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>text</td>
						<td>string</td>
						<td>
								Text to append to the file.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="CreateFolder"></a>    
#### CreateFolder(folderPath)

Creates a folder.

			
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
						<td>folderPath</td>
						<td>string</td>
						<td>
								Path to a folder.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="Delete"></a>    
#### Delete(fileName)

Deletes a file.

			
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
								Name of the file to delete.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="DeleteFolder"></a>    
#### DeleteFolder(folderPath)

Deletes a folder.

			
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
						<td>folderPath</td>
						<td>string</td>
						<td>
								Path to a folder.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="Exists"></a>    
#### Exists(fileName)

Checks if file exists or not.

			
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
								Name of the file to check.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
true if file exists, false otherwise.
				
			
			
		
<a name="Find"></a>    
#### Find(path, searchPattern=*, recursive, firstOnly, files, folders)

<p>Find files in folder using wildcard pattern (including * and ?).</p>
<pre>
I.e. File.Find("c:/Temp", "*.txt", true) may return
  C:\Temp\file1.txt
  C:\Temp\SubFolder\file2.txt
  C:\Temp\SubFolder2\file3.txt
  C:\Temp\SubFolder2\file4.txt

Result may be converted to array like that:
var arrFiles = File.Find("c:/Temp", "*.txt", true).split('\n');
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
						<td>path</td>
						<td>string</td>
						<td>
								Path to a folder to search in.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>searchPattern=*</td>
						<td>string</td>
						<td>
								Search pattern (may include * and ? wildcards, but no regexp).
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>recursive</td>
						<td>boolean</td>
						<td>
								'true' for folder and subfolders.<br>Optional, Default: false.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>firstOnly</td>
						<td>boolean</td>
						<td>
								Return only first matching item (if any).<br>Optional, Default: false.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>files</td>
						<td>boolean</td>
						<td>
								Return matching files.<br>Optional, Default: true.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>folders</td>
						<td>boolean</td>
						<td>
								Return matching folders.<br>Optional, Default: false.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
string: \n-separated string where each line is a path to the found item.
				
			
			
		
<a name="FolderExists"></a>    
#### FolderExists(folderPath)

Checks if folder exists.

			
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
						<td>folderPath</td>
						<td>string</td>
						<td>
								Path to a folder.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
true if folder exists, false - otherwise.
				
			
			
		
<a name="FolderInfo"></a>    
#### FolderInfo(folderPath)

Gets information about a folder.

			
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
						<td>folderPath</td>
						<td>string</td>
						<td>
								Path to a folder.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
Folder object as described here <link displaytype="text" defaultstyle="true" type="weblink" href="https://msdn.microsoft.com/en-us/library/1c87day3%28v=vs.84%29.aspx" target="_blank" styleclass="Normal" translate="true">https://msdn.microsoft.com/en-us/library/1c87day3%28v=vs.84%29.aspx</link>          e.g. Path, SubFolders and Files enumeration.
				
			
			
		
<a name="Include"></a>    
#### Include(fileName)

Includes code from a file.Normally used together with eval statement, i.e.:eval( File.Include('myfile.js') )

			
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
								Name of the file to load.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
Contents of the source file for evaluation.
				
			
			
		
<a name="IncludeOnce"></a>    
#### IncludeOnce(fileName)

Includes code from a file if it was not included earlier.Normally used together with eval statement, i.e.:eval( File.IncludeOnce('myfile.js') )

			
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
								Name of the file to load.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
Contents of the source file for evaluation.
				
			
			
		
<a name="Info"></a>    
#### Info(fileName)

Gets information about a file.

			
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
								Name of the file.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
File object as described here <link displaytype="text" defaultstyle="true" type="weblink" href="https://msdn.microsoft.com/en-us/library/1ft05taf%28v=vs.84%29.aspx" target="_blank" styleclass="Normal" translate="true">https://msdn.microsoft.com/en-us/library/1ft05taf%28v=vs.84%29.aspx</link>          e.g. DateLastModified, Size, Type, Name, Path.
				
			
			
		
<a name="Read"></a>    
#### Read(fileName)

Reads text file.

			
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
								Name of the file to read.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
Contents of the text file as string.
				
			
			
		
<a name="ResolvePath"></a>    
#### ResolvePath(fileName)

Finds the file in test folders and calculates its absolute path.

			
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
								Name of the file to resolve path.
						</td>
					  </tr>
				  
				</table>
			
			
**Returns:**
				
Absolute path of the file.
				
			
			
		
<a name="Touch"></a>    
#### Touch(fileName)

Sets file modification time to current time.

			
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
								Name of the file to touch.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
<a name="Write"></a>    
#### Write(fileName, text)

Writes text file.

			
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
								Name of the file to write.
						</td>
					  </tr>
				  
					  <tr style="vertical-align:top">
						<td>text</td>
						<td>string</td>
						<td>
								Text to write into the file.
						</td>
					  </tr>
				  
				</table>
			
			
			
		
		


