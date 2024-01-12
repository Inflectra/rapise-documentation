Summary: This behavior pattern implements standard behavior for Grouping control.

# SyncfusionGrouping

This behavior pattern implements standard behavior for Grouping control.
 
UI element class: Syncfusion.Windows.Forms.Tools.GroupBar

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: SyncfusionGroupingBehavior**


<!-- ============================== property summary ========================== -->

  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickItem](#doclickitem) | Performs click on the groupbar item |




<!-- ============================== property detail ========================== -->
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoClickItem"></a>    
#### DoClickItem

Performs click on the groupbar item

```javascript
SeS('SomeSyncfusionGrouping').DoClickItem(captionIndex, clickType, ox, oy)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| captionIndex | string \| number |  index or caption of the item to be selected. |
| clickType | string |  Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |
| ox | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| oy | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.syncfusiongrouping.doclickitem"></a>

  

