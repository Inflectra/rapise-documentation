Summary: This behavior pattern implements standard behavior for TabControl control.

# DomDynamicsAXTabControl

This behavior pattern implements standard behavior for TabControl control.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DomDynamicsAXTabControlBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Expanded](#expanded) | State of a tab with name. | GetExpanded |  |
| [ItemsCount](#itemscount) | Number of tabs. | GetItemsCount |  |
| [TabName](#tabname) | Name of a tab at index | GetTabName |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoCollapse](#docollapse) | Collapses specific tab in a tab control. |
|  [DoExpand](#doexpand) | Expands specific tab in a tab control. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="Expanded"></a>
#### Expanded

State of a tab with name. Returns 'true' if the tab is expanded, 'false' - otherwise.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| tabName | string | Name of a tab. |




Type: boolean


Accessors: GetExpanded

```javascript
value = SeS('SomeDomDynamicsAXTabControl').GetExpanded(/**string*/ tabName)
```


<a name="ItemsCount"></a>
#### ItemsCount

Number of tabs.



Type: number


Accessors: GetItemsCount

```javascript
value = SeS('SomeDomDynamicsAXTabControl').GetItemsCount()
```


<a name="TabName"></a>
#### TabName

Name of a tab at index

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| index | number | Index of a tab. |




Type: string


Accessors: GetTabName

```javascript
value = SeS('SomeDomDynamicsAXTabControl').GetTabName(/**number*/ index)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoCollapse"></a>    
#### DoCollapse

Collapses specific tab in a tab control.

```javascript
SeS('SomeDomDynamicsAXTabControl').DoCollapse(tabName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |  Name of a tab |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.domdynamicsaxtabcontrol.docollapse"></a>

<a name="DoExpand"></a>    
#### DoExpand

Expands specific tab in a tab control.

```javascript
SeS('SomeDomDynamicsAXTabControl').DoExpand(tabName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |  Name of a tab |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.domdynamicsaxtabcontrol.doexpand"></a>

  

