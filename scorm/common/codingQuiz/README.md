<!--

link: codingQuiz.css

@codingQuiz2: @codingQuiz_(@uid,`@0`,`@1`,```@2```)

@codingQuiz: @codingQuiz_(@uid,`@0`,` `,```@1```)

@codingQuiz_
<div class="quiz-hide" id="hidden-quiz-@0">

``` javascript
@3
```
<script>
if(!window.results) {
    window.results = {}
}

try {
    window.results["@0"] = false
    const escit=(str)=>str.replace(/\\\\'/ig,"\\'").replace(/\\\\"/ig,'\\"');

    let pref = escit(`@2`); 
    let postf = escit(`@1`);
    let inp = escit(`@input`);

    window.results["@0"] = eval(`${pref}${inp}\n${postf}\n"correct"`)
    if(window.results["@0"]!==true&&window.results["@0"]!="OKcorrect") {
        console.debug(window.results["@0"])
    }
    let btn = document.querySelector('#hidden-quiz-@0 > div:nth-of-type(2) > .lia-quiz-generic > div:nth-of-type(2) > button:first-child');
    btn.click()
} catch(e) {
    console.error(e.message)
}
"LIA: stop"
</script>

<!-- data-solution-button="off" -->
[[!]]
<script>
window.results["@0"] == "correct" || window.results["@0"] == "OKcorrect" || window.results["@0"] == true
</script>

</div>

@end

-->

# Code-Quiz

Go to [Macro](#macro) section.

JavaScript self-study coding.

## Macro

Each open `(` should have corresponding closing `)`. Each opening `{` should have corresponding closing `}`. Fix the code:

``` javascript @codingQuiz(` `)
console.log("Hallo Welt"
```

In a similar way each opening `"` should have matching closing `"`:

``` javascript @codingQuiz2(`a=='Hi'`,`const a=`)
"Hi
```

Orphaned curly brace is always a problem. Fix the code:

``` javascript @codingQuiz(`TotalAmount()`)
function TotalAmount()
}
```

We separate parameter names with comma `,`. Fix the code:

``` javascript @codingQuiz(`Sum(3,3)!=6?"wrong":`)
function Sum(a b)
{
    return a+b;
}
```

`for` loop format is `for(<initial value>;<condition>;<increment>){<loop body>}`.

Fix the code:

``` javascript @codingQuiz(`result!=3?"wrong":`)
var result = 0;
for(var a=0;a<3,a++) {
    result = result + a;
}
```

We have three ways to declare a text constant, i.e. `"text"`, `'text'` and `` `text` ``. Fix the code:

``` javascript @codingQuiz(`str!="Some string"?"wrong":`)
var str = "Some string'
```

From the text editor's perspective our writing is all wrong. We use " for quotes while it is actually an Inch sign. Text processors fix it to real quote which is “. Common problem is to mess between " and “. Fix the code:

``` javascript @codingQuiz(`str!="Another string"?"wrong":`)
var str = “Another string”
```

What if we need to use a quoted string inside our string? You may use escaping or multiple quotes string:

``` javascript @codingQuiz(`str!="Some \"quoted text\" inside"?"wrong":`)
var str = "Some "quoted text" inside"
```

### Exercise

In this exercise, you must write a `for` loop that iterates on the `myArray` variable and prints out all of its members.

``` javascript @codingQuiz2(`const exp="What is the meaning of life?"+nl+"The meaning of life is"+nl+"42"+nl;str!=exp?(console.error("expected:"),console.debug(exp),""):"OK"+`,`const nl = String.fromCharCode(10);let str="";console.log2=console.log;console.log=(t)=>{str+=t+nl;console.log2(t)};`)
var myArray = ["What is the meaning of life?", "The meaning of life is", 42];

// TODO: modify this code
for (var i=0;i<myArray.length;i++)
{
    console.log(myArray[i]);
}
```
