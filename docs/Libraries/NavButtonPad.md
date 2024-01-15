Summary: NavPOSControls NavButtonPad.

# NavButtonPad

NavPOSControls NavButtonPad.
 
UI element class: LSRetail.NAV.POSControls.ButtonPad

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: POSControlsButtonPadBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ButtonCaption](#buttoncaption) | Caption of a button with specified index | GetButtonCaption |  |
| [ColumnCount](#columncount) | Number of columns on a page | GetColumnCount |  |
| [FullInfo](#fullinfo) | JSON-formatted info for all buttons | GetFullInfo |  |
| [FullText](#fulltext) | TAB-separated table with button captions | GetFullText |  |
| [PageCount](#pagecount) | Number of pages | GetPageCount |  |
| [RowCount](#rowcount) | Number of rows on a page | GetRowCount |  |
| [ToggleState](#togglestate) | ToggleState of the button | GetToggleState |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClick](#doclick) | Click button by caption or no (1-based index) |



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

```javascript
value = SeS('SomeNavButtonPad').GetButtonCaption(/**string|number*/textOrId)
```


<a name="ColumnCount"></a>
#### ColumnCount

Number of columns on a page



Type: number


Accessors: GetColumnCount

```javascript
value = SeS('SomeNavButtonPad').GetColumnCount()
```


<a name="FullInfo"></a>
#### FullInfo

JSON-formatted info for all buttons



Type: string


Accessors: GetFullInfo

```javascript
value = SeS('SomeNavButtonPad').GetFullInfo()
```


<a name="FullText"></a>
#### FullText

TAB-separated table with button captions



Type: string


Accessors: GetFullText

```javascript
value = SeS('SomeNavButtonPad').GetFullText()
```


<a name="PageCount"></a>
#### PageCount

Number of pages



Type: number


Accessors: GetPageCount

```javascript
value = SeS('SomeNavButtonPad').GetPageCount()
```


<a name="RowCount"></a>
#### RowCount

Number of rows on a page



Type: number


Accessors: GetRowCount

```javascript
value = SeS('SomeNavButtonPad').GetRowCount()
```


<a name="ToggleState"></a>
#### ToggleState

ToggleState of the button

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| textOrId | string \| number | caption or 'no' (1-based index) |




Type: boolean


Accessors: GetToggleState

```javascript
value = SeS('SomeNavButtonPad').GetToggleState(/**string|number*/textOrId)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClick"></a>    
#### DoClick

Click button by caption or no (1-based index)

```javascript
SeS('SomeNavButtonPad').DoClick(textOrId, timeout)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| textOrId | string \| number |  caption or 'no' (1-based index) |
| timeout | number |  number of milliseconds to wait for a button to appear<br>Optional, Default: "5000". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.navbuttonpad.doclick"></a>

  

