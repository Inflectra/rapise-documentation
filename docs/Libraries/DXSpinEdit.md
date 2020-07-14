Summary: DevXpress SpinEdit.

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
| [Increment](#increment) | The value of increment for spin. | GetIncrement | SetIncrement |
| [MaxValue](#maxvalue) | Maximum value of the object or 'false' if value can't be read. | GetMaxValue | SetMaxValue |
| [MinValue](#minvalue) | Minimum value of the object or 'false' if value can't be read. | GetMinValue | SetMinValue |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText | SetText |
| [Value](#value) | Value of the object. | GetValue | SetValue |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoDown](#dodown) | Decrements the Value of an object. |
|	[DoSetText](#dosettext) | Sets text value of this object. |
|	[DoUp](#doup) | Increments the Value of an object. |




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
#### DoDown

Decrements the Value of an object.

```javascript
DoDown() 
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxspinedit.dodown"></a>

<a name="DoSetText"></a>    
#### DoSetText

Sets text value of this object.

```javascript
DoSetText(val) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string |	Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxspinedit.dosettext"></a>

<a name="DoUp"></a>    
#### DoUp

Increments the Value of an object.

```javascript
DoUp() 
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxspinedit.doup"></a>

	

