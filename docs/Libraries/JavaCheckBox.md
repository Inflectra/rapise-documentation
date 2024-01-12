Summary: Java CheckBox.

# JavaCheckBox

Java CheckBox.
 
UI element class: java.awt.Checkbox

Extends [JavaObject](JavaObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: JavaObjectCheckableBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Checked](#checked) | Check state of the button. | GetChecked | SetChecked |
| [Value](#value) | Value of the object. | GetValue | SetValue |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSetCheck](#dosetcheck) | Sets check state of the object. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="Checked"></a>
#### Checked


Check state of the button. 'true' if the button is checked, 'false' otherwise.

      
  
      
Type: boolean
      
      
Accessors: GetChecked, SetChecked
      
    
<a name="Value"></a>
#### Value


Value of the object.

      
  
      
Type: boolean
      
      
Accessors: GetValue, SetValue
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoSetCheck"></a>    
#### DoSetCheck

Sets check state of the object.

```javascript
SeS('SomeJavaCheckBox').DoSetCheck(bcheck)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bcheck | boolean |  Desired check state for the item. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.javacheckbox.dosetcheck"></a>

  

