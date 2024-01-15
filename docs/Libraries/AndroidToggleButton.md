Summary: Android ToggleButton.

# AndroidToggleButton

Android ToggleButton.
 
Extends [AndroidObject](AndroidObject.md)





**Behavior Pattern: AndroidObjectCheckableBehavior**


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
value = SeS('SomeAndroidToggleButton').GetChecked()

SeS('SomeAndroidToggleButton').SetChecked(value)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSetCheck"></a>    
#### DoSetCheck

Sets check state of the object.

```javascript
SeS('SomeAndroidToggleButton').DoSetCheck(bcheck)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bcheck | boolean |  Desired check state for the item. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.androidtogglebutton.dosetcheck"></a>

  

