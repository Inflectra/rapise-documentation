Summary: GWT-Ext ComboBox.

# GWTExtComboBox

GWT-Ext ComboBox.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: GWTExtComboBoxBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [SelectedIndex](#selectedindex) | Index of the selected element of the object. | GetSelectedIndex | SetSelectedIndex |
| [SelectedItem](#selecteditem) | Text of the selected item in a single string. | GetSelectedItem | SetSelectedItem |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoExpand](#doexpand) | Expands the combobox. |
|  [DoSelectItem](#doselectitem) | Selects an item of this object. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="SelectedIndex"></a>
#### SelectedIndex

Index of the selected element of the object.



Type: number


Accessors: GetSelectedIndex, SetSelectedIndex

```javascript
value = SeS('SomeGWTExtComboBox').GetSelectedIndex()

SeS('SomeGWTExtComboBox').SetSelectedIndex(index)
```


<a name="SelectedItem"></a>
#### SelectedItem

Text of the selected item in a single string.



Type: string


Accessors: GetSelectedItem, SetSelectedItem

```javascript
value = SeS('SomeGWTExtComboBox').GetSelectedItem()

SeS('SomeGWTExtComboBox').SetSelectedItem(name)
```


<a name="Text"></a>
#### Text

Text of the object, 'false' if text can not be read.



Type: string


Accessors: GetText, SetText

```javascript
value = SeS('SomeGWTExtComboBox').GetText()

SeS('SomeGWTExtComboBox').SetText(name)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoExpand"></a>    
#### DoExpand

Expands the combobox.

```javascript
SeS('SomeGWTExtComboBox').DoExpand(x, y, forceEvent)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  X-coordinate of location relative to object's left border |
| y | number |  Y-coordinate of location relative to object's top border |
| forceEvent | boolean |  pass 'true' to force browser event without actual mouse click.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.gwtextcombobox.doexpand"></a>

<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects an item of this object.

```javascript
SeS('SomeGWTExtComboBox').DoSelectItem(item)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| item | string \| number |  Item index or text value  to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.gwtextcombobox.doselectitem"></a>

  

