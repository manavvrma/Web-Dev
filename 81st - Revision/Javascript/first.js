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

// variables are case sensitive gives refernece error
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
