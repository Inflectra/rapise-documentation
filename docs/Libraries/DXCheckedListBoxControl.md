# DXCheckedListBoxControl

DevXpress CheckedListBoxControl.
 
Extends ManagedObject.

Extends SeSSimulatedObject.





**Behavior Pattern: DXCheckedListBoxControlBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [CheckedCount](#CheckedCount) | Returns number of checked items in ListView. | GetCheckedCount |  |
| [CheckedIndices](#CheckedIndices) | Array of indices of checked elements. | GetCheckedIndices |  |
| [CheckedItems](#CheckedItems) | Array of item names of checked elements. | GetCheckedItems |  |
| [ItemCount](#ItemCount) | Number of items. | GetItemCount |  |
| [ItemIndexByName](#ItemIndexByName) | Returns item index by its name. | GetItemIndexByName |  |
| [ItemNameByIndex](#ItemNameByIndex) | Returns item name by its index. | GetItemNameByIndex |  |
| [SelectedIndex](#SelectedIndex) | Index of the selected element of the object. | GetSelectedIndex | SetSelectedIndex |
| [SelectedIndices](#SelectedIndices) | Returns string of indexes delimited by separator or array of indexes of selected elements. | GetSelectedIndices |  |
| [SelectedItems](#SelectedItems) | Text of all the selected items in a single string. | GetSelectedItems |  |
| [SelectedText](#SelectedText) | Text of the selected item in a single string. | GetSelectedText |  |
| [SelectionCount](#SelectionCount) | Number of selected items. | GetSelectionCount |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoAddSelection](#DoAddSelection) | Extends selection. |
|	[DoCheckItem](#DoCheckItem) | Checks items of this object. |
|	[DoClearSelection](#DoClearSelection) | Clears selection. |
|	[DoRemoveSelection](#DoRemoveSelection) | Removes selection from specified items. |
|	[DoSelectItem](#DoSelectItem) | Selects items of this object. |
|	[DoSetCheck](#DoSetCheck) | Sets 'checked' state of the specified node. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="CheckedCount"></a>
#### CheckedCount


Returns number of checked items in ListView.

			
	
			
Type: number
			
			
Accessors: GetCheckedCount
			
		
<a name="CheckedIndices"></a>
#### CheckedIndices


Array of indices of checked elements.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| asArray | boolean | If set to true, function returns an array. |
| separator | string | Separator character.<br>Optional, Default: ;. |


	
			
Type: array|string
			
			
Accessors: GetCheckedIndices
			
		
<a name="CheckedItems"></a>
#### CheckedItems


Array of item names of checked elements.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| asArray | boolean | If set to true, function returns an array. |
| separator | string | Separator character.<br>Optional, Default: ;. |


	
			
Type: array|string
			
			
Accessors: GetCheckedItems
			
		
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
			
		
<a name="ItemNameByIndex"></a>
#### ItemNameByIndex


Returns item name by its index.'false' if name is not found.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| index | number | Index of the item |


	
			
Type: string|boolean
			
			
Accessors: GetItemNameByIndex
			
		
<a name="SelectedIndex"></a>
#### SelectedIndex


Index of the selected element of the object.

			
	
			
Type: number
			
			
Accessors: GetSelectedIndex, SetSelectedIndex
			
		
<a name="SelectedIndices"></a>
#### SelectedIndices


Returns string of indexes delimited by separator or array of indexes of selected elements.

			
	
			
Type: string
			
			
Accessors: GetSelectedIndices
			
		
<a name="SelectedItems"></a>
#### SelectedItems


Text of all the selected items in a single string. Items are divided by ';' separator.

			
	
			
Type: string
			
			
Accessors: GetSelectedItems
			
		
<a name="SelectedText"></a>
#### SelectedText


Text of the selected item in a single string.

			
	
			
Type: string
			
			
Accessors: GetSelectedText
			
		
<a name="SelectionCount"></a>
#### SelectionCount


Number of selected items.

			
	
			
Type: number
			
			
Accessors: GetSelectionCount
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoAddSelection"></a>    
#### DoAddSelection(items, separator, itemsType)

Extends selection.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| items | number \| string|array |	Can be one of the following:<br>1. Number, index of an item.<br>2. String, item names delimited with separator.<br>3. String, item indexes delimited with separator.<br>4. Array of item names.<br>5. Array of item indexes. |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| itemsType | string |	If it is 'name' and 'items' parameter is of Stringtype then 'items' parameter is treated as separated item names. If it is'index' and 'items' parameter is of String type then'items' parameter istreated as separated item indexes. If any other value is passed as 'itemsType'the behavior is undefined.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxcheckedlistboxcontrol.doaddselection"></a>

<a name="DoCheckItem"></a>    
#### DoCheckItem(items, separator, itemsType)

Checks items of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| items | number \| string|array |	Can be one of the following:<br>1. Number, index of an item.<br>2. String, item names delimited with separator.<br>3. String, item indexes delimited with separator.<br>4. Array of item names.<br>5. Array of item indexes. |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| itemsType | string |	If it is 'name' and 'items' parameter is of Stringtype then 'items' parameter is treated as separated item names. If it is'index' and 'items' parameter is of String type then'items' parameter istreated as separated item indexes. If any other value is passed as 'itemsType'the behavior is undefined.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxcheckedlistboxcontrol.docheckitem"></a>

<a name="DoClearSelection"></a>    
#### DoClearSelection()

Clears selection.




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxcheckedlistboxcontrol.doclearselection"></a>

<a name="DoRemoveSelection"></a>    
#### DoRemoveSelection(items, separator, itemsType)

Removes selection from specified items.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| items | number \| string|array |	Can be one of the following:<br>1. Number, index of an item.<br>2. String, item names delimited with separator.<br>3. String, item indexes delimited with separator.<br>4. Array of item names.<br>5. Array of item indexes. |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| itemsType | string |	If it is 'name' and 'items' parameter is of Stringtype then 'items' parameter is treated as separated item names. If it is'index' and 'items' parameter is of String type then'items' parameter istreated as separated item indexes. If any other value is passed as 'itemsType'the behavior is undefined.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxcheckedlistboxcontrol.doremoveselection"></a>

<a name="DoSelectItem"></a>    
#### DoSelectItem(items, separator, itemsType)

Selects items of this object. First it clears existing selection.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| items | number \| string|array |	Can be one of the following:<br>1. Number, index of an item.<br>2. String, item names delimited with separator.<br>3. String, item indexes delimited with separator.<br>4. Array of item names.<br>5. Array of item indexes. |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| itemsType | string |	If it is 'name' and 'items' parameter is of Stringtype then 'items' parameter is treated as separated item names. If it is'index' and 'items' parameter is of String type then'items' parameter istreated as separated item indexes. If any other value is passed as 'itemsType'the behavior is undefined.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxcheckedlistboxcontrol.doselectitem"></a>

<a name="DoSetCheck"></a>    
#### DoSetCheck(bcheck, items, separator, itemsType)

Sets 'checked' state of the specified node.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bcheck | boolean |	Desired check state for the button. |
| items | number \| string|array |	Can be one of the following:<br>1. Number, index of an item.<br>2. String, item names delimited with separator.<br>3. String, item indexes delimited with separator.<br>4. Array of item names.<br>5. Array of item indexes. |
| separator | string |	Separator character.<br>Optional, Default: ;. |
| itemsType | string |	If it is 'name' and 'items' parameter is of Stringtype then 'items' parameter is treated as separated item names. If it is'index' and 'items' parameter is of String type then'items' parameter istreated as separated item indexes. If any other value is passed as 'itemsType'the behavior is undefined.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxcheckedlistboxcontrol.dosetcheck"></a>

	

