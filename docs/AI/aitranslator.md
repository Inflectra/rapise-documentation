# AiTranslator

## Overview

AiTranslator is the semantic bridge between natural language and the Rapise automation framework. It transforms your plain-English test descriptions into executable sequences of SmartActions—intelligent, self-healing automation steps that adapt when your application changes.

Write tests the way you think about them:

```
"Navigate to the Library Information System"
"Login as borrower/borrower"  
"Search for 'War and Peace'"
"Verify the book appears in the results"
```

AiTranslator understands your intent and generates the automation code to make it happen.

## Key Features

- **Natural Language Input**: Describe test steps in plain English
- **SmartAction Output**: Generates self-healing automation that adapts to UI changes
- **Multi-Step Context**: Maintains context across test steps for coherent test execution
- **Module Awareness**: Leverages your Page Objects and Modules for accurate code generation
- **Object Repository Integration**: Uses learned objects from your repository
- **AI-Powered Locator Generation**: Improve XPath locators using AI analysis

## Supported AI Providers

AiTranslator works with:

- **[Inflectra.ai](ai_dashboard.md#inflectraai)** - Recommended for seamless integration
- **Amazon Bedrock** - Anthropic Claude, Qwen models
- **OpenAI** - All current OpenAI models

## Automatic Invocation

!!! info "No Manual Setup Required"
    Rapise uses AiTranslator automatically. When you run an AI RVL statement in a test case tagged with `airecorder`, AiTranslator is invoked behind the scenes to translate your natural language steps into executable SmartActions.

Simply create a test with the `airecorder` tag and write your test steps in natural language using RVL AI statements. Rapise handles the rest:

1. Rapise detects the AI statement in your RVL
2. AiTranslator is invoked automatically with the appropriate context
3. Your natural language is translated into SmartActions
4. SmartActions execute with built-in self-healing

You don't need to call `AiTranslator.DoTestStep()` directly unless you're building advanced custom workflows.

## How It Works

1. **You provide** natural language test steps in RVL
2. **AiTranslator analyzes** your framework's Page Objects, Modules, and Object Repository
3. **AI generates** SmartAction code that maps to your application
4. **SmartActions execute** with built-in self-healing capabilities

## AiTranslator vs Other AI Features

| Feature | Purpose | Token Usage | Best For |
|---------|---------|-------------|----------|
| **AiTranslator** | Convert natural language to SmartActions | During execution | Writing new tests in natural language |
| **[AI Command](ai_command.md)** | Convert test steps to JavaScript (one-time) | Generation only | Codifying manual test steps |
| **[AiRobot](airobot.md)** | Visual computer use automation | Continuous | Exploratory testing |
| **[AiTester](aitester.md)** | AI queries during execution | Per query | Assertions, data generation |

## Integration with SmartActions

AiTranslator generates [SmartActions](../Guide/web_smart_action.md)—test steps that combine object descriptions with action intent. SmartActions are:

- **Self-Healing**: Automatically find elements even when locators break
- **Readable**: Express intent in human-understandable terms
- **Maintainable**: Update descriptions instead of brittle locators

!!! tip "Applying Generated Objects"
    When AiTranslator generates SmartActions, it also creates the underlying objects needed for automation. These proposed objects are saved to a `.jspatch` file, and when new objects are generated, Rapise automatically opens the file in the JSON Patch Editor for review. See [Applying Patches with the JSON Patch Editor](../Guide/web_smart_action.md#applying-patches-with-the-json-patch-editor) to learn how to apply these additions to your object repository.

## Best Practices

1. **Write Clear Steps**: Be specific about what you want to happen
2. **Use Your Modules**: Reference Page Objects and Modules in your framework
3. **Provide Context**: Include relevant variables and data in the translator context
4. **Review Generated Code**: Verify the generated SmartActions match your intent
5. **Iterate**: Refine your natural language if the first result isn't perfect

## Token Usage

AiTranslator tracks token usage for monitoring and optimization:

- Statistics are saved to `AI/translator_stat.json`
- Review prompt history and token counts
- Optimize prompts to reduce token consumption

## API Reference

For the complete API reference including `DoConfigure`, `DoTestStep`, `DoLint`, `DoConfigureControlTypes`, and `DoObjectLocator`, see [AiTranslator API](../Libraries/AiTranslator.md).

## See Also

- [SmartActions](../Guide/web_smart_action.md)
- [Self-Healing](../Guide/web_self_healing.md)
- [AI Dashboard](ai_dashboard.md)
- [AI Command](ai_command.md)
- [AiTester](aitester.md)
- [AiRobot](airobot.md)
