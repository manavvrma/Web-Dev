function nice(name) {
  console.log("Hello " + name + "!");
  console.log("Hello " + name + "!!");
  console.log("Hello " + name + "!!!");
  console.log("Hello " + name + "!!!!");
}

console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");

nice("Manav");

function sum(a, b) {
  //   console.log(a + b);
  return a + b;
}

result = sum(5, 6);

console.log("The answer is: " + result);

function threesum(a, b, c = 3) {
  //   console.log(a + b);
  return a + b + c;
}

console.log("The answer is: " + threesum(5, 6, 10));

const func1 = (x) => {
  console.log("This is a function", x);
};

func1(67);
func1(42);
func1(45);
