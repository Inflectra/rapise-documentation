Summary: UIAutomation UIAComboBox.

# UIAComboBox

UIAutomation UIAComboBox.
 
Extends [UIAObject](UIAObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: UIAutomationComboBoxBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemNameByIndex](#itemnamebyindex) | Returns item name by its index. | GetItemNameByIndex |  |
| [SelectedIndex](#selectedindex) | Index of the selected element of the object. | GetSelectedIndex | SetSelectedIndex |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectItem](#doselectitem) | Selects an item of this object. |
|  [DoSetText](#dosettext) | Set text into combobox with an edit box. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="ItemNameByIndex"></a>
#### ItemNameByIndex

Returns item name by its index.'false' if name is not found.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| index | number | Index of the item |




Type: string|boolean


Accessors: GetItemNameByIndex

```javascript
value = SeS('SomeUIAComboBox').GetItemNameByIndex(index)
```


<a name="SelectedIndex"></a>
#### SelectedIndex

Index of the selected element of the object.



Type: number


Accessors: GetSelectedIndex, SetSelectedIndex

```javascript
value = SeS('SomeUIAComboBox').GetSelectedIndex()

SeS('SomeUIAComboBox').SetSelectedIndex(/**number*/ ind)
```


<a name="Text"></a>
#### Text

Text of the object, 'false' if text can not be read.



Type: string


Accessors: GetText, SetText

```javascript
value = SeS('SomeUIAComboBox').GetText()

SeS('SomeUIAComboBox').SetText(value)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects an item of this object.

```javascript
SeS('SomeUIAComboBox').DoSelectItem(item)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| item | string \| number |  Item index or text value  to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.uiacombobox.doselectitem"></a>

<a name="DoSetText"></a>    
#### DoSetText

Set text into combobox with an edit box.

```javascript
SeS('SomeUIAComboBox').DoSetText(newText)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| newText | string |  Text to set |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.uiacombobox.dosettext"></a>

  

