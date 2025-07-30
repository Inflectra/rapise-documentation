# Tutorial: Custom Library

In this section, you will learn how to create a **Custom Library** to add support for a third-party GUI control to Rapise. We will use a demo application called **CustomControlApp**. Our Custom Library will be simple. It will allow recording and learning objects of the **CustomListboxControl** type, as well as playing back actions for this type of object. This tutorial is complemented by a ready-to-use test, **CustomControlTest**, which you can examine and run.

## Tutorial Data

**CustomControlApp Folder**

```nohighlight
C:\Users\Public\Documents\Rapise\Samples\Extensibility\CustomLibrary\CustomControlApp
```

You can build this application yourself in Microsoft Visual Studio (C++) or use the ready executable:

```nohighlight
<CustomControlApp folder>\Release\CustomControlApp.exe
```

**CustomControlTest Folder**

```nohighlight
C:\Users\Public\Documents\Rapise\Samples\Extensibility\CustomLibrary\CustomControlTest
```

**Custom Library File**

```nohighlight
C:\Users\Public\Documents\Rapise\Samples\Extensibility\CustomLibrary\CustomControlTest\Lib\LibUser\LibUser.js
```

If you prefer an active experimentation learning style, you can first skip to subsection 8. After experimenting with the ready test and library, you can then start reading from the beginning.

## 1. Application Under Test

CustomControlApp contains an object of type **CustomListboxControl**. The control is similar to a single-select listbox, but each line item has a corresponding **progress bar** indicator showing its current value. Using the left/right cursor keys, you can change the value of the currently focused item.

![customcontrolapp](./img/tutorial_custom_library1.png)

If you try to record a test for **CustomControlApp** using just the **Generic** library, you'll see that **CustomListboxControl** is treated as a **Simulated Object**, and all interactions with it are recorded as mouse clicks and key presses. For some tests, such functionality is sufficient, but if you want to recognize **CustomListboxControl** as a list, get its items, select an item by name, or set a value for a particular item, you need to create a **Custom Library**.

![customcontrolapp, simulated object](./img/tutorial_custom_library2.png)

## 2. LibUser

In the `Files` view, right-click the test node and choose `Create > User Lib...`

![create userlib](./img/tutorial_custom_library_create_userlib.png)

Specify the name of your library (`User`) and click the `OK` button.

![library name](./img/tutorial_custom_library_libraryname.png)

`LibUser` library consists of two files:

1.  **LibUser.jslib**, which is a library declaration file.
2.  **LibUser.js**, which is a library definition file.

![library files](./img/tutorial_custom_library_libraryfiles.png)

Double-click the `LibUser.js` file to open it in the editor.

## 3. Analyze CustomListboxControl in Spy

Launch **CustomControlApp** and open [Spy](ses_spy_dialog.md). Using the **Accessible** option in the Spy tool, spy on the **CustomListboxControl**. It is easy to see that **CustomListboxControl** has the following accessibility tree: The `ROLE_SYSTEM_WINDOW` top node contains a `ROLE_SYSTEM_LIST` child, which in turn may contain zero to many `ROLE_SYSTEM_SLIDER` nodes.

![spy, customlistboxcontrol](./img/tutorial_custom_library4.png)

## 4. Create Matcher Rule for CustomListboxControl

With knowledge of the **CustomListboxControl** accessibility tree, we can create a **matcher rule** that will make **CustomListboxControl** recognizable by Rapise. Write the following code into `LibUser.js`:

```javascript
/**
    ROLE_SYSTEM_WINDOW
        ROLE_SYSTEM_LIST (CustomListboxControl)
        ROLE_SYSTEM_SLIDER*
*/
new SeSMatcherRule(
{
    object_type: "CustomListboxControl",
    object_flavor: "List",
    behavior: [Win32ItemSelectable, Win32CustomListboxControl],
    role: "ROLE_SYSTEM_WINDOW",
    or_rules: [
        {
            role: "regex:ROLE_SYSTEM_LIST",
            save_to: "list",
            or_rules: [
                {
                    role: "ROLE_SYSTEM_SLIDER",
                    zero_to_many: true,
                    save_to: "items"
                }
            ]
        }
    ]
});
```

Each matcher rule (an instance of `SeSMatcherRule`) is a tree-like structure that describes a particular GUI control type. Each node in this tree is a rule object, defined by the following simplified grammar:

```nohighlight
or_rules: (rule)+
and_rules: (rule)+

rule:
    role
    [save_to]
    [zero_to_many]
    [or_rules]
    [and_rules]
```

-   **object_type** - the string that uniquely identifies this matcher rule and designates the type of the control.
-   **object_flavor** - the visual type of the control, used to show an appropriate icon in the [Object Tree](object_tree.md) and to filter actions and properties in composite behavior patterns.
-   **behavior** - an array of behavior patterns that define object actions, properties, and events.
-   **role** - the accessibility role of the corresponding node in the control's accessibility tree. The role equals a Role of the accessible element as displayed in Spy.
-   **or_rules** - an array of rules (defining child nodes) joined with a logical OR. Any OR rule can be satisfied for child nodes to be considered matched.
-   **and_rules** - an array of rules (defining child nodes) joined with a logical AND. All AND rules must be satisfied for child nodes to be considered matched.
-   **save_to** - The `SeSObject` created for the accessibility tree node corresponding to this rule is assigned to the field with the `save_to` name of the top-level `SeSObject`. That is, if a rule has `save_to: items`, then you can access the learned element using `SeS('ObjID').items`. In many cases, such named fields are used in behavior patterns.
-   **zero\_to\_many** - If this property is present in the rule and set to 'true', it means that the parent rule may contain from zero to many child nodes that match this rule.

## 5. CustomListboxControl Behavior

After defining the matcher rule, we can proceed to **behavior patterns**. Behavior patterns operate with `SeSObject` contents, so they should not be aware of the underlying GUI control's accessibility tree. Thus, the same behavior pattern can be assigned to different matcher rules. There are plenty of behavior patterns defined in

```nohighlight
C:\Program Files (x86)\Inflectra\Rapise\Engine\SeSBehavior.js
```

After looking at those patterns, it is possible to notice that the `Win32ItemSelectable` pattern perfectly suits capturing selection accessibility events and selecting list items. This pattern contains an `OnSelect` event that is called during recording when an item is selected in a list, and a `DoSelectItem` action used to select the desired item during playback.

But using just the `Win32ItemSelectable` behavior pattern is not sufficient. It does not support recording progress bar value change events, nor does it support setting the progress bar value during playback. That is why we need to define a new behavior pattern: `Win32CustomListboxControl`. Here is its code:

```javascript
var Win32CustomListboxControl =
{
    actions: [
        {
            actionName: "SetItemValue",
            DoAction: function(/**string*/ itemName, /**number*/ value)
            {
                var item = this.findItemByName(itemName);
                if(null!=item)
                {
                    item.getTopObject().instance.HWND.SetForegroundWindow();
                    item.instance.Value = value;
                    return true;
                }
                return false;
            }
        },
        {
            actionName: "GetItemValue",
            DoAction: function(/**string*/ itemName)
            {
                var item = this.findItemByName(itemName);
                if(null!=item)
                {
                    return parseInt(item.instance.Value);
                }
                return null;
            }
        }
    ],
    events:
    {
        OnValueChange: function(/**SeSObject*/ param)
        {
            var itemName = param.name;
            if(l2)Log2("OnValueChange:"+itemName);
            var item = this.findItemByName(itemName);
            if(null!=item)
            {
                var value = item.instance.Value;
                RegisterAction(this, param.name, "SetItemValue", parseInt(value),
                    "Set item:'"+param.name+"' to "+value+" in '"+this.name+"'");
            }
            return;
        }
    }
};
```

During the recording process, the `OnValueChange` function captures progress bar change events and calls the `RegisterAction` function, which adds the `SetItemValue` action to the test.

Place this code into `LibUser.js` **before** the rule created in the previous step.

## 6. CustomListboxControl Specific Accessibility Events

What accessibility events are fired when a user changes the progress bar value? You can use [Accessible Event Watcher](https://docs.microsoft.com/en-us/windows/desktop/winauto/accessible-event-watcher) to find out. Launch **CustomControlApp** and start **Accessible Event Watcher**. Make sure that the mode is set to `WinEvents (In Context)`.

![customcontrolapp, accessible events](./img/tutorial_custom_library6.png)

Select an item in **CustomControlApp** and advance its progress bar using the right key. **Accessible Event Watcher** will show you the captured events:

![customcontrolapp, accessible events filled](./img/tutorial_custom_library7.png)

You can see that changing the progress bar leads to the generation of `OBJ_VALUECHANGE` events. To get the event name to use with Rapise, open the [Event Constants](https://docs.microsoft.com/en-us/windows/desktop/winauto/event-constants) page and search for the relevant value.
<!-- /* cSpell:disable */ -->
![event constants](./img/tutorial_custom_library_event_sonstants.png)
<!-- /* cSpell:enable */ -->
Not all accessibility events are processed and propagated by the Rapise engine. `EVENT_OBJECT_VALUECHANGE` is one such event. To consume this event and make an appropriate call to `OnValueChange` of `Win32CustomListboxControl`, you need to add and register a **custom accessibility event handler**:

```javascript
/**
 * Custom handler for EVENT_OBJECT_VALUECHANGE event
 */
function CustomRegisterAccessibleEvent(evt, etxt)
{
    if(etxt.indexOf("EVENT_OBJECT_VALUECHANGE")>=0)
    {
        var ao;
        try
        {
            ao = evt.AccessibleObject;
            if(!_SeSIsValidObject(ao)) return false;
        }
        catch(e)
        {
            Log("Error getting event object:"+e.Description+"/"+etxt);
            return false;
        }

        var ro = SeSCacheAccessibleObject(ao);
        if (l3 && ro) Log3("CustomListboxControl: " + ro.toString());

        if (ro != null && ("OnValueChange" in ro))
        {
            ro.OnValueChange();
        }

        return true;
    }
    return false;
}

g_customEventHandlers.push(CustomRegisterAccessibleEvent);
```

## 7. Record and Playback

Update the `LibUser.jslib` library definition for automatic loading.

![auto load](./img/tutorial_custom_library_autoload.png)

Now you are ready to record and play back a test. Just remember that in the **Select an Application to Record** dialog, you need to uncheck the **Auto** library and select the **Generic** library.

![generic, libuser](./img/tutorial_custom_library8.png)

Notice the **Action** names in the **Recording Activity** dialog; they correspond to `Win32ItemSelectable` and `Win32CustomListboxControl` behaviors.

![sample recording](./img/tutorial_custom_library_sample_recording.png)

## 8. CustomControlTest

This tutorial is complemented by a ready-to-use test, **CustomControlTest**, which you can examine and run. Open **CustomControlTest** in Rapise from the following path:

```nohighlight
C:\Users\Public\Documents\Rapise\Samples\Extensibility\CustomLibrary\CustomControlTest
```
![custom library test](./img/tutorial_custom_library9.png)

**Tip**: It is possible to launch CustomControlApp directly from Rapise; just double-click `CustomControlApp.exe` in the file tree.

## 9. Wrap-up: Implementation Sequence

Full support for a custom object requires support for recording, learning, and playback. Let's review the created library and specify the purpose of each component.

-   **Matcher Rule** - It is used to recognize the object within an application, and is required for recording, learning, and playback.
-   **Events in Behavior Patterns** - Handling events is required for recording.
-   **Actions in Behavior Patterns** - Actions are used to examine or change the state of the control, and are required for playback.
-   **Custom Accessibility Event Handler** - Required for recording if some important events are not processed by the Rapise engine by default.