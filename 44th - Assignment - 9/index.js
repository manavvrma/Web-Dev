//Faulty Calculator

let random = Math.random();
let a = prompt("Enter Number 1");
let c = prompt("Enter operation");
let b = prompt("Enter Number 2");

let obj = {
  "+": "-",
  "-": "*",
  "*": "/",
  "/": "+",
};

if (random > 0.1) {
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  c = obj[c];
}
