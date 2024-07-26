//Put your custom functions and variables in this file

function SaveDomTree()
{
	var dom = Navigator.GetDomTree();
	Navigator.SaveDomToXml("List.xml", dom);
}

var tfn = "TopicIDs.txt";
function SaveTopicIDs(/**string*/ product)
{
	tfn = "TopicIDs_" + product + ".txt";
	var links = Navigator.DOMFindByXPath("//a[contains(@href,\"/Support/KnowledgeBase/KB\") and contains(@href,\".aspx\")]", true);
	File.Write(tfn, "");
	for(var i = 0; i < links.length; i++)
	{
		var link = links[i].GetHref();
		link = link.replace("https://www.inflectra.com/Support/KnowledgeBase/", "").replace(".aspx", "");
		File.Append(tfn, link + "\r\n");
	}
}

function ProcessTopics(/**string*/ product)
{
	tfn = "TopicIDs_" + product + ".txt";
	var ids = File.Read(tfn).split("\r\n");
	for(var i = 0; i < ids.length; i++)
	{
		var id = ids[i].trim();
		if (id)
		{
			Log(id);
			var topicFile = Global.GetFullPath("Topics_" + product + "\\"+ id + ".md");
			if (!File.Exists(topicFile))
			{
				global.Topic = id;
				RVL.DoPlaySheet("LoadArticle");
				//break;
			}
		}
	}
}

function SaveTopic(/**string*/ fileName, /**string*/ title, /**string*/ description, /**string*/ body)
{
	File.Write(fileName, "# Title" + "\r\n\r\n");
	File.Append(fileName, title + "\r\n\r\n");
	File.Append(fileName, "## Description" + "\r\n\r\n");
	File.Append(fileName, description + "\r\n\r\n");
	File.Append(fileName, "## Body" + "\r\n\r\n");
	File.Append(fileName, body + "\r\n\r\n");
}

function GetInnerHtml(/**object*/ obj)
{
	return WebDriver.ExecuteScript('return arguments[0].innerHTML;', obj.element.e);
}
