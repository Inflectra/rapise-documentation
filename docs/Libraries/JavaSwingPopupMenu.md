Summary: Java Swing Popup Menu.

# JavaSwingPopupMenu

Java Swing Popup Menu.
 
UI element class: javax.swing.JPopupMenu

Extends [JavaObject](JavaObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: JavaObjectPopupSelectableBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#itemcount) | Number of items. | GetItemCount |  |
| [ItemIndexByName](#itemindexbyname) | Returns item index by its name. | GetItemIndexByName |  |
| [ItemNameByIndex](#itemnamebyindex) | Returns item name by its index. | GetItemNameByIndex |  |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSelectItem](#doselectitem) | Selects an item of this object. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="ItemCount"></a>
#### ItemCount

Number of items.



Type: number


Accessors: GetItemCount

```javascript
value = SeS('SomeJavaSwingPopupMenu').GetItemCount()
```


<a name="ItemIndexByName"></a>
#### ItemIndexByName

Returns item index by its name. 'false' if name is not found.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| name | string |  |




Type: number|boolean


Accessors: GetItemIndexByName

```javascript
value = SeS('SomeJavaSwingPopupMenu').GetItemIndexByName(name)
```


<a name="ItemNameByIndex"></a>
#### ItemNameByIndex

Returns item name by its index.'false' if name is not found.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| index | number | Index of the item |




Type: string|boolean


Accessors: GetItemNameByIndex

```javascript
value = SeS('SomeJavaSwingPopupMenu').GetItemNameByIndex(index)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSelectItem"></a>    
#### DoSelectItem

Selects an item of this object.

```javascript
SeS('SomeJavaSwingPopupMenu').DoSelectItem(item)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| item | string \| number |  Item index or text value  to select. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.javaswingpopupmenu.doselectitem"></a>

  

