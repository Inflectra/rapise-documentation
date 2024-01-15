Summary: Infragistics UltraPopupMenu.

# UltraPopupMenu

Infragistics UltraPopupMenu.
UltraPopupMenu
UI element class: Infragistics.Win.UltraWinToolbars.PopupMenuControlTrusted

Extends [ManagedObject](ManagedObject.md)





**Behavior Pattern: UltraPopupMenuControlBehavior**


<!-- ============================== property summary ========================== -->




<!-- ============================== action summary ========================== -->

<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->
  




**Behavior Pattern: ManagedObjectGenericBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ControlType](#controltype) | Type of the object. | GetControlType |  |
| [Enabled](#enabled) | 'Enabled' state of the element. | GetEnabled |  |
| [Height](#height) | Height of the object. | GetHeight |  |
| [Visible](#visible) | Returns `true` if the element is visible on screen. | GetVisible |  |
| [Width](#width) | Width of the object. | GetWidth |  |
| [X](#x) | X-coordinate of the top left corner of the object. | GetX |  |
| [Y](#y) | Y-coordinate of the top left corner of the object. | GetY |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoDumpWidget](#dodumpwidget) | Dumps Spy data for the object. |
|  [DoFindByName](#dofindbyname) | Find nested element by its text (Value, Name of each element are compared with specified text or regular expression). |
|  [DoFindByText](#dofindbytext) | Find nested element by its text (Value, Name of each element are compared with specified text or regular expression). |
|  [DoGetWidgetProperty](#dogetwidgetproperty) | Returns the value of a property with a given name. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="ControlType"></a>
#### ControlType

Type of the object.



Type: string


Accessors: GetControlType

```javascript
value = SeS('SomeUltraPopupMenu').GetControlType()
```


<a name="Enabled"></a>
#### Enabled

'Enabled' state of the element.



Type: boolean


Accessors: GetEnabled

```javascript
value = SeS('SomeUltraPopupMenu').GetEnabled()
```


<a name="Height"></a>
#### Height

Height of the object.



Type: number


Accessors: GetHeight

```javascript
value = SeS('SomeUltraPopupMenu').GetHeight()
```


<a name="Visible"></a>
#### Visible

Returns `true` if the element is visible on screen. Requires Rapise 8.0+.



Type: boolean


Accessors: GetVisible

```javascript
value = SeS('SomeUltraPopupMenu').GetVisible()
```


<a name="Width"></a>
#### Width

Width of the object.



Type: number


Accessors: GetWidth

```javascript
value = SeS('SomeUltraPopupMenu').GetWidth()
```


<a name="X"></a>
#### X

X-coordinate of the top left corner of the object.



Type: number


Accessors: GetX

```javascript
value = SeS('SomeUltraPopupMenu').GetX()
```


<a name="Y"></a>
#### Y

Y-coordinate of the top left corner of the object.



Type: number


Accessors: GetY

```javascript
value = SeS('SomeUltraPopupMenu').GetY()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoDumpWidget"></a>    
#### DoDumpWidget

Dumps Spy data for the object.

```javascript
SeS('SomeUltraPopupMenu').DoDumpWidget(dumpProperties, maxDepth, trimValue, indent, filePath, append, ignoreProps)
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



<a name="see.also.ultrapopupmenu.dodumpwidget"></a>

<a name="DoFindByName"></a>    
#### DoFindByName

Find nested element by its text (Value, Name of each element are compared with specified text or regular expression).

```javascript
SeS('SomeUltraPopupMenu').DoFindByName(textOrRegexp, depth)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| textOrRegexp | string |  plain string or regexp:... expression to match |
| depth | number |  depth level for search (default is 3)<br>Optional, Default: "3". |




**Returns:**

object: Object containing text if found, null otherwise



<a name="see.also.ultrapopupmenu.dofindbyname"></a>

<a name="DoFindByText"></a>    
#### DoFindByText

Find nested element by its text (Value, Name of each element are compared with specified text or regular expression).

```javascript
SeS('SomeUltraPopupMenu').DoFindByText(textOrRegexp, depth)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| textOrRegexp | string |  plain string or regexp:... expression to match |
| depth | number |  depth level for search (default is 3)<br>Optional, Default: "3". |




**Returns:**

object: Object containing text if found, null otherwise



<a name="see.also.ultrapopupmenu.dofindbytext"></a>

<a name="DoGetWidgetProperty"></a>    
#### DoGetWidgetProperty

Returns the value of a property with a given name. Names of available properties can be seen in Spy.

```javascript
SeS('SomeUltraPopupMenu').DoGetWidgetProperty(name)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Property name. |




**Returns:**

string: Property value if successful, an empty string if the property can not be found.



<a name="see.also.ultrapopupmenu.dogetwidgetproperty"></a>

  

