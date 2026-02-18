Summary: Playwright integration helpers for Rapise.

# Playwright

Playwright integration helpers for Rapise.Provides:- Running Playwright test runner and importing JSON report- Invoking Playwright against the current Rapise WebDriver (via CDP)- AI element discovery that converts AI result to Rapise locator






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoImportJsonReport](#doimportjsonreport) | Import report in JSON format produced by Playwright earlier. |
|  [DoInvoke](#doinvoke) | Invoke user callback, passing current browser as a parameter: `cb({page,expect,browser})`. |
|  [DoPlay](#doplay) | Run playwright test `cmdParams` and import results into Rapise test report. |
|  [GetElementByAi](#getelementbyai) | Use query to find an element by plain text description. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoImportJsonReport"></a>    
#### DoImportJsonReport

Import report in JSON format produced by Playwright earlier.

```javascript
Playwright.DoImportJsonReport(path)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| path | string |  Path to JSON report file.<br>Optional, Default: "test-results.json". |




**Returns:**

boolean: true if report parsed and processed.



<a name="see.also.playwright.doimportjsonreport"></a>

<a name="DoInvoke"></a>    
#### DoInvoke

Invoke user callback, passing current browser as a parameter: `cb({page,expect,browser})`.

Examples:
```javascript
Playwright.DoInvoke(async ({page,expect}) {
	await expect(page).not.toHaveURL('error');
})
```

```javascript
Playwright.DoInvoke(callBack)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| callBack | function |  Async function to run: async ({page, expect, browser}) => \{ ... \} |




**Returns:**

boolean | <br>object: true if callback returns undefined; otherwise returns callback result (or false if exception).



<a name="see.also.playwright.doinvoke"></a>

<a name="DoPlay"></a>    
#### DoPlay

Run playwright test `cmdParams` and import results into Rapise test report.

Examples:
```javascript
// Run all test *.spec.js / *.spec.ts files (with respect to playwright.config.ts / playwright.config.js)
Playwright.DoPlay();
// Run files that have my-spec or my-spec-2 in the file name
Playwright.DoPlay("my-spec my-spec-2");
// Run tests that are in line 42 in my-spec.ts
Playwright.DoPlay("my-spec.ts:42");
// Run tests in headed browsers
Playwright.DoPlay("--headed");
```

```javascript
Playwright.DoPlay(cmdParams)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| cmdParams | string |  Additional Playwright CLI [parameters](https://playwright.dev/docs/test-cli) after `playwright test --reporter=json`.<br>Optional, Default: "". |




**Returns:**

boolean: true on completion (errors are reported as soft asserts).



<a name="see.also.playwright.doplay"></a>

<a name="GetElementByAi"></a>    
#### GetElementByAi

Use query to find an element by plain text description. The more detailed description
the better.

```javascript
Playwright.GetElementByAi(query)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| query | string |  Plain text description of an element to find (the more specific the better). |




**Returns:**

[HTMLObject](HTMLObject.md) | <br>boolean: HTMLObject (Rapise) when element is found, otherwise false.



<a name="see.also.playwright.getelementbyai"></a>

  

