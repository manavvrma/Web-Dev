console.log("Hello World");

fullName = "John Doe";
price = "1000";
x = null;
y = undefined;
isFollower = false;
console.log(fullName);

// JavaScript is dynamically types language
fullName = 35;
console.log(fullName);

// js is casesensitive
fullname = "John Doe";
fullNamE = "John";
console.log(fullname);
console.log(fullNamE);

// var(global scope, can be redeclared and upadted) not used now
// let(block scope, cannot be redeclared but can be upadted)
// const(block scope, cannot be redeclared and updated)
let fulllname = "Manav Verma";
console.log(fulllname);

let age = 24;
let priceNew = 999;
console.log(age);

// if variable declared but not assigned then it will be undefined
let a;
console.log(a);

// const variable should always be assigned
const b = 10;
console.log(b);

// data types in js
// primitive(number, string , boolean, null, undefined)
// non primitive(objects(collection of variables) used as key value pairs)
// use typeof() to check the data type of variable
// typeof(null) -> object

const students = {
  fullName: "John D",
  age: 21,
  cgpa: 8.2,
  isPass: true,
};

// accessing object properties
// console.log(students["age"]);
// console.log(students.age);

students["age"] = students["age"] + 1;
console.log(students.age);

// create a const for a picture

const product = {
  name: "Black pen",
  rating: 4,
  offer: 5,
  price: 10,
  isDeal: true,
};

// Arithmetic operators
// let x1 = 5;
// let y1 = 6;

// console.log("a = ", x1, " b = ", y1);
// console.log("a + b = ", x1 + y1);
// console.log("a - b = ", x1 - y1);
// console.log("a * b = ", x1 * y1);
// console.log("a / b = ", x1 / y1);
// console.log("a % b = ", x1 % y1);
// console.log("a ** b = ", x1 ** y1);

// unary operaters(++, --), assignment operators(=,+=,-=,*=,/=,%=,**=)
// comparison operators(==,===,!=,!==,>,<,>=,<=), logical operators(&&,||,!)

// Conditional Statements

let age1 = 25;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}

let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}
console.log(color);

// ternary operator (condition?true output: false output)
// age > 18 ? "adult": "child";

// // alert and prompt
// alert("Hello World");

// let name2 = prompt("Enter your name");
// console.log(name2);

// // promt if multiple or not

// let num = prompt("Enter a number");

// if (num % 5 === 0) {
//   console.log("Divisible by 5");
// } else {
//   console.log("Not divisible by 5");
// }

// Loops
// for loop
console.log("Hello");

for (let i = 1; i <= 5; i++) {
  console.log("Hello");
}

// calculate sum of first n numbers

let sum = 0;
let n = 5;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log(sum);

// while loop

let j = 1;
while (j <= 10) {
  console.log("true");
  j++;
}

// do while loop

let k = 10;
do {
  console.log("false");
  k++;
} while (k <= 20);

//for-of loop used for arrays and strings

let str = "hello";
let size = 0;
for (let i of str) {
  console.log("i = ", i);
  size++;
}
console.log(size);

// for-in loop used for objects

let student1 = {
  name: "Rahul",
  age: 21,
};

for (let key in student1) {
  console.log("key = ", key);
}

//practice

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0){
//     console.log(i);
//   }
// }

// Strings

let str2 = "MAnavverma";
let str3 = "helloworld";

console.log(str2.length);
console.log(str2[4]);

let obj = {
  item: "pen",
  price: 10,
};

// string interpolation
let result = `The cost of this ${obj.item} is ${obj.price}`;
console.log(result);

let specialsentence = `This is a template literal`;
console.log(typeof specialsentence);

// escape characters

console.log("Hello \n word \t Hello world");

// str.toUpperCase(), str.toLowerCase(), str.trim() to remove whitespaces from start and end
// str.slice(start, end-1), concat(str2), replace(searchVal, newVal) create new string to replace, charAt(index)

// Arrays in JS

let marks = [45, 56, 67, 87, 89, 98];
console.log(marks);
console.log(marks.length);
console.log(marks[4]);

// for(let i = 0; i < marks.length; i++){
//   console.log(marks[i]);
// }

// for-of loop over array

// for(let j of marks){
//   console.log(j);
// }

//array methods always start from small letters
// push() add to end, pop() delete from end and return, toString()
// concat(), unshift() add to start, shift() remove from start and return
// slice(), splice() change original array (start index, element count to delete, new element to add)

// Functions in java

function myFunction(msg) {
  console.log(msg);
}

myFunction("Hello this is a function");

// NaN is not a number error

function sum1(x, y) {
  let sum1 = x + y;
  return sum1;
}

sum1(3, 4);

// Arrow functions

function mul(a, b) {
  return a * b;
}

let arrowMul = (a, b) => {
  return a * b;
};

// pracitce

function countVowels(str) {
  //"Manav Verma"
  for (const char of str) {
  }
}

// For each loop for arrays

let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printVal(val){
//   console.log(val);
// });

// arr.forEach((val) => {
//   console.log(val);
// });

let nums = [2, 3, 4, 5];

// nums.forEach((num) => {
//   console.log(num * num);
// })

// let calcuSuare = (num) => {
//   console.log(num * num);

// };

// nums.forEach(calcuSuare);

// arr.map creates new array with result of some operation
// let newArr = nums.map((val) => {
//   return val + val;
// });

// console.log(newArr);

//filter methods

// let evenArr = nums.filter((val) => {
//   return val % 2 === 0;
// });

// console.log(evenArr);

// reduce methods

const output = nums.reduce((res, curr) => {
  return res + curr;
});

console.log(output);
