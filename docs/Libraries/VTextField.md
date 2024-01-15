Summary: Oracle Forms VTextField.

# VTextField

Oracle Forms VTextField.
 
UI element class: oracle.forms.ui.VTextField

Extends [OracleFormsObject](OracleFormsObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: OracleFormsTextFieldBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText | SetText |
| [Value](#value) | Text of the object, 'false' if text can not be read. | GetValue | SetValue |



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
value = SeS('SomeVTextField').GetText()

SeS('SomeVTextField').SetText()
```


<a name="Value"></a>
#### Value

Text of the object, 'false' if text can not be read.



Type: string


Accessors: GetValue, SetValue

```javascript
value = SeS('SomeVTextField').GetValue()

SeS('SomeVTextField').SetValue()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSetText"></a>    
#### DoSetText

Sets text value of this object.

```javascript
SeS('SomeVTextField').DoSetText(val, bvalidate)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |  Text value. |
| bvalidate | boolean |  Force validation of entered value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.vtextfield.dosettext"></a>

  

