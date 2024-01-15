Summary: Oracle Forms OFToolBar.

# OFToolBar

Oracle Forms OFToolBar.
 
UI element class: oracle.ewt.toolBar.ToolBar

Extends [OracleFormsObject](OracleFormsObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: OracleFormsToolBarBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemChecked](#itemchecked) | Check if item is checked. | GetItemChecked | SetItemChecked |
| [ItemIndexByName](#itemindexbyname) | Returns item index by its name. | GetItemIndexByName |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickItem](#doclickitem) | Performs click on the navigation item |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="ItemChecked"></a>
#### ItemChecked

Check if item is checked.



Type: boolean


Accessors: GetItemChecked, SetItemChecked

```javascript
value = SeS('SomeOFToolBar').GetItemChecked(nameOrInd)

SeS('SomeOFToolBar').SetItemChecked(nameOrInd, bValue)
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
value = SeS('SomeOFToolBar').GetItemIndexByName(name)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClickItem"></a>    
#### DoClickItem

Performs click on the navigation item

```javascript
SeS('SomeOFToolBar').DoClickItem(nameCaptionIndex)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameCaptionIndex | string \| number |  index, name or caption of the item to be selected. |




**Returns:**

boolean: 'true' if successful, 'false' otherwise.



<a name="see.also.oftoolbar.doclickitem"></a>

  

