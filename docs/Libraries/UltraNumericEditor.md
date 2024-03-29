Summary: Infragistics UltraNumericEditor.

# UltraNumericEditor

Infragistics UltraNumericEditor.
 
UI element class: Infragistics.Win.UltraWinEditors.UltraNumericEditor

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: UltraNumericEditBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [MaxValue](#maxvalue) | Maximum value of the object or 'false' if value can't be read. | GetMaxValue | SetMaxValue |
| [MinValue](#minvalue) | Minimum value of the object or 'false' if value can't be read. | GetMinValue | SetMinValue |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSetText](#dosettext) | Sets text value of this object. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="MaxValue"></a>
#### MaxValue

Maximum value of the object or 'false' if value can't be read.



Type: number|boolean


Accessors: GetMaxValue, SetMaxValue

```javascript
value = SeS('SomeUltraNumericEditor').GetMaxValue()

SeS('SomeUltraNumericEditor').SetMaxValue(value)
```


<a name="MinValue"></a>
#### MinValue

Minimum value of the object or 'false' if value can't be read.



Type: number|boolean


Accessors: GetMinValue, SetMinValue

```javascript
value = SeS('SomeUltraNumericEditor').GetMinValue()

SeS('SomeUltraNumericEditor').SetMinValue(value)
```


<a name="Text"></a>
#### Text

Text of the object, 'false' if text can not be read.



Type: string


Accessors: GetText, SetText

```javascript
value = SeS('SomeUltraNumericEditor').GetText()

SeS('SomeUltraNumericEditor').SetText(value)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSetText"></a>    
#### DoSetText

Sets text value of this object.

```javascript
SeS('SomeUltraNumericEditor').DoSetText(val)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |  Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultranumericeditor.dosettext"></a>

  

