Summary: iOS Search.

# iOSSearch

iOS Search.
 
Extends [iOSObject](iOSObject.md)





**Behavior Pattern: iOSObjectTextFieldBehavior**


<!-- ============================== property summary ========================== -->



### Property Summary
| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [Text](#text) | Text of the object, 'false' if text can not be read. | GetText | SetText |



<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoSetText](#dosettext) | Sets text value of this object. |



<!-- ============================== property detail ========================== -->

### Property Detail

<a name="Text"></a>
#### Text

Text of the object, 'false' if text can not be read.



Type: string


Accessors: GetText, SetText

```javascript
value = SeS('SomeiOSSearch').GetText()

SeS('SomeiOSSearch').SetText(value)
```




<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoSetText"></a>    
#### DoSetText

Sets text value of this object.

```javascript
SeS('SomeiOSSearch').DoSetText(value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| value | string |  Text value. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iossearch.dosettext"></a>

  

