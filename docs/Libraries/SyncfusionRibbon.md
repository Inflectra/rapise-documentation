Summary: This behavior pattern implements standard behavior for Ribbon control.

# SyncfusionRibbon

This behavior pattern implements standard behavior for Ribbon control.
 
UI element class: Syncfusion.Windows.Forms.Tools.RibbonControlAdv

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: SyncfusionRibbonBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [SelectedTab](#selectedtab) | Text of the selected tab | GetSelectedTab | SetSelectedTab |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickItem](#doclickitem) | Performs click on the ribbon item given by caption or tooltip text |
|  [DoSelectTab](#doselecttab) | Selects the tab by name. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="SelectedTab"></a>
#### SelectedTab

Text of the selected tab



Type: string


Accessors: GetSelectedTab, SetSelectedTab

```javascript
value = SeS('SomeSyncfusionRibbon').GetSelectedTab()

SeS('SomeSyncfusionRibbon').SetSelectedTab(/**string*/value)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClickItem"></a>    
#### DoClickItem

Performs click on the ribbon item given by caption or tooltip text

```javascript
SeS('SomeSyncfusionRibbon').DoClickItem(captionOrTooltip)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| captionOrTooltip | string \| number |  caption or tooltip text of the item to click. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.syncfusionribbon.doclickitem"></a>

<a name="DoSelectTab"></a>    
#### DoSelectTab

Selects the tab by name.

```javascript
SeS('SomeSyncfusionRibbon').DoSelectTab(tabName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |  Tab name to select |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.syncfusionribbon.doselecttab"></a>

  

