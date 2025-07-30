# Tests and Sub-Tests

> Please note that the concept of Sub-Tests has been deprecated since Rapise 8. We recommend using [Testing Frameworks](./Frameworks/frameworks.md) as a seamless and natural approach to organizing your tests.

The concept of sub-tests provides a flexible and organized approach to working with tests. By utilizing sub-tests, you can achieve the following objectives:

1.  Create multiple test scenarios that operate on the same set of objects and functions.
2.  Organize different test scenarios within a single workspace.
3.  Utilize sub-tests for conducting cross-browser tests.

We will consider each of the described goals separately. The test containing the sub-test(s) will be called the **base** or **parent** test.

## Shared Object Repository and Shared Functions

In this case, the **parent** test contains all learned objects and user-defined functions.

![subtestdependant](./img/tests_and_sub_tests1.png)

For example, the parent test may have objects such as `User Name`, `Password`, and `Sign On`, and a function:

```javascript
function Login(username, password)
{
   ...
}
```

**SubTest1** can be used to check login with valid credentials. The `Main.js` file for **SubTest1** looks like this:

```javascript
function Test(params)
{
   Login("validuser", "validpassword");

   // Now check that login is successful
   Tester.Assert("Login leads to welcome message: ", Global.DoWaitFor('Welcome_User'));
}
```

**SubTest2** can be used to check login with invalid credentials (i.e., it is a fail-test). The `Main.js` file for **SubTest2** looks like this:

```javascript
function Test(params)
{
   Login("invaliduser", "invvalidpassword");

   // Now check that login is successful
   Tester.Assert("Login leads to invalid user object: ", Global.DoWaitFor('Invalid_User'));
}
```

The `Login` function and objects `Welcome_User` and `Invalid_User` are defined in the **parent** test. The sub-tests simply implement various scenarios for the same set of objects.

## Local Object Repository and Local Functions

Each test has its own objects, functions, and scenarios.

![subtestworkspace](./img/tests_and_sub_tests2.png)

This approach is well demonstrated by an example. We created a test called **SampleMaster** and put all Rapise samples into it by using the **Add File** context menu in the [Test Tree](test_files_dialog.md) dialog. The resulting Files tree looks like:

![subtest samplemaster tree](./img/tests_and_sub_tests3.png)

All tests in this tree are independent. We use the **SampleMaster** to manage all tests from a single environment.

## Nested Sub-Tests

A sub-test may have its own nested sub-tests. In this example, the parent test contains a reference to the `CreateNewBook` sub-test, which in turn has `Login` and `Logout` sub-tests nested inside:

![subtest nesting](./img/tests_and_sub_tests4.png)

## Sub-Test Properties

Sub-test properties are available from the `Tag` property in the **Properties** pane:

![subtest tagproperties](./img/tests_and_sub_tests5.png)

## Sub-Test Context Menu

The following options are available in the context menu for each of the sub-tests:

![](./img/tests_and_sub_tests6.png)

-   **Play**: Execute the selected sub-test
-   **Record**: Start recording into the selected sub-test
-   **Save**: Save sub-test options
-   **Show Objects**: Show objects from a sub-test in the Object Tree.
-   **Rename**: Rename this sub-test
-   **Clone**: Make a copy of the sub-test
-   **Delete**: Remove the reference to a sub-test from its parent test
-   **Create Sub-Test...**: Create a nested sub-test. It is typical for larger [frameworks](../Intro/framework.md) to have several nested levels of tests for convenience.
-   **Open in New Rapise Window...**: By default, double-clicking a sub-test opens it in the current Rapise window. If you need to have both the current test and the sub-test open simultaneously, you can use this option.

## %WORKDIR% and Frameworks

Tests and sub-tests are a recommended way to set up test frameworks with Rapise. `%WORKDIR%` is set to the root test path, and it is recommended to use it to refer to other tests or data files.

See the sample framework <https://github.com/Inflectra/rapise-framework-examples/tree/master/SpiraFriendlyWithRvlAndUserLib>