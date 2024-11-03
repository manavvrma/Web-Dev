const student = {
  fullName: "David Rayy",
  class: "VI",
  rollno: 12,
  marks: 90,
  printMarks: function () {
    console.log("marks = ", this.marks);
  },
};

student.printMarks();

let arr = ["banana", "apple", "pomegranate"];

console.log(arr);

// prototype

const employee = {
  calTax1() {
    console.log("fanum tax is 10%");
  },
  calTax2: function () {
    console.log("fanum tax is 10%");
  },
};

const helloBye = {
  salary: 5000000,
  calTax1() {
    console.log("fanum tax is 10%");
  },
};

helloBye.__proto__ = employee;

// classes

class ToyotaCar {
  constructor(brand, mileage) {
    console.log("constructor called");
    this.brandName = brand;
    this.mileageRate = mileage;
  }
  start() {
    console.log("Starting car");
  }
  stop() {
    console.log("Stopping car");
  }

  setBrand(brand) {
    this.brandName = brand;
  }
}

let fortuner = new ToyotaCar("fortuner", 10);
fortuner.setBrand("fortuner");
console.log(fortuner);

let lexus = new ToyotaCar("lexus", 20);

// inheritence

class Parent {
  hello() {
    console.log("hello");
  }
}

class Child extends Parent {}

let obj = new Child();

class Person {
  constructor() {
    this.species = "human";
  }

  eat() {
    console.log("eating");
  }

  sleep() {
    console.log("Sleeping");
  }
}

class Engineer extends Person {
  constructor(branch) {
    super();
    this.branch = branch;
  }

  work() {
    console.log("working");
  }
}

let manav = new Engineer("Cloud Engineering");

manav.work();

// callback promises and async await

// synchronous programming

console.log("One");
console.log("two");
console.log("three");

// asynchronous programming
//waiting time less

function hello() {
  console.log("hello");
}

setTimeout(hello, 2000); // timeout

// another way

setTimeout(() => {
  console.log("hello");
}, 4000);

console.log("four");
console.log("five  ");
