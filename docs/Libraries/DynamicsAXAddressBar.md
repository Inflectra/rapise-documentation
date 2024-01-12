Summary: DynamicsAX DynamicsAXAddressBar.

# DynamicsAXAddressBar

DynamicsAX DynamicsAXAddressBar.
 
Extends [UIAObject](UIAObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DynamicsAXAddressBarBehavior**


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
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoSetText"></a>    
#### DoSetText

Sets text value of this object.

```javascript
SeS('SomeDynamicsAXAddressBar').DoSetText(val)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |  Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dynamicsaxaddressbar.dosettext"></a>

  

