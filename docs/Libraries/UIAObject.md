# UIAObject

Extends SeSSimulatedObject.





**Behavior Pattern: UIAObjectGenericBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ChildAt](#ChildAt) | Object for nth child of this object's UI Automation node | GetChildAt |  |
| [ChildrenCount](#ChildrenCount) | Number of UI Automation nodes within current node | GetChildrenCount |  |
| [Height](#Height) | Height of the object. | GetHeight |  |
| [IndexInParent](#IndexInParent) | Object's order index in parent UI Automation node | GetIndexInParent |  |
| [Name](#Name) | Name of of UI Automation object | GetName |  |
| [NextSibling](#NextSibling) | Object for UI Automation next sibling node | GetNextSibling |  |
| [Parent](#Parent) | Object for UI Automation parent node | GetParent |  |
| [PrevSibling](#PrevSibling) | Object for UI Automation previous sibling node | GetPrevSibling |  |
| [TypeName](#TypeName) | Type name of UI Automation object | GetTypeName |  |
| [Value](#Value) | Value of the object. | GetValue |  |
| [Width](#Width) | Width of the object. | GetWidth |  |
| [X](#X) | X-coordinate of the top left corner of the object. | GetX |  |
| [Y](#Y) | Y-coordinate of the top left corner of the object. | GetY |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClick](#DoClick) | Performs left click at the center of an object. |
|	[DoDumpWidget](#DoDumpWidget) | Dumps Spy data for the object. |
|	[DoFindByText](#DoFindByText) | Find nested element by its text (Value and Name of each element are compared with specified text or regular expression). |
|	[DoGetWidgetProperty](#DoGetWidgetProperty) | Returns the value of a property with a given name. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ChildAt"></a>
#### ChildAt


Object for nth child of this object's UI Automation node

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| ind=0 | number | Zero-based index for a required child |


	
			
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

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |	X offset to click within object. Default is a center.<br>Optional. |
| y | number |	Y offset to click within object. Default is a center.<br>Optional. |





<a name="see.also.uiaobject.doclick"></a>

<a name="DoDumpWidget"></a>    
#### DoDumpWidget(dumpProperties, maxDepth, trimValue, indent, filePath, append, ignoreProps)

Dumps Spy data for the object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| dumpProperties | boolean |	If 'true' then includes properties to the result.<br>Optional, Default: false. |
| maxDepth | number |	Determines max recursion depth. If '0' then dumps current object only, if '1' - dumps direct children as well, etc. If '-1' then dumps the whole subtree of objects.<br>Optional, Default: 0. |
| trimValue | number |	Determines maximum length of a proprty value. Excess characters are truncated.<br>Optional, Default: 256. |
| indent | string |	Indentation string for child objects and properties.<br>Optional, Default: \. |
| filePath | string |	If 'filePath' is set then outputs result to corresponding file.<br>Optional. |
| append | boolean |	If 'true' then file should be overwritten, if 'false' then data should be appended.<br>Optional, Default: false. |
| ignoreProps | Array |	Contains the names of the properties which must be ignored when writing into a file.<br>Optional, Default: undefined. |




**Returns:**

string | <br>boolean: Object data if 'filePath' is not set, 'true' if file write succeeded, 'false' - otherwise.



<a name="see.also.uiaobject.dodumpwidget"></a>

<a name="DoFindByText"></a>    
#### DoFindByText(textOrRegexp, depth)

Find nested element by its text (Value and Name of each element are compared with specified text or regular expression).


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| textOrRegexp | string |	plain string or regexp:... expression to match |
| depth | number |	depth level for search (default is 3)<br>Optional, Default: 3. |




**Returns:**

object: UIAutomationObject containing text if found, null otherwise



<a name="see.also.uiaobject.dofindbytext"></a>

<a name="DoGetWidgetProperty"></a>    
#### DoGetWidgetProperty(name)

Returns the value of a property with a given name. Names of available properties can be seen in Spy.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Property name. |




**Returns:**

string: Property value if successful, an empty string if the property can not be found.



<a name="see.also.uiaobject.dogetwidgetproperty"></a>

	

