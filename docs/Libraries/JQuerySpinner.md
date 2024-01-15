Summary: jQuery-UI JQuery Spinner.

# JQuerySpinner

jQuery-UI JQuery Spinner.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: JQuerySpinnerBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Value](#value) | Gets/Sets the value of the spinner | GetValue | SetValue |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoPageDown](#dopagedown) | Clicks the PageDown spinner button. |
|  [DoPageUp](#dopageup) | Clicks the PageUp spinner button. |
|  [DoSetValue](#dosetvalue) | Sets the value of the spinner. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="Value"></a>
#### Value

Gets/Sets the value of the spinner



Type: number


Accessors: GetValue, SetValue

```javascript
value = SeS('SomeJQuerySpinner').GetValue()

SeS('SomeJQuerySpinner').SetValue(value)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoPageDown"></a>    
#### DoPageDown

Clicks the PageDown spinner button.

```javascript
SeS('SomeJQuerySpinner').DoPageDown()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.jqueryspinner.dopagedown"></a>

<a name="DoPageUp"></a>    
#### DoPageUp

Clicks the PageUp spinner button.

```javascript
SeS('SomeJQuerySpinner').DoPageUp()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.jqueryspinner.dopageup"></a>

<a name="DoSetValue"></a>    
#### DoSetValue

Sets the value of the spinner.

```javascript
SeS('SomeJQuerySpinner').DoSetValue(value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | number |  The desired value of the spinner. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.jqueryspinner.dosetvalue"></a>

  

