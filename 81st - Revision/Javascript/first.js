// console.log("Hello World");

// //console.log("Commment")

// /*console.log("Commment")
// console.log("Commment")
// console.log("Commment")
// console.log("Commment")*/

// var number = "Manav"; // use overall and can be changed

// number = 9;

// let name = "Manav"; // only used in the scope of its definition

// const pi = 3.14; //not chnagable

// //can skip semi colons but good praftice to write

// var a; // declaring
// var b = 2; //assigning
// console.log(a, b);

// a = 7;

// b = a;

// console.group(a, b);

// var a; //unintiallized, value not defined
// var a = 9; // initialised , vaklue defined

var a = 1;
var a = 3; //whatevers down will have priority
var b = 2;
var c = "hello"; // reference error
var d = "hello";
console.log(a, b, c, d);

a = a + 1;
console.log("a =", a, b, c, d);
// b = b + hello + 2; //refernce error
// console.log(a, b, c, d);
// b = hello + b + 2; //refernce error
// console.log(a, b, c, d);
b = "hello" + b + 2; // this will only concatinate
console.log("b= ", a, b, c, d);
c = c + "hello" + "hello" + 2;
console.log("c= ", a, b, c, d);
c = d + "hello" + 3;
console.log(a, b, c, d);

// variables are case sensitive gives refernece error

var thisIsAVariable = "variable";

var sum = 10 + 1; // same with - , *, /

//incrementing anf decremmenting

var a = 5;

a++; // a = a + 1;

a--;

var decimal = 0.65657;

decimal = decimal + 0.000056 + 0.345345 - 0.00001;

console.log(decimal);

//remainder

var r;

r = 12 % 3; // used for finding odd or even if remainder is 0

console.log(r);

//escaping literal quotes - \ before every \

var myStr = 'I am a sting in "double" qoutes';

//if too much double quotes starrt your striong with a single qoute or use `` if you want bth sinngle and doublr

// just with a backslash escape - ' " \ n - nedxtline

// length of string

var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

console.log(firstNameLength);

console.log((firstLetterOfFirstName = firstName[0]));

//strings are imtable - cant be chanegd

var v = "jello world";

v[0] = "h";

var lastLetter = v[v.length - 1];

console.log(lastLetter);
console.log(v.length);

function wordBlanks(noun, adj, verb, adverb) {
  var result = "";

  result = "The " + adj + noun + verb + "to the store " + adverb;

  return result;
}

console.log(wordBlanks("dog ", "big ", "ran ", "quickly "));
console.log(wordBlanks("bike ", "slow ", "flew ", "slowly "));

//arrray

var ourArray = ["John", 23];

// nested array

var ourArray = [
  ["John", 23, ["John", 23]],
  ["John", 23],
  ["John", 23],
  ["John", 23],
];

var ourData = ourArray[0][2][1];

console.log(ourData);

// arrays are immutable

ourArray[1] = 45;

console.log(ourArray);

// manipulate arrays with push and pop and shift adn unshift

var newArray = [
  ["John", 23, ["John", 23]],
  ["John", 23],
  ["John", 23],
  ["John", 23],
];

newArray.push(["manav", 17]);

console.log(newArray);

newArray.pop(["manav", 17]);

console.log(newArray);

var firstSectionOfArray = newArray.shift();

console.log(firstSectionOfArray);

console.log(newArray);

newArray.unshift("Hello");

console.log(newArray);

// functions

function myFunction() {
  console.log("hello");
}

myFunction();
myFunction();

// parameters

function sum(a, b) {
  console.log(a + b);
}

sum(4, 4);

// scope

var myGlobal = 10; //global can see it anywhere

function fun1() {
  oopsGlobal = 10;
  console.log(oopsGlobal);
}

function fun2() {
  var output = "";
  if (typeof myGlobal != undefined) {
    output += "myGlobal " + myGlobal;
  }
  if (typeof oopsGlobal != undefined) {
    output += "oopsGlobal " + oopsGlobal; // reference error
  }
  console.log(output);
}

fun1();
fun2();

// local scope

function myLocalScope() {
  var v = 5;
  console.log(v);
}

myLocalScope();

console.log(); //refernce error

//local takes place over global if same var name

var outerWear = "shirt";

function myOutfit() {
  var outerWear = "pants";
  return outerWear;
}

console.log(outerWear);
console.log(myOutfit());

// return in function

function sum(num) {
  return num - 1;
}

console.log(sum(7));

var sum = 0;
function mathsum(num) {
  return (num + 7) / 3;
}

sum = mathsum(6);

console.log(sum);

// boolean true and false

// if statemnets

function yourAge(num) {
  if (num >= 18) {
    return "Yes you are eligible to vote";
  }
  return "No you not are eligible to vote";
}

console.log(yourAge(23));

// strict equality sign

function test(num) {
  if (num === "rat") {
    return "strictly equal";
  }
  return "not";
}

console.log(test("rat"));

// strict not equality sign

function test(num) {
  if (num !== "rat") {
    return "strictly equal";
  }
  return "not";
}

console.log(test("rat"));

// logical and - &  or - ||

//else-if order - always think botyu the order as if first if is chesced ti wont go to the second one

function myNumber(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

console.log(myNumber(23));

// switch statements

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    case 5:
    case 6:
    case 7:
      answer = "sigma";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

console.log(caseInSwitch(8));

//Counting Cards
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }

  return count + " " + holdbet;
}

cc(3);
cc(4);
cc(2);
console.log(cc("J"));

// objects

var ourDog = {
  name: "Camper",
  "number of legs": "4",
  tails: 1,
};

var tails = ourDog.tails;
var legs = ourDog["number of legs"];

console.log(ourDog.tails);
console.log(legs);

ourDog.tails = "4";

console.log(ourDog.tails);

ourDog["bark"] = "woof";
ourDog.bark = "woof1";

console.log(ourDog);

function dogDetails(val) {
  var result = "";

  var ourDog = {
    name: "Camper",
    "number of legs": "4",
    tails: 1,
  };

  result = ourDog[val];

  return result;
}

console.log(dogDetails("number of legs"));

var obj = {
  name: "Manav Verma",
  age: 22,
  dob: "february",
};

function check(checkprop) {
  if (obj.hasOwnProperty(checkprop)) {
    return obj[checkprop];
  } else {
    return "Not found";
  }
}

console.log(check("dob"));

// SHERIYANS JS COURSE

// var let const

// console.log(a);

var a = 13;

// var - added in window, function scoped only, can declare again no error(redeclaration possible), no temporal dead zone

// let - block scoped, if inside funtion -> block -> then only in block, if declared again will give error, temporal dead zone(refernce error)

var b = 34;

b = 24;

// temporal deadzone - the area above the varialbe initialization

// hoisting - variables in js when made are divided into 2 parts - the decalre part goes up and initializeed part goes down

var a = 12;

// hoisting
var b = undefined; //line 1
a = 12; // line 19

let c = undefined;

console.log(c); // temporal dead zone

c = 12;
// var - hoist - undefined
// let - hoisdt - X
// const - hoisdt - X

// data types - primitives -  when copied yo get orginal value - string number boolean undefined null symbol bigint

let a = 23;
let b = a;

a = a + 3;

console.log(a, b);

//reference - when copied you get the referncwe of them - arrays , objects and fucntion - {} []()

let c = [1, 2, 3, 4];

let d = c;

d.pop();

console.log(c, d);

//null - when you dont want to give value
// undefined - js gives this when you dont put anything;
//symbol - unique immutable value - if one value changed later doesnt afect the original

let obj = {
  name: "Manav",
  uid: 12,
  email: "manav@gmail.com",
};

let u1 = Symbol("uid");

obj[u1] = "001";

console.log(obj);

//bigint - n after number, and whatevr you add will alos have n

let e = 4564636363563653n;

e = e + 100n;

e = e + 100n;

console.log(e);

let f = "3";

let g = 1;

console.log(f + g);
console.log(true + false);

console.log(true + null);
console.log(null + undefined);
console.log(!!undefined);
typeof console.log(true + undefined);

// loops

// for (start; end; change)

for (let i = 1; i < 11; i++) {
  console.log(i);
}

//while

//start
//while(end){
//   //code
//     change
//}lll

let j = 1;

while (j < 3) {
  console.log(j);
  j++;
}

// do while
let k = 3;
do {
  console.log(k);
  k++;
} while (k < 20);

let i = 10;

while (i > 0) {
  console.log(i);
  i--;
}

for (let j = 2; j < 21; j++) {
  if (j % 2 == 0) {
    console.log(j);
  } else continue;
}

console.log("stop");

let k1 = 1;

while (k1 < 16) {
  if (k1 % 2 !== 0) {
    console.log(k1);
  }
  k++;
}

// user input

let val1 = prompt("give a number:");

for (let i = 1; i <= val1; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else console.log(`${i} is odd`);
  ww;
}

// fat arrw functionl
let n = () => {};

// function decalration'

function abcd() {}

// function expresiion

let sub = function abcd() {};

// undefined , and adding them will give NaN

function add(v1, v2) {
  console.log(v1, v2);
}

add();

function summ(v1 = 2, v2 = 0) {
  // default parameters
  console.log(v1 + v2);
}

summ(3, 4);

function abcd(a, b, c, ...val) {
  //rest - if the ... function parameters mai lage and spread - jab array and object mai lage, it turns them into object
  console.log(a, b, c, val, a, b, c);
}

abcd(1, 2, 3, 4, 5, 6, 7, 7, 8);

// return in function means after return go back to function cal line

function abcde(v) {
  return 12 + v;
}

let val = abcde(8);

console.log(val); //12

// first class functions functions can be used as values for functions

// high order funcition - check notes

// pure vs impure versions

// pure - pure function se baahr ki value nahi badalti

let val2 = 12;

function func1() {
  console.log("hello");
}

// impure - opposite
function func2() {
  val2++; //this changes value of val2
}

//closures - function which return another function and use variables of the parent function

function func3() {
  let a = 15;
  return function () {
    console.log(a);
  };
}

//lexical scoping - a  only accessible in func4, b only accessible in func5, like this

function func4() {
  let a = 15;
  function func5() {
    let b = 16;
    function func6() {
      let c = 17;
    }
  }
}

//IIFE - immediately invoked

(function () {})();

// hoisting in function happens with no error but if we make function expression that new variable will not work in hoisting

//practice functio concepts

function func9(a, b, c, d) {
  console.log(a, b, c, d);
}
func9(1, 2, 3); // d will be undefined

let a = function () {
  return 15;
};

console.log(a());

// practive

function one(val) {
  //higher order functuion
  val();
}

one(function () {
  console.log("hey");
});

// closyure
let count = 1;
function outer() {
  return function () {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter();
counter();
