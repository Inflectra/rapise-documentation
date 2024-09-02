# AI

In RVL, the `AI` action is used to trigger static AI code generation. The format of the AI command without parameters is:

| Flow | Type | Object                                              | Action | ParamName | ParamType | ParamValue |
| ---- | ---- | ---------------------------------------------------- | ------ | --------- | --------- | ---------- |
|      | AI   | <td colspan=5>Command text explaining the command step</td> |        |           |           |            |

Example:

=== "Screenshot"
    ![Login as librarian](img/AI_login_as_librarian.png)
=== "Transcript"
    | Flow | Type | Object                                               | Action | ParamName | ParamType | ParamValue |
    | ---- | ---- | ----------------------------------------------------- | ------ | --------- | --------- | ---------- |
    |      | AI   | <td colspan=5>Login to the system as librarian/librarian</td> |        |           |           |            |

Or together with parameters:

| Flow | Type  | Object                                                  | Action | ParamName | ParamType | ParamValue |
| ---- | ----- | ------------------------------------------------------- | ------ | --------- | --------- | ---------- |
|      | AI    | <td colspan=5>Command text explaining the command step and using **{someParam1}**, **{someParam2}**, {**...**} etc</td> |        |           |           |            |
|      | Param |                                                         |        | **someParam1**  | string    | ...  |
|      | Param |                                                         |        | **someParam2**  | string    | ...  |
|      | Param |                                                         |        | **...**         | string    | ...  |

i.e. if you want to pass some parameter, you need to mention it in the AI command in curly braces, i.e. **{param1}** and then have a parameter with the same name without curly braces - **param1**.

AI command parameters represent dynamic values that may vary during the execution. So the generated code stays intact while values may be different.

Example:

=== "Screenshot"
    ![Login with params](img/AI_login_as_librarian_params.png)
=== "Transcript"
    | Flow | Type  | Object                                                  | Action | ParamName | ParamType | ParamValue |
    | ---- | ----- | ------------------------------------------------------- | ------ | --------- | --------- | ---------- |
    |      | AI    | <td colspan=5>Login to the system as {username}/{password}</td> |        |           |           |            |
    |      | Param |                                                         |        | username  | string    | librarian  |
    |      | Param |                                                         |        | password  | string    | librarian  |

## Editing and Multiline Commands

If the row type is `AI` then there should be a non-empty command description. An `AI` command may be multiline with limited formatting options (bold and italic).

![Login multiline](img/AI_login_as_librarian_multiline.png)

When editing a cell and want to add a new line, you need to press the F2 button. Then hitting ENTER will add a new line.

### Implementation

Each AI action will be transformed into a JavaScript code snippet. Given the unpredictable nature of today’s LLMs, all the AI activity is expected to be performed once and reviewed by the test developer. No AI interactions are carried out during runtime to avoid intermittent and unpredictable results. The AI-generated code gets cached and is reused when you play the test.

All cached information regarding AI interactions is saved in the `%WORKDIR%\AI` subfolder.

![AI Subfolder](img/AI_ai_subfolder.png)

#### Action Context

Every `AI` action is performed within a specific context, which can include several elements such as previous actions, variables, repository objects, positive and negative examples, and shared instructions.

### AI Prompt Comments

AI prompt comments start with `##` and are passed directly to the `AI` command prompt. Such comments help clarify some common details that may assist in interpreting commands.

For example, this testing framework has page objects `POAPI` and `POCommon`. Each has a `DoLogin` command, i.e., `POPAPI.DoLogin` and `POCommon.DoLogin`. So, it is up to AI to choose which one to use when generating code. In this example, it preferred to use API:

![Login with POAPI](img/AI_login_poapi.png)

Now if we want the test case to use the UI, we may need an additional instruction. We start it with `##` to let Rapise know that it is for `AI`. We want to tell that all the actions in this RVL should be done using UI, not API, and here is the result:

![Login with POCommon](img/AI_login_pocommon.png)

### Previous Actions

It is often necessary to reference previous actions to ensure that the current AI-generated command harmonizes well with preceding steps. This helps maintain continuity and coherence in the automated sequence of steps within the test case.

For example, here the 2nd action adds an author named after the logged-in user for testing purposes:

![Add Librarian as an Author](img/AI_add_author_as_user.png)

Note that the `AI` command in row 3 uses *same name* and the generated code uses `librarian` from the previous command. I.e., the command is assumed within the context.

### Variables

Variables allow dynamic data to be used in AI command code. For example, **POCommon.DoCreateAuthor** has 2 parameters - `authorName` and `authorAge`. The default behavior of AI is to use reasonable values when creating an author, in this case, it is 30:

![Create Author Default](img/AI_create_author_default.png)

But if we have a variable for that, it would try to use it when generating code. See how it used the `authorAge` variable:

![Create Author with Variable](img/AI_create_author_with_var.png)

### Repository Objects

Repository objects play a critical role in contextualizing AI actions within the testing framework. They serve as references to UI elements, enabling the AI-generated commands to interact appropriately with these elements.

There are three ways of having repository objects in the test:
1. Use objects belonging to the test case.
2. Explicitly include objects using the [Repository](./Repository.md) command.

#### Test Case Repository

In the example below, we have a Calculator application. The calculator UI is a set of buttons and a result display. We learned all objects using the Learn tool:

| Application Window                 | Objects                                  |
| ---------------------------------- | ---------------------------------------- |
| ![Calc Window](img/AI_calc_ui.png) | ![Calc Buttons](img/AI_calc_buttons.png) |

Now we want to implement simple calculation examples, such as checking that 12.5 + 2.5 = 15. AI helps us link it all together like this:

![Calc AI full example](img/AI_calc_example.png)

Here you may see that it split the input into individual button clicks (12.5 is Click on 1, Click on 2, Click on Decimal Separator, Click on 5).

```javascript
SeS("Clear").DoClick()
SeS("1").DoClick()
SeS("2").DoClick()
SeS("Decimal_separator").DoClick()
SeS("5").DoClick()
```

So to summarize, it re-used the test case's own repository to implement user actions.

#### Using External Repository

The `AI` command understands external [Repositories](Repository.md) just like local repositories. So whatever is defined using the `Repository` command will be used.

![Action with External Objects](img/AI_external_repo_o_actions.png)

Each object belonging to an external repository will also be wrapped into the `O(id)` wrapper, which is needed to map from the external repository ID containing the prefix to an actual object:

```javascript
SeS(O("CalcButtons/Subtract")).DoClick();
```

### Tuning with Positive and Negative Examples

Incorporating positive and negative examples can substantially enhance the accuracy and reliability of AI-generated commands. By providing examples of both correct and incorrect outputs, you can guide the AI in generating more precise and relevant code.

Here is an example. Suppose that we have an `AI` command that is supposed to validate the output of the calculator. Here are the results of generation:

![Check Result](img/AI_generate_check_result.png)

It is trying to use a non-existing action *DoVerifyText*, and thus the snippet code will fail when executed:

![DoVerifyText Fail](img/AI_doverifytext_fail.png)

One way to proceed is to declare that this code is not good by using the **thumbs down** icon:

![Thumbs Down](img/AI_thumbs_down.png)

This way, the example is registered in `AIExamples.txt`, which will be used with each subsequent call to AI as a reference:

![Wrong Example](img/AI_example_wrong.png)

And subsequent attempts to generate code will use alternative ways for the same:

![Alternative Example](img/AI_example_alternative.png)

The code is still wrong, but it is closer to what is needed and may be tweaked.

You may tweak `AIExamples.txt` any time later by adding/removing positive and negative examples. You may open it from the `Shared/AI` node.

![AIExamples.txt location](img/AI_aiexamples_location.png)

We may provide a good example to AI by changing the code. For example, the validation above:

```javascript
Tester.AssertEqual(SeS("Result").GetText(), "15")
```

Needs to be tweaked because `GetText()` returns the name of the object, while the actual result of the calculation is returned from the `GetValue()` as we can see it from the **Verify Object Properties** dialog:

![Verify Properties](img/AI_result_text.png)

Also, we see that the calc result may contain spaces, so the result of 3+2 will actually be "5 ". So we need to trim it for comparison (i.e., use Text.Trim).

One more correction: **Tester.Assert...** methods always expect the 1st parameter to be a message for the assertion. So putting it all together, we may prune the validation manually to be like:

```javascript
Tester.AssertEqual("Check that the result is 15", Text.Trim(SeS("Result").GetValue()), "15")
```

After executing it and making sure it is working, we may mark it as a reference example for other parts of the testing framework by using the **thumbs up**:

![Thumbs Up](img/AI_thumbs_up.png)

And it gets registered in `AIExamples.txt` as a positive example:

![Positive Example](img/AI_positive_example.png)

Once we have this example, the generation for other cases also changes. I.e.:

![Other Cases](img/AI_other_cases_check.png)

### Shared Instructions

Shared instructions streamline the AI code generation process by providing general guidelines and frameworks that apply across multiple test cases. These instructions ensure consistency and standardization in the AI-generated code.

Shared instructions are defined in the file `%WORKDIR%/Shared/AIPrompt.txt`. Anything from this file gets appended to each AI request.

|                                   |                                   |
| --------------------------------- | --------------------------------- |
| ![](img/AI_aiprompt_create_1.png) | ![](img/AI_aiprompt_create_2.png) |

For example, when we do a test for Calculator, we always want to press the Clear or C button before doing any subsequent calculation.

![Example Prompt](img/AI_aiprompt_txt.png)

Once it is defined, we need to re-generate code. And we may see that each test now begins with the same instruction:

```javascript
SeS(O("CalcButtons/Clear")).DoClick()
```

I.e.:
![Clear](img/AI_clear1.png)

In this example, we may see that it is clever enough to do clear only before the calculation starts, and not before we need to check the result:

![Clear](img/AI_clear2.png)

## Naming

Now, with AI, naming of objects, actions, and methods as well as descriptive comments become even more important. The better you express your application and API, the better AI may combine it to implement the test. It all together helps to improve both the quality of test cases and the integrity of the testing framework.

## Token Saving

When working with AI-generated commands, it is crucial to be mindful of token consumption, as excessive use can lead to costs. Strategies for saving tokens include optimizing prompts, reusing parameterized commands, and minimizing unnecessary elaboration in command descriptions. This ensures that the AI-driven testing process remains efficient and cost-effective.

In Rapise, the whole approach is intended to save cost while maximizing efficiency. Rapise provides AI with well-defined objects and page objects, and AI uses them to generate the code. The generation is done while the test is created, and no AI access is required during runtime.

The only exception is if you updated the AI command and didn't re-generate it—then the test will generate and save it to the cache before executing the command. But in most cases, executing the test does not spend any tokens.