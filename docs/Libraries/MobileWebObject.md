Summary: Web Mobile Object.

# MobileWebObject

Web Mobile Object.





**Behavior Pattern: MobileWebObjectGenericBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ChildAt](#childat) | Child object at index. | GetChildAt |  |
| [ChildCount](#childcount) | Number of child items. | GetChildCount |  |
| [Class](#class) | Class name of the object. | GetClass |  |
| [Height](#height) | Height of the object. | GetHeight |  |
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
|  [DoAction](#doaction) | Clicks in the middle of the control. |
|  [DoClear](#doclear) | Clears the text of the object. |
|  [DoClick](#doclick) | Clicks in the middle of the control. |
|  [DoDoubleClick](#dodoubleclick) | Double clicks in the middle of the control. |
|  [DoEnsureVisible](#doensurevisible) | Ensure that a child item with the specified text is visible on screen. |
|  [DoSendKeys](#dosendkeys) | Send a text to the object in character-by-character mode. |



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

```javascript
value = SeS('SomeMobileWebObject').GetChildAt(index)
```


<a name="ChildCount"></a>
#### ChildCount

Number of child items.



Type: number


Accessors: GetChildCount

```javascript
value = SeS('SomeMobileWebObject').GetChildCount()
```


<a name="Class"></a>
#### Class

Class name of the object.



Type: string


Accessors: GetClass

```javascript
value = SeS('SomeMobileWebObject').GetClass()
```


<a name="Height"></a>
#### Height

Height of the object.



Type: number


Accessors: GetHeight

```javascript
value = SeS('SomeMobileWebObject').GetHeight()
```


<a name="Name"></a>
#### Name

Name of the object.



Type: string


Accessors: GetName

```javascript
value = SeS('SomeMobileWebObject').GetName()
```


<a name="ObjectType"></a>
#### ObjectType

Type of the object.



Type: string


Accessors: GetObjectType

```javascript
value = SeS('SomeMobileWebObject').GetObjectType()
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
value = SeS('SomeMobileWebObject').GetProperty(name)
```


<a name="Text"></a>
#### Text

Text of the object, 'false' if text can not be read.



Type: string


Accessors: GetText

```javascript
value = SeS('SomeMobileWebObject').GetText()
```


<a name="Width"></a>
#### Width

Width of the object.



Type: number


Accessors: GetWidth

```javascript
value = SeS('SomeMobileWebObject').GetWidth()
```


<a name="X"></a>
#### X

X-coordinate of the top left corner of the object.



Type: number


Accessors: GetX

```javascript
value = SeS('SomeMobileWebObject').GetX()
```


<a name="Y"></a>
#### Y

Y-coordinate of the top left corner of the object.



Type: number


Accessors: GetY

```javascript
value = SeS('SomeMobileWebObject').GetY()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoAction"></a>    
#### DoAction

Clicks in the middle of the control.

```javascript
SeS('SomeMobileWebObject').DoAction()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.mobilewebobject.doaction"></a>

<a name="DoClear"></a>    
#### DoClear

Clears the text of the object.

```javascript
SeS('SomeMobileWebObject').DoClear()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.mobilewebobject.doclear"></a>

<a name="DoClick"></a>    
#### DoClick

Clicks in the middle of the control.

```javascript
SeS('SomeMobileWebObject').DoClick()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.mobilewebobject.doclick"></a>

<a name="DoDoubleClick"></a>    
#### DoDoubleClick

Double clicks in the middle of the control.

```javascript
SeS('SomeMobileWebObject').DoDoubleClick()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.mobilewebobject.dodoubleclick"></a>

<a name="DoEnsureVisible"></a>    
#### DoEnsureVisible

Ensure that a child item with the specified text is visible on screen.

```javascript
SeS('SomeMobileWebObject').DoEnsureVisible()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.mobilewebobject.doensurevisible"></a>

<a name="DoSendKeys"></a>    
#### DoSendKeys

Send a text to the object in character-by-character mode.

```javascript
SeS('SomeMobileWebObject').DoSendKeys(keys)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| keys | string |  Text to type into the object. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.mobilewebobject.dosendkeys"></a>

  

