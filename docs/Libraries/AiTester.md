Summary: AiTester enables AI capabilities during test case execution. 

# AiTester

AiTester enables AI capabilities during test case execution. Use AiTester to generate data, perform image-based assertions (such as finding discrepancies and analyzing displayed content),and handle other tasks that require AI processing.






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [Assert](#assert) | Tests assertion against the provided text (hard assert). |
|  [AssertLastResponse](#assertlastresponse) | Tests assertion against the last response (hard assert). |
|  [DoAnalyzeReport](#doanalyzereport) | Analyzes TRP report and provides root cause analysis. |
|  [DoFullScreenQuery](#dofullscreenquery) | Sends a text query along with a screenshot of a desktop to AI model using specified or default workflow. |
|  [DoImageQuery](#doimagequery) | Sends a text query along with an image to AI model using specified or default workflow. |
|  [DoMultiImageQuery](#domultiimagequery) | Sends a text query along with the set of images added via AiTester.StackWebImage / StackImage / StackImageFile. |
|  [DoObjectQuery](#doobjectquery) | Sends a text query along with a screenshot of an object to AI model using specified or default workflow. |
|  [DoTextQuery](#dotextquery) | Sends a text query to AI model using specified or default workflow. |
|  [DoWebImageQuery](#dowebimagequery) | Sends a text query along with a browser screenshot to AI model using specified or default workflow. |
|  [DoWebImageVerify](#dowebimageverify) | Sends a text query along with a browser screenshot to AI model using specified or default workflow. |
|  [DoWindowQuery](#dowindowquery) | Sends a text query along with a screenshot of a window with the given title to AI model using specified or default workflow. |
|  [LogSessions](#logsessions) | Enables/disables session logging. |
|  [SetDefaultWorkflow](#setdefaultworkflow) | Sets default workflow. |
|  [SoftAssert](#softassert) | Tests soft assertion against the provided text. |
|  [SoftAssertLastResponse](#softassertlastresponse) | Tests soft assertion against the last response. |
|  [StackImage](#stackimage) | Adds a screenshot to the batch to send along with the AiTester.DoMultiImageQuery. |
|  [StackImageFile](#stackimagefile) | Adds a screenshot file to the batch to send along with the AiTester.DoMultiImageQuery. |
|  [StackWebImage](#stackwebimage) | Adds browser screenshot to the batch to send along with the AiTester.DoMultiImageQuery. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="Assert"></a>    
#### Assert

Tests assertion against the provided text (hard assert).

```javascript
AiTester.Assert(text, assertion)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| text | string |  Input text. |
| assertion | string |  Assertion to test against the response. |





<a name="see.also.aitester.assert"></a>

<a name="AssertLastResponse"></a>    
#### AssertLastResponse

Tests assertion against the last response (hard assert).

```javascript
AiTester.AssertLastResponse(assertion)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| assertion | string |  Assertion to test against the response. |





<a name="see.also.aitester.assertlastresponse"></a>

<a name="DoAnalyzeReport"></a>    
#### DoAnalyzeReport

Analyzes TRP report and provides root cause analysis.

Notes:
- Requires Rapise 8.4+
- Converts TRP to JSON, may drop most screenshots if JSON is too large, then sends to AI.
- Returns AI-produced analysis text (or false on failure).

```javascript
AiTester.DoAnalyzeReport(title, path)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| title | string |  Report message title. |
| path | string |  Path to TRP report. |





<a name="see.also.aitester.doanalyzereport"></a>

<a name="DoFullScreenQuery"></a>    
#### DoFullScreenQuery

Sends a text query along with a screenshot of a desktop to AI model using specified or default workflow.

```javascript
AiTester.DoFullScreenQuery(query, workflow)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| query | string |  Text query to send. |
| workflow | string |  Name or Id of the workflow to use. Default value is `AI Chat`. You may set the workflow with AiTester.SetDefaultWorkflow.<br>Optional. |





<a name="see.also.aitester.dofullscreenquery"></a>

<a name="DoImageQuery"></a>    
#### DoImageQuery

Sends a text query along with an image to AI model using specified or default workflow.

```javascript
AiTester.DoImageQuery(query, iw, workflow)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| query | string |  Text query to send. |
| iw | ImageWrapper |  Image to send. |
| workflow | string |  Name or Id of the workflow to use. Default value is `AI Chat`. You may set the workflow with AiTester.SetDefaultWorkflow.<br>Optional. |





<a name="see.also.aitester.doimagequery"></a>

<a name="DoMultiImageQuery"></a>    
#### DoMultiImageQuery

Sends a text query along with the set of images added via AiTester.StackWebImage / StackImage / StackImageFile.
Clears the stack after the query.

```javascript
AiTester.DoMultiImageQuery(query, workflow)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| query | string |  Text query to send. |
| workflow | string |  Name or Id of the workflow to use. Default value is `AI Chat`. You may set the workflow with AiTester.SetDefaultWorkflow.<br>Optional. |





<a name="see.also.aitester.domultiimagequery"></a>

<a name="DoObjectQuery"></a>    
#### DoObjectQuery

Sends a text query along with a screenshot of an object to AI model using specified or default workflow.

```javascript
AiTester.DoObjectQuery(objectId, query, workflow)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| objectId | objectId |  ID of an object in the object repository. |
| query | string |  Text query to send. |
| workflow | string |  Name or Id of the workflow to use. Default value is `AI Chat`. You may set the workflow with AiTester.SetDefaultWorkflow.<br>Optional. |





<a name="see.also.aitester.doobjectquery"></a>

<a name="DoTextQuery"></a>    
#### DoTextQuery

Sends a text query to AI model using specified or default workflow.

```javascript
AiTester.DoTextQuery(query, workflow)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| query | string |  Text query to send. |
| workflow | string |  Name or Id of the workflow to use. Default value is `AI Chat`. You may set the workflow with AiTester.SetDefaultWorkflow.<br>Optional. |





<a name="see.also.aitester.dotextquery"></a>

<a name="DoWebImageQuery"></a>    
#### DoWebImageQuery

Sends a text query along with a browser screenshot to AI model using specified or default workflow.

```javascript
AiTester.DoWebImageQuery(query, workflow)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| query | string |  Text query to send. |
| workflow | string |  Name or Id of the workflow to use. Default value is `AI Chat`. You may set the workflow with AiTester.SetDefaultWorkflow.<br>Optional. |





<a name="see.also.aitester.dowebimagequery"></a>

<a name="DoWebImageVerify"></a>    
#### DoWebImageVerify

Sends a text query along with a browser screenshot to AI model using specified or default workflow. Verifies the result using an assertion.

```javascript
AiTester.DoWebImageVerify(query, assertion, workflow)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| query | string |  Text query to send. |
| assertion | string |  Assertion to test against the response. |
| workflow | string |  Name or Id of the workflow to use. Default value is `AI Chat`. You may set the workflow with AiTester.SetDefaultWorkflow.<br>Optional. |





<a name="see.also.aitester.dowebimageverify"></a>

<a name="DoWindowQuery"></a>    
#### DoWindowQuery

Sends a text query along with a screenshot of a window with the given title to AI model using specified or default workflow.

```javascript
AiTester.DoWindowQuery(title, query, workflow)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| title | string |  Window title. Supports regular expressions. |
| query | string |  Text query to send. |
| workflow | string |  Name or Id of the workflow to use. Default value is `AI Chat`. You may set the workflow with AiTester.SetDefaultWorkflow.<br>Optional. |





<a name="see.also.aitester.dowindowquery"></a>

<a name="LogSessions"></a>    
#### LogSessions

Enables/disables session logging.

```javascript
AiTester.LogSessions(b)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| b | boolean |  If `true` - a session will be created for each AI request. Review the sessions in the AI Dashboard. |





<a name="see.also.aitester.logsessions"></a>

<a name="SetDefaultWorkflow"></a>    
#### SetDefaultWorkflow

Sets default workflow.

```javascript
AiTester.SetDefaultWorkflow(workflow)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| workflow | string |  Name or Id of the workflow to set as default. |





<a name="see.also.aitester.setdefaultworkflow"></a>

<a name="SoftAssert"></a>    
#### SoftAssert

Tests soft assertion against the provided text.

```javascript
AiTester.SoftAssert(text, assertion)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| text | string |  Input text. |
| assertion | string |  Assertion to test against the response. |





<a name="see.also.aitester.softassert"></a>

<a name="SoftAssertLastResponse"></a>    
#### SoftAssertLastResponse

Tests soft assertion against the last response.

```javascript
AiTester.SoftAssertLastResponse(assertion)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| assertion | string |  Assertion to test against the response. |





<a name="see.also.aitester.softassertlastresponse"></a>

<a name="StackImage"></a>    
#### StackImage

Adds a screenshot to the batch to send along with the AiTester.DoMultiImageQuery.

```javascript
AiTester.StackImage(iw)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| iw | ImageWrapper |  Image object. |





<a name="see.also.aitester.stackimage"></a>

<a name="StackImageFile"></a>    
#### StackImageFile

Adds a screenshot file to the batch to send along with the AiTester.DoMultiImageQuery.

```javascript
AiTester.StackImageFile(path)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Image object. |





<a name="see.also.aitester.stackimagefile"></a>

<a name="StackWebImage"></a>    
#### StackWebImage

Adds browser screenshot to the batch to send along with the AiTester.DoMultiImageQuery.

```javascript
AiTester.StackWebImage()
```





<a name="see.also.aitester.stackwebimage"></a>

  

