Summary: Optical Character Resolution (OCR) object. Use it to recognize text on the screen. Requires Rapise 8.3+.

# Ocr

Optical Character Resolution (OCR) object. Use it to recognize text on the screen. Requires Rapise 8.3+.






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoClickTextInObject](#doclicktextinobject) | Does OCR for a given object, finds a given string and clicks on it. |
|  [DoClickTextInWindow](#doclicktextinwindow) | Does OCR for a window that contains a given object, finds a given string and clicks on it. |
|  [DoExtractFromImage](#doextractfromimage) | Does OCR for 'img'. |
|  [DoExtractFromObject](#doextractfromobject) | Does OCR for a given object. |
|  [DoExtractFromScreen](#doextractfromscreen) | Does OCR for a given rectangle. |
|  [DoExtractFromWindow](#doextractfromwindow) | Does OCR for a window that contains a given object. |
|  [DoSelectOcrEngine](#doselectocrengine) | Selects OCR engine by name. |
|  [DoSetOcrOption](#dosetocroption) | Sets an OCR option. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoClickTextInObject"></a>    
#### DoClickTextInObject

Does OCR for a given object, finds a given string and clicks on it.

```javascript
Ocr.DoClickTextInObject(objId, text, clickType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| objId | objectId \| SeSObject |  ID of an object or SeSObject instance. |
| text | string |  Text to find. |
| clickType | string |  Type of a click to perform ("L"|"LD"|"R").<br>Optional, Default: "L". |




**Returns:**

'true' if the text was found, 'false' otherwise.



<a name="see.also.ocr.doclicktextinobject"></a>

<a name="DoClickTextInWindow"></a>    
#### DoClickTextInWindow

Does OCR for a window that contains a given object, finds a given string and clicks on it.

```javascript
Ocr.DoClickTextInWindow(objId, text, clickType)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| objId | objectId \| SeSObject |  ID of an object or SeSObject instance. |
| text | string |  Text to find. |
| clickType | string |  Type of a click to perform ("L"|"LD"|"R").<br>Optional, Default: "L". |




**Returns:**

'true' if the text was found, 'false' otherwise.



<a name="see.also.ocr.doclicktextinwindow"></a>

<a name="DoExtractFromImage"></a>    
#### DoExtractFromImage

Does OCR for 'img'.

```javascript
Ocr.DoExtractFromImage(img)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| img | SeSWrappers.Utils.ImageWrapper \| String |  Image (ImageWrapper object or path to a file) to do OCR. |




**Returns:**

Recognized text or empty string in the case of an error.



<a name="see.also.ocr.doextractfromimage"></a>

<a name="DoExtractFromObject"></a>    
#### DoExtractFromObject

Does OCR for a given object.

```javascript
Ocr.DoExtractFromObject(objId)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| objId | objectId \| SeSObject |  ID of an object or SeSObject instance. |




**Returns:**

Recognized text or empty string in the case of an error.



<a name="see.also.ocr.doextractfromobject"></a>

<a name="DoExtractFromScreen"></a>    
#### DoExtractFromScreen

Does OCR for a given rectangle.

```javascript
Ocr.DoExtractFromScreen(left, top, right, bottom)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| left | number |  X-coordinate of the top left corner. |
| top | number |  Y-coordinate of the top left corner. |
| right | number |  X-coordinate of the bottom right corner. |
| bottom | number |  Y-coordinate of the bottomo right corner. |




**Returns:**

Recognized text or empty string in the case of an error.



<a name="see.also.ocr.doextractfromscreen"></a>

<a name="DoExtractFromWindow"></a>    
#### DoExtractFromWindow

Does OCR for a window that contains a given object.

```javascript
Ocr.DoExtractFromWindow(objId)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| objId | SeSObject \| String |  ID of an object or SeSObject instance. |




**Returns:**

Recognized text or empty string in the case of an error.



<a name="see.also.ocr.doextractfromwindow"></a>

<a name="DoSelectOcrEngine"></a>    
#### DoSelectOcrEngine

Selects OCR engine by name. The name should point to installed OCR engine. Default pre-selected enigne is `windows`.

```javascript
Ocr.DoSelectOcrEngine(ocrName)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| ocrName | string |  Name of an OCR engine available to Rapise:`windows` or `tesseract`. |





<a name="see.also.ocr.doselectocrengine"></a>

<a name="DoSetOcrOption"></a>    
#### DoSetOcrOption

Sets an OCR option. Supported options depend on the selected OCR engine. For example for `windows` OCR engine: Ocr.DoSetOcrOption('language', 'es-ES')

```javascript
Ocr.DoSetOcrOption(name, value)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Option name. |
| value | string |  Option value. |





<a name="see.also.ocr.dosetocroption"></a>

  

