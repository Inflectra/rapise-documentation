# Actions

## Purpose

**Actions** represent any user interaction with a GUI control, such as clicking, selecting, or entering text. You can override the behavior of an action without creating or altering a [Recording Library](recording_library.md) by using **SeSOverrideAction()**. Overriding an action affects [Playback](playback.md), but not [Recording](recording.md).

## Usage

**SeSOverrideAction()** is used to override an existing action handler or to add a new **DoAction** handler:

```javascript
/**
 * Overrides an object's behavior.
 * This function can be used to tweak existing behavior. The default action handler
 * is passed as the first parameter to the callback.
 * https://www.inflectra.com/support/knowledgebase/kb354.aspx
 * @param objectType The object type of the rule, or a regular expression pattern for the object type.
 * @param actionName The name of the action (e.g., "DoClick").
 * @param callback The new action handler for the specified action.
 * @returns 'true' if the object type is found and the replacement is successful; otherwise, 'false'.
 */
function SeSOverrideAction(/**string*/ objectType, /**string*/ actionName, callback)
```

In most cases, **SeSOverrideAction()** should be called from within the [**SeSOnTestInit()**](understanding_the_script.md#sesontestinit) callback.

## Calling Base Actions

The function you are overriding is called the **base action**. It is passed to the overriding action as the first parameter, `defaultActionHandler`. You can call the **base action** as follows:

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