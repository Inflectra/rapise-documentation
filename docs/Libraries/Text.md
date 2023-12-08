Summary: Text object. Use it to perform text manipulations.

# Text

Text object. Use it to perform text manipulations.






<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[Base64Decode](#base64decode) | Decodes base64 string. |
|	[Base64Encode](#base64encode) | Converts string to base64 format. |
|	[CharAt](#charat) | Returns a new string consisting of the single UTF-16 code unit located at the specified `index` into the `str`. |
|	[CharCodeAt](#charcodeat) | Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given `index` into the `str`. |
|	[Concat](#concat) | Append `str2` to `str1`. |
|	[Contains](#contains) | Perform a case-sensitive search to determine whether `substr` may be found within `str`, returning `true` or `false` as appropriate. |
|	[EndsWith](#endswith) | Determines whether a `str` ends with the characters of `substr`. |
|	[FileContains](#filecontains) | Perform a case-sensitive search (find in file) to determine whether `substr` may be found within a text file represented by `filePath`, returning `true` or `false` as appropriate. |
|	[FirstIndex](#firstindex) | The first index at which a given `substr` can be found in the `str`, or -1 if it is not present. |
|	[Format](#format) | Format given `formatStr` template string by expanding properties of `nameValueJsonObj` as {param1}, {param2} etc template params. |
|	[IncrementDate](#incrementdate) | Increments a date/time string with a given offset. |
|	[Join](#join) | Concatenate all of the elements in `arr` array (or an array-like object), separated by commas or a specified `separator` string. |
|	[LastIndex](#lastindex) | The last index at which a given `substr` can be found in the `str`, or -1 if it is not present. |
|	[Limit](#limit) | Limit `str` to be not more than `maxLength` chars. |
|	[PadEnd](#padend) | Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. |
|	[PadStart](#padstart) | Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. |
|	[Repeat](#repeat) | Returns a new string which contains the specified number of copies of `str`, concatenated together. |
|	[ReplaceAll](#replaceall) | Replace all occurences of `oldValue` in `str` with `newValue` . |
|	[ReplaceFirst](#replacefirst) | Replace first occurence of `oldValue` in `str` with `newValue` . |
|	[Split](#split) | Divides `str` into an ordered list of substrings, puts these substrings into an array, and returns the array. |
|	[SplitAt](#splitat) | Get `atInd`th item after split. |
|	[SplitCount](#splitcount) | Get number of parts that will occur after splitting given `str` with given `separator`. |
|	[StartsWith](#startswith) | Determines whether `str` begins with the characters of `substr`. |
|	[Substr](#substr) | Extract `length` characters from a `str`, counting from the `start` index. |
|	[Substring](#substring) | Text.Substring() extracts characters from `indexStart` up to but not including `indexEnd`. |
|	[ToLowercase](#tolowercase) | Returns `str` value converted to lowercase. |
|	[ToString](#tostring) | Convert anything to a string. |
|	[ToUppercase](#touppercase) | Returns the `str` value converted to uppercase. |
|	[Trim](#trim) | Strips leading and trailing white-space from a string, replaces sequences of whitespace characters by a single space, and returns the resulting string. |
|	[TrimEnd](#trimend) | Strips trailing white-space from a string, replaces sequences of whitespace characters by a single space, and returns the resulting string. |
|	[TrimStart](#trimstart) | Strips leading white-space from a string, replaces sequences of whitespace characters by a single space, and returns the resulting string. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="Base64Decode"></a>    
#### Base64Decode

Decodes base64 string. Requires Rapise 8.1+.

```javascript
Base64Decode(base64EncodedData) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| base64EncodedData | string |	Base64 encoded string. |





<a name="see.also.text.base64decode"></a>

<a name="Base64Encode"></a>    
#### Base64Encode

Converts string to base64 format. Requires Rapise 8.1+.

```javascript
Base64Encode(plainText) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| plainText | string |	Input string to encode. |





<a name="see.also.text.base64encode"></a>

<a name="CharAt"></a>    
#### CharAt

Returns a new string consisting of the single UTF-16 code unit located at the specified `index` into the `str`.

```javascript
CharAt(str, index) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to extract from. |
| index | number |	Character position. |




**Returns:**

string: Char at `index`.



<a name="see.also.text.charat"></a>

<a name="CharCodeAt"></a>    
#### CharCodeAt

Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given `index` into the `str`.

```javascript
CharCodeAt(str, index) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to search in. |
| index | number |	Character position. |




**Returns:**

number: Char code at `index`.



<a name="see.also.text.charcodeat"></a>

<a name="Concat"></a>    
#### Concat

Append `str2` to `str1`.

```javascript
Concat(str1, str2) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str1 | string |	1st part. |
| str2 | string |	2nd part (may be array). |




**Returns:**

string: Combined string



<a name="see.also.text.concat"></a>

<a name="Contains"></a>    
#### Contains

Perform a case-sensitive search to determine whether `substr` may be found within `str`, returning `true` or `false` as appropriate.

```javascript
Contains(str, substr) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to search in. |
| substr | string |	Substring to find. |




**Returns:**

boolean: `true` if `substr` was found in `str`.



<a name="see.also.text.contains"></a>

<a name="EndsWith"></a>    
#### EndsWith

Determines whether a `str` ends with the characters of `substr`.

```javascript
EndsWith(str, substr) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to search in. |
| substr | string |	Substring to find. |




**Returns:**

boolean: `true` or `false` as appropriate



<a name="see.also.text.endswith"></a>

<a name="FileContains"></a>    
#### FileContains

Perform a case-sensitive search (find in file) to determine whether `substr` may be found within a text file represented by `filePath`, returning `true` or `false` as appropriate.

```javascript
FileContains(filePath, substr) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| filePath | string |	File Path. |
| substr | string |	Text to modify. |




**Returns:**

boolean: `true` if `substr` was found in the file.



<a name="see.also.text.filecontains"></a>

<a name="FirstIndex"></a>    
#### FirstIndex

The first index at which a given `substr` can be found in the `str`, or -1 if it is not present. Search starts from `fromIndex`.

```javascript
FirstIndex(str, substr, fromIndex) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to search in. |
| substr | string |	Substring to find. |
| fromIndex | number |	An integer representing the index at which to start the search. Defaults to 0.<br>Optional. |




**Returns:**

number: Index or -1



<a name="see.also.text.firstindex"></a>

<a name="Format"></a>    
#### Format

Format given `formatStr` template string by expanding properties of `nameValueJsonObj` as {param1}, {param2} etc template params.".
				Designed to be called from JavaScript. If you need to call it from `RVL` then consider using `RVL.FormatString` instead.

```javascript
Format(formatStr, nameValueJsonObj) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| formatStr | string |	Format with template placeholders {a}, {value}, {x} etc. |
| nameValueJsonObj | object |	JSON-formatted object, with properties used as input parameter names. |




**Returns:**

string: Formatted string



<a name="see.also.text.format"></a>

<a name="IncrementDate"></a>    
#### IncrementDate

Increments a date/time string with a given offset. Requires Rapise 8.1+.
1. Parses date using given format specifier.
	Formatting is described here: https://msdn.microsoft.com/en-us/library/az4se3k1(v=vs.85).aspx
	Example: yyyy-MM-dd HH:mm
2. Adds/Subtracts specified number of years, months, days, hours, minutes.
	The number may be negative or positive, i.e. months=2 adds 2 months, months=-3 goes 3 months back, months=0 leaves months intact.
3. Formats the date back and returns.

```javascript
IncrementDate(dstr, fmt, years, months, days, hours, minutes) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| dstr | string |	Date/time string. If not set then current date/time is used. |
| fmt | string |	Date/time format. |
| years | number |	Year increment/decrement. |
| months | number |	Month increment/decrement. |
| days | number |	Day increment/decrement. |
| hours | number |	Hour increment/decrement. |
| minutes | number |	Minute increment/decrement. |





<a name="see.also.text.incrementdate"></a>

<a name="Join"></a>    
#### Join

Concatenate all of the elements in `arr` array (or an array-like object), separated by commas or a specified `separator` string. If the array has only one item, then that item will be returned without using the separator.

```javascript
Join(arr, separator) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| arr | array |	Input array. |
| separator | string |	Join separator (default - ',')<br>Optional. |




**Returns:**

string: A string with all array elements joined. If arr.length is 0, the empty string is returned.



<a name="see.also.text.join"></a>

<a name="LastIndex"></a>    
#### LastIndex

The last index at which a given `substr` can be found in the `str`, or -1 if it is not present. Search backwards from `fromIndex`.

```javascript
LastIndex(str, substr, fromIndex) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to search in. |
| substr | string |	Substring to find. |
| fromIndex | number |	An integer representing the index at which to start the search. Defaults to 0.<br>Optional. |




**Returns:**

number: Index or -1



<a name="see.also.text.lastindex"></a>

<a name="Limit"></a>    
#### Limit

Limit `str` to be not more than `maxLength` chars. If `ellipsis` is specified, it is appended to the string.

```javascript
Limit(str, maxLength, ellipsis) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to limit. |
| maxLength | number |	The maximum allowed length of the resulting string. |
| ellipsis | string |	The padding text to append to the end if the string was actually shortened.<br>Optional. |




**Returns:**

string: Whole or shortened string.



<a name="see.also.text.limit"></a>

<a name="PadEnd"></a>    
#### PadEnd

Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied to the end of the `str`.

```javascript
PadEnd(str, targetLength, padString) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to pad. |
| targetLength | number |	The length of the resulting string once the current str has been padded. If the value is less than str.length, then str is returned as-is. |
| padString | string |	The string to pad the current str with. |




**Returns:**

string: A String of the specified `targetLength` with `padString` applied from the start.



<a name="see.also.text.padend"></a>

<a name="PadStart"></a>    
#### PadStart

Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the `str`.

```javascript
PadStart(str, targetLength, padString) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to pad. |
| targetLength | number |	The length of the resulting string once the current str has been padded. If the value is less than str.length, then str is returned as-is. |
| padString | string |	The string to pad the current str with. |




**Returns:**

string: A String of the specified `targetLength` with `padString` applied from the start.



<a name="see.also.text.padstart"></a>

<a name="Repeat"></a>    
#### Repeat

Returns a new string which contains the specified number of copies of `str`, concatenated together.

```javascript
Repeat(str, count) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to repeat. |
| count | number |	Number of times to repeat. |




**Returns:**

string: string containing the specified number of copies of the given string.



<a name="see.also.text.repeat"></a>

<a name="ReplaceAll"></a>    
#### ReplaceAll

Replace all occurences of `oldValue` in `str` with `newValue` .

```javascript
ReplaceAll(str, oldValue, newValue) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to modify. |
| oldValue | string |	Substring to find. |
| newValue | string |	Replacement value. |




**Returns:**

string: Text after replace.



<a name="see.also.text.replaceall"></a>

<a name="ReplaceFirst"></a>    
#### ReplaceFirst

Replace first occurence of `oldValue` in `str` with `newValue` .

```javascript
ReplaceFirst(str, oldValue, newValue) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to modify. |
| oldValue | string |	Substring to find. |
| newValue | string |	Replacement value. |




**Returns:**

string: Text after replace.



<a name="see.also.text.replacefirst"></a>

<a name="Split"></a>    
#### Split

Divides `str` into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a `separator`.

```javascript
Split(str, separator) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to split. |
| separator | string |	Split separator |




**Returns:**

array: Array of strings



<a name="see.also.text.split"></a>

<a name="SplitAt"></a>    
#### SplitAt

Get `atInd`th item after split. If `atInd`<0 or `atInd` is more than split array size, `null` is returned.

```javascript
SplitAt(str, separator, atInd) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to split. |
| separator | string |	Split separator |
| atInd | number |	0-based index of item |




**Returns:**

string: Item string or null, if index is out of scope.



<a name="see.also.text.splitat"></a>

<a name="SplitCount"></a>    
#### SplitCount

Get number of parts that will occur after splitting given `str` with given `separator`.

```javascript
SplitCount(str, separator) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to split. |
| separator | string |	Split separator |




**Returns:**

number: Number of split parts



<a name="see.also.text.splitcount"></a>

<a name="StartsWith"></a>    
#### StartsWith

Determines whether `str` begins with the characters of `substr`.

```javascript
StartsWith(str, substr) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to search in. |
| substr | string |	Substring to find. |




**Returns:**

boolean: `true` or `false` as appropriate



<a name="see.also.text.startswith"></a>

<a name="Substr"></a>    
#### Substr

Extract `length` characters from a `str`, counting from the `start` index.

- If `start` is a non-negative number, the index starts counting from the start of the string. Its value is capped at `str.length - 1`.
- If `start` is a negative number, the index starts counting from the end of the string. Its value is capped at `-str.length`.
- If `length` is omitted, `Text.Substr()` extracts characters to the end of the string.
- If `length` is `undefined`, `Text.Substr()` extracts characters to the end of the string.
- If `length` is a negative number, it is treated as 0.
- For both start and length, `NaN` is treated as 0.

```javascript
Substr(str, start, length) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to extract from. |
| start | number |	where to start the substring. |
| length | number |	how many characters to return.<br>Optional. |




**Returns:**

string: Substring



<a name="see.also.text.substr"></a>

<a name="Substring"></a>    
#### Substring

Text.Substring() extracts characters from `indexStart` up to but not including `indexEnd`. In particular:

- If `indexEnd` is omitted, `Text.Substring()` extracts characters to the end of the string.
- If `indexStart` is equal to indexEnd, `Text.Substring()` returns an empty string.
- If `indexStart` is greater than `indexEnd`, then the effect of `Text.Substring()` is as if the two arguments were swapped;

Any argument value that is less than 0 or greater than `str.length` is treated as if it were 0 and `str.length`, respectively.

```javascript
Substring(str, indexStart, indexEnd) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to extract from. |
| indexStart | number |	The index of the first character to include in the returned substring. |
| indexEnd | number |	The index of the first character to exclude from the returned substring.<br>Optional. |




**Returns:**

string: Substring



<a name="see.also.text.substring"></a>

<a name="ToLowercase"></a>    
#### ToLowercase

Returns `str` value converted to lowercase.

```javascript
ToLowercase(str) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to process. |




**Returns:**

string: Lowercase value.



<a name="see.also.text.tolowercase"></a>

<a name="ToString"></a>    
#### ToString

Convert anything to a string.

```javascript
ToString(anyObj) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| anyObj | object |	Object of any type |




**Returns:**

string: string representation of the object



<a name="see.also.text.tostring"></a>

<a name="ToUppercase"></a>    
#### ToUppercase

Returns the `str` value converted to uppercase.

```javascript
ToUppercase(str) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	Text to process. |




**Returns:**

string: Uppercase value.



<a name="see.also.text.touppercase"></a>

<a name="Trim"></a>    
#### Trim

Strips leading and trailing white-space from a string, replaces sequences of whitespace characters by a single space, and returns the resulting string. 
Whitespace characters are [ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff].

```javascript
Trim(str, global, trimChars) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	String to trim. |
| global | boolean |	If 'true' then global trim is performed (whitespaces in the middle are substituted with a single space). If 'false' only ends are trimmed.<br>Optional, Default: "false". |
| trimChars | string |	String with each char to be subject for trim.<br>Optional. |




**Returns:**

string: Trimmed string.



<a name="see.also.text.trim"></a>

<a name="TrimEnd"></a>    
#### TrimEnd

Strips trailing white-space from a string, replaces sequences of whitespace characters by a single space, and returns the resulting string. 
Whitespace characters are [ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff].

```javascript
TrimEnd(str, trimChars) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	String to trim. |
| trimChars | string |	String with each char to be subject for trim.<br>Optional. |




**Returns:**

string: Trimmed string.



<a name="see.also.text.trimend"></a>

<a name="TrimStart"></a>    
#### TrimStart

Strips leading white-space from a string, replaces sequences of whitespace characters by a single space, and returns the resulting string. 
Whitespace characters are [ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff].

```javascript
TrimStart(str, trimChars) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| str | string |	String to trim. |
| trimChars | string |	String with each char to be subject for trim.<br>Optional. |




**Returns:**

string: Trimmed string.



<a name="see.also.text.trimstart"></a>

	

