# Object Locator

## Purpose

Object locators are created during [Recording](recording.md)/[Learning](object_learning.md) and used during [Playback](playback.md) to identify [learned objects](object_learning.md) and [simulated objects](simulated_objects.md). There are many types of locators.

For example [**Generic** library](/LIbraries/ses_lib_generic) supports 4:

- **Location**: This locator uses the object's index relative to encapsulating objects for identification. The location is stored as a period separated list of indexes. For instance, 1.2.3 would be "the third object in the second object in the first object."  The name, class, and role of the object are also stored.
- **LocationPath**: This locator remembers name, class, and role property information for the object and all of its encapsulating objects.
- **LocationRect**: This locator stores screen coordinates.
- **Ordinal**: This locator creates an array of object name/object class combinations.  Each object is assigned an index in  the array.

## Usage

The locator for each object is specified in `saved_script_objects` array in **Objects.js** of a test. Locator information is stored in `locations` array of each object.

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

If a piece of information in the locator matches a piece of object info (`object_name`, `object_class`, `object_role`, `object_text`) then it is stored in the locator as `param:object_info`.  For example:

```javascript
"object_name": "param:object_name",
"object_class": "param:object_class",
"object_role": "param:object_role"
```

## Over-riding Locator Parameters

You can over-ride the information used to locate your object at runtime.  Normally, to refer to an object, you use the SeS function:

```javascript
SeS('Username')
```

To override locator parameters, specify the new value in the function call. In the following example, we over-ride the **object_name** parameter for object `Username`:

```javascript
SeS('Username', {object_name:"regex:.*"})
```

You may want to change a parameter value for every locator/object in the program.  For instance, perhaps the url of the webpage has changed.  Use the global variable **g_locatorparams** as in the following example:

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
