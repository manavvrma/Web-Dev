console.log("server runnng correctly");

// let fs = require("fs");
// let os = require("os");

// const user = os.userInfo();
// console.log(user.username);

// fs.appendFile("greeting.txt", "Hello World " + user.username + "!\n", () => {
//   console.log("file created");
// });
var _ = require("lodash");

const notes = require("./notes.js");

let age = notes.age;
console.log(age);

let sum = notes.addNumber(age, 20);
console.log(sum);

let data = ["person", "name", "age", "gender", 1, 2, 4];

let filteredData = _.uniq(data);
console.log(filteredData);

console.log(_.isString("person"));

const jsonString = '{"name":"Manav","age":"25","gender":"male"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);

const jsonObject2 = {
  name: "Manav",
  age: "25",
  gender: "male",
};

const json = JSON.stringify(jsonObject2);
console.log(json);
