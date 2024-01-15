Summary: Behavior patterm for Dynamics AX dropdown (popup).

# DynamicsAXMenuDropDown

Behavior patterm for Dynamics AX dropdown (popup).
 
Extends [UIAObject](UIAObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DynamicsAXMenuDropDownBehavior**


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
SeS('SomeDynamicsAXMenuDropDown').DoSelectItem(item)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| item | string \| number |  Item index or text value  to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dynamicsaxmenudropdown.doselectitem"></a>

  

