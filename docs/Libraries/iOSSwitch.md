Summary: iOS Switch.

# iOSSwitch

iOS Switch.
 
Extends [iOSObject](iOSObject.md)





**Behavior Pattern: iOSObjectSwitchBehavior**


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
value = SeS('SomeiOSSwitch').GetChecked()

SeS('SomeiOSSwitch').SetChecked(value)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSetCheck"></a>    
#### DoSetCheck

Sets check state of the object.

```javascript
SeS('SomeiOSSwitch').DoSetCheck(bcheck)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bcheck | boolean |  Desired check state for the item. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iosswitch.dosetcheck"></a>

  

