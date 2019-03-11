# iOSPageIndicator

Extends <link displaytype="text" defaultstyle="true" type="topiclink" href="iOSObject" styleclass="Normal" translate="true">iOSObject</link>.

Extends SeSSimulatedObject.





**Behavior Pattern: iOSObjectPageIndicatorBehavior**


<!-- ============================== property summary ========================== -->

	

### Property Summary

| **Property** | **Description** | **Getter** | **Setter** |
| ------------ | --------------- | ---------- | ---------- |
| [ItemCount](#ItemCount) | Number of items. | GetItemCount |  |
| [PageIndex](#PageIndex) | Selected page index. | GetPageIndex |  |



	
<!-- ============================== action summary ========================== -->



### Action Summary

|  **Action** | **Description** | 
| ----------- | --------------- |
|	[DoNextPage](#DoNextPage) | Navigates to next page. |
|	[DoPrevPage](#DoPrevPage) | Navigates to previous page. |
|	[DoSelectPage](#DoSelectPage) | Selects a page at index. |




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
#### DoNextPage()

Navigates to next page.




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iospageindicator.donextpage"></a>

<a name="DoPrevPage"></a>    
#### DoPrevPage()

Navigates to previous page.




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iospageindicator.doprevpage"></a>

<a name="DoSelectPage"></a>    
#### DoSelectPage(index)

Selects a page at index.


**Parameters:**

|	**Name** | **Type** | **Description** |
| ---------- | -------- | --------------- |
| index | number |	Index of the page. |




**Returns:**

boolean: 'true' if success, 'false' otherwise.



<a name="see.also.iospageindicator.doselectpage"></a>

	

