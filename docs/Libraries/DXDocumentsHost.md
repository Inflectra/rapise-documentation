# DXDocumentsHost

Extends ManagedObject.

Extends SeSSimulatedObject.





**Behavior Pattern: DXDocumentsHostBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [DocName](#DocName) | Name of the doc at index | GetDocName |  |
| [ItemsCount](#ItemsCount) | Number of items. | GetItemsCount |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectDoc](#DoSelectDoc) | Selects a doc by name. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="DocName"></a>
#### DocName


Name of the doc at index

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| index |  |  |


	
			
Type: string
			
			
Accessors: GetDocName
			
		
<a name="ItemsCount"></a>
#### ItemsCount


Number of items.

			
	
			
Type: number
			
			
Accessors: GetItemsCount
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectDoc"></a>    
#### DoSelectDoc(docName)

Selects a doc by name.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| docName | string |	Doc name to select |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxdocumentshost.doselectdoc"></a>

	

