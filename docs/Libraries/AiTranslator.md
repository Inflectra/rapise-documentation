Summary: AiTranslator understands your natural language commands—ranging from single test steps to complete scenarios—and transforms them into executable sequences of SmartActions. Acts as the semantic bridge between natural language intents and the automation framework, ensuring your automation heals itself when things change.

# AiTranslator

AiTranslator understands your natural language commands—ranging from single test steps to complete scenarios—and transforms them into executable sequences of SmartActions. Acts as the semantic bridge between natural language intents and the automation framework, ensuring your automation heals itself when things change.






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoConfigure](#doconfigure) | Set common execution parameters and limitations. |
|  [DoConfigureControlTypes](#doconfigurecontroltypes) | Configure control types available for the test session. |
|  [DoLint](#dolint) | Lint a generated script (RVL file with AI steps) for potential problems. |
|  [DoObjectLocator](#doobjectlocator) | Generate an improved XPath locator for an object in the repository using AI-driven DOM inspection. |
|  [DoTestStep](#doteststep) | Execute a single step within a multi-step test case, providing the agent with full test context including all steps, current position, and previously generated code. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoConfigure"></a>    
#### DoConfigure

Set common execution parameters and limitations.

```javascript
AiTranslator.DoConfigure(system_prompt, timeout, n_last_images, max_tokens, token_limit, vendor, model)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| system_prompt | string |  Additional prompt to be used for all interactions. |
| timeout | number |  Maximum time to wait, in milliseconds<br>Optional, Default: "600000". |
| n_last_images | number |  Number of images to remember.<br>Optional, Default: "5". |
| max_tokens | number |  Maximum amount of tokens per response.<br>Optional, Default: "1000". |
| token_limit | number |  Token limit to be used for whole prompt.<br>Optional, Default: "1000000". |
| vendor | string |  LLM provider to use for AiTranslator: `bedrock` or `openai`.<br>Optional, Default: "bedrock". |
| model | string |  Model name to use (e.g., `anthropic.claude-sonnet-4-20250514-v1:0`, `gpt-4o`). If not specified, uses the default model from AI Dashboard settings.<br>Optional. |





<a name="see.also.aitranslator.doconfigure"></a>

<a name="DoConfigureControlTypes"></a>    
#### DoConfigureControlTypes

Configure control types available for the test session. Control types define which UI control recognition libraries are active (e.g., DomLightningGrid, Dom, DomLightningListBox).

```javascript
AiTranslator.DoConfigureControlTypes(controlTypes)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| controlTypes | string |  Comma-separated list of control types to activate (e.g., "DomLightningGrid,DomLightningListBox"). |




**Returns:**

`true` after successfully configuring the control types.



<a name="see.also.aitranslator.doconfigurecontroltypes"></a>

<a name="DoLint"></a>    
#### DoLint

Lint a generated script (RVL file with AI steps) for potential problems. This is a static analysis entry point — it does not execute any UI interactions.

```javascript
AiTranslator.DoLint(rvlPath)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| rvlPath | string |  Path to the RVL file with AI steps to lint for potential problems. |




**Returns:**

LintResult object with `actions` (parsed actions) and `violations` (array of problems found).



<a name="see.also.aitranslator.dolint"></a>

<a name="DoObjectLocator"></a>    
#### DoObjectLocator

Generate an improved XPath locator for an object in the repository using AI-driven DOM inspection. The LLM inspects the live page DOM around the target element and proposes a more robust, semantically meaningful XPath based on your instructions.

Prerequisites: The browser must be open and the page containing the target element must be loaded.

```javascript
AiTranslator.DoObjectLocator(object_id, prompt, timeout, max_tokens, token_limit, maxIterations, ancestorDepth)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| object_id | objectId |  Object ID from the repository (e.g., "Table_Last_Row"). |
| prompt | string |  Instruction for how to generate/improve the xpath (e.g., "Reference the last row of the table"). |
| timeout | number |  Maximum time for the operation in milliseconds.<br>Optional, Default: "120000". |
| max_tokens | number |  Maximum tokens per LLM response.<br>Optional, Default: "4000". |
| token_limit | number |  Total token budget for the operation.<br>Optional, Default: "100000". |
| maxIterations | number |  Maximum number of tool-use loop iterations.<br>Optional, Default: "10". |
| ancestorDepth | number |  Default number of ancestor levels to inspect.<br>Optional, Default: "4". |




**Returns:**

SeSDoActionResult with the new xpath value, or false on failure.



<a name="see.also.aitranslator.doobjectlocator"></a>

<a name="DoTestStep"></a>    
#### DoTestStep

Execute a single step within a multi-step test case, providing the agent with full test context including all steps, current position, and previously generated code.

```javascript
AiTranslator.DoTestStep(testCase, currentStep, generatedCode, translatorContext, timeout, n_last_images, max_tokens, token_limit)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| testCase | object |  Array of step descriptions for the full test case. |
| currentStep | number |  1-based index of the current step to execute. |
| generatedCode | string |  SmartAction code generated by prior steps (pass empty string for first step).<br>Optional, Default: "". |
| translatorContext | ITranslatorContext |   |
| timeout | number |  Maximum time to wait, in milliseconds<br>Optional, Default: "600000". |
| n_last_images | number |  Number of images to remember.<br>Optional, Default: "5". |
| max_tokens | number |  Maximum amount of tokens per response.<br>Optional, Default: "1000". |
| token_limit | number |  Token limit to be used for whole prompt.<br>Optional, Default: "1000000". |




**Returns:**

`true` if the step was completed successfully; otherwise, it returns `false`.



<a name="see.also.aitranslator.doteststep"></a>

  

