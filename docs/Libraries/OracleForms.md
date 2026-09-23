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
|  [GetVisibleDialogInfo](#getvisibledialoginfo) | Get information about any visible dialog window (ChoiceBox or FWindow). |
|  [GetVisibleDialogMessage](#getvisibledialogmessage) | Get the message of any visible dialog window (ChoiceBox or FWindow). |
|  [GetVisibleDialogTitle](#getvisibledialogtitle) | Get the title of any visible dialog window (ChoiceBox or FWindow). |
|  [HasVisibleErrorDialog](#hasvisibleerrordialog) | Quickly check if an error dialog (ChoiceBox with title "Error") is currently visible. |



<!-- ============================== property detail ========================== -->


<!-- ============================== action detail ========================== -->

### Action Detail

<a name="DoLOVSelect"></a>    
#### DoLOVSelect

Select LOV (List of Values) Value.

```javascript
OracleForms.DoLOVSelect(txtOrInd, lovFilterText, timeout)
```


**Parameters:**

|  **Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| txtOrInd | string \| number |  LOV item text or Index. |
| lovFilterText | string |  Default filter value.<br>Optional, Default: "%". |
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

<a name="GetVisibleDialogInfo"></a>    
#### GetVisibleDialogInfo

Get information about any visible dialog window (ChoiceBox or FWindow).
Returns an object with type, title, and message properties, or null if no dialog.
This is much faster than searching through the component tree.

```javascript
OracleForms.GetVisibleDialogInfo()
```




**Returns:**

[Object](Object.md) | <br>[null](null.md): Dialog info object {type, title, message} or null.



<a name="see.also.oracleforms.getvisibledialoginfo"></a>

<a name="GetVisibleDialogMessage"></a>    
#### GetVisibleDialogMessage

Get the message of any visible dialog window (ChoiceBox or FWindow).
This is much faster than searching through the component tree.

```javascript
OracleForms.GetVisibleDialogMessage()
```




**Returns:**

string | <br>[null](null.md): Dialog message or null if no dialog visible.



<a name="see.also.oracleforms.getvisibledialogmessage"></a>

<a name="GetVisibleDialogTitle"></a>    
#### GetVisibleDialogTitle

Get the title of any visible dialog window (ChoiceBox or FWindow).
This is much faster than searching through the component tree.

```javascript
OracleForms.GetVisibleDialogTitle()
```




**Returns:**

string | <br>[null](null.md): Dialog title or null if no dialog visible.



<a name="see.also.oracleforms.getvisibledialogtitle"></a>

<a name="HasVisibleErrorDialog"></a>    
#### HasVisibleErrorDialog

Quickly check if an error dialog (ChoiceBox with title "Error") is currently visible.
This is much faster than searching through the component tree.

```javascript
OracleForms.HasVisibleErrorDialog()
```




**Returns:**

true if an error dialog is visible, false otherwise.



<a name="see.also.oracleforms.hasvisibleerrordialog"></a>

  

