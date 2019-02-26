# DXPropertyGridControl

Extends ManagedObject.

Extends SeSSimulatedObject.





**Behavior Pattern: DXPropertyGridControlBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [RowCount](#RowCount) | Number of rows in the table. | GetRowCount |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoGetRowCaption](#DoGetRowCaption) | Gets caption of the row with index. |
|	[DoGetRowColor](#DoGetRowColor) | Gets color of the row with index. |
|	[DoGetRowRect](#DoGetRowRect) | Gets rectangle of the row with index. |
|	[DoGetRowValue](#DoGetRowValue) | Gets value of the row with index. |
|	[DoSetRowValue](#DoSetRowValue) | Sets value of the row with index. |




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
#### DoGetRowCaption(rowIndex)

Gets caption of the row with index.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowIndex | number |	Row index |




**Returns:**

string: Row caption




<a name="DoGetRowColor"></a>    
#### DoGetRowColor(rowIndex)

Gets color of the row with index.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowIndex | number |	Row index |




**Returns:**

string: Row color




<a name="DoGetRowRect"></a>    
#### DoGetRowRect(rowIndex)

Gets rectangle of the row with index.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowIndex | number |	Row index |




**Returns:**

Object: Row rectangle {x, y, w, h}.




<a name="DoGetRowValue"></a>    
#### DoGetRowValue(rowIndex)

Gets value of the row with index.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowIndex | number |	Row index |




**Returns:**

Object: Row value




<a name="DoSetRowValue"></a>    
#### DoSetRowValue(rowIndex, value)

Sets value of the row with index.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rowIndex | number |	Row index |
| value | string |	Value to set |




**Returns:**

Boolean: 'true' if successfull




	

