//Put your custom functions and variables in this file

function SaveDomTree()
{
	var dom = Navigator.GetDomTree();
	Navigator.SaveDomToXml("List.xml", dom);
}