# File

File object. Use it to perform actions not related to a particular object. You do not need torecord or learn this object, it is always automatically available in any test.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[Append](#Append) | Appends text to a file. |
|	[CreateFolder](#CreateFolder) | Creates a folder. |
|	[Delete](#Delete) | Deletes a file. |
|	[DeleteFolder](#DeleteFolder) | Deletes a folder. |
|	[Exists](#Exists) | Checks if file exists or not. |
|	[Find](#Find) | <p>Find files in folder using wildcard pattern (including * and ?). |
|	[FolderExists](#FolderExists) | Checks if folder exists. |
|	[FolderInfo](#FolderInfo) | Gets information about a folder. |
|	[Include](#Include) | Includes code from a file. |
|	[IncludeOnce](#IncludeOnce) | Includes code from a file if it was not included earlier. |
|	[Info](#Info) | Gets information about a file. |
|	[Read](#Read) | Reads text file. |
|	[ResolvePath](#ResolvePath) | Finds the file in test folders and calculates its absolute path. |
|	[Touch](#Touch) | Sets file modification time to current time. |
|	[Write](#Write) | Writes text file. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="Append"></a>    
#### Append(fileName, text)

Appends text to a file.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file. |
| text | string |	Text to append to the file. |






<a name="CreateFolder"></a>    
#### CreateFolder(folderPath)

Creates a folder.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| folderPath | string |	Path to a folder. |






<a name="Delete"></a>    
#### Delete(fileName)

Deletes a file.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to delete. |






<a name="DeleteFolder"></a>    
#### DeleteFolder(folderPath)

Deletes a folder.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| folderPath | string |	Path to a folder. |






<a name="Exists"></a>    
#### Exists(fileName)

Checks if file exists or not.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to check. |




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

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path to a folder to search in. |
| searchPattern=* | string |	Search pattern (may include * and ? wildcards, but no regexp). |
| recursive | boolean |	'true' for folder and subfolders.<br>Optional, Default: false. |
| firstOnly | boolean |	Return only first matching item (if any).<br>Optional, Default: false. |
| files | boolean |	Return matching files.<br>Optional, Default: true. |
| folders | boolean |	Return matching folders.<br>Optional, Default: false. |




**Returns:**

string: \n-separated string where each line is a path to the found item.




<a name="FolderExists"></a>    
#### FolderExists(folderPath)

Checks if folder exists.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| folderPath | string |	Path to a folder. |




**Returns:**

true if folder exists, false - otherwise.




<a name="FolderInfo"></a>    
#### FolderInfo(folderPath)

Gets information about a folder.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| folderPath | string |	Path to a folder. |




**Returns:**

Folder object as described here <a displaytype="text" defaultstyle="true" type="weblink" href="https://msdn.microsoft.com/en-us/library/1c87day3%28v=vs.84%29.aspx" target="_blank" styleclass="Normal" translate="true">https://msdn.microsoft.com/en-us/library/1c87day3%28v=vs.84%29.aspx</a>          e.g. Path, SubFolders and Files enumeration.




<a name="Include"></a>    
#### Include(fileName)

Includes code from a file.Normally used together with eval statement, i.e.:eval( File.Include('myfile.js') )


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to load. |




**Returns:**

Contents of the source file for evaluation.




<a name="IncludeOnce"></a>    
#### IncludeOnce(fileName)

Includes code from a file if it was not included earlier.Normally used together with eval statement, i.e.:eval( File.IncludeOnce('myfile.js') )


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to load. |




**Returns:**

Contents of the source file for evaluation.




<a name="Info"></a>    
#### Info(fileName)

Gets information about a file.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file. |




**Returns:**

File object as described here <a displaytype="text" defaultstyle="true" type="weblink" href="https://msdn.microsoft.com/en-us/library/1ft05taf%28v=vs.84%29.aspx" target="_blank" styleclass="Normal" translate="true">https://msdn.microsoft.com/en-us/library/1ft05taf%28v=vs.84%29.aspx</a>          e.g. DateLastModified, Size, Type, Name, Path.




<a name="Read"></a>    
#### Read(fileName)

Reads text file.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to read. |




**Returns:**

Contents of the text file as string.




<a name="ResolvePath"></a>    
#### ResolvePath(fileName)

Finds the file in test folders and calculates its absolute path.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to resolve path. |




**Returns:**

Absolute path of the file.




<a name="Touch"></a>    
#### Touch(fileName)

Sets file modification time to current time.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to touch. |






<a name="Write"></a>    
#### Write(fileName, text)

Writes text file.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to write. |
| text | string |	Text to write into the file. |






	

