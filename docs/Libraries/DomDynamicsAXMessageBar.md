Summary: This behavior pattern implements standard behavior for MessageBar control.

# DomDynamicsAXMessageBar

This behavior pattern implements standard behavior for MessageBar control.
 
Extends [HTMLObject](HTMLObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: DomDynamicsAXMessageBarBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#itemcount) | Number of messages. | GetItemCount |  |
| [ItemText](#itemtext) | Text of an item at index. | GetItemText |  |
| [Text](#text) | Text of the first item. | GetText |  |



<!-- ============================== action summary ========================== -->

<!-- ============================== property detail ========================== -->

### Property Detail

<a name="ItemCount"></a>
#### ItemCount

Number of messages.



Type: number


Accessors: GetItemCount

```javascript
value = SeS('SomeDomDynamicsAXMessageBar').GetItemCount()
```


<a name="ItemText"></a>
#### ItemText

Text of an item at index.

**Getter Parameters:**

| **Name** | **Type** | **Description** |
| -------- | -------- | --------------- |  
| index | number | Index of a message. |




Type: string


Accessors: GetItemText

```javascript
value = SeS('SomeDomDynamicsAXMessageBar').GetItemText(/**number*/ index)
```


<a name="Text"></a>
#### Text

Text of the first item.



Type: string


Accessors: GetText

```javascript
value = SeS('SomeDomDynamicsAXMessageBar').GetText()
```




<!-- ============================== action detail ========================== -->
  

