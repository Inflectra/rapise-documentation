Summary: Java Swing Combo Box.

# JavaSwingComboBox

Java Swing Combo Box.
 
UI element class: javax.swing.JComboBox

Extends [JavaObject](JavaObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: JavaSwingObjectSelectableBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemIndexByName](#itemindexbyname) | Returns item index by its name. | GetItemIndexByName |  |
| [SelectedIndex](#selectedindex) | Index of the selected element of the object. | GetSelectedIndex | SetSelectedIndex |
| [SelectedText](#selectedtext) | Text of the selected item in a single string. | GetSelectedText | SetSelectedText |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectItem](#doselectitem) | Selects an item of this object. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="ItemIndexByName"></a>
#### ItemIndexByName


Returns item index by its name. 'false' if name is not found.

      
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| name | string |  |


  
      
Type: number|boolean
      
      
Accessors: GetItemIndexByName
      
    
<a name="SelectedIndex"></a>
#### SelectedIndex


Index of the selected element of the object.

      
  
      
Type: number
      
      
Accessors: GetSelectedIndex, SetSelectedIndex
      
    
<a name="SelectedText"></a>
#### SelectedText


Text of the selected item in a single string.

      
  
      
Type: string
      
      
Accessors: GetSelectedText, SetSelectedText
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects an item of this object.

```javascript
SeS('SomeJavaSwingComboBox').DoSelectItem(item)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| item | string \| number |  Item index or text value  to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.javaswingcombobox.doselectitem"></a>

  

