Summary: DevXpress FontEdit.

# DXFontEdit

DevXpress FontEdit.
 
UI element class: DevExpress.XtraEditors.FontEdit

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DXFontEditBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [SelectedText](#selectedtext) | Text of the selected item in a single string. | GetSelectedText | SetSelectedText |
| [Text](#text) | Text of the selected item in a single string. | GetText | SetText |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectItem](#doselectitem) | Selects an item of this object. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="SelectedText"></a>
#### SelectedText

Text of the selected item in a single string.



Type: string


Accessors: GetSelectedText, SetSelectedText

```javascript
value = SeS('SomeDXFontEdit').GetSelectedText()

SeS('SomeDXFontEdit').SetSelectedText(value)
```


<a name="Text"></a>
#### Text

Text of the selected item in a single string.



Type: string


Accessors: GetText, SetText

```javascript
value = SeS('SomeDXFontEdit').GetText()

SeS('SomeDXFontEdit').SetText(value)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects an item of this object.

```javascript
SeS('SomeDXFontEdit').DoSelectItem(item)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| item | string \| number |  Item index or text value  to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxfontedit.doselectitem"></a>

  

