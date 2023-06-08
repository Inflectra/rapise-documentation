Summary: Managed PropertyGrid.

# ManagedPropertyGrid

Managed PropertyGrid.
 
UI element class: System.Windows.Forms.PropertyGridInternal.PropertyGridView

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: ManagedPropertyGridBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Expanded](#expanded) | True if selected item is expanded | GetExpanded |  |
| [SelectedItem](#selecteditem) | Returns the structure with label, value, expanded fields | GetSelectedItem |  |
| [SelectedLabel](#selectedlabel) | Label of the selected item. | GetSelectedLabel |  |
| [SelectedText](#selectedtext) | Text of the selected item. | GetSelectedText |  |
| [VisibleRowCount](#visiblerowcount) | Number of visible rows | GetVisibleRowCount |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoCollapse](#docollapse) | Collapses an item of this object. |
|	[DoExpand](#doexpand) | Expands an item of this object. |
|	[DoGetValue](#dogetvalue) | Gets value of a grid item with a given label. |
|	[DoSelectItem](#doselectitem) | Selects an item of this object. |
|	[DoSetValue](#dosetvalue) | Sets value of an grid item of this object. |
|	[DoShowDropDown](#doshowdropdown) | Show dropdown (or custom dialog) for an item. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="Expanded"></a>
#### Expanded


True if selected item is expanded

			
	
			
Type: boolean
			
			
Accessors: GetExpanded
			
		
<a name="SelectedItem"></a>
#### SelectedItem


Returns the structure with label, value, expanded fields

			
	
			
Type: string
			
			
Accessors: GetSelectedItem
			
		
<a name="SelectedLabel"></a>
#### SelectedLabel


Label of the selected item.

			
	
			
Type: string
			
			
Accessors: GetSelectedLabel
			
		
<a name="SelectedText"></a>
#### SelectedText


Text of the selected item.

			
	
			
Type: string
			
			
Accessors: GetSelectedText
			
		
<a name="VisibleRowCount"></a>
#### VisibleRowCount


Number of visible rows

			
	
			
Type: number
			
			
Accessors: GetVisibleRowCount
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoCollapse"></a>    
#### DoCollapse

Collapses an item of this object.

```javascript
DoCollapse(val) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string \| number |	name/index of the value to Collapse. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedpropertygrid.docollapse"></a>

<a name="DoExpand"></a>    
#### DoExpand

Expands an item of this object.

```javascript
DoExpand(val) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string \| number |	name/index of the value to Expand. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedpropertygrid.doexpand"></a>

<a name="DoGetValue"></a>    
#### DoGetValue

Gets value of a grid item with a given label.

```javascript
DoGetValue(label) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| label | string \| number |	Property grid row label or index |




**Returns:**

object: Item Value



<a name="see.also.managedpropertygrid.dogetvalue"></a>

<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects an item of this object.

```javascript
DoSelectItem(indexLabel) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| indexLabel | string \| number |	name/index of the value to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedpropertygrid.doselectitem"></a>

<a name="DoSetValue"></a>    
#### DoSetValue

Sets value of an grid item of this object.

```javascript
DoSetValue(label, val) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| label | string \| number |	Property grid row label or index |
| val | string \| number |	value to set |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedpropertygrid.dosetvalue"></a>

<a name="DoShowDropDown"></a>    
#### DoShowDropDown

Show dropdown (or custom dialog) for an item.

```javascript
DoShowDropDown(indexLabel) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| indexLabel | string \| number |	name/index of the item to show dropdown for. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedpropertygrid.doshowdropdown"></a>

	

