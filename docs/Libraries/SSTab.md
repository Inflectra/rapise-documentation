Summary: SSTab Control

# SSTab

SSTab Control
 
Extends [ActiveXObject](ActiveXObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: SSTabBehavior**


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
value = SeS('SomeSSTab').GetSelectedTab()
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSelectTab"></a>    
#### DoSelectTab

Selects the tab by name.

```javascript
SeS('SomeSSTab').DoSelectTab(tabName, clickType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |  Tab name to select |
| clickType | string |  Type of click, can be one of "L" - left click, "LD" - double left click, "R" - right click, "RD" - double right click, "M" - middle click, "MD" - double middle click, "N" - don't click Possible values: "L", "LD", "R", "RD", "M", "MD", "N"<br>Optional, Default: "L". |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.sstab.doselecttab"></a>

  

