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

// setTimeout(hello, 2000); // timeout

// another way

// setTimeout(() => {
//   console.log("hello");
// }, 4000);

console.log("four");
console.log("five");

// callback fucntion passed as argument

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(10, 20, sum);

// callback hell (nested callback)

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data fetched", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//         getData(4);
//     });
//   });
// });

// promises (used to fix callback hell)

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   reject("sorry good bye");
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data fetched", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
//     // reject("sorry good bye");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise resolved", res);
// });

// promise.catch((err) => {
//   console.log("promise rejected", err);
// });

// promise chain

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("async function 1");
//       resolve("success");
//     }, 2000);
//   });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("async function 2");
//         resolve("success");
//       }, 2000);
//     });
//   }

// console.log("fetching data 1");

// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data 2");
//     let p2 = asyncFunc2();
//     p2.then ((res) => {

//     })
//     console.log(res)
// })

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data fetched", dataId);
//       resolve("success");

//     }, 1000);
//   });
// }

// //promsise chain

// getData(1).then((res) => {
//     return getData(2);
// }).then((res) => {
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// });

// async await

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data fetched");
//       resolve("success");
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api();
//   await api();
// }

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data fetched", dataId);
      resolve("success");
    }, 2000);
  });
}

async function getAllData() {
  console.log("getting data 1");
  await getData(1);
  console.log("getting data 2");
  await getData(2);
  console.log("getting data 3");
  await getData(3);
}

// IIFE immediatelydiately invoked function expression

// (function ()) ();

(async function () {
  console.log("getting data 1");
  await getData(1);
  console.log("getting data 2");
  await getData(2);
  console.log("getting data 3");
  await getData(3);
})();
