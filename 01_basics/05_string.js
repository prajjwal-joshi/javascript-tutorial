const name = "prajjwal"
const repoCount = 10

// console.log(name + repoCount + " Value");

//string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('prajjwal-joshi-coder')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('jj'));

const newString = gameName.substring(1, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = "   prajjwal  "
console.log(newString1);
console.log(newString1.trim());

const url = "https://prajjwal.com/prajjwal%20joshi"
console.log(url.replace('%20', '-'));

console.log(url.includes('prajjwal'));

console.log(gameName.split('-'));