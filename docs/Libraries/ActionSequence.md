Summary: This is a JavaScript wrapper for ActionSequence of Selenium .NET library.

# ActionSequence

This is a JavaScript wrapper for ActionSequence of Selenium .NET library.Use [PointerInputDevice.CreateActionSequence](PointerInputDevice.md#createactionsequence) to create an instance of ActionSequence.
```javascript
var sequence = p.CreateActionSequence(p);
// where p is an instance of PointerInputDevice
```






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [AddAction](#addaction) | Adds an interaction to the sequence. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="AddAction"></a>    
#### AddAction

Adds an interaction to the sequence. See [WebDriver.CreatePointerInput](WebDriver.md#createpointerinput).

```javascript
sequence.AddAction(interaction);
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| interaction | Interaction |  Interaction object returned by one of calls to [PointerInputDevice](PointerInputDevice.md). |





<a name="see.also.actionsequence.addaction"></a>

  

