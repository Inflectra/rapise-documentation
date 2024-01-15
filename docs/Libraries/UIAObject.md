Summary: UIAutomation UIAObject.

# UIAObject

UIAutomation UIAObject.
 
Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: UIAObjectGenericBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [AutomationId](#automationid) | Automation ID of UI Automation object | GetAutomationId |  |
| [ChildAt](#childat) | Object for nth child of this object's UI Automation node | GetChildAt |  |
| [ChildrenCount](#childrencount) | Number of UI Automation nodes within current node | GetChildrenCount |  |
| [Height](#height) | Height of the object. | GetHeight |  |
| [IndexInParent](#indexinparent) | Object's order index in parent UI Automation node | GetIndexInParent |  |
| [Name](#name) | Name of of UI Automation object | GetName |  |
| [NextSibling](#nextsibling) | Object for UI Automation next sibling node | GetNextSibling |  |
| [Parent](#parent) | Object for UI Automation parent node | GetParent |  |
| [PrevSibling](#prevsibling) | Object for UI Automation previous sibling node | GetPrevSibling |  |
| [TypeName](#typename) | Type name of UI Automation object | GetTypeName |  |
| [Value](#value) | Value of the object. | GetValue |  |
| [Visible](#visible) | Returns `true` if the element is visible, otherwise - `false`. | GetVisible |  |
| [Width](#width) | Width of the object. | GetWidth |  |
| [X](#x) | X-coordinate of the top left corner of the object. | GetX |  |
| [Y](#y) | Y-coordinate of the top left corner of the object. | GetY |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClick](#doclick) | Performs left click at the center of an object. |
|  [DoDumpWidget](#dodumpwidget) | Dumps Spy data for the object. |
|  [DoFindByLocation](#dofindbylocation) | Finds nested element by its location string. |
|  [DoFindByText](#dofindbytext) | Find nested element by its text (Value and Name of each element are compared with specified text or regular expression). |
|  [DoFindElementByCondition](#dofindelementbycondition) | Finds first element matching the condition. |
|  [DoFindElementsByCondition](#dofindelementsbycondition) | Finds all elements matching the condition |
|  [DoGetWidgetProperty](#dogetwidgetproperty) | Returns the value of a property with a given name. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="AutomationId"></a>
#### AutomationId

Automation ID of UI Automation object



Type: string


Accessors: GetAutomationId

```javascript
value = SeS('SomeUIAObject').GetAutomationId()
```


<a name="ChildAt"></a>
#### ChildAt

Object for nth child of this object's UI Automation node

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| ind | number | Zero-based index for a required child |




Type: UIAObject


Accessors: GetChildAt

```javascript
value = SeS('SomeUIAObject').GetChildAt(ind)
```


<a name="ChildrenCount"></a>
#### ChildrenCount

Number of UI Automation nodes within current node



Type: number


Accessors: GetChildrenCount

```javascript
value = SeS('SomeUIAObject').GetChildrenCount()
```


<a name="Height"></a>
#### Height

Height of the object.



Type: number


Accessors: GetHeight

```javascript
value = SeS('SomeUIAObject').GetHeight()
```


<a name="IndexInParent"></a>
#### IndexInParent

Object's order index in parent UI Automation node



Type: number


Accessors: GetIndexInParent

```javascript
value = SeS('SomeUIAObject').GetIndexInParent()
```


<a name="Name"></a>
#### Name

Name of of UI Automation object



Type: string


Accessors: GetName

```javascript
value = SeS('SomeUIAObject').GetName()
```


<a name="NextSibling"></a>
#### NextSibling

Object for UI Automation next sibling node



Type: UIAObject


Accessors: GetNextSibling

```javascript
value = SeS('SomeUIAObject').GetNextSibling()
```


<a name="Parent"></a>
#### Parent

Object for UI Automation parent node



Type: UIAObject


Accessors: GetParent

```javascript
value = SeS('SomeUIAObject').GetParent()
```


<a name="PrevSibling"></a>
#### PrevSibling

Object for UI Automation previous sibling node



Type: UIAObject


Accessors: GetPrevSibling

```javascript
value = SeS('SomeUIAObject').GetPrevSibling()
```


<a name="TypeName"></a>
#### TypeName

Type name of UI Automation object



Type: String


Accessors: GetTypeName

```javascript
value = SeS('SomeUIAObject').GetTypeName()
```


<a name="Value"></a>
#### Value

Value of the object.



Type: number


Accessors: GetValue

```javascript
value = SeS('SomeUIAObject').GetValue()
```


<a name="Visible"></a>
#### Visible

Returns `true` if the element is visible, otherwise - `false`. Requires Rapise 6.6+



Type: boolean


Accessors: GetVisible

```javascript
value = SeS('SomeUIAObject').GetVisible()
```


<a name="Width"></a>
#### Width

Width of the object.



Type: number


Accessors: GetWidth

```javascript
value = SeS('SomeUIAObject').GetWidth()
```


<a name="X"></a>
#### X

X-coordinate of the top left corner of the object.



Type: number


Accessors: GetX

```javascript
value = SeS('SomeUIAObject').GetX()
```


<a name="Y"></a>
#### Y

Y-coordinate of the top left corner of the object.



Type: number


Accessors: GetY

```javascript
value = SeS('SomeUIAObject').GetY()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClick"></a>    
#### DoClick

Performs left click at the center of an object. It is a customizable variant of LClick action.

```javascript
SeS('SomeUIAObject').DoClick(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |





<a name="see.also.uiaobject.doclick"></a>

<a name="DoDumpWidget"></a>    
#### DoDumpWidget

Dumps Spy data for the object.

```javascript
SeS('SomeUIAObject').DoDumpWidget(dumpProperties, maxDepth, trimValue, indent, filePath, append, ignoreProps)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| dumpProperties | boolean |  If 'true' then includes properties to the result.<br>Optional, Default: "false". |
| maxDepth | number |  Determines max recursion depth. If '0' then dumps current object only, if '1' - dumps direct children as well, etc. If '-1' then dumps the whole subtree of objects.<br>Optional, Default: "0". |
| trimValue | number |  Determines maximum length of a property value. Excess characters are truncated.<br>Optional, Default: "256". |
| indent | string |  Indentation string for child objects and properties.<br>Optional, Default: "\". |
| filePath | string |  If 'filePath' is set then outputs result to corresponding file.<br>Optional, Default: "". |
| append | boolean |  If 'true' then file should be overwritten, if 'false' then data should be appended.<br>Optional, Default: "false". |
| ignoreProps | Array |  Contains the names of the properties which must be ignored when writing into a file.<br>Optional, Default: "undefined". |




**Returns:**

string | <br>boolean: Object data if 'filePath' is not set, 'true' if file write succeeded, 'false' - otherwise.



<a name="see.also.uiaobject.dodumpwidget"></a>

<a name="DoFindByLocation"></a>    
#### DoFindByLocation

Finds nested element by its location string. Supports /Id, .. (up) and *(any), i.e. ../*[3]/Button[1] - go to parent, then 4th child, then find 2nd button. Requires Rapise 8.1+.

```javascript
SeS('SomeUIAObject').DoFindByLocation(strLocation)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| strLocation | string |  Relative location of element. |




**Returns:**

[UIAObject](UIAObject.md): UIAObject if found, null otherwise



<a name="see.also.uiaobject.dofindbylocation"></a>

<a name="DoFindByText"></a>    
#### DoFindByText

Find nested element by its text (Value and Name of each element are compared with specified text or regular expression).

```javascript
SeS('SomeUIAObject').DoFindByText(textOrRegexp, depth)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| textOrRegexp | string |  plain string or regexp:... expression to match |
| depth | number |  depth level for search (default is 3)<br>Optional, Default: "3". |




**Returns:**

[UIAObject](UIAObject.md): UIAObject containing text if found, null otherwise



<a name="see.also.uiaobject.dofindbytext"></a>

<a name="DoFindElementByCondition"></a>    
#### DoFindElementByCondition

Finds first element matching the condition. Requires Rapise 6.6+

```javascript
SeS('SomeUIAObject').DoFindElementByCondition(scope, condition)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| scope | string |  Scope for element search. Possible values: "Element", "Children", "Descendants", "Subtree", "Parent", "Ancestors" |
| condition | expression |  UIAutomation2 locator or condition object. |




**Returns:**

[UIAObject](UIAObject.md): UIAObject if the element is found, null otherwise



<a name="see.also.uiaobject.dofindelementbycondition"></a>

<a name="DoFindElementsByCondition"></a>    
#### DoFindElementsByCondition

Finds all elements matching the condition

```javascript
SeS('SomeUIAObject').DoFindElementsByCondition(scope, condition)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| scope | string |  Scope for element search. Possible values: "Element", "Children", "Descendants", "Subtree", "Parent", "Ancestors" |
| condition | expression |  UIAutomation2 locator or condition object. |




**Returns:**

[Array](Array.md): Array of UIAObjects for the found elements, the array is empty if nothing is found. Requires Rapise 6.6+



<a name="see.also.uiaobject.dofindelementsbycondition"></a>

<a name="DoGetWidgetProperty"></a>    
#### DoGetWidgetProperty

Returns the value of a property with a given name. Names of available properties can be seen in Spy.

```javascript
SeS('SomeUIAObject').DoGetWidgetProperty(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Property name. |




**Returns:**

string: Property value if successful, an empty string if the property can not be found.



<a name="see.also.uiaobject.dogetwidgetproperty"></a>

  

