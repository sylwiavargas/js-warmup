# JS Warm-up

This repository contains notes from my intro to JS lecture for students with a Ruby background. The warm-up consists of a few themathic sessions where I explain key differences between Ruby and JS, as well as general JS behavior. Last session is devoted to JS gotchas. 

---
**Table of contents**
- [0: Intro to JS ✨](#0-intro-to-js)
    * [video](https://wework.zoom.com/rec/share/-eNRBOHh20VOT8_JzHP4ZbUPJKbveaa80ClI_aYOnR5zgPXK-h7E6DB3TMbaWggz?startTime=1587153698000)
    * [code](https://github.com/sylwiavargas/js-warmup/tree/master/0)
- [Terminology 📚](#terminology)

---
## Intro to JS
- [video](https://wework.zoom.com/rec/share/-eNRBOHh20VOT8_JzHP4ZbUPJKbveaa80ClI_aYOnR5zgPXK-h7E6DB3TMbaWggz?startTime=1587153698000)
- [code](https://github.com/sylwiavargas/js-warmup/tree/master/0)

### Leading questions:
- What is JavaScript?
- JavaScript syntax:
    - functions
    - variables
    - objects
- What does it mean that JS is has first-class functions? 
- Things you can do with Ruby that you can't do with JS:
    - Ruby has a million ways for the same goal (length, count, size)
    - Easy string manipulation (replacing a letter, reversing a string)
    - One variable to cover it all
    - Pushing with a shovel 
    - Easy 50.times do
- Things you can do with JS you can't do with Ruby:
    - Increment or decriment easily: ++ or --
    - More specific comparisons
    - 3 main scope variables instead of just one
    - Sign coercion
    - Hoist functions
- Other common hiccups:
    - remember to return in functions!
    - falsey values in JS 
- What is:
    - function declaration?
    - function invocation?
    - event listener?
    - anonymous function?
    - a callback?

---
## Terminology

**EVENT LISTENER**:
>A function that "listens" to an event (e.g. a click, a keyboard typing) on the website.

**FUNCTIONS**:
- **anonymous function (expression)**:
>Anonymous function is a function declared without a name. It is a function expression and as such, it is not hoisted. In order for the anonymous function to work, it needs to be passed in as a callback, saved to a variable or be self-invoked.

- **callback**:
>A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. -- [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

- **first-class functions**:
>A programming language is said to have first-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be **passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable**. -- [MDN](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

- **function invocation**:
>The act of calling a function. 

- **function declaration**:
>A function declared with a name and the keyword `function`.

**HOISTING**:
>JS reads everything twice. On the first run, it saves function declarations (not: expressions) into memory. Because of that, you can use a function before you declared it. 
