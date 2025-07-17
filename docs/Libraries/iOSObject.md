Summary: iOS Object.

# iOSObject

iOS Object.





**Behavior Pattern: iOSObjectGenericBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Bitmap](#bitmap) | UI Image of the object. | GetBitmap |  |
| [BWBitmap](#bwbitmap) | UI Image of the object in 1-bit format (black&white). | GetBWBitmap |  |
| [ChildAt](#childat) | Child object at index. | GetChildAt |  |
| [ChildCount](#childcount) | Number of child items. | GetChildCount |  |
| [Class](#class) | Class name of the object. | GetClass |  |
| [Height](#height) | Height of the object. | GetHeight |  |
| [Label](#label) | Label of the iOS object | GetLabel |  |
| [Name](#name) | Name of the object. | GetName |  |
| [NextSibling](#nextsibling) | `iOSObject` for the next sibling element. | GetNextSibling |  |
| [ObjectType](#objecttype) | Type of the object. | GetObjectType |  |
| [Parent](#parent) | `iOSObject` for the parent element. | GetParent |  |
| [PrevSibling](#prevsibling) | `iOSObject` for the previous sibling element. | GetPrevSibling |  |
| [Property](#property) | Value of a named property of the object. | GetProperty |  |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText |  |
| [Width](#width) | Width of the object. | GetWidth |  |
| [X](#x) | X-coordinate of the top left corner of the object. | GetX |  |
| [Y](#y) | Y-coordinate of the top left corner of the object. | GetY |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoAction](#doaction) | Clicks in the middle of the control. |
|  [DoClear](#doclear) | Clears the text of the object. |
|  [DoClick](#doclick) | Clicks in the middle of the control if offset is not specified. |
|  [DoEnsureVisible](#doensurevisible) | Ensure that a child item with the specified text is visible on screen. |
|  [DoFindByXPath](#dofindbyxpath) | Finds an element by relative XPath expression. |
|  [DoLongPress](#dolongpress) | Performs long press in the middle of the control if offset is not specified. |
|  [DoPress](#dopress) | Presses in the middle of the control if offset is not specified. |
|  [DoSendKeys](#dosendkeys) | Send a text to the object in character-by-character mode. |
|  [DoTap](#dotap) | Taps the control. |
|  [DoTwoFingerTap](#dotwofingertap) | Taps the control with two fingers. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="Bitmap"></a>
#### Bitmap

UI Image of the object.



Type: ImageWrapper


Accessors: GetBitmap

```javascript
value = SeS('SomeiOSObject').GetBitmap()
```


<a name="BWBitmap"></a>
#### BWBitmap

UI Image of the object in 1-bit format (black&white).



Type: ImageWrapper


Accessors: GetBWBitmap

```javascript
value = SeS('SomeiOSObject').GetBWBitmap()
```


<a name="ChildAt"></a>
#### ChildAt

Child object at index.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| index | number | Index of the object to get. |




Type: string


Accessors: GetChildAt

```javascript
value = SeS('SomeiOSObject').GetChildAt(index)
```


<a name="ChildCount"></a>
#### ChildCount

Number of child items.



Type: number


Accessors: GetChildCount

```javascript
value = SeS('SomeiOSObject').GetChildCount()
```


<a name="Class"></a>
#### Class

Class name of the object.



Type: string


Accessors: GetClass

```javascript
value = SeS('SomeiOSObject').GetClass()
```


<a name="Height"></a>
#### Height

Height of the object.



Type: number


Accessors: GetHeight

```javascript
value = SeS('SomeiOSObject').GetHeight()
```


<a name="Label"></a>
#### Label

Label of the iOS object



Type: string


Accessors: GetLabel

```javascript
value = SeS('SomeiOSObject').GetLabel()
```


<a name="Name"></a>
#### Name

Name of the object.



Type: string


Accessors: GetName

```javascript
value = SeS('SomeiOSObject').GetName()
```


<a name="NextSibling"></a>
#### NextSibling

`iOSObject` for the next sibling element. Requires Rapise 6.6+



Type: iOSObject


Accessors: GetNextSibling

```javascript
value = SeS('SomeiOSObject').GetNextSibling()
```


<a name="ObjectType"></a>
#### ObjectType

Type of the object.



Type: string


Accessors: GetObjectType

```javascript
value = SeS('SomeiOSObject').GetObjectType()
```


<a name="Parent"></a>
#### Parent

`iOSObject` for the parent element. Requires Rapise 6.6+



Type: iOSObject


Accessors: GetParent

```javascript
value = SeS('SomeiOSObject').GetParent()
```


<a name="PrevSibling"></a>
#### PrevSibling

`iOSObject` for the previous sibling element. Requires Rapise 6.6+



Type: iOSObject


Accessors: GetPrevSibling

```javascript
value = SeS('SomeiOSObject').GetPrevSibling()
```


<a name="Property"></a>
#### Property

Value of a named property of the object.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| name | string | Property name. |




Type: string


Accessors: GetProperty

```javascript
value = SeS('SomeiOSObject').GetProperty(name)
```


<a name="Text"></a>
#### Text

Text of the object, 'false' if text can not be read.



Type: string


Accessors: GetText

```javascript
value = SeS('SomeiOSObject').GetText()
```


<a name="Width"></a>
#### Width

Width of the object.



Type: number


Accessors: GetWidth

```javascript
value = SeS('SomeiOSObject').GetWidth()
```


<a name="X"></a>
#### X

X-coordinate of the top left corner of the object.



Type: number


Accessors: GetX

```javascript
value = SeS('SomeiOSObject').GetX()
```


<a name="Y"></a>
#### Y

Y-coordinate of the top left corner of the object.



Type: number


Accessors: GetY

```javascript
value = SeS('SomeiOSObject').GetY()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoAction"></a>    
#### DoAction

Clicks in the middle of the control.

```javascript
SeS('SomeiOSObject').DoAction()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.doaction"></a>

<a name="DoClear"></a>    
#### DoClear

Clears the text of the object.

```javascript
SeS('SomeiOSObject').DoClear()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.doclear"></a>

<a name="DoClick"></a>    
#### DoClick

Clicks in the middle of the control if offset is not specified. Clicking with offset requires Rapise 8.0+.

```javascript
SeS('SomeiOSObject').DoClick(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.doclick"></a>

<a name="DoEnsureVisible"></a>    
#### DoEnsureVisible

Ensure that a child item with the specified text is visible on screen.

```javascript
SeS('SomeiOSObject').DoEnsureVisible()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.doensurevisible"></a>

<a name="DoFindByXPath"></a>    
#### DoFindByXPath

Finds an element by relative XPath expression. Requires Rapise 6.6+

```javascript
SeS('SomeiOSObject').DoFindByXPath(xpath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |  Relative XPath expression. |




**Returns:**

[iOSObject](iOSObject.md): `iOSObject` if success, `null` otherwise.



<a name="see.also.iosobject.dofindbyxpath"></a>

<a name="DoLongPress"></a>    
#### DoLongPress

Performs long press in the middle of the control if offset is not specified. Requires Rapise 8.0+.

```javascript
SeS('SomeiOSObject').DoLongPress(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.dolongpress"></a>

<a name="DoPress"></a>    
#### DoPress

Presses in the middle of the control if offset is not specified. Requires Rapise 8.0+.

```javascript
SeS('SomeiOSObject').DoPress(x, y, duration)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |
| duration | number |  Duration of press action.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.dopress"></a>

<a name="DoSendKeys"></a>    
#### DoSendKeys

Send a text to the object in character-by-character mode.

```javascript
SeS('SomeiOSObject').DoSendKeys(keys)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| keys | string |  Text to type into the object. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.dosendkeys"></a>

<a name="DoTap"></a>    
#### DoTap

Taps the control.

```javascript
SeS('SomeiOSObject').DoTap()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.dotap"></a>

<a name="DoTwoFingerTap"></a>    
#### DoTwoFingerTap

Taps the control with two fingers.

```javascript
SeS('SomeiOSObject').DoTwoFingerTap()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosobject.dotwofingertap"></a>

  

