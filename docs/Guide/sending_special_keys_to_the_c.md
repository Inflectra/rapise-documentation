# Sending Special Keys to the Current Application

## Overview

You can use the 

```javascript
Global.DoSendKeys('...');
```

command in Rapise to send keypresses to the current application. Sometimes you will want to send special control keys to the application (e.g. `Page Down`, or `CTRL + Key`). This article explains the way to do this.

## Information and Examples

To send special characters, you just use the list available in the Windows API `SendKeys.Send` function:

[http://msdn.microsoft.com/en-us/library/system.windows.forms.sendkeys.send(v=vs.110).aspx](http://msdn.microsoft.com/en-us/library/system.windows.forms.sendkeys.send%28v=vs.110%29.aspx)

To specify characters that aren't displayed when you press a key, such as `ENTER` or `TAB`, and keys that represent actions rather than characters, use the codes in the following table:

| **Key**                                | **Code**                            |
| -------------------------------------- | ----------------------------------- |
| BACKSPACE                              | {BACKSPACE}, {BS}, or {BKSP}        |
| BREAK                                  | {BREAK}                             |
| CAPS LOCK                              | {CAPSLOCK}                          |
| DEL or DELETE                          | {DELETE} or {DEL}                   |
| DOWN ARROW                             | {DOWN}                              |
| END                                    | {END}                               |
| ENTER                                  | {ENTER} or ~                        |
| ESC                                    | {ESC}                               |
| HELP                                   | {HELP}                              |
| HOME                                   | {HOME}                              |
| INS or INSERT                          | {INSERT} or {INS}                   |
| LEFT ARROW                             | {LEFT}                              |
| NUM LOCK                               | {NUMLOCK}                           |
| PAGE DOWN                              | {PGDN}                              |
| PAGE UP                                | {PGUP}                              |
| PRINT SCREEN                           | {PRTSC} (reserved for future use)   |
| RIGHT ARROW                            | {RIGHT}                             |
| SCROLL LOCK                            | {SCROLLLOCK}                        |
| TAB                                    | {TAB}                               |
| UP ARROW                               | {UP}                                |
| F1                                     | {F1}                                |
| F2                                     | {F2}                                |
| F3                                     | {F3}                                |
| F4                                     | {F4}                                |
| F5                                     | {F5}                                |
| F6                                     | {F6}                                |
| F7                                     | {F7}                                |
| F8                                     | {F8}                                |
| F9                                     | {F9}                                |
| F10                                    | {F10}                               |
| F11                                    | {F11}                               |
| F12                                    | {F12}                               |
| F13                                    | {F13}                               |
| F14                                    | {F14}                               |
| F15                                    | {F15}                               |
| F16                                    | {F16}                               |
| Keypad add                             | {ADD}                               |
| Keypad subtract                        | {SUBTRACT}                          |
| Keypad multiply                        | {MULTIPLY}                          |
| Keypad divide                          | {DIVIDE}                            |

For example, to send the `ENTER` keypress, just use:

```javascript
Global.DoSendKeys('{ENTER}');
```

To specify keys combined with any combination of the SHIFT, CTRL, and ALT keys, precede the key code with one or more of the following codes:

| **Key**   | **Code**  |
| --------- | --------- |
| SHIFT     | +         |
| CTRL      | \^        |
| ALT       | %         |
