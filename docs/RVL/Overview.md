# Why RVL?

RVL stands for **Rapise Visual Language**. It is inspired by the well-known software testing methodologies *Keyword Driven Testing* and *Data Driven Testing*.

This section contains a review of current approaches and concepts to highlight the ideas behind RVL's design. You don't need to read this section if you want to learn RVL. However, you may need it if you want to understand how it compares to other approaches and why we believe it is not just another approach but the way forward to reduce the struggle of building real-world UI automation.

### Keyword Driven Testing

[Keyword Driven Testing](https://en.wikipedia.org/wiki/Keyword-driven_testing) separates the documentation of test cases—including the data to use—from the prescription of how the test cases are executed. As a result, it separates the test creation process into two distinct stages: a design and development stage, and an execution stage.

**A**         |    **B**       |      **C**        |     **D**
--------------|----------------|-------------------|--------------
 .            | *First Name*   | *Last Name*       | *Age*
Enter Patient | John           | Smith             | 45
Enter Patient | Sarah          | Connor            | 32

*Keyword Driven Testing*: Column *A* contains a *Keyword*; columns *B*, *C*, and *D* provide its parameters.


### Data Driven Testing

[Data Driven Testing](https://en.wikipedia.org/wiki/Data-driven_testing) is the creation of test scripts that run together with their related data sets in a framework. The framework provides reusable test logic to reduce maintenance and improve test coverage. Input and result (test criteria) data values can be stored in one or more central data sources or databases; the actual format and organization can be implementation-specific.

**A**         |    **B**       |      **C**
--------------|----------------|-------------------
*First Name*  | *Last Name*       | *Age*
John          | Smith             | 45
Sarah         | Connor            | 32

*Data Driven Testing*: Test input and expected output are stored in data sources.

### Gherkin / Cucumber
There are known approaches intended to make scripting closer to spoken languages.

This is a very wise approach that improves test readability. The test case is described in [Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin)—a business-readable, domain-specific language. It describes behavior without detailing how that behavior is implemented.

The essential part of this framework is the implementation of Given-When-Then steps, which must be done using a common programming language. This is where scripting skills are still required.

## Why RVL?
Initially, Rapise had everything needed to build *Data Driven* and *Keyword Driven* test frameworks, even without RVL.

It is possible to define *scenarios* or *keywords*, connect to a *Spreadsheet* or *Database*, and build the test set.

Framework-based approaches require you to split data from test logic and maintain them separately. So:
* When the *AUT* or *SUT* changes (e.g., a new theme, widget, or layout), the test logic is updated, and the data stays the same.
* When test scenarios are enriched or updated, the test logic is kept intact, and only the data sheets are updated.

In reality, this approach presents some challenges that are common to all the test frameworks mentioned here.

1. Designing test scripts requires scripting and programming skills. This person is likely to be a programmer.
2. Designing good test data requires knowledge of the target domain. For example, if your application is for a blood bank, you should have some medical skills. If it is a device control app, you should have engineering knowledge of the device's physical limitations.

So, in an ideal world, two people work as a team: a UI automation scripting expert and a target domain specialist.

In reality, due to real-life limitations, it is common for one person to handle all scripting and test data. This person is either a programmer who becomes familiar with the target AUT's domain or an analyst who has some scripting skills.

### Reasons for the Struggle
There are several reasons that steepen the learning curve and hinder adoption.

#### Syntactic Sugar
We found one reason why people get stuck while trying to implement a test case.

Most programming languages, including *JavaScript*, were designed by people with mathematical backgrounds. So, this statement appears clear and simple to a programmer:

```javascript
Deposit('John', 'O\'Connor', 17.99);
```
A programmer easily reads this as:

    Deposit $17.99 to John O'Connor

So, what is the difference between these notations? We found that the first and most important difficulty lies in so-called *syntactic sugar*. Symbols like `' " ; , . ( ) [ ] { } & $ % # @` have meaning for the language's notation but are not important for understanding the core logic.

This is true even for programmers. When switching between similar-looking languages, subtle differences can easily cause frustration. For example, the same construct:
```
$a = "Number " + 1;
```
means text concatenation in *JavaScript*, but it is a mathematical operation in *PHP*.

A comparison like:
```
if( value == "OK" )
```

is valid in the *JavaScript* or *C#* world but leads to `false` results in *Java*.

So, even if someone has programming skills, switching from one language to another is still a challenge and can introduce potential issues.

### Data Tables
With the Keyword-Driven and Data-Driven approaches, we get a table that represents a sequence, such as a sequence of patients to process or a sequence of user logins.

And sometimes, we feel the lack of common debugging facilities:
- running a keyword for only one line,
- starting from a specific row,
- or stopping before processing a specific line.

So, we get to a point where the table should be part of the script rather than just an external data source.

### State of the Art
RVL reflects a common trend in programming languages where computational power and flexibility are sacrificed for clarity and readability.

A language is sometimes reduced to a reasonable subset for the sake of a more concise and focused presentation. Here are a couple of examples.


[Jade](http://learnjade.com/), a template engine, simplifies writing HTML pages by removing syntactic sugar (e.g., `< > / %`), so the following HTML code:
```
  <body>
    <p class="greeting">Hello, World!</p>
  </body>
```
is reduced to a more textual view:
```
    body
        p.greeting Hello, World!
```

The [Go](https://golang.org/) language is promoted as: *Go is expressive, concise, clean, and efficient.* In fact, its authors sacrificed many advanced features of common programming languages (e.g., classes, inheritance, and templates) for greater clarity. This is extremely important because sophisticated features can produce sophisticated problems that are hard to nail down. When you deal with high-load distributed systems, a minor gain from using an unclear feature may lead to a major, unpredictable loss.


## RVL Concepts
RVL's goal is to minimize the struggle.

1. We assume that a user should not have to worry much about syntactic sugar and syntax rules. This means that we must avoid braces, quotes, and special symbols like `' " ; , . ( ) [ ] { } & $ % # @`, making it possible to maintain the script without them.
2. We want scripts to be close to the *Keyword-Driven* and *Data-Driven* testing concepts. Therefore, test data and test results should be represented as data tables. This reduces the struggle of attaching a data feed to a test set.
3. We still want to have a solid language. We seek a balance between clarity and the power of the language. So, we want the script to be implemented in the same language. Keywords, scenarios, and data feeds should all be handled in the same way. This means that only one RVL skill is required for everything.
4. In many cases, grids or tables are used to represent test data. Therefore, we want the script itself to be a grid. As a result, all its parts, including data tables, are debuggable as part of one solid script.
5. When we think about working with tabular data, the most common formats that come to mind are XLS, XLSX, and CSV. These formats are supported by powerful tools that make it easier to prepare data to feed into a test set. Therefore, RVL is itself an `.xls` spreadsheet, so its logic is expressed right there.
6. Even with a spreadsheet, the question of what can be entered into a particular cell arises. With RVL, we provide an editor where you work from left to right, and each cell presents a limited number of options. So, if you don't know the language, it will guide you.