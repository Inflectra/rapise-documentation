// Put functions and global variables shared across all test cases here

/**
 * Run this code before each test case.
 */
SeSOnTestInit(function() {
	if (g_entryPointName == "Test") {
		// Put your common initialization code here
	}
});

/**
 * Run this code after each test case.
 */
SeSOnTestFinish(function() {
	if (g_entryPointName == "Test") {
		// Put your common finalization code here
		Navigator.Close();
	}
});

var rootUrl = "";
var fn = "Links.txt";
var cfn = "CheckedLinks.txt";
var efn = "BrokenLinks.txt";
var linksToCheck = {};
var checkedLinks = {};

function ExtractBaseLinks()
{
	File.Write(fn, "");
	var links = Navigator.DOMFindByXPath("//a", true);
	var count = links.length;
	Tester.Message("Found " + count + " links");
	for(var i = 0; i < count; i++)
	{
		var /**HTMLObject*/ l = links[i];
		var href = l.DoDOMGetAttribute('href');
		File.Append(fn, href + "\r\n");
	}
}

function BuildUrl(/**string*/ baseUrl, /**string*/ relativePath)
{
	var url = baseUrl;
	if (relativePath.indexOf("/") != 0 && baseUrl.lastIndexOf("/") != (baseUrl.length - 1))
	{
		url = url + "/";
	}
	else if (relativePath.indexOf("/") == 0)
	{
		url = rootUrl + relativePath;
		return url;
	}

	url = url + relativePath;
	return url;
}

function CheckBaseLinks(/**string*/ baseUrl)
{
	rootUrl = baseUrl;
	File.Write(cfn, "");
	File.Write(efn, "");
	var /**string*/ text = File.Read(fn);
	var links = text.split("\r\n");
	for(var i = 0; i < links.length; i++)
	{
		var l = links[i];
		if (l.indexOf("http") == 0)
		{
			Tester.Message("External: " + l);
		}
		else if (l.indexOf("#") == 0)
		{
			Tester.Message("Anchor: " + l);
		}
		else if (l == "." || l == "")
		{
			Tester.Message("Skip empty line");
		}
		else
		{
			if (l.indexOf("/") == 0)
			{
				Tester.Message("Absolute: " + l);
			}
			linksToCheck[l] = 0;
		}
	}
	
	for(var l in linksToCheck)
	{
		var url = BuildUrl(baseUrl, l);
		CheckPageLinks(url, l);
	}
}

function CheckLink(baseUrl, relativePath)
{
	if (relativePath.indexOf("http") == 0)
	{
		return; //absolute
	}
	
	if (relativePath.indexOf("&#109;") == 0)
	{
		return; // mailto
	}
	
	if (relativePath.indexOf("chrome:") == 0 || relativePath.indexOf("edge:") == 0)
	{
		return; //extensions
	}
	
	
	var url = BuildUrl(baseUrl, relativePath);

	if (typeof(checkedLinks[url]) != "undefined")
	{
		return; // checked
	}
	
	checkedLinks[url] = 1;
	
	File.Append(cfn, "Checking link: " + url + "\r\n");
	var req = /**RESTService*/Session.GetNewRequest(url, url);
	req._DoExecute();
	var code = req.GetResponseStatusCode();
	
	if (code != 200)
	{
		Tester.SoftAssert("Problem with page: " + baseUrl, false);
		Tester.SoftAssert("Broken url: " + url, false);
		Tester.SoftAssert("Return code: " + code, false);
		
		File.Append(efn, baseUrl + " # " + url + "\r\n");
	}
}

function CheckPageLinks(url, relativePath)
{
	Tester.Message("Checking page: " + relativePath);
	Log("Checking page: " + url);
	File.Append(cfn, "Checking page: " + url + "\r\n");
		
	checkedLinks[url] = 1;
		
	var req = /**RESTService*/Session.GetNewRequest(url, url);
	req._DoExecute();
	var code = req.GetResponseStatusCode();
	
	if (code != 200)
	{
		Tester.SoftAssert("Problem with page: " + url, false);
		Tester.SoftAssert("Return code: " + code, false);
	}
	else
	{
		var html = req.GetResponseBodyText();
		var re = new RegExp("<a([^>]+)>(.+?)</a>", "gi");
		var links = html.match(re);
		for(var i = 0; i < links.length; i++)
		{
			var l = links[i];
			var hre = new RegExp("\\s*href\\s*=\\s*(\"([^\"]*)\"|'([^']*)'|([^'\">\\s]+))");
			var m = l.match(hre);
			if (m[2] != "")
			{
				CheckLink(url, m[2]);
			}
			else if (m[3] != "")
			{
				CheckLink(url, m[3]);
			}
			else if (m[4] != "")
			{
				CheckLink(url, m[4]);
			}
		}
	}
}



