# Defining Global Objects

!!! note
    This feature requires Rapise 6.6+

## Why

If you are building a framework and write custom functions in JavaScript you may combine the functions and define a global object. It will make RVL more readable and easier to write.

Compare variants A and B.

![RVL Example](./img/global_object_rvl_example.png)

In variant A you choose `Functions` as an object and then select the custom function. In variant B you choose the global object and then it's action. The global object and it's actions can be seen in the Object Tree:

![Object Tree](./img/global_object_in_object_tree.png)

## How

Let's see how to define your own global object.

First, you need a JavaScript file where you will define the actions of the object and declare the object itself. A good candidate for such a file is the main file of a [user-defined library](/Guide/tutorial_custom_library/#2-libuser) or simply `User.js`.

We'll use an example to explain the format of object definition. Here is the definition of a global object `MyApp`.

## Example

```javascript

// MyApp definition
// to generate metadata press Ctrl-Shift-F5

function MyApp_Launch()
{

}

function MyApp_Close()
{

}

function MyApp_Login(/**string*/ username, /**string*/ password)
{
    Tester.Message("Logging as " + username + "/" + password);
}

_paramInfoMyApp_Login = {
    _description: "Logs into the application",
    _type: "boolean",
    _returns: "`true` if login is ok",
    username:
    {
        description: "Name of the user"
    },
    password:
    {
        description: "Pwd of the user"
    }
}

SeSGlobalObject("MyApp");

```

## Format

Every action of `MyApp` object is prefixed with `MyApp_`. We have three such actions: `Launch`,`Close` and `Login`.

```javascript
function MyApp_Launch()
{

}

function MyApp_Close()
{

}

function MyApp_Login(/**string*/ username, /**string*/ password)
{
    Tester.Message("Logging as " + username + "/" + password);
}
```

To declare the object use `SeSGlobalObject` call. It must be placed after definitions of all the actions. 

```javascript
SeSGlobalObject("MyApp");
```

You may specify action parameter types through comments `/**<type>*/`.

```javascript
function MyApp_Login(/**string*/ username, /**string*/ password)
```

You may also describe actions and parameters using `paramInfo` objects (should have a name of format `_paramInfo<action function name>`).

```javascript
_paramInfoMyApp_Login = {
    _description: "Logs into the application",
    _type: "boolean",
    _returns: "`true` if login is ok",
    username:
    {
        description: "Name of the user"
    },
    password:
    {
        description: "Pwd of the user"
    }
}
```

## Compile Metadata

When the object is declared you need to compile the metadata for it. To do this open the file where you defined the object and press ++ctrl+shift+f5++.

## Object Icons

If you want a specific icon for your object then create two `.png` files with dimensions `16x16` and `32x32`, name them as `<object name>16.png` and `<object name>32.png` and place them beside the file where you declared the object.

## Global Object vs Page Object

When comparing a **Global Object** and a [Page Object](./Frameworks/pageobjects.md), the following points should be noted:

1. The structure of a Global Object is identical to that of a Page Object in JavaScript mode.
2. However, a Page Object can have its own object repository and use objects from it.
3. This includes widgets and API entry points that are available for a Page Object.
4. A Global Object can be defined in a [custom Library](custom_libraries.md).
5. A Page Object can only be defined as part of a [testing framework](./Frameworks/frameworks.md).
6. It is not possible to import or move a single Global Object, but it is possible to copy the entire Library that contains it.
7. A Page Object can be imported from one testing framework to another.

### See Also

- [How to define a global object (video)](https://www.youtube.com/watch?v=BIgOIxkZ5Hk&t=1408s)