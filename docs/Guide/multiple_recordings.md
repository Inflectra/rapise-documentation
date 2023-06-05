# Multiple Recordings

## Purpose

Every time you record, the script recorder updates your test script.

## Usage

### Recording in RVL Mode

During Recording, the Script Recorder:

1. Appends newly recorded actions to the current sheet in `Main.rvl.xlsx`
2. Appends newly encountered objects to the repository stored in `Object.js`
3. Updates `g_load_libraries` to reflect the library selections you made in the [Select an Application to Record... Dialog](select_an_application_to_record_dialog.md)

### Recording in JavaScript Mode

During Recording, the Script Recorder:

1. Appends newly recorded actions to the `Test()` function inside `Main.js` of the current test case
2. Appends newly encountered objects to the repository stored in `Object.js`
3. Updates `g_load_libraries` to reflect the library selections you made in the [Select an Application to Record... Dialog](select_an_application_to_record_dialog.md)

## See Also

- [Settings Dialog](settings_dialog.md)
- [Select an Application to Record... Dialog](select_an_application_to_record_dialog.md)
- [Recording](recording.md)
