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
|  [SetTestRunCustomProperty](#settestruncustomproperty) | Sets a custom property for the current test run in Spira. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="CreateIncident"></a>    
#### CreateIncident

Creates an incident in Spira.

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
Spira.RunTestSet(nameOrId, token, projectNameOrId, utcTime, utcDate)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| nameOrId |  |  Name or ID of the Test Set to run. |
| token | string |  Automation host token.<br>Optional. |
| projectNameOrId | string |  Name or ID of a Spira project that contains the Test Set.<br>Optional. |
| utcTime | string |  UTC time, formatted as HH:mm or HH:mm:ss, e.g. 16:45. Default time is current time.<br>Optional. |
| utcDate | string |  UTC date, formatted as YYYY-MM-DD, e.g. 2024-12-19. Default value is current date.<br>Optional. |




**Returns:**

boolean: `true` if the test set scheduled successfully, otherwise - `false`.



<a name="see.also.spira.runtestset"></a>

<a name="SetTestRunCustomProperty"></a>    
#### SetTestRunCustomProperty

Sets a custom property for the current test run in Spira. 
This function is utilized by RapiseLauncher to transmit custom data from an automated test script to the corresponding test run record in Spira.
By using this function, you can enrich the test run results in Spira with valuable information generated during the execution of your Rapise tests.
This data can then be used for more detailed analysis and reporting within Spira.

```javascript
Spira.SetTestRunCustomProperty(name, value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  The name of the test run custom property as defined in Spira. This name must match an existing custom property in your Spira project. |
| value | string \| number \| boolean |  The value to be assigned to the custom property. |




**Returns:**

boolean: Always returns true.



<a name="see.also.spira.settestruncustomproperty"></a>

  

