Summary: Oracle Forms Object.

# OracleFormsObject

Oracle Forms Object.
 
UI element class: regex:oracle\\.(ewt||forms)\\..*

Extends [JavaObject](JavaObject.md)

Extends [SeSSimulatedObject](SeSSimulatedObject.md)





**Behavior Pattern: OracleFormsGenericBehavior**


<!-- ============================== property summary ========================== -->

	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoSetFocus](#dosetfocus) | Sets keyboard input focus to this editor control. |
|	[DoSoftKey](#dosoftkey) | Send softkey to this editor control. |




<!-- ============================== property detail ========================== -->
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoSetFocus"></a>    
#### DoSetFocus

Sets keyboard input focus to this editor control.

```javascript
DoSetFocus() 
```





<a name="see.also.oracleformsobject.dosetfocus"></a>

<a name="DoSoftKey"></a>    
#### DoSoftKey

Send softkey to this editor control.

```javascript
DoSoftKey(softKey, bNoFocus) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| softKey | string |	Soft Key Code Possible values: "NEXT FIELD", "CLEAR RECORD", "DISPLAY ERROR", "PREVIOUS FIELD", "DELETE RECORD", "PRINT", "CLEAR FIELD", "DUPLICATE RECORD", "COUNT QUERY", "UP", "INSERT RECORD", "UPDATE RECORD", "DOWN", "NEXT SET OF RECORDS", "FUNCTION 0", "SCROLL UP", "NEXT RECORD", "FUNCTION 1", "SCROLL DOWN", "PREVIOUS RECORD", "FUNCTION 2", "EDIT", "CLEAR BLOCK", "FUNCTION 3", "RETURN", "BLOCK MENU", "FUNCTION 4", "LIST OF VALUES", "NEXT BLOCK", "FUNCTION 5", "HELP", "PREVIOUS BLOCK", "FUNCTION 6", "EXIT", "DUPLICATE FIELD", "FUNCTION 7", "SHOW KEYS", "CLEAR FORM", "FUNCTION 8", "COMMIT", "ENTER QUERY", "FUNCTION 9", "NEXT PRIMARY KEY", "EXECUTE QUERY", "LIST TAB PAGES"<br>Optional, Default: "NEXT FIELD". |
| bNoFocus | boolean |	Don't try to set focus before sending softkey.<br>Optional, Default: "true". |





<a name="see.also.oracleformsobject.dosoftkey"></a>

	

