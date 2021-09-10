Summary: Oracle Forms VPopList.

# VPopList

Oracle Forms VPopList.
 
UI element class: oracle.forms.ui.VPopList

Extends [OracleFormsObject](OracleFormsObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: OracleFormsChoiceBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemIndexByName](#itemindexbyname) | Returns item index by its name. | GetItemIndexByName |  |
| [Value](#value) | Value of the object. | GetValue | SetValue |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectItem](#doselectitem) | Selects an item of this object. |




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
			
		
<a name="Value"></a>
#### Value


Value of the object.

			
	
			
Type: text
			
			
Accessors: GetValue, SetValue
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects an item of this object.

```javascript
DoSelectItem(item) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| item | string \| number |	Item index or text value  to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.vpoplist.doselectitem"></a>

	

