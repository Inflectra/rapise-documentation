# Dynamic Test Sets

!!! important
    This feature requires Rapise 8.4+.

## Overview

Dynamic Test Sets provide a powerful way to execute targeted tests based on specific criteria. This feature allows you to include test cases into a test set using properties like name, fully qualified name, tags, and parameters.  This approach helps to focus on specific testing scenarios without needing to manually select test cases. This functionality mirrors filtering capabilities found in tools like Microsoft VSTest, making it familiar for users accustomed to that environment.

!!! note
    To use this feature you need to have Rapise connected to your instance of Spira.

## Benefits

- **Targeted Execution:** Run only the tests relevant to a particular scenario (e.g., smoke tests, regression tests for a specific bug fix).
- **Time Savings:**  Avoid running unnecessary tests, leading to faster feedback cycles.
- **Resource Optimization:**  Focus testing resources on the most critical areas.
- **Reduced Maintenance:** Eliminate the need to manually create and maintain numerous static test sets for different scenarios.
- **Complex Querying:**  Use Boolean operators (`&` for AND, `|` for OR) and escape sequences to create sophisticated filter expressions.
- **Familiar Syntax**: Mimics filter expressions of Microsoft VSTest.

## Defining a Dynamic Test Set

To create and configure a Dynamic Test Set in Rapise, follow these steps inside the [Spira Dashboard](spira_dashboard_2.md):

1.  **Synchronization:** Ensure your Rapise framework is synchronized with Spira. This step is crucial for the changes to be reflected in Spira and for Rapise to correctly interpret the filter. See the [Sync with Spira](spira_dashboard_2.md#sync-with-spira) section for more details.

2.  **Select `Dynamic`:** In the Framework view, select the test set you want to configure and choose **Dynamic** from the **Test Cases** dropdown.

3.  **Define the Filter Expression:** In the **Filter Expression** field, enter your desired filter criteria. The expression follows the format:

    `<property><operator><value>[|&<Expression>]`

    Expressions can be enclosed in parentheses, e.g. `(Tags!=internal) & (Tags!=draft)`.

    *   **Supported Properties:**
        *   `Name`: The name of the test case.
        *   `FullyQualifiedName`:  The full path to the test case within the Rapise framework (relative to the framework root).
        *   `Tags`:  Tags associated with the test case in Rapise.
        *   `TestParams`: Parameters defined for the test case in Rapise.
        *   `SpiraProperties`: Properties defined for the test case in Spira.

        The **Tags** property matches a value if at least one tag in the collection matches that value, and it does not match if none of the tags match. **TestParams** and **SpiraProperties** are collections of `name=value` pairs.

    *   **Allowed Operators:**
        *   `=`:  Exact match.
        *   `!=`: Not an exact match.
        *   `~`: Contains (substring match).
        *   `!~`: Does not contain.

    *   **Boolean Operators:**
        *   `&`:  Logical AND.
        *   `|`:  Logical OR.

    * **Value**: Value is a string. All value matches are case-insensitive.

4.  **Preview:** Use the **Preview** button to see a list of test cases that will be selected based on your current filter expression. This allows you to validate your filter before execution.

5. **Synchronization**: After setting up Dynamic Test Set save changes and synchronize your framework to Spira.

## Escape Sequences

Certain characters have special meanings within the filter expression. To use these characters literally in your filter values, you must use escape sequences:

| Escape Sequence | Character |
| --------------- | --------- |
| `\\`            | `\`       |
| `\(`            | `(`       |
| `\)`            | `)`       |
| `\&`            | `&`       |
| `\|`            | `\|`      |
| `\=`            | `=`       |
| `\!`            |   `!`     |
| `\~`            |    `~`    |

## Examples

Here are some example filter expressions to illustrate how to use this feature:

- **`Name~Edit`**: Selects all test cases with names containing `Edit`.
- **`FullyQualifiedName~SmokeTests`**: Selects all test cases whose full path includes `SmokeTests`.
- **`Tags=testcase`**:  Selects all test cases because all of them have the default tag `testcase`.
- **`Tags=stable&Tags=UI`**: Selects test cases tagged with both `stable` and `UI`.
- **`Tags=UI|Tags=API`**: Selects test cases tagged with either `UI` or `API`.
- **`TestParams=author\=robin`**: Selects all test cases that have a TestParam with the name `author` and value equal to `robin`.
- **`(Tags!=internal&Tags!=draft)&FullyQualifiedName~SmokeTests`** - All test cases from the `SmokeTests` folder that are not marked with either the internal or draft tag.
- **`Name=Login\&Logout`**: Selects a test case with the literal name `Login&Logout` (using the escape sequence for `&`).

## Important Considerations

- Filter expressions are case-insensitive for values.
- The `Tags` property matches a value if at least one tag in the collection matches that value, and it does not match if none of the tags match.
- Use parentheses `()` to group expressions and control the order of operations when using Boolean operators.

## Running a Dynamic Test Set

### Running with RapiseLauncher

Dynamic Test Sets are no different from static Test Sets, so you may schedule their execution or execute them right from the Spira Dashboard.

### Running from Rapise

You may also run a Dynamic Test Set right from Rapise.

1. Click the `Play` button on the main toolbar of Rapise. The `Choose Test Case` dialog will open.
2. Use the `Test Set...` dropdown at the bottom to choose a test set.  The required test cases will be selected automatically. In the case of a dynamic test set, the selected test cases should match the dynamic filter.
3.  Click `OK` to start execution.


