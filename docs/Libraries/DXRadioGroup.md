Summary: DevXpress RadioGroup.

# DXRadioGroup

DevXpress RadioGroup.
 
UI element class: DevExpress.XtraEditors.RadioGroup

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DXRadioGroupBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#itemcount) | Number of items. | GetItemCount |  |
| [SelectedIndex](#selectedindex) | Index of the selected element of the object. | GetSelectedIndex | SetSelectedIndex |
| [Text](#text) | Text of the label of the object | GetText |  |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectItem](#doselectitem) | Selects Item |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="ItemCount"></a>
#### ItemCount


Number of items.

      
  
      
Type: number
      
      
Accessors: GetItemCount
      
    
<a name="SelectedIndex"></a>
#### SelectedIndex


Index of the selected element of the object.

      
  
      
Type: number
      
      
Accessors: GetSelectedIndex, SetSelectedIndex
      
    
<a name="Text"></a>
#### Text


Text of the label of the object

      
  
      
Type: string
      
      
Accessors: GetText
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects Item

```javascript
SeS('SomeDXRadioGroup').DoSelectItem(index)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |  Index of the element to check |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.dxradiogroup.doselectitem"></a>

  

