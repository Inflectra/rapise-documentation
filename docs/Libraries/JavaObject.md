Summary: Standard Java (AWT, Swing) Object.

# JavaObject

Standard Java (AWT, Swing) Object.
 
UI element class: regex:.*

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: JavaObjectGenericBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ControlType](#controltype) | Type of the object. | GetControlType |  |
| [Height](#height) | Height of the object. | GetHeight |  |
| [Width](#width) | Width of the object. | GetWidth |  |
| [X](#x) | X-coordinate of the top left corner of the object. | GetX |  |
| [Y](#y) | Y-coordinate of the top left corner of the object. | GetY |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoAction](#doaction) | Clicks in the middle of the control. |
|	[DoDumpWidget](#dodumpwidget) | Dumps Spy data for the object. |
|	[DoFindByLabel](#dofindbylabel) | Find nested element by its label (getLabel() property of each element is compared with specified text or regular expression). |
|	[DoFindByName](#dofindbyname) | Find nested element by its name (getName() property of each element is compared with specified text or regular expression). |
|	[DoFindByText](#dofindbytext) | Find nested element by its text (getText() property of each element is compared with specified text or regular expression). |
|	[DoFindElementByCondition](#dofindelementbycondition) | Finds first element matching the condition. |
|	[DoFindElementsByCondition](#dofindelementsbycondition) | Finds all elements matching the condition |
|	[DoGetWidgetProperty](#dogetwidgetproperty) | Returns the value of a property with a given name. |




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
#### DoAction

Clicks in the middle of the control.

```javascript
DoAction() 
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.javaobject.doaction"></a>

<a name="DoDumpWidget"></a>    
#### DoDumpWidget

Dumps Spy data for the object.

```javascript
DoDumpWidget(dumpProperties, maxDepth, trimValue, indent, filePath, append, ignoreProps) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| dumpProperties | boolean |	If 'true' then includes properties to the result.<br>Optional, Default: "false". |
| maxDepth | number |	Determines max recursion depth. If '0' then dumps current object only, if '1' - dumps direct children as well, etc. If '-1' then dumps the whole subtree of objects.<br>Optional, Default: "0". |
| trimValue | number |	Determines maximum length of a property value. Excess characters are truncated.<br>Optional, Default: "256". |
| indent | string |	Indentation string for child objects and properties.<br>Optional, Default: "\". |
| filePath | string |	If 'filePath' is set then outputs result to corresponding file.<br>Optional, Default: "". |
| append | boolean |	If 'true' then file should be overwritten, if 'false' then data should be appended.<br>Optional, Default: "false". |
| ignoreProps | Array |	Contains the names of the properties which must be ignored when writing into a file.<br>Optional, Default: "undefined". |




**Returns:**

string | <br>boolean: Object data if 'filePath' is not set, 'true' if file write succeeded, 'false' - otherwise.



<a name="see.also.javaobject.dodumpwidget"></a>

<a name="DoFindByLabel"></a>    
#### DoFindByLabel

Find nested element by its label (getLabel() property of each element is compared with specified text or regular expression).

```javascript
DoFindByLabel(textOrRegexp, depth) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| textOrRegexp | string |	plain string or regexp:... expression to match |
| depth | number |	depth level for search (default is 3)<br>Optional, Default: "3". |




**Returns:**

[JavaObject](JavaObject.md): JavaObject containing text if found, null otherwise



<a name="see.also.javaobject.dofindbylabel"></a>

<a name="DoFindByName"></a>    
#### DoFindByName

Find nested element by its name (getName() property of each element is compared with specified text or regular expression).

```javascript
DoFindByName(textOrRegexp, depth) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| textOrRegexp | string |	plain string or regexp:... expression to match |
| depth | number |	depth level for search (default is 3)<br>Optional, Default: "3". |




**Returns:**

[JavaObject](JavaObject.md): JavaObject containing text if found, null otherwise



<a name="see.also.javaobject.dofindbyname"></a>

<a name="DoFindByText"></a>    
#### DoFindByText

Find nested element by its text (getText() property of each element is compared with specified text or regular expression).

```javascript
DoFindByText(textOrRegexp, depth) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| textOrRegexp | string |	plain string or regexp:... expression to match |
| depth | number |	depth level for search (default is 3)<br>Optional, Default: "3". |




**Returns:**

[JavaObject](JavaObject.md): JavaObject containing text if found, null otherwise



<a name="see.also.javaobject.dofindbytext"></a>

<a name="DoFindElementByCondition"></a>    
#### DoFindElementByCondition

Finds first element matching the condition.

```javascript
DoFindElementByCondition(condition) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| condition | expression |	Object in a form {propname1:propvalue1, propname2:propregexp2,...}. I.e.: {'text':'regex:Enter .*'} |




**Returns:**

[JavaObject](JavaObject.md): JavaObject if the element is found, null otherwise



<a name="see.also.javaobject.dofindelementbycondition"></a>

<a name="DoFindElementsByCondition"></a>    
#### DoFindElementsByCondition

Finds all elements matching the condition

```javascript
DoFindElementsByCondition(condition) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| condition | expression |	Object in a form {propname1:propvalue1, propname2:propregexp2,...}. I.e.: {'text':'regex:Enter .*'} |




**Returns:**

[Array](Array.md): Array of JavaObjects for the found elements, the array is empty if nothing is found.



<a name="see.also.javaobject.dofindelementsbycondition"></a>

<a name="DoGetWidgetProperty"></a>    
#### DoGetWidgetProperty

Returns the value of a property with a given name. Names of available properties can be seen in Spy.

```javascript
DoGetWidgetProperty(name) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |	Property name. |




**Returns:**

string: Property value if successful, an empty string if the property can not be found.



<a name="see.also.javaobject.dogetwidgetproperty"></a>

	

