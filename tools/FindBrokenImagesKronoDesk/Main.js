//Use 'Record/Learn' button to begin test recording

function Test(params)
{
	//CheckUrl("https://www.inflectra.com/Support/KnowledgeBase/KB19.aspx");
	//return;
	
	File.Delete(brokenImagesFileName);
	CheckArticles();
	
/*	
	var links = [
"https://www.inflectra.com/Support/KnowledgeBase/KB705.aspx",
"https://www.inflectra.com/Support/KnowledgeBase/KB19.aspx"
	];
	
	for(var i = 0; i < links.length; i++)
	{
		var href = links[i];
		if (href)
		{
			CheckUrl(href);
		}
	}	
*/	
}

g_load_libraries=["Web"]

