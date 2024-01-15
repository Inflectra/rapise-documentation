Summary: DevXpress ImageComboBoxEdit.

# DXImageComboBoxEdit

DevXpress ImageComboBoxEdit.
 
UI element class: DevExpress.XtraEditors.ImageComboBoxEdit

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DXComboBoxEditBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#itemcount) | Number of items. | GetItemCount |  |
| [ItemNameByIndex](#itemnamebyindex) | Returns item name by its index. | GetItemNameByIndex |  |
| [SelectedIndex](#selectedindex) | Index of the selected element of the object. | GetSelectedIndex | SetSelectedIndex |
| [SelectedText](#selectedtext) | Text of the selected item in a single string. | GetSelectedText | SetSelectedText |
| [Text](#text) | Text of the selected item in a single string. | GetText | SetText |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectItem](#doselectitem) | Selects an item of this object. |
|  [DoSetText](#dosettext) | Sets text value of this object. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="ItemCount"></a>
#### ItemCount

Number of items.



Type: number


Accessors: GetItemCount

```javascript
value = SeS('SomeDXImageComboBoxEdit').GetItemCount()
```


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
value = SeS('SomeDXImageComboBoxEdit').GetItemNameByIndex(index)
```


<a name="SelectedIndex"></a>
#### SelectedIndex

Index of the selected element of the object.



Type: number


Accessors: GetSelectedIndex, SetSelectedIndex

```javascript
value = SeS('SomeDXImageComboBoxEdit').GetSelectedIndex()

SeS('SomeDXImageComboBoxEdit').SetSelectedIndex(value)
```


<a name="SelectedText"></a>
#### SelectedText

Text of the selected item in a single string.



Type: string


Accessors: GetSelectedText, SetSelectedText

```javascript
value = SeS('SomeDXImageComboBoxEdit').GetSelectedText()

SeS('SomeDXImageComboBoxEdit').SetSelectedText(value)
```


<a name="Text"></a>
#### Text

Text of the selected item in a single string.



Type: string


Accessors: GetText, SetText

```javascript
value = SeS('SomeDXImageComboBoxEdit').GetText()

SeS('SomeDXImageComboBoxEdit').SetText(value)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects an item of this object.

```javascript
SeS('SomeDXImageComboBoxEdit').DoSelectItem(item)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| item | string \| number |  Item index or text value  to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dximagecomboboxedit.doselectitem"></a>

<a name="DoSetText"></a>    
#### DoSetText

Sets text value of this object.

```javascript
SeS('SomeDXImageComboBoxEdit').DoSetText(val)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |  Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dximagecomboboxedit.dosettext"></a>

  

