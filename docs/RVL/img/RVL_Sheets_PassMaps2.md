Sheet name: Login

| Flow | Type      | Object     | Action  | ParamName | ParamType  | ParamValue |
| ---- | --------- | ---------- | ------- | --------- | ---------- | ---------- |
|      |           |            |         |           |            |            |
| Map  | Rows      | UserLogins |         |           |            |            |
|      | User      | Password   |         |           |            |            |
|      | user1     | password1  |         |           |            |            |
| End  | of Map    |            |         |           |            |            |
|      |           |            |         |           |            |            |
| Loop | Map       | UserLogins |         |           |            |            |
| #    | Loop body |            |         |           |            |            |
|      | Action    | Tester     | Message | message   | string     | User:      |
|      | Param     |            |         | message   | UserLogins | User       |
|      | Param     |            |         | message   | string     | /          |
|      | Param     |            |         | message   | UserLogins | Password   |
| End  | of Loop   |            |         |           |            |            |
