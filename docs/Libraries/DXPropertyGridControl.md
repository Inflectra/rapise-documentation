Summary: UI element class: DevExpress.XtraVerticalGrid.PropertyGridControl

# DXPropertyGridControl

UI element class: DevExpress.XtraVerticalGrid.PropertyGridControl

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DXPropertyGridControlBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [RowCount](#rowcount) | Number of rows in the table. | GetRowCount |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoGetRowCaption](#dogetrowcaption) | Gets caption of the row with index. |
|	[DoGetRowColor](#dogetrowcolor) | Gets color of the row with index. |
|	[DoGetRowRect](#dogetrowrect) | Gets rectangle of the row with index. |
|	[DoGetRowValue](#dogetrowvalue) | Gets value of the row with index. |
|	[DoSetRowValue](#dosetrowvalue) | Sets value of the row with index. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="RowCount"></a>
#### RowCount


Number of rows in the table.

			
	
			
Type: number
			
			
Accessors: GetRowCount
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoGetRowCaption"></a>    
#### DoGetRowCaption

Gets caption of the row with index.

```javascript
DoGetRowCaption(rowIndex) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowIndex | number |	Row index |




**Returns:**

string: Row caption



<a name="see.also.dxpropertygridcontrol.dogetrowcaption"></a>

<a name="DoGetRowColor"></a>    
#### DoGetRowColor

Gets color of the row with index.

```javascript
DoGetRowColor(rowIndex) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowIndex | number |	Row index |




**Returns:**

string: Row color



<a name="see.also.dxpropertygridcontrol.dogetrowcolor"></a>

<a name="DoGetRowRect"></a>    
#### DoGetRowRect

Gets rectangle of the row with index.

```javascript
DoGetRowRect(rowIndex) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowIndex | number |	Row index |




**Returns:**

object: Row rectangle {x, y, w, h}.



<a name="see.also.dxpropertygridcontrol.dogetrowrect"></a>

<a name="DoGetRowValue"></a>    
#### DoGetRowValue

Gets value of the row with index.

```javascript
DoGetRowValue(rowIndex) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowIndex | number |	Row index |




**Returns:**

object: Row value



<a name="see.also.dxpropertygridcontrol.dogetrowvalue"></a>

<a name="DoSetRowValue"></a>    
#### DoSetRowValue

Sets value of the row with index.

```javascript
DoSetRowValue(rowIndex, value) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowIndex | number |	Row index |
| value | string |	Value to set |




**Returns:**

boolean: 'true' if successfull



<a name="see.also.dxpropertygridcontrol.dosetrowvalue"></a>

	

