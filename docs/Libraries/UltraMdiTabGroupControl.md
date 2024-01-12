Summary: Infragistics UltraMdiTabGroupControl.

# UltraMdiTabGroupControl

Infragistics UltraMdiTabGroupControl.
 
UI element class: Infragistics.Win.UltraWinTabbedMdi.MdiTabGroupControl

Extends [ManagedObject](ManagedObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: UltraMdiTabGroupControlBehavior**


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
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoSelectTab"></a>    
#### DoSelectTab

Selects the tab by name.

```javascript
SeS('SomeUltraMdiTabGroupControl').DoSelectTab(tabName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabName | string |  Tab name to select |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.ultramditabgroupcontrol.doselecttab"></a>

  

