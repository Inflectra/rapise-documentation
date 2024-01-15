Summary: Infragistics UltraRibbon.

# UltraRibbon

Infragistics UltraRibbon.
 
UI element class: Infragistics.Win.UltraWinToolbars.UltraToolbarsDockArea

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: UltraRibbonControlBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [DropdownCount](#dropdowncount) | NUmber of dropdown controls. | GetDropdownCount |  |
| [ItemValue](#itemvalue) | Value of an item. | GetItemValue |  |
| [ToggleState](#togglestate) | Toggle state of a button | GetToggleState |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickApplicationButton](#doclickapplicationbutton) | Clicks an application button on the ribbon. |
|  [DoClickItem](#doclickitem) | Clicks on an item on the ribbon. |
|  [DoClickTab](#doclicktab) | Clicks on a tab in the ribbon. |
|  [DoItemDropSelect](#doitemdropselect) | Clicks specific item in the drop control. |
|  [DoMenu](#domenu) | Performs click on the menu item. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="DropdownCount"></a>
#### DropdownCount

NUmber of dropdown controls.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| caption | string | Name of a dropdown. |




Type: number


Accessors: GetDropdownCount

```javascript
value = SeS('SomeUltraRibbon').GetDropdownCount(caption)
```


<a name="ItemValue"></a>
#### ItemValue

Value of an item.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| caption | string | Name of an item. |




Type: string|number|boolean


Accessors: GetItemValue

```javascript
value = SeS('SomeUltraRibbon').GetItemValue(caption)
```


<a name="ToggleState"></a>
#### ToggleState

Toggle state of a button

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| caption | string | Name of a button. |




Type: boolean


Accessors: GetToggleState

```javascript
value = SeS('SomeUltraRibbon').GetToggleState(caption)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClickApplicationButton"></a>    
#### DoClickApplicationButton

Clicks an application button on the ribbon.

```javascript
SeS('SomeUltraRibbon').DoClickApplicationButton(xOffset, yOffset)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| xOffset | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| yOffset | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultraribbon.doclickapplicationbutton"></a>

<a name="DoClickItem"></a>    
#### DoClickItem

Clicks on an item on the ribbon.

```javascript
SeS('SomeUltraRibbon').DoClickItem(caption, xOffset, yOffset)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |  Caption of an item to click. |
| xOffset | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| yOffset | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultraribbon.doclickitem"></a>

<a name="DoClickTab"></a>    
#### DoClickTab

Clicks on a tab in the ribbon.

```javascript
SeS('SomeUltraRibbon').DoClickTab(caption, xOffset, yOffset)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |  Caption of a tab to click. |
| xOffset | number |  X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| yOffset | number |  Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultraribbon.doclicktab"></a>

<a name="DoItemDropSelect"></a>    
#### DoItemDropSelect

Clicks specific item in the drop control.

```javascript
SeS('SomeUltraRibbon').DoItemDropSelect(caption, item)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |  Caption of the drop control. |
| item | string |  Item to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultraribbon.doitemdropselect"></a>

<a name="DoMenu"></a>    
#### DoMenu

Performs click on the menu item.

```javascript
SeS('SomeUltraRibbon').DoMenu(path, separator)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| separator | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultraribbon.domenu"></a>

  

