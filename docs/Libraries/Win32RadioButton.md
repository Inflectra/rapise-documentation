Summary: This is generic Win32 radio button. Use DoAction to select the button.

# Win32RadioButton

This is generic Win32 radio button. Use DoAction to select the button.
 
Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: Win32CheckBox**


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

```javascript
value = SeS('SomeWin32RadioButton').GetChecked()

SeS('SomeWin32RadioButton').SetChecked(value)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSetCheck"></a>    
#### DoSetCheck

Sets check state of the object.

```javascript
SeS('SomeWin32RadioButton').DoSetCheck(bcheck)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bcheck | boolean |  Desired check state for the item. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.win32radiobutton.dosetcheck"></a>

  




**Behavior Pattern: Win32Radio**


<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->




<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->
  

