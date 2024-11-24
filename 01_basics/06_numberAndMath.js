const score = 300
// console.log(score);

const num = new Number(400);
// console.log(num);

// console.log(num.toString().length);
// console.log(num.toFixed(2)); // to set the precision in value to two decimals

const otherNumber = 121.234
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++ Maths ++++++++++++++++++
// let arr = (1, 4, 3, 6);
// console.log(Math);
// console.log(Math.max(arr));
// console.log(Math.round(7.4));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.5));


console.log(Math.random()*10 + 1); //random generates float values from 0 to 1 (not included)

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min));