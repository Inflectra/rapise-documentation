Summary: Android Object.

# AndroidObject

Android Object.





**Behavior Pattern: AndroidObjectGenericBehavior**


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
| [Name](#name) | Name of the object. | GetName |  |
| [NextSibling](#nextsibling) | `AndroidObject` for the next sibling element. | GetNextSibling |  |
| [ObjectType](#objecttype) | Type of the object. | GetObjectType |  |
| [Parent](#parent) | `AndroidObject` for the parent element. | GetParent |  |
| [PrevSibling](#prevsibling) | `AndroidObject` for the previous sibling element. | GetPrevSibling |  |
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



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="Bitmap"></a>
#### Bitmap

UI Image of the object.



Type: ImageWrapper


Accessors: GetBitmap

```javascript
value = SeS('SomeAndroidObject').GetBitmap()
```


<a name="BWBitmap"></a>
#### BWBitmap

UI Image of the object in 1-bit format (black&white).



Type: ImageWrapper


Accessors: GetBWBitmap

```javascript
value = SeS('SomeAndroidObject').GetBWBitmap()
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
value = SeS('SomeAndroidObject').GetChildAt(index)
```


<a name="ChildCount"></a>
#### ChildCount

Number of child items.



Type: number


Accessors: GetChildCount

```javascript
value = SeS('SomeAndroidObject').GetChildCount()
```


<a name="Class"></a>
#### Class

Class name of the object.



Type: string


Accessors: GetClass

```javascript
value = SeS('SomeAndroidObject').GetClass()
```


<a name="Height"></a>
#### Height

Height of the object.



Type: number


Accessors: GetHeight

```javascript
value = SeS('SomeAndroidObject').GetHeight()
```


<a name="Name"></a>
#### Name

Name of the object.



Type: string


Accessors: GetName

```javascript
value = SeS('SomeAndroidObject').GetName()
```


<a name="NextSibling"></a>
#### NextSibling

`AndroidObject` for the next sibling element. Requires Rapise 6.6+



Type: AndroidObject


Accessors: GetNextSibling

```javascript
value = SeS('SomeAndroidObject').GetNextSibling()
```


<a name="ObjectType"></a>
#### ObjectType

Type of the object.



Type: string


Accessors: GetObjectType

```javascript
value = SeS('SomeAndroidObject').GetObjectType()
```


<a name="Parent"></a>
#### Parent

`AndroidObject` for the parent element. Requires Rapise 6.6+



Type: AndroidObject


Accessors: GetParent

```javascript
value = SeS('SomeAndroidObject').GetParent()
```


<a name="PrevSibling"></a>
#### PrevSibling

`AndroidObject` for the previous sibling element. Requires Rapise 6.6+



Type: AndroidObject


Accessors: GetPrevSibling

```javascript
value = SeS('SomeAndroidObject').GetPrevSibling()
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
value = SeS('SomeAndroidObject').GetProperty(name)
```


<a name="Text"></a>
#### Text

Text of the object, 'false' if text can not be read.



Type: string


Accessors: GetText

```javascript
value = SeS('SomeAndroidObject').GetText()
```


<a name="Width"></a>
#### Width

Width of the object.



Type: number


Accessors: GetWidth

```javascript
value = SeS('SomeAndroidObject').GetWidth()
```


<a name="X"></a>
#### X

X-coordinate of the top left corner of the object.



Type: number


Accessors: GetX

```javascript
value = SeS('SomeAndroidObject').GetX()
```


<a name="Y"></a>
#### Y

Y-coordinate of the top left corner of the object.



Type: number


Accessors: GetY

```javascript
value = SeS('SomeAndroidObject').GetY()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoAction"></a>    
#### DoAction

Clicks in the middle of the control.

```javascript
SeS('SomeAndroidObject').DoAction()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.androidobject.doaction"></a>

<a name="DoClear"></a>    
#### DoClear

Clears the text of the object.

```javascript
SeS('SomeAndroidObject').DoClear()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.androidobject.doclear"></a>

<a name="DoClick"></a>    
#### DoClick

Clicks in the middle of the control if offset is not specified. Clicking with offset requires Rapise 8.0+.

```javascript
SeS('SomeAndroidObject').DoClick(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.androidobject.doclick"></a>

<a name="DoEnsureVisible"></a>    
#### DoEnsureVisible

Ensure that a child item with the specified text is visible on screen.

```javascript
SeS('SomeAndroidObject').DoEnsureVisible(text)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| text | string |  Text to search for. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.androidobject.doensurevisible"></a>

<a name="DoFindByXPath"></a>    
#### DoFindByXPath

Finds an element by relative XPath expression. Requires Rapise 6.6+

```javascript
SeS('SomeAndroidObject').DoFindByXPath(xpath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |  Relative XPath expression. |




**Returns:**

[AndroidObject](AndroidObject.md): `AndroidObject` if success, `null` otherwise.



<a name="see.also.androidobject.dofindbyxpath"></a>

<a name="DoLongPress"></a>    
#### DoLongPress

Performs long press in the middle of the control if offset is not specified. Requires Rapise 8.0+.

```javascript
SeS('SomeAndroidObject').DoLongPress(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.androidobject.dolongpress"></a>

<a name="DoPress"></a>    
#### DoPress

Presses in the middle of the control if offset is not specified. Requires Rapise 8.0+.

```javascript
SeS('SomeAndroidObject').DoPress(x, y, duration)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |
| duration | number |  Duration of press action.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.androidobject.dopress"></a>

<a name="DoSendKeys"></a>    
#### DoSendKeys

Send a text to the object in character-by-character mode.

```javascript
SeS('SomeAndroidObject').DoSendKeys(keys)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| keys | string |  Text to type into the object. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.androidobject.dosendkeys"></a>

  

