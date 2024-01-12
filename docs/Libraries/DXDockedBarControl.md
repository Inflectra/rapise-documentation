Summary: DevXpress Docked Bar.

# DXDockedBarControl

DevXpress Docked Bar.
 
UI element class: regex:DevExpress.XtraBars.Controls.DockedBarControl

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DXBarControlBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Item](#item) | Caption of the item specified by index | GetItem |  |
| [ItemCount](#itemcount) | Number of items. | GetItemCount |  |
| [ItemEnabled](#itemenabled) | Enabled state of an item at index. | GetItemEnabled |  |
| [ItemTooltip](#itemtooltip) | Tooltip assigned to an item at index. | GetItemTooltip |  |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickItem](#doclickitem) | Performs click on the navigation item |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="Item"></a>
#### Item


Caption of the item specified by index

      
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| ind | number | Index of an item to get caption |


  
      
Type: string
      
      
Accessors: GetItem
      
    
<a name="ItemCount"></a>
#### ItemCount


Number of items.

      
  
      
Type: number
      
      
Accessors: GetItemCount
      
    
<a name="ItemEnabled"></a>
#### ItemEnabled


Enabled state of an item at index. Returns boolean value.

      
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| ind | number | Zero-based index of an item. |


  
      
Type: boolean
      
      
Accessors: GetItemEnabled
      
    
<a name="ItemTooltip"></a>
#### ItemTooltip


Tooltip assigned to an item at index.

      
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| ind | number | Zero-based index of an item. |


  
      
Type: string
      
      
Accessors: GetItemTooltip
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoClickItem"></a>    
#### DoClickItem

Performs click on the navigation item

```javascript
SeS('SomeDXDockedBarControl').DoClickItem(nameCaptionIndex, xOffset, yOffset)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameCaptionIndex | string \| number |  index, name or caption of the item to be selected. |
| xOffset | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| yOffset | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise.



<a name="see.also.dxdockedbarcontrol.doclickitem"></a>

  

