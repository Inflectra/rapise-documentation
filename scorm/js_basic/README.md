<!-- 

author:   Alexey Grinevich
email:    alexey.grinevich@inflectra.com
version:  0.0.1
classroom: false

import: https://cdn.jsdelivr.net/gh/Inflectra/rapise-documentation/scorm/common/codingQuiz/README.md

mode: Textbook

@style

.lia-code > .lia-code-control > div:first-child > button:first-child {
  visibility: hidden;
}

.lia-code > .lia-code-control > div:first-child > button:first-child:after {
  content: 'Run';
  visibility: visible;
  border: 1px solid rgb(var(--color-highlight));
  border-radius: 0.8rem;
  padding: .5rem .6rem;
  margin-left: -2rem;
}

@end

@onload
window.checkArray=function(myArray,arrName,ref,console,send) {
    let res = false;

    if(myArray instanceof Array) {
        if(myArray.length!=ref.length) {
            console.error(`${arrName} length should be ${ref.length}, but it is ${myArray.length}`)
        }
        let ok = 0;
        for(let i=0;i<ref.length;i++) {
            if(myArray.length>i && myArray[i]!=ref[i]) {
               console.error(`${arrName}[${i}] should be:\n${ref[i]} (${typeof(ref[i])})\nbut it is\n${myArray[i]} (${typeof(myArray[i])})\n`);
            } else {
                ok++;
            }
        }
        res = ok==ref.length;
    } else {
        console.log(`${arrName} should be an array, but it is `+typeof(myArray));
    }
    return res;
};

window.checkVar=function(val,varName,ref,console,send) {
    if(val!=ref) {
        console.error(`${varName} should be:\n${ref} (${typeof ref})\nbut it is\n${val} (${typeof val})\n`);
        return false;
    }
    return true;
};


window.checkObj=function(val,varName,ref,console,send) {
    if(!val) {
        console.error(`Object is not initialized: ${varName}`)
        return false;
    }
    
    for(var f in ref)
    {
        if(val[f]!=ref[f]) {
            console.error(`${varName}["${f}"] should be:\n${ref[f]} (${typeof ref[f]})\nbut it is\n${val[f]} (${typeof val[f]})\n`);
            return false;
        }

    }
    return true;
};
@end

-->

# JavaScript Basics

Before diving into the specifics of JavaScript coding, let's first discuss its role and significance within the broader context of programming languages and environments.

> Some of the data in this tutorial is taken from [learn-js.org](https://www.learn-js.org/). The purpose of our tutorial is limited to basics, required to get minimal 101 knowledge of JavaScript. We limit the tasks to very basic version ES3 (1999) while most recent version is ES11 (2020). You may want to get deeper and learn more - just go ahead with [learn-js.org](https://www.learn-js.org/) - it is free.

## Is JavaScript for Browsers?

JavaScript was originally created for adding interactivity and dynamic behavior to **web browsers**. However, it has **evolved** significantly over the years.

JavaScript is not limited to just browsers anymore. With the introduction of environments like **Node.js**, it is now also widely used for **server-side development**. It can be used to build back-end services, develop desktop applications, and even program hardware.

Some tools, such as Inflectra [Rapise](https://www.inflectra.com/Rapise/) use JavaScript as a default programming language to implement advanced scenarios including desktop, mobile, API and web automation.

**Which of the following statements about JavaScript is correct?**

<!-- data-solution-button="off" -->
    [[ ]] JavaScript is used exclusively within web browsers.
    [[ ]] JavaScript can only modify web page content and cannot interact with server-side scripts.
    [[x]] JavaScript is a versatile language that can be used for server-side development, desktop applications, mobile apps, and IoT devices, not just web browsers.
    [[ ]] JavaScript was replaced by Node.js for server-side scripting and is no longer in use.

## Is JavaScript the same as Java?

No, JavaScript and **Java** are two distinct programming languages, each with its own design and purpose.

> Their similarities in name do not reflect their functionality—**Java** is to JavaScript what a car is to carpet: they are completely different despite the apparent similarity in their names.

**Is JavaScript the same as Java**?

<!-- data-solution-button="off" -->
    [[ ]] JavaScript and **Java** are the same.
    [[ ]] JavaScript is a nickname for **Java**.
    [[X]] JavaScript and **Java** are different programming languages.
    [[ ]] **Java** is a newer version of JavaScript.

## JavaScript vs JScript

JScript and JavaScript are often confused due to their similar names and shared roots, but there are some distinctions between the two.

> In essence, while JScript was Microsoft's version of the scripting language, conforming to ECMAScript to a large extent but with specific Microsoft-related features (ActiveX), JavaScript, in its pure form, refers to the language adhering to the ECMAScript standards, used in various environments beyond Windows-centric platforms.

Currently, JavaScript finds application in browsers and Node.js, whereas JScript is utilized within the Windows Scripting Host (WScript) due to its ActiveX support. ActiveX served as a beneficial platform for interacting with various Windows applications, such as Excel, Word, and others.

## Running Examples

This course contains samples, working examples and quizzes.

Sample is just a piece of JavaScript code showing something:

```javascript
...
var a = 3;
...
```

While working example is an interactive piece that you may execute by pressing the **Run** button under the snippet:

```javascript
3+2
```
<script>@input</script>

Finally, we have quizzes where you supposed to give an answer and then press `Check` button. For example, here the answer is already correct, just click `Check` to proceed:

``` javascript @codingQuiz(` `)
25
```

## Hello, World!

There is a tradition to start learning computer languages from implementing the same program: write `Hello, World!` to the output.

In this tutorial, we will only focus on learning the language itself, and therefore we will only use one function to print out our results called `console.log`.

Go ahead, and fix it so it outputs `Hello, World!` and then press **Check** to proceed.

``` javascript @codingQuiz2(`str!="Hello, World!"?"wrong":`,`console.log2=console.log;let str='';console.log=(t)=>{console.log2(t);str=t;};`)
console.log('Goodbye, World!')
```

## Strings

In JavaScript, both single (' ') and double (" ") quotes are used to denote strings. You can use either of them to define a string.

For instance:

```javascript
var singleQuotes = 'This is a string using single quotes.';
var doubleQuotes = "This is a string using double quotes.";
```
<script>@input
""</script>

Both `singleQuotes` and `doubleQuotes` in the example above represent strings. You can use either single or double quotes to create strings, but it's essential to maintain consistency within your codebase.

If you need to include a quote within a string, you can use the other type of quote or escape the inner quote using a backslash `\`.

For instance:

```javascript
var singleInsideDouble = "He said, 'Hello!'";
var doubleInsideSingle = 'She replied, "Hi!"';
var escapingQuotes = 'Escaping a quote: \'Single quotes\' or "Double quotes"';
```
<script>
eval(`@'input`)
""</script>


This way, you can include single quotes within double quotes and vice versa, or escape the quotes using the backslash to have them as part of the string.

## Typical Errors

Let's go over a number of typical errors that may cause you troubles while working with this course. Here they are:

Each open `(` should have corresponding closing `)`. Each opening `{` should have corresponding closing `}`.

Fix the code:

``` javascript @codingQuiz(` `)
console.log("Hallo Welt"
```

In a similar way each opening `"` should have matching closing `"`.

Fix the code:

``` javascript @codingQuiz2(`a!="Hi"?"wrong":`,`const a=`)
"Hi
```

Orphaned curly brace is always a problem.

Fix the code:

``` javascript @codingQuiz(`TotalAmount()`)
function TotalAmount()
}
```

We separate parameter names with comma `,`.

Fix the code:

``` javascript @codingQuiz(`Sum(3,3)!=6?"wrong":`)
function Sum(a b)
{
    return a+b;
}
```

We have three ways to declare a text constant, i.e. `"text"`, `'text'` and `\`text\``.

Fix the code:

``` javascript @codingQuiz(`str!="Some string"?"wrong":`)
var str = "Some string'
```

From the text editor's perspective our writing is all wrong. We use " for quotes while it is actually an Inch sign. Text processors fix it to real quote which is “. Common problem is a mess between " and “. 

Fix the code:

``` javascript @codingQuiz(`str!="Another string"?"wrong":`)
var str = “Another string”
```

What if we need to use a quoted string inside our string? You may use escaping or multiple quotes string.

Fix the code:

``` javascript @codingQuiz(`!window.checkVar(str,"str",'Some "quoted text" inside',console,send)?"wrong":`)
var str = "Some "quoted text" inside"
```

## Variables and Types

Like almost every dynamic language, JavaScript is a "duck-typed" language, and therefore every variable is defined using the `var` keyword, and can contain all types of variables. 

We can define several types of variables to use in our code:

```javascript
var myNumber = 3;                   // a number
var myString = "Hello, World!"      // a string
var myBoolean = true;               // a boolean
```
<script>@input
""</script>

A few notes about variable types in JavaScript:

* In JavaScript, the Number type can be both a floating point number (i.e. 3.5) and an integer (i.e. 3). 
* Boolean variables can only be equal to either `true` or `false`.

There are two more advanced types in JavaScript. An array, and an object. We will get to them in more advanced tutorials.

```javascript
var myArray = [];     // an array
var myObject = {};    // an object
```
<script>@input
""</script>

On top of that, there are two special types called `undefined` and `null`.

When a variable is used without first defining a value for it, it is equal to undefined. For example:

```javascript
var newVariable;
console.log(newVariable);
```
<script>@input
""</script>

However, the `null` value is a different type of value, and is used when a variable should be marked as empty.

```javascript
var emptyVariable = null;
console.log(emptyVariable);
```
<script>@input
""</script>

### Exercise

You must define the following variables:

1. A number called `myNumber` which contains the number `4`:

``` javascript @codingQuiz(`console.log("myNumber is equal to "+myNumber);!(myNumber==4)?"wrong":`)
var myNumber =
```

2. A string called `myString` which contains the sentence `Variables are great.`:

``` javascript @codingQuiz(`console.log("myString is equal to " + myString);!(myString=="Variables are great.")?"wrong":`)
var 
```

3. A boolean called `myBoolean` which contains the value `false`:

``` javascript @codingQuiz(`console.log("myBoolean is equal to " + myBoolean);!(myBoolean==false)?"wrong":`)
var
```

## Arrays

JavaScript can hold an array of variables in an Array object. In JavaScript, an array also functions as a list, a stack or a queue. 

To define an array, either use the brackets notation or the Array object notation:

```javascript
var myArray = [1, 2, 3];
var theSameArray = new Array(1, 2, 3);
```
<script>@input
"MyArray: "+myArray+"\ntheSameArray: "+theSameArray;
</script>

In JavaScript, typically, when you want to create an empty array, you can simply assign `[]` to a variable.

```javascript
var newArrayVar = [];
```
<script>@input
""
</script>


Addressing
----------

We can use the brackets `[]` operator to address a specific cell in our array. Addressing uses zero-based indices, so for example, in `myArray` the 2nd member can be addressed with index 1.

```javascript
var myArray = [1, 2, 3];
console.log(myArray[1]);      // prints out 2
```
<script>
@input
""
</script>

Arrays in JavaScript are sparse, meaning that we can also assign variables to random locations even though previous cells were undefined. For example:

```javascript
var myArray = []
myArray[3] = "hello"
console.log(myArray);
```
<script>
@input
""
</script>

### Exercise

You must define an array variable `myArray` with the following three entries:

1. A string which has the value of `"What is the meaning of life?"`
2. A number which has a value of `42`
3. A boolean which has a value of `true`

``` javascript @codingQuiz(`!window.checkArray(myArray,"myArray",["What is the meaning of life?", 42, true],console,send)?"try again":`)


```

## Manipulating Arrays

### Pushing and popping

Arrays can also function as a stack. The `push` and `pop` methods insert and remove variables from the end of an array.

For example, let's create an empty array and push a few variables.

``` javascript
var myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
```
<script>@input
window.myStack=myStack;
""</script>

After pushing variables to the array, we can then pop variables off from the end.

```javascript
console.log(myStack.pop());
console.log(myStack);
```
<script>let myStack=window.myStack||[1,2,3];
@input
""</script>

This prints out the variable we popped from the array, and what's left of the array:

```
    3           // the result from myStack.pop()
    [1,2]       // what myStack contains now
```

### Queues using shifting and unshifting

The `shift` and `unshift` methods are similar to `push` and `pop`, only they work from the beginning of the array. We can use the `push` and `shift` methods consecutively to utilize an array as a queue. For example:

``` javascript
var myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift());
```
<script>@input
""</script>

The `shift` keyword will remove the variables of the array in the exact order they were inserted in, that is why you see an output as:

```
    1
    2
    3
```

The `unshift` method is used to insert a variable at the beginning of an array. For example:

``` javascript
var myArray = [1,2,3];
myArray.unshift(0);
console.log(myArray);       // prints [0,1,2,3]

```
<script>@input
""</script>

### Splicing

Splicing arrays in JavaScript removes a certain part from an array to create a new array, made up from the part we took out. For example, if we wanted to remove the five numbers from the following array beginning from the 3rd index, we would do the following:

``` javascript
var myArray = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray.splice(3,5);

console.log(splice);  // prints [3,4,5,6,7]
console.log(myArray); // prints [0,1,2,8,9]
```
<script>@input
""
</script>

After splicing the array, it will only contain the part before and after the splicing. The splice is equal to all the variables between 3 and 7 (inclusive), and the remainder of the array, which contains all variables between 0 and 2 (inclusive), and 8 to 9 (inclusive).

### Exercise

In this exercise, you must manipulate the array called `myArray` and do the following:

1. Push the number 42 to the end of the array
2. Shift a variable from the beginning of the array

``` javascript @codingQuiz(`!window.checkArray(myArray,"myArray",["What is the meaning of life?", 42],console,send)?"try again":`)
var myArray = [true, "What is the meaning of life?"];
// TODO: write your code here:
// 1. Push the number 42 to the end of the array

// 2. Shift a variable from the beginning of the array


console.log(myArray[0]);
console.log(myArray[1]);
```

## Operators

Every variable in JavaScript is type casted automatically so any operator between two variables will always give some kind of result. 

### The addition operator

The `+` (addition) operator is used for both addition and concatenation of strings.

For example, adding two variables is easy:

```javascript
var a = 1;
var b = 2;
var c = a + b;     // c is now equal to 3
```
<script>@input
c</script>

Furthermore, the `+` operator serves to concatenate strings with other strings, strings with numbers, and numbers with strings:

```javascript
var name = "John";
console.log("Hello " + name + "!");
console.log("The meaning of life is " + 42);
console.log(42 + " is the meaning of life");
```
<script>@input
""</script>

### Mathematical operators

To subtract, multiply and divide two numbers, use the minus (`-`), asterisk (`*`) and slash (`/`) signs.

``` javascript
console.log(3 - 5);     // outputs -2
console.log(3 * 5);     // outputs 15
console.log(3 / 5);     // outputs 0.6
```
<script>@input
""</script>

### Advanced mathematical operators

JavaScript supports the modulus operator (`%`) which calculates the remainder of a division operation.

```javascript
    console.log(5 % 3);     // outputs 2
```
<script>@input
""</script>

JavaScript also supports combined assignment and operation operators. So, instead of typing `myNumber = myNumber / 2`, you can type `myNumber /= 2`. Here is a list of all these operators:

| Operator | Example | Meaning |
| ---------|---------|---------|
| `/=` | `a/=3` | `a = a/3` |
| `*=` | `a*=2` | `a = a*2` |
| `-=` | `a-=5` | `a = a-5` |
| `+=` | `a+=7` | `a = a+7` |
| `%=` | `a%=4` | `a = a%4` |

```javascript
var myNumber = 10;
myNumber -= 4;        // myNumber = myNumber - 4
console.log(myNumber);// prints 6
```
<script>@input
""</script>

### `Math`

JavaScript also has a `Math` module which contains more advanced functions:

* `Math.abs` calculates the absolute value of a number
* `Math.exp` calculates __e__ to the power of a number
* `Math.pow(x,y)` calculates the result of __x__ to the power of __y__
* `Math.floor` removes the fraction part from a number
* `Math.random()` will give a random number `x` where `0<=x<1`
* ...

> **Math** module contains many more mathematical functions. You may see them all in the official [manual](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).

**Example**

`Math.abs` converts any negative number to positive:

```javascript
Math.abs(-3)
```
<script>@input</script>

### Exercise

In this exercise, you do the following:

1. Connect the `firstName` and `lastName` to construct the variable `fullName`, but with a space (`" "`) in between the first and last name.
2. Multiply the variable `myNumber` by 2 and put the result in `meaningOfLife`.

``` javascript @codingQuiz(`!window.checkVar(fullName,"fullName","John Smith",console,send)||!window.checkVar(meaningOfLife,"meaningOfLife",42,console,send)?"try again":`)
var firstName = "John";
var lastName = "Smith";
var myNumber = 21;

// TODO: change the following code
var fullName = null;
var meaningOfLife = null;
```

## Conditions

### The `if` statement

The `if` statement allows us to check if an expression is equal to `true` or `false`, and execute different code according to the result.

For example, if we want to ask the user whether his name is "John", we can use the `confirm` function.

```javascript
if (confirm("Are you John Smith?"))
{
    console.log("Hello John, how are you?");
} else {
    console.log("Then what is your name?");
}
```
<script>@input
""</script>

It is also possible to omit the `else` keyword if we only want to execute a block of code only if a certain expression is true.

To evaluate whether two variables are equal, the `==` operator is used.

For example:

```javascript
var myNumber = 42;
if (myNumber == 42)
{
    console.log("The number is correct.");
}
```
<script>@input
""</script>

Comparison operators can also be used to evaluate expressions. For example:

``` javascript
var foo = 1;
var bar = 2;

if (foo < bar)
{
    console.log("foo is smaller than bar.");
}
```
<script>@input
""</script>

Two or more expressions can be evaluated together using logical operators to check if two expressions evaluate to `true` together, or at least one of them. To check if two expressions both evaluate to `true`, use the AND operator `&&`. To check if at least one of the expressions evaluates to `true`, use the OR operator `||`.

```javascript
var foo = 1;
var bar = 2;
var moo = 3;

if (foo < bar && moo > bar)
{
    console.log("foo is smaller than bar AND moo is larger than bar.");
}

if (foo < bar || moo < bar)
{
    console.log("foo is smaller than bar OR moo is smaller than bar.");
}
```
<script>@input
""</script>

The NOT operator `!` can also be used likewise:

```javascript
var notTrue = false;
if (!notTrue)
{
    console.log("not not true is true!");
}
```
<script>@input
""</script>

### The `switch` statement

The `switch` statement is similar to the `switch` statement from the C programming language, but also supports strings. The `switch` statement is used to select between more than two different options, and to run the same code for more than one option. For example:

```javascript
var rank = "Commander";
switch(rank)
{
    case "Private":
    case "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}

```
<script>@input
""</script>

In this example, "Private" an "Sergeant" both trigger the first sentence, "Commander" triggers the second sentence and "Captain" triggers the third. If an unknown rank was evaulated, the `default` keyword defines the action for this case (optional). We must use the `break` statement between every code block to avoid the `switch` from executing the next code block.

Using the `switch` statement in general is not recommended, because forgetting the `break` keyword causes very confusing results.

### Exercise

In this exercise, you must construct an `if` inside the `checkNumber` function statement that checks if the number `myNumber` is equal to 42. If that is the case, the function must print out using `console.log` the word `correct`. If `myNumber` is not equal to 42, the function must print out using `console.log` the word `incorrect`.

``` javascript @codingQuiz2(`const exp="incorrect"+nl+"incorrect"+nl+"correct"+nl;str!=exp?(console.error("expected:"),console.debug(exp),""):`,`const nl = String.fromCharCode(10);let str="";console.log2=console.log;console.log=(t)=>{str+=t+nl;console.log2(t)}; `)
function checkNumber(myNumber)
{
    // TODO: write your code here

}

checkNumber(3);
checkNumber(7);
checkNumber(42);

```

## Loops

### The `for` statement

JavaScript has two methods for running the same code several times. It is mainly used for iterating over arrays or objects. Let's see an example:

```javascript
var i;
for (i = 0; i < 3; i = i + 1)
{
    console.log(i);
}
```
<script>@input
""
</script>

The `for` statement in JavaScript has the same syntax as in Java and C. It has three parts:

1. __Initialization__ - Initializes the iterator variable `i`. In this example, we initialize `i` to 0.
2. __Condition__ - As long as the condition is met, the loop continues to execute. In this example, we check that `i` is less than 3.
3. __Increment__ - A directive which increments the iterator. In our case, we increment it by 1 on every loop.

We can also write a shorter notation for the statement by inserting the variable definition inside the `for` loop and incrementing using the `++` operator.

```javascript
for (var i = 0; i < 3; i++)
{
    console.log(i);
}
```
<script>@input
""
</script>

To iterate over an array and print out all of its members, we usually use the `for` statement. Here's an example:

```javascript
var myArray = ["A", "B", "C"];
for (var i = 0; i < myArray.length; i++)
{
    console.log("The member of myArray at index " + i + " is " + myArray[i]);
}
```
<script>@input
""
</script>

Notice that we used the `length` property of an array, which returns the number of members in the array, so we know when to stop iterating.

### The `while` statement

The `while` statement is a more simple version of the `for` statement which checks if an expression evaluates to `true` and runs as long as it stays `true`.

For example:

```javascript
var i = 99;
while (i > 0)
{
    console.log(i + " bottles of beer on the wall");
    i -= 1;
}
```
<script>@input
""
</script>

### `break` and `continue` statements

The `break` statement allows to stop the execution of a loop. For example, we can create a loop that loops forever using `while(true)` and use the `break` statement to break inside the loop instead by checking that a certain condition was met.

```javascript
var i = 99;
while (true)
{
    console.log(i + " bottles of beer on the wall");
    i -= 1;
    if (i == 0)
    {
        break;
    }
}
```
<script>@input
""
</script>

The `continue` statement skips the rest of the loop and jumps back to the beginning of the loop. For example, if we would want to print only odd numbers using a `for` statement, we can do the following:

``` javascript
for (var i = 0; i < 100; i++)
{
    // check that the number is even
    if (i % 2 == 0)
    {
            continue;
    }
    // if we got here, then i is odd.
    console.log(i + " is an odd number.");
}
```
<script>@input
""
</script>

### Exercise

In this exercise, you must write a `for` loop that iterates on the `myArray` variable and prints out all of its members.

``` javascript @codingQuiz2(`const exp="What is the meaning of life?"+nl+"The meaning of life is"+nl+"42"+nl;str!=exp?(console.error("expected:"),console.debug(exp),""):`,`const nl = String.fromCharCode(10);let str="";console.log2=console.log;console.log=(t)=>{str+=t+nl;console.log2(t)};`)
var myArray = ["What is the meaning of life?", "The meaning of life is", 42];

// TODO: modify this code
for ()
{
}
```

## Functions

Functions are code blocks that can have arguments, and function have their own scope. In JavaScript, functions are a very important feature of the program, and especially the fact that they can access local variables of a parent function (this is called a closure). 

There are two ways to define functions in JavaScript - named functions and anonymous functions.

To define a named function, we use the `function` statement as follows:

``` javascript
function greet(name)
{
    return "Hello " + name + "!";
}

console.log(greet("Eric"));      // prints out Hello Eric!
```
<script>@input
""</script>

In this function, the `name` argument to the `greet` function is used inside the function to construct a new string and return it using the `return` statement.

To define an anonymous function, we can alternatively use the following syntax:

``` javascript
var greet = function(name)
{
    return "Hello " + name + "!";
}

console.log(greet("Eric"));      // prints out Hello Eric!
```
<script>@input
""
</script>

### Exercise

Define a function called `multiplyFive` which accepts a number and returns that number multiplied by 5.

``` javascript @codingQuiz(`multiplyFive(7)!=35?"Wrong":`)
// TODO: define the function multiplyFive here

console.log(multiplyFive(3));
console.log(multiplyFive(4));
console.log(multiplyFive(5));
console.log(multiplyFive(6));
```

## Objects

JavaScript is a functional language, and for object oriented programming it uses both objects and functions, but objects are usually used as a data structure, similar to a dictionary in Python or a map in Java. In this tutorial, we will learn how to use objects as a data structure. The advanced tutorials explain more about object oriented JavaScript.

To initialize an object, use curly braces:

``` javascript
var emptyObject = {};
var personObject = {
    firstName : "John",
    lastName : "Smith"
}
```
<script>@input
""</script>

### Member addressing

Members of objects can be addressed using the brackets operator `[]`, very much like arrays, but just like many
other object oriented languages, the period `.` operator can also be used. They are very similar, except for
the fact that brackets return a member by using a string, in contrast to the period operator,
which requires the member to be a simple word (the word should not contain spaces, 
start with a number or use illegal characters).

For example, we can continue to fill the person object with more details:

```javascript
var personObject = {
    firstName : "John",
    lastName : "Smith"
}
personObject.age = 23;
personObject["salary"] = 14000;
```
<script>@input
""</script>

### Iteration

Iterating over members of a dictionary is not a trivial task, since iterating over objects can also yield members who don't actually belong to an object. Therefore, we must use the `hasOwnProperty` method to check that the member in fact belongs to the object.

``` javascript
for (var member in personObject)
{
    console.log("the member " + member + " of personObject is " + personObject[member])
}
```
<script>@input
""</script>

Note that methods of objects in JavaScript have a fixed order, like arrays.

### Exercise

You must define an object called `person` with the following members:

1. The member `firstName` of the person is "Jane"
2. The member `lastName` of the person is "Smith"
3. The member `age` of the person is 19
4. The member `employed` of the person is `true`

``` javascript @codingQuiz(`!window.checkObj(person,"person",{firstName:"Jane",lastName:"Smith",age:19,employed:true},console,send)?"wrong":`)
// TODO: change this code
var person;

```

## More Typical Errors

Let's check some more typical errors similar to what we did last time.

Remember, the format of the `for` loop is 

`for(<initial value>;<condition>;<increment>){<loop body>}`

Fix the code:

``` javascript @codingQuiz(`result!=3?"wrong":`)
var result = 0;
for(var a=0;a<3,a++) {
    result = result + a;
}
```

Well, now your goal is to fix a couple of malformed objects. Only one character is missing:

``` javascript @codingQuiz(` `)
var animal = {
    type: "Dog"
    age: 5
}
```

Now another typical problem. Again, just one character needs to be modified:

``` javascript @codingQuiz(` `)
var animal = {
    type= "Dog",
    age: 5
}
```

## What Comes Next?

This course concludes at this juncture, but it's important to note that we've only scratched the surface of JavaScript's capabilities. Our focus has primarily been on features available as of 1999.

JavaScript is a dynamic and continually evolving language, continually acquiring new features and applications. There are numerous fantastic features to explore, including callbacks, `class`es, `let` and `const` declarations, `for...of` loops, spread operators, arrow functions, tag templates, and much more.

The JavaScript covered in this course provides a solid foundation for real-world testing scenarios. We believe that simplicity and clarity in language are crucial for effective testing, as tests should be straightforward and easy to comprehend and maintain.

In [Rapise](https://www.inflectra.com/Rapise), you have the flexibility to use both older and the latest versions of JavaScript. Rapise itself is built using a basic language to ensure backward compatibility and straightforward usage.

For those seeking more comprehensive courses, both free and paid options are available. One such resource is [lear-js.org](https://learn-js.org), which served as the foundation for this course.
