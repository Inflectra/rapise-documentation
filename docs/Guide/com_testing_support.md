# COM Testing Support

## Purpose

Microsoft's **Component Object Model** (COM) is a standard for communication between separately engineered software components ([source](http://www.microsoft.com/com/default.mspx)). Any object with a COM interface can be created and used remotely.

## Usage

## Creating a COM Object

You can create a COM object using Windows' **ActiveXObject** class. Once the object is created, you can invoke its methods just as you would with any other object in your program. The methods available will depend on the object's COM interface. The following example shows how to create an instance of the Word application and open a file.

```javascript
var doc = new ActiveXObject("Word.Application");
doc.Documents.Open(wordFileName);
```

## Test Samples

There are several [test samples](sample_tests.md) that show how to unit test application modules via COM interface:

- UsingMSWord
- UsingMSExcel
- UsingMSAccess

## See Also

- [Learn more about COM](http://www.microsoft.com/com/default.mspx).
- [Learn more about ActiveXObject](http://msdn.microsoft.com/en-us/library/7sw4ddf8(VS.85).aspx).