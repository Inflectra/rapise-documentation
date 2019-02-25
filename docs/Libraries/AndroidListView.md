# AndroidListView

Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="AndroidObject" styleclass="Normal" translate="true">AndroidObject</link>.

Extends SeSSimulatedObject.





**Behavior Pattern: AndroidObjectListViewSelectableBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemIndexByName](#ItemIndexByName) | Returns item index by its name. | GetItemIndexByName |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectItem](#DoSelectItem) | Selects an item with the specified index. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemIndexByName"></a>
#### ItemIndexByName


Returns item index by its name. 'false' if name is not found.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| name | string |  |


	
			
Type: number|boolean
			
			
Accessors: GetItemIndexByName
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectItem"></a>    
#### DoSelectItem(index)

Selects an item with the specified index.


**Parameters:**

|	** Name ** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	Item index. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.




	

