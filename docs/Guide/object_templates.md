# Object Templates

## Purpose

The **Object Templates** feature allows you to model test cases using placeholder repository objects before you’ve learned them from the application. This is useful when designing [Modules / Page Objects](./Frameworks/pageobjects.md) ahead of actual implementation.

Object Templates are only available when working in [Testing Framework](./Frameworks/frameworks.md) mode.

## How to Use

Right-click on a **Test Case**, **Page Object / Module**, or **Object Repository Window** in the Object Tree. You will see the **Add Repository Object**.

This command inserts a repository object that is copied from a predefined **template** object.

### One-Time Setup: Creating a Template

Before you can use object templates, you must create at least one template object.

If no template is defined, you will see an error like this:

=== "Screenshot"
    ![Missing Template](img/tc_missing_template.png)
=== "Transcript"
    **Error Adding Object from Template**

    You need to have a template object.

    I was unable to find an Objects.js repository marked with a tag `template`.

    Create a Module or a Test Case with a single object, and mark its Objects.js with a `template` tag to use this feature.

Follow these steps to define a template:

1. **Create a Test Case**

   Create a new [test case](./Frameworks/frameworks.md#test-cases), for example named `Template`.

   ![Create Test Case](img/tc_create_test_case.png)
   ![Test Case Name - Template](img/tc_create_test_case_template.png)

2. **Assign Tags**

   Right-click the test case while holding ++shift++, then select **Tags**.

   ![Assign Tags - Draft & Skip](img/tc_test_case_tags_template_skip.png)

   Add the following tags:

   - `template` – marks the test case and its repository as a template.
   - `skip` – optional; prevents the test from being executed or displayed in [Spira Dashboard](spira_dashboard_2.md).

   ![Test Case with Template Tag](img/tc_template_tc.png)

3. **Learn an Object**

   Start the recorder and learn a UI object:

   ![Start Recording](img/tc_template_record.png)
   ![Learn a Button Object](img/tc_learn_login_button.png)

   After recording, press **Finish**.

4. **Rename Objects (Optional)**

   - Rename the learned object to something meaningful, like `Button`.

     ![Rename](img/tc_object_rename.png)
     ![Rename to Button](img/tc_rename_to_button.png)

   - You may also rename the containing window.

     ![Where to Rename a Window](img/tc_rename_window.png)

5. **Tag the Repository**

   - Switch to **Test Files** view.

     ![Show in Test Files Tree](img/tc_show_test_files_tree.png)

   - Select the `Objects.js` file next to the `Main` file.

   - In the **Properties** panel, set the `Tags` field to `template`.

     ![Template Object.js Tags](img/tc_object_js_template.png)
     ![Template Object.js set template Tags](img/tc_object_js_set_template_tag.png)

## Adding Repository Objects from Template

Once the template is defined, you can add repository objects from it into other test cases or page objects.

### Adding to a Test Case or Module

Right-click on a test case or module in the Object Tree and choose:

**Add Repository Object**

=== "Screenshot"
    ![Add Repository Object](img/tc_add_repository_object.png)
=== "Transcript"
    User right-clicks on TestCases/CreateInvoice and chooses **Add Repository Object**.

You will be prompted to provide a new object ID:

![Enter New Object Id](img/tc_new_object_id.png)

The new object appears in the Object Tree under the window from the template. You can rename it as needed.

### Adding to a Window

Right-click on a window node in the Object Tree and choose **Add Repository Object**:

![Add New Object into Existing Repository Window](img/tc_add_object_into_window.png)

The new object appears within the same window:

![Object In the Window](img/tc_object_added_into_window.png)

### Adding Next to Another Object

Right-click on an existing repository object and choose **Add Repository Object**:

![Add New Object next to Existing Object](img/tc_add_object_next_to_object.png)

The new object will be added to the same window.

> 💡 You can also [clone an object](./object_tree.md#context-menu-object) to achieve a similar result.

## Multiple Template Objects

You can define multiple objects within a single template repository. For example, you may define both a `Button` and `TextBox` object:

![Two Objects in the Template](img/tc_multiple_objects.png)

When you use **Add Repository Object**, a selection dialog will appear:

![Choose an Object to Add](img/tc_choose_object_from_template.png)

Select the object you want to insert and click **OK**.

## Summary

- **Object Templates** allow designing tests before real object learning.
- You must first create a test case or module and mark its `Objects.js` with the `template` tag.
- Use **Add Repository Object** from the Object Tree to insert template-based objects.
- Supports inserting into test cases, page objects, object windows, or alongside other objects.
- Multiple template objects can be defined, and users will be prompted to select one when adding.
- Tagging test cases with `skip` and `template` ensures clean integration with dashboards and test sets.
