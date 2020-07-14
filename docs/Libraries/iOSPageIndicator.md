Summary: iOSPageIndicator

# iOSPageIndicator

Extends [iOSObject](iOSObject.md)





**Behavior Pattern: iOSObjectPageIndicatorBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#itemcount) | Number of items. | GetItemCount |  |
| [PageIndex](#pageindex) | Selected page index. | GetPageIndex |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoNextPage](#donextpage) | Navigates to next page. |
|	[DoPrevPage](#doprevpage) | Navigates to previous page. |
|	[DoSelectPage](#doselectpage) | Selects a page at index. |




<!-- ============================== property detail ========================== -->
	
### Property Detail
		
<a name="ItemCount"></a>
#### ItemCount


Number of items.

			
	
			
Type: number
			
			
Accessors: GetItemCount
			
		
<a name="PageIndex"></a>
#### PageIndex


Selected page index.

			
	
			
Type: number
			
			
Accessors: GetPageIndex
			
		
	
	
<!-- ============================== action detail ========================== -->
	
### Action Detail
		
<a name="DoNextPage"></a>    
#### DoNextPage

Navigates to next page.

```javascript
DoNextPage() 
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iospageindicator.donextpage"></a>

<a name="DoPrevPage"></a>    
#### DoPrevPage

Navigates to previous page.

```javascript
DoPrevPage() 
```




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iospageindicator.doprevpage"></a>

<a name="DoSelectPage"></a>    
#### DoSelectPage

Selects a page at index.

```javascript
DoSelectPage(index) 
```


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	Index of the page. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iospageindicator.doselectpage"></a>

	

