Summary: Java Swing Text Field.

# JavaSwingTextField

Java Swing Text Field.
 
UI element class: javax.swing.JTextField

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
      
    
<a name="Value"></a>
#### Value


Value of the object.

      
  
      
Type: text
      
      
Accessors: GetValue, SetValue
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoSetText"></a>    
#### DoSetText

Sets text value of this object.

```javascript
SeS('SomeJavaSwingTextField').DoSetText(val)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |  Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.javaswingtextfield.dosettext"></a>

  

