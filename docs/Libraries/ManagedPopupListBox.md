Summary: Managed ManagedPopupListBox.

# ManagedPopupListBox

Managed ManagedPopupListBox.
 
UI element class: System.Windows.Forms.PropertyGridInternal.PropertyGridView+GridViewListBox

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: ManagedObjectListBoxSelectableBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#itemcount) | Number of items. | GetItemCount |  |
| [ItemIndexByName](#itemindexbyname) | Returns item index by its name. | GetItemIndexByName |  |
| [ItemNameByIndex](#itemnamebyindex) | Returns item name by its index. | GetItemNameByIndex |  |
| [SelectedIndex](#selectedindex) | Index of the selected element of the object. | GetSelectedIndex | SetSelectedIndex |
| [SelectedIndices](#selectedindices) | Returns string of indexes delimited by separator or array of indexes of selected elements. | GetSelectedIndices |  |
| [SelectedItems](#selecteditems) | Text of all the selected items in a single string. | GetSelectedItems |  |
| [SelectedText](#selectedtext) | Text of the selected item in a single string. | GetSelectedText |  |
| [SelectionCount](#selectioncount) | Number of selected items. | GetSelectionCount |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoAddSelection](#doaddselection) | Extends selection. |
|  [DoClearSelection](#doclearselection) | Clears selection. |
|  [DoRemoveSelection](#doremoveselection) | Removes selection from specified items. |
|  [DoSelectItem](#doselectitem) | Selects items of this object. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="ItemCount"></a>
#### ItemCount

Number of items.



Type: number


Accessors: GetItemCount

```javascript
value = SeS('SomeManagedPopupListBox').GetItemCount()
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
value = SeS('SomeManagedPopupListBox').GetItemIndexByName(name)
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
value = SeS('SomeManagedPopupListBox').GetItemNameByIndex(index)
```


<a name="SelectedIndex"></a>
#### SelectedIndex

Index of the selected element of the object.



Type: number


Accessors: GetSelectedIndex, SetSelectedIndex

```javascript
value = SeS('SomeManagedPopupListBox').GetSelectedIndex()

SeS('SomeManagedPopupListBox').SetSelectedIndex(value)
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
value = SeS('SomeManagedPopupListBox').GetSelectedIndices(asArray, separator)
```


<a name="SelectedItems"></a>
#### SelectedItems

Text of all the selected items in a single string. Items are divided by ';' separator.



Type: string


Accessors: GetSelectedItems

```javascript
value = SeS('SomeManagedPopupListBox').GetSelectedItems()
```


<a name="SelectedText"></a>
#### SelectedText

Text of the selected item in a single string.



Type: string


Accessors: GetSelectedText

```javascript
value = SeS('SomeManagedPopupListBox').GetSelectedText()
```


<a name="SelectionCount"></a>
#### SelectionCount

Number of selected items.



Type: number


Accessors: GetSelectionCount

```javascript
value = SeS('SomeManagedPopupListBox').GetSelectionCount()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoAddSelection"></a>    
#### DoAddSelection

Extends selection.

```javascript
SeS('SomeManagedPopupListBox').DoAddSelection(items, separator, itemsType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| items | number \| string \| array |  Can be one of the following:<br>1. Number, index of an item.<br>2. String, item names delimited with separator.<br>3. String, item indexes delimited with separator.<br>4. Array of item names.<br>5. Array of item indexes. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| itemsType | string |  If it is 'name' and 'items' parameter is of Stringtype then 'items' parameter is treated as separated item names. If it is'index' and 'items' parameter is of String type then'items' parameter istreated as separated item indexes. If any other value is passed as 'itemsType'the behavior is undefined.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedpopuplistbox.doaddselection"></a>

<a name="DoClearSelection"></a>    
#### DoClearSelection

Clears selection.

```javascript
SeS('SomeManagedPopupListBox').DoClearSelection()
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedpopuplistbox.doclearselection"></a>

<a name="DoRemoveSelection"></a>    
#### DoRemoveSelection

Removes selection from specified items.

```javascript
SeS('SomeManagedPopupListBox').DoRemoveSelection(items, separator, itemsType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| items | number \| string \| array |  Can be one of the following:<br>1. Number, index of an item.<br>2. String, item names delimited with separator.<br>3. String, item indexes delimited with separator.<br>4. Array of item names.<br>5. Array of item indexes. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| itemsType | string |  If it is 'name' and 'items' parameter is of Stringtype then 'items' parameter is treated as separated item names. If it is'index' and 'items' parameter is of String type then'items' parameter istreated as separated item indexes. If any other value is passed as 'itemsType'the behavior is undefined.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedpopuplistbox.doremoveselection"></a>

<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects items of this object. First it clears existing selection.

```javascript
SeS('SomeManagedPopupListBox').DoSelectItem(items, separator, itemsType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| items | number \| string \| array |  Can be one of the following:<br>1. Number, index of an item.<br>2. String, item names delimited with separator.<br>3. String, item indexes delimited with separator.<br>4. Array of item names.<br>5. Array of item indexes. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |
| itemsType | string |  If it is 'name' and 'items' parameter is of Stringtype then 'items' parameter is treated as separated item names. If it is'index' and 'items' parameter is of String type then'items' parameter istreated as separated item indexes. If any other value is passed as 'itemsType'the behavior is undefined.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedpopuplistbox.doselectitem"></a>

  

