Summary: Infragistics UltraExplorerBar.

# UltraExplorerBar

Infragistics UltraExplorerBar.
UltraExplorerBar
UI element class: Infragistics.Win.UltraWinExplorerBar.UltraExplorerBar

Extends [ManagedObject](ManagedObject.md)





**Behavior Pattern: UltraExplorerBarControlBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ActiveGroup](#activegroup) | Text of the active group. | GetActiveGroup |  |
| [ActiveItem](#activeitem) | Text of the active item. | GetActiveItem |  |
| [GroupCount](#groupcount) | Number of groups in this explorer bar. | GetGroupCount |  |
| [Item](#item) | Caption of the item specified by index | GetItem |  |
| [ItemCount](#itemcount) | Number of items in this explorer bar. | GetItemCount |  |
| [SelectedGroup](#selectedgroup) | Text of the selected group. | GetSelectedGroup |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickItem](#doclickitem) | Performs click on the navigation item |
|  [DoCollapseGroup](#docollapsegroup) | Collapses specific group in the explorer bar. |
|  [DoExpandGroup](#doexpandgroup) | Expand (or make active) the navigation group |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="ActiveGroup"></a>
#### ActiveGroup

Text of the active group.



Type: 


Accessors: GetActiveGroup

```javascript
value = SeS('SomeUltraExplorerBar').GetActiveGroup()
```


<a name="ActiveItem"></a>
#### ActiveItem

Text of the active item.



Type: 


Accessors: GetActiveItem

```javascript
value = SeS('SomeUltraExplorerBar').GetActiveItem()
```


<a name="GroupCount"></a>
#### GroupCount

Number of groups in this explorer bar.



Type: 


Accessors: GetGroupCount

```javascript
value = SeS('SomeUltraExplorerBar').GetGroupCount()
```


<a name="Item"></a>
#### Item

Caption of the item specified by index

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| ind | number | Index of an item to get caption |




Type: string


Accessors: GetItem

```javascript
value = SeS('SomeUltraExplorerBar').GetItem(/**number*/ind)
```


<a name="ItemCount"></a>
#### ItemCount

Number of items in this explorer bar. All items may then be accessed by SeS(<explorerbar>).GetItem(ind)



Type: 


Accessors: GetItemCount

```javascript
value = SeS('SomeUltraExplorerBar').GetItemCount()
```


<a name="SelectedGroup"></a>
#### SelectedGroup

Text of the selected group.



Type: 


Accessors: GetSelectedGroup

```javascript
value = SeS('SomeUltraExplorerBar').GetSelectedGroup()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClickItem"></a>    
#### DoClickItem

Performs click on the navigation item

```javascript
SeS('SomeUltraExplorerBar').DoClickItem(nameCaptionIndex)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameCaptionIndex | string \| number |  index, name or caption of the item to be selected. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise.



<a name="see.also.ultraexplorerbar.doclickitem"></a>

<a name="DoCollapseGroup"></a>    
#### DoCollapseGroup

Collapses specific group in the explorer bar.

```javascript
SeS('SomeUltraExplorerBar').DoCollapseGroup(nameCaptionIndex)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameCaptionIndex | string \| number |  Name, caption or index of the group. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultraexplorerbar.docollapsegroup"></a>

<a name="DoExpandGroup"></a>    
#### DoExpandGroup

Expand (or make active) the navigation group

```javascript
SeS('SomeUltraExplorerBar').DoExpandGroup(nameCaptionIndex)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameCaptionIndex | string \| number |  index, name or caption of the item to be selected. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise.



<a name="see.also.ultraexplorerbar.doexpandgroup"></a>

  

