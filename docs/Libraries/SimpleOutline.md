Summary: Outline control.

# SimpleOutline

Outline control.
 
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
SeS('SomeSimpleOutline').DoSelectItem(itemName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| itemName | string |  This is a name of item to select. Or an array of item names in the case of multi-select. |




**Returns:**

boolean: 'true' if operation is successful, 'false' otherwise



<a name="see.also.simpleoutline.doselectitem"></a>

  




**Behavior Pattern: Win32ItemExpandable**


<!-- ============================== property summary ========================== -->

  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoExpand](#doexpand) | Expands an item of this object. |




<!-- ============================== property detail ========================== -->
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoExpand"></a>    
#### DoExpand

Expands an item of this object.

```javascript
SeS('SomeSimpleOutline').DoExpand(itemName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| itemName | string |  Name of the item to expand |




**Returns:**

boolean: 'true' if operation was successful, 'false' otherwise



<a name="see.also.simpleoutline.doexpand"></a>

  




**Behavior Pattern: Win32ItemCheckable**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#itemcount) | Number of items. | GetItemCount |  |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoCheckItem](#docheckitem) | Checks an item of this object. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="ItemCount"></a>
#### ItemCount


Number of items.

      
  
      
Type: number
      
      
Accessors: GetItemCount
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoCheckItem"></a>    
#### DoCheckItem

Checks an item of this object.

```javascript
SeS('SomeSimpleOutline').DoCheckItem(itemName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| itemName | string |  Name of the item to check |





<a name="see.also.simpleoutline.docheckitem"></a>

  

