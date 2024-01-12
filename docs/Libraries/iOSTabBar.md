Summary: iOS TabBar.

# iOSTabBar

iOS TabBar.
 
Extends [iOSObject](iOSObject.md)





**Behavior Pattern: iOSObjectTabBarBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#itemcount) | Number of items. | GetItemCount |  |
| [SelectedTab](#selectedtab) | Selected tab name. | GetSelectedTab |  |
| [TabName](#tabname) | Name of the tab at index | GetTabName |  |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectTab](#doselecttab) | Selects the tab by name or index. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="ItemCount"></a>
#### ItemCount


Number of items.

      
  
      
Type: number
      
      
Accessors: GetItemCount
      
    
<a name="SelectedTab"></a>
#### SelectedTab


Selected tab name.

      
  
      
Type: string
      
      
Accessors: GetSelectedTab
      
    
<a name="TabName"></a>
#### TabName


Name of the tab at index

      
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| index | number | Index of the tab. |


  
      
Type: string
      
      
Accessors: GetTabName
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoSelectTab"></a>    
#### DoSelectTab

Selects the tab by name or index.

```javascript
SeS('SomeiOSTabBar').DoSelectTab(tabNameIndex)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| tabNameIndex | string \| number |  Tab name or index. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iostabbar.doselecttab"></a>

  

