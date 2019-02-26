# MobileWebObject

Web Mobile Object.
 
Extends SeSSimulatedObject.





**Behavior Pattern: MobileWebObjectGenericBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ChildAt](#ChildAt) | Child object at index. | GetChildAt |  |
| [ChildCount](#ChildCount) | Number of child items. | GetChildCount |  |
| [Class](#Class) | Class name of the object. | GetClass |  |
| [Height](#Height) | Height of the object. | GetHeight |  |
| [Name](#Name) | Name of the object. | GetName |  |
| [ObjectType](#ObjectType) | Type of the object. | GetObjectType |  |
| [Property](#Property) | Value of a named property of the object. | GetProperty |  |
| [Text](#Text) | Text of the object, 'false' if text can not be read. | GetText |  |
| [Width](#Width) | Width of the object. | GetWidth |  |
| [X](#X) | X-coordinate of the top left corner of the object. | GetX |  |
| [Y](#Y) | Y-coordinate of the top left corner of the object. | GetY |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoAction](#DoAction) | Clicks in the middle of the control. |
|	[DoClear](#DoClear) | Clears the text of the object. |
|	[DoClick](#DoClick) | Clicks in the middle of the control. |
|	[DoDoubleClick](#DoDoubleClick) | Double clicks in the middle of the control. |
|	[DoEnsureVisible](#DoEnsureVisible) | Ensure that a child item with the specified text is visible on screen. |
|	[DoSendKeys](#DoSendKeys) | Send a text to the object in character-by-character mode. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ChildAt"></a>
#### ChildAt


Child object at index.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| index | number | Index of the object to get. |


	
			
Type: string
			
			
Accessors: GetChildAt
			
		
<a name="ChildCount"></a>
#### ChildCount


Number of child items.

			
	
			
Type: number
			
			
Accessors: GetChildCount
			
		
<a name="Class"></a>
#### Class


Class name of the object.

			
	
			
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


Type of the object.

			
	
			
Type: string
			
			
Accessors: GetObjectType
			
		
<a name="Property"></a>
#### Property


Value of a named property of the object.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| name | string | Property name. |


	
			
Type: string
			
			
Accessors: GetProperty
			
		
<a name="Text"></a>
#### Text


Text of the object, 'false' if text can not be read.

			
	
			
Type: string
			
			
Accessors: GetText
			
		
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




<a name="DoClear"></a>    
#### DoClear()

Clears the text of the object.




**Returns:**

boolean: 'true' if success, 'false' otherwise.




<a name="DoClick"></a>    
#### DoClick()

Clicks in the middle of the control.




**Returns:**

boolean: 'true' if success, 'false' otherwise.




<a name="DoDoubleClick"></a>    
#### DoDoubleClick()

Double clicks in the middle of the control.




**Returns:**

boolean: 'true' if success, 'false' otherwise.




<a name="DoEnsureVisible"></a>    
#### DoEnsureVisible()

Ensure that a child item with the specified text is visible on screen.




**Returns:**

boolean: 'true' if success, 'false' otherwise.




<a name="DoSendKeys"></a>    
#### DoSendKeys(keys)

Send a text to the object in character-by-character mode.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| keys | string |	Text to type into the object. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.




	

