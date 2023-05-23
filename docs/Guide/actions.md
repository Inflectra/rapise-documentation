# Actions

## Purpose

**Actions** are anything the user can do to a GUI control, such as click, select, fill with text, etc. You can override the behavior of an action, without creating or altering a [Recording Library](recording_library.md), using **SeSOverrideAction()**. Overriding an action affects [Playback](playback.md), but not [Recording](recording.md).

## Usage

**SeSOverrideAction()** is used to override an action handler or add a new **DoAction** handler:

```javascript
/**
 * Overrides Behavior.
 * this may be used if some behavior should be tweaked. Default action handler
 * is passed to the callback as the first parameter.
 * https://www.inflectra.com/support/knowledgebase/kb354.aspx
 * @param objectType Either object_type of the rule or regexp pattern for object_type.
 * @param actionName action name. For example "DoClick".
 * @param callback new action handler for specified action.
 * @returns 'true' if object_type is found and replacement is successful, 'false' otherwise.
 */
function SeSOverrideAction(/**string*/ objectType, /**string*/ actionName, callback)
```

In most cases **SeSOverrideAction()** should be called from within [**SeSOnTestInit()**](understanding_the_script.md#sesontestinit) callback.

## Calling Base Actions

The function you are overriding is called the **base action**. It is passed to the overriding action as first `defaultActionHandler` parameter. You can call the **base action** like this:

```javascript
function MyHTMLObjectDoClick(defaultActionHandler, x, y, forceEvent)
{
    Tester.Message("Click on " + this.object_name);
    this.highlight();
    Global.DoSleep(500);
    return defaultActionHandler.apply(this, [x, y, forceEvent]); // calling the base action
}
```

## See Also

- [KB354](https://www.inflectra.com/Support/KnowledgeBase/KB354.aspx) How to override an action for an object type
