Summary: This is generic Win32 combo box. Use DoSelectItem to select a particular item.

# Win32ComboBox

This is generic Win32 combo box. Use DoSelectItem to select a particular item.
 
Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: Win32ItemSelectable**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#itemcount) | Number of items. | GetItemCount |  |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectItem](#doselectitem) | Selects item of this object. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="ItemCount"></a>
#### ItemCount


Number of items.

      
  
      
Type: number
      
      
Accessors: GetItemCount
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects item of this object.

```javascript
SeS('SomeWin32ComboBox').DoSelectItem(itemName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| itemName | string |  This is a name of item to select. Or an array of item names in the case of multi-select. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.win32combobox.doselectitem"></a>

  

