console.log("Hey this is starting")

var a = 5;
a = a + 1;
let b = 6;
let c = "Manav";
let $a = 2;



// cant use nu,bers in start, can start with underscore and $

// console.log(a+b+c+$a);
// console.log(a+b);
// console.log(typeof a,typeof b, typeof c);


// const a1 = 6;
// a1 = a1 + 6;
// console.log(a1);
// not allowed

// var is globally scoped


{
    let a = 69;  // block variable , let has block scope, using let is good practice
    console.log(a);
}
console.log(a);

// Data Types

let x = "manavverma";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);



let o = {
    name: "Manav Verma",
    age: 21,
    college: "UPES",
    married: false
}

console.log(o);
o.salary = "100 million";
console.log(o);
o.salary = "500 million";
console.log(o);

