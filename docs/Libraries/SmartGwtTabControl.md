Summary: DOM SmartGwt SmartGwtTabControl.

# SmartGwtTabControl

DOM SmartGwt SmartGwtTabControl.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DomSmartGwtTabControlBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemsCount](#itemscount) | Number of items. | GetItemsCount |  |
| [SelectedIndex](#selectedindex) | Index of the selected element of the object. | GetSelectedIndex |  |
| [SelectedTab](#selectedtab) | Text of the selected tab | GetSelectedTab |  |



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
value = SeS('SomeSmartGwtTabControl').GetItemsCount()
```


<a name="SelectedIndex"></a>
#### SelectedIndex

Index of the selected element of the object.



Type: number


Accessors: GetSelectedIndex

```javascript
value = SeS('SomeSmartGwtTabControl').GetSelectedIndex()
```


<a name="SelectedTab"></a>
#### SelectedTab

Text of the selected tab



Type: string


Accessors: GetSelectedTab

```javascript
value = SeS('SomeSmartGwtTabControl').GetSelectedTab()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSelectTab"></a>    
#### DoSelectTab

Selects the tab by name.

```javascript
SeS('SomeSmartGwtTabControl').DoSelectTab(tabName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |  Tab name to select |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.smartgwttabcontrol.doselecttab"></a>

  

