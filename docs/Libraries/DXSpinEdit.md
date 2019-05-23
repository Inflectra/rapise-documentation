# DXSpinEdit

DevXpress SpinEdit.
 
UI element class: DevExpress.XtraEditors.SpinEdit

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DXSpinEditBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Increment](#Increment) | The value of increment for spin. | GetIncrement | SetIncrement |
| [MaxValue](#MaxValue) | Maximum value of the object or 'false' if value can't be read. | GetMaxValue | SetMaxValue |
| [MinValue](#MinValue) | Minimum value of the object or 'false' if value can't be read. | GetMinValue | SetMinValue |
| [Text](#Text) | Text of the object, 'false' if text can not be read. | GetText | SetText |
| [Value](#Value) | Value of the object. | GetValue | SetValue |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoDown](#DoDown) | Decrements the Value of an object. |
|	[DoSetText](#DoSetText) | Sets text value of this object. |
|	[DoUp](#DoUp) | Increments the Value of an object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Increment"></a>
#### Increment


The value of increment for spin.

			
	
			
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

Decrements the Value of an object.




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxspinedit.dodown"></a>

<a name="DoSetText"></a>    
#### DoSetText(val)

Sets text value of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |	Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxspinedit.dosettext"></a>

<a name="DoUp"></a>    
#### DoUp()

Increments the Value of an object.




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxspinedit.doup"></a>

	

