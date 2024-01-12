Summary: This behavior pattern implements standard behavior for Lightning ListBox control.

# DomLightningListBox

This behavior pattern implements standard behavior for Lightning ListBox control.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DomLightningListBoxBehavior**


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
SeS('SomeDomLightningListBox').DoSelectItem(item)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| item | string \| number |  Item index or text value  to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.domlightninglistbox.doselectitem"></a>

  

