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

// events

let btn = document.querySelector("#btn2");

btn.addEventListener("click", () => {
  console.log("Button clicked 1");
});

btn.addEventListener("click", () => {
  console.log("Button clicked 2");
});

const handler = () => {
  console.log("Button clicked 3");
};

btn.addEventListener("click", handler);

btn.addEventListener("click", () => {
  console.log("Button clicked 4");
});

btn.removeEventListener("click", handler);

// practice change mode light or dark

let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", () => {
  console.log("tried to change color");
});
