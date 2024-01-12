Summary: This is generic Win32 popup menu. Use DoClickItem to click a particular item from the menu.

# Win32PopupMenu

This is generic Win32 popup menu. Use DoClickItem to click a particular item from the menu.
 
Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: Win32ItemClickable**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#itemcount) | Number of items. | GetItemCount |  |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickItem](#doclickitem) | Performs click on an item of this object. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="ItemCount"></a>
#### ItemCount


Number of items.

      
  
      
Type: number
      
      
Accessors: GetItemCount
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoClickItem"></a>    
#### DoClickItem

Performs click on an item of this object.

```javascript
SeS('SomeWin32PopupMenu').DoClickItem(itemName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| itemName | string |  Name of the item to click |




**Returns:**

boolean: 'true' if operation was successful, 'false' otherwise



<a name="see.also.win32popupmenu.doclickitem"></a>

  

