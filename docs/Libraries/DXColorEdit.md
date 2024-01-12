Summary: DevXpress ColorEdit.

# DXColorEdit

DevXpress ColorEdit.
 
UI element class: DevExpress.XtraEditors.ColorEdit

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DXColorEditBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [SelectedColor](#selectedcolor) | Selected color of the object | GetSelectedColor | SetSelectedColor |
| [SelectedText](#selectedtext) | Text of the selected item in a single string. | GetSelectedText | SetSelectedText |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectColor](#doselectcolor) | Selects a color. |
|  [DoSetText](#dosettext) | Sets text value of this object. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="SelectedColor"></a>
#### SelectedColor


Selected color of the object

      
  
      
Type: struct
      
      
Accessors: GetSelectedColor, SetSelectedColor
      
    
<a name="SelectedText"></a>
#### SelectedText


Text of the selected item in a single string.

      
  
      
Type: string
      
      
Accessors: GetSelectedText, SetSelectedText
      
    
<a name="Text"></a>
#### Text


Text of the object, 'false' if text can not be read.

      
  
      
Type: string
      
      
Accessors: GetText, SetText
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoSelectColor"></a>    
#### DoSelectColor

Selects a color.

```javascript
SeS('SomeDXColorEdit').DoSelectColor(val)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | struct |  structure with three fields '{R, G, B}'. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.dxcoloredit.doselectcolor"></a>

<a name="DoSetText"></a>    
#### DoSetText

Sets text value of this object.

```javascript
SeS('SomeDXColorEdit').DoSetText(val)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |  Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxcoloredit.dosettext"></a>

  

