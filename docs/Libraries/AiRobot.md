Summary: AiRobot implements fully-automatic interactions with target window or screen region (keyboard and mouse).

# AiRobot

AiRobot implements fully-automatic interactions with target window or screen region (keyboard and mouse).Should be used when AI is unable to find reasonable entries in other page objects.This way of interacting is last resort. It may be applied to complex, exploratory style actions.






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoConfigure](#doconfigure) | Set common execution parameters and limitations. |
|  [DoFullScreen](#dofullscreen) | Do fully automatic AI interactions with the full screen. |
|  [DoObject](#doobject) | Do fully automatic AI interactions with a screen region occupied by a given object. |
|  [DoScreenRegion](#doscreenregion) | Do fully automatic AI interactions with a specified screen region. |
|  [DoWebBrowser](#dowebbrowser) | Do fully automatic AI interactions with currently active web browser window. |
|  [DoWindow](#dowindow) | Do fully automatic AI interactions with a window matched by title. |
|  [SetSelfCheck](#setselfcheck) | Enables self-check mode. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoConfigure"></a>    
#### DoConfigure

Set common execution parameters and limitations.

```javascript
AiRobot.DoConfigure(system_prompt, timeout, n_last_images, max_tokens, token_limit, vendor)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| system_prompt | string |  Additional prompt to be used for all interactions. |
| timeout | number |  Maximum time to wait, in milliseconds<br>Optional, Default: "600000". |
| n_last_images | number |  Number of images to remember.<br>Optional, Default: "5". |
| max_tokens | number |  Maximum amount of tokens per response.<br>Optional, Default: "1000". |
| token_limit | number |  Token limit to be used for whole prompt.<br>Optional, Default: "1000000". |
| vendor | string |  LLM provider to use for Robot: `bedrock`, `openai`, or `qwen`.<br>Optional, Default: "bedrock". |





<a name="see.also.airobot.doconfigure"></a>

<a name="DoFullScreen"></a>    
#### DoFullScreen

Do fully automatic AI interactions with the full screen.

```javascript
AiRobot.DoFullScreen(prompt, timeout, n_last_images, max_tokens, token_limit)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| prompt | string |  Clear explanation of what you want AiRobot to do with a given target. |
| timeout | number |  Maximum time to wait, in milliseconds<br>Optional, Default: "600000". |
| n_last_images | number |  Number of images to remember.<br>Optional, Default: "5". |
| max_tokens | number |  Maximum amount of tokens per response.<br>Optional, Default: "1000". |
| token_limit | number |  Token limit to be used for whole prompt.<br>Optional, Default: "1000000". |





<a name="see.also.airobot.dofullscreen"></a>

<a name="DoObject"></a>    
#### DoObject

Do fully automatic AI interactions with a screen region occupied by a given object.

```javascript
AiRobot.DoObject(prompt, objectId, timeout, n_last_images, max_tokens, token_limit)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| prompt | string |  Clear explanation of what you want AiRobot to do with a given target. |
| objectId | objectid \| SeSObject |  Object whose screen rectangle will be shown to AI robot to interact with. |
| timeout | number |  Maximum time to wait, in milliseconds<br>Optional, Default: "600000". |
| n_last_images | number |  Number of images to remember.<br>Optional, Default: "5". |
| max_tokens | number |  Maximum amount of tokens per response.<br>Optional, Default: "1000". |
| token_limit | number |  Token limit to be used for whole prompt.<br>Optional, Default: "1000000". |





<a name="see.also.airobot.doobject"></a>

<a name="DoScreenRegion"></a>    
#### DoScreenRegion

Do fully automatic AI interactions with a specified screen region.

```javascript
AiRobot.DoScreenRegion(prompt, x, y, w, h, timeout, n_last_images, max_tokens, token_limit)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| prompt | string |  Clear explanation of what you want AiRobot to do with a given target. |
| x | number |  X coordinate of the screen region. |
| y | number |  Y coordinate of the screen region. |
| w | number |  Width of the screen region. |
| h | number |  Height of the screen region. |
| timeout | number |  Maximum time to wait, in milliseconds<br>Optional, Default: "600000". |
| n_last_images | number |  Number of images to remember.<br>Optional, Default: "5". |
| max_tokens | number |  Maximum amount of tokens per response.<br>Optional, Default: "1000". |
| token_limit | number |  Token limit to be used for whole prompt.<br>Optional, Default: "1000000". |





<a name="see.also.airobot.doscreenregion"></a>

<a name="DoWebBrowser"></a>    
#### DoWebBrowser

Do fully automatic AI interactions with currently active web browser window.

```javascript
AiRobot.DoWebBrowser(prompt, timeout, n_last_images, max_tokens, token_limit)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| prompt | string |  Clear explanation of what you want AiRobot to do with a given target. |
| timeout | number |  Maximum time to wait, in milliseconds<br>Optional, Default: "600000". |
| n_last_images | number |  Number of images to remember.<br>Optional, Default: "5". |
| max_tokens | number |  Maximum amount of tokens per response.<br>Optional, Default: "1000". |
| token_limit | number |  Token limit to be used for whole prompt.<br>Optional, Default: "1000000". |





<a name="see.also.airobot.dowebbrowser"></a>

<a name="DoWindow"></a>    
#### DoWindow

Do fully automatic AI interactions with a window matched by title.

```javascript
AiRobot.DoWindow(prompt, window_title, timeout, n_last_images, max_tokens, token_limit)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| prompt | string |  Clear explanation of what you want AiRobot to do with a given target. |
| window_title | string |  Exact window title or regex to match window title, i.e. Calculator or regex:Calc.* |
| timeout | number |  Maximum time to wait, in milliseconds<br>Optional, Default: "600000". |
| n_last_images | number |  Number of images to remember.<br>Optional, Default: "5". |
| max_tokens | number |  Maximum amount of tokens per response.<br>Optional, Default: "1000". |
| token_limit | number |  Token limit to be used for whole prompt.<br>Optional, Default: "1000000". |





<a name="see.also.airobot.dowindow"></a>

<a name="SetSelfCheck"></a>    
#### SetSelfCheck

Enables self-check mode. After each step, AiRobot will take a screenshot and evaluate if the right outcome was achieved before moving on.

```javascript
AiRobot.SetSelfCheck()
```





<a name="see.also.airobot.setselfcheck"></a>

  

