Summary: Infragistics UltraListBar.

# UltraListBar

Infragistics UltraListBar.
 
UI element class: Infragistics.Win.UltraWinListBar.UltraListBar

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: UltraListBarControlBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Item](#item) | Caption of the item specified by index | GetItem |  |
| [ItemCount](#itemcount) | Number of items in this navigation bar. | GetItemCount |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickItem](#doclickitem) | Performs click on the navigation item |
|	[DoExpandGroup](#doexpandgroup) | Expand (or make active) the navigation group |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Item"></a>
#### Item


Caption of the item specified by index

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| ind | number | Index of an item to get caption |


	
			
Type: string
			
			
Accessors: GetItem
			
		
<a name="ItemCount"></a>
#### ItemCount


Number of items in this navigation bar. All items may then be accessed by SeS(<navbar>).GetItem(ind)

			
	
			
Type: 
			
			
Accessors: GetItemCount
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickItem"></a>    
#### DoClickItem

Performs click on the navigation item

```javascript
DoClickItem(nameCaptionIndex) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameCaptionIndex | string \| number |	index, name or caption of the item to be selected. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise.



<a name="see.also.ultralistbar.doclickitem"></a>

<a name="DoExpandGroup"></a>    
#### DoExpandGroup

Expand (or make active) the navigation group

```javascript
DoExpandGroup(nameCaptionIndex) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameCaptionIndex | string \| number |	index, name or caption of the item to be selected. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise.



<a name="see.also.ultralistbar.doexpandgroup"></a>

	

