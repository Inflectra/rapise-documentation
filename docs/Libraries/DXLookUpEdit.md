Summary: DevXpress LookUpEdit.

# DXLookUpEdit

DevXpress LookUpEdit.
 
UI element class: DevExpress.XtraEditors.LookUpEdit

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DXLookUpEditBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemIndex](#itemindex) | Index of the selected element of the object. | GetItemIndex | SetItemIndex |
| [ItemName](#itemname) | Name of the selected element of the object. | GetItemName |  |
| [SelectedIndex](#selectedindex) | Index of the selected element of the object. | GetSelectedIndex | SetSelectedIndex |
| [SelectedText](#selectedtext) | Text of the object, 'false' if text can not be read. | GetSelectedText | SetSelectedText |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectItem](#doselectitem) | Selects an item of this object. |
|  [DoSetText](#dosettext) | Sets text value of this object. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="ItemIndex"></a>
#### ItemIndex

Index of the selected element of the object.



Type: string


Accessors: GetItemIndex, SetItemIndex

```javascript
value = SeS('SomeDXLookUpEdit').GetItemIndex()

SeS('SomeDXLookUpEdit').SetItemIndex(value)
```


<a name="ItemName"></a>
#### ItemName

Name of the selected element of the object.



Type: string


Accessors: GetItemName

```javascript
value = SeS('SomeDXLookUpEdit').GetItemName()
```


<a name="SelectedIndex"></a>
#### SelectedIndex

Index of the selected element of the object.



Type: number


Accessors: GetSelectedIndex, SetSelectedIndex

```javascript
value = SeS('SomeDXLookUpEdit').GetSelectedIndex()

SeS('SomeDXLookUpEdit').SetSelectedIndex(value)
```


<a name="SelectedText"></a>
#### SelectedText

Text of the object, 'false' if text can not be read.



Type: string


Accessors: GetSelectedText, SetSelectedText

```javascript
value = SeS('SomeDXLookUpEdit').GetSelectedText()

SeS('SomeDXLookUpEdit').SetSelectedText(value)
```


<a name="Text"></a>
#### Text

Text of the object, 'false' if text can not be read.



Type: string


Accessors: GetText, SetText

```javascript
value = SeS('SomeDXLookUpEdit').GetText()

SeS('SomeDXLookUpEdit').SetText(value)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects an item of this object.

```javascript
SeS('SomeDXLookUpEdit').DoSelectItem(val)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | number |  index of value to select |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxlookupedit.doselectitem"></a>

<a name="DoSetText"></a>    
#### DoSetText

Sets text value of this object.

```javascript
SeS('SomeDXLookUpEdit').DoSetText(val)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |  Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxlookupedit.dosettext"></a>

  

