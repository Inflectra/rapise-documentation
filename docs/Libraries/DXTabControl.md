Summary: DevExpress DXTabControl.

# DXTabControl

DevExpress DXTabControl.
 
UI element class: DevExpress.XtraTab.XtraTabControl

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DXTabControlBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemsCount](#itemscount) | Number of items. | GetItemsCount |  |
| [SelectedIndex](#selectedindex) | Index of the selected element of the object. | GetSelectedIndex | SetSelectedIndex |
| [SelectedTab](#selectedtab) | Text of the selected tab | GetSelectedTab | SetSelectedTab |
| [TabName](#tabname) | Name of the tab at index | GetTabName |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectTab](#doselecttab) | Selects the tab by name. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="ItemsCount"></a>
#### ItemsCount

Number of items.



Type: number


Accessors: GetItemsCount

```javascript
value = SeS('SomeDXTabControl').GetItemsCount()
```


<a name="SelectedIndex"></a>
#### SelectedIndex

Index of the selected element of the object.



Type: number


Accessors: GetSelectedIndex, SetSelectedIndex

```javascript
value = SeS('SomeDXTabControl').GetSelectedIndex()

SeS('SomeDXTabControl').SetSelectedIndex(/**number*/ index)
```


<a name="SelectedTab"></a>
#### SelectedTab

Text of the selected tab



Type: string


Accessors: GetSelectedTab, SetSelectedTab

```javascript
value = SeS('SomeDXTabControl').GetSelectedTab()

SeS('SomeDXTabControl').SetSelectedTab(/*string*/ tabName)
```


<a name="TabName"></a>
#### TabName

Name of the tab at index

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| index | number |  |




Type: string


Accessors: GetTabName

```javascript
value = SeS('SomeDXTabControl').GetTabName(/**number*/ index)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSelectTab"></a>    
#### DoSelectTab

Selects the tab by name.

```javascript
SeS('SomeDXTabControl').DoSelectTab(tabName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |  Tab name to select |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxtabcontrol.doselecttab"></a>

  

