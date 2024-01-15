Summary: Java Text Field.

# JavaTextField

Java Text Field.
 
UI element class: java.awt.TextField

Extends [JavaObject](JavaObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: JavaObjectTextFieldBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText | SetText |
| [Value](#value) | Value of the object. | GetValue | SetValue |



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
value = SeS('SomeJavaTextField').GetText()

SeS('SomeJavaTextField').SetText(value)
```


<a name="Value"></a>
#### Value

Value of the object.



Type: text


Accessors: GetValue, SetValue

```javascript
value = SeS('SomeJavaTextField').GetValue()

SeS('SomeJavaTextField').SetValue(value)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSetText"></a>    
#### DoSetText

Sets text value of this object.

```javascript
SeS('SomeJavaTextField').DoSetText(val)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |  Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.javatextfield.dosettext"></a>

  

