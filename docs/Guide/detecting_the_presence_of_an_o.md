# Detecting the presence of an object

Often you need to be able to check for the presence of an object and then depending on whether the object is visible perform one of two possible sets of operations. This article explains the recommended way of doing this.

## Recommended Solution

You can use the special `Global.DoWaitFor('object id')` command to perform the check:

```javascript
if(Global.DoWaitFor('Object ID'))
{
    // Object is available
}
else
{
    // Object is not available
}
```

## See Also

- [Global.DoWaitFor](../Libraries/Global.md#dowaitfor)
- [How-Tos](howtos.md)
