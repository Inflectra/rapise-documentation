# AiTester

## Overview

AiTester enables AI-powered capabilities during test case execution. With AiTester, you can send text and image-augmented queries to AI models, allowing your tests to leverage generative AI for tasks that would be difficult or impossible with traditional automation approaches.

AiTester enhances the testing process by introducing advanced visual testing capabilities, simulating the keen observational skills of a manual tester. This feature enables automated detection of visual discrepancies, such as layout shifts, missing elements, or subtle changes in design, that traditional functional tests might overlook.

## Key Capabilities

- **Generate Data**: Create test data on-the-fly using AI prompts
- **Image-Based Verifications**: Detect visual discrepancies, count UI elements, compare screenshots
- **OCR**: Extract text from images and screenshots
- **AI-Based Assertions**: Validate application state using natural language assertions
- **Question Answering**: Ask questions about the current application state

## Supported AI Providers

AiTester works with all AI providers configured in the [AI Dashboard](ai_dashboard.md#settings):

- [Inflectra.ai](ai_dashboard.md#inflectraai)
- [OpenAI](ai_dashboard.md#openai)
- [Azure OpenAI](ai_dashboard.md#azure)
- [Amazon Bedrock](ai_dashboard.md#amazon-bedrock)
- [Google Gemini](ai_dashboard.md#google)

## Installation

!!! info "Rapise 9.1+"
    Starting from Rapise 9.1, AiTester is included in Rapise by default. You can use it directly without importing any modules.

For earlier versions of Rapise, AiTester is available as a public page object that you can import into your framework:

1. Right-click **Modules/Pages** in the Object Tree
2. Select **Import Public Page Object > AiTester**
3. AiTester will appear in your Modules/Pages folder

## Configuration

Before using AiTester, configure your AI provider connection in the [AI Dashboard Settings](ai_dashboard.md#settings).

## Usage Examples

### Compare Images

Use AI to identify differences between two images:

```javascript
var img1 = Navigator.DoScreenshot();
// ... perform some action ...
var img2 = Navigator.DoScreenshot();
AiTester.DoImageQuery("Compare these two images and list the differences", img1);
```

### Generate Random Data

Generate test data using AI:

```javascript
var result = AiTester.DoTextQuery("Generate a random US phone number in format (XXX) XXX-XXXX");
Tester.Message("Generated phone: " + result);
```

### Count UI Elements

Count elements visible on screen:

```javascript
AiTester.DoWebImageQuery("How many rows are visible in the data grid?");
```

### Assess Application State

Verify the application is in an expected state:

```javascript
AiTester.DoWebImageQuery("Is the login form displayed? Answer yes or no.");
AiTester.AssertLastResponse("yes");
```

### Perform OCR

Extract text from an image:

```javascript
var screenshot = Navigator.DoScreenshot();
AiTester.DoImageQuery("Extract all text visible in this image", screenshot);
```

### Visual Comparison with Assertions

Compare screenshots and assert no significant changes:

```javascript
AiTester.StackWebImage(); // Before action
// ... perform action ...
AiTester.StackWebImage(); // After action
AiTester.DoMultiImageQuery("Compare these screenshots. Are there any unexpected visual changes?");
AiTester.SoftAssertLastResponse("no unexpected changes");
```

## API Reference

For the complete API reference, see [AiTester](../Libraries/AiTester.md).

## Best Practices

1. **Be Specific**: Write clear, specific prompts for better AI responses
2. **Use Assertions**: Combine AI queries with assertions to create verifiable test steps
3. **Manage Token Usage**: AI calls consume tokens; use them judiciously in large test suites
4. **Set Appropriate Workflows**: Different workflows are optimized for different tasks (chat, code generation, data generation)
5. **Review AI Responses**: AI responses may vary; design tests that tolerate reasonable variations

## Video Tutorial

Watch the [AiTester demo on YouTube](https://youtu.be/GhwrYgq4Qxw) to see these capabilities in action.

## See Also

- [AI Dashboard](ai_dashboard.md)
- [AI Command](ai_command.md)
- [AiRobot](airobot.md)
- [AiTranslator](aitranslator.md)
