Summary: Android ListView.

# AndroidListView

Android ListView.
 
Extends [AndroidObject](AndroidObject.md)





**Behavior Pattern: AndroidObjectListViewSelectableBehavior**


<!-- ============================== property summary ========================== -->

  

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemIndexByName](#itemindexbyname) | Returns item index by its name. | GetItemIndexByName |  |



  
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectItem](#doselectitem) | Selects an item with the specified index. |




<!-- ============================== property detail ========================== -->
  
### Property Detail
    
<a name="ItemIndexByName"></a>
#### ItemIndexByName


Returns item index by its name. 'false' if name is not found.

      
**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| name | string |  |


  
      
Type: number|boolean
      
      
Accessors: GetItemIndexByName
      
    
  
  
<!-- ============================== action detail ========================== -->
  
### Action Detail
    
<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects an item with the specified index.

```javascript
SeS('SomeAndroidListView').DoSelectItem(index)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |  Item index. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.androidlistview.doselectitem"></a>

  

