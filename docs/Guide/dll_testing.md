# DLL Testing

## Purpose

You can create objects and invoke methods from both managed and unmanaged DLLs.

## Usage

Rapise provides API calls to work with managed DLLs. The Windows object **WScript** can be used with unmanaged DLLs.

## Managed DLLs

- **Util.InvokeMember** - Invoke a class method in a managed DLL.
- **Util.CreateClassInstance** - Creates an instance of a class in a managed DLL.
- **Util.SetFieldValue** - Sets a field value in an object created with CreateClassInstance.

## Unmanaged DLLs

- **WScript.CreateObject("DynamicWrapper")** - Create a DynamicWrapper object.

The **Register** and **ShellExecute** methods of the DynamicWrapper object can be used to invoke DLL methods as in the following example:

```javascript
var UserWrap = WScript.CreateObject("DynamicWrapper");
UserWrap.Register("shell32.dll", "ShellExecute", "I=hssssl", "f=s", "r=l");
UserWrap.Register("USER32.DLL", "MessageBoxA", "I=HsSu", "f=s", "R=l");
UserWrap.MessageBoxA( null, "" + elapsed, "Time Elapsed:",  0x30 );
```

## Test Samples

There are two [test samples](sample_tests.md) that illustrate working with DLLs:

- UsingDLLHandlerManaged
- UsingDLLHandlerUnManaged

## See Also

- More information on the [WScript object](http://msdn.microsoft.com/en-us/library/at5ydy31(VS.85).aspx)