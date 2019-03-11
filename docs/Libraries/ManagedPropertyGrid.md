# ManagedPropertyGrid

Managed PropertyGrid.
 
Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="ManagedObject" styleclass="Normal" translate="true">ManagedObject</link>.

Extends SeSSimulatedObject.





**Behavior Pattern: ManagedPropertyGridBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Expanded](#Expanded) | True if selected item is expanded | GetExpanded |  |
| [SelectedItem](#SelectedItem) | Returns the structure with label, value, expanded fields | GetSelectedItem |  |
| [SelectedLabel](#SelectedLabel) | Label of the selected item. | GetSelectedLabel |  |
| [SelectedText](#SelectedText) | Text of the selected item. | GetSelectedText |  |
| [VisibleRowCount](#VisibleRowCount) | Number of visible rows | GetVisibleRowCount |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoCollapse](#DoCollapse) | Collapses an item of this object. |
|	[DoExpand](#DoExpand) | Expands an item of this object. |
|	[DoSelectItem](#DoSelectItem) | Selects an item of this object. |
|	[DoSetValue](#DoSetValue) | Sets value of an grid item of this object. |
|	[DoShowDropDown](#DoShowDropDown) | Show dropdown (or custom dialog) for an item. |




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
#### DoCollapse(val)

Collapses an item of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string \| number |	name/index of the value to Collapse. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedpropertygrid.docollapse"></a>

<a name="DoExpand"></a>    
#### DoExpand(val)

Expands an item of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| val | string \| number |	name/index of the value to Expand. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedpropertygrid.doexpand"></a>

<a name="DoSelectItem"></a>    
#### DoSelectItem(indexLabel)

Selects an item of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| indexLabel | string \| number |	name/index of the value to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedpropertygrid.doselectitem"></a>

<a name="DoSetValue"></a>    
#### DoSetValue(label, val)

Sets value of an grid item of this object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| label | string \| number |	Property grid row label or index |
| val | string \| number |	value to set |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedpropertygrid.dosetvalue"></a>

<a name="DoShowDropDown"></a>    
#### DoShowDropDown(indexLabel)

Show dropdown (or custom dialog) for an item.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| indexLabel | string \| number |	name/index of the item to show dropdown for. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.managedpropertygrid.doshowdropdown"></a>

	

