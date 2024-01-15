Summary: Use Spira object to communicate with Spira during playback of tests. With Spira object you may do such things as launching a test set and creating an incident. Requires Rapise 7.2+

# Spira

Use Spira object to communicate with Spira during playback of tests. With Spira object you may do such things as launching a test set and creating an incident. Requires Rapise 7.2+






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [CreateIncident](#createincident) | Creates an incident in Spira. |
|  [RunTestSet](#runtestset) | Schedules a test set to execute as soon as possible. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="CreateIncident"></a>    
#### CreateIncident

Creates an incident in Spira..

```javascript
Spira.CreateIncident(name, description, projectNameOrId)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Subject of an incident. |
| description | string |  Description of an incident |
| projectNameOrId | string |  Name or ID of a Spira project to add the incident. |




**Returns:**

number: ID of created incident or 0 in case of error.



<a name="see.also.spira.createincident"></a>

<a name="RunTestSet"></a>    
#### RunTestSet

Schedules a test set to execute as soon as possible.

```javascript
Spira.RunTestSet(nameOrId, token, projectNameOrId)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameOrId |  |  Name or ID of the Test Set to run. |
| token | string |  Automation host token. |
| projectNameOrId | string |  Name or ID of a Spira project that contains the Test Set. |




**Returns:**

boolean: `true` if the test set scheduled successfully, otherwise - `false`.



<a name="see.also.spira.runtestset"></a>

  

