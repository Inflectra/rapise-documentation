Summary: This is a JavaScript wrapper for RelativeBy of Selenium .NET library. Requires Rapise 8.3+.

# RelativeBy

This is a JavaScript wrapper for RelativeBy of Selenium .NET library. Requires Rapise 8.3+.Examples:
 
```javascript
// find an input element above the password field
var by = RelativeBy.WithLocator(By.XPath("//input")).Above(By.XPath("//input[@id='password']"));
var el = WebDriver.FindElement(by);
// or
var anchorElement = WebDriver.FindElementByXPath("//input[@id='password'"]);
var by = RelativeBy.WithLocator(By.XPath("//input")).Above(anchorElement);
var el = WebDriver.FindElement(by);
```






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [Above](#above) | Creates RelativeBy.Above selector. |
|  [Below](#below) | Creates RelativeBy.Below selector. |
|  [LeftOf](#leftof) | Creates RelativeBy.LeftOf selector. |
|  [Near](#near) | Creates RelativeBy.Near selector. |
|  [RightOf](#rightof) | Creates RelativeBy.RightOf selector. |
|  [WithLocator](#withlocator) | Creates RelativeBy.WithLocator selector. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="Above"></a>    
#### Above

Creates RelativeBy.Above selector.

```javascript
WebDriver.Above(byOrElement)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| byOrElement | By |  By or WebElementWrapper object. |




**Returns:**

RelativeBy object.



<a name="see.also.relativeby.above"></a>

<a name="Below"></a>    
#### Below

Creates RelativeBy.Below selector.

```javascript
WebDriver.Below(byOrElement)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| byOrElement | By |  By or WebElementWrapper object. |




**Returns:**

RelativeBy object.



<a name="see.also.relativeby.below"></a>

<a name="LeftOf"></a>    
#### LeftOf

Creates RelativeBy.LeftOf selector.

```javascript
WebDriver.LeftOf(byOrElement)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| byOrElement | By |  By or WebElementWrapper object. |




**Returns:**

RelativeBy object.



<a name="see.also.relativeby.leftof"></a>

<a name="Near"></a>    
#### Near

Creates RelativeBy.Near selector.

```javascript
WebDriver.Near(byOrElement, atMostDistanceInPixels)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| byOrElement | By |  By or WebElementWrapper object. |
| atMostDistanceInPixels | number |  Distance in pixels.<br>Optional, Default: "50". |




**Returns:**

RelativeBy object.



<a name="see.also.relativeby.near"></a>

<a name="RightOf"></a>    
#### RightOf

Creates RelativeBy.RightOf selector.

```javascript
WebDriver.RightOf(byOrElement)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| byOrElement | By |  By or WebElementWrapper object. |




**Returns:**

RelativeBy object.



<a name="see.also.relativeby.rightof"></a>

<a name="WithLocator"></a>    
#### WithLocator

Creates RelativeBy.WithLocator selector.

```javascript
WebDriver.WithLocator(by)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| by | By |  By object. |




**Returns:**

RelativeBy object.



<a name="see.also.relativeby.withlocator"></a>

  

