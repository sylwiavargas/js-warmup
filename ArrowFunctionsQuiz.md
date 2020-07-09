## Transforming functions into arrow functions: practice quiz

As a follow up of [my previous blog post on arrow functions](https://dev.to/sylwiavargas/arrow-functions-a-walkthrough-and-gotchas-4p4p), I thought I would create a little playground for you all to practice!

## How does it work? 
1. Open the browser console (on Chrome/Mac `option`+`command`+`i` but you can also right click and use "inspect" option).
2. Copy the initial function and see what it returns.
3. Transform it into an arrow function and run it in the console.
4. Check the answer to your question in the hidden field.

***

## [1] Two arguments

Transform this function:
```js
function sum(num1, num2){
    return num1 + num2
}

sum(2,2)
sum(4,5)
```

<details><summary>ANSWER - CLICK ME!</summary>

This is a possible answer:

```js
const sum = (num1, num2) => num1+num2
```
You need parenthesis around the arguments because there are more than one.
You don't need curly brackets or the `return` keyword because arrow functions give you an implicit return. 

However, this is also okay:
```js
const sum = (num1, num2) => {return num1+num2}
```

You can also use `let` but in that case your variable could be redefined later (which may cause bugs).
</details>

***

## [2] One argument

Transform this function that tells you how long a string is:

```js
function stringLength(str){
    console.log(`the length of "${str}" is:`, str.length)
}

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

stringLength(longestCityNameInTheWorld)
```

<details><summary>ANSWER - CLICK ME!</summary>

This is a possible answer:

```js
const stringLength = str => console.log(`the length of "${str}" is:`, str.length)
```

Here you don't need parenthesis aroung the argument because it's just one (but you could have the parenthesis, no difference). 
You don't need curly brackets because it's just one line.
</details>

***

## [3] One argument, pt.2

Let's change the previous function a bit to include a variable and a return statement:

```js
function stringLength(str){
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

stringLength("willynilly")
```

<details><summary>ANSWER - CLICK ME!</summary>

This is a possible answer:

```js
const stringLength = str => {
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

stringLength("willynilly")
```

As you see, here you need an explicit return statement and curly brackets because it is a multiline function body.
</details>


***

## [4] One argument

Transform this function that selects a random element from the array and concatenates it to your name:

```js
let alerts = ["Hey, you are awesome", "You are so wonderful", "You are so huggable", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

function showAlert(name){    
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}

showAlert("you ball of fluff")
```

<details><summary>ANSWER - CLICK ME!</summary>

This is a possible answer:

```js
const showAlert = (name) => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
```

or:
```js
const showAlert = (name) => {return alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)}
```
</details>

***

## [5] Nested functions

Transform this function that rotates elements in your browser + remember about transforming also the traditional function in the `.map`:

```js
function oneTwoThreeRotate(){
    Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(tag){
        tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
    })
}

oneTwoThreeRotate()
```

<details><summary>ANSWER - CLICK ME!</summary>

This is a possible answer:

```js
const oneTwoThreeRotate = () => {
    Array.prototype.slice.call( document.querySelectorAll('div,p,span,img,a,body')).map(tag => tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)'
    )
}

oneTwoThreeRotate()
```

Here we need the curly brackets because we have a multiline method but we don't need a return statement because we are not returning anything.
</details>
