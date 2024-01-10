| Flow | Type     | Object        | Action             | ParamName        | ParamType  | ParamValue                |
| ---- | -------- | ------------- | ------------------ | ---------------- | ---------- | ------------------------- |
| Map  | Rows     | Users         |                    |                  |            |                           |
|      | Thread   | g_loginName   | g_password         | g_name           |            |                           |
|      | lib      | librarian     | librarian          | librarian        |            |                           |
|      | adm      | administrator | PleaseChange       | administrator    |            |                           |
|      | bor      | borrower      | borrower           | borrower         |            |                           |
| End  | of Map   |               |                    |                  |            |                           |
|      |          |               |                    |                  |            |                           |
|      | Variable | Global        |                    | g_browserProfile |            |                           |
|      |          |               |                    |                  |            |                           |
|      | Action   | Tester        | Message            | message          | string     | Launching MR for Browser: |
|      | Param    |               |                    | message          | variable   | g_browserProfile          |
|      |          |               |                    |                  |            |                           |
|      | Action   | RVL           | DoPlayTestParallel | sstestPath       | string     | MassLoginsTest.sstest     |
|      | Param    |               |                    | threadsMap       | expression | Users                     |
|      | Param    |               |                    | g_browserLibrary | variable   | g_browserProfile          |
|      | Param    |               |                    | g_entryPointName | string     | RVLSpecialEntryPoint      |
|      | Param    |               |                    | g_rvlScriptSheet | string     | Login                     |
|      |          |               |                    |                  |            |                           |
