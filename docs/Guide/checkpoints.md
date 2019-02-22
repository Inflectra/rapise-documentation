# Checkpoints (aka Verification Points)

## Purpose

A **Checkpoint** is defined by two things:

1. a location in the test execution path and
2. a subset of AUT state.  

Each time the checkpoint executes, the AUT state is compared to a predefined value.  Discrepancies are noted, and may show a regression in program behavior.

## Usage

A checkpoint can be added in two ways:

1. during recording, with the [Verify Object Properties dialog](verify_object_properties.md), or
2. by manually adding an [Assertion](assertions.md) to the test
script.

## See Also

- [Recording](recording.md)
