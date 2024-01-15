Summary: UIAutomation UIASlider.

# UIASlider

UIAutomation UIASlider.
 
Extends [UIAObject](UIAObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: UIAutomationProgressBarBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [MaxValue](#maxvalue) | Maximum value of the object or 'false' if value can't be read. | GetMaxValue | SetMaxValue |
| [MinValue](#minvalue) | Minimum value of the object or 'false' if value can't be read. | GetMinValue | SetMinValue |
| [Value](#value) | Value of the object. | GetValue | SetValue |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSetValue](#dosetvalue) | Sets the value of current object. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="MaxValue"></a>
#### MaxValue

Maximum value of the object or 'false' if value can't be read.



Type: number|boolean


Accessors: GetMaxValue, SetMaxValue

```javascript
value = SeS('SomeUIASlider').GetMaxValue()

SeS('SomeUIASlider').SetMaxValue()
```


<a name="MinValue"></a>
#### MinValue

Minimum value of the object or 'false' if value can't be read.



Type: number|boolean


Accessors: GetMinValue, SetMinValue

```javascript
value = SeS('SomeUIASlider').GetMinValue()

SeS('SomeUIASlider').SetMinValue()
```


<a name="Value"></a>
#### Value

Value of the object.



Type: number


Accessors: GetValue, SetValue

```javascript
value = SeS('SomeUIASlider').GetValue()

SeS('SomeUIASlider').SetValue(newvalue)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSetValue"></a>    
#### DoSetValue

Sets the value of current object.

```javascript
SeS('SomeUIASlider').DoSetValue(val)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | number |  Value to set |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.uiaslider.dosetvalue"></a>

  

