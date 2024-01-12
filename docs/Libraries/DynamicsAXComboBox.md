Summary: Behavior patterm for Dynamics AX combo box.

# DynamicsAXComboBox

Behavior patterm for Dynamics AX combo box.
 
Extends [UIAObject](UIAObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DynamicsAXComboBoxBehavior**


<!-- ============================== property summary ========================== -->

  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectItem](#doselectitem) | Selects an item of this object. |




<!-- ============================== property detail ========================== -->
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects an item of this object.

```javascript
SeS('SomeDynamicsAXComboBox').DoSelectItem(item)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| item | string \| number |  Item index or text value  to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dynamicsaxcombobox.doselectitem"></a>

  

