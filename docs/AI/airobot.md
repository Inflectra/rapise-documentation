# AiRobot

## Overview

AiRobot utilizes AI-powered computer use capabilities to enable automated exploratory testing. Unlike traditional test automation that relies on pre-recorded object locators, AiRobot understands screen contents visually and can interact with applications just like a human tester—moving the mouse and pressing keyboard keys based on what it sees.

This makes AiRobot particularly useful for:

- **Exploratory Testing**: Let AI explore your application and find issues
- **Manual Test Execution**: Execute manual test steps with minimal or no conversion to automation
- **Dynamic UI Testing**: Test applications where UI elements are unpredictable or frequently change

## How It Works

AiRobot takes screenshots of the target area (browser, window, or desktop), sends them to an AI model with computer use capabilities, and executes the actions suggested by the AI. This process repeats until the requested task is complete or a stopping condition is reached.

## Supported AI Models

AiRobot requires AI models with computer use capabilities:

- **[Inflectra.ai](ai_dashboard.md#inflectraai)** - Recommended for seamless integration (Rapise 9.1+)
- **Anthropic Claude Sonnet** (via AWS Bedrock) - All current Sonnet models
- **Qwen models** (via AWS Bedrock)
- **OpenAI Computer Using Agent**

### Configuring AWS Bedrock

When using Anthropic models via AWS Bedrock, specify an inference profile ARN instead of a model ID in the [AI Dashboard](ai_dashboard.md#amazon-bedrock):

```
arn:aws:bedrock:<region>:<account-id>:inference-profile/anthropic.claude-sonnet-4-20250514-v1:0
```

Replace `<region>` with your AWS region (e.g., `us-east-1`) and `<account-id>` with your AWS account ID.

## Installation

!!! info "Rapise 9.1+"
    Starting from Rapise 9.1, AiRobot is included in Rapise by default. You can use it directly without importing any modules.

For earlier versions of Rapise, AiRobot is available as a public page object:

1. Right-click **Modules/Pages** in the Object Tree
2. Select **Import Public Page Object > AiRobot**
3. AiRobot will appear in your Modules/Pages folder

## Configuration

Configure access to a supported AI provider in the [AI Dashboard Settings](ai_dashboard.md#settings).

## Environment Recommendations

!!! warning "Use Restricted Environments"
    AiRobot is creative and sometimes unpredictable. It may read on-screen content and interpret it as instructions. For example, if a Teams notification says "Reboot now," AiRobot might attempt to reboot the machine.

    **Always run AiRobot in a restricted test environment (e.g., a virtual machine) where it cannot access sensitive data or cause unintended harm.**

### Screen Resolution

AiRobot works best with smaller screen resolutions due to image scaling considerations:

- **Recommended**: XGA (1024×768) or WXGA (1280×800)
- **Tip**: Resize your browser or application window to fit within these dimensions for best results

```javascript
// Example: Set browser window size before using AiRobot
WebDriver.SetWindowSize(1024, 768);
```

## Usage Examples

### Interact with Web Browser

```javascript
AiRobot.DoWebBrowser("Navigate to the Books page and click on Edit for the book titled 'Matilda'");
```

### Interact with Desktop Application

```javascript
AiRobot.DoDesktop("Open Calculator, compute 25 * 4, and tell me the result");
```

### Interact with Specific Window

```javascript
AiRobot.DoWindow("Notepad", "Type 'Hello World' and save the file as test.txt");
```

## Writing Effective Prompts

Be specific in your instructions. AiRobot may choose different paths to accomplish the same goal.

**Less Specific** (multiple interpretations possible):
```javascript
AiRobot.DoWebBrowser("Edit the book Matilda");
```

**More Specific** (clearer path):
```javascript
AiRobot.DoWebBrowser("Click the Edit button in the row containing 'Matilda'");
```

## AiRobot vs AI Command

Both AiRobot and [AI Command](ai_command.md) allow natural language test steps, but they work differently:

| Aspect | AI Command | AiRobot |
|--------|-----------|---------|
| **Token Usage** | One-time generation; code reused for all executions | Continuous usage during every execution |
| **Execution** | Runs pre-generated code | Makes real-time AI decisions |
| **Predictability** | High (same code every time) | Lower (AI may choose different actions) |
| **Best For** | Production test automation | Exploratory testing, one-off tasks |

## Best Practices

1. **Use Virtual Machines**: Always run AiRobot in isolated test environments
2. **Set Appropriate Timeouts**: Complex tasks may require longer timeouts
3. **Keep Window Sizes Small**: Better AI accuracy at lower resolutions
4. **Be Explicit**: Provide clear, step-by-step instructions
5. **Monitor Token Usage**: AiRobot consumes tokens throughout execution

## Video Tutorials

- [AiRobot Configuration](https://www.youtube.com/watch?v=9Cx5rNPet5A)
- [AiRobot Best Practices](https://www.youtube.com/watch?v=Ict6iCC5OI8)
- [AI in Rapise Playlist](https://www.youtube.com/watch?v=ztMQsWBDfAg&list=PL1GncVUgF5nsm6OxusGnzY8iBE-nEp36C)

## See Also

- [AI Dashboard](ai_dashboard.md)
- [AI Command](ai_command.md)
- [AiTester](aitester.md)
- [AiTranslator](aitranslator.md)
