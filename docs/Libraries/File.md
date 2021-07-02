Summary: File object. Use it to perform actions not related to a particular object. You do not need to

# File

File object. Use it to perform actions not related to a particular object. You do not need torecord or learn this object, it is always automatically available in any test.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[Append](#append) | Appends text to a file. |
|	[CreateFolder](#createfolder) | Creates a folder. |
|	[Delete](#delete) | Deletes a file. |
|	[DeleteFolder](#deletefolder) | Deletes a folder. |
|	[Exists](#exists) | Checks if file exists or not. |
|	[Find](#find) | <p>Find files in folder using wildcard pattern (including * and ?). |
|	[FolderExists](#folderexists) | Checks if folder exists. |
|	[FolderInfo](#folderinfo) | Gets information about a folder. |
|	[Include](#include) | Includes code from a file. |
|	[IncludeOnce](#includeonce) | Includes code from a file if it was not included earlier. |
|	[Info](#info) | Gets information about a file. |
|	[Read](#read) | Reads UTF-8 encoded text file. |
|	[ResolvePath](#resolvepath) | Finds the file in test folders and calculates its absolute path. |
|	[Touch](#touch) | Sets file modification time to current time. |
|	[Write](#write) | Writes text file. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="Append"></a>    
#### Append

Appends text to a file.

```javascript
Append(fileName, text) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file. |
| text | string |	Text to append to the file. |





<a name="see.also.file.append"></a>

<a name="CreateFolder"></a>    
#### CreateFolder

Creates a folder.

```javascript
CreateFolder(folderPath) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| folderPath | string |	Path to a folder. |





<a name="see.also.file.createfolder"></a>

<a name="Delete"></a>    
#### Delete

Deletes a file.

```javascript
Delete(fileName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to delete. |





<a name="see.also.file.delete"></a>

<a name="DeleteFolder"></a>    
#### DeleteFolder

Deletes a folder.

```javascript
DeleteFolder(folderPath) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| folderPath | string |	Path to a folder. |





<a name="see.also.file.deletefolder"></a>

<a name="Exists"></a>    
#### Exists

Checks if file exists or not.

```javascript
Exists(fileName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to check. |




**Returns:**

true if file exists, false otherwise.



<a name="see.also.file.exists"></a>

<a name="Find"></a>    
#### Find

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

```javascript
Find(path, searchPattern, recursive, firstOnly, files, folders) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |	Path to a folder to search in. |
| searchPattern | string |	Search pattern (may include * and ? wildcards, but no regexp). |
| recursive | boolean |	'true' for folder and subfolders.<br>Optional, Default: "false". |
| firstOnly | boolean |	Return only first matching item (if any).<br>Optional, Default: "false". |
| files | boolean |	Return matching files.<br>Optional, Default: "true". |
| folders | boolean |	Return matching folders.<br>Optional, Default: "false". |




**Returns:**

string: \n-separated string where each line is a path to the found item.



<a name="see.also.file.find"></a>

<a name="FolderExists"></a>    
#### FolderExists

Checks if folder exists.

```javascript
FolderExists(folderPath) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| folderPath | string |	Path to a folder. |




**Returns:**

true if folder exists, false - otherwise.



<a name="see.also.file.folderexists"></a>

<a name="FolderInfo"></a>    
#### FolderInfo

Gets information about a folder.

```javascript
FolderInfo(folderPath) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| folderPath | string |	Path to a folder. |




**Returns:**

Folder object as described here <a displaytype="text" defaultstyle="true" type="weblink" href="https://msdn.microsoft.com/en-us/library/1c87day3%28v=vs.84%29.aspx" target="_blank" styleclass="Normal" translate="true">https://msdn.microsoft.com/en-us/library/1c87day3%28v=vs.84%29.aspx</a>          e.g. Path, SubFolders and Files enumeration.



<a name="see.also.file.folderinfo"></a>

<a name="Include"></a>    
#### Include

Includes code from a file.Normally used together with eval statement, i.e.:eval( File.Include('myfile.js') )

```javascript
Include(fileName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to load. |




**Returns:**

Contents of the source file for evaluation.



<a name="see.also.file.include"></a>

<a name="IncludeOnce"></a>    
#### IncludeOnce

Includes code from a file if it was not included earlier.Normally used together with eval statement, i.e.:eval( File.IncludeOnce('myfile.js') )

```javascript
IncludeOnce(fileName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to load. |




**Returns:**

Contents of the source file for evaluation.



<a name="see.also.file.includeonce"></a>

<a name="Info"></a>    
#### Info

Gets information about a file.

```javascript
Info(fileName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file. |




**Returns:**

File object as described here <a displaytype="text" defaultstyle="true" type="weblink" href="https://msdn.microsoft.com/en-us/library/1ft05taf%28v=vs.84%29.aspx" target="_blank" styleclass="Normal" translate="true">https://msdn.microsoft.com/en-us/library/1ft05taf%28v=vs.84%29.aspx</a>          e.g. DateLastModified, Size, Type, Name, Path.



<a name="see.also.file.info"></a>

<a name="Read"></a>    
#### Read

Reads UTF-8 encoded text file.

```javascript
Read(fileName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to read. |




**Returns:**

Contents of the text file as string.



<a name="see.also.file.read"></a>

<a name="ResolvePath"></a>    
#### ResolvePath

Finds the file in test folders and calculates its absolute path.

```javascript
ResolvePath(fileName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to resolve path. |




**Returns:**

Absolute path of the file.



<a name="see.also.file.resolvepath"></a>

<a name="Touch"></a>    
#### Touch

Sets file modification time to current time.

```javascript
Touch(fileName) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to touch. |





<a name="see.also.file.touch"></a>

<a name="Write"></a>    
#### Write

Writes text file.

```javascript
Write(fileName, text) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| fileName | string |	Name of the file to write. |
| text | string |	Text to write into the file. |





<a name="see.also.file.write"></a>

	

