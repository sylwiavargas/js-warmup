//////////////// VARIABLES //////////////// 
//////////  IN JAVASCRIPT YOU HAVE THREE LOCAL VARIABLES:
// "let" allows you to change the value or datatype of the variable
// let language = "JS"
// language = "Ruby"


//  const does not allow you to reassign the variable (but you can push elements inside an array or object)
// const framework = "React"
// framework = "Ruby"
// const array = [1, 2, 3]
// array.push(4)

// do not use var because its scope can mess up your code; it is now considered outdated and exists only not to break the internet that uses it;
// // var doNotUseItEver = "don't use it"

//////////////// OBJECTS //////////////// 
// In JS almost everything is an object -> an array is an object, and so is a function. However, the key-value pair objects as you know it are almost the same as in Ruby:
// let object = {
//     a: "a",
//     b: "b"
// }

//////////////// FUNCTIONS //////////////// 
/////// this is a function declaration:

// function helloWorld() {
//   return console.log("hello")
// }
// helloWorld()

////// this is an anonymous function saved to a variable (also known as function expression)
// let helloWorld = function(){
//     console.log("hello from function expression")
// }
// helloWorld()

////// in JS you can invoke a function before it's declared because JS reads everything twice:
// helloWorld()

// function helloWorld() {
//         return console.log("hello")
// }

///////////////////// REMEMBER TO RETURN -- IN JS THERE'S NO EXPLICIT RETURN ////////////
// function sum(num1, num2) {
//     return num1 + num2
// }

// console.log(sum(1,2));