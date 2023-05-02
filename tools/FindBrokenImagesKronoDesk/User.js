//Put your custom functions and variables in this file

global.brokenImagesFileName = "BrokenImagesKronodesk.txt";

function ObjectToString(obj)
{
	var result = "";
	for(var p in obj)
	{
		result += p + ","
	}
	return result;
}

function CheckArticles()
{
	var data = File.Read('Articles.kb');
	eval("var articles = " + data);
	if (articles && articles.Articles)
	{
		for(var i = 0; i < articles.Articles.length; i++)
		{
			var a = articles.Articles[i];
			var href = a.Href;
			if (href)
			{
				CheckUrl(href);
			}
		}
	}
}

function CheckUrl(url)
{
	Tester.Message("Checking " + url);
	Navigator.Open(url);
	Global.DoSleep(3000);
	var images = Navigator.DOMFindByXPath("//img[not(@id) and parent::p]", true);
	var attachments = Navigator.DOMFindByXPath("//a[@title and contains(@href,'Support/Attachment')]", true);
	
	var imageIds = [];
	for(var i = 0; i < images.length; i++)
	{
		var img = images[i];
		var src = img._DoDOMGetAttribute("src");
		if (src)
		{
			var id = src.replace("https://www.inflectra.com/Support/Attachment/", "").replace("/Support/Attachment/", "").replace(".aspx", "");
			if (id)
			{
				imageIds.push(id);
			}
		}
	}
	Tester.Message("Images: " + imageIds.join(","));
	
	var attachmentIds = {};
	for(var i = 0; i < attachments.length; i++)
	{
		var a = attachments[i];
		var href = a.GetHref();
		if (href)
		{
			var id = href.replace("https://www.inflectra.com/Support/Attachment/", "").replace(".aspx", "");
			if (id)
			{
				attachmentIds[id] = 1;
			}
		}
	}
	
	Tester.Message("Attachments: " + ObjectToString(attachmentIds));
	
	if (!CheckImages(imageIds, attachmentIds))
	{
		File.Append(brokenImagesFileName, url + "\r\n");
	}
}

function CheckImages(imageIds, attachmentIds)
{
	var result = true;
	for(var i = 0; i < imageIds.length; i++)
	{
		var id = imageIds[i];
		if(attachmentIds[id])
		{
			Tester.Message("Image " + id + " exists");
		}
		else
		{
			Tester.Message("Image " + id + " is missing");
			result = false;
		}
	}
	return result;
}