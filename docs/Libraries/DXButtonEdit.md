Summary: DevXpress ButtonEdit.

# DXButtonEdit

DevXpress ButtonEdit.
 
UI element class: DevExpress.XtraEditors.ButtonEdit

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: ManagedObjectTextBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSetText](#dosettext) | Sets text value of this object. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="Text"></a>
#### Text


Text of the object, 'false' if text can not be read.

      
  
      
Type: string
      
      
Accessors: GetText, SetText
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoSetText"></a>    
#### DoSetText

Sets text value of this object.

```javascript
SeS('SomeDXButtonEdit').DoSetText(val)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |  Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxbuttonedit.dosettext"></a>

  




**Behavior Pattern: DXButtonEditBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ButtonCount](#buttoncount) | Number of buttons in this control. | GetButtonCount |  |
| [ButtonKind](#buttonkind) | Kind of a button at index. | GetButtonKind |  |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickButton](#doclickbutton) | Selects an item of this object. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="ButtonCount"></a>
#### ButtonCount


Number of buttons in this control.

      
  
      
Type: number
      
      
Accessors: GetButtonCount
      
    
<a name="ButtonKind"></a>
#### ButtonKind


Kind of a button at index. Returns one of Glyph, Ellipsis, Delete, OK, Plus, Minus, Redo, Undo or DropDown

      
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| index | number | index of button |


  
      
Type: string
      
      
Accessors: GetButtonKind
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoClickButton"></a>    
#### DoClickButton

Selects an item of this object.

```javascript
SeS('SomeDXButtonEdit').DoClickButton(index, isLeft)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |  index of button to select |
| isLeft | boolean |  set to 'true' if buttons are at the left of the control<br>Optional, Default: "false". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxbuttonedit.doclickbutton"></a>

  

