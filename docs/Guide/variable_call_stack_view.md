# Variable/Call Stack View

![variable view](./img/variable_call_stack_view1.png)

## Purpose

Lists the functions in the current call stack.  Beneath each function, variables/objects local to that function are listed with their value and type.

## How to Open

Begin [debugging](internal_debugger.md) a script.  The **Variable/Call Stack View** will open automatically.

## Go to a Function Definition

Double click on a function to go to its definition.

## Call Stack View Optimization

The view of the call stack depends on the value of the [Optimize Call Stack](options_dialog#debugger) setting. When set to **True**, internal calls used by the Rapise runtime are skipped, resulting in a shorter call stack:

![Optimized Call Stack](img/variable_call_stack_view_optimized_call_stack.png)

When set to **False**, the full call stack is shown, including all internal calls:

![Full Call Stack](img/variable_call_stack_view_full_call_stack.png)

## See Also

- [Internal Debugger](internal_debugger.md)
