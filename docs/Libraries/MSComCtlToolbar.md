Summary: Microsoft Windows Toolbar Control

# MSComCtlToolbar

Microsoft Windows Toolbar Control
 
Extends [ActiveXObject](ActiveXObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: MSComCtlToolbarBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCaption](#itemcaption) | The caption of the button on the toolbar | GetItemCaption |  |
| [ItemCount](#itemcount) | The number of the items in the toolbar | GetItemCount |  |
| [ItemStyle](#itemstyle) | The style of the button on the toolbar | GetItemStyle |  |
| [ItemValue](#itemvalue) | Returns 'true' if element with nameCaptionIndex has value | GetItemValue |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickItem](#doclickitem) | ClickItem |
|	[DoSetCheck](#dosetcheck) | SetCheck |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemCaption"></a>
#### ItemCaption


The caption of the button on the toolbar

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| nameCaptionIndex | number \| string | Index, name or caption of the item. |


	
			
Type: string
			
			
Accessors: GetItemCaption
			
		
<a name="ItemCount"></a>
#### ItemCount


The number of the items in the toolbar

			
	
			
Type: number
			
			
Accessors: GetItemCount
			
		
<a name="ItemStyle"></a>
#### ItemStyle


The style of the button on the toolbar

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| nameCaptionIndex | number \| string | Index, name or caption of the item. |


	
			
Type: number
			
			
Accessors: GetItemStyle
			
		
<a name="ItemValue"></a>
#### ItemValue


Returns 'true' if element with nameCaptionIndex has value

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| nameCaptionIndex | number \| string | Index, name or caption of the item. |


	
			
Type: boolean
			
			
Accessors: GetItemValue
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickItem"></a>    
#### DoClickItem

ClickItem

```javascript
DoClickItem(nameCaptionIndex, clickType, xOffset, yOffset) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameCaptionIndex | string \| number |	index, name or caption of the item to be selected. |
| clickType | string |	Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |
| xOffset | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |
| yOffset | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height (requires Rapise 6.5+, also requires native events mode in Web tests).<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.mscomctltoolbar.doclickitem"></a>

<a name="DoSetCheck"></a>    
#### DoSetCheck

SetCheck

```javascript
DoSetCheck(bcheck, nameCaptionIndex) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| bcheck | boolean |	Check state to set |
| nameCaptionIndex | string \| number |	index, name or caption of the item to be selected. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.mscomctltoolbar.dosetcheck"></a>

	

