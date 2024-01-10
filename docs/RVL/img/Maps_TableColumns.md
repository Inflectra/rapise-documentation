| Flow | Type     | Object                 | Action                | ParamName          | ParamType | ParamValue |
| ---- | -------- | ---------------------- | --------------------- | ------------------ | --------- | ---------- |
| Map  | Table    | TableMap               |                       |                    |           |            |
|      |          | Staging                | QA                    | Prod               |           |            |
|      | Url      | http://staging.myho... | http://qa.myhost.com/ | http://myhost.com/ |           |            |
|      | User     | test                   | qatest                | john               |           |            |
|      | Password | pass                   | pass                  | QAasd*&8983        |           |            |
|      | Age      | 33                     | 33                    | 33                 |           |            |
| End  | of Map   |                        |                       |                    |           |            |
|      |          |                        |                       |                    |           |            |
|      | Action   | TableMap               | DoMoveToColumn        | colInd             | string    | QA         |
|      | Action   | Navigator              | Open                  | url                | TableMap  | Url        |