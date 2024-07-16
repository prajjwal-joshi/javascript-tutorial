//js is dynamically typed. Variable types are determined at runtime, no need to explitly declare the type of variable before using it.
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 394871023947024n

// console.log(id === anotherId)

// Reference ( Non Primitive)
//Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof id)