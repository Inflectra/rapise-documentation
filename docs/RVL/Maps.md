# Maps

A *Map* is an easy way to define tables of data. Items in the map may be accessed by name (if defined) or by index.

The indexed dimensions in the map can also be iterated over using the [Loop][Loops.md] function, making it a useful feature for Data-Driven Testing.

=== "Screenshot"
    ![Map](./img/Maps_MapSample.png)
=== "Transcript"
    | Flow | Type      | Object       | Action | ParamName | ParamType | ParamValue |
    | ---- | --------- | ------------ | ------ | --------- | --------- | ---------- |
    | Map  | Rows      | Logins       |        |           |           |            |
    |      | **Login** | **Password** |        |           |           |            |
    |      | John      | pass1        |        |           |           |            |
    |      | Sarah     | pass2        |        |           |           |            |
    | End  | of Map    |              |        |           |           |            |

An RVL script has at least 7 [columns](Columns.md). However, a *Map* may take as many columns as needed.

## Map Definition

A typical map declaration looks like this:

| Flow  | Type      | Object      | Action | ParamName | ParamType | ParamValue |
| ----- | --------- | ----------- | ------ | --------- | --------- | ---------- |
| *Map* | `MapType` | **MapName** |        |           |           |            |
| ...   | ...       | ...         |        |           |           |            |
| *End* |           |             |        |           |           |            |

Where `MapType` is either in-place (*Table*, *Rows*, *Columns*) or external (*Range* or *Database*).

### In-place Maps

In-place map data is defined directly in the RVL script. Rows in an in-place map may be selected using the *This* flow or skipped using a [Comment](Comments.md). Therefore, in-place maps serve as part of the executable script.

* *Table*
* *Rows*
* *Columns*

### External Maps

* *Range*
* *Database*

External maps are defined in an external spreadsheet, file, or database.

## Using Maps

Once a map is defined, it may be used as a regular [Object](../Libraries/Map.md).

=== "Screenshot"
    ![Map as Object](./img/Maps_MapAsObject.png)
=== "Transcript"
    | Flow | Type                                     | Object   | Action       | ParamName | ParamType | ParamValue |
    | ---- | ---------------------------------------- | -------- | ------------ | --------- | --------- | ---------- |
    | Map  | Rows                                     | Logins   |              |           |           |            |
    |      | Login                                    | Password |              |           |           |            |
    |      | John                                     | pass1    |              |           |           |            |
    |      | Sarah                                    | pass2    |              |           |           |            |
    | End  | of Map                                   |          |              |           |           |            |
    | #    | Move to next sequential row in Login map |          |              |           |           |            |
    |      | Action                                   | Login    | DoSequential |           |           |            |


### Reading in a Loop

See the [Loops](Loops.md#Map) section for `Map` type loops.

## Map Types

### Rows Map

A `Rows` Map is most useful for data feeds. Each set of values is a row in a table that looks like this:

| Flow  | Type     | Object        | Action   | ParamName | ParamType | ParamValue |
| ----- | -------- | ------------- | -------- | --------- | --------- | ---------- |
| *Map* | `Rows`   | ***MapName*** |          |           |           |            |
|       | **Col1** | **Col2**      | **Col3** | **Col4**  |           |            |
|       | val11    | val12         | val13    | val14     |           |            |
|       | ...      |               |          |           |           |            |
|       | ...      |               |          |           |           |            |
| *End* |          |               |          |           |           |            |

`This` and comments are specific features of the `Rows` Map. For example, only the 2nd row of data will be executed in this case:

| Flow       | Type      | Object        | Action   | ParamName | ParamType | ParamValue |
| ---------- | --------- | ------------- | -------- | --------- | --------- | ---------- |
| *Map*      | `Rows`    | ***MapName*** |          |           |           |            |
|            | **Col1**  | **Col2**      | **Col3** | **Col4**  |           |            |
|            | ...       |               |          |           |           |            |
| ***This*** | ***...*** |               |          |           |           |            |
|            | ...       |               |          |           |           |            |
| *End*      |           |               |          |           |           |            |

`Rows` are designed to be iterated over in a [Loop](Loops.md).

A real example looks like this:

=== "Screenshot"
    ![Map](./img/Maps_This.png)
=== "Transcript"
    | Flow | Type      | Object       | Action | ParamName | ParamType | ParamValue |
    | ---- | --------- | ------------ | ------ | --------- | --------- | ---------- |
    | Map  | Rows      | MyMap1       |        |           |           |            |
    |      | **Login** | **Password** |        |           |           |            |
    |      | John      | testpass     |        |           |           |            |
    |      | Sarah     | testpass     |        |           |           |            |
    | This | Jim       | testpass     |        |           |           |            |
    |      | Peter     | testpass     |        |           |           |            |
    |      | John      | testpass     |        |           |           |            |
    |      | Fred      | testpass     |        |           |           |            |
    | End  |           |              |        |           |           |            |


[Comments](Comments.md) may also be used to skip specific rows or row sets.

### Columns Map

A `Columns` Map is a convenient way to represent data when you have many options combined into a few sets.

| Flow  | Type      | Object        | Action | ParamName | ParamType | ParamValue |
| ----- | --------- | ------------- | ------ | --------- | --------- | ---------- |
| *Map* | `Columns` | ***MapName*** |        |           |           |            |
|       | **Row1**  | ...           |        |           |           |            |
|       | **Row2**  | ...           |        |           |           |            |
|       | **Row3**  | ...           |        |           |           |            |
| *End* |           |               |        |           |           |            |

The same data could be represented using `Rows`, but that would require many columns and would sometimes be harder to read. Therefore, `Columns` is ideal for storing configuration structures:

=== "Screenshot"
    ![Columns](./img/Maps_Columns.png)
=== "Transcript"
    
    | Flow | Type     | Object                 | Action | ParamName | ParamType | ParamValue |
    | ---- | -------- | ---------------------- | ------ | --------- | --------- | ---------- |
    | Map  | Columns  | ConfigData             |        |           |           |            |
    |      | Url      | http://localhost:8080/ |        |           |           |            |
    |      | Login    | testuser               |        |           |           |            |
    |      | Password | testpass               |        |           |           |            |
    |      | Age      | 44                     |        |           |           |            |
    | End  |          |                        |        |           |           |            |
    

When a `Columns` Map is used in a Loop, the iteration is performed through the columns, and the rows are addressed by name within the loop. I.e., the first iteration chooses the first column, the second iteration chooses the second column, and so on.

### Table Map

A `Table` map has both named columns and named rows.

| Flow  | Type     | Object        | Action   | ParamName | ParamType | ParamValue |
| ----- | -------- | ------------- | -------- | --------- | --------- | ---------- |
| *Map* | `Table`  | ***MapName*** |          |           |           |            |
|       |          | **Col1**      | **Col2** | **Col3**  | **Col4**  |            |
|       | **Row1** | ...           |          |           |           |            |
|       | **Row2** | ...           |          |           |           |            |
|       | **Row3** | ...           |          |           |           |            |
| *End* |          |               |          |           |           |            |

=== "Screenshot"
    ![Table](./img/Maps_Table.png)
=== "Transcript"
    
    | Flow | Type     | Object                 | Action                 | ParamName          | ParamType | ParamValue |
    | ---- | -------- | ---------------------- | ---------------------- | ------------------ | --------- | ---------- |
    | Map  | Table    | TableMap               |                        |                    |           |            |
    |      |          | Staging                | QA                     | Prod               |           |            |
    |      | Url      | http://staging.myho... | http://qa.myhost.co... | http://myhost.com/ |           |            |
    |      | User     | test                   | qatest                 | john               |           |            |
    |      | Password | pass                   | pass                   | QAasd*&8983        |           |            |
    |      | Age      | 33                     | 33                     | 33                 |           |            |
    | End  |          |                        |                        |                    |           |            |
    |      |          |                        |                        |                    |           |            |
    

When a `Table` Map is used in a Loop, the iteration is performed through the columns, and the rows are addressed by name within the loop. I.e., the first iteration chooses the first column, the second iteration chooses the second column, and so on.

Using a `Table` Map is convenient when you have several columns and many rows, as it fits well on the screen. For example, you may have several alternative configuration sections that you want to use depending on the situation. In the example below, we have several sites (Testing, QA, Prod), each with its own URL, Login, etc. This allows us to quickly switch between sites when working with the test.

=== "Screenshot"
    ![Table Config Columns](./img/Maps_TableColumns.png)
=== "Transcript"
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

### Range Map

A `Range` map contains no in-place data; instead, it defines a region in an external spreadsheet to read information from.

=== "Screenshot"
    ![Range Map](./img/Maps_Range.png)
=== "Transcript"
    | Flow | Type  | Object | Action | ParamName | ParamType | ParamValue |
    | ---- | ----- | ------ | ------ | --------- | --------- | ---------- |
    | Map  | Range | MyMap1 |        | fileName  | string    | Calc.xls   |
    |      | Param |        |        | sheetName | string    | Data$      |
    |      | Param |        |        | fromRow   | number    | 0          |
    |      | Param |        |        | fromCol   | number    | 0          |
    |      | Param |        |        | toRow     | number    | 2          |
    |      | Param |        |        | toCol     | number    | 10         |
    | End  |       |        |        |           |           |            |
    

A `Range` map definition contains a number of required parameters:

* *fileName* The path to the file containing data. It may point to an .xls, .xlsx, or .csv file. If it is empty, the data is assumed to be stored in the same .rvl.xls spreadsheet as the script.
* *sheetName* The Excel Sheet name. May be empty for .csv spreadsheets.
* *fromRow* The 0-based index of the first row containing data. Usually, the first row is a header containing column names.
* *fromCol* The 0-based index of the first column containing data.
* *toRow* The final row index. If set to -1, the final row is detected automatically (as the last row containing data in the first column).
* *toCol* The final column index. If set to -1, the final column is detected automatically as the last column containing data in the first row.

There are also hidden parameters:

* *chooseRow* Selects rows with a matching value in the first column. It may be used to pre-select a specific row in a Map. For example, if a Map contains credentials and the first column is *User Name*, then `chooseRow=Some Name` limits the Map to that user.
* *hasColumnNames* A boolean value. By default, it is `true`, meaning the first row is assumed to contain column names. If it is `false`, the columns will have no names and can only be accessed by their 0-based index.

Data in a `Range` map is assumed to be similar to a [`Rows`](#rows-map) map but defined externally. Looping is done by row. A typical external file containing data may look like this:

=== "Screenshot"
    ![Range Data](./img/Maps_RangeData.png)
=== "Transcript"
    | A     | B         | C     | C      |
    | ----- | --------- | ----- | ------ |
    | Item1 | Operation | Item2 | Result |
    | 15    | +         | 13    | 28     |
    | 5     | *         | 6     | 30     |
    | 19    | -         | 3     | 16     |
    | 8     | /         | 4     | 2      |

### Database Map

A `Database` map contains no in-place data; instead, it defines a connection to a database result set.

=== "Screenshot"
    ![Database Map](./img/Maps_Database.png)
=== "Transcript"
    | Flow | Type     | Object | Action | ParamName        | ParamType | ParamValue             |
    | ---- | -------- | ------ | ------ | ---------------- | --------- | ---------------------- |
    | Map  | Database | MyMap1 |        | connectionString | string    | MYSQL1                 |
    |      | Param    |        |        | query            | string    | select * from contacts |
    | End  |          |        |        |                  |           |                        |
    

The `Database` map definition contains two parameters:

* *connectionString* ADO connection string.
* *query* Usually, this is the SQL query to execute.

The *connectionString* parameter allows access to a wide variety of different database sources. You can learn more here: [https://docs.microsoft.com/en-us/sql/ado/reference/ado-api/connectionstring-property-ado](https://docs.microsoft.com/en-us/sql/ado/reference/ado-api/connectionstring-property-ado).

Some examples of typical ADO connection string values:

#### Microsoft Access

    Provider=MSDASQL; Driver={Microsoft Access Driver (*.mdb)}; DBQ=C:\path\filename.mdb;

#### Microsoft Excel

    Provider=MSDASQL; Driver={Microsoft Excel Driver (*.xls)}; DBQ=C:\path\filename.xls;

#### Microsoft Text

    Provider=MSDASQL; Driver={Microsoft Text Driver (*.txt; *.csv)}; DBQ=C:\path\;

The example below refers to an ODBC Data Source defined as follows:

=== "Screenshot"
    ![Database ODBC data source](./img/Maps_DatabaseODBC.png)
=== "Transcript"
    Screenshot start Maps_DatabaseODBC.png
    
    [ODBC Data Source Administrator (32-bit)]
    
    - **User DSN** | **System DSN** | **File DSN** | **Drivers** | **Tracing** | **Connection Pooling** | **About**
    
      - **System Data Sources:**
        - Name: MYSQL1
        - Platform: 32-bit
        - Driver: MySQL ODBC 5.1 Driver
    
      - [Add...] [Remove] [Configure...]
    
      - An ODBC System data source stores information about how to connect to the indicated data provider. A System data source is visible to all users of this computer, including NT services.
    
      - [OK] [Cancel] [Apply] [Help]
    
    Screenshot end Maps_DatabaseODBC.png