# Self-healing Web Locators

Since **version 6.2**, Rapise has included self-healing web element locators. This represents a significant improvement in two areas of automated web application testing:

1.  Better recording experience. Modern applications increasingly use dynamically generated IDs and class names that change with every page reload. This often necessitates fixing locators after recording. With self-healing locators, Rapise can intelligently locate the required elements without manual locator tweaking.
2.  More efficient test maintenance. Developers occasionally modify applications in ways that break web element locators. No one can predict precisely how a locator might change. If a locator is broken, Rapise attempts to find the most matching element and generate a new locator for it.

## How to Enable

To enable self-healing features, set the `g_aiEnable` flag in your test's [TestPrepare](understanding_the_script.md) block.

```javascript
function TestPrepare()
{
    g_aiEnable = true;
}
```

When this flag is set, Rapise generates a full-path locator for each recorded element. The full-path locator includes information about all attributes of an element and its ancestors in the DOM tree.

## How it Works

When you run a test and an element is found using a traditional XPath locator, the full-path locator is not used. There is nothing to repair in such cases. However, if the XPath generated for an element during recording (or manually created by a tester) is not valid, the full-path locator is used to find the most suitable element on the page. When the full-path locator is used, you will see the following healing notification in the report:

<img src="/Guide/img/web_self_healing_report.png" width="784" />

The healing notification indicates that an element was found with a certain level of confidence, expressed as a percentage from zero to 100%. In the notification details, you can find the difference between the recorded and matched elements. You can also see images of both the recorded and found elements. This information provides a clue to either accept the found element or manually fix the test.

The format of the element locator difference report is:

```nohighlight
Level: N, attribute: A, expected: V1, actual: V2
```

-   If **N** equals 0, it refers to the element node in the DOM tree. A value of 1 indicates the element's immediate ancestor. The level increases until the DOM tree root is reached.
-   **A** is the attribute name.
-   **V1**: The expected/recorded attribute value.
-   **V2**: The actual value of this attribute, captured during test playback.

The first image in the difference report details is the expected/recorded snapshot of the element. The second image shows what was captured during playback.

## Usage Scenarios

### No Action Required

This is a simple yet powerful approach. If a test passes and all elements are found with sufficiently high confidence, there may be no reason to fix the test.

### Using Match Details to Build a WebAppProfile

When you analyze the differences between expected and found elements, you may gain insights to start using or improve your [WebAppProfile](web_app_profile.md).

### Using the Object Manager

During playback, Rapise takes snapshots of elements found by the full-path locator. Thus, after playback, you can use the Object Manager to replace old locators with new ones. If there are healing notifications after test playback, Rapise automatically prompts you to open the Object Manager. You can disable this prompt; refer to the next section.

<img src="/Guide/img/web_self_healing_prompt.png" width="443">

<img src="/Guide/img/web_self_healing_object_manager.png" width="890">

## Configuration

### Threshold

By default, a match for an element is accepted when the confidence is not less than 96%. You can change the threshold in the [TestPrepare](understanding_the_script.md) block by setting `g_aiFplConfidence`:

```javascript
function TestPrepare()
{
    g_aiEnable = true;
    g_aiFplConfidence = 0.98;
}
```

### Object Manager Prompt

To suppress the prompt to use the Object Manager when test playback contains healing notifications, set `g_aiMergePromptEnable` to `false`:

```javascript
function TestPrepare()
{
    g_aiEnable = true;
    g_aiMergePromptEnable = false;
}
```

### Screenshots

To disable automatic capturing of recording screenshots, set `g_aiCaptureRecordingScreenshots` to `false`.

```javascript
g_aiCaptureRecordingScreenshots = false;
```

### Playback

During playback, when an element cannot be found using an XPath locator, Rapise starts applying the self-healing locator. The number of initial attempts before switching to self-healing is configurable (since Rapise 6.5). Using self-healing during the very first attempts to find an element is not recommended, as a page may not be fully loaded, and the algorithm might select the wrong element. The first self-healing attempt is set by this variable. The default value is 21. You may change it to any number lower than `g_objectLookupAttempts`.

```javascript
g_aiFirstAttemptNumber = 21;
```

## See Also

-   [How to Benefit From Self-Healing Locators (video)](https://youtu.be/ulgL-RnGuHo)
-   [Web Testing](web_testing.md)
-   [Web Application Profile (aka Web Recorder Configuration)](web_app_profile.md)