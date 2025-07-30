# Find and Replace Dialog

![find and replace, find](./img/find_and_replace_dialog1.png)

## Purpose

To find and replace text in files displayed in the Rapise [Content View](content_view.md).

## How to Open

From the main menu, use `Edit > Find in Files` or click the magnifier icon on the toolbar.

## Find in Files Tab

- **Find what**: Enter the string you want to search for in the **Find what** text box.
- **Look In**: This option specifies where to perform the search. You can limit the search to: the current document, current selection, the current test, the entire test and its subtests, or a specific folder.
- **Directory path**: Use the **Directory Path** text box to specify the directory to search in. The **Directory Path** text box is disabled (and ignored) if the **Test files** checkbox is checked.
- Check the **Include sub-folders** option to search recursively from the directory specified in the **Directory Path** text box. The **Include sub-folders** option is disabled if the **Test files** checkbox is checked.
- **Match case**: If unchecked, the search is case-insensitive.
- **Match whole word**: If checked, only whole words will be matched.
- **Look at these file types**: Search only for files with the specified file type(s).

## Find and Replace Tab

There is only one significant difference between the **Find in Files** tab and the **Find and Replace** tab: the **Replace with** text box.

- **Replace with**: All occurrences of the string in the **Find what** text box will be replaced with the string in the **Replace with** text box when you press the **Replace** button.