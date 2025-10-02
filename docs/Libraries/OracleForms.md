Summary: OracleForms Global Helper Object.

# OracleForms

OracleForms Global Helper Object.






<!-- ============================== property summary ========================== -->

<!-- ============================== action summary ========================== -->



### Action Summary
|  **Action** | **Description** | 
| ----------- | --------------- |
|  [DoLOVSelect](#dolovselect) | Select LOV (List of Values) Value. |
|  [DoMenu](#domenu) | Performs click on the menu item. |
|  [DoPressNotificationButton](#dopressnotificationbutton) | Press button in the notification prompt (Accept, OK, Cancel, etc). |
|  [GetLOVTitle](#getlovtitle) | Get title of currently displayed LOV selection window. |
|  [GetNotificationMessage](#getnotificationmessage) | Get message of currently displayed notification window. |
|  [GetNotificationTitle](#getnotificationtitle) | Get title of currently displayed notification window. |
|  [GetStatusMessage](#getstatusmessage) | Get status bar message. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoLOVSelect"></a>    
#### DoLOVSelect

Select LOV (List of Values) Value.

```javascript
OracleForms.DoLOVSelect(txtOrInd, timeout)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| txtOrInd | string \| number |  LOV item text or Index. |
| timeout | number |  Maximum time to wait (milliseconds).<br>Optional, Default: "3000". |




**Returns:**

popup window title.



<a name="see.also.oracleforms.dolovselect"></a>

<a name="DoMenu"></a>    
#### DoMenu

Performs click on the menu item.

```javascript
OracleForms.DoMenu(menuPath, sep)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| menuPath | string |  Path from the menu root to a leaf item with components delimited by separator parameter. |
| sep | string |  Separator character. Possible values: ";", ",", "\", "/"<br>Optional, Default: ";". |




**Returns:**

'true' if successfull.



<a name="see.also.oracleforms.domenu"></a>

<a name="DoPressNotificationButton"></a>    
#### DoPressNotificationButton

Press button in the notification prompt (Accept, OK, Cancel, etc).

```javascript
OracleForms.DoPressNotificationButton(label)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| label | string |  Button label (i.e. 'OK') |




**Returns:**

'true' if succeeded.



<a name="see.also.oracleforms.dopressnotificationbutton"></a>

<a name="GetLOVTitle"></a>    
#### GetLOVTitle

Get title of currently displayed LOV selection window.

```javascript
OracleForms.GetLOVTitle()
```




**Returns:**

popup window title.



<a name="see.also.oracleforms.getlovtitle"></a>

<a name="GetNotificationMessage"></a>    
#### GetNotificationMessage

Get message of currently displayed notification window.

```javascript
OracleForms.GetNotificationMessage()
```




**Returns:**

popup window message.



<a name="see.also.oracleforms.getnotificationmessage"></a>

<a name="GetNotificationTitle"></a>    
#### GetNotificationTitle

Get title of currently displayed notification window.

```javascript
OracleForms.GetNotificationTitle(timeout)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| timeout | number |  Maximum time to wait (milliseconds).<br>Optional, Default: "10000". |




**Returns:**

popup window title.



<a name="see.also.oracleforms.getnotificationtitle"></a>

<a name="GetStatusMessage"></a>    
#### GetStatusMessage

Get status bar message.

```javascript
OracleForms.GetStatusMessage()
```




**Returns:**

status bar message text.



<a name="see.also.oracleforms.getstatusmessage"></a>

  

