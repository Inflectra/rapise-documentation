Summary: Infragistics UltraTimeZoneEditor.

# UltraTimeZoneEditor

Infragistics UltraTimeZoneEditor.
 
UI element class: Infragistics.Win.UltraWinEditors.UltraTimeZoneEditor

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: UltraComboBoxBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [SelectedIndex](#selectedindex) | Index of the selected element of the object. | GetSelectedIndex | SetSelectedIndex |
| [SelectedItem](#selecteditem) | Selected item of the object. | GetSelectedItem | SetSelectedItem |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectItem](#doselectitem) | Selects an item of this object. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="SelectedIndex"></a>
#### SelectedIndex

Index of the selected element of the object.



Type: number


Accessors: GetSelectedIndex, SetSelectedIndex

```javascript
value = SeS('SomeUltraTimeZoneEditor').GetSelectedIndex()

SeS('SomeUltraTimeZoneEditor').SetSelectedIndex()
```


<a name="SelectedItem"></a>
#### SelectedItem

Selected item of the object.



Type: string


Accessors: GetSelectedItem, SetSelectedItem

```javascript
value = SeS('SomeUltraTimeZoneEditor').GetSelectedItem()

SeS('SomeUltraTimeZoneEditor').SetSelectedItem()
```


<a name="Text"></a>
#### Text

Text of the object, 'false' if text can not be read.



Type: string


Accessors: GetText, SetText

```javascript
value = SeS('SomeUltraTimeZoneEditor').GetText()

SeS('SomeUltraTimeZoneEditor').SetText()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects an item of this object.

```javascript
SeS('SomeUltraTimeZoneEditor').DoSelectItem(item)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| item | string \| number |  Item index or text value  to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultratimezoneeditor.doselectitem"></a>

  




**Behavior Pattern: ManagedObjectTextBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSetText](#dosettext) | Sets text value of this object. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="Text"></a>
#### Text

Text of the object, 'false' if text can not be read.



Type: string


Accessors: GetText, SetText

```javascript
value = SeS('SomeUltraTimeZoneEditor').GetText()

SeS('SomeUltraTimeZoneEditor').SetText(value)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSetText"></a>    
#### DoSetText

Sets text value of this object.

```javascript
SeS('SomeUltraTimeZoneEditor').DoSetText(val)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |  Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultratimezoneeditor.dosettext"></a>

  

