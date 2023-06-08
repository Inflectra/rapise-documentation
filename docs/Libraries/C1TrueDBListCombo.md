Summary: Component One True DB Combo Control

# C1TrueDBListCombo

Component One True DB Combo Control
 
Extends [ActiveXObject](ActiveXObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: C1TrueDBListBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Cell](#cell) | Text of the specified cell. | GetCell |  |
| [ColumnCount](#columncount) | Number of columns in the table. | GetColumnCount |  |
| [ColumnName](#columnname) | Caption of a column. | GetColumnName |  |
| [ItemCount](#itemcount) | Number of items. | GetItemCount |  |
| [ItemIndexByName](#itemindexbyname) | Returns item index by its name. | GetItemIndexByName |  |
| [ItemNameByIndex](#itemnamebyindex) | Returns item name by its index. | GetItemNameByIndex |  |
| [RowCount](#rowcount) | Number of rows in the table. | GetRowCount |  |
| [SelectedColumnCount](#selectedcolumncount) | Number of selected columns. | GetSelectedColumnCount |  |
| [SelectedColumns](#selectedcolumns) | Returns string of indexes delimited by separator or array of indexes of selected columns. | GetSelectedColumns |  |
| [SelectedIndices](#selectedindices) | Returns string of indexes delimited by separator or array of indexes of selected elements. | GetSelectedIndices |  |
| [SelectedItems](#selecteditems) | Text of all the selected items in a single string. | GetSelectedItems |  |
| [SelectionCount](#selectioncount) | Number of selected items. | GetSelectionCount |  |
| [Text](#text) | Text of the currently focused cell. | GetText |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoAddSelection](#doaddselection) | Extends selection. |
|	[DoClearSelection](#doclearselection) | Clears selection. |
|	[DoClickItem](#doclickitem) | Clicks the specified cell |
|	[DoFullText](#dofulltext) | Read and return full text contents of the table |
|	[DoRemoveSelection](#doremoveselection) | Removes selection from specified items. |
|	[DoSelectItem](#doselectitem) | Selects items of this object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Cell"></a>
#### Cell


Text of the specified cell.

			
	
			
Type: string
			
			
Accessors: GetCell
			
		
<a name="ColumnCount"></a>
#### ColumnCount


Number of columns in the table.

			
	
			
Type: number
			
			
Accessors: GetColumnCount
			
		
<a name="ColumnName"></a>
#### ColumnName


Caption of a column.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| col | number | Zero-based index of the column. |


	
			
Type: string
			
			
Accessors: GetColumnName
			
		
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
| column | number | Zero-based index of a column |


	
			
Type: string|boolean
			
			
Accessors: GetItemNameByIndex
			
		
<a name="RowCount"></a>
#### RowCount


Number of rows in the table.

			
	
			
Type: number
			
			
Accessors: GetRowCount
			
		
<a name="SelectedColumnCount"></a>
#### SelectedColumnCount


Number of selected columns.

			
	
			
Type: number
			
			
Accessors: GetSelectedColumnCount
			
		
<a name="SelectedColumns"></a>
#### SelectedColumns


Returns string of indexes delimited by separator or array of indexes of selected columns.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| asArray | boolean | If set to true, function returns an array. |
| separator | string | Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |


	
			
Type: array|string
			
			
Accessors: GetSelectedColumns
			
		
<a name="SelectedIndices"></a>
#### SelectedIndices


Returns string of indexes delimited by separator or array of indexes of selected elements.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| asArray | boolean | If set to true, function returns an array. |
| separator | string | Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |


	
			
Type: string
			
			
Accessors: GetSelectedIndices
			
		
<a name="SelectedItems"></a>
#### SelectedItems


Text of all the selected items in a single string. Items are divided by ';' separator.

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| asArray | boolean | If set to true, function returns an array. |
| separator | string | Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |


	
			
Type: string
			
			
Accessors: GetSelectedItems
			
		
<a name="SelectionCount"></a>
#### SelectionCount


Number of selected items.

			
	
			
Type: number
			
			
Accessors: GetSelectionCount
			
		
<a name="Text"></a>
#### Text


Text of the currently focused cell.

			
	
			
Type: string
			
			
Accessors: GetText
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoAddSelection"></a>    
#### DoAddSelection

Extends selection.

```javascript
DoAddSelection(items, separator, itemsType) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| items | number \| string \| array |	Can be one of the following:<br>1. Number, index of an item.<br>2. String, item names delimited with separator.<br>3. String, item indexes delimited with separator.<br>4. Array of item names.<br>5. Array of item indexes. |
| separator | string |	Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| itemsType | string |	If it is 'name' and 'items' parameter is of Stringtype then 'items' parameter is treated as separated item names. If it is'index' and 'items' parameter is of String type then'items' parameter istreated as separated item indexes. If any other value is passed as 'itemsType'the behavior is undefined.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.c1truedblistcombo.doaddselection"></a>

<a name="DoClearSelection"></a>    
#### DoClearSelection

Clears selection.

```javascript
DoClearSelection() 
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.c1truedblistcombo.doclearselection"></a>

<a name="DoClickItem"></a>    
#### DoClickItem

Clicks the specified cell

```javascript
DoClickItem(row, col, clickType, xOffset, yOffset) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| row | number |	Zero-based index if the row. |
| col | number |	Zero-based index of the column. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |
| xOffset | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| yOffset | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise



<a name="see.also.c1truedblistcombo.doclickitem"></a>

<a name="DoFullText"></a>    
#### DoFullText

Read and return full text contents of the table

```javascript
DoFullText() 
```




**Returns:**

string | <br>boolean: Full text of the table (may be very long!), 'false' otherwise



<a name="see.also.c1truedblistcombo.dofulltext"></a>

<a name="DoRemoveSelection"></a>    
#### DoRemoveSelection

Removes selection from specified items.

```javascript
DoRemoveSelection(items, separator, itemsType) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| items | number \| string \| array |	Can be one of the following:<br>1. Number, index of an item.<br>2. String, item names delimited with separator.<br>3. String, item indexes delimited with separator.<br>4. Array of item names.<br>5. Array of item indexes. |
| separator | string |	Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| itemsType | string |	If it is 'name' and 'items' parameter is of Stringtype then 'items' parameter is treated as separated item names. If it is'index' and 'items' parameter is of String type then'items' parameter istreated as separated item indexes. If any other value is passed as 'itemsType'the behavior is undefined.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.c1truedblistcombo.doremoveselection"></a>

<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects items of this object. First it clears existing selection.

```javascript
DoSelectItem(items, separator, itemsType) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| items | number \| string \| array |	Can be one of the following:<br>1. Number, index of an item.<br>2. String, item names delimited with separator.<br>3. String, item indexes delimited with separator.<br>4. Array of item names.<br>5. Array of item indexes. |
| separator | string |	Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| itemsType | string |	If it is 'name' and 'items' parameter is of Stringtype then 'items' parameter is treated as separated item names. If it is'index' and 'items' parameter is of String type then'items' parameter istreated as separated item indexes. If any other value is passed as 'itemsType'the behavior is undefined.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.c1truedblistcombo.doselectitem"></a>

	




**Behavior Pattern: C1TrueDBGridComboBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [SelectedIndex](#selectedindex) | Index of the selected element of the object. | GetSelectedIndex | SetSelectedIndex |
| [SelectedItem](#selecteditem) | Returns the selected item | GetSelectedItem |  |
| [Text](#text) | Returns the text of the selected item | GetText |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSelectItem](#doselectitem) | Selects an item of this object. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="SelectedIndex"></a>
#### SelectedIndex


Index of the selected element of the object.

			
	
			
Type: string
			
			
Accessors: GetSelectedIndex, SetSelectedIndex
			
		
<a name="SelectedItem"></a>
#### SelectedItem


Returns the selected item

			
	
			
Type: string
			
			
Accessors: GetSelectedItem
			
		
<a name="Text"></a>
#### Text


Returns the text of the selected item

			
	
			
Type: string
			
			
Accessors: GetText
			
		
	
	
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



<a name="see.also.c1truedblistcombo.doselectitem"></a>

	

