Summary: This behavior pattern implements standard behavior for Range control.

# HTML5Range

This behavior pattern implements standard behavior for Range control.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: HTML5RangeBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [MaxValue](#maxvalue) | Maximum value of the object or 'false' if value can't be read. | GetMaxValue |  |
| [MinValue](#minvalue) | Minimum value of the object or 'false' if value can't be read. | GetMinValue |  |



<!-- ============================== action summary ========================== -->

<!-- ============================== property detail ========================== -->

### Property Detail

<a name="MaxValue"></a>
#### MaxValue

Maximum value of the object or 'false' if value can't be read.



Type: number|boolean


Accessors: GetMaxValue

```javascript
value = SeS('SomeHTML5Range').GetMaxValue()
```


<a name="MinValue"></a>
#### MinValue

Minimum value of the object or 'false' if value can't be read.



Type: number|boolean


Accessors: GetMinValue

```javascript
value = SeS('SomeHTML5Range').GetMinValue()
```




<!-- ============================== action detail ========================== -->
  

