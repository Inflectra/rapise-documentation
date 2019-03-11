# TelerikRadSpinEditor

Telerik RadSpinEditor.
 
Extends ManagedObject.

Extends SeSSimulatedObject.





**Behavior Pattern: TelerikSpinEditBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Increment](#Increment) | Number value that means how much is added or removed when user clicks up or down. | GetIncrement | SetIncrement |
| [MaxValue](#MaxValue) | Maximum value of the object or 'false' if value can't be read. | GetMaxValue | SetMaxValue |
| [MinValue](#MinValue) | Minimum value of the object or 'false' if value can't be read. | GetMinValue | SetMinValue |
| [Text](#Text) | Text of the object, 'false' if text can not be read. | GetText | SetText |
| [Value](#Value) | Value of the object. | GetValue | SetValue |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoDown](#DoDown) | Decrements the value of an object |
|	[DoSetText](#DoSetText) | Sets text value of this object. |
|	[DoUp](#DoUp) | Increments the Value of an object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Increment"></a>
#### Increment


Number value that means how much is added or removed when user clicks up or down.

			
	
			
Type: number
			
			
Accessors: GetIncrement, SetIncrement
			
		
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
			
		
<a name="Text"></a>
#### Text


Text of the object, 'false' if text can not be read.

			
	
			
Type: string
			
			
Accessors: GetText, SetText
			
		
<a name="Value"></a>
#### Value


Value of the object.

			
	
			
Type: number
			
			
Accessors: GetValue, SetValue
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoDown"></a>    
#### DoDown()

Decrements the value of an object




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.telerikradspineditor.dodown"></a>

<a name="DoSetText"></a>    
#### DoSetText(val)

Sets text value of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |	Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.telerikradspineditor.dosettext"></a>

<a name="DoUp"></a>    
#### DoUp()

Increments the Value of an object.




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.telerikradspineditor.doup"></a>

	

