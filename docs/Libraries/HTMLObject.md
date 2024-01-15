Summary: This object contains actions and properties for DOM elements of Web page.

# HTMLObject

This object contains actions and properties for DOM elements of Web page.
 
Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: HTMLFirefoxBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Alt](#alt) | Alt of the element. | GetAlt |  |
| [Checked](#checked) | 'Checked' state of the element. | GetChecked |  |
| [Class](#class) | Class of the element. | GetClass |  |
| [ClientX](#clientx) | X-coordinate of the top left corner of the element relative to browser window. | GetClientX |  |
| [ClientY](#clienty) | Y-coordinate of the top left corner of the element relative to browser window. | GetClientY |  |
| [Enabled](#enabled) | 'Enabled' state of the element. | GetEnabled | SetEnabled |
| [Height](#height) | Height of the element. | GetHeight |  |
| [Href](#href) | HREF of the element. | GetHref |  |
| [Id](#id) | ID of the element. | GetId |  |
| [InnerText](#innertext) | Inner text of the element. | GetInnerText |  |
| [Label](#label) | Label of the element. | GetLabel |  |
| [Name](#name) | Name of the element. | GetName |  |
| [NodeText](#nodetext) | Text of the element without children. | GetNodeText |  |
| [PageTitle](#pagetitle) | Title of the HTML document. | GetPageTitle |  |
| [PageURL](#pageurl) | Location URL of the HTML document. | GetPageURL |  |
| [Style](#style) | Style of the element. | GetStyle |  |
| [Tag](#tag) | Tag of the element. | GetTag |  |
| [Text](#text) | Text of the element with normalized spaces. | GetText |  |
| [Title](#title) | Title of the element. | GetTitle |  |
| [Value](#value) | Value of the element. | GetValue |  |
| [Visible](#visible) | Returns `true` if the element is visible on screen. | GetVisible |  |
| [X](#x) | X-coordinate of the top left corner of the element. | GetX |  |
| [XPath](#xpath) | XPath of the element. | GetXPath |  |
| [Y](#y) | Y-coordinate of the top left corner of the element. | GetY |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoAddSelection](#doaddselection) | Adds selection of specified option in multi-select element. |
|  [DoClick](#doclick) | Clicks on HTML element (button, link). |
|  [DoDblClick](#dodblclick) | Double-Clicks on HTML element (button, link). |
|  [DoDOMChildAt](#dodomchildat) | Returns n-th child (zero-based). |
|  [DoDOMChildrenCount](#dodomchildrencount) | Returns number of children elements for this one. |
|  [DoDOMConvert](#dodomconvert) | Creates a clone of this object converted to a requested type. |
|  [DoDOMFindParentWithAttribute](#dodomfindparentwithattribute) | Returns parent element (if any) with given attribute matching given string or 'regex:. |
|  [DoDOMGetAttribute](#dodomgetattribute) | Returns specified attribute. |
|  [DoDOMGetAttributes](#dodomgetattributes) | Returns all attributes of a node. |
|  [DoDOMNextSibling](#dodomnextsibling) | Returns next sibling element for this one. |
|  [DoDOMParent](#dodomparent) | Returns parent element having this element. |
|  [DoDOMPrevSibling](#dodomprevsibling) | Return previous sibling element for this one. |
|  [DoDOMQueryCss](#dodomquerycss) | Gets array of elements matching CSS selector on this object. |
|  [DoDOMQueryValue](#dodomqueryvalue) | Executes an xpath query that may return a value of string, number or boolean type. |
|  [DoDOMQueryXPath](#dodomqueryxpath) | Gets array of elements matching XPath query on this object. |
|  [DoDOMRoot](#dodomroot) | Returns Root element having this element. |
|  [DoEnsureVisible](#doensurevisible) | Makes sure specified element is visible on the screen. |
|  [DoGetRect](#dogetrect) | Finds screen rectangle for this object. |
|  [DoGetSelection](#dogetselection) | Gets selected options text of a SELECT element. |
|  [DoMouseMove](#domousemove) | Moves mouse on HTML element with offset. |
|  [DoSelect](#doselect) | Selects specified element in &lt;select&gt; control. |
|  [DoSetCheck](#dosetcheck) | Sets specified state of check box. |
|  [DoSetText](#dosettext) | Sets text for input edit or textarea. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="Alt"></a>
#### Alt

Alt of the element.



Type: string


Accessors: GetAlt

```javascript
value = SeS('SomeHTMLObject').GetAlt()
```


<a name="Checked"></a>
#### Checked

'Checked' state of the element.



Type: boolean


Accessors: GetChecked

```javascript
value = SeS('SomeHTMLObject').GetChecked()
```


<a name="Class"></a>
#### Class

Class of the element.



Type: string


Accessors: GetClass

```javascript
value = SeS('SomeHTMLObject').GetClass()
```


<a name="ClientX"></a>
#### ClientX

X-coordinate of the top left corner of the element relative to browser window.



Type: number


Accessors: GetClientX

```javascript
value = SeS('SomeHTMLObject').GetClientX()
```


<a name="ClientY"></a>
#### ClientY

Y-coordinate of the top left corner of the element relative to browser window.



Type: number


Accessors: GetClientY

```javascript
value = SeS('SomeHTMLObject').GetClientY()
```


<a name="Enabled"></a>
#### Enabled

'Enabled' state of the element.



Type: boolean


Accessors: GetEnabled, SetEnabled

```javascript
value = SeS('SomeHTMLObject').GetEnabled()

SeS('SomeHTMLObject').SetEnabled(value)
```


<a name="Height"></a>
#### Height

Height of the element.



Type: number


Accessors: GetHeight

```javascript
value = SeS('SomeHTMLObject').GetHeight()
```


<a name="Href"></a>
#### Href

HREF of the element.



Type: string


Accessors: GetHref

```javascript
value = SeS('SomeHTMLObject').GetHref()
```


<a name="Id"></a>
#### Id

ID of the element.



Type: string


Accessors: GetId

```javascript
value = SeS('SomeHTMLObject').GetId()
```


<a name="InnerText"></a>
#### InnerText

Inner text of the element.



Type: string


Accessors: GetInnerText

```javascript
value = SeS('SomeHTMLObject').GetInnerText()
```


<a name="Label"></a>
#### Label

Label of the element.



Type: string


Accessors: GetLabel

```javascript
value = SeS('SomeHTMLObject').GetLabel()
```


<a name="Name"></a>
#### Name

Name of the element.



Type: string


Accessors: GetName

```javascript
value = SeS('SomeHTMLObject').GetName()
```


<a name="NodeText"></a>
#### NodeText

Text of the element without children.



Type: string


Accessors: GetNodeText

```javascript
value = SeS('SomeHTMLObject').GetNodeText()
```


<a name="PageTitle"></a>
#### PageTitle

Title of the HTML document.



Type: string


Accessors: GetPageTitle

```javascript
value = SeS('SomeHTMLObject').GetPageTitle()
```


<a name="PageURL"></a>
#### PageURL

Location URL of the HTML document.



Type: string


Accessors: GetPageURL

```javascript
value = SeS('SomeHTMLObject').GetPageURL()
```


<a name="Style"></a>
#### Style

Style of the element.



Type: string


Accessors: GetStyle

```javascript
value = SeS('SomeHTMLObject').GetStyle()
```


<a name="Tag"></a>
#### Tag

Tag of the element.



Type: string


Accessors: GetTag

```javascript
value = SeS('SomeHTMLObject').GetTag()
```


<a name="Text"></a>
#### Text

Text of the element with normalized spaces.



Type: string


Accessors: GetText

```javascript
value = SeS('SomeHTMLObject').GetText()
```


<a name="Title"></a>
#### Title

Title of the element.



Type: string


Accessors: GetTitle

```javascript
value = SeS('SomeHTMLObject').GetTitle()
```


<a name="Value"></a>
#### Value

Value of the element.



Type: string


Accessors: GetValue

```javascript
value = SeS('SomeHTMLObject').GetValue()
```


<a name="Visible"></a>
#### Visible

Returns `true` if the element is visible on screen. Requires Rapise 6.6+



Type: boolean


Accessors: GetVisible

```javascript
value = SeS('SomeHTMLObject').GetVisible()
```


<a name="X"></a>
#### X

X-coordinate of the top left corner of the element.



Type: number


Accessors: GetX

```javascript
value = SeS('SomeHTMLObject').GetX()
```


<a name="XPath"></a>
#### XPath

XPath of the element.



Type: string


Accessors: GetXPath

```javascript
value = SeS('SomeHTMLObject').GetXPath()
```


<a name="Y"></a>
#### Y

Y-coordinate of the top left corner of the element.



Type: number


Accessors: GetY

```javascript
value = SeS('SomeHTMLObject').GetY()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoAddSelection"></a>    
#### DoAddSelection

Adds selection of specified option in multi-select element.

```javascript
SeS('SomeHTMLObject').DoAddSelection(optionText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| optionText | string |  Element to select |




**Returns:**

boolean: 'true' if successful, 'false' otherwise'



<a name="see.also.htmlobject.doaddselection"></a>

<a name="DoClick"></a>    
#### DoClick

Clicks on HTML element (button, link).

```javascript
SeS('SomeHTMLObject').DoClick(x, y, forceEvent)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |
| forceEvent | boolean |  Pass 'true' to force browser event without actual mouse click<br>Optional, Default: "false". |




**Returns:**

boolean: 'true' if successful, 'false' otherwise'



<a name="see.also.htmlobject.doclick"></a>

<a name="DoDblClick"></a>    
#### DoDblClick

Double-Clicks on HTML element (button, link).

```javascript
SeS('SomeHTMLObject').DoDblClick(x, y, forceEvent)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |
| forceEvent | boolean |  Pass 'true' to force browser event without actual mouse click<br>Optional, Default: "false". |




**Returns:**

boolean: 'true' if successful, 'false' otherwise'



<a name="see.also.htmlobject.dodblclick"></a>

<a name="DoDOMChildAt"></a>    
#### DoDOMChildAt

Returns n-th child (zero-based).

```javascript
SeS('SomeHTMLObject').DoDOMChildAt(n)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| n | number |  n Index of the child element. |




**Returns:**

[HTMLObject](HTMLObject.md): n-th child.



<a name="see.also.htmlobject.dodomchildat"></a>

<a name="DoDOMChildrenCount"></a>    
#### DoDOMChildrenCount

Returns number of children elements for this one.

```javascript
SeS('SomeHTMLObject').DoDOMChildrenCount()
```




**Returns:**

number: Number of children elements.



<a name="see.also.htmlobject.dodomchildrencount"></a>

<a name="DoDOMConvert"></a>    
#### DoDOMConvert

Creates a clone of this object converted to a requested type.

```javascript
SeS('SomeHTMLObject').DoDOMConvert(type)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| type | string |  Type of an object. |




**Returns:**

[HTMLObject](HTMLObject.md): New Object of requested type or HTMLObject if type not found, null if error occur.



<a name="see.also.htmlobject.dodomconvert"></a>

<a name="DoDOMFindParentWithAttribute"></a>    
#### DoDOMFindParentWithAttribute

Returns parent element (if any) with given attribute matching given string or 'regex:...' expression.

```javascript
SeS('SomeHTMLObject').DoDOMFindParentWithAttribute(attrName, match)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| attrName | string |  Name of an attribute. |
| match | string |  Match string. |




**Returns:**

[HTMLObject](HTMLObject.md): Matched element or 'null'.



<a name="see.also.htmlobject.dodomfindparentwithattribute"></a>

<a name="DoDOMGetAttribute"></a>    
#### DoDOMGetAttribute

Returns specified attribute.

```javascript
SeS('SomeHTMLObject').DoDOMGetAttribute(attrName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| attrName | string |  Name of an attribute. |




**Returns:**

object: Attribute value.



<a name="see.also.htmlobject.dodomgetattribute"></a>

<a name="DoDOMGetAttributes"></a>    
#### DoDOMGetAttributes

Returns all attributes of a node.

```javascript
SeS('SomeHTMLObject').DoDOMGetAttributes()
```




**Returns:**

array: Array of attributes.



<a name="see.also.htmlobject.dodomgetattributes"></a>

<a name="DoDOMNextSibling"></a>    
#### DoDOMNextSibling

Returns next sibling element for this one.

```javascript
SeS('SomeHTMLObject').DoDOMNextSibling()
```




**Returns:**

[HTMLObject](HTMLObject.md): Next sibling element.



<a name="see.also.htmlobject.dodomnextsibling"></a>

<a name="DoDOMParent"></a>    
#### DoDOMParent

Returns parent element having this element.

```javascript
SeS('SomeHTMLObject').DoDOMParent()
```




**Returns:**

[HTMLObject](HTMLObject.md): Parent element.



<a name="see.also.htmlobject.dodomparent"></a>

<a name="DoDOMPrevSibling"></a>    
#### DoDOMPrevSibling

Return previous sibling element for this one.

```javascript
SeS('SomeHTMLObject').DoDOMPrevSibling()
```




**Returns:**

[HTMLObject](HTMLObject.md): Previous sibling element.



<a name="see.also.htmlobject.dodomprevsibling"></a>

<a name="DoDOMQueryCss"></a>    
#### DoDOMQueryCss

Gets array of elements matching CSS selector on this object.

```javascript
SeS('SomeHTMLObject').DoDOMQueryCss(css)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| css | string |  CSS selector. |




**Returns:**

array: Array of matched elements.



<a name="see.also.htmlobject.dodomquerycss"></a>

<a name="DoDOMQueryValue"></a>    
#### DoDOMQueryValue

Executes an xpath query that may return a value of string, number or boolean type. If the result of the query is an array of nodes - a combined string is returned (;-separated text values of nodes). If the query returns nothing (invalid query or nothing matches) then `null` is returned. Requires Rapise 6.4+

```javascript
SeS('SomeHTMLObject').DoDOMQueryValue(xpath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |  Absolute or relative xpath query. e.g. `count(//div)`, `//a[1]/@href='/Home'`, `./li/text()` |




**Returns:**

string | <br>number | <br>boolean: Result of the query or null if the query is invalid.



<a name="see.also.htmlobject.dodomqueryvalue"></a>

<a name="DoDOMQueryXPath"></a>    
#### DoDOMQueryXPath

Gets array of elements matching XPath query on this object.

```javascript
SeS('SomeHTMLObject').DoDOMQueryXPath(xpath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xpath | string |  Xpath query. |




**Returns:**

array: Array of matched elements.



<a name="see.also.htmlobject.dodomqueryxpath"></a>

<a name="DoDOMRoot"></a>    
#### DoDOMRoot

Returns Root element having this element.

```javascript
SeS('SomeHTMLObject').DoDOMRoot()
```




**Returns:**

[HTMLObject](HTMLObject.md): Root element having this element.



<a name="see.also.htmlobject.dodomroot"></a>

<a name="DoEnsureVisible"></a>    
#### DoEnsureVisible

Makes sure specified element is visible on the screen.

```javascript
SeS('SomeHTMLObject').DoEnsureVisible(vAlign, hAlign)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| vAlign | string |  One of "start", "center", "end", or "nearest". Defaults to "start".<br>Optional. |
| hAlign | string |  One of "start", "center", "end", or "nearest". Defaults to "nearest".<br>Optional. |




**Returns:**

object: Rectangle of the element if it became visible, 'null' otherwise.



<a name="see.also.htmlobject.doensurevisible"></a>

<a name="DoGetRect"></a>    
#### DoGetRect

Finds screen rectangle for this object.

```javascript
SeS('SomeHTMLObject').DoGetRect()
```




**Returns:**

object: object {x, y, w, h}



<a name="see.also.htmlobject.dogetrect"></a>

<a name="DoGetSelection"></a>    
#### DoGetSelection

Gets selected options text of a SELECT element. Example: 'Option1,Option2'.

```javascript
SeS('SomeHTMLObject').DoGetSelection(delim)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| delim | string |  Separator between options.<br>Optional, Default: ",". |




**Returns:**

boolean: String with option values separated by delim.



<a name="see.also.htmlobject.dogetselection"></a>

<a name="DoMouseMove"></a>    
#### DoMouseMove

Moves mouse on HTML element with offset.

```javascript
SeS('SomeHTMLObject').DoMouseMove(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| y | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise'



<a name="see.also.htmlobject.domousemove"></a>

<a name="DoSelect"></a>    
#### DoSelect

Selects specified element in &lt;select&gt; control. Since Rapise 6.3 also supports OL and UL lists.

```javascript
SeS('SomeHTMLObject').DoSelect(txt)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| txt | string |  Element to select |




**Returns:**

boolean: 'true' if successful, 'false' otherwise'



<a name="see.also.htmlobject.doselect"></a>

<a name="DoSetCheck"></a>    
#### DoSetCheck

Sets specified state of check box.

```javascript
SeS('SomeHTMLObject').DoSetCheck(bcheck)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bcheck | boolean |  State to set |




**Returns:**

boolean: 'true' if successful, 'false' otherwise'



<a name="see.also.htmlobject.dosetcheck"></a>

<a name="DoSetText"></a>    
#### DoSetText

Sets text for input edit or textarea.

```javascript
SeS('SomeHTMLObject').DoSetText(txt)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| txt | string |  Text to set |




**Returns:**

boolean: 'true' if successful, 'false' otherwise'



<a name="see.also.htmlobject.dosettext"></a>

  

