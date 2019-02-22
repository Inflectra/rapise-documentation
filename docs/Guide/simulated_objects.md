# Simulated Objects

## Purpose

During normal recording, Rapise [Learns about the Objects](object_learning.md) you interact with.  If, for some reason, Rapise cannot learn an object, you can create a **Simulated Object**.  Rapise identifies a simulated object by its location in the Window or Dialog and can perform certain generic actions on it, such as `Click` and `SendKeys`.  This works in the reverse sense also.  That is, if Rapise cannot identify an object, or, for example, you click outside any defined object in the AUT's UI, Rapise will create a simulated object to represent the action.

## Value

Not all objects on a screen are **standard** or can be recognized by the libraries loaded.  Some are compound objects, consisting of two or more individual objects that work together to deliver a UI effect or behaviour.  Simulated objects **fill in the blanks** to allow Rapise to cause an event outside the normal set of objects.

## See Also

- [Recording Activity Dialog](recording_activity_dialog.md)
- [Sample Tests](sample_tests.md): The **SimulatedObject** sample.
- [Deal with a Simulated Object](deal_with_a_simulated_object.md)
