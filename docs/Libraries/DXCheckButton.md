Summary: DevXpress CheckButton.

# DXCheckButton

DevXpress CheckButton.
 
UI element class: DevExpress.XtraEditors.CheckButton

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DXCheckableBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Checked](#checked) | Check state of the button. | GetChecked | SetChecked |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSetCheck](#dosetcheck) | Sets check state of the object. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="Checked"></a>
#### Checked


Check state of the button. 'true' if the button is checked, 'false' otherwise.

      
  
      
Type: boolean
      
      
Accessors: GetChecked, SetChecked
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoSetCheck"></a>    
#### DoSetCheck

Sets check state of the object.

```javascript
SeS('SomeDXCheckButton').DoSetCheck(bcheck)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bcheck | boolean |  Desired check state for the item. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxcheckbutton.dosetcheck"></a>

  

