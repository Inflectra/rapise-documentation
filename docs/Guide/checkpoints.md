# Checkpoints (aka Verification Points)

## Purpose

A **Checkpoint** is defined by two components:

1.  a location in the test execution path, and
2.  a subset of the AUT's state.

Each time the checkpoint is executed, the AUT's state is compared to a predefined value. Any discrepancies are noted and may indicate a regression in program behavior in the test execution [report](automated_reporting.md).

## Usage

A checkpoint can be added in two ways:

1.  during recording, using the [Verify Object Properties dialog](verify_object_properties.md), or
2.  by manually adding an [Assertion](assertions.md) to the test script.

## See Also

-   [Recording](recording.md)