Summary: TabStrip20 Control

# TabStrip20

TabStrip20 Control
 
Extends [ActiveXObject](ActiveXObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: TabStrip20Behavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [SelectedTab](#selectedtab) | Text of the selected tab | GetSelectedTab |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectTab](#doselecttab) | Selects the tab by name. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="SelectedTab"></a>
#### SelectedTab

Text of the selected tab



Type: string


Accessors: GetSelectedTab

```javascript
value = SeS('SomeTabStrip20').GetSelectedTab()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSelectTab"></a>    
#### DoSelectTab

Selects the tab by name.

```javascript
SeS('SomeTabStrip20').DoSelectTab(nameCaptionIndex, clickType, xOffset, yOffset)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameCaptionIndex | string \| number |  index, name or caption of the item to be selected. |
| clickType | string |  Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |
| xOffset | number |  X offset to click within node. Default is a center.<br>Optional. |
| yOffset | number |  Y offset to click within node. Default is a center.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.tabstrip20.doselecttab"></a>

  

