# JavaObject

Standard Java (AWT, Swing) Object.
 
Extends SeSSimulatedObject.





**Behavior Pattern: JavaObjectGenericBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ControlType](#ControlType) | Type of the object. | GetControlType |  |
| [Height](#Height) | Height of the object. | GetHeight |  |
| [Width](#Width) | Width of the object. | GetWidth |  |
| [X](#X) | X-coordinate of the top left corner of the object. | GetX |  |
| [Y](#Y) | Y-coordinate of the top left corner of the object. | GetY |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoAction](#DoAction) | Clicks in the middle of the control. |
|	[DoDumpWidget](#DoDumpWidget) | Dumps Spy data for the object. |
|	[DoGetWidgetProperty](#DoGetWidgetProperty) | Returns the value of a property with a given name. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ControlType"></a>
#### ControlType


Type of the object.

			
	
			
Type: string
			
			
Accessors: GetControlType
			
		
<a name="Height"></a>
#### Height


Height of the object.

			
	
			
Type: number
			
			
Accessors: GetHeight
			
		
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



<a name="see.also.javaobject.doaction"></a>

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



<a name="see.also.javaobject.dodumpwidget"></a>

<a name="DoGetWidgetProperty"></a>    
#### DoGetWidgetProperty(name)

Returns the value of a property with a given name. Names of available properties can be seen in Spy.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Property name. |




**Returns:**

string: Property value if successful, an empty string if the property can not be found.



<a name="see.also.javaobject.dogetwidgetproperty"></a>

	

