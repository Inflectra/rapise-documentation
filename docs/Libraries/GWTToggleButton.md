Summary: GWT ToggleButton.

# GWTToggleButton

GWT ToggleButton.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: GWTToggleButtonBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Checked](#checked) | Check state of the button. | GetChecked |  |



  
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
      
      
Accessors: GetChecked
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoSetCheck"></a>    
#### DoSetCheck

Sets check state of the object.

```javascript
SeS('SomeGWTToggleButton').DoSetCheck(bcheck)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bcheck | boolean |  Desired check state for the item. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.gwttogglebutton.dosetcheck"></a>

  

