Summary: Standard YUI SplitButton.

# YUISplitButton

Standard YUI SplitButton.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: YUISplitButtonBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Active](#active) | Active state of the button. | GetActive |  |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClick](#doclick) | Clicks the button. |
|  [DoMenu](#domenu) | Clicks menu of the split button. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="Active"></a>
#### Active


Active state of the button. If the button is active it is highlightedin YUI. Usually to make an object Active user needs to move mouseover the object.

      
  
      
Type: Boolean
      
      
Accessors: GetActive
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoClick"></a>    
#### DoClick

Clicks the button.

```javascript
SeS('SomeYUISplitButton').DoClick(x, y)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| x | number |  x coordinate to click<br>Optional. |
| y | number |  y coordinate to click<br>Optional. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.yuisplitbutton.doclick"></a>

<a name="DoMenu"></a>    
#### DoMenu

Clicks menu of the split button.

```javascript
SeS('SomeYUISplitButton').DoMenu()
```




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.yuisplitbutton.domenu"></a>

  

