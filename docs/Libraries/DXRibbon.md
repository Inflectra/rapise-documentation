Summary: DevXpress Ribbon.

# DXRibbon

DevXpress Ribbon.
 
UI element class: DevExpress.XtraBars.Ribbon.RibbonControl

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DXRibbonControlBehavior**


<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickApplicationButton](#doclickapplicationbutton) | Clicks an application button on the ribbon. |
|	[DoClickGalleryItem](#doclickgalleryitem) | Select a gallery item in the Ribbon gallery control. |
|	[DoClickItem](#doclickitem) | Clicks on an item on the ribbon. |
|	[DoClickTab](#doclicktab) | Clicks on a tab in the ribbon. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickApplicationButton"></a>    
#### DoClickApplicationButton

Clicks an application button on the ribbon.

```javascript
DoClickApplicationButton(caption, xOffset, yOffset) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |	Caption of the application button to click. |
| xOffset | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| yOffset | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxribbon.doclickapplicationbutton"></a>

<a name="DoClickGalleryItem"></a>    
#### DoClickGalleryItem

Select a gallery item in the Ribbon gallery control.

```javascript
DoClickGalleryItem(gallery, galleryItem, bNewValue, bUncheckOthers) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| gallery | string \| number |	Gallery control identifier in the Ribbon. |
| galleryItem | string \| number |	Caption or index of item to click. |
| bNewValue | boolean |	New checked value for an item<br>Optional, Default: "true". |
| bUncheckOthers | boolean |	set to 'false' if this click is a part of multi-selection<br>Optional, Default: "true". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxribbon.doclickgalleryitem"></a>

<a name="DoClickItem"></a>    
#### DoClickItem

Clicks on an item on the ribbon.

```javascript
DoClickItem(caption, xOffset, yOffset) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |	Caption of an item to click. |
| xOffset | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| yOffset | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxribbon.doclickitem"></a>

<a name="DoClickTab"></a>    
#### DoClickTab

Clicks on a tab in the ribbon.

```javascript
DoClickTab(caption, xOffset, yOffset) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| caption | string |	Caption of a tab to click. |
| xOffset | number |	X offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the width.<br>Optional. |
| yOffset | number |	Y offset to click within object. Calculated from the top-left corner. Default is a center. Floating point in the range (-2, 2) means percentage of the height.<br>Optional. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dxribbon.doclicktab"></a>

	

