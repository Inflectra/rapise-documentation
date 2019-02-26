# Ocr

Optical Character Resolution (OCR) object. Use it to recognize text on the screen.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoClickTextInObject](#DoClickTextInObject) | Does OCR for a given object, finds a given string and clicks on it. |
|	[DoClickTextInWindow](#DoClickTextInWindow) | Does OCR for a window that contains a given object, finds a given string and clicks on it. |
|	[DoExtractFromImage](#DoExtractFromImage) | Does OCR for 'img'. |
|	[DoExtractFromObject](#DoExtractFromObject) | Does OCR for a given object. |
|	[DoExtractFromScreen](#DoExtractFromScreen) | Does OCR for a given rectangle. |
|	[DoExtractFromWindow](#DoExtractFromWindow) | Does OCR for a window that contains a given object. |
|	[DoSelectOcrEngine](#DoSelectOcrEngine) | Selects OCR engine by name. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoClickTextInObject"></a>    
#### DoClickTextInObject(objId, text, clickType)

Does OCR for a given object, finds a given string and clicks on it.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| objId | SeSObject \| String |	ID of an object or SeSObject instance. |
| text | string |	Text to find. |
| clickType | string |	Type of a click to perform.<br>Optional, Default: "L". |




**Returns:**

'true' if the text was found, 'false' otherwise.




<a name="DoClickTextInWindow"></a>    
#### DoClickTextInWindow(objId, text, clickType)

Does OCR for a window that contains a given object, finds a given string and clicks on it.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| objId | SeSObject \| String |	ID of an object or SeSObject instance. |
| text | string |	Text to find. |
| clickType | string |	Type of a click to perform.<br>Optional, Default: "L". |




**Returns:**

'true' if the text was found, 'false' otherwise.




<a name="DoExtractFromImage"></a>    
#### DoExtractFromImage(img)

Does OCR for 'img'.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| img | SeSWrappers.Utils.ImageWrapper \| String |	Image (ImageWrapper object or path to a file) to do OCR. |




**Returns:**

Recognized text or empty string in the case of an error.




<a name="DoExtractFromObject"></a>    
#### DoExtractFromObject(objId)

Does OCR for a given object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| objId | SeSObject \| String |	ID of an object or SeSObject instance. |




**Returns:**

Recognized text or empty string in the case of an error.




<a name="DoExtractFromScreen"></a>    
#### DoExtractFromScreen(left, top, right, bottom)

Does OCR for a given rectangle.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| left | number |	X-coordinate of the top left corner. |
| top | number |	Y-coordinate of the top left corner. |
| right | number |	X-coordinate of the bottom right corner. |
| bottom | number |	Y-coordinate of the bottomo right corner. |




**Returns:**

Recognized text or empty string in the case of an error.




<a name="DoExtractFromWindow"></a>    
#### DoExtractFromWindow(objId)

Does OCR for a window that contains a given object.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| objId | SeSObject \| String |	ID of an object or SeSObject instance. |




**Returns:**

Recognized text or empty string in the case of an error.




<a name="DoSelectOcrEngine"></a>    
#### DoSelectOcrEngine(ocrName)

Selects OCR engine by name. The name should point to installed OCR engine.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| ocrName | string |	Name of an OCR engine available to SmarteStudio. For example, 'Textract' or 'Tesseract'. |






	

