| Flow | Type   | Object | Action  | ParamName    | ParamType | ParamValue |
| ---- | ------ | ------ | ------- | ------------ | --------- | ---------- |
| #    | My scenario goes here |        |        |              |           |            |
|      | Action | Global | DoLaunch | cmdLine      | string    | calc       |
|      | Param  |        |          | wrkDir       | string    | .          |
|      | Param  |        |          | attachIfExists | boolean | true       |
|      | Param  |        |          | attachToWindow | string  | Calculator |
|      | Action | _1     | DoClick  | x            | number    | 18         |
|      | Param  |        |          | y            | number    | 15         |
|      | Action | Add    | DoClick  | x            | number    | 21         |
|      | Param  |        |          | y            | number    | 19         |
|      | Action | _2     | DoClick  | x            | number    | 14         |
|      | Param  |        |          | y            | number    | 13         |
|      | Action | Equals | DoClick  | x            | number    | 12         |
|      | Param  |        |          | y            | number    | 23