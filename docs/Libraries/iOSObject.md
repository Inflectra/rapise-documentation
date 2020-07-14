Summary: iOS Object.

# iOSObject

iOS Object.





**Behavior Pattern: iOSObjectGenericBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ChildAt](#childat) | Child object at index. | GetChildAt |  |
| [ChildCount](#childcount) | Number of child items. | GetChildCount |  |
| [Class](#class) | Class name of the object. | GetClass |  |
| [Height](#height) | Height of the object. | GetHeight |  |
| [Label](#label) | Label of the iOS object | GetLabel |  |
| [Name](#name) | Name of the object. | GetName |  |
| [ObjectType](#objecttype) | Type of the object. | GetObjectType |  |
| [Property](#property) | Value of a named property of the object. | GetProperty |  |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText |  |
| [Width](#width) | Width of the object. | GetWidth |  |
| [X](#x) | X-coordinate of the top left corner of the object. | GetX |  |
| [Y](#y) | Y-coordinate of the top left corner of the object. | GetY |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoAction](#doaction) | Clicks in the middle of the control. |
|	[DoClear](#doclear) | Clears the text of the object. |
|	[DoClick](#doclick) | Clicks in the middle of the control. |
|	[DoEnsureVisible](#doensurevisible) | Ensure that a child item with the specified text is visible on screen. |
|	[DoSendKeys](#dosendkeys) | Send a text to the object in character-by-character mode. |
|	[DoTap](#dotap) | Taps the control. |
|	[DoTwoFingerTap](#dotwofingertap) | Taps the control with two fingers. |




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
			
		
<a name="Label"></a>
#### Label


Label of the iOS object

			
	
			
Type: string
			
			
Accessors: GetLabel
			
		
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
#### DoAction

Clicks in the middle of the control.

```javascript
DoAction() 
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.doaction"></a>

<a name="DoClear"></a>    
#### DoClear

Clears the text of the object.

```javascript
DoClear() 
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.doclear"></a>

<a name="DoClick"></a>    
#### DoClick

Clicks in the middle of the control.

```javascript
DoClick() 
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.doclick"></a>

<a name="DoEnsureVisible"></a>    
#### DoEnsureVisible

Ensure that a child item with the specified text is visible on screen.

```javascript
DoEnsureVisible() 
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.doensurevisible"></a>

<a name="DoSendKeys"></a>    
#### DoSendKeys

Send a text to the object in character-by-character mode.

```javascript
DoSendKeys(keys) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| keys | string |	Text to type into the object. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.dosendkeys"></a>

<a name="DoTap"></a>    
#### DoTap

Taps the control.

```javascript
DoTap() 
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.dotap"></a>

<a name="DoTwoFingerTap"></a>    
#### DoTwoFingerTap

Taps the control with two fingers.

```javascript
DoTwoFingerTap() 
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.dotwofingertap"></a>

	

