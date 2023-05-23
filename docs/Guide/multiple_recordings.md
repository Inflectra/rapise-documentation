# Multiple Recordings

## Purpose

Every time you record, the script recorder updates your test script. Be cautious about what changes you make to the test script; some changes could be lost if the recorder is re-run (see **Usage**).

## Usage

The test script path can be found in the title of Rapise window. Unless you specify otherwise, the test script is named `Main.js`.

During Recording, the Script Recorder:

1. Appends newly recorded actions to the `Test()` function
2. Appends newly encountered objects to the repository stored in `Object.js`
3. Updates `g_load_libraries` to reflect the library selections you made in the [Select an Application to Record... Dialog](select_an_application_to_record_dialog.md)


## See Also

- [Settings Dialog](settings_dialog.md)      
- [Select an Application to Record... Dialog](select_an_application_to_record_dialog.md)
- [Recording](recording.md)
