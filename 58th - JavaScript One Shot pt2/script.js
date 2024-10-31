console.log("Start of Part 2 of ONE SHOT");
// alert("Hello World");

// DOM elements (Document Object Model)

// console.dir to print document objects

console.dir(document.body.childNodes[1]);

document.body.childNodes[3].style.backgroundColor = "red";

document.getElementById("heading");

let headings = document.getElementsByClassName("heading2");

console.log(headings);
console.dir(headings);

let para = document.getElementsByTagName("p");
console.log(para);

// query selector

let elements = document.querySelector("p");
console.log(elements);

document.body.firstChild;

let div = document.querySelector("div");

let heading = document.querySelector("h1");

//attributres

let div1 = document.querySelector("div");
console.log(div1);

let id = div1.getAttribute("id");
console.log(id);
