Summary: DevExpress DXDockPanel.

# DXDockPanel

DevExpress DXDockPanel.
 
UI element class: regex:DevExpress.XtraBars.Docking.DockPanel

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DXDockPanelBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemsCount](#itemscount) | Number of items. | GetItemsCount |  |
| [PanelName](#panelname) | Name of the panel at index | GetPanelName |  |
| [SelectedIndex](#selectedindex) | Index of the selected element of the object. | GetSelectedIndex |  |
| [SelectedPanel](#selectedpanel) | Title of the selected panel | GetSelectedPanel |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectPanel](#doselectpanel) | Selects the tab by name. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="ItemsCount"></a>
#### ItemsCount

Number of items.



Type: number


Accessors: GetItemsCount

```javascript
value = SeS('SomeDXDockPanel').GetItemsCount()
```


<a name="PanelName"></a>
#### PanelName

Name of the panel at index

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| index |  |  |




Type: string


Accessors: GetPanelName

```javascript
value = SeS('SomeDXDockPanel').GetPanelName(/**number*/ index)
```


<a name="SelectedIndex"></a>
#### SelectedIndex

Index of the selected element of the object.



Type: number


Accessors: GetSelectedIndex

```javascript
value = SeS('SomeDXDockPanel').GetSelectedIndex()
```


<a name="SelectedPanel"></a>
#### SelectedPanel

Title of the selected panel



Type: string


Accessors: GetSelectedPanel

```javascript
value = SeS('SomeDXDockPanel').GetSelectedPanel()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSelectPanel"></a>    
#### DoSelectPanel

Selects the tab by name.

```javascript
SeS('SomeDXDockPanel').DoSelectPanel(panelName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| panelName | string |  Panel name to select |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxdockpanel.doselectpanel"></a>

  

