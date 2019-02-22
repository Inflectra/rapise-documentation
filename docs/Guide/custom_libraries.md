# Custom Libraries

## Purpose

If your application doesn't work with the predefined [Recording Libraries](recording_library.md), you can create your own.

## Usage

Your library can provide **Basic** or **Full** support for your application.  Basic support allows you to manually [Learn](object_learning.md) objects, [write test scripts](scripting.md), and [Playback](playback.md) your scripts. Full support allows you to [Record](recording.md) as well.

Create your library via `Create... > User Lib...` menu.

![create lib](./img/tutorial_custom_library_create_userlib.png)

## Basic Support

**Add a Matcher Rule** to the library for every window type in your application. The `SeSMatcherRule` includes information to identify your application, and a set of behaviors.

```javascript
var *yourApplicationRule* = new SeSMatcherRule(
{
    object_type: "*yourAppObject*",
    classname: "*yourAppFrame*", //You can use a [regular expression](regular_expressions.md) here
    behavior: [*yourAppBehavior*]
})
```

 **Override Actions**: Override actions in **yourAppBehavior** (above). The action definitions you provides will be used during [Playback](playback.md). Overriding actions does not affect recording.

```javascript
var HTMLFirefoxBehavior =
{
    actions: [{
        actionName: "Click",
        DoAction: function(){}
    },
    {
        actionName: "SetText",
        DoAction: function(/**string*/ txt){}
    }]
 }
```

## Full Support

**Enable Recording**:  You can enable recording in two ways. If your application notifies the Accessibility Events interface about application events, you can override events in the **behavior** section of **SeSMatcherRules**:

```javascript
var newBehavior = {
    actions: [{/*section deleted for brevity*/}],
    events:
    {
        OnSelect: function(/**SeSObject*/ param, /**Boolean*/ badd)
        {
            /*...*/
        },
        OnSelectAdd: function(/**SeSObject*/ param, /**boolean*/ badd)
        {
            /*...*/
        }
     }
}

var newRule = new SeSMatcherRule({
    object_type: "someType",
    role: "someRole",
    behavior: [newBehavior],
 })
```

Otherwise, you will have to implement **Custom Recording**.

**Custom Recording**: With custom recording, it is the library's responsibility to:

- detect user actions in the application, and
- call **RegisterAction**() (which writes the action to the script).

## See Also

- [Tutorial: Custom Library](tutorial_custom_library.md)
- To see what actions and events can be overridden, see **SeSBehavior.js** (in the Rapise [Engine)](customizable_engine.md).
- Check the **Engine/Lib** directory for examples.
- You can alter the behavior of an action without creating an entire library.  See the [Actions](actions.md) section for more details.
