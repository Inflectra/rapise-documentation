Summary: Use Generator object to produce unique and formatted data input. Requires Rapise 7.2+

# Generator

Use Generator object to produce unique and formatted data input. Requires Rapise 7.2+






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [Create](#create) | Creates generator object in Spira. |
|  [Format](#format) | Formats string according to a template. |
|  [GetCurrentValue](#getcurrentvalue) | Calculates actual value of the generator according to a template. |
|  [GetNextValue](#getnextvalue) | Calculates next value of the generator according to a template. |
|  [RandomString](#randomstring) | Generates a random alphanumeric string of a given length. |
|  [Reset](#reset) | Set Generator Value. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="Create"></a>    
#### Create

Creates generator object in Spira. To get next value from the generator use `GetNextValue`. Generator object can be used by parallel tests and simultaneously by different users.

```javascript
Generator.Create(name, type, value, projectNameOrId)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Unique name of the generator. |
| type | string |  Type of the generator. Supported types: increment. |
| value | string \| number |  Initial value of the generator. |
| projectNameOrId | string \| number |  Name or ID of a Spira project that should host the generator.<br>Optional. |




**Returns:**

number: ID of the generator or 0 in the case of error



<a name="see.also.generator.create"></a>

<a name="Format"></a>    
#### Format

Formats string according to a template.

Supported patterns:
		 
|	Pattern	|	Description	|	Example
|--		|--		|--	
|	#	|	Digit 0-9	|	3
|	dd	|	Day of month (1-28)	|	21
|	mm	|	Month number	|	10
|	yy	|	00-99	|	75
|	yyyy	|	Year (1950-2000)	|	1993
|	GUID	|	GUID	|	00eccc37-6802-9adf-22f6-b376826d73c7
|	DAY	|	Mon-Sat	|	Fri
|	NAME	|	Random name	|	Belinda
|	BOYNAMES	|	Random male name	|	William
|	GIRLNAMES	|	Random female name	|	Olivia
|	SURNAME	|	Random last name	|	Keller
|	MONTH	|	Jan-Dec	|	Apr
|	COLOR	|	Color	|	Green
|	CAR	|	Car vendor	|	Mazda
|	STREET	|	Random street name	|	Main Street
|	STATE	|	State name	|	Arkansas
|	STATECODE	|	State code	|	AR
|	CITY	|	Random city name	|	Esmont
|	COMPANY	|	Random company name	|	Earthmark

```javascript
Generator.Format(template)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| template | string |  Template string. |




**Returns:**

string | <br>number: Value generated using a template.



<a name="see.also.generator.format"></a>

<a name="GetCurrentValue"></a>    
#### GetCurrentValue

Calculates actual value of the generator according to a template. The template can be empty, can contain {value} placeholder or be a function.

```javascript
Generator.GetCurrentValue(name, template, projectNameOrId)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Unique name of the generator. |
| template | string |  Template for the value to return. If template is empty then generated value is returned as is. If it is a string then generated value replaces placeholder {value}. Template can be a function that receives the next value and calculates the value to return.<br>Optional, Default: "{value}". |
| projectNameOrId | string \| number |  Name or ID of a Spira project that hosts the generator.<br>Optional. |




**Returns:**

string | <br>number: Actual value or null



<a name="see.also.generator.getcurrentvalue"></a>

<a name="GetNextValue"></a>    
#### GetNextValue

Calculates next value of the generator according to a template. The template can be empty, can contain {value} placeholder or be a function.

```javascript
Generator.GetNextValue(name, template, projectNameOrId)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Unique name of the generator. |
| template | string |  Template for the value to return. If template is empty then generated value is returned as is. If it is a string then generated value replaces placeholder {value}. Template can be a function that receives the next value and calculates the value to return.<br>Optional, Default: "{value}". |
| projectNameOrId | string \| number |  Name or ID of a Spira project that hosts the generator.<br>Optional. |




**Returns:**

string | <br>number: Next generated value or null



<a name="see.also.generator.getnextvalue"></a>

<a name="RandomString"></a>    
#### RandomString

Generates a random alphanumeric string of a given length. Requires Rapise 8.1+

```javascript
Generator.RandomString(length)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| length | number |  Length of the string to return. |




**Returns:**

string: Generated string.



<a name="see.also.generator.randomstring"></a>

<a name="Reset"></a>    
#### Reset

Set Generator Value.

```javascript
Generator.Reset(name, value, projectNameOrId)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| name | string |  Unique name of the generator. |
| value | string \| number |  New value of the generator. |
| projectNameOrId | string \| number |  Name or ID of a Spira project that hosts the generator.<br>Optional. |




**Returns:**

string | <br>number: Generator Id



<a name="see.also.generator.reset"></a>

  

