Summary: Behavior patterm for Dynamics AX fast tabs control.

# DynamicsAXFastTabs

Behavior patterm for Dynamics AX fast tabs control.
 
Extends [UIAObject](UIAObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DynamicsAXFastTabsBehavior**


<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectTab](#doselecttab) | Selects the tab by name. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSelectTab"></a>    
#### DoSelectTab

Selects the tab by name.

```javascript
SeS('SomeDynamicsAXFastTabs').DoSelectTab(tabName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |  Tab name to select |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.dynamicsaxfasttabs.doselecttab"></a>

  

