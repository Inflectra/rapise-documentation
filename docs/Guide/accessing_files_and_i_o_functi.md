# Accessing Files and I/O Functions

## Overview

When using Rapise, you sometimes need to access files on the Windows file system, either for testing purposes or to access test data stored in flat CSV, TSV, or text files.

## File Global Object

File operations in Rapise are typically performed using the global [File](../Libraries/File.md) object.

```javascript
function Test()
{
    var fn = "TestFile.txt";
    var cnt = "Hello world!";

    // Test exists/delete
    if (File.Exists(fn))
    {
        File.Delete(fn);
        Tester.Assert("File deleted", !File.Exists(fn));
    }

    // Test read/write
    File.Write(fn, cnt);
    if (Tester.Assert("File exists", File.Exists(fn)))
    {
        var text = File.Read(fn);
        Tester.AssertEqual("File write/read", text, cnt);
    }

    // Test append
    File.Write(fn, "C");
    File.Append(fn, "C");
    var text = File.Read(fn);
    Tester.AssertEqual("File append works", "CC", text);

    // Folder exists/create/delete
    var folderExists = File.FolderExists(".");
    Tester.Assert("Folder exists", folderExists);
    var testFolderPath = File.FolderInfo(".").Path;
    Tester.Message(testFolderPath);
    var subFolderPath = testFolderPath + "\\SubFolder20170314";
    File.CreateFolder(subFolderPath);
    Tester.Assert("Sub folder exists, CreateFolder works", File.FolderExists(subFolderPath));
    File.DeleteFolder(subFolderPath);
    Tester.Assert("Sub folder does not exist, DeleteFolder works", !File.FolderExists(subFolderPath));
}
```

## FileSystemObject

Alternatively, you can access the file system using the `FileSystemObject`.

<http://msdn.microsoft.com/en-us/library/aa242706(v=vs.60).aspx>

```javascript
function Test()
{
    //IOMode constants
    var IOMode_ForReading = 1;
    var IOMode_ForWriting = 2;
    var IOMode_ForAppending = 8;
    //var Format constants
    var IOFormat_ASCII = 0;
    var IOFormat_Unicode = -1;
    //This sample demonstrates how to manipulate the Windows file system using Rapise
    //We shall open a text file for writing in this simple example
    var fso = new ActiveXObject('Scripting.FileSystemObject');
    var ts = fso.CreateTextFile('C:\\Temp\\MyTestFile.txt');
    ts.Close();
    var file = fso.GetFile('C:\\Temp\\MyTestFile.txt');
    ts = file.OpenAsTextStream(IOMode_ForWriting, IOFormat_Unicode);
    ts.WriteLine('Hello World!');
    ts.Close();
    Tester.Message('Wrote File');
    //Now read this file back
    file = fso.GetFile('C:\\Temp\\MyTestFile.txt');
    ts = file.OpenAsTextStream(IOMode_ForReading, IOFormat_Unicode);
    var text = ts.ReadLine();
    Tester.Message(text);
    ts.Close();
}
```

## See Also

- [How-Tos](howtos.md)