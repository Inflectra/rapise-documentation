Summary: This behavior pattern implements standard behavior for ComboBox control.

# DomDynamicsAXComboBox

This behavior pattern implements standard behavior for ComboBox control.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DomDynamicsAXComboBoxBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Text](#text) | Selected value. | GetText | SetText |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoOpen](#doopen) | Expands combo box. |
|  [DoSetText](#dosettext) | Sets text into the edit field of a combo box. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="Text"></a>
#### Text

Selected value.



Type: string


Accessors: GetText, SetText

```javascript
value = SeS('SomeDomDynamicsAXComboBox').GetText()

SeS('SomeDomDynamicsAXComboBox').SetText(/**string*/ text)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoOpen"></a>    
#### DoOpen

Expands combo box.

```javascript
SeS('SomeDomDynamicsAXComboBox').DoOpen()
```





<a name="see.also.domdynamicsaxcombobox.doopen"></a>

<a name="DoSetText"></a>    
#### DoSetText

Sets text into the edit field of a combo box.

```javascript
SeS('SomeDomDynamicsAXComboBox').DoSetText(text)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| text | string |  Value to input. |





<a name="see.also.domdynamicsaxcombobox.dosettext"></a>

  

