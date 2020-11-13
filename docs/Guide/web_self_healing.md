# Self-healing Web Locators

Since **version 6.2** Rapise gets self-healing Web element locators. It means significant improvement in two areas of automated testing of Web applications:

1. Better recording experience. Modern applications more and more use dynamically generated IDs and Class Names that change on every page reload. It leads to necessity to fix locators after recording. With self-healing locators Rapise is able to guess and find required elements without the need for manual locator tweaking.
2. More efficient maintenance of tests. Developers modify applications and break Web element locators from time to time. Nobody can predict how a locator may change. If locator is broken Rapise tries to find most matching element and generate new locator for it.

## How to Enable

To enable self-healing features set `g_aiEnable` flag in [TestPrepare](understanding_the_script.md) block of your test.

```javascript
function TestPrepare()
{
    g_aiEnable = true;
}
```

When this flag is set Rapise generates full-path locator for each recorded element. The full-path locator includes information about all attributes of an element and attributes of its ancestors in the DOM tree.

## How it Works

When you run a test and an element is found with traditional XPath locator then full-path locator is not used. There is nothing to repair. But if XPath generated for an element during recording or manually created by a tester is not valid then full-path locator is used to find the most suitable element on the page. When full-path locator is used you get the following healing notification in the report:

<img src="/Guide/img/web_self_healing_report.png" width="784" />

The healing notification indicates that an element was found with some confidence, it is a number from zero to 100%. In the notification details you can find the difference between recorded and matched elements. You can also see the images of the recorded and found elements. This information is a clue to either accept found element or manually fix the test.

The format of the element locator difference report is:

```nohighlight
Level: N, attribute: A, expected: V1, actual: V2
```

- If **N** equals 0 it means the element node in the DOM tree. 1 means immediate ancestor of the element. Level increases until DOM tree root is reached.
- **A** is attribute name.
- **V1** - expected/recorded attribute value.
- **V2** - actual value of this attribute captured during playback of the test.

First image in the details of the difference report is expected/recorded snapshot of the element. Second image is what was shot during playback.

## Usage Scenarios

### Take no Action

This is the simplest yet powerful approach. If a test passes and all elements are found with pretty good confidence then there may be no reason to fix the test.

### Use Match Details to Build WebAppProfile

When you analyze differences between expected and found elements you may get ideas to start using or improve your [WebAppProfile](web_app_profile.md).

### Use Object Manager

During playback Rapise takes snapshots of elements found by full-path locator. So after playback you can use Object Manager to replace old locators with new ones. If there are healing notifications after test playback Rapise automatically shows the prompt to open Object Manager. You can turn this prompt off, see the next section.

<img src="/Guide/img/web_self_healing_prompt.png" width="443">

<img src="/Guide/img/web_self_healing_object_manager.png" width="890">

## Configuration

### Threshold

By default match of an element is accepted when confidence is not less than 96%. You can change the threshold in [TestPrepare](understanding_the_script.md) block by setting `g_aiFplConfidence`:

```javascript
function TestPrepare()
{
    g_aiEnable = true;
    g_aiFplConfidence = 0.98;
}
```

### Object Manager Prompt

To suppress prompt to use Object Manager when test playback contains healing notifications set `g_aiMergePromptEnable` to `false`:

```javascript
function TestPrepare()
{
    g_aiEnable = true;
    g_aiMergePromptEnable = false;
}
```

### Screenshots

To disable automatic capturing of recording screenshots `g_aiCaptureRecordingScreenshots` to `false`.

```javascript
g_aiCaptureRecordingScreenshots = false;
```

### Playback

During playback when an element can not be found using XPath locator - Rapise starts applying the self-healing locator. The number of initial attempts before switching on self-healing is configurable (since Rapise 6.5). Usage of self-healing at the very first attempts to find an element is not recommended since a page may not be fully loaded and wrong element may be chosen by the algorithm. First self-healing attempt is set by the variable. 21 is the default value. You may change it to any number that is lower than `g_objectLookupAttempts`.

```javascript
g_aiFirstAttemptNumber = 21;
```

## See Also

- [How to Benefit From Self-Healing Locators (video)](https://youtu.be/ulgL-RnGuHo)
- [Web Testing](web_testing.md)
- [Web Application Profile (aka Web Recorder Configuration)](web_app_profile.md)
