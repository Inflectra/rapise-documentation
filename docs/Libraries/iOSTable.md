# iOSTable

Extends [iOSObject](iOSObject.md)





**Behavior Pattern: iOSObjectTableSelectableBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#ItemCount) | Number of items. | GetItemCount |  |
| [ItemIndexByName](#ItemIndexByName) | Returns item index by its name. | GetItemIndexByName |  |
| [ItemTextAt](#ItemTextAt) | Text of the item at the specified index | GetItemTextAt |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectItem](#DoSelectItem) | Selects an item with the specified index. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemCount"></a>
#### ItemCount


Number of items.

			
	
			
Type: number
			
			
Accessors: GetItemCount
			
		
<a name="ItemIndexByName"></a>
#### ItemIndexByName


Returns item index by its name. 'false' if name is not found.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| name | string |  |


	
			
Type: number|boolean
			
			
Accessors: GetItemIndexByName
			
		
<a name="ItemTextAt"></a>
#### ItemTextAt


Text of the item at the specified index

			
	
			
Type: string
			
			
Accessors: GetItemTextAt
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectItem"></a>    
#### DoSelectItem(index)

Selects an item with the specified index.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	Item index. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iostable.doselectitem"></a>

	

