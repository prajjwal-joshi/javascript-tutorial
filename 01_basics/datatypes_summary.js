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


//stack (Primitive), Heap (Non-Primitive)
 
let myYoutubeName = "prajjwaljoshi"
let anothername = myYoutubeName //copy is given
anothername = "chaiaurjs"

console.log(myYoutubeName);
console.log(anothername);

let user1 = {
    email: "user@google.com",
    upi: "user@bpl"
}

let user2 = user1; //reference is given
user2.email = "prajjwal@google.com"
console.log(user1.email);
console.log(user2.email);