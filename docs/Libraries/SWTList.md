Summary: Java SWT List.

# SWTList

Java SWT List.
 
Extends [SWTObject](SWTObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: SWTListBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#itemcount) | Number of items. | GetItemCount | SetItemCount |
| [ItemIndexByName](#itemindexbyname) | Returns item index by its name. | GetItemIndexByName |  |
| [ItemNameByIndex](#itemnamebyindex) | Returns item name by its index. | GetItemNameByIndex |  |
| [SelectedIndex](#selectedindex) | Index of the selected element of the object. | GetSelectedIndex |  |
| [SelectedIndices](#selectedindices) | Returns string of indexes delimited by separator or array of indexes of selected elements. | GetSelectedIndices |  |
| [SelectedItems](#selecteditems) | Text of all the selected items in a single string. | GetSelectedItems | SetSelectedItems |
| [SelectedText](#selectedtext) | Text of the selected item in a single string. | GetSelectedText | SetSelectedText |
| [SelectionCount](#selectioncount) | Number of selected items. | GetSelectionCount | SetSelectionCount |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoAddSelection](#doaddselection) | Extends selection. |
|  [DoClickItem](#doclickitem) | Performs click on the item |
|  [DoRemoveSelection](#doremoveselection) | Removes selection from specified items. |
|  [DoSelectItem](#doselectitem) | Selects items of this object. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="ItemCount"></a>
#### ItemCount

Number of items.



Type: number


Accessors: GetItemCount, SetItemCount

```javascript
value = SeS('SomeSWTList').GetItemCount()

SeS('SomeSWTList').SetItemCount()
```


<a name="ItemIndexByName"></a>
#### ItemIndexByName

Returns item index by its name. 'false' if name is not found.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| name | string |  |




Type: number|boolean


Accessors: GetItemIndexByName

```javascript
value = SeS('SomeSWTList').GetItemIndexByName(name)
```


<a name="ItemNameByIndex"></a>
#### ItemNameByIndex

Returns item name by its index.'false' if name is not found.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| index | number | Index of the item |




Type: string|boolean


Accessors: GetItemNameByIndex

```javascript
value = SeS('SomeSWTList').GetItemNameByIndex(index)
```


<a name="SelectedIndex"></a>
#### SelectedIndex

Index of the selected element of the object.



Type: number


Accessors: GetSelectedIndex

```javascript
value = SeS('SomeSWTList').GetSelectedIndex()
```


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

```javascript
value = SeS('SomeSWTList').GetSelectedIndices(asArray, separator)
```


<a name="SelectedItems"></a>
#### SelectedItems

Text of all the selected items in a single string. Items are divided by ';' separator.



Type: string


Accessors: GetSelectedItems, SetSelectedItems

```javascript
value = SeS('SomeSWTList').GetSelectedItems()

SeS('SomeSWTList').SetSelectedItems()
```


<a name="SelectedText"></a>
#### SelectedText

Text of the selected item in a single string.



Type: string


Accessors: GetSelectedText, SetSelectedText

```javascript
value = SeS('SomeSWTList').GetSelectedText()

SeS('SomeSWTList').SetSelectedText(itemtext)
```


<a name="SelectionCount"></a>
#### SelectionCount

Number of selected items.



Type: number


Accessors: GetSelectionCount, SetSelectionCount

```javascript
value = SeS('SomeSWTList').GetSelectionCount()

SeS('SomeSWTList').SetSelectionCount()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoAddSelection"></a>    
#### DoAddSelection

Extends selection.

```javascript
SeS('SomeSWTList').DoAddSelection(items, separator, itemsType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| items | number \| string \| array |  Can be one of the following:<br>1. Number, index of an item.<br>2. String, item names delimited with separator.<br>3. String, item indexes delimited with separator.<br>4. Array of item names.<br>5. Array of item indexes. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| itemsType | string |  If it is 'name' and 'items' parameter is of Stringtype then 'items' parameter is treated as separated item names. If it is'index' and 'items' parameter is of String type then'items' parameter istreated as separated item indexes. If any other value is passed as 'itemsType'the behavior is undefined.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.swtlist.doaddselection"></a>

<a name="DoClickItem"></a>    
#### DoClickItem

Performs click on the item

```javascript
SeS('SomeSWTList').DoClickItem(nameCaptionIndex, xOffset, yOffset, clickType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameCaptionIndex | string \| number |  index, name or caption of the item to be selected. |
| xOffset | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| yOffset | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |
| clickType | string |  Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |




**Returns:**

boolean: 'true' if successful, 'false' otherwise.



<a name="see.also.swtlist.doclickitem"></a>

<a name="DoRemoveSelection"></a>    
#### DoRemoveSelection

Removes selection from specified items.

```javascript
SeS('SomeSWTList').DoRemoveSelection(items, separator, itemsType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| items | number \| string \| array |  Can be one of the following:<br>1. Number, index of an item.<br>2. String, item names delimited with separator.<br>3. String, item indexes delimited with separator.<br>4. Array of item names.<br>5. Array of item indexes. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| itemsType | string |  If it is 'name' and 'items' parameter is of Stringtype then 'items' parameter is treated as separated item names. If it is'index' and 'items' parameter is of String type then'items' parameter istreated as separated item indexes. If any other value is passed as 'itemsType'the behavior is undefined.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.swtlist.doremoveselection"></a>

<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects items of this object. First it clears existing selection.

```javascript
SeS('SomeSWTList').DoSelectItem(items, separator, itemsType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| items | number \| string \| array |  Can be one of the following:<br>1. Number, index of an item.<br>2. String, item names delimited with separator.<br>3. String, item indexes delimited with separator.<br>4. Array of item names.<br>5. Array of item indexes. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| itemsType | string |  If it is 'name' and 'items' parameter is of Stringtype then 'items' parameter is treated as separated item names. If it is'index' and 'items' parameter is of String type then'items' parameter istreated as separated item indexes. If any other value is passed as 'itemsType'the behavior is undefined.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.swtlist.doselectitem"></a>

  

