# Internal Debugger

## Purpose

The Internal Debugger provides:

- [Persistent Breakpoints](breakpoints.md)
- [Execution Control](control_execution.md)
- [Watch View](watch_view.md)
- [Variable/Call Stack View](variable_call_stack_view.md)
- [Tooltips](tooltips.md)

## Usage

To enable the debugger for a test, click the ![toolbar debugger](./img/internal_debugger1.png) button on the toolbar or select the `Tools > Debugger` menu option:

![menu debugger](./img/internal_debugger3.png)

Set a [breakpoint](breakpoints.md) on the first line of the `Test` function and click the `Play` button on the toolbar.

> If you start debugging for the first time, Rapise may prompt you to install **Microsoft Script Debugger**:
>
> ![script debugger](./img/internal_debugger2.png)
>
> Follow the prompts. When **Microsoft Script Debugger** is installed, click `Play` again.

Rapise will stop execution at the first line of the test and display the debugger controls and views.

![debugger controls](./img/internal_debugger5.png)

In the screenshot above, you can see the [Debugger buttons](menu_and_toolbars.md) available on the toolbar at the top of the screen, as well as the [Variables](variable_call_stack_view.md) and [Watch](watch_view.md) sections in the lower pane. The next statement is highlighted in yellow.