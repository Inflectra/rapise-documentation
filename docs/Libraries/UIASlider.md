# UIASlider

Extends [UIAObject](UIAObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: UIAutomationProgressBarBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [MaxValue](#MaxValue) | Maximum value of the object or 'false' if value can't be read. | GetMaxValue | SetMaxValue |
| [MinValue](#MinValue) | Minimum value of the object or 'false' if value can't be read. | GetMinValue | SetMinValue |
| [Value](#Value) | Value of the object. | GetValue | SetValue |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSetValue](#DoSetValue) | Sets the value of current object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="MaxValue"></a>
#### MaxValue


Maximum value of the object or 'false' if value can't be read.

			
	
			
Type: number|boolean
			
			
Accessors: GetMaxValue, SetMaxValue
			
		
<a name="MinValue"></a>
#### MinValue


Minimum value of the object or 'false' if value can't be read.

			
	
			
Type: number|boolean
			
			
Accessors: GetMinValue, SetMinValue
			
		
<a name="Value"></a>
#### Value


Value of the object.

			
	
			
Type: number
			
			
Accessors: GetValue, SetValue
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSetValue"></a>    
#### DoSetValue(val)

Sets the value of current object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | number |	Value to set |




**Returns:**

boolean: 'true' if successul, 'false' otherwise



<a name="see.also.uiaslider.dosetvalue"></a>

	

