Summary: UIAutomation UIAHyperlink.

# UIAHyperlink

UIAutomation UIAHyperlink.
 
Extends [UIAObject](UIAObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: UIAutomationButtonBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ToggleState](#togglestate) | For toggle button this property contains its toggle state | GetToggleState | SetToggleState |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoAction](#doaction) | Performs default action on this button. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="ToggleState"></a>
#### ToggleState

For toggle button this property contains its toggle state



Type: boolean


Accessors: GetToggleState, SetToggleState

```javascript
value = SeS('SomeUIAHyperlink').GetToggleState()

SeS('SomeUIAHyperlink').SetToggleState(check)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoAction"></a>    
#### DoAction

Performs default action on this button.

```javascript
SeS('SomeUIAHyperlink').DoAction()
```




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.uiahyperlink.doaction"></a>

  

