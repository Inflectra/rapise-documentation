# Object Locator

## Purpose

Object locators are created during [Recording](recording.md)/[Learning](object_learning.md) and used during [Playback](playback.md) to identify [learned objects](object_learning.md) and [simulated objects](simulated_objects.md). There are many types of locators.

In most libraries (Web, Desktop, Mobile), only one locator is generated when an object is recorded or learned.

The legacy [**Generic**](../Libraries/ses_lib_generic.md) library supports four different locators that are added each time an object is learned or recorded:

- **Location**: This locator uses the object's index relative to encapsulating objects for identification. The location is stored as a period-separated list of indexes. For instance, 1.2.3 would be "the third object in the second object in the first object." The name, class, and role of the object are also stored.
- **LocationPath**: This locator records name, class, and role property information for the object and all its encapsulating objects.
- **LocationRect**: This locator stores screen coordinates.
- **Ordinal**: This locator creates an array of object name/object class combinations. Each object is assigned an index in the array.

## Usage

The locator for the selected object is shown in the [Properties](properties.md) view:

![properties dialog](./img/properties1.png)

### How Locators are Stored

The locator for each object is specified in the `saved_script_objects` array within a test's **Objects.js** file. Locator information is stored in each object's `locations` array.

```javascript
"Simulated": {
    "locations": [
        {
            "locator_name": "Location",
            "location": {
                "location": "4.3.4.1.4.1.4.1.4.1.4.10.1.1.7.3",
                "window_name": "param:window_name",
                "window_class": "param:window_class"
            }
        },
        {
            "locator_name": "LocationPath",
            "location": {
                // ...
            }
        },
        {
            "locator_name": "LocationRect",
            "location": {
                "window_name": "param:window_name",
                "window_class": "param:window_class",
                "rect": {
                    "object_name": "",
                    "object_class": "param:object_class",
                    "object_role": "param:object_role",
                    "x": 573,
                    "y": 59,
                    "w": 220,
                    "h": 66
                }
            }
        }
    ],
    "window_class": "MSPaintApp",
    "object_text": "",
    "object_role": "ROLE_SYSTEM_GROUPING",
    "object_class": "NetUIHWND",
    "version": 0,
    "object_type": "SeSSimulated",
    "object_flavor": "Simulated",
    "object_name": "Simulated",
    "ignore_object_name": true,
    "window_name": "Untitled - Paint"
}
```

## Locator Parameters

If a piece of information in the locator matches an object's information (`object_name`, `object_class`, `object_role`, `object_text`), it is stored in the locator as `param:object_info`. For example:

```javascript
"object_name": "param:object_name",
"object_class": "param:object_class",
"object_role": "param:object_role"
```

## Overriding Locator Parameters (RVL)

See also [RVL.SetLocatorOpts](../Libraries/RVL.md#locatoropts) and this [KB Article](https://www.inflectra.com/Support/KnowledgeBase/KB427.aspx) for a more detailed explanation and example of overriding locator parameters in RVL.

## Overriding Locator Parameters (JS)

You can override the information used to locate an object at runtime. Normally, to refer to an object, you use the SeS function:

```javascript
SeS('Username')
```

To override locator parameters, specify the new value in the function call. In the following example, we override the **object_name** parameter for the `Username` object:

```javascript
SeS('Username', {object_name:"regex:.*"})
```

You may want to change a parameter value for every locator/object in the program. For instance, perhaps the URL of the webpage has changed. Use the global variable **g_locatorparams**, as shown in the following example:

```javascript
function Test()
{
    // Here we use direct parameter overriding
    SeS('Obj1', {url:"http://newaddr/"}).DoAction();
    SeS('Obj2', {url:"http://newaddr/"}).DoAction();

    // And this is equivalent to above
    g_locatorparams["url"] = "http://newaddr/";
    SeS("Obj1").DoAction();
    SeS("Obj2").DoAction();

    // ...
}
```

## See Also

- [Object Learning](object_learning.md)
- [Playback](playback.md)