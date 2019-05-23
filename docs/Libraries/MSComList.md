# MSComList

Extends [ActiveXObject](ActiveXObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: MSComCtlListView20Behavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemChecked](#ItemChecked) | Check if item is checked. | GetItemChecked |  |
| [ItemCount](#ItemCount) | Number of items. | GetItemCount |  |
| [ItemSelected](#ItemSelected) | Check if item is selected. | GetItemSelected |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoCheckItem](#DoCheckItem) | Checks items of this object. |
|	[DoClickItem](#DoClickItem) | Clicks the specified item |
|	[DoSelectItem](#DoSelectItem) | Selects items of this object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemChecked"></a>
#### ItemChecked


Check if item is checked.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| nameCaptionIndex | string \| number | index, name or caption of the item. |


	
			
Type: boolean
			
			
Accessors: GetItemChecked
			
		
<a name="ItemCount"></a>
#### ItemCount


Number of items.

			
	
			
Type: number
			
			
Accessors: GetItemCount
			
		
<a name="ItemSelected"></a>
#### ItemSelected


Check if item is selected.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| nameCaptionIndex | string \| number | index, name or caption of the item. |


	
			
Type: boolean
			
			
Accessors: GetItemSelected
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoCheckItem"></a>    
#### DoCheckItem(nameCaptionIndex, bCheck)

Checks items of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameCaptionIndex | string \| number |	index, name or caption of the item. |
| bCheck | boolean |	Desired check state for the item. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.mscomlist.docheckitem"></a>

<a name="DoClickItem"></a>    
#### DoClickItem(nameCaptionIndex, clickType, xOffset, yOffset)

Clicks the specified item


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameCaptionIndex | string \| number |	index, name or caption of the item. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click<br>Optional, Default: L. |
| xOffset | number |	X offset to click within object. Default is a center.<br>Optional. |
| yOffset | number |	Y offset to click within object. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.mscomlist.doclickitem"></a>

<a name="DoSelectItem"></a>    
#### DoSelectItem(nameCaptionIndex, bSelect)

Selects items of this object. First it clears existing selection.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameCaptionIndex | string \| number |	index, name or caption of the item. |
| bSelect | boolean |	Desired selected state for the item. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.mscomlist.doselectitem"></a>

	

