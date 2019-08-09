Summary: UI element class: LSRetail.NAV.POSControls.ButtonPad

# NavButtonPad

UI element class: LSRetail.NAV.POSControls.ButtonPad

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: POSControlsButtonPadBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ButtonCaption](#ButtonCaption) | Caption of a button with specified index | GetButtonCaption |  |
| [ColumnCount](#ColumnCount) | Number of columns on a page | GetColumnCount |  |
| [FullInfo](#FullInfo) | JSON-formatted info for all buttons | GetFullInfo |  |
| [FullText](#FullText) | TAB-separated table with button captions | GetFullText |  |
| [PageCount](#PageCount) | Number of pages | GetPageCount |  |
| [RowCount](#RowCount) | Number of rows on a page | GetRowCount |  |
| [ToggleState](#ToggleState) | ToggleState of the button | GetToggleState |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClick](#DoClick) | Click button by caption or no (1-based index) |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ButtonCaption"></a>
#### ButtonCaption


Caption of a button with specified index

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| textOrId | string \| number | button 'no' (1-based index) |


	
			
Type: string
			
			
Accessors: GetButtonCaption
			
		
<a name="ColumnCount"></a>
#### ColumnCount


Number of columns on a page

			
	
			
Type: number
			
			
Accessors: GetColumnCount
			
		
<a name="FullInfo"></a>
#### FullInfo


JSON-formatted info for all buttons

			
	
			
Type: string
			
			
Accessors: GetFullInfo
			
		
<a name="FullText"></a>
#### FullText


TAB-separated table with button captions

			
	
			
Type: string
			
			
Accessors: GetFullText
			
		
<a name="PageCount"></a>
#### PageCount


Number of pages

			
	
			
Type: number
			
			
Accessors: GetPageCount
			
		
<a name="RowCount"></a>
#### RowCount


Number of rows on a page

			
	
			
Type: number
			
			
Accessors: GetRowCount
			
		
<a name="ToggleState"></a>
#### ToggleState


ToggleState of the button

			
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |	
| textOrId | string \| number | caption or 'no' (1-based index) |


	
			
Type: boolean
			
			
Accessors: GetToggleState
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClick"></a>    
#### DoClick(textOrId, timeout)

Click button by caption or no (1-based index)


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| textOrId | string \| number |	caption or 'no' (1-based index) |
| timeout | number |	number of milliseconds to wait for a button to appear<br>Optional, Default: 5000. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.navbuttonpad.doclick"></a>

	

