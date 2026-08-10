# Agentic Chat with MCP

## Overview

Rapise 9.1 introduces an agentic chat interface that connects to Model Context Protocol (MCP) servers, enabling AI-assisted test automation through natural conversation. Ask questions, request actions, and let the AI agent work with your testing tools directly.

The agentic chat supports both the **Rapise MCP server** (for test framework operations) and the **Spira MCP server** (for test management operations), allowing seamless interaction between your tests and your test management system.

## What is MCP?

The [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) is an open standard that allows AI models to interact with external tools and data sources. MCP servers expose "tools" that the AI can call to perform actions or retrieve information.

## Key Features

- **Natural Language Interface**: Ask questions and give commands in plain English
- **Tool Orchestration**: AI automatically selects and chains tools to accomplish tasks
- **Plan Preview**: Review proposed tool calls before execution
- **Streaming Responses**: See AI responses and tool results in real-time
- **Session History**: Continue conversations across multiple turns

## Supported MCP Servers

### Rapise MCP Server

Provides tools for interacting with your Rapise testing framework:

- List and search test cases
- Read test case content (RVL, JavaScript)
- Execute tests
- Access object repositories
- Work with Page Objects and Modules

### Spira MCP Server

Provides tools for test management operations:

- Query test cases and test sets
- Access requirements and releases
- Work with test runs and results
- Manage automation hosts

## Getting Started

### 1. Configure AI Provider

Ensure you have an AI provider configured in [AI Dashboard Settings](ai_dashboard.md#settings). The agentic chat works with:

- Inflectra.ai
- Amazon Bedrock (Claude models)
- OpenAI (GPT-4)

### 2. Open Agentic Chat

1. Open the **AI Dashboard** (View > AI Dashboard)
2. Go to the **Chats** page
3. Create a new chat and select **MCP Agent** as the workflow

### 3. Start Chatting

Type your request in natural language:

```
"Show me all test cases in the Login module"
```

```
"Create a new test case that verifies the checkout process"
```

```
"What test cases failed in the last test run?"
```

## How It Works

1. **You send a message** describing what you want to do
2. **The AI analyzes** your request and determines which tools to use
3. **A plan is created** showing the proposed tool calls
4. **You can approve or reject** the plan (if plan preview is enabled)
5. **Tools execute** and results are returned to the AI
6. **The AI responds** with a summary or asks follow-up questions

## Configuration Options

The MCP agent workflow supports several configuration options:

| Option | Description | Default |
|--------|-------------|---------|
| `servers` | Which MCP servers to enable | `["rapise"]` |
| `plan_preview` | Show plan before execution | `true` |
| `stop_on_error` | Stop if a tool fails | `true` |
| `max_tool_calls_per_turn` | Limit tool calls per message | `20` |
| `turn_timeout_ms` | Maximum time per turn | `600000` (10 min) |
| `tool_call_timeout_ms` | Timeout per tool call | `60000` (1 min) |

## Example Conversations

### Exploring Test Cases

**You**: "What test cases do we have for user authentication?"

**Agent**: I'll search for authentication-related test cases.
*[Calls list_test_cases tool with search filter]*

Found 5 test cases related to user authentication:
1. TC001 - Login with valid credentials
2. TC002 - Login with invalid password
3. TC003 - Password reset flow
4. TC004 - Two-factor authentication
5. TC005 - Session timeout handling

### Creating Tests

**You**: "Create a test case that verifies users can add items to their shopping cart"

**Agent**: I'll create a new test case for the shopping cart functionality.
*[Calls create_test_case tool]*

Created test case "Add Items to Shopping Cart" with the following steps:
1. Navigate to product catalog
2. Select a product
3. Click "Add to Cart"
4. Verify cart count increases
5. Open cart and verify item appears

### Analyzing Results

**You**: "Why did the checkout tests fail yesterday?"

**Agent**: Let me look at the recent test runs for checkout tests.
*[Calls get_test_runs and get_test_case_details tools]*

The checkout tests failed due to:
- TC045: Timeout waiting for payment gateway response
- TC046: Element not found - the "Confirm Order" button locator needs updating

## Tool Approval Policies

Each MCP tool has an approval policy:

- **auto**: Execute immediately without asking
- **ask**: Show in plan preview, wait for approval
- **deny**: Never allow execution

Configure policies based on the risk level of each operation.

## Best Practices

1. **Be Specific**: Clear requests lead to better tool selection
2. **Review Plans**: Use plan preview for operations that modify data
3. **Set Timeouts**: Configure appropriate timeouts for your environment
4. **Use Context**: Reference specific test cases, modules, or releases by name
5. **Iterate**: If the first attempt isn't right, provide feedback and try again

## Troubleshooting

### "No MCP tools available"

- Check that MCP servers are configured and running
- Verify server connections in the MCP settings
- Ensure the AI provider is properly configured

### Tool calls timing out

- Increase `tool_call_timeout_ms` for slow operations
- Check network connectivity to Spira or other external services
- Verify Rapise is not blocked by other operations

### Unexpected tool behavior

- Review the plan preview before approving
- Check tool documentation for expected parameters
- Provide more context in your request

## See Also

- [AI Dashboard](ai_dashboard.md)
- [Spira Integration](../Guide/spiratest_integration.md)
- [AiTranslator](aitranslator.md)
- [AI Command](ai_command.md)
