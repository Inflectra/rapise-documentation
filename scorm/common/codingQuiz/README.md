<!--

@style
.quiz-hide > div:nth-of-type(2) > .lia-quiz-generic > div:nth-of-type(2) > button:first-child {
  display: none;
}

.quiz-hide > .lia-code > .lia-code-control > div:first-child > button:first-child {
  visibility: hidden;
}

.quiz-hide > .lia-code > .lia-code-control > div:first-child > button:first-child:after {
  content: 'Check';
  visibility: visible;
  border: 1px solid rgb(var(--color-highlight));
  border-radius: 0.8rem;
  padding: .5rem .6rem;
  margin-left: -2rem;
}

@end


@codingQuiz: @codingQuiz_(@uid,`@0`,```@1```)


@codingQuiz_
<div class="quiz-hide" id="hidden-quiz-@0">

``` javascript
@2
```
<script>
if(!window.results) {
    window.results = {}
}

try {
    window.results["@0"] = false
    window.results["@0"] = eval(`@input\n@1\n"correct"`)
    console.log(window.results["@0"])
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
window.results["@0"] == "correct"
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
