Summary: GWT-Ext Tab.

# GWTExtTabPanel

GWT-Ext Tab.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: GWTExtTabPanelBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemsCount](#itemscount) | Number of tabs in the panel | GetItemsCount |  |
| [SelectedIndex](#selectedindex) | Index of the selected tab | GetSelectedIndex |  |
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

Number of tabs in the panel



Type: number


Accessors: GetItemsCount

```javascript
value = SeS('SomeGWTExtTabPanel').GetItemsCount()
```


<a name="SelectedIndex"></a>
#### SelectedIndex

Index of the selected tab



Type: number


Accessors: GetSelectedIndex

```javascript
value = SeS('SomeGWTExtTabPanel').GetSelectedIndex()
```


<a name="SelectedTab"></a>
#### SelectedTab

Text of the selected tab



Type: string


Accessors: GetSelectedTab

```javascript
value = SeS('SomeGWTExtTabPanel').GetSelectedTab()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSelectTab"></a>    
#### DoSelectTab

Selects the tab by name.

```javascript
SeS('SomeGWTExtTabPanel').DoSelectTab(name, x, y, forceEvent)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string \| number |  Tab name to select |
| x | number |  X-coordinate of location relative to object's left border |
| y | number |  Y-coordinate of location relative to object's top border |
| forceEvent | boolean |  pass 'true' to force browser event without actual mouse click.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.gwtexttabpanel.doselecttab"></a>

  

